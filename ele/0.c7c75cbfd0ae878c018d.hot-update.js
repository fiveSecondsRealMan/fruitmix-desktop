exports.id = 0;
exports.modules = {

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
	            'logo': __webpack_require__(225)
	        };
	    }

	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(219); if (makeExportsHot(module, __webpack_require__(60))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "ImageModules.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }

};