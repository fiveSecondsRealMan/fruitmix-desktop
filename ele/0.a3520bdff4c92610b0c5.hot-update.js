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

	var _MixinsImageModules = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../Mixins/ImageModules\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _MixinsImageModules2 = _interopRequireDefault(_MixinsImageModules);

	//import CSS

	var _assetsCssIndex = __webpack_require__(226);

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
				'12311aa',
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
								_react2['default'].createElement('img', { src: this.defineImageModules()['speaker'] })
							),
							_react2['default'].createElement(
								'h1',
								null,
								_react2['default'].createElement('img', { src: this.defineImageModules()['logo'] })
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

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(205), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(7), React = __webpack_require__(60); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	 * @author liuhua
	 * @time 2016-4-5
	 * @description 404页面
	**/

	'use strict';

	// require core module
	var React = __webpack_require__(60);

	var ImageModules = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Mixins/ImageModules\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	__webpack_require__(231);

	// define about component
	var NofondPage = React.createClass({
		displayName: 'NofondPage',

		mixins: [ImageModules],

		render: function render() {
			return React.createElement(
				'div',
				{ className: 'noFondPage bg' },
				React.createElement(
					'div',
					{ className: 'cont' },
					React.createElement(
						'div',
						{ className: 'c1' },
						React.createElement('img', { src: this.defineImageModules()['not-found'], className: 'img1' })
					),
					React.createElement(
						'h2',
						null,
						'哎呀…您访问的页面不存在'
					),
					React.createElement(
						'div',
						{ className: 'c2' },
						React.createElement(
							'a',
							{ href: '#', className: 're' },
							'返回'
						),
						React.createElement(
							'a',
							{ href: '#', className: 'home' },
							'网站首页'
						),
						React.createElement(
							'a',
							{ href: '#', className: 'sr' },
							'搜索一下页面相关信息'
						)
					),
					React.createElement(
						'div',
						{ className: 'c3' },
						React.createElement(
							'a',
							{ href: '#', className: 'c3' },
							'ME'
						),
						'提醒您 - 您可能输入了错误的网址，或者该网页已删除或移动'
					)
				)
			);
		}
	});

	// export NofondPage component
	module.exports = NofondPage;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(219); if (makeExportsHot(module, __webpack_require__(60))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "404.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

/***/ 237:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(205), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(7), React = __webpack_require__(60); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	 * @component Settings
	 * @description setting component
	 * @time 2016-4-12
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

	var _MixinsImageModules = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../Mixins/ImageModules\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _MixinsImageModules2 = _interopRequireDefault(_MixinsImageModules);

	//import CSS

	var _assetsCssSettings = __webpack_require__(238);

	var _assetsCssSettings2 = _interopRequireDefault(_assetsCssSettings);

	// define Index component
	var Settings = _react2['default'].createClass({
		displayName: 'Settings',

		mixins: [_MixinsImageModules2['default']],

		getInitialState: function getInitialState() {
			return {};
		},

		componentDidMount: function componentDidMount() {},

		render: function render() {
			var _this = this;
			return _react2['default'].createElement(
				'div',
				{ className: 'frame' },
				'123'
			);
		}

	});

	module.exports = Settings;

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(219); if (makeExportsHot(module, __webpack_require__(60))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "Setting.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

};