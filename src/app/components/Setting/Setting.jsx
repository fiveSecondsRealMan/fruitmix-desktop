/**
 * @component Settings
 * @description setting component
 * @time 2016-4-12
 * @author liuhua
 **/

 'use strict';

// require core module
import React, { findDOMNode, Component, PropTypes } from 'react';
import Base from '../../utils/Base';
// import Store from '../../stores/store';
// import Action from'../../actions/action';

// require common mixins
import ImageModules from '../Mixins/ImageModules'; 

//import CSS
import css  from  '../../../assets/css/settings'

// define Index component
var Settings = React.createClass({

	mixins: [ImageModules],

	getInitialState() {
		return {
		};
	},

	componentDidMount() {

	},


	render() {
		var _this = this;
		return (
			<div className='frame'>
				123
			</div>
			);
	},

});

module.exports = Settings;
