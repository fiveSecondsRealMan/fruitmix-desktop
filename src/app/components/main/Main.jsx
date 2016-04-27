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

//require material
import { AppBar, TextField, Drawer, Paper } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

//import Action
import Action from '../../actions/action'

//import CSS
import css  from  '../../../assets/css/main';

//import component
import LeftNav from './LeftNav';

// require common mixins
import ImageModules from '../Mixins/ImageModules'; 

class Main extends React.Component {
	mixins: [ImageModules]

	getChildContext() {
		const muiTheme = getMuiTheme(lightBaseTheme);
		return {muiTheme}; 
	}

	leftNavClick() {
		this.props.dispatch(Action.navToggle());
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
				}
				onLeftIconButtonTouchTap={this.leftNavClick.bind(this)}
				>
				</AppBar>
				<Drawer width={200} open={this.props.navigation.menu} className='left-nav'>
					<LeftNav nav={this.props.navigation}/>
				</Drawer>
				<Paper className="content-container"></Paper>
			</div>
			);
	}
}

Main.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
}

function mapStateToProps (state) {
	return {
		navigation: state.navigation,
		login: state.login
	}
}

//export component
export default connect(mapStateToProps)(Main);