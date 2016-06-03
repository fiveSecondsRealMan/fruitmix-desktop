'use strict';
//corn module

const electron = require('electron');
const {app, BrowserWindow, ipcMain} = require('electron');

var configuration = require('./configuration');
var request = require('request');
var http = require('http');
var fs = require ('fs');
var stream = require('stream')
var mainWindow = null;

var server = 'http://211.144.201.201:8888';
server ='http://192.168.5.132:80';
//user
var user = {};
//files
var allFiles = [];
var tree = {};
var map = new Map();
//share
var shareFiles = [];
var shareTree = [];
var shareMap = new Map();
//directory
var currentDirectory = {};
var children = [];
var parent = {};
var path = [];
var tree = {};

//app ready and open window
app.on('ready', function() {
	mainWindow = new BrowserWindow({
		frame: true,
		height: 768,
		resizable: false,
		width: 1366
	});
	mainWindow.webContents.openDevTools();
	mainWindow.loadURL('file://' + __dirname + '/ele/index.html');
});
//get all user information
ipcMain.on('login',function(event,username,password){
	login().then((data)=>{
		user = data.find((item)=>{return item.username == username});
		return getToken(user.uuid,password);
	}).then((token)=>{
		user.token = token.token;
		user.type = token.type;
		return getAllUser();
	}).then((users)=>{
		user.allUser = users;
		mainWindow.webContents.send('loggedin',user);
	}).catch((err)=>{
		mainWindow.webContents.send('loginFailed');
	});
});
//get all files
ipcMain.on('getRootData', ()=> {
	getFiles().then((data)=>{
		//set allfiles
		allFiles = data;
		allFiles.forEach((item)=>{item.share = false});
		// set children
		children = data.filter(item=>item.parent=='');
		children = children.map((item)=>Object.assign({},{checked:false},item));
		//set path
		path.push({key:''});
		//separate shared files from allfiles
		classifyShareFiles();
		tree = getTree(allFiles,'file');
		//send to client
		mainWindow.webContents.send('receive', currentDirectory,children,parent,path);
		mainWindow.webContents.send('setTree',tree[0]);
	});
});

ipcMain.on('enterChildren', (event,selectItem) => {

	console.log('...');
	console.log(selectItem);
	//parent
	var parentUUID = selectItem.parent;
	if (parentUUID != '') {
		for (let item of allFiles) {
			if (item.uuid == parentUUID) {
				parent = item;
			}
		}
	}
	//currentDirectory
	currentDirectory = selectItem;
	//children
	children.length = 0;
	children = getChildren(selectItem);
	console.log(children);
	//path
	try {
		// path.length = 0;
		// let obj = map.get(selectItem.uuid);
		// console.log('///');
		// console.log(obj);
		// getPath(obj);
		// console.log('============>');
		// console.log(path);
	}catch(e) {
		console.log(e);        
		path.length=0;
	}finally {
		mainWindow.webContents.send('receive',currentDirectory,children,parent,path);
	}
});

ipcMain.on('getFile',(e,uuid)=>{
	getFile(uuid).then((data)=>{
		mainWindow.webContents.send('receiveFile',data);
	})
});

