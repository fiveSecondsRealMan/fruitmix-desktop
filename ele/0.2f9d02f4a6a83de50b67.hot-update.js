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
			// buttonEl.querySelector('span').style.backgroundImage = 'url("../../assets/images/index/icons/' + soundName + '.png")';
			buttonEl.querySelector('span').style.backgroundImage = this.defineImageModules()[soundName];

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

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(205), RootInstanceProvider = __webpack_require__(5), ReactMount = __webpack_require__(7), React = __webpack_require__(60); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	/**
	  * @name 图片模型
	  * @descriptions 组件所需要的图片
	  * @author liuhua
	  * @datetime 2016-4-6  
	*/

	'use strict';

	module.exports = {

	    defineImageModules: function defineImageModules() {
	        return {
	            'not-found': __webpack_require__(223),
	            'speaker': __webpack_require__(224),
	            'logo': __webpack_require__(225),
	            'ba-dum-tsss': __webpack_require__(240),
	            'money': __webpack_require__(241)
	        };
	    }

	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(219); if (makeExportsHot(module, __webpack_require__(60))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ImageModules.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "cd64fd136d56db19dc6f5e0c279e6c56.png";

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "0d6de297b94320457ccd1f2cbb00859a.png";

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "497563e12ecf71639ae28107ecca67bb.png";

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

	var ImageModules = __webpack_require__(222);

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

	var _MixinsImageModules = __webpack_require__(222);

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

/***/ },

/***/ 240:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADoElEQVR4Xu2a/XHTQBDF91UAqQDoIKkAXAGkAkgFhAogFRAqgHSQVEBSAUkFkApIKljm5zkxskcn62MtybH2H88k0ur23dvPO9mei/bcfpsBmBmw5wjMLrDnBJiD4OwCswtMGAF3/2xmb9ISryWdRS93si7g7udm9nHN4G+STiNBmCQA7v7czP5WGSopdM2hyqJ2xt2h/c+MviNJt1HfmhwAafeh/pcKIx8lwY4wmQwAyfCvZvYhY90j/5N0GWa92TQKoRTtCW7l3b0zs3cJkAczu5T0J9J4dI3KAHc/NLPvZsbvupxI+hFt8Lq+0QBwd3YX43M+fSCJnd+qjAKAu+PnGJ+TG0lFAfS0AGhgPAY/TQA25PfyTp9JqkqD4WwYzAVSmvtlZi8bWPH0GJCp7XcnBrj765SuylGbkvRuU36uq+0zCDxIOmjAlN6PLF3A3Sk9iczQk0rrEyko+ez7VJDUlaAAcS7pompF7o4/09q2kVebgG2jLPes3J0KjBK0LBhEDm6biqjUAG+lXHV3Oru2NTx6aIm3KgDwu2FgarMQKriCRVR5BL+2civpqO1LbZ8HAM+8dGJm14n+sORFS+WwaJHeryt66tQuJLGGrQkAQNe3FV9Y8cGWUbxQBwj3Gf1NjGIMBoj/JQVU1kspjVvBsGI+AFhXbeYFAEDg48XyDlc2Ig2ruCaGtXlmyYLSnGC9a6zSRSzCDRmh1fYTRRYASQLeMgvURd+OEb2NwevPsru4Y65rrNON8WSn5TA1ZTXSOX+/AJxOlaC7wxgU7YoAIqzAbQoBhEVXAGAK2WPX5aoTAIlO+BhF0k5LHwB2gQU3xIDk81VT5rvOACQW5FLo2KxgnnhariEyceu4LwCbJjtjAEE/gvEr6S+lUXqSYv5IdrjsC0D2BGcMy0mXbQepvQCYmBt0ap4iAKjqJocmAEVN7kCldi0RAHTt9qJAotc43FTy5j7WG4DkBrmOMsrIOj29OsYoAMYqjXsPT6MAGKsq7LX70CoKgC4zv77ucS+pyYh9u0EwxYC6Cw19Dc29H3JdJooBYwAQclMkBIAxMkHUXaFdBaB39C/8KhKAIVMhg8/ydKdznIkEYMhMcBx1VygMgFI2oCZnd5513pbqFyl5YRlt7PSvyaVxO3m6OF6rOmZjsMrtr3WD6OWL4zl+OSXaynWZUAYE7/gg6mYABoF5wh+ZGTDhzRlkaTMDBoF5wh+ZGTDhzRlkaXvPgH+XG0JACKmLzgAAAABJRU5ErkJggg=="

/***/ },

