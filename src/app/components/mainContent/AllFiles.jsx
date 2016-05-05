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
						<Table
						multiSelectable={true}
						showRowHover={true}
						>
							<TableHeader>
								<TableRow>
									<TableHeaderColumn>name</TableHeaderColumn>
									<TableHeaderColumn>update time</TableHeaderColumn>
									<TableHeaderColumn>size</TableHeaderColumn>
								</TableRow>
							</TableHeader>
							<TableBody>
								{_this.props.data.children.map( (item,index)=> {
									return (
										<TableRow rouNumber={index} key={index} onDoubleClick={_this.selectChildren.bind(_this,index)}>
											<TableRowColumn>{item.attribute.name}</TableRowColumn>
											<TableRowColumn>{item.attribute.changetime}</TableRowColumn>
											<TableRowColumn>{item.attribute.size}</TableRowColumn>
										</TableRow>
										)
								})}
							</TableBody>
						</Table>
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
				<span style={{display:'flex',alignItems:'center'}}>
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

	selectChildren (rowNumber) {
		var children = this.props.data.children;
		if (children[rowNumber] && children[rowNumber].type == 'folder') {
			ipc.send('selectChildren',children[rowNumber]);
		}
	}

	backToParent () {
		let parent = this.props.data.parent;
		let path = this.props.data.path;
		if (path.length == 1) {
			return;
		}else if (path.length == 2) { 
			ipc.send('getRootData');
		}else {
			ipc.send('selectChildren',parent);
		}
	}

	selectBreadCrumb(obj) {
		if (obj.key == '') {
			ipc.send('getRootData');
		}else {
			ipc.send('selectChildren',obj.value);
		}
	}
}

function mapStateToProps (state) {
	return {
		data: state.data
	}
}
export default connect(mapStateToProps)(AllFiles);