//import core module
import { combineReducers } from 'redux'
//import all reducers
import login from './login';
import navigation from './navigation';
import data from './data';
import multiple from './multiple';
import snack from './snack';
import transmission from './transmission';
import isShow from './isShow';
import tree from './tree';
import media from './media';
import setting from './setting';

const reducer = combineReducers({
	login,
	navigation,
	data,
	multiple,
	snack,
	transmission,
	isShow,
	tree,
	media,
	setting
});

export default reducer; 
