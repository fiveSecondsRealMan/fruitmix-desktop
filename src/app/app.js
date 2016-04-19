/**
 * @module app
 * @description app main module
 * @time 2016-04-05 12:00
 * @author liuhua
 **/

/**
 * 引入 第三方lib
 **/
// var React = require('react');
// var Router = require('react-router');
// var Route = Router.Route;
// var DefaultRoute = Router.DefaultRoute;
// var RouteHandler = Router.RouteHandler;
// var Redirect = Router.Redirect;
// var NotFoundRoute = Router.NotFoundRoute;
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute} from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


// 全局引入jQuery(因为一些jQuery插件写法不好, 以后可以优化)
global.$ = global.jQuery = global.jQuery || require('jquery');

/**
 * 引入 assets
 */
require('../assets/css/app.css');


/**
 * 引入自定义 components
 */
var Index = require('./components/Index/Index');// 首页
var NoFondPath = require('./components/404');//404
var Card = require('./components/Card/Card');//Card
var Dialog = require('./components/Dialog/Dialog');//Card
var Grid = require('./components/Grid/Grid');//Grid
var Nav = require('./components/Nav/Nav');//Nav

/**
 * App组件
 */
var App = React.createClass({

    render: function () {

        return (
            <div className="app">
            <header>
	            <ul style={{overflow: 'hidden'}}>
		            <li style={{float:'left',marginRight: '50px'}}><Link to="/index" activeClassName="active" activeStyle={{color: '#c00'}}>index</Link></li>
		            <li style={{float:'left',marginRight: '50px'}}><Link to="/card" activeClassName="active" activeStyle={{color: '#c00'}}>card</Link></li>
                         <li style={{float:'left',marginRight: '50px'}}><Link to="/dialog" activeClassName="active" activeStyle={{color: '#c00'}}>dialog</Link></li>
                         <li style={{float:'left',marginRight: '50px'}}><Link to="/grid" activeClassName="active" activeStyle={{color: '#c00'}}>grid</Link></li>
                         <li style={{float:'left',marginRight: '50px'}}><Link to="/nav" activeClassName="active" activeStyle={{color: '#c00'}}>nav</Link></li>
	            </ul>
            </header>

                    {this.props.children}
            </div>
        );
    },

});

// 路由器
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

// 挂载节点
var appMountElement = document.getElementById('app');

// 渲染
render(routes,appMountElement);
