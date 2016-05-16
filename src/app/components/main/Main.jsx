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
import Multiple from '../mainContent/Multiple';

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
		this.props.dispatch(Action.filesLoading());
		ipc.on('receive',function (dir,children,parent,path) {
			_this.props.dispatch(Action.setDirctory(dir,children,parent,path));
		});

		ipc.on('receiveFile',(data)=>{
			console.log(data);
		});

		ipc.on('refresh',(data)=>{
			console.log('refresh')
			console.log(data);
		});

		ipc.on('sendMessage',(data)=>{
			console.log(data);
		});

		ipc.on('uploadSuccess',(file,dir,obj)=>{
			// this.props.dispatch(Action.removeFile(obj));
			if (dir.uuid == this.props.data.directory.uuid) {
				this.props.dispatch(Action.refreshDir(obj));
			}
		});
	}

	triggerClick(e) {
		if (this.props.data.menu.show) {
			this.props.dispatch(Action.toggleMenu());
		}
	}

	render() {
		return (<CSS opts={['app',true,true,true,500,5000,5000]}>
			<div className="main" key='main' onMouseMove={this.mouseMove.bind(this)} onMouseUp={this.mouseUp.bind(this)}>
				{/*Bar*/}
				<Multiple/>
				<AppBar 
				className='app-bar' title='my cloud' iconElementRight={
					<div>
					<TextField
					      hintText="search"
					      className='search-input'
					/>
					<span style={{color:'white'}}>userName</span></div>
				}
				onLeftIconButtonTouchTap={this.leftNavClick.bind(this)}
				>
				</AppBar>
				{/*Left Nav*/}
				<Drawer width={200} open={this.props.navigation.menu} className='left-nav'>
					<LeftNav nav={this.props.navigation} dispatch={this.props.dispatch}/>
				</Drawer>
				{/*Content*/}
				<Paper className={"content-container "+(this.props.navigation.menu?'content-has-left-padding':'no-padding')} style={{paddingTop:64}} zDepth={0} onClick={this.triggerClick.bind(this)}>
					<Content nav={this.props.navigation.nav}></Content>
				</Paper>
			</div></CSS>
			);
	}

	mouseMove(e) {
		 e.preventDefault(); e.stopPropagation();
		if (this.props.multiple.multiple.isShow == true&&this.props.data.state != 'BUSY') {
			this.props.dispatch(Action.mouseMove(e.nativeEvent.x,e.nativeEvent.y));
			let mul = this.props.multiple.multiple;
 			let height = Math.abs(mul.top-mul.height);;
 			let part = Math.ceil(height/51);
 			let top = Math.min(mul.top,mul.height)+document.getElementsByClassName('file-area')[0].scrollTop;
 			let bottom = Math.max(mul.top,mul.height)+document.getElementsByClassName('file-area')[0].scrollTop;

 			let position = this.props.data.position;
 			for (let i = 0;i < position.length; i++) {
 				if (position[i].bottom<top) {
 					if (this.props.data.children[i].checked == true) {
 						this.props.dispatch(Action.selectChildren(i));	
 					}
 					continue;
 				}
 				if (position[i].bottom>top&&position[i].top<top) {
 					if (this.props.data.children[i].checked == false) {
 						this.props.dispatch(Action.selectChildren(i));	
 						if (this.props.data.detail.length!=0) {
 							this.props.dispatch(Action.setDetail([this.props.data.children[i]]));
 						}
 						
 					}

 					continue;
 				}
 				if (position[i].bottom<bottom&&position[i].top>top) {
 					if (this.props.data.children[i].checked == false) {
 						this.props.dispatch(Action.selectChildren(i));	
 						if (this.props.data.detail.length!=0) {
 							this.props.dispatch(Action.setDetail([this.props.data.children[i]]));
 						}
 					}
 					continue;
 				}
 				if (position[i].top<bottom&&position[i].bottom>bottom) {
 					if (this.props.data.children[i].checked == false) {
 						this.props.dispatch(Action.selectChildren(i));	
 						if (this.props.data.detail.length!=0) {
 							this.props.dispatch(Action.setDetail([this.props.data.children[i]]));
 						}
 					}
 					continue;
 				}
 				if (position[i].top>bottom) {
 					if (this.props.data.children[i].checked == true) {
 						this.props.dispatch(Action.selectChildren(i));	
 					}
 					continue;	
 				}
 			}


			var num = [];
			var dis = this.props.data.multiple;
			
		}
	}

	mouseUp() {
		if (this.props.multiple.multiple.isShow == true) {
			this.props.dispatch(Action.mouseUp());
		}
	}
}

Main.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
}

function mapStateToProps (state) {
	return {
		navigation: state.navigation,
		login: state.login,
		data: state.data,
		multiple:state.multiple
	}
}

//export component
export default connect(mapStateToProps)(Main);