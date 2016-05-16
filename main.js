'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var globalShortcut = require('global-shortcut');
var configuration = require('./configuration');
var request = require('superagent');
var ipc = require('ipc');
var fs = require ('fs');
var mainWindow = null;
var server = '211.144.201.201:8888';
var user = {};
var allFiles = null;
var currentDirectory = {};
var children = [];
var parent = {};
var path = [];


app.on('ready', function() {
	if (!configuration.readSettings('shortcutKeys')) {
		configuration.saveSettings('shortcutKeys', ['ctrl', 'shift']);
	}
	mainWindow = new BrowserWindow({
		frame: true,
		height: 968,
		resizable: false,
		width: 1666
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
	// fs.readFile('data.json', function (err, data) {
	// 	allFiles = data = eval(data.toString());
	// 	children = data.filter(item=>item.parent=='');
	// 	children = children.map((item)=>Object.assign({},{checked:false},item));
	// 	path.length = 0;
	// 	path.push({key:'',value:{}});
	// 	mainWindow.webContents.send('receive', currentDirectory,children,parent,path);
	// });

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

ipc.on('uploadFile',(e,file,obj)=>{
	// var data = fs.readFileSync(file);
	// request
	// 	.post(server+'/files/'+currentDirectory.uuid)
	// 	.set('Authorization',user.type+' '+user.token)
	// 	.attach('file',file)
	// 	.end((err,res)=>{
	// 		if(res.ok) {
	// 			console.log('res');
	// 			mainWindow.webContents.send('sendMessage',res)
	// 		}else{
	// 			console.log('err');
	// 			console.log(err);
	// 		}
	// 	});
	mainWindow.webContents.send('sendMessage',file);
	setTimeout(()=>{
		for (let item of allFiles) {
			if (item.uuid == obj.uuid) {
				item.children.push(file.path);
			}
		}
		allFiles.push({
			path: obj.path+'/'+file.name,
			parent: obj.uuid,
			hash:file.path,
			checked: false,
			attribute: {
				name:file.name,
				size:file.size	,
				changetime: "2016-04-25T10:31:52.089Z",
      				createtime: "2016-04-25T10:31:52.089Z",
			}
			
		});

		if (currentDirectory.uuid == obj.uuid) {
			console.log(file);
			children.push({
				path: obj.path+'/'+file.name,
				parent: obj.uuid,
				hash:file.path,
				checked: false,
				attribute: {
					name:file.name,
					size:file.size	,
					changetime: "2016-04-25T10:31:52.089Z",
	      				createtime: "2016-04-25T10:31:52.089Z",
				}
			});
		}
		mainWindow.webContents.send('uploadSuccess',file,obj,children)
	},2000);
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

function login(username,password) {
	let login = new Promise((resolve,reject)=>{
		request.get(server+'/login').end((err,res)=>{
			if (res.ok) {
				resolve(eval(res.body));
			}else {
				reject(err);
			}
		});
	});
	return login;
}
function getToken(uuid,password) {
	let a = new Promise((resolve,reject)=>{
		request.get(server+'/token').auth(uuid,'123456' ).end((err,res)=>{
			if (res.ok) {
				resolve(eval(res.body));
			}else {
				reject(err);
			}
		});
	});
	return a;
}

function getFile(uuid) {
	var file = new Promise((resolve,reject)=>{
		request
			.get('192.168.5.132/files/'+uuid)
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
		request
			.get('192.168.5.132/files')
			.set('Authorization',user.type+' '+user.token)
			.end((err,res)=>{
				if(res.ok) {
					resolve(eval(res.body));
				}else {
					reject(err);
				}
			});
	});
	return files;
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



