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

	login() {
		return {
			type: 'LOGGEDIN'
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
	}


}

module.exports = actions;