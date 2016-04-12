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

// require common mixins
import ImageModules from '../Mixins/ImageModules'; 

//import ipc
// import {ipc} from 'electron';
// var ipc = require("ipc");

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
		var soundButtons = document.querySelectorAll('.button-sound');
		var closeEl = document.querySelector('.close');
		var settingsEl = document.querySelector('.settings');

		var trayIcon = null;
		var trayMenu = null;
		//bind image and sound
		for (var i = 0; i < soundButtons.length; i++) {
	    		var soundButton = soundButtons[i];
	    		var soundName = soundButton.attributes['data-sound'].value;

	    		this.prepareButton(soundButton, soundName);
		}
	},

	prepareButton(buttonEl, soundName) {
 		buttonEl.querySelector('span').style.backgroundImage = 'url("../../assets/images/index/icons/' + soundName + '.png")';

    		var audio = new Audio(__dirname + 'assets/wav/' + soundName + '.wav');
    		buttonEl.addEventListener('click', function () {
	        	audio.currentTime = 0;
	        	audio.play();
	    	});
	},

	//close window
	closeWindow() {
		close();
	},

	render() {
		var _this = this;
		return (
			<div className='frame'>
				<div className="settings">Settings</div>
				<div className="close" onClick={this.closeWindow}>Close</div>
				<div id="main" className="container-fluid">
				    <div className="row">
				        <div className="col-xs-12">
				            <div className="speaker">
				                <img src="../../assets/images/index/speaker.png"/>
				            </div>
				            <h1>
				                <img src="../../assets/images/index/logo.png"/>
				            </h1>
				        </div>
				    </div>
				    <div className="row buttons">
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="ba-dum-tsss">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="money">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="ba-dum-tsss">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="money">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				    </div>
				    <div className="row buttons">
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="ba-dum-tsss">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="money">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="ba-dum-tsss">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="money">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				    </div>
				    <div className="row buttons">
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="ba-dum-tsss">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="money">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="ba-dum-tsss">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="money">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				    </div>
				    <div className="row buttons">
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="ba-dum-tsss">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="money">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="ba-dum-tsss">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				        <div className="col-xs-3">
				            <div className="button-sound" data-sound="money">
				                <span className="button-icon"></span>
				            </div>
				        </div>
				    </div>
				</div>
			</div>
			);
	},

});

module.exports = Index;
