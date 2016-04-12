var ipc = require("ipc");

function close() {
	console.log('close');
	ipc.send('close-main-window');
}