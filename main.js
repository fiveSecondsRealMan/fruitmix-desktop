'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var globalShortcut = require('global-shortcut');
var configuration = require('./configuration');
var request = require('request');
var http = require('http');
var ipc = require('ipc');
var fs = require ('fs');
var stream = require('stream')
var mainWindow = null;
var server = '211.144.201.201:8888';
server ='http://192.168.5.132:80';
var user = {};
var allFiles = null;
var currentDirectory = {};
var children = [];
var parent = {};
var path = [];


app.on('ready', function() {
	// var options = {
	// 	hostname: '211.144.201.201',
	// 	port: 8888,
	// 	path: '/',
	// 	method: 'GET'
	// };
	// var req = http.request(options,function(res){
	// 	console.log('status: ' + res.statusCode);
	// 	console.log('HEADERS: ' + JSON.stringify(res.headers));
	// 	res.setEncoding('utf8');
	// 	res.on('data',function(chunk) {
	// 		console.log(chunk);
	// 	});
	// })
	// req.end();


	if (!configuration.readSettings('shortcutKeys')) {
		configuration.saveSettings('shortcutKeys', ['ctrl', 'shift']);
	}
	mainWindow = new BrowserWindow({
		frame: true,
		height: 768,
		resizable: false,
		width: 1366
	});
	mainWindow.webContents.openDevTools();
	mainWindow.loadUrl('file://' + __dirname + '/ele/index.html');
});

ipc.on('login',function(event,username,password){
	login().then((data)=>{
		user = Object.assign({},user,data[0]);
		return getToken(data[0].uuid);
	}).then((token)=>{
		user = Object.assign({},user,token);
		mainWindow.webContents.send('loggedin',user);
	});
});

ipc.on('getRootData', ()=> {
	getFiles().then((data)=>{
		allFiles = data;
		children = data.filter(item=>item.parent=='');
		children = children.map((item)=>Object.assign({},{checked:false},item));
		path.length = 0;
		path.push({key:'',value:{}});
		mainWindow.webContents.send('receive', currentDirectory,children,parent,path);	
	});


});

ipc.on('enterChildren', (event,selectItem) => {
	//parent
	var parentUUID = selectItem.parent;
	var parentObj = {};
	if (parentUUID) {
		for (let item of allFiles) {
			if (item.uuid == parentUUID) {
				parentObj = item;
			}
		}
	}
	parent = Object.assign({},parentObj);
	//currentDirectory
	currentDirectory = Object.assign({},selectItem);
	//children
	children.length = 0;
	for (let item of allFiles) {
		if (item.parent == selectItem.uuid) {
			children.push(item);
		}
	}
	children = children.map((item)=>Object.assign({},{checked:false},item));
	//path
	try {
		path.length = 0;
		var pathArr = selectItem.path.split('/');
		var pathObj = [];
		var getParentPath = function (obj) {
			pathObj.unshift(obj);
			if (obj.parent) {
				for (let item of allFiles) {
					if (item.uuid == obj.parent) {
						getParentPath(item);
					}
				}
			}else {
				pathObj.unshift({});
			}
		}
		getParentPath(selectItem);
		for (let i = 0;i<pathArr.length;i++) {
			path.push({key:pathArr[i],value:pathObj[i]});
		}
	}catch(e) {
		console.log(e);        
		path.length=0;
	}finally {
		mainWindow.webContents.send('receive',currentDirectory,children,parent,path);
	}
});

ipc.on('getFile',(e,uuid)=>{
	getFile(uuid).then((data)=>{
		mainWindow.webContents.send('receiveFile',data);
	})
});

ipc.on('uploadFile',(e,file)=>{
	var body = 0;
	var t = 0;
	var interval = setInterval(function() {
		var upLoadProcess = body/file.size;
		mainWindow.webContents.send('refreshStatusOfUpload',file,upLoadProcess);
		if (upLoadProcess >= 1) {
			clearInterval(interval);
		}
	},500);
	var transform = new stream.Transform({
		transform: function(chunk, encoding, next) {
			body+=chunk.length;
			this.push(chunk)
			next();
		}
	})

	function callback (err,res,body) {
		console.log('err');
		console.log(err);
		console.log('body');
		console.log(body);
		if (!err && res.statusCode == 200) {
			var uuid = body;
			modifyData(file,uuid);
		}else {
			console.log(err);
			reject(err)
		}
	}

	var fakeserver = 'http://127.0.0.1:23456'

	var r = request.post(server+'/files/'+currentDirectory.uuid+'?type=file',{
		headers: {
			Authorization: user.type+' '+user.token
		},
	},callback)

	var form = r.form();
	var tempStream = fs.createReadStream(file.path).pipe(transform)
	tempStream.path = file.path
	form.append('file', tempStream);	
});

