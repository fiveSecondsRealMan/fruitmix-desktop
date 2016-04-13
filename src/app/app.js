/**
 * @module app
 * @description app main module
 * @time 2016-04-05 12:00
 * @author liuhua
 **/

/**
 * 引入 第三方lib
 **/
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;
var Redirect = Router.Redirect;
var NotFoundRoute = Router.NotFoundRoute;

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
var Settings = require('./components/Setting/Setting');//settings

/**
 * App组件
 */
var App = React.createClass({

    mixins: [Router.State],

    render: function () {

        var path = this.getPath();

        return (
            <div className="app">


                <div>
                    <RouteHandler/>
                </div>
            </div>
        );
    },

});

// 路由器
var routes = (
    <Route handler={App}>

        <Route name="index" path="/" handler={Index}/>
        <Route name="setting" path="/settings" handler={Settings}/>
        <Route name="404" path="/404" handler={NoFondPath}/>

        <DefaultRoute handler={Index}/>
        /* 404 */
        <NotFoundRoute handler={NoFondPath}/>
    </Route>
);

// 挂载节点
var appMountElement = document.getElementById('app');

// 渲染
Router.run(routes, Router.HashLocation, (Root) => {
    React.render(<Root/>, appMountElement);
});
