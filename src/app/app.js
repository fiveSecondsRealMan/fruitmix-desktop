  /**
   * @module app
   * @description app main module
   * @time 2016-04-05 12:00
   * @author liuhua
   **/
   
//import core module
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import CSSTransition from 'react-addons-css-transition-group';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// global import jQuery
global.$ = global.jQuery = global.jQuery || require('jquery');

//import css
require('../assets/css/app.css');

//import component
import Login  from'./components/login/Login';// login
import NoFondPath  from'./components/404';//404
import Main from './components/main/Main';//main


//import store
import configureStore from './stores/store';
const store = configureStore();

//APP component
var App = React.createClass({
	render() {
		return(
			<div className="app">
				{this.props.children}
				{/*<header>
					<li style={{float:'left',marginRight:'50px'}}>
						<Link to="/login" activeClassName="active" activeStyle={{color:'#c00'}}>login</Link>
					</li>
					<li style={{float:'left',marginRight:'50px'}}>
						<Link to="/main" activeClassName="active" activeStyle={{color:'#c00'}}>main</Link>
					</li>
					<div>{window.location.href}</div>
				</header>*/}
					
			</div>
			)
	},
});

//router
var routes = (
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
		    		<Route path="login" component={Login}/>
		    		<Route path='main' component={Main}/>
		    		<Route path="*" component={NoFondPath}/>
		    		<IndexRoute component={Login}/>
		    	</Route>
		</Router>
	</Provider>
	);

// define dom node
var appMountElement = document.getElementById('app');

//define render function
var Render = () =>{
	render(routes,appMountElement);
};

//render
Render();








