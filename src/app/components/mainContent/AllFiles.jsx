/**
 * @component AllFiles
 * @description AllFiles
 * @time 2016-4-28
 * @author liuhua
 **/
  'use strict';
// require core module
 import React, { findDOMNode, Component, PropTypes } from 'react';
 import { connect, bindActionCreators } from 'react-redux';
//require material
import { Paper, FontIcon, SvgIcon } from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import svg from '../../utils/SVGIcon';
// import Component 
import FilesTable from './FilesTable';

class AllFiles extends Component {
	render() {
		var _this = this;
		var children = this.props.data.children;
		return (
			<div className='all-my-files'>
				<Paper className='file-area'>
					<div className='breadcrumb'>
						<SvgIcon onClick={this.backToParent.bind(this)} color={greenA200} style={{marginLeft:10,marginRight:14,cursor:'pointer'}}>
						{svg['back']()}
						</SvgIcon>
						{this.getBreadCrumb()}
					</div>
					<div className="all-files-container">
						<FilesTable/>
					</div>
					
				</Paper>
				<Paper className='file-detail'>

				</Paper>
			</div>
		)
	}
	getBreadCrumb(){
		var _this = this;
		var path = this.props.data.path;
		var pathArr = [];
		pathArr = path.map((item,index)=>(
				<span key={index} style={{display:'flex',alignItems:'center'}}>
					<span 
					style={{display:'flex',alignItems:'center',marginRight:10}}
					onClick={_this.selectBreadCrumb.bind(_this,item)}
					>
						{item.key!=''?item.key:<SvgIcon>{svg['home']()}</SvgIcon>}
					</span>
					<span style={{marginRight:5}}>></span>
				</span>
			));
		return pathArr;

	}

	backToParent () {
		$('.bezierFrame').empty().append('<div class="bezierTransition1"></div><div class="bezierTransition2"></div>');
		let parent = this.props.data.parent;
		let path = this.props.data.path;
		if (path.length == 1) {
			return;
		}else if (path.length == 2) { 
			ipc.send('getRootData');
		}else {
			ipc.send('enterChildren',parent);
		}
	}

	selectBreadCrumb(obj) {
		$('.bezierFrame').empty().append('<div class="bezierTransition1"></div><div class="bezierTransition2"></div>');
		if (obj.key == '') {
			ipc.send('getRootData');
		}else {
			ipc.send('enterChildren',obj.value);
		}
	}

	dbc () {
		console.log('dbc');
	}
}

function mapStateToProps (state) {
	return {
		data: state.data
	}
}
export default connect(mapStateToProps)(AllFiles);