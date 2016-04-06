/**
 * @component Index
 * @description 首页组件
 * @time 2016-4-5
 * @author liuhua
 **/

'use strict';

// require core module
var React = require('react');
var Base = require('../../utils/Base');

// require common mixins
var ImageModules = require('../Mixins/ImageModules'); 

// define Index component
var Index = React.createClass({

    mixins: [ImageModules],

    getInitialState() {
        return {
            
        };
    },

    render: function () {

        return (
            <div className="inner">
                Hello World
            </div>
        );
    },

});

module.exports = Index;
