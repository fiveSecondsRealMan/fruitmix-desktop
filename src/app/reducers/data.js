const defaultDirectory = {
	state: 'READY', // READY, BUSY, REJECTED, ERROR
	directory: {},
	children:[],
	parent: [],
	path:[],
	selectAll:false, 
	position:[],
	menu:{show:false,objArr:[]},
	detail:[],
	upload:[],
	dowload: [],
	dialogOfFolder: false,
	snackbar: '',
}

const directory = (state=defaultDirectory,action)=> {
	switch (action.type) {
		case 'SET_DIRECTORY':
			let position = action.children.map((item,index)=>{
				return {top:index*51+58+48+8+64,bottom:(index+1)*51+58+48+8+64}
			})
			return Object.assign({}, state,{directory:action.directory,children:action.children,parent:action.parent,path:action.path,position:position,state:'READY',selectAll:false});
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
				break;
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
				return Object.assign({},state,{menu:{show:false,objArr:[]}});
			}
		case 'SET_DETAIL':
			return Object.assign({},state,{detail:action.objArr});
		case 'FILES_LOADING':
			return Object.assign({},state,{state:'BUSY'});
		case 'CLEAN_DETAIL':
			return Object.assign({},state,{detail:[]});
		case 'ADD_UPLOAD':
			var upload = state.upload.concat([action.obj]);
			return Object.assign({},state,{upload:upload});
		case 'ADD_DOWNLOAD':
			var dowload = state.dowload.concat([action.obj]);
			//add property status for each item
			for (let i =0; i < dowload.length; i++) {
				dowload[i].status = 0
			}
			return Object.assign({},state,{dowload:dowload});
		case 'REFRESH_DIR':
			var position = action.obj.map((item,index)=>{
				return {top:index*51+58+48+8+64,bottom:(index+1)*51+58+48+8+64}
			})
			return Object.assign({},state,{children:action.obj,position:position});
		case 'REMOVE':
		var a;
		console.log(state.upload);
			for (var i=0;i<state.upload.length;i++) {
				if (state.upload[i].path == action.obj.path) {
					a = state.upload.slice(i,1);
					break
				}
			}
			return Object.assign({},state,{upload:a});
		case 'TOGGLE_DIALOG_FOLDER':
			return Object.assign({},state,{dialogOfFolder:action.isOpen});
		case 'REFRESH_STATUS_UPLOAD':
			var newUploadArr = state.upload;
			var uploadArrIndex = null;
			for (let i = 0;i<newUploadArr.length;i++) {
				if (newUploadArr[i].name == action.file.name) {
					uploadArrIndex = i;
					break;
				}
				
			}
			newUploadArr[uploadArrIndex].status = action.status;
			if (uploadArrIndex !=null) {
				return Object.assign({},state,{upload:newUploadArr})
			}else {
				return state;
			}
		case 'REFRESH_STATUS_DOWNLOAD':
			var newDownloadArr = state.dowload;
			var downloadArrIndex = null;
			for (let i=0;i<newDownloadArr.length;i++) {
				console.log(newDownloadArr[i].uuid);
				if (newDownloadArr[i].uuid == action.file.uuid) {
					downloadArrIndex = i;
					break;
				}
				
			}
			newDownloadArr[downloadArrIndex].status = action.status;
			if (downloadArrIndex !=null) {
				return Object.assign({},state,{download:newDownloadArr})
			}else {
				return state
			}
		default:
			return state
	}
}

export default directory;