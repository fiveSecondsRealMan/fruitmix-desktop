const defaultDirectory = {
	state: 'READY', // READY, BUSY, REJECTED, ERROR
	directory: {},
	children:[],
	parent: [],
	path:[],
	selectAll:false, 
	position:[],
	menu:{show:false,objArr:[]},
	detail:[]
}

const directory = (state=defaultDirectory,action)=> {
	switch (action.type) {
		case 'SET_DIRECTORY':
			let position = action.children.map((item,index)=>{
				return {top:index*51+58+48+8+64,bottom:(index+1)*51+58+48+8+64}
			})
			return Object.assign({}, state,{directory:action.directory,children:action.children,parent:action.parent,path:action.path,position:position});
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
			if (action.objArr)  {
				//open menu
				if (action.selected) {
					//click item has been selected 
					//put it into menu
					return Object.assign({},state,{menu:{show:true,objArr:action.objArr,x:action.x,y: action.y}});	
				}else {
					//click item is not selected
					//set all children item state of checked to false and select click item
					let children = state.children.map((item,index)=>{
						if (item.uuid == action.objArr[0].uuid) {
							return Object.assign({},item,{checked:true});
						}else {
							 return Object.assign({},item,{checked:false});
						}
					});
					return Object.assign({},state,{children:children,menu:{show:true,objArr:action.objArr,x:action.x,y: action.y}});
				}
				
			}else {
				//close menu
				return Object.assign({},state,{menu:{show:false,obj:[]}});
			}
		case 'SET_DETAIL':
			return Object.assign({},state,{detail:action.objArr});
		default:
			return state
	}
}

export default directory;