const defaultDirectory = {
	state: 'READY', // READY, BUSY, REJECTED, ERROR
	directory: {},
	children:[],
	parent: []
}

const directory = (state=defaultDirectory,action)=> {
	switch (action.type) {
		case 'SET_DIRECTORY':
			return Object.assign({}, state, action);
		default:
			return state
	}
}

export default directory;