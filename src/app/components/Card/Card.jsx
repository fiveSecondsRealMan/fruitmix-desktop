/**
 * @component Settings
 * @description setting component
 * @time 2016-4-12
 * @author liuhua
 **/

 'use strict';

// require core module
import React, { findDOMNode, Component, PropTypes } from 'react';

// require common mixins
import ImageModules from '../Mixins/ImageModules'; 

//require material
import RaisedButton from 'material-ui/lib/raised-button';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';



// define setting component
var CardTest = React.createClass({

	mixins: [ImageModules],

	getInitialState() {
		return {
		};
	},

	componentDidMount() {

	},

	render() {
		var _this = this;
		return (
			<div className='frame'>
				<div>{window.location.href}</div>
				<div>
					<Card>
						<CardHeader
							title="URL Avatar"
							subtitle="Subtitle"
							avatar="http://lorempixel.com/100/100/nature/"
						/>
						<CardMedia
							overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
						>
							<img src="http://lorempixel.com/600/337/nature/" />
						</CardMedia>
						<CardTitle title="Card title" subtitle="Card subtitle" />
						<CardText>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
							Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
							Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
						</CardText>
						<CardActions>
							<FlatButton label="Action1" />
							<FlatButton label="Action2" />
						</CardActions>
					</Card>
				</div><br/><br/><br/>
				
				<div>
					<Card>
					    <CardHeader
					      title="Without Avatar"
					      subtitle="Subtitle"
					      actAsExpander={true}
					      showExpandableButton={true}
					    />
					    <CardText expandable={true}>
					      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
					      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
					      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
					    </CardText>
					    <CardActions expandable={true}>
					      <FlatButton label="Action1"/>
					      <FlatButton label="Action2"/>
					    </CardActions>
					  </Card>
				</div>	
			</div>
			);
	},

});

module.exports = CardTest;
