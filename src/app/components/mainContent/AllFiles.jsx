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
import { Paper } from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
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
										<TableRow>
											<TableRowColumn>1</TableRowColumn>
											<TableRowColumn>2</TableRowColumn>
											<TableRowColumn>3</TableRowColumn>
										</TableRow>
										<TableRow>
											<TableRowColumn>1</TableRowColumn>
											<TableRowColumn>2</TableRowColumn>
											<TableRowColumn>3</TableRowColumn>
										</TableRow>
										<TableRow>
											<TableRowColumn>1</TableRowColumn>
											<TableRowColumn>2</TableRowColumn>
											<TableRowColumn>3</TableRowColumn>
										</TableRow>
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
		if (!!this.props.data.directory.path) {
			return this.props.data.directory.path
		}
		return 'root'
	}

	selectChildren (rowNumber) {
		var children = this.props.data.children;
		console.log(children[rowNumber]);
		if (children[rowNumber]) {
			ipc.send('selectChildren',children[rowNumber].uuid);
		}
	}
}

function mapStateToProps (state) {
	return {
		data: state.data
	}
}
export default connect(mapStateToProps)(AllFiles);