ipcMain.on('uploadFile',(e,file)=>{

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
			uuid = uuid.slice(1,uuid.length-1);
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

ipcMain.on('upLoadFolder',(e,name,dir)=>{


	var r = request.post(server+'/files/'+dir.uuid+'?type=folder',{
		headers: {
			Authorization: user.type+' '+user.token
		},
	},function (err,res,body) {
		if (!err && res.statusCode == 200) {
			console.log('res');
			var uuid = body;
			uuid = uuid.slice(1,uuid.length-1);
			modifyFolder(name,dir,uuid);
		}else {
			console.log('err');
			console.log(err);
		}
	});
	var form = r.form();
	form.append('foldername',name);
});

ipcMain.on('refresh',(e,uuid)=>{
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

ipcMain.on('delete',(e,objArr,dir)=>{
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

ipcMain.on('rename',(e,uuid,name,oldName)=>{
	rename(uuid,name,oldName).then(()=>{
		console.log('ok');
	})
})

ipcMain.on('download',(e,file)=>{
	download(file).then(data=>{
		console.log(file.attribute.name + ' download success');
	});
})

ipcMain.on('close-main-window', function () {
    app.quit();
});

ipcMain.on('create-new-user',function(err,u,p,e){
	createNewUser(u,p,e).then(()=>{
		console.log('register success');
	}).catch(()=>{
		console.log('failed');
	});
});

ipcMain.on('share',function(err,files,users){
	console.log('ipc enter');
	files.forEach((item)=>{
		console.log('for each');
		share(item,users).then(()=>{
			console.log('then le');
		});
	});
});

function login() {
	let login = new Promise((resolve,reject)=>{
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
		request.get(server+'/token',{
			'auth': {
			    'user': uuid,
			    'pass': password,
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
function getAllUser() {
	var promise = new Promise((resolve,reject)=>{
		var options = {
			method: 'GET',
			url: server+'/users',
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
	return promise
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
function getChildren(selectItem) {
	let uuid = selectItem.children;
	let children = [];
	allFiles.forEach((item)=>{
		if (item.uuid == uuid) {
			children.push(item);
		}
	});
	return children;
}
function getPath(obj) {
	console.log('-_-');
	console.log(obj);
	path.unshift({key:obj.name,value:obj});
	console.log('^_^');
	console.log(path);
	if (obj.parent == undefined || obj.parent == '') {
		path.unshift({key:'',value:{}});
		return; 
	}else {
		getPath(obj.parent);
	}
}
function classifyShareFiles() {
	let userUUID = user.uuid;
	allFiles.forEach((item,index)=>{
		// console.log('************************************');
		// console.log('forEach');
		// owner is user ?
		if (item.permission.owner[0] != userUUID ) {
			// console.log('is not user');
			let result = item.permission.readlist.find((readUser)=>{
				return readUser == userUUID
			});
			if (result != undefined) {
				//file is shared to user
				// console.log('is shared file');
				shareFiles.push(item);
				allFiles[index].share = true;
			}else {
				//is file included in shareFolder?
				// console.log('find parent');
				var findParent = function(i) {
					if (i.parent == '') {
						//file belong to user but is not upload by client
						return
					}
					let re = allFiles.find((p)=>{
						return i.parent == p.uuid
					});
					if (re.parent == '') {
						return;
					}
					let rer = re.permission.readlist.find((parentReadItem,index)=>{
						return parentReadItem == userUUID
					})
					if (rer == undefined) {
						//find parent again
						findParent(re);
					}else {
						shareFiles.push(item);
						allFiles[index].share = true;
					}
				}(item);
			}
		}
	})
}
function getTree(f,type) {
	let files = [];
	f.forEach((item)=>{
		if ((type == 'file' && !item.share)||(type == 'share' && item.share)) {
			files.push({
				uuid:item.uuid,
				name:item.attribute.name,
				parent: item.parent,
				children: item.children,
				share:item.share
			});
		}
	});
	let tree = files.map((node,index)=>{
		node.parent = files.find((item1)=>{return (item1.uuid == node.parent)});
		node.children = files.filter((item2)=>{return (item2.parent == node.uuid)});
		return node
	});
	if (type == 'share') {
		tree.forEach((item)=>{
			shareMap.set(item.uuid,item);
		});
	}else {
		tree.forEach((item)=>{
			map.set(item.uuid,item);
		});
	}
	return tree;	
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
		var options = {
			method: 'patch',
			url: server+'/files/'+uuid,
			headers: {
					Authorization: user.type+' '+user.token
				}
		};

		function callback (err,res,body) {
			console.log(res);
				if (!err && res.statusCode == 200) {
					console.log('res');
					resolve(body);
				}else {
					console.log('err');
					console.log(err);
					reject(err)
				}
			}

		var r = request(options,callback);
		var form = r.form();
		form.append('filename',name);
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
			},
			type: 'file'
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
			console.log('1');
			item.children.push(folderuuid);
			break;
		}
	}
	var folder = {
		uuid:folderuuid,
		path: dir.path+'/'+name,
		parent: dir.uuid,
		hash:dir.path+'/'+name,
		checked: false,
		attribute: {
			name:name,
			size: 4096,
			changetime: "2016-04-25T10:31:52.089Z",
			createtime: "2016-04-25T10:31:52.089Z",
		},
		type: 'folder',
		dir:dir,
		children:[]
	}
	allFiles.push(folder);
	if (currentDirectory.uuid == dir.uuid) {
		console.log('2');
		children.push({
			uuid:folderuuid,
			path: dir.path+'/'+name,
			parent: dir.uuid,
			hash:dir.path+'/'+name,
			checked: false,
			attribute: {
				name:name,
				size: 4096,
				changetime: "2016-04-25T10:31:52.089Z",
				createtime: "2016-04-25T10:31:52.089Z",
			},
			type: 'folder',
			dir:dir,
			children:[]
		});
	}
	console.log(children)
	mainWindow.webContents.send('uploadSuccess',folder,children)
}
function createNewUser(username,password,email) {
	let promise = new Promise((resolve,reject)=>{
		var options = {
			headers: {
				Authorization: user.type+' '+user.token
			},
			form: {username:username,password:password,email:email,isAdmin:false,isFirstUser:false}
		};
		function callback (err,res,body) {
			console.log(res);
			if (!err && res.statusCode == 200) {
				console.log('res');
				resolve(body);
			}else {
				console.log('err');
				console.log(err);
				reject(err)
			}
		};
		request.post(server+'/users/',options,callback);
	});
	return promise;
}
function share(file,users) {
	var s = new Promise((resolve,reject)=>{
		console.log(users);
		var y = [];
		var options = {
			headers: {
				Authorization: user.type+' '+user.token
			},
			form: {readlist:JSON.stringify(users),writelist:JSON.stringify(y)}
		}
		function callback (err,res,body) {
			console.log(res);
			if (!err && res.statusCode == 200) {
				console.log('res');
				resolve(body);
			}else {
				console.log('err');
				console.log(err);
				reject(err)
			}
		};
		console.log('333');
		request.patch(server+'/files/'+file.uuid+'?type=permission',options,callback);
	});
	return s;
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



