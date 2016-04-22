/**
 * @component Index
 * @description 首页组件
 * @time 2016-4-5
 * @author liuhua
 **/
 'use strict';
// require core module
import React, { findDOMNode, Component, PropTypes } from 'react';
import { connect, bindActionCreators } from 'react-redux'
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
		console.log(this.props);
	},

	submit() {
		let username = this.refs.username.value;
		let password = this.refs.password.value;
		this.props.dispatch(Action.login(username,password));
	},

	render() {
		var _this = this;
		return (
			<div className='index-frame'>
				<label ref='username'>username</label><input type="text" ref="username"/><br/>
				<label ref="password">password</label><input type="password" ref="password"/><br/>
				<button onClick={this.submit}>submit</button>
				<div>{this.props.login.state}</div>
			</div>
			);
	},
});



function mapStateToProps (state) {
	return {
		login: state.login
	}
}

export default connect(mapStateToProps)(Index);
