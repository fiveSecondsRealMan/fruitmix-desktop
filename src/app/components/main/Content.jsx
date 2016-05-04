/**
 * @component Main content
 * @description main interface
 * @time 2016-4-28
 * @author liuhua
 **/
  'use strict';
// require core module
 import React, { findDOMNode, Component, PropTypes } from 'react';
 import CSS from '../../utils/transition';
 import { connect, bindActionCreators } from 'react-redux'
// import Component 
import AllFile from '../mainContent/AllFiles';
import Collection from '../mainContent/Collection';
import SharedFiles from '../mainContent/SharedFiles';
import SharedByMe from '../mainContent/SharedByMe';
import RecentFiles from '../mainContent/RecentFiles';

class MainContent extends Component {

	getContentSelected() {
		let component = [];
		component.push(<AllFile key={'a'}></AllFile>);
		component.push(<Collection key={'b'}></Collection>); 
		component.push(<SharedFiles key={'c'}></SharedFiles>); 
		component.push(<SharedByMe key={'d'}></SharedByMe>); 
		component.push(<RecentFiles key={'e'}></RecentFiles>); 
		// define the content is selected
		let selectedItem = this.props.nav.findIndex( (item, index, arr) => {
			return item.selected == true
		});
		return component[selectedItem]
	}

	render() {
		return (
			<div>
				<CSS opts={['content', true, true, false, 800, 800, 500]}>
				{this.getContentSelected()}
				</CSS>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		data: state.data
	}
}

export default connect(mapStateToProps)(MainContent);