/**
 * @component Detail
 * @description Detail
 * @time 2016-5-10
 * @author liuhua
 **/
  'use strict';
  // require core module
 import React, { findDOMNode, Component, PropTypes } from 'react';
 import { connect, bindActionCreators } from 'react-redux';
 //require material
import { Paper, Menu, MenuItem,RaisedButton } from 'material-ui';
//import Action
import Action from '../../actions/action';

 class Detail extends Component {
 	render() {
 		let data = this.props.data.detail[0];

 		if (data) {
 			 		let style = {
			 			height: (document.body.clientHeight-64)+'px',
			 			width:data.length==0?'0px':'350px',
			 			padding:data.length==0?'0px':'10px 20px'
			 		}
 			return(
	 			<div style={style} className='detail-container'>
	 				<div>type&nbsp;&nbsp;:&nbsp;&nbsp;{data.type?data.type:null}</div>
	 				<div>size&nbsp;&nbsp;:&nbsp;&nbsp;{data.attribute.size/1024||null}M</div>
	 				<div>position&nbsp;&nbsp;:&nbsp;&nbsp;{data.path||null}</div>
	 				<div>owner&nbsp;&nbsp;:&nbsp;&nbsp;{data.owner||null}</div>
	 				<div>createtime&nbsp;&nbsp;:&nbsp;&nbsp;{data.attribute.createtime||null}</div>
	 				<div>updatetime&nbsp;&nbsp;:&nbsp;&nbsp;{data.attribute.changetime||null}</div>
	 				<div>shared to&nbsp;&nbsp;:&nbsp;&nbsp;</div>
	 				<RaisedButton label="close" onMouseUp={this.closeDetail.bind(this)} style={{}}/>
	 			</div> 
	 			)
 		}else {
 			return false
 		}
 	}

 	closeDetail() {
 		this.props.dispatch(Action.cleanDetail());
 	}
 }

function mapStateToProps (state) {
	return {
		data: state.data
	}
}

 export default connect(mapStateToProps)(Detail);