var actions = {
	add : function (text) {
		return {
			type: 'ADD_TODO',
			text: text 
		}
	},
	delete : function (index) {
		return {
			type: 'DELETE_TODO',
			index: index
		}
	},
	complete: function(index) {
		return {
			type: 'COMPLETE_TODO',
			index: index
		}
	},
	login: (username,password) => {
		console.log('lo');
		return dispatch => {
			fmacloud.User.logIn(username,password, {
				success(data) {
					dispatch({type:'LOGININ'})
				},
				error(err) {
					console.log();
				}
			});	
		}
		
	}
}

module.exports = actions;