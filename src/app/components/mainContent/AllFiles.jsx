/**
 * @component AllFiles
 * @description AllFiles
 * @time 2016-4-28
 * @author liuhua
 **/
  'use strict';
// require core module
 import React, { findDOMNode, Component, PropTypes } from 'react';
//require material
import { Paper } from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
// import Component 

class AllFiles extends Component {
	render() {
		console.log('111');
		console.log(this.props.data);
		return (
			<div className='all-my-files'>
				<Paper className='file-area'>
					<div className='breadcrumb'>
					{this.getBreadCrumb()}
					</div>
					<div className="all-files-container">

					</div>
				</Paper>
				<Paper className='file-detail'>

				</Paper>
			</div>
		)
	}
}

export default AllFiles;