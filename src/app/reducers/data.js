const defaultDirectory = {
	state: 'READY', // READY, BUSY, REJECTED, ERROR
	directory: {},
	children:[],
	parent: [],
	path:[],
	selectAll:false
}

const directory = (state=defaultDirectory,action)=> {
	switch (action.type) {
		case 'SET_DIRECTORY':
			return Object.assign({}, state, action);
		case 'SELECT_CHILDREN':
			var newState = state.children.map((item,index)=>{
				return index == action.rowNumber?Object.assign({},item,{checked:!item.checked}):item
			});
			return Object.assign({},state,{children:newState})
		case 'SELECT_ALL_CHILDREN':
			return Object.assign({},state,{selectAll:!state.children});
		default:
			return state
	}
}

export default directory;