//import core module
import { combineReducers } from 'redux'
//import all reducers
import login from './login';
import navigation from './navigation'

const reducer = combineReducers({
	login,
	navigation
});

export default reducer; 
