  /**
   * @module app
   * @description app main module
   * @time 2016-04-05 12:00
   * @author liuhua
   **/
   
//import core module
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import CSSTransition from 'react-addons-css-transition-group';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// global import jQuery
global.$ = global.jQuery = global.jQuery || require('jquery');
//import css
require('../assets/css/app.css');
//import component
import Index  from'./components/Index/Index';// 首页
import NoFondPath  from'./components/404';//404
import Card  from'./components/Card/Card';//Card
import Dialog  from'./components/Dialog/Dialog';//Card
import Grid  from'./components/Grid/Grid';//Grid
import Nav  from'./components/Nav/Nav';//Nav

//import store
import configureStore from './stores/store';
const store = configureStore();
window.store = store;

//APP component
var App = React.createClass({
	render() {
		return(
			<div className="app">
				<header>
					<li style={{float:'left',marginRight:'50px'}}>
						<Link to="/index" activeClassName="active" activeStyle={{color:'#c00'}}>index</Link>
					</li>
					<li style={{float:'left',marginRight:'50px'}}>
						<Link to="/card" activeClassName="active" activeStyle={{color:'#c00'}}>card</Link>
					</li>
					<li style={{float:'left',marginRight:'50px'}}>
						<Link to="/dialog" activeClassName="active" activeStyle={{color:'#c00'}}>dialog</Link>
					</li>
					<li style={{float:'left',marginRight:'50px'}}>
						<Link to="/grid" activeClassName="active" activeStyle={{color:'#c00'}}>grid</Link>
					</li>
					<li style={{float:'left',marginRight:'50px'}}>
						<Link to="/nav" activeClassName="active" activeStyle={{color:'#c00'}}>nav</Link>
					</li>
					<div>{window.location.href}</div>
				</header>
				<CSSTransition transitionName='login' transitionEnterTimeout={2000} transitionLeaveTimeout={1000}>
					{this.props.children}
				</CSSTransition>
			</div>
			)
	},
});
//router
var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
	    		<Route path="index" component={Index}/>
	    		<Route path="card" component={Card}/>
	   		<Route path='dialog' component={Dialog}/>
	    		<Route path='grid' component={Grid}/>
	    		<Route path='nav' component={Nav}/>
	    		<Route path="*" component={NoFondPath}/>
	    		<IndexRoute component={Index}/>
	    	</Route>
	</Router>
	);
// define dom node
var appMountElement = document.getElementById('app');
//define render function
var reRender = () =>{
	console.log('render');
	render(routes,appMountElement);
};
//render
reRender();

store.subscribe(reRender);







