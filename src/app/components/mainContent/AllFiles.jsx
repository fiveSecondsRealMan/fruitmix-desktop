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
import { Paper, FontIcon, SvgIcon,Snackbar } from 'material-ui';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import { CircularProgress } from 'material-ui'
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import svg from '../../utils/SVGIcon';
//import Action
import Action from '../../actions/action';
// import Component 
import FilesTable from './FilesTable';
import Menu from './Menu';
import Detail from './Detail';

class AllFiles extends Component {
	render() {
		var _this = this;
		var children = this.props.data.children;
		var content = this.getTable();
		return (
			<div className='all-my-files' style={{height:(document.body.clientHeight-64)+'px'}}>
				{content}
				<Paper className='file-detail' style={{width:this.props.data.detail.length==0?'0px':'350px'}}>
					<Detail></Detail>
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
					onClick={_this.selectBreadCrumb.bind(_this,item)}>
						{item.key!=''?item.key:<SvgIcon>{svg['home']()}</SvgIcon>}
					</span>
					<span style={{marginRight:5}}>></span>
				</span>
			));
		pathArr.push(<span style={{display:'flex',alignItems:'center',marginRight:10}} onClick={this.openInputFile.bind(this)}>{svg.add()}</span>);
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
			this.props.dispatch(Action.filesLoading());
		}else {
			ipc.send('enterChildren',parent);
		}
	}

	selectBreadCrumb(obj) {
		$('.bezierFrame').empty().append('<div class="bezierTransition1"></div><div class="bezierTransition2"></div>');
		if (obj.key == '') {
			ipc.send('getRootData');
			// this.props.dispatch(Action.cleanDetail());
			this.props.dispatch(Action.filesLoading());
		}else {
			// this.props.dispatch(Action.cleanDetail());
			ipc.send('enterChildren',obj.value);
		}
	}

	mouseDown(e) {
		this.props.dispatch(Action.mouseDown(e.nativeEvent.x,e.nativeEvent.y));
	}

	getTable() {
		if (this.props.data.state=='BUSY') {
			return (<div className='data-loading '><CircularProgress/></div>)
		}else {
			return (
				<Paper className='file-area' onMouseDown={this.mouseDown.bind(this)}>
					<input className='upload-input' type="file" multiple={true} onChange={this.upLoadFile.bind(this)}/>
					<div className='breadcrumb'>
						<SvgIcon onClick={this.backToParent.bind(this)} color={greenA200} style={{marginLeft:10,marginRight:14,cursor:'pointer'}}>
						{svg['back']()}
						</SvgIcon>
						{this.getBreadCrumb()}
					</div>
					<div className="all-files-container">
						<FilesTable/>
						<Menu></Menu>
					</div>
					<Snackbar
				          open={this.props.data.upload.length==0?true:false}
				          message={this.props.data.upload.map((item)=>{
				          	return <div>item.file</div>
				          })}
				       
				        />
				</Paper>
				)
		}
	}

	upLoadFile(e) {
		for (let i=0;i<e.nativeEvent.target.files.length;i++) {
			var f = e.nativeEvent.target.files[i];
			var file = {
				name:f.name,
				path:f.path,
				size:f.size,
				lastModifiedDate:f.lastModifiedDate
			}
			console.log(e.nativeEvent.target.files[i]);
			this.props.dispatch(Action.addUpload(e.nativeEvent.target.files[i]));
			ipc.send('uploadFile',file,this.props.data.directory);	
		}
		
	}

	openInputFile() {
		$('.upload-input').trigger('click');
	}
}

function mapStateToProps (state) {
	return {
		data: state.data
	}
}
export default connect(mapStateToProps)(AllFiles);