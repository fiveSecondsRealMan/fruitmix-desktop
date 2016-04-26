/**
 * @component Main
 * @description main interface
 * @time 2016-4-26
 * @author liuhua
 **/

 'use strict';
// require core module
 import React, { findDOMNode, Component, PropTypes } from 'react';
 import { connect, bindActionCreators } from 'react-redux'

import Login from'../../actions/login';

//require material
import { AppBar, TextField } from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

//import CSS
import css  from  '../../../assets/css/main';

// require common mixins
import ImageModules from '../Mixins/ImageModules'; 

class Main extends React.Component {
	mixins: [ImageModules]

	getChildContext() {
		const muiTheme = getMuiTheme(darkBaseTheme);
		return {muiTheme};
	}

	render() {
		return (
			<div className="main">
				<AppBar 
				className='app-bar' title='my cloud' iconElementRight={
					<div>
					<TextField
					      hintText="search"
					      className='search-input'
					/>
					<span>userName</span></div>
				}>
				</AppBar>
			</div>
			);
	}
}

Main.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
}

function mapStateToProps (state) {
	return {
		
	}
}

//export component
export default connect(mapStateToProps)(Main);