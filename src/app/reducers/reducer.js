//import core module
import { combineReducers } from 'redux'
//import all reducers
import login from './login';
import navigation from './navigation';
import data from './data'

const reducer = combineReducers({
	login,
	navigation,
	data
});

export default reducer; 
