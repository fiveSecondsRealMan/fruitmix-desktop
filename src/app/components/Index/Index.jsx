/**
 * @component Index
 * @description 首页组件
 * @time 2016-4-5
 * @author liuhua
 **/

 'use strict';

// require core module
import React, { findDOMNode, Component, PropTypes } from 'react';
import Base from '../../utils/Base';
// import Store from '../../stores/store';
import Action from'../../actions/action';

//require material





// require common mixins
import ImageModules from '../Mixins/ImageModules'; 

//import CSS
import css  from  '../../../assets/css/index';

// define Index component
var Index = React.createClass({

	mixins: [ImageModules],

	componentDidMount() {
		
	},

	submit() {
		let username = this.refs.username.value;
		let password = this.refs.password.value;
		window.store.dispatch(Action.login(username,password));
	},

	render() {
		var _this = this;
		var state = window.store.getState().login;
		console.log(state);
		return (
			<div className='index-frame'>
				<label ref='username'>username</label><input type="text" ref="username"/><br/>
				<label ref="password">password</label><input type="password" ref="password"/><br/>
				<button onClick={this.submit}>submit</button>
			</div>
			);
	},

});

module.exports = Index;
