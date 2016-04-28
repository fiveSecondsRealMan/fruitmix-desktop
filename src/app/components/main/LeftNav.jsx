/**
 * @component leftNav
 * @description leftNavigation
 * @time 2016-4-27
 * @author liuhua
 **/

 // require core module
 import React, { findDOMNode, Component, PropTypes } from 'react';

//require material
import { Menu, MenuItem } from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';

 //import CSS
import css  from  '../../../assets/css/main';

//import action 
import Action from '../../actions/action';
const style = {
	margin:0,
	width:200,
	padding:0
};

const listStyle = {
	height: 48,
	lineHeight:'48px'
}

class leftNav extends Component {

	itemSelect (name,index) {
		this.props.dispatch(Action.changeSelectedNavItem(name));
	}

	getChildContext() {
		const muiTheme = getMuiTheme(lightBaseTheme);
		return {muiTheme};
	}

	render () {
		return (
			<div className="left-nav-container">
				<Menu style={style}>
				{this.props.nav.nav.map((item,index) => {
					return (
						<MenuItem 
						className={item.selected?"list-selected":''}
						primaryText={item.name} 
						key={index} 
						desktop={true} 
						onTouchTap={this.itemSelect.bind(this,item.name,index)}
						style={style}
						innerDivStyle={listStyle}
						/>
						)
				})}
				</Menu>
			</div>
			)
	}
}

leftNav.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
}

export default leftNav