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
	}
}

module.exports = actions;