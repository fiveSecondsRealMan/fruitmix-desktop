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

	setDirctory(dir,children,parent) {
		return {
			type: 'SET_DIRECTORY',
			directory: dir,
			children: children,
			parent: parent
		}
	}
}

module.exports = actions;