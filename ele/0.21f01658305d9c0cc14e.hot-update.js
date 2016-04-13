exports.id = 0;
exports.modules = {

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, __dirname) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(205), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(7), React = __webpack_require__(60); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	 * @component Index
	 * @description 首页组件
	 * @time 2016-4-5
	 * @author liuhua
	 **/

	'use strict';

	// require core module

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(60);

	var _react2 = _interopRequireDefault(_react);

	var _utilsBase = __webpack_require__(218);

	var _utilsBase2 = _interopRequireDefault(_utilsBase);

	// import Store from '../../stores/store';
	// import Action from'../../actions/action';

	// require common mixins

	var _MixinsImageModules = __webpack_require__(222);

	var _MixinsImageModules2 = _interopRequireDefault(_MixinsImageModules);

	//import CSS

	var _assetsCssIndex = __webpack_require__(224);

	var _assetsCssIndex2 = _interopRequireDefault(_assetsCssIndex);

	// define Index component
	var Index = _react2['default'].createClass({
		displayName: 'Index',

		mixins: [_MixinsImageModules2['default']],

		getInitialState: function getInitialState() {
			return {};
		},

		componentDidMount: function componentDidMount() {
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

		prepareButton: function prepareButton(buttonEl, soundName) {
			buttonEl.querySelector('span').style.backgroundImage = 'url("../../assets/images/index/icons/' + soundName + '.png")';

			var audio = new Audio(__dirname + 'assets/wav/' + soundName + '.wav');
			buttonEl.addEventListener('click', function () {
				audio.currentTime = 0;
				audio.play();
			});
		},

		//close window
		closeWindow: function closeWindow() {
			console.log(ipc);
			ipc.send('close-main-window');
		},

		openSetting: (function (_openSetting) {
			function openSetting() {
				return _openSetting.apply(this, arguments);
			}

			openSetting.toString = function () {
				return _openSetting.toString();
			};

			return openSetting;
		})(function () {
			openSetting();
		}),

		render: function render() {
			var _this = this;
			return _react2['default'].createElement(
				'div',
				{ className: 'frame' },
				'12311',
				_react2['default'].createElement(
					'div',
					{ className: 'settings', onClick: this.openSetting },
					'Settings'
				),
				_react2['default'].createElement(
					'div',
					{ className: 'close', onClick: this.closeWindow },
					'Close'
				),
				_react2['default'].createElement(
					'div',
					{ id: 'main', className: 'container-fluid' },
					_react2['default'].createElement(
						'div',
						{ className: 'row' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-12' },
							_react2['default'].createElement(
								'div',
								{ className: 'speaker' },
								_react2['default'].createElement('img', { src: '../../assets/images/index/speaker.png' })
							),
							_react2['default'].createElement(
								'h1',
								null,
								_react2['default'].createElement('img', { src: '../../assets/images/index/logo.png' })
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'row buttons' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'ba-dum-tsss' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'money' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'ba-dum-tsss' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'money' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'row buttons' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'ba-dum-tsss' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'money' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'ba-dum-tsss' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'money' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'row buttons' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'ba-dum-tsss' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'money' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'ba-dum-tsss' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'money' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						)
					),
					_react2['default'].createElement(
						'div',
						{ className: 'row buttons' },
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'ba-dum-tsss' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'money' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'ba-dum-tsss' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						),
						_react2['default'].createElement(
							'div',
							{ className: 'col-xs-3' },
							_react2['default'].createElement(
								'div',
								{ className: 'button-sound', 'data-sound': 'money' },
								_react2['default'].createElement('span', { className: 'button-icon' })
							)
						)
					)
				)
			);
		}

	});

	module.exports = Index;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(219); if (makeExportsHot(module, __webpack_require__(60))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Index.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module), "/"))

/***/ }

};