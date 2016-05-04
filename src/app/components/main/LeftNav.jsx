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
import svg from '../../utils/SVGIcon';

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
	lineHeight:'48px',
	paddingLeft:50
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
			<div className="left-nav-container" style={{position:'relative',height:'100%'}}>
				<Menu style={style}>
				{this.props.nav.nav.map((item,index) => {
					if (item.type == 'leftNav') {
						return (
							<MenuItem 
							className={item.selected?"list-selected":''}
							primaryText={item.name} 
							key={index} 
							desktop={true} 
							onTouchTap={this.itemSelect.bind(this,item.name,index)}
							style={style}
							innerDivStyle={listStyle}
							leftIcon={item.icon?svg[item.icon]():null}
							/>
							)
						}
				})}
				</Menu>
				<div style={{position:'absolute',bottom:0,width:'100%'}}>
					<div style={{marginBottom:100}}>
						<div style={{border:'1px solid black',width:150,height:20,margin:'0 auto'}}>
							<div style={{width:'50%',backgroundColor:'#666',height:'100%'}}></div>
						</div>
						<div style={{textAlign:'center',marginTop:10}}>use 2.5G of 5G</div>
					</div>
					<div>
						<Menu>
							{this.props.nav.nav.map((item,index) => (
								item.type=='other'?<MenuItem primaryText={item.name}
								className={item.selected?"list-selected":''}
								innerDivStyle={listStyle}
								leftIcon={item.icon?svg[item.icon]():null} 
								onTouchTap={this.itemSelect.bind(this,item.name,index)}
								key={index} 
								 />:false
								))}
						</Menu>
					</div>
				</div>
			</div>
			)
	}
}

leftNav.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired
}

export default leftNav