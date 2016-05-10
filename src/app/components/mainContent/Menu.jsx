/**
 * @component Menu
 * @description Menu
 * @time 2016-5-9
 * @author liuhua
 **/

  'use strict';
// require core module
import React, { findDOMNode, Component, PropTypes } from 'react';
import { connect, bindActionCreators } from 'react-redux';
//require material
import { Paper, Menu, MenuItem } from 'material-ui';
//import Action
import Action from '../../actions/action';

class PopMenu extends Component {
	render() {
		let menu = this.props.data.menu;
		let style = {
			display:'none'
		}
		if (menu.show) {
			style = Object.assign({},style,{
				display: menu.show?'block':'none',
				left: menu.x-220,
				top: menu.y-120
			});
		}
		return (
			<div className='MenuContainer menu' style={style}>
				<Paper zDepth={2}>
					<Menu className='menu-list' desktop={true} autoWidth={false}>
						<MenuItem primaryText='详细信息' onTouchTap={this.detail.bind(this)}></MenuItem>
						<MenuItem primaryText='重命名' onTouchTap={this.rename.bind(this)}></MenuItem>
						<MenuItem primaryText='移至' onTouchTap={this.moveto.bind(this)}></MenuItem>
						<MenuItem primaryText='分享' onTouchTap={this.share.bind(this)}></MenuItem>
						<MenuItem primaryText='保存' onTouchTap={this.save.bind(this)}></MenuItem>
						<MenuItem primaryText='收藏' onTouchTap={this.collect.bind(this)}></MenuItem>
					</Menu>
				</Paper>
			</div>
			)
	}

	detail() {
		this.props.dispatch(Action.setDetail(this.props.data.menu.objArr));
	}

	rename() {

	}

	moveto() {

	}

	share() {

	}

	save() {

	}

	collect() {

	}
}

function mapStateToProps (state) {
	return {
		data: state.data
	}
}

export default connect(mapStateToProps)(PopMenu);