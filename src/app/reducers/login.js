//define default state
const defaultState = {
	state: 'READY', // READY, BUSY, REJECTED, TIMEOUT, ERROR, LOGGEDIN
  	obj: {},
  	device: [],
  	findDevice: false,
  	addDevice: false,
  	deviceUsedRecently: ''
}

const loginState = (state = defaultState, action) => {
	switch (action.type) {
		case 'LOGINOUT':
			return Object.assign({}, state, {
				state: 'READY'
			});
		case 'LOGIN':
			return Object.assign({}, state, {
				state: 'BUSY'
			});
		case 'LOGIN_OFF':
			return Object.assign({}, state, {state: 'READY'});
		case 'REJECTED':
			return Object.assign({}, state, {
				state: 'REJECTED'
			});
		case 'TIMEOUT':
			return Object.assign({}, state, {
				state: 'TIMEOUT'
			});
		case 'LOGGEDIN':
			var userListArr = action.obj.allUser.map((item)=>{return Object.assign({},item,{checked:false})});
			action.obj.allUser = userListArr;
			return Object.assign({}, state, {
				state: 'LOGGEDIN',
				obj:action.obj
			});
		case "CHECK_USER":
			var checkedUserArr = state.obj.allUser.map((item)=>{
				if (item.uuid == action.uuid) {
					return Object.assign({},item,{checked:action.b});
				} else {
					return item
				}
			});
			var userObj = Object.assign({},state.obj,{allUser:checkedUserArr});
			return Object.assign({},state,{obj:userObj});
		case 'CANCEL_USER_CHECK':
			var cancelUserArr = state.obj.allUser.map((item)=>{
				item.checked = false;
				return item
			});
			return Object.assign({},state,{obj:Object.assign({},state.obj,{allUser:cancelUserArr})});
		case 'SET_DEVICE':
			return Object.assign({},state,{device: action.device});
		case 'TOGGLE_DEVICE':
			return Object.assign({},state,{findDevice:!state.findDevice});
		case 'TOGGLE_ADD_DEVICE':
			return Object.assign({},state,{addDevice:!state.addDevice});
		case 'SET_DEVICE_USED_RECENTLY':
			var i = state.device.findIndex(item=>{
				return item.addresses[0] == action.ip
			});
			if (i != -1) {
				state.device[i].active = true;
			}
			return Object.assign({},state,{deviceUsedRecently:action.ip});
		case 'SET_USER':
			return Object.assign({},state,{obj:action.user});
		default:
			return state
	}
};

export default loginState;