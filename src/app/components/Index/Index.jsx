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
import Store from '../../stores/store';
import Action from'../../actions/action';

// require common mixins
import ImageModules from '../Mixins/ImageModules'; 

// define Index component
var Index = React.createClass({

	mixins: [ImageModules],

	getInitialState() {
		return {
			items: Store.getState()
		};
	},

	componentDidMount() {
		var unsubscribe = Store.subscribe(this.onChange);
	},

	onChange() {
		console.log(Store.getState());
		this.setState({
			items: Store.getState()
		});
	},

	handleAdd() {
		var value = findDOMNode(this.refs.todo).value;
		Store.dispatch(Action.add(value));
	},

	handleDelete(index) {
		Store.dispatch(Action.delete(index));
	},

	handleComplete(index) {
		Store.dispatch(Action.complete(index));
	},

	render() {
		var _this = this;
		return (

			<div className="inner">
				<input ref="todo" type="text" placeholder="输入todo项" style={{marginRight:'10px'}} />
				<button onClick={this.handleAdd}>点击添加111</button>
				<ul>
					{this.state.items.todos.map(function(item,index){
						return <li>
						<span>{item.text}&nbsp;&nbsp;&nbsp;</span>
						<span onClick={_this.handleComplete.bind(_this,index)}>{item.completed==true?'completed':'not completed'}</span>
						<span onClick={_this.handleDelete.bind(_this, index)}> delete</span>
						</li>;
					})}
				</ul>
			</div>

			);
	},

});

module.exports = Index;
