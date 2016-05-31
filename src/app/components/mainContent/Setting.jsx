/**
 * @component Setting
 * @description Setting
 * @time 2016-5-30
 * @author liuhua
 **/
  'use strict';
// require core module
 import React, { findDOMNode, Component, PropTypes } from 'react';
 import { connect, bindActionCreators } from 'react-redux';
 import { TextField } from 'material-ui';

 class Setting extends Component {
 	render() {
 		return (
 			<div className='Setting'>
	 			<TextField
	 			hintText="Hint Text"
	 			/><br />
	 			<br />
	 			<TextField
	 			hintText="The hint text can be as long as you want, it will wrap."
	 			/><br />
	 			<TextField
	 			id="text-field-default"
	 			defaultValue="Default Value"
	 			/><br />
	 			<TextField
	 			hintText="Hint Text"
	 			floatingLabelText="Floating Label Text"
	 			/><br />
 			</div>
 			)
 	}
 }

function mapStateToProps (state) {
	return {
		data: state.data,
		user: state.user
	}
}

export default connect(mapStateToProps)(Setting);