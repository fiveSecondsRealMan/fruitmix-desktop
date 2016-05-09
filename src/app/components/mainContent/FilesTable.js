/**
 * @component AllFilesTable
 * @description AllFilesTable
 * @time 2016-5-6
 * @author liuhua
 **/
 'use strict';
// require core module
import React, { findDOMNode, Component, PropTypes } from 'react';
import { connect, bindActionCreators } from 'react-redux';
//import Action
import Action from '../../actions/action';
import svg from '../../utils/SVGIcon';


class AllFilesTable extends Component {
	render() {
		var _this = this;
		return (
			<table className="allFileTable">
				<thead>
					<tr>
						<th onClick={this.selectAllChildren.bind(this)}>
							<div className='selectBox' >
								<div>{this.props.data.selectAll?svg.select():svg.blackFrame()}</div>
								<div></div>
								<div></div>
							</div>
						</th>
						<th>name</th>
						<th>update time</th>
						<th>size</th>
					</tr>
				</thead>
				<tbody>
					{this.props.data.children.map((item,index)=>{
						return (
							<tr key={index} onTouchTap={_this.selectChildren.bind(_this,index)} onDoubleClick={_this.enterChildren.bind(_this,index)} 
							className={item.checked==true?'tr-selected-background':''}>
								<td onClick={this.addBezier.bind(this,index)} data-selected={item.checked} className='first-td'>
									<div className='selectBox'>
										<div>{item.checked==false?svg.blackFrame():svg.select()}</div>
										<div className='bezierFrame' style={{width:48,height:48}}>
											<div className="bezierTransition1"></div>
											<div className="bezierTransition2"></div>
										</div>
										<div></div>
									</div>
								</td>
								<td title={item.attribute.name}>{item.attribute.name}</td>
								<td title={item.attribute.changetime}>{item.attribute.changetime}</td>
								<td title={item.attribute.size}>{item.attribute.size}</td>
							</tr>
							)
					})}
				</tbody>
			</table>
			)
		}

	enterChildren (rowNumber) {
		//bezier 
		$('.bezierFrame').empty().append('<div class="bezierTransition1"></div><div class="bezierTransition2"></div>');

		var children = this.props.data.children;
		if (children[rowNumber] && children[rowNumber].type == 'folder') {
			ipc.send('enterChildren',children[rowNumber]);
		}
	}

	selectChildren (rowNumber,e) {
		//bezier
		if (this.props.data.children[rowNumber].checked == true) {
			this.bez1(rowNumber);
		}else {
			this.bez2(rowNumber);
		}
		
		if (e.nativeEvent.button == 2) {
			let x = e.nativeEvent.pageX;
			let y = e.nativeEvent.pageY;
			this.props.dispatch(Action.toggleMenu(this.props.data.children[rowNumber],x,y));
		}else {
			//action
			this.props.dispatch(Action.selectChildren(rowNumber));	
		}
		
	}

	addBezier (rowNumber) {
		if (this.props.data.children[rowNumber].checked == false) {
			this.bez2(rowNumber);
			$('tbody>tr:eq('+rowNumber+') .bezierFrame').children('.bezierTransition1').addClass('open');
		}else {
			this.bez1(rowNumber);
			$('tbody>tr:eq('+rowNumber+') .bezierFrame').children('.bezierTransition2').addClass('open');
			
		}
	}
	bez1 (rowNumber) {
		$('tbody>tr:eq('+rowNumber+') .bezierFrame').children('.bezierTransition1').remove();
		$('tbody>tr:eq('+rowNumber+') .bezierFrame').append('<div class="bezierTransition1"></div>');
	}

	bez2 (rowNumber) {
		$('tbody>tr:eq('+rowNumber+') .bezierFrame').children('.bezierTransition2').remove();
		$('tbody>tr:eq('+rowNumber+') .bezierFrame').append('<div class="bezierTransition2"></div>');
	}

	selectAllChildren() {
 		this.props.dispatch(Action.selectAllChildren());
	}
}

function mapStateToProps (state) {
	return {
		data: state.data
	}
}

export default connect(mapStateToProps)(AllFilesTable);