var actions = {
	// login: (username,password) => {
	// 	return dispatch => {
	// 		dispatch({type:'LOGIN',username: username, password: password})
	// 		fmacloud.User.logIn(username,password, {
	// 			success(data) {
	// 				dispatch({type:'LOGGEDIN',username:username,password:password})
	// 			},
	// 			error(err) {
	// 				console.log();
	// 			}
	// 		});	
	// 	}
	// }

	login(obj) {
		return {
			type: 'LOGGEDIN',
			obj: obj
		}
	},

	navToggle() {
		return {
			type: 'NAV_MENU_TOGGLE' 
		}
	},

	changeSelectedNavItem(name,index) {
		return {
			type: 'NAV_SELECT',
			select: name
		}
	},

	setDirctory(dir,children,parent,path) {
		
		return {
			type: 'SET_DIRECTORY',
			directory: dir,
			children: children,
			parent: parent,
			path:path
		}
	},

	selectChildren(rowNumber) {
		return {
			type: 'SELECT_CHILDREN',
			rowNumber:rowNumber
		}
	},

	selectAllChildren() {
		return {
			type: 'SELECT_ALL_CHILDREN',
		}
	},

	toggleMenu(objArr,x,y,selected) {
		return {
			type: 'TOGGLE_MENU',
			objArr : objArr,
			x: x,
			y: y,
			selected:selected
		}
	},

	setDetail(objArr) {
		return {
			type : 'SET_DETAIL',
			objArr : objArr
		}
	},

	mouseDown(left,top) {
		return {
			type: 'MOUSE_DOWN',
			left: left,
			top: top
		}
	},

	mouseMove(width,height) {
		return {
			type: 'MOUSE_MOVE',
			width: width,
			height:height
		}
	},

	mouseUp() {
		return {
			type: 'MOUSE_UP'
		}
	},

	filesLoading() {
		return {
			type: 'FILES_LOADING'
		}
	},

	cleanDetail() {
		return {
			type: 'CLEAN_DETAIL'
		}
	},

	addUpload(obj) {
		return {
			type: 'ADD_UPLOAD',
			obj: obj
		}
	},

	refreshDir(obj) {
		return {
			type: 'REFRESH_DIR',
			obj: obj
		}
	},

	removeFile(obj) {
		return {
			type: 'REMOVE',
			obj: obj
		}
	}


}

module.exports = actions;