/***/ 241:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD80lEQVR4Xu2ajW0WMQyG7QmgEwATABNAJwAmoExAmYB2AsoE0AkoE9BOAJ0AOgFlAqNH8knhxP3Ezt33Sb1I1XeVLhf79eufOFFZeZjZpYg8G1pWVXVNkVZdDMU2ADYGbC6wxYAtCN7FLGBmD93yJyLC89S4FZEfIvLLf69Ulf+bjkXToJndF5G3InI0U+kp5QDlQkTOVZVYkh6LAOCKf3DF00IOfABmHKoqv+HRHAAzeykin0QE6y89Hu0VAGaG1Y+X1tq/f62qT7JrNWOAmWF1fH2t8VFV02A3AcDMUBwA1hyvVJWAmBppADy9/UxJEZt8oKpkhdRoAcBnEXkdlOLK55HfS3/m+d7IN6kJngfX/GdaCoCg9f94oLwYs6B/GyBQlMzyoJD8VFUpqNIjC0Ct799g6Qh1zQwgWA+2kf93XwiZGUHoRYUZ0oELZmRzfylvlgHfe747isXa7a45hskCYHMW6d658wCIyBtVJWvszcgygDw8lq76ivI+Aaz5tjaKaBaA0fbWgFCAcKyq51GhW87LApApggCPfN4knUVByQJAgfIlurjPYz9PUfM1Uh8k15YUACxuZrVxYEjm5t2eOeC0AKC2GpwjF6w489ZXesMztmAaAGdBJBjOAYJ3iDPvlnKPVgDQ/gKEx3O1qnwPFpyp6mnlvMnXmwDgLFgaBJahfqCYalZHNAOgAAHfjfYHJi0mIrABENLdIBZrCkAnvXeGAaLcw89Rruad9M5yMQAKIMjvZIklgIAJT7Nb40UY0DejN03p4LYOkpeqelhDm/67qwBQMIIWF4zot7gyOqS6Q6sCUGrpcQIgsgGTEprvhMbOAChYwUkx7sEhamTcqupBZOLiQbBGKO8Ck9oicYJgGKoNds6AnltEi6lwHNgrAIpi6ncNe7yvEDon2DsAHITaRkv4oGRfAcCa7ytYwG6RyrN67CsAtQzYXQzwIyus1aS/59drOG2uuWESvimSZoCZlXSlJ4D1Qv09V/5bzWmTiNyo6pxbZ/91jxYADB2PkdMBZPJ6myvOGePcK3SlMqmbIikAXPC5Katsf3fP7A2geuasP0z/dCXo9Xy2LV4duYsJKeu3AIDUE63hM4oz9xrmZJulWReoOh7PalzM55YJyofq/1KOMACV/t9Qd2mmfMoFduT/0P6oheU7i2QYQO4lbWUbGnPYgdVPouXu2AJhALqP+j6ejgytrshefkw+LlURaD9ng93QImkAevt5WAEY5Hf+agHB0tQIBDeu0aWD3BS9mgLQX8wDZXcBsgNlzGXC29opRVdhwJQQvnGi1h8aGwCtboBOGSOdBeYu0IsR1PwbAzYX2GLAFgT3Jgv8BYWHflD4B9YtAAAAAElFTkSuQmCC"

/***/ }

};