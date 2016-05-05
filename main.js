'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
var globalShortcut = require('global-shortcut');
var configuration = require('./configuration');
var ipc = require('ipc');
var fs = require ('fs');
var mainWindow = null;
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
            frame: false,
            height: 968,
            resizable: false,
            width: 1666
        });
        mainWindow.webContents.openDevTools();
        mainWindow.loadUrl('file://' + __dirname + '/ele/index.html');
});

ipc.on('getRootData', ()=> {
        fs.readFile('data.json', function (err, data) {
        allFiles = data = eval(data.toString());
        children = data.filter(item=>item.parent=='');
        path.length = 0;
        path.push({key:'',value:{}});
        mainWindow.webContents.send('receive', currentDirectory,children,parent,path);
        });
});

ipc.on('selectChildren', (event,selectItem) => {
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



