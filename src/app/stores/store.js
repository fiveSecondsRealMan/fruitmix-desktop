// reducers

var Redux = require('redux');
import _ from 'lodash';
import { combineReducers, createStore } from 'redux';

const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

const { SHOW_ALL } = VisibilityFilters;

var todos = function (state = [], action) {
	switch(action.type) {
		case 'ADD_TODO':
			return [...state,{
				text: action.text,
				completed: false
			}];
		case 'DELETE_TODO':
			var s = _.cloneDeep(state);
			s.splice(action.index,1);
			return s;
		case 'COMPLETE_TODO':
			var s = _.cloneDeep(state);
			s[action.index].completed = !s[action.index].completed; 
			return s;
		default:
			return state;
	}
}

var visibilityFilter = function(state = SHOW_ALL, action) {
	switch(action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}	
}

var todoApp = combineReducers({
	todos,visibilityFilter
});

var store = createStore(todoApp);

module.exports = store;