ipc.on('upLoadFolder',(e,name,dir)=>{
	request
		.post(server+'/files/'+dir.uuid+'?type=folder')
		.set('Authorization',user.type+' '+user.token)
		.send({foldername:name})
		.end((err,res)=>{
			if (res.ok) {
				console.log('res');
				console.log(res);
				modifyFolder(name,dir,res.body);
			}else {
				console.log('err');
				console.log(err);
			}
		})
});

ipc.on('refresh',(e,uuid)=>{
	getFiles().then((data)=>{
		allFiles = data;
		//children
		children.length = 0;
		for (let item of allFiles) {
			if (item.parent == uuid) {
				children.push(item);
			}
		}
		children = children.map((item)=>Object.assign({},{checked:false},item));
		mainWindow.webContents.send('refresh',children);
	});
});

ipc.on('delete',(e,objArr,dir)=>{
	for (let item of objArr) {
		deleteFile(item).then(()=>{
			//delete file in data
			let index = allFiles.findIndex((value)=>{
				return value.uuid == item.uuid
			})
			if (index != -1) {
				allFiles.splice(index,1);
			}
			//delete file in children
			let index2 = children.findIndex((value)=>value.uuid == item.uuid);
			if (index2 != -1) {children.splice(index2,1)}
			
			mainWindow.webContents.send('deleteSuccess',item,children,dir);
		});
	}
});

ipc.on('rename',(e,uuid,name,oldName)=>{
	rename(uuid,name,oldName).then(()=>{
		console.log('ok');
	})
})

ipc.on('download',(e,file)=>{
		download(file).then(data=>{
			console.log(file.attribute.name + ' download success');
			// var stream = fs.createWriteStream(file.attribute.name);
			// data.pipe(stream);
		});
})

function login(username,password) {
	let login = new Promise((resolve,reject)=>{
		// request.get(server+'/login').end((err,res)=>{
		// 	if (res.ok) {
		// 		resolve(eval(res.body));
		// 	}else {
		// 		reject(err);
		// 	}
		// });

		request(server+'/login',function(err,res,body){
			if (!err && res.statusCode == 200) {
				resolve(eval(body));
			}else {
				reject(err)
			}
		})
	});
	return login;
}
function getToken(uuid,password) {
	let a = new Promise((resolve,reject)=>{
		// request.get(server+'/token').auth(uuid,'123456' ).end((err,res)=>{
		// 	if (res.ok) {
		// 		resolve(eval(res.body));
		// 	}else {
		// 		reject(err);
		// 	}
		// });

		request.get(server+'/token',{
			'auth': {
			    'user': uuid,
			    'pass': '123456',
			    'sendImmediately': false
			  }
		},function(err,res,body) {
			if (!err && res.statusCode == 200) {
				resolve(JSON.parse(body));
			}else {
				reject(err)
			}
		});
	});
	return a;
}

function getFile(uuid) {
	var file = new Promise((resolve,reject)=>{
		request
			.get(server+'/files/'+uuid)
			.set('Authorization',user.type+' '+user.token)
			.end((err,res)=>{
				if (res.ok) {
					resolve(eval(res.body));
				}else {
					reject(err);
				}
			});
	});
	return file;
}

function getFiles() {
	var files = new Promise((resolve,reject)=>{ 
			var options = {
				method: 'GET',
				url: server+'/files',
				headers: {
					Authorization: user.type+' '+user.token
				}

			};

			function callback (err,res,body) {
				if (!err && res.statusCode == 200) {
					resolve(JSON.parse(body));
				}else {
					reject(err)
				}
			}

			request(options,callback);
	});
	return files;
}

function deleteFile(obj) {
	var deleteF = new Promise((resolve,reject)=>{
			var options = {
				method: 'delete',
				url: server+'/files/'+obj.uuid,
				headers: {
					Authorization: user.type+' '+user.token
				}

			};

			function callback (err,res,body) {
				if (!err && res.statusCode == 200) {
					console.log('res');
					console.log(body)
					resolve(JSON.parse(body));
				}else {
					console.log('err');
					console.log(res);
					console.log(err);
					reject(err)
				}
			}

			request(options,callback);

	});
	return deleteF;
}

