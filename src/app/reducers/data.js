const defaultDirectory = {
	state: 'READY', // READY, BUSY, REJECTED, ERROR
	directory: {},
	children:[],
	parent: [],
	path:[],
	selectAll:false,
	menu:{show:false,obj:{}}
}

const directory = (state=defaultDirectory,action)=> {
	switch (action.type) {
		case 'SET_DIRECTORY':
			return Object.assign({}, state, action);
		case 'SELECT_CHILDREN':
			var allSelected = true;
			//setSelectedChildren
			var newState = state.children.map((item,index)=>{
				return index == action.rowNumber?Object.assign({},item,{checked:!item.checked}):item
			});
			//is all children selected?
			for (let item of newState) {
				if (item.checked == false) {
					allSelected = false;
				}
			}
			return Object.assign({},state,{children:newState,selectAll:allSelected})
		case 'SELECT_ALL_CHILDREN':
			//setSelect
			let children = state.children.map((item,index)=> {
				return state.selectAll?Object.assign({},item,{checked:false}):Object.assign({},item,{checked:true});
			});
			return Object.assign({},state,{children:children,selectAll:!state.selectAll});
		case 'TOGGLE_MENU':
			if (action.obj)  {
				//open
				return Object.assign({},state,{menu:{show:true,obj:action.obj,x:action.x,y: action.y}});
			}else {
				//close
				return Object.assign({},state,{menu:{show:false,obj:{}}});
			}
			
		default:
			return state
	}
}

export default directory;