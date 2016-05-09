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
			<div className='MenuContainer menu' style={style} onClick={this.stopPropagation.bind(this)}>
				<Paper>
					<Menu desktop={true} listStyle={{lineHeight:'30px'}}>
						<MenuItem primaryText='1'></MenuItem>
						<MenuItem primaryText='2'></MenuItem>
						<MenuItem primaryText='3'></MenuItem>
						<MenuItem primaryText='4'></MenuItem>
						<MenuItem primaryText='5'></MenuItem>
					</Menu>
				</Paper>
			</div>
			)
	}

	stopPropagation(event) {
		console.log('Menu');
		event.stopPropagation();
		event.preventDefault();
	}
}

function mapStateToProps (state) {
	return {
		data: state.data
	}
}

export default connect(mapStateToProps)(PopMenu);