//define default state
const defaultState = {
	state: 'READY', // READY, BUSY, REJECTED, TIMEOUT, ERROR, LOGGEDIN
	username: null,
  	password: null
}

const loginState = (state = defaultState, action) => {
	console.log(action.type);
	switch (action.type) {
		case 'LOGINOUT':
			return Object.assign({}, state, {
				state: 'READY',
				username: null,
				password: null
			});
		case 'LOGIN':
			return Object.assign({}, state, {
				state: 'BUSY',
				username: action.username,
				password: action.password
			});
		case 'REJECTED':
			return Object.assign({}, state, {
				state: 'REJECTED',
				username: null,
				password: null
			});
		case 'TIMEOUT':
			return Object.assign({}, state, {
				state: 'TIMEOUT',
				username: null,
				password: null
			});
		case 'LOGGEDIN':
			return Object.assign({}, state, {
				state: 'LOGGEDIN',
				username: action.username,
				password: action.password
			});
		default:
			return state
	}
};

export default loginState;