function rename(uuid,name,oldName) {
	let rename = new Promise((resolve,reject)=>{
		request
			.patch(server+'/files/'+uuid)
			.set('Authorization',user.type+' '+user.token)
			.send({filename:name})
			.end((err,res)=>{
				if (res.ok) {
					console.log('res');
				}else {
					console.log(err);
				}
			})
	});
	return rename;
}

function download(item) {
	var download = new Promise((resolve,reject)=>{
			var body = 0;
			var options = {
				method: 'GET',
				url: server+'/files/'+item.uuid+'?type=media',
				headers: {
					Authorization: user.type+' '+user.token
				}
			};

			function callback (err,res,body) {
				if (!err && res.statusCode == 200) {
					console.log('res');
					// console.log(res);
					resolve(body);
				}else {
					// reject(err)
					console.log('err');
					console.log(err);
				}
			}
			var stream = fs.createWriteStream('download/'+item.attribute.name);

			var interval = setInterval(function() {
				var upLoadProcess = body/item.attribute.size;
				console.log(upLoadProcess);
				mainWindow.webContents.send('refreshStatusOfDownload',item,upLoadProcess);
				if (upLoadProcess >= 1) {
					resolve();
					clearInterval(interval);
				}
			},500);

			request(options,callback).on('data',function(d){
				body += d.length;
			}).pipe(stream);
			
			var transform = new stream.Transform({
				transform: function(chunk, encoding, next) {
					body+=chunk.length;
					this.push(chunk)
					next();
				}
			});	
	})
	return download;
	}

function modifyData(file,uuid) {
	//modify allfiles
		for (let item of allFiles) {
			if (item.uuid == file.dir.uuid) {
				item.children.push(uuid);
				break;
			}
		}

		var f= {
			uuid:uuid,
			path: file.dir.path+'/'+file.name,
			parent: file.dir.uuid,
			hash:file.path,
			checked: false,
			attribute: {
				name:file.name,
				size:file.size	,
				changetime: "2016-04-25T10:31:52.089Z",
      				createtime: "2016-04-25T10:31:52.089Z",
			}
		}
		allFiles.push(f);
		if (currentDirectory.uuid == file.dir.uuid) {
			children.push(f);
		}
		mainWindow.webContents.send('uploadSuccess',file,children)
}
	
	function modifyFolder(name,dir,folderuuid) {
		for (let item of allFiles) {
			if (item.uuid == dir.uuid) {
				item.children.push(folderuuid);
				break;
			}
		}
		let obj = {
			uuid:folderuuid,
			path: dir.path+'/'+name,
			parent: dir.uuid,
			hash:dir.path+'/'+name,
			checked: false,
			attribute: {
				name:name,
				size:null	,
				changetime: "2016-04-25T10:31:52.089Z",
      				createtime: "2016-04-25T10:31:52.089Z",
			}
		}
		allFiles.push(obj);
		if (currentDirectory.uuid == dir.uuid) {
			children.push(obj);
		}
		mainWindow.webContents.send('uploadSuccess',name,dir,children)
	}



// function setGlobalShortcuts() {
//     globalShortcut.unregisterAll();

//     var shortcutKeysSetting = configuration.readSettings('shortcutKeys');
//     var shortcutPrefix = shortcutKeysSetting.length === 0 ? '' : shortcutKeysSetting.join('+') + '+';
//     console.log(shortcutPrefix);

//     globalShortcut.register(shortcutPrefix + '1', function () {
//         mainWindow.webContents.send('global-shortcut', 0);
//     });
//     globalShortcut.register(shortcutPrefix + '2', function () {
//         mainWindow.webContents.send('global-shortcut', 1);
//     });
// }

// ipc.on('close-main-window', function () {
//     app.quit();
// });

// ipc.on('open-settings-window', function () {
//     if (settingsWindow) {
//         return;
//     }

//     settingsWindow = new BrowserWindow({
//         frame: false,
//         height: 768,
//         resizable: false,
//         width: 1366
//     });

//     settingsWindow.webContents.openDevTools();
//     settingsWindow.loadUrl('http://localhost:8000/#/settings');

//     settingsWindow.on('closed', function () {
//         settingsWindow = null;
//     });
// });

// ipc.on('close-settings-window', function () {
//     if (settingsWindow) {
//         settingsWindow.close();
//     }
// });

// ipc.on('set-global-shortcuts', function () {
//     setGlobalShortcuts();
// });



