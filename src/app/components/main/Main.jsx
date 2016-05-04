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
 import CSS from '../../utils/transition';

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
import Content from './Content';

// require common mixins
import ImageModules from '../Mixins/ImageModules'; 

class Main extends Component {
	mixins: [ImageModules]

	getChildContext() {
		const muiTheme = getMuiTheme(lightBaseTheme);
		return {muiTheme}; 
	}

	leftNavClick() {
		this.props.dispatch(Action.navToggle());
	}

	componentDidMount() {
		var _this = this;
		ipc.send('getRootData');
		ipc.on('receive',function (dir,children) {
			_this.props.dispatch(Action.setDirctory(dir,children,parent ));
		});
	}

	render() {
		return (<CSS opts={['app',true,true,true,500,5000,5000]}>
			<div className="main" key='main'>
				{/*Bar*/}
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
				{/*Left Nav*/}
				<Drawer width={200} open={this.props.navigation.menu} className='left-nav'>
					<LeftNav nav={this.props.navigation} dispatch={this.props.dispatch}/>
				</Drawer>
				{/*Content*/}
				<Paper className={"content-container "+(this.props.navigation.menu?'content-has-left-padding':'no-padding')} style={{paddingTop:64}} zDepth={0}>
					<Content nav={this.props.navigation.nav}></Content>
				</Paper>
			</div></CSS>
			);
	}
}

Main.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
}

function mapStateToProps (state) {
	return {
		navigation: state.navigation,
		login: state.login,
		data: state.data
	}
}

//export component
export default connect(mapStateToProps)(Main);