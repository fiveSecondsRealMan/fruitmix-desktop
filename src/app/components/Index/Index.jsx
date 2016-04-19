/**
 * @component Index
 * @description 首页组件
 * @time 2016-4-5
 * @author liuhua
 **/

 'use strict';

// require core module
import React, { findDOMNode, Component, PropTypes } from 'react';
import Base from '../../utils/Base';
// import Store from '../../stores/store';
// import Action from'../../actions/action';

//require material
import RaisedButton from 'material-ui/lib/raised-button';

import AppBar from 'material-ui/lib/app-bar';

import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';
import IconMenu from 'material-ui/lib/menus/icon-menu';

import Badge from 'material-ui/lib/badge';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';

import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';

import ActionAndroid from 'material-ui/lib/svg-icons/action/android';
import FontIcon from 'material-ui/lib/font-icon';




// require common mixins
import ImageModules from '../Mixins/ImageModules'; 

//import CSS
import css  from  '../../../assets/css/index'

// define Index component
var Index = React.createClass({

	mixins: [ImageModules],

	getInitialState() {
		return {
		};
	},

	componentDidMount() {

	},

	clickTrigger() {
		console.log('click-trigger');
	},

	render() {
		var _this = this;

		const styles = {
		  title: {
		    cursor: 'pointer',
		    color: 'red'
		  },
		  exampleImageInput: {
		    cursor: 'pointer',
		    position: 'absolute',
		    top: 0,
		    bottom: 0,
		    right: 0,
		    left: 0,
		    width: '100%',
		    opacity: 0,
		  },
		};

		function handleTouchTap() {
		  console.log('onTouchTap triggered on the title component');
		}
		return (
			<div className='frame'>
				<div>{window.location.href}</div>
				{/*AppBar*/}
				<AppBar 
					title="Title"
    					iconClassNameRight="muidocs-icon-navigation-expand-more"
    				/><br/>

    				<AppBar
				    title={<span style={styles.title}>Title</span>}
				    onTitleTouchTap={handleTouchTap}
				    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
				    iconElementRight={<FlatButton label="Save" />}
				  /><br/>

				  <AppBar
				    title="Title"
				    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
				    iconElementRight={
				      <IconMenu
				        iconButtonElement={
				          <IconButton><MoreVertIcon /></IconButton>
				        }
				        targetOrigin={{horizontal: 'right', vertical: 'top'}}
				        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
				      >
				        <MenuItem primaryText="Refresh" />
				        <MenuItem primaryText="Help" />
				        <MenuItem primaryText="Sign out" />
				      </IconMenu>
				    }
				  /><br/>
				{/*Badge*/}
				  <Badge
				      badgeContent={4}
				      primary={true}
				    >
				      <NotificationsIcon />
				    </Badge>
				    <Badge
				      badgeContent={10}
				      secondary={true}
				      badgeStyle={{top: 12, right: 12}}
				    >
				      <IconButton tooltip="Notifications">
				        <NotificationsIcon/>
				      </IconButton>
				    </Badge>
				  	{/*FlatButton*/}
				    <div>
					    <FlatButton label="Default" />
					    <FlatButton label="Primary" primary={true} />
					    <FlatButton label="Secondary" secondary={true} />
					    <FlatButton label="Disabled" disabled={true} />
					</div>

					<div>
					    <FlatButton label="Choose an Image">
					      <input type="file" style={styles.exampleImageInput}/>
					    </FlatButton>

					    <FlatButton
					      label="Label before"
					      labelPosition="before"
					      primary={true}
					      icon={<ActionAndroid />}
					    />

					    <FlatButton
					      label="GitHub Link"
					      linkButton={true}
					      href="https://github.com/callemall/material-ui"
					      secondary={true}
					      icon={<FontIcon />}
					    />
					  </div>
			</div>
			);
	},

});

module.exports = Index;
