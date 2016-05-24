/**
 * @component Collection
 * @description Collection
 * @time 2016-4-28
 * @author liuhua
 **/
  'use strict';
// require core module
 import React, { findDOMNode, Component, PropTypes } from 'react';
 import { connect, bindActionCreators } from 'react-redux';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
// import Component 

class Collection extends Component {
	render() {
		return (
			<div>
				<Table selectable={false}>
					<TableHeader>
						<TableRow>
							<TableHeaderColumn>Name</TableHeaderColumn>
							<TableHeaderColumn>Size</TableHeaderColumn>
							<TableHeaderColumn>Status</TableHeaderColumn>
						</TableRow>
					</TableHeader>
						<TableBody displayRowCheckbox={false}>
							{this.props.data.upload.map((item,index)=>{
								return (
									<TableRow>
										<TableRowColumn>{item.name}</TableRowColumn>
										<TableRowColumn>{this.getSize(item.size)}</TableRowColumn>
										<TableRowColumn>{this.getStutus(item.status)}</TableRowColumn>
									</TableRow>
									)
							})}
						</TableBody>
				</Table>
			</div>
		)
	}

	getSize(size) {
		size = parseFloat(size);
		if (size < 1024) {
			return size.toFixed(2)+' B'
		}else if (size < 1024*1024) {
			return (size/1024).toFixed(2)+' KB'
		}else if(size<1024*1024*1024) {
			return (size/1024/1024).toFixed(2)+ ' M'
		}else {
			return (size/1024/1024/1024).toFixed(2)+ ' G'
		}
	}

	getStutus(status) {
		if (status == 0) {
			return '准备'
		}else if (status == 1) {
			return '已完成'
		}else {
			return (status*100).toFixed(2)+' %'
		}
	}


}

function mapStateToProps (state) {
	return {
		data: state.data
	}
}

export default  connect(mapStateToProps)(Collection);