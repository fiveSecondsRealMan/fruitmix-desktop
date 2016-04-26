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

	login: () => {
		return {
			type: 'LOGGEDIN'
		}
	},
}

module.exports = actions;