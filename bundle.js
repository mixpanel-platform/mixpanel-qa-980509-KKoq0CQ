/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// Stylesheets
	__webpack_require__(1);
	__webpack_require__(5);
	// Add content to HTML
	var content = __webpack_require__(18)();
	$('body').html(content);
	__webpack_require__(21);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../css-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  box-sizing: content-box; /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./app.styl", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/stylus-loader/index.js!./app.styl");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n.clearfix:before,\n.clearfix:after {\n  content: \" \";\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n}\n.center-contents {\n  text-align: center;\n  white-space: nowrap;\n}\n.center-contents:before,\n.center-contents-vertical:before {\n  content: '';\n  display: inline-block;\n  vertical-align: middle;\n  height: 100%;\n  margin-right: -0.25em;\n}\n.center-vertical {\n  display: inline-block;\n  vertical-align: middle;\n}\n.hidden {\n  display: none !important;\n}\n.loading {\n  position: relative;\n}\n.loading * {\n  -webkit-transition: none !important;\n  -moz-transition: none !important;\n  -ms-transition: none !important;\n  -o-transition: none !important;\n  transition: none !important;\n}\n* {\n  box-sizing: border-box;\n}\n.dashboard-body {\n  padding: 0;\n  font-size: 16px;\n  line-height: 1;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  color: #747d94;\n  margin: 0;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\nhr {\n  margin: 0;\n  border: 0;\n  border-top: 1px solid #dfe6ef;\n  -webkit-transform: scaleY(0.5);\n  -moz-transform: scaleY(0.5);\n  -ms-transform: scaleY(0.5);\n  -o-transform: scaleY(0.5);\n  transform: scaleY(0.5);\n}\nbutton {\n  border: 0;\n  outline: none;\n  margin: 0;\n  padding: 0;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n.pull-left {\n  float: left;\n}\n.pull-right {\n  float: right;\n}\n.column {\n  width: 50%;\n  padding: 0 20px 0 20px;\n}\n.column.pull-left {\n  padding-right: 10px;\n}\n.column.pull-right {\n  padding-left: 10px;\n}\n.column .container-section {\n  margin: 0 0 20px 0;\n}\n#container-logo-title {\n  position: relative;\n  text-align: center;\n  height: 40px;\n}\n.container-report {\n  width: 100%;\n  max-width: 980px;\n  min-width: 850px;\n  margin: auto;\n  background-color: #d9dfe9;\n}\n.container-section {\n  background-color: #eff1f6;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 4px;\n}\n.container-chart {\n  background-color: #dfe2ec;\n  padding: 1px 1px 1px;\n  border-radius: 2px;\n}\n.container-chart-header {\n  background-color: inherit;\n  position: relative;\n}\n.container-chart-title {\n  background-color: inherit;\n  position: relative;\n  text-align: center;\n  padding: 8px 0;\n  z-index: 4;\n}\n.container-chart-contents {\n  position: relative;\n  vertical-align: top;\n  display: inline-block;\n  background-color: #fff;\n  width: 100%;\n  z-index: 1;\n  border-radius: 0 0 2px 2px;\n}\n.container-meter {\n  display: inline-block;\n}\n.container-pie-chart,\n.container-bar-chart,\n.container-line-chart {\n  background-color: #fff;\n  border-radius: 0 0 2px 2px;\n}\n.container-pie-chart {\n  padding: 20px;\n}\n.container-pie-chart-legend {\n  margin-left: 14px;\n  vertical-align: middle;\n  display: inline-block;\n}\n.container-bar-chart,\n.container-line-chart {\n  overflow: hidden;\n  position: relative;\n  height: 215px;\n}\n.container-x-axis,\n.container-y-axis {\n  background-color: #fbfcfd;\n  position: absolute;\n  left: 0;\n  border-radius: 0 0 2px 2px;\n}\n.container-y-axis {\n  text-align: center;\n  width: 30px;\n  height: 100%;\n  top: 0;\n}\n.container-x-axis {\n  height: 30px;\n  width: 100%;\n  bottom: 0;\n}\n.container-line-chart-points {\n  position: absolute;\n  left: 30px;\n  bottom: 24px;\n}\n.container-bar {\n  width: 12.5%;\n  display: inline-block;\n  text-align: center;\n}\n.container-options-start-event,\n.container-options-global-filter,\n.global-filter-button {\n  background: #f4f4f6;\n}\n.container-options-start-event,\n.container-options-global-filter {\n  position: relative;\n  border-left: 1px solid #dfe2ec;\n  border-right: 1px solid #dfe2ec;\n  border-top: 1px solid #dfe2ec;\n}\n.container-options-start-event {\n  padding: 19px 19px 20px 19px;\n  border-radius: 2px 2px 0 0;\n}\n.filter-controls-group {\n  display: inline-block;\n}\n.container-controls-global-filter {\n  position: absolute;\n  top: 19px;\n  left: 19px;\n}\n.container-options-global-filter {\n  height: 80px;\n  -webkit-transition: height 0.3s;\n  -moz-transition: height 0.3s;\n  -ms-transition: height 0.3s;\n  -o-transition: height 0.3s;\n  transition: height 0.3s;\n}\n.container-options-global-filter.inactive {\n  height: 0;\n}\n.globe-icon {\n  width: 16px;\n  background-size: 16px 16px;\n  background-image: url(" + __webpack_require__(7) + ");\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-right: 5px;\n}\n.globe-icon,\n.global-filter-text {\n  display: inline-block;\n  vertical-align: top;\n  height: 38px;\n}\n.global-filter-help {\n  background-image: url(" + __webpack_require__(8) + ");\n  background-size: 16px 16px;\n  position: absolute;\n  top: 19px;\n  right: 19px;\n  width: 16px;\n  height: 16px;\n}\n.global-filter-help:hover .global-filter-help-tooltip {\n  display: block;\n}\n.global-filter-help-tooltip {\n  display: none;\n  background: #fff;\n  color: #747d94;\n  position: absolute;\n  top: -14px;\n  right: 28px;\n  width: 180px;\n  font-size: 0.625rem;\n  line-height: 0.875rem;\n  padding: 15px 10px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 600;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);\n}\n.global-filter-help-tooltip::after {\n  content: '';\n  position: absolute;\n  top: 12px;\n  right: -8px;\n  width: 0;\n  height: 0;\n  border: 10px solid #000;\n  border-color: transparent transparent #fff #fff;\n  box-shadow: -1px 1px 2px 0 rgba(0,0,0,0.05);\n  -webkit-transform: rotate(225deg);\n  -moz-transform: rotate(225deg);\n  -ms-transform: rotate(225deg);\n  -o-transform: rotate(225deg);\n  -webkit-transform: rotate(225deg);\n  -moz-transform: rotate(225deg);\n  -ms-transform: rotate(225deg);\n  -o-transform: rotate(225deg);\n  transform: rotate(225deg);\n  border-radius: 2px;\n}\n.global-filter-covers {\n  position: absolute;\n  bottom: -20px;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n}\n.global-filter-cover-1 {\n  height: 20px;\n  background: #eff1f6;\n  border-radius: 0 0 2px 2px;\n}\n.global-filter-cover-2 {\n  height: 20px;\n  background: #d9dfe9;\n}\n.global-filter-button {\n  height: 40px;\n  border: 1px solid #dfe2ec;\n  color: #3e506a;\n  cursor: pointer;\n  font-size: 0.625rem;\n  line-height: 38px;\n  text-align: center;\n  position: relative;\n  border-radius: 0 0 2px 2px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.global-filter-button:hover:not(.button-click) {\n  background: #e9f2fa;\n  color: #61adf0;\n}\n.global-filter-button:hover:not(.button-click) .globe-icon {\n  background-image: url(" + __webpack_require__(9) + ");\n}\n.global-filter-button.inactive {\n  margin-top: -1px;\n}\n.button {\n  display: inline-block;\n  padding: 13px 15px;\n  font-size: 0.625rem;\n  line-height: 0.875rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);\n}\n.button.action {\n  background-color: #61adf0;\n  color: #fff;\n}\n.button.action:active {\n  background-color: #4d98e2;\n}\n.button.enabled {\n  background-color: #fff;\n  color: #747d94;\n}\n.button.disabled {\n  background-color: #f5f6f8;\n  color: #87929c;\n}\n.button-content {\n  display: inline-block;\n}\n.button-text {\n  font-size: 0.625rem;\n}\n.disclosure-indicator {\n  vertical-align: middle;\n  width: 10px;\n  height: 7px;\n}\n.meter-heading {\n  font-size: 1rem;\n  margin-bottom: 20px;\n}\n.meter-background {\n  position: relative;\n  background-color: #dfe2ec;\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);\n}\n.meter-value-circle {\n  position: relative;\n  display: inline-block;\n  width: 130px;\n  height: 130px;\n  margin: 10px;\n  background-color: #fff;\n  z-index: 2;\n  border-radius: 50%;\n}\n.meter-value {\n  font-size: 2rem;\n}\n.meter-svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: transparent;\n  z-index: 1;\n  -webkit-transform: rotate(-90deg);\n  -moz-transform: rotate(-90deg);\n  -ms-transform: rotate(-90deg);\n  -o-transform: rotate(-90deg);\n  -webkit-transform: rotate(-90deg);\n  -moz-transform: rotate(-90deg);\n  -ms-transform: rotate(-90deg);\n  -o-transform: rotate(-90deg);\n  transform: rotate(-90deg);\n  border-radius: 50%;\n}\n.meter-progress {\n  stroke-width: 32;\n  stroke-dasharray: 0 100;\n  fill: transparent;\n}\n.chart-title {\n  color: #747d94;\n  font-size: 1rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 800;\n}\n.chart-title-shadow {\n  background-color: transparent;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1px;\n  z-index: 3 /* Place the shadow below container-chart-title div */;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);\n}\n.chart-vertical-divider {\n  background-color: #dfe2ec;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 1px;\n  height: 100%;\n  z-index: 1;\n}\n.mp-dropdown {\n  position: absolute;\n  top: 54px;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  transform: translateX(-50%);\n  width: 200px;\n  padding: 10px 20px;\n  background-color: #fff;\n  border-radius: 8px;\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);\n}\n.mp-dropdown::after {\n  content: '';\n  position: absolute;\n  top: -10px;\n  left: calc(50% - 10px);\n  width: 0;\n  height: 0;\n  border: 10px solid #000;\n  border-color: transparent transparent #fff #fff;\n  box-shadow: -1px 1px 2px 0 rgba(0,0,0,0.05);\n  -webkit-transform: rotate(135deg);\n  -moz-transform: rotate(135deg);\n  -ms-transform: rotate(135deg);\n  -o-transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n  -moz-transform: rotate(135deg);\n  -ms-transform: rotate(135deg);\n  -o-transform: rotate(135deg);\n  transform: rotate(135deg);\n  border-radius: 2px;\n}\n.mp-dropdown-item {\n  margin: 8px 10px;\n  color: #747d94;\n  cursor: pointer;\n  font-size: 0.625rem;\n  line-height: 0.875rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.mp-dropdown-item:hover {\n  color: #61adf0;\n}\n.mp-iv-table li:nth-of-type(odd) {\n  background-color: #f5f6f8;\n}\n.mp-iv-table li:nth-of-type(even) {\n  background-color: #fff;\n}\n.mp-iv-table li:last-of-type {\n  border-radius: 0 0 2px 2px;\n}\n.mp-iv-table-row {\n  padding: 6px 20px;\n}\n.mp-iv-table-row h2 {\n  font-size: 0.75rem;\n}\n.mp-iv-table-header {\n  padding: 5px 20px;\n  background-color: #f5f6f8;\n}\n.mp-iv-table-header-title {\n  font-size: 0.5rem;\n}\n.mp-bar-chart,\n.mp-line-chart,\n.mp-pie-chart {\n  height: 210px;\n  background-color: #fbfcfd;\n  border-radius: 0 0 2px 2px;\n}\n.mp-line-chart {\n  height: 330px;\n}\n.mp-line-chart .graph {\n  height: 330px;\n}\n.mp-line-chart svg > path {\n  display: none;\n}\n.mp-line-chart svg > rect:nth-of-type(2) {\n  stroke: #fbfcfd;\n}\n.mp-line-chart svg > rect:nth-of-type(3) {\n  rx: 0;\n  ry: 0;\n}\n.mp-pie-chart {\n  background-color: #fff;\n  border-radius: 0 0 2px 2px;\n}\n.mp-number-picker.mine,\n.mp-unit-picker,\n.mp-combined-picker {\n  display: inline-block;\n  height: 24px;\n  background-color: #fff;\n  border: 1px solid #dfe2ec;\n  color: #747d94;\n  font-size: 0.625rem;\n  text-align: center;\n  margin: 0 4px;\n  border-radius: 4px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.mp-number-picker,\n.mp-unit-picker {\n  line-height: 24px;\n}\n.mp-number-picker {\n  width: 30px;\n}\n.mp-unit-picker {\n  width: 52px;\n}\n.mp-combined-picker {\n  position: relative;\n}\n.mp-combined-picker::after {\n  content: '';\n  width: 1px;\n  height: 22px;\n  position: absolute;\n  top: 0;\n  left: 30px;\n  background-color: #dfe2ec;\n}\n.mp-combined-picker .mp-number-picker,\n.mp-combined-picker .mp-unit-picker {\n  height: auto;\n  border: 0;\n  margin: 0;\n  line-height: 22px;\n}\n.flows-chart-area {\n  position: relative;\n  padding: 20px;\n  background-color: #fff;\n  border-radius: 0 0 2px 2px;\n}\n.banner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -31px;\n  margin-left: -205px;\n  padding: 12px 10px;\n  background: #f8f9fc;\n  border: 1px solid #d4e0e8;\n  width: 410px;\n  height: 62px;\n  border-radius: 5px;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);\n}\n.banner-title,\n.banner-message {\n  color: #3e506a;\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 1.357142857142857;\n}\n.banner-title {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.banner-message {\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n}\n.banner-icon {\n  margin-right: 10px;\n  float: left;\n}\n.banner-icon-no-results {\n  background-image: url(" + __webpack_require__(10) + ");\n  background-size: 41px 37px;\n  width: 41px;\n  height: 37px;\n}\n.banner-icon-get-started {\n  background-image: url(" + __webpack_require__(11) + ");\n  background-size: 40px 34px;\n  width: 40px;\n  height: 34px;\n}\n.flows-chart-legend-item {\n  display: inline-block;\n  width: 30px;\n  height: 20px;\n}\n.flows-chart-legend-text {\n  font-size: 0.375rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.flows-chart-path-stroke-0 {\n  z-index: 8;\n}\n.flows-chart-path-stroke-0 path {\n  stroke: #416da6;\n}\n.flows-chart-path-stroke-1 {\n  z-index: 7;\n}\n.flows-chart-path-stroke-1 path {\n  stroke: #2292d8;\n}\n.flows-chart-path-stroke-2 {\n  z-index: 6;\n}\n.flows-chart-path-stroke-2 path {\n  stroke: #5eaeeb;\n}\n.flows-chart-path-stroke-3 {\n  z-index: 5;\n}\n.flows-chart-path-stroke-3 path {\n  stroke: #b6d7f2;\n}\n.flows-chart-path-stroke-4 {\n  z-index: 4;\n}\n.flows-chart-path-stroke-4 path {\n  stroke: #edf4fa;\n}\n.flows-chart-path-stroke-5 {\n  z-index: 3;\n}\n.flows-chart-path-stroke-5 path {\n  stroke: #f7fafc;\n}\n.flows-chart-path {\n  position: absolute;\n  display: inline-block;\n}\n.flows-chart-path path {\n  fill: none;\n  fill-rule: evenodd;\n  stroke-linecap: square;\n  stroke-linejoin: round;\n  stroke-width: 5;\n}\nsvg:not(:root) {\n  overflow-x: scroll;\n}\n.flows-chart-point {\n  cursor: pointer;\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  z-index: 10;\n}\n.flows-chart-point .flows-chart-point-tooltip {\n  display: none;\n}\n.flows-chart-point:hover {\n  z-index: 15;\n}\n.flows-chart-point:hover .flows-chart-point-tooltip {\n  display: inline-block;\n}\n.flows-chart-point.flows-chart-max-point .flows-chart-point-tooltip {\n  left: -190px;\n}\n.flows-chart-point.flows-chart-max-point .flows-chart-point-tooltip::after {\n  left: 168px;\n  -webkit-transform: rotate(225deg);\n  -moz-transform: rotate(225deg);\n  -ms-transform: rotate(225deg);\n  -o-transform: rotate(225deg);\n  -webkit-transform: rotate(225deg);\n  -moz-transform: rotate(225deg);\n  -ms-transform: rotate(225deg);\n  -o-transform: rotate(225deg);\n  transform: rotate(225deg);\n}\n.flows-chart-point.flows-chart-end-point .flows-chart-point-drop-off-percentage {\n  fill: #3e506a;\n  stroke: #3e506a;\n}\n.flows-chart-point.flows-chart-end-point .flows-chart-point-tooltip hr:nth-of-type(2) {\n  display: none;\n}\n.flows-chart-point.flows-chart-end-point .flows-chart-point-tooltip .flows-chart-point-tooltip-event-exit-count {\n  display: none;\n}\n.flows-chart-point-contents {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  z-index: 10;\n  border-radius: 50%;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 800;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);\n}\n.flows-chart-point-effect::before,\n.flows-chart-point-effect::after {\n  content: '';\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  left: 50%;\n  margin-top: -30px;\n  margin-left: -30px;\n  width: 60px;\n  height: 60px;\n  opacity: 0;\n  pointer-events: none;\n  border-radius: 50%;\n}\n.flows-chart-point-effect::before {\n  box-shadow: 0 0 0 5px rgba(140,152,158,0.5);\n}\n.flows-chart-point-effect.button-click::before {\n  animation-name: flows-chart-point-effect-1;\n  animation-duration: 0.7s;\n  animation-iteration-count: 1;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n}\n.highlight .flows-chart-point-effect.button-click::before {\n  box-shadow: 0 0 0 5px rgba(62,80,106,0.5);\n}\n.highlight.focus .flows-chart-point-effect.button-click::before {\n  animation-name: flows-chart-point-effect-0;\n}\n.flows-chart-point-count {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  width: 40px;\n  height: 40px;\n  background-color: #fff;\n  color: #3e506a;\n  font-size: 0.625rem;\n  line-height: 40px;\n  text-align: center;\n  z-index: 4;\n  border-radius: 50%;\n  text-shadow: 0px 1px 2px rgba(0,0,0,0.2);\n}\n.flows-chart-point-drop-off {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50px;\n  height: 50px;\n  z-index: 3;\n  border-radius: 50%;\n}\n.flows-chart-point-drop-off .flows-chart-point-drop-off-percentage {\n  fill: #3e506a;\n  stroke: #ed5d65;\n  stroke-width: 32;\n  stroke-dasharray: 25 100;\n}\n.flows-chart-point-name {\n  position: absolute;\n  bottom: -21px;\n  left: 50%;\n  height: 20px;\n  padding: 5px;\n  background-color: #fff;\n  color: #3e506a;\n  font-size: 0.5rem;\n  min-widh: 50px;\n  max-width: 100px;\n  line-height: 0.625rem;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  transform: translateX(-50%);\n  border-radius: 4px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 800;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  text-shadow: 0px 1px 2px rgba(0,0,0,0.2);\n}\n.flows-chart-point-tooltip {\n  position: absolute;\n  width: 180px;\n  top: 0;\n  left: 60px;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);\n}\n.flows-chart-point-tooltip::after {\n  content: '';\n  position: absolute;\n  top: 15px;\n  left: -8px;\n  width: 0;\n  height: 0;\n  border: 10px solid #000;\n  border-color: transparent transparent #fff #fff;\n  box-shadow: -1px 1px 2px 0 rgba(0,0,0,0.05);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  -moz-transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  -o-transform: rotate(45deg);\n  transform: rotate(45deg);\n  border-radius: 2px;\n}\n.flows-chart-point-tooltip-contents {\n  position: relative;\n  text-align: center;\n  padding: 10px;\n}\n.flows-chart-point-tooltip-event-name {\n  padding: 8px 10px;\n  color: #3e506a;\n  font-size: 0.625rem;\n  line-height: 0.875rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.flows-chart-point-tooltip-event-count {\n  padding: 8px 10px;\n  color: #61cacd;\n  font-size: 1.25rem;\n  line-height: 1.6875rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.flows-chart-point-tooltip-event-exit-count {\n  padding: 8px 10px;\n  color: #ed5d65;\n  font-size: 0.625rem;\n  line-height: 0.875rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.highlight-mode .chart-title-shadow {\n  display: none;\n}\n.highlight-mode .flows-chart-path {\n  opacity: 0;\n  -webkit-transition: opacity 0.7s;\n  -moz-transition: opacity 0.7s;\n  -ms-transition: opacity 0.7s;\n  -o-transition: opacity 0.7s;\n  transition: opacity 0.7s;\n}\n.highlight-mode .flows-chart-point:hover .flows-chart-point-tooltip {\n  display: none;\n}\n.highlight-mode .flows-chart-point-contents {\n  box-shadow: none;\n}\n.highlight-mode .flows-chart-point-count {\n  color: #8c989e;\n  text-shadow: none;\n}\n.highlight-mode .flows-chart-end-point .flows-chart-point-drop-off-percentage,\n.highlight-mode .flows-chart-point-drop-off-percentage {\n  fill: #f7fafc;\n  stroke: #8c989e;\n}\n.highlight-mode .flows-chart-point-name {\n  color: #8c989e;\n  text-shadow: none;\n  box-shadow: none;\n}\n.highlight-mode #show-all-paths-button {\n  bottom: -30px;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);\n}\n.highlight-mode #show-all-paths-button:hover {\n  color: #61adf0;\n  background-color: #e9f2fa;\n}\n.highlight-mode .highlight.flows-chart-point {\n  z-index: 10;\n}\n.highlight-mode .highlight.flows-chart-point:hover {\n  z-index: 15;\n}\n.highlight-mode .highlight.flows-chart-point:hover .flows-chart-point-tooltip {\n  display: inline-block;\n}\n.highlight-mode .highlight .flows-chart-point-contents {\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);\n}\n.highlight-mode .highlight .flows-chart-point-drop-off-percentage {\n  -webkit-transition: fill 0.7s, stroke 0.7s;\n  -moz-transition: fill 0.7s, stroke 0.7s;\n  -ms-transition: fill 0.7s, stroke 0.7s;\n  -o-transition: fill 0.7s, stroke 0.7s;\n  transition: fill 0.7s, stroke 0.7s;\n}\n.highlight-mode .highlight .flows-chart-point-name {\n  -webkit-transition: color 0.7s;\n  -moz-transition: color 0.7s;\n  -ms-transition: color 0.7s;\n  -o-transition: color 0.7s;\n  transition: color 0.7s;\n}\n.highlight-mode .highlight .flows-chart-point-contents.button-click .flows-chart-point-drop-off-percentage {\n  fill: #4a6080;\n  stroke: #ff6e6b;\n}\n.highlight-mode .highlight.flows-chart-end-point .flows-chart-point-contents.button-click .flows-chart-point-drop-off-percentage {\n  stroke: #4a6080;\n}\n.highlight-mode .highlight .flows-chart-point-count {\n  background-color: #fff;\n  color: #3e506a;\n  text-shadow: 0px 1px 2px rgba(0,0,0,0.2);\n}\n.highlight-mode .highlight .flows-chart-point-name {\n  color: #3e506a;\n  background-color: #fff;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);\n  text-shadow: 0px 1px 2px rgba(0,0,0,0.2);\n}\n.highlight-mode .highlight .flows-chart-point-drop-off-percentage {\n  fill: #3e506a;\n  stroke: #ed5d65;\n}\n.highlight-mode .highlight.flows-chart-end-point .flows-chart-point-drop-off-percentage {\n  fill: #3e506a;\n  stroke: #3e506a;\n}\n.highlight-mode .highlight.flows-chart-path {\n  opacity: 1;\n}\n.mixpanel-platform-date_picker.mp-date-picker {\n  height: 40px;\n}\n.mixpanel-platform-date_picker.mp-date-picker .title {\n  text-transform: uppercase;\n  display: inline-block;\n  color: #747d94;\n  background-color: #fff;\n  font-size: 0.625rem;\n  line-height: 0.875rem;\n  padding: 0;\n  margin: 0 24px 0 0;\n  text-shadow: none;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.mixpanel-platform-date_picker.mp-date-picker .mixpanel-platform-button_primary.mixpanel-platform-button {\n  background-image: none;\n}\n.mixpanel-platform-date_picker.mp-date-picker .rounded_dropdown_label {\n  width: 200px;\n  display: inline-block;\n  padding: 13px 15px;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);\n  background-image: none;\n  border: 0;\n}\n.mixpanel-platform-date_picker.mp-date-picker .rounded_dropdown_label.active .arrow,\n.mixpanel-platform-date_picker.mp-date-picker .rounded_dropdown_label:hover .arrow {\n  background-position: 0 0;\n}\n.mixpanel-platform-date_picker.mp-date-picker .rounded_dropdown_label.active .arrow {\n  -webkit-transform: scaleY(-1);\n  -moz-transform: scaleY(-1);\n  -ms-transform: scaleY(-1);\n  -o-transform: scaleY(-1);\n  transform: scaleY(-1);\n  filter: FlipV;\n  -ms-filter: \"FlipV\";\n}\n.mixpanel-platform-date_picker.mp-date-picker .arrow {\n  display: inline-block;\n  position: absolute;\n  top: 16px;\n  right: 15px;\n  width: 10px;\n  height: 7px;\n  border-radius: 0;\n  background-size: 10px 7px;\n  background-image: url(" + __webpack_require__(12) + ");\n}\n.mixpanel-platform-date_picker.mp-date-picker .rounded_dropdown_body.dropdown_body_widget {\n  left: 1px;\n  min-width: 200px;\n}\n.mixpanel-platform-date_picker.mp-date-picker .dropdown_label_widget.label {\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.mixpanel-platform-date_picker.mp-date-picker .rounded_dropdown_item.dropdown_item_widget {\n  font-size: 0.625rem;\n  line-height: $mpdDropdownItemLineHeight;\n  text-transform: uppercase;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.mixpanel-platform-date_picker.mp-date-picker .mixpanel-platform-button {\n  font-size: 0.625rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.mp-select,\n.mp-select-text-input,\n.mp-select-small {\n  position: relative;\n  display: inline-block;\n  background: #fff;\n  height: 40px;\n  vertical-align: middle;\n  margin-right: 10px;\n  border-radius: 4px;\n}\n.mp-select,\n.mp-select-text-input {\n  width: 200px;\n}\n.mp-select-small {\n  width: 155px;\n}\n.mp-select,\n.mp-select-small {\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);\n}\n.mp-select-text-input {\n  box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.2), inset 0px 1px 2px 0px rgba(0,0,0,0.2);\n}\n.mp-select.mine,\n.mp-select-small,\n.mp-select-text-input {\n  border: 0;\n  background-image: none;\n  font-size: 0.625rem;\n  color: #747d94;\n  padding: 13px 15px;\n  line-height: 0.875rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  border-radius: 4px;\n}\n.mp-select.active .disclosure-indicator {\n  -webkit-transform: scaleY(-1);\n  -moz-transform: scaleY(-1);\n  -ms-transform: scaleY(-1);\n  -o-transform: scaleY(-1);\n  transform: scaleY(-1);\n  filter: FlipV;\n  -ms-filter: \"FlipV\";\n}\n.mp-select .disclosure-indicator {\n  position: absolute;\n  background-image: url(" + __webpack_require__(12) + ");\n  background-size: 10px 7px;\n  top: 16px;\n  right: 15px;\n  width: 10px;\n  height: 7px;\n}\n.mp-select .mp-dropdown {\n  display: none;\n}\n.mp-select:hover .mp-dropdown {\n  display: inline-block;\n}\n.mp-indicator {\n  background: #fff;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  display: inline-block;\n  width: 28px;\n  height: 28px;\n  vertical-align: middle;\n  border-radius: 50%;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);\n}\n.mp-indicator.expand {\n  background-image: url(" + __webpack_require__(13) + ");\n  background-size: 6px 10px;\n  background-position: 11px 9px;\n}\n.mp-indicator.contract {\n  background-image: url(" + __webpack_require__(14) + ");\n  background-size: 7px 10px;\n  background-position: 9.5px 9px;\n}\n.mp-number-picker.mixpanel-platform-select.event_selector_theme {\n  display: inline-block;\n  height: 24px;\n  width: 30px;\n  margin: 0 4px;\n  cursor: pointer;\n  min-width: 30px;\n}\n.mp-number-picker.mixpanel-platform-select.event_selector_theme .select_button {\n  width: 30px;\n  height: 24px;\n  padding: 0;\n  border: 1px solid #dfe2ec;\n  background-color: #fff;\n  background-image: none;\n  color: #747d94;\n  cursor: pointer;\n  font-size: 0.625rem;\n  min-width: 30px;\n  text-align: center;\n  border-radius: 4px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.mp-number-picker.mixpanel-platform-select.event_selector_theme .select_button .down_arrow_small,\n.mp-number-picker.mixpanel-platform-select.event_selector_theme .select_button .down_arrow_big {\n  display: none;\n}\n.mp-number-picker.mixpanel-platform-select.event_selector_theme .select_menu {\n  width: 30px;\n  min-width: 30px;\n  outline: none;\n  border: 1px solid #dfe2ec;\n  border-radius: 0 0 2px 2px;\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);\n}\n.mp-number-picker.mixpanel-platform-select.event_selector_theme .select_menu .options_list {\n  width: 30px;\n}\n.mp-number-picker.mixpanel-platform-select.event_selector_theme .select_menu .options_list .select_option {\n  padding: 0;\n  text-align: center;\n  min-width: 30px;\n  font-size: 0.625rem;\n  line-height: 1rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.mp-event-select {\n  margin-right: 10px;\n}\n.mp-event-select .options_list div:first-of-type,\n.mp-property-value-select .options_list div:first-of-type,\n.mp-super-property-select .options_list div:first-of-type {\n  display: none;\n}\n.mp-super-property-select {\n  text-transform: uppercase;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme {\n  display: inline-block;\n  width: 200px;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .select_button {\n  border: 0;\n  background-color: #fff;\n  background-image: none;\n  width: 200px;\n  height: 40px;\n  line-height: 0.875rem;\n  padding: 13px 15px;\n  border-radius: 4px;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .select_button.active .down_arrow_big {\n  -webkit-transform: scaleY(-1);\n  -moz-transform: scaleY(-1);\n  -ms-transform: scaleY(-1);\n  -o-transform: scaleY(-1);\n  transform: scaleY(-1);\n  filter: FlipV;\n  -ms-filter: \"FlipV\";\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .select_button span {\n  display: inline-block;\n  width: 155px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .select_menu {\n  width: 200px;\n  min-width: 200px;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .select_menu .search_box_container .search_box {\n  padding: 7px 6px;\n  background-image: none;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .select_menu .options_list .select_option {\n  font-size: 0.625rem;\n  line-height: 0.875rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme .down_arrow_big {\n  background-image: url(" + __webpack_require__(12) + ");\n  background-size: 10px 7px;\n  top: 16px;\n  right: 15px;\n  width: 10px;\n  height: 7px;\n}\n.mp-select.mixpanel-platform-select.event_selector_theme span {\n  font-size: 0.625rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n.mp-property-select.mp-select.mixpanel-platform-select.event_selector_theme .select_menu .options_list .select_option {\n  text-transform: uppercase;\n}\n.mp-property-select.mp-select.mixpanel-platform-select.event_selector_theme span {\n  text-transform: uppercase;\n}\n.excluded-values-button {\n  position: absolute;\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  top: 30px;\n  right: 20px;\n  background-color: transparent;\n  background-image: url(" + __webpack_require__(15) + ");\n  background-size: 20px 20px;\n  border-radius: 50%;\n}\n.excluded-values-button:hover,\n.excluded-values-button:active {\n  background-image: url(" + __webpack_require__(16) + ");\n  background-color: #e9f2fa;\n}\n.modal-overlay {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0,0,0,0.2);\n  z-index: 100;\n}\n.advanced-controls {\n  position: fixed;\n  margin-left: -350px;\n  margin-top: -95px;\n  top: 50%;\n  left: 50%;\n  width: 700px;\n  height: 190px;\n  padding: 40px;\n  background: #f4f4f6;\n  z-index: 100;\n  border-radius: 4px;\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);\n}\n.advanced-controls-textbox {\n  border: none;\n  background: #fff;\n  display: block;\n  width: 100%;\n  color: #747d94;\n  font-size: 14px;\n  font-size: 0.875rem;\n  line-height: 40px;\n  padding: 0 10px;\n  box-shadow: inset 0px 1px 2px 0px rgba(0,0,0,0.2);\n  border-radius: 4px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 400;\n}\n.advanced-controls-button {\n  margin-top: 30px;\n  height: 40px;\n  padding: 0px 20px;\n  text-align: center;\n  font-size: 12px;\n  font-size: 0.75rem;\n  line-height: 40px;\n  border-radius: 4px;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.2);\n}\n.advanced-controls-update-button {\n  background: #3e506a;\n  color: #fff;\n}\n.advanced-controls-update-button:hover,\n.advanced-controls-update-button:active {\n  background: #4d6485;\n}\n.advanced-controls-update-button:disabled {\n  color: #87929c;\n  background: #f5f6f8;\n}\n.advanced-controls-clear-button {\n  margin-left: 20px;\n  background: #ed5d65;\n  color: #fff;\n}\n.advanced-controls-clear-button:hover,\n.advanced-controls-clear-button:active {\n  background: #fc626a;\n}\n.advanced-controls-cancel-button {\n  margin-left: 20px;\n  background: #eff1f6;\n  color: #3e506a;\n}\n.advanced-controls-cancel-button:hover,\n.advanced-controls-cancel-button:active {\n  background: #f7faff;\n}\n#title {\n  position: relative;\n}\n#options {\n  position: relative;\n  height: $sectionOptionsHeight;\n}\n#selects {\n  position: relative;\n  padding: 20px;\n  border: 1px solid #dfe2ec;\n  background-color: #f4f4f6;\n  border-radius: 2px;\n}\n#selects .mp-select-container {\n  display: inline-block;\n}\n#date-picker {\n  display: inline-block;\n}\n#conversion-instructions p,\n#conversion-instructions-start-event-only p {\n  display: inline-block;\n  margin: 0;\n  color: #747d94;\n  font-size: 0.625rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n#conversion-instructions {\n  margin-top: 28px;\n}\n#conversion-instructions-start-event-only {\n  display: inline-block;\n  margin-left: 20px;\n}\n#show-common-user-flows-button {\n  position: absolute;\n  right: 20px;\n  bottom: 20px;\n  width: 180px;\n}\n#column-1 {\n  width: 50%;\n}\n#column-2 {\n  width: 50%;\n}\n#flows-chart-diagram-container {\n  height: 520px;\n}\n#flows-chart-diagram {\n  position: relative;\n  width: 860px;\n}\n#flows-chart-diagram > div.flows-chart-row:last-of-type {\n  margin-bottom: 0;\n}\n#flows-chart-point-0-0 {\n  top: 225px;\n  left: 15px;\n}\n#flows-chart-path-0-0-to-1-0 {\n  top: 47px;\n  left: 35px;\n}\n#flows-chart-path-0-0-to-1-1 {\n  top: 127px;\n  left: 40px;\n}\n#flows-chart-path-0-0-to-1-2 {\n  top: 207px;\n  left: 57px;\n}\n#flows-chart-path-0-0-to-1-3 {\n  top: 250px;\n  left: 57px;\n}\n#flows-chart-path-0-0-to-1-4 {\n  top: 267px;\n  left: 40px;\n}\n#flows-chart-path-0-0-to-1-5 {\n  top: 267px;\n  left: 35px;\n}\n#flows-chart-header {\n  position: relative;\n  padding: 20px 20px 19px 20px;\n  background-color: #f4f4f6;\n  border-bottom: 1px solid #dfe2ec;\n  z-index: 11;\n  min-height: 60px;\n  border-radius: 2px 2px 0 0;\n}\n#filter-options-select,\n#property-values-select {\n  margin-left: 10px;\n}\n#filter-options-select,\n#filter-options-select.mp-select.mixpanel-platform-select.event_selector_theme .select_button {\n  width: 155px;\n}\n#property-filter-close-button {\n  width: 13px;\n  height: 13px;\n  position: absolute;\n  top: 33px;\n  right: 25px;\n  background-color: transparent;\n  background-image: url(" + __webpack_require__(17) + ");\n  background-size: 13px 13px;\n}\n#show-all-paths-button {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: #f4f4f6;\n  color: #747d94;\n  font-size: 0.625rem;\n  height: 30px;\n  line-height: 30px;\n  z-index: 10;\n  -webkit-transition: bottom 0.3s cubic-bezier(1, -0.43, 0.16, 0.92);\n  -moz-transition: bottom 0.3s cubic-bezier(1, -0.43, 0.16, 0.92);\n  -ms-transition: bottom 0.3s cubic-bezier(1, -0.43, 0.16, 0.92);\n  -o-transition: bottom 0.3s cubic-bezier(1, -0.43, 0.16, 0.92);\n  transition: bottom 0.3s cubic-bezier(1, -0.43, 0.16, 0.92);\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 700;\n}\n#show-all-paths-button:hover {\n  background-color: #f4f4f6;\n}\n#flows-chart-legend {\n  display: inline-block;\n  position: relative;\n}\n#flows-chart-legend h6 {\n  position: absolute;\n  bottom: -11px;\n}\n#flows-chart-legend h6:nth-of-type(1) {\n  left: -10px;\n}\n#flows-chart-legend h6:nth-of-type(2) {\n  right: -10px;\n}\n#flows-chart-legend div:nth-of-type(1) {\n  background-color: #416da6;\n}\n#flows-chart-legend div:nth-of-type(2) {\n  background-color: #2292d8;\n}\n#flows-chart-legend div:nth-of-type(3) {\n  background-color: #5eaeeb;\n}\n#flows-chart-legend div:nth-of-type(4) {\n  background-color: #b6d7f2;\n}\n#flows-chart-legend div:nth-of-type(5) {\n  background-color: #edf4fa;\n}\n#flows-chart-legend div:nth-of-type(6) {\n  background-color: #f7fafc;\n}\n#flows-chart-legend div:nth-of-type(7) {\n  background-color: ;\n}\n#flows-chart-legend div:nth-of-type(8) {\n  background-color: ;\n}\n#avg-impressions {\n  margin: 0 20px 20px;\n}\n#button-range-picker {\n  background-color: #fff;\n}\n#end-event-select {\n  margin-left: 20px;\n}\n#dau {\n  position: absolute;\n  top: 20px;\n  left: 20px;\n}\n#dau-progress {\n  stroke: #e7c257;\n}\n#dau-meter-value {\n  color: #e7c257;\n}\n#avg-rating-progress {\n  stroke: #e7c257;\n}\n#avg-rating-meter-value {\n  color: #e7c257;\n}\n#daily-shares {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n#daily-shares-meter-value {\n  color: #e7c257;\n}\n#daily-shares-progress {\n  stroke: #e7c257;\n}\n#company-logo {\n  height: 30px;\n  vertical-align: middle;\n  display: inline-block;\n}\n#report-title {\n  font-size: 1.375rem;\n  font-family: 'Open Sans', sans-serif;\n  font-weight: 800;\n}\n#range-picker-button-text {\n  margin-right: $buttonRangePickerMargin;\n}\n#meters {\n  position: relative;\n  text-align: center;\n}\n#loading-symbol {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -50px;\n  width: 100px;\n  height: 100px;\n  z-index: 20;\n}\n#loading-mp-circle-1 {\n  opacity: 0;\n  -webkit-transform-origin: 7.58823529px 7.58823529px;\n  -moz-transform-origin: 7.58823529px 7.58823529px;\n  -ms-transform-origin: 7.58823529px 7.58823529px;\n  -o-transform-origin: 7.58823529px 7.58823529px;\n  transform-origin: 7.58823529px 7.58823529px;\n  -webkit-animation: pulse ease-in-out 1.2s 0s infinite both;\n  -moz-animation: pulse ease-in-out 1.2s 0s infinite both;\n  -ms-animation: pulse ease-in-out 1.2s 0s infinite both;\n  -o-animation: pulse ease-in-out 1.2s 0s infinite both;\n  animation: pulse ease-in-out 1.2s 0s infinite both;\n}\n#loading-mp-circle-2 {\n  opacity: 0;\n  -webkit-transform-origin: 34.9764706px 7.65882353px;\n  -moz-transform-origin: 34.9764706px 7.65882353px;\n  -ms-transform-origin: 34.9764706px 7.65882353px;\n  -o-transform-origin: 34.9764706px 7.65882353px;\n  transform-origin: 34.9764706px 7.65882353px;\n  -webkit-animation: pulse ease-in-out 1.2s 0.3s infinite both;\n  -moz-animation: pulse ease-in-out 1.2s 0.3s infinite both;\n  -ms-animation: pulse ease-in-out 1.2s 0.3s infinite both;\n  -o-animation: pulse ease-in-out 1.2s 0.3s infinite both;\n  animation: pulse ease-in-out 1.2s 0.3s infinite both;\n}\n#loading-mp-circle-3 {\n  opacity: 0;\n  -webkit-transform-origin: 57.5647059px 7.65882353px;\n  -moz-transform-origin: 57.5647059px 7.65882353px;\n  -ms-transform-origin: 57.5647059px 7.65882353px;\n  -o-transform-origin: 57.5647059px 7.65882353px;\n  transform-origin: 57.5647059px 7.65882353px;\n  -webkit-animation: pulse ease-in-out 1.2s 0.6s infinite both;\n  -moz-animation: pulse ease-in-out 1.2s 0.6s infinite both;\n  -ms-animation: pulse ease-in-out 1.2s 0.6s infinite both;\n  -o-animation: pulse ease-in-out 1.2s 0.6s infinite both;\n  animation: pulse ease-in-out 1.2s 0.6s infinite both;\n}\n@-moz-keyframes pulse {\n  10% {\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    transform: scale(1.2, 1.2);\n    opacity: 1;\n  }\n  90% {\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    transform: scale(0.8, 0.8);\n    opacity: 0;\n  }\n}\n@-webkit-keyframes pulse {\n  10% {\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    transform: scale(1.2, 1.2);\n    opacity: 1;\n  }\n  90% {\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    transform: scale(0.8, 0.8);\n    opacity: 0;\n  }\n}\n@-o-keyframes pulse {\n  10% {\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    transform: scale(1.2, 1.2);\n    opacity: 1;\n  }\n  90% {\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    transform: scale(0.8, 0.8);\n    opacity: 0;\n  }\n}\n@keyframes pulse {\n  10% {\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    -webkit-transform: scale(1.2, 1.2);\n    -moz-transform: scale(1.2, 1.2);\n    -ms-transform: scale(1.2, 1.2);\n    -o-transform: scale(1.2, 1.2);\n    transform: scale(1.2, 1.2);\n    opacity: 1;\n  }\n  90% {\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    -webkit-transform: scale(0.8, 0.8);\n    -moz-transform: scale(0.8, 0.8);\n    -ms-transform: scale(0.8, 0.8);\n    -o-transform: scale(0.8, 0.8);\n    transform: scale(0.8, 0.8);\n    opacity: 0;\n  }\n}\n@-moz-keyframes flows-chart-point-effect-0 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.6, 0.6, 1);\n    -moz-transform: scale3d(0.6, 0.6, 1);\n    -ms-transform: scale3d(0.6, 0.6, 1);\n    -o-transform: scale3d(0.6, 0.6, 1);\n    transform: scale3d(0.6, 0.6, 1);\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes flows-chart-point-effect-0 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.6, 0.6, 1);\n    -moz-transform: scale3d(0.6, 0.6, 1);\n    -ms-transform: scale3d(0.6, 0.6, 1);\n    -o-transform: scale3d(0.6, 0.6, 1);\n    transform: scale3d(0.6, 0.6, 1);\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-o-keyframes flows-chart-point-effect-0 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.6, 0.6, 1);\n    -moz-transform: scale3d(0.6, 0.6, 1);\n    -ms-transform: scale3d(0.6, 0.6, 1);\n    -o-transform: scale3d(0.6, 0.6, 1);\n    transform: scale3d(0.6, 0.6, 1);\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes flows-chart-point-effect-0 {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.6, 0.6, 1);\n    -moz-transform: scale3d(0.6, 0.6, 1);\n    -ms-transform: scale3d(0.6, 0.6, 1);\n    -o-transform: scale3d(0.6, 0.6, 1);\n    transform: scale3d(0.6, 0.6, 1);\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-moz-keyframes flows-chart-point-effect-1 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.6, 0.6, 1);\n    -moz-transform: scale3d(0.6, 0.6, 1);\n    -ms-transform: scale3d(0.6, 0.6, 1);\n    -o-transform: scale3d(0.6, 0.6, 1);\n    transform: scale3d(0.6, 0.6, 1);\n  }\n}\n@-webkit-keyframes flows-chart-point-effect-1 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.6, 0.6, 1);\n    -moz-transform: scale3d(0.6, 0.6, 1);\n    -ms-transform: scale3d(0.6, 0.6, 1);\n    -o-transform: scale3d(0.6, 0.6, 1);\n    transform: scale3d(0.6, 0.6, 1);\n  }\n}\n@-o-keyframes flows-chart-point-effect-1 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.6, 0.6, 1);\n    -moz-transform: scale3d(0.6, 0.6, 1);\n    -ms-transform: scale3d(0.6, 0.6, 1);\n    -o-transform: scale3d(0.6, 0.6, 1);\n    transform: scale3d(0.6, 0.6, 1);\n  }\n}\n@keyframes flows-chart-point-effect-1 {\n  0% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale3d(0.6, 0.6, 1);\n    -moz-transform: scale3d(0.6, 0.6, 1);\n    -ms-transform: scale3d(0.6, 0.6, 1);\n    -o-transform: scale3d(0.6, 0.6, 1);\n    transform: scale3d(0.6, 0.6, 1);\n  }\n}\n", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABFFBMVEUAAABAgIBVVYBJbW1NZoBGRnQ7YmJDUWs3TmQ7TmI5VWhEVW9CUmtATmpAVWpBUW08VW4/Um9DUm9BU2tBUmw/VG1CUmtAVGxCUGpCUG1AVW5BUWtAU2xAUmo/UWxCVGxAUWs+Umw/UWs+UGw9UWw/UWs/Ums+UGpAUmw/UWs/UWs/UGs/UG0/UWw/UWs/UWs+UGs/UGo+UGpAUWs/UGo/UWs/UmxAUGo+UWs/UWo/UGs+UWs+Ums/Umo+UWo+UWs/UWo/UGo/UWo+UGs+UGs/UGo+UGs/UWo+UGo+UGs+UGs+UWo+UWs/UWo+UGo/UGs+UGo/UWo+UGo9UWs+UWs9UWs+UGs+UGs+UWs+T2o+UGo+UGqSJ/qlAAAAW3RSTlMABAYHCgsNExcaGx4fJCQvMzU1Nzs9PkBGRkhPUFRVVVhjbm9xcnp/gIGRkqKmp6usr7Cwubq6u72+v8TFxcfJytLT1ePj6Onu7u/v7/Dy9PX3+Pn5+vv9/f7+bL4LSgAAAXJJREFUOMuFU9lSAjEQbBBUUPAABDkUdvEABBXlUAS5VE45Bdz+///wIRXcEjD91JPpqkwy3cAS9stae2IYk3bt0o5VuF/mXGL+4v7T3roxyDHfA7u7gXeOSeNmy9x3fJDN4B01ANB4F2ySH47f/vGUXzFY+twDgH32LYh9cXoo+84puy7ghA1RN+gDXF1OnaLe/uQsm7rSMnzwe4+OvP4HZrSrVHbGz20AQIEbUQAAh8ELz5meSPVYeS5Vq6XnCnuphH7muaDhAJBnU1w1ok0QG0eCNJkHrAsGAQA7bMmpW9wBAAS5sOKcQ3F6wLoU1HkgyJDneGRRFKfMSUGOp4IU+Yg3xkUR5r0U3DMsSJxvGDAgiijTUpBmVJAABzD4LwyV4Ft9xXLIkHnI0O+QymcqP0r51cpliXVH9Otkh5WnUvW19FRhJ3mtR+S6lYaRltPNltPNlpOm9W0yrdr2K8G5/RscdfQAuMvm8Jbda/K9Pv4/VCGTf7DvfhoAAAAASUVORK5CYII="

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA2FBMVEUAAAD///+AgP+ZmZmAgKqSkraAgJV2iZ2AgKR3iJl4h5Z5hqGAgJl1gJV6hZl7hJR5gJp2g5Z3gpl0gJZ1gJV2gJZ3gJV2fpV2fpR0gJZ2fph3fpd2gJZ2gJV2gJV1fpV2fpZ2fZZ2fZZ1fpV0fZZ0fpV1fZZ2fpV0fpR2f5R0f5V1fpZ0fpZ0fZV1fpR0fpV0fZR1fpV1fpR1fpV0fZV1fpV1fZV0fpR0fpV0fZR1fpR1fZR1fZR0fpR1fZV0fpR1fZV0fpV0fZR1fpV1fpR1fpR0fZV0fZSc7ej/AAAAR3RSTlMAAQIFBgcMDQ4PERMUGBkfJictLjA4OkFDREVHUFJUV19maG9yfX6Cho+VlqKrrrS/wMTHztHY2dve4+jq7/Dx8vP09/v9/kPmOKMAAAFISURBVDjLhZNrW4JAEIXHRK3IxNKw6H7BwkwIirALQdb7//9RH9KVRXuYT3tmdmbP7JwRUWY4nh9nWex7jiGr1h6lKEtH7VK4Mcwhcm2r2bRsN4J82NDSQxh3l7g7hrBQZH9K0tdL9hOmeyp/SmCWOZkB03mNRkhQX2VdDwj/eAxJzDVtiZkwFBFp5/RlrfXJ2yIyYrz09U6vz3sKjRmJGCmqv8tnACatRbekhjhEKuMO+ALuF44IRzxcdWF3crJdO5jxUZs7XDzxsUvcEt435kcbX2IsPX4BD4uzRSwZTS1+A28qpUkmGa1i3IWnjkItPktPbH3zuLmEFnGJ5CGcFaCNr7UpsjMYmNqDnvZRIiIbRRDhaF8t0nt5PS4Ii9QoDesWJqIPSx/30eznqjxuXTBmZ0Uw1ZKrFG217KsXp3r1qpf3//X/BZnEQnjXrRGgAAAAAElFTkSuQmCC"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABEVBMVEUAAACAv/+A1f9ttv9ms/900f9isf9rrvJkvP9isfVos/Zms/djtfdqsfFirvRptPVlrfFhsPFjsfJksPJjsfNkr/Nir/BgrvFkrvJjr/JhrfNjrvBjsfBjrvFkrfJhrvFjr/FhsPRirPJksPBir/FirfFjrvFirvFir/Fir/FirvFirfFirvBirfBirfBhrvFhr/FirvFhrvFjrfFhr/FhrvJirfBhrvBirfFhr/Fir/FhrfFirvFhrvFhr/JirvBirvFhre9irvBgrvFhrvBirvBirvFhrfBhrfFirvBirvFirfBhrvFhrfFirfBhrfFhrfFhrfBhrvFirfFhrvFirfFhrfFgrfBhrfBhrvBhrfAFPz62AAAAWnRSTlMABAYHCgsNExcaGx4fJC8zNTc7PT5ARkhPUFRVVVhjbm9xcnp/gIGRkqKmp6usr7Cwubq6u72+v8TFxcfJytLT1ePj6Onu7u/v7+/w8vT19/j5+fr7+/3+/v5r6P0SAAABc0lEQVQ4y4VTZ1fCQBA8OqgoRQKiQuhNuiCKSEfp0kKc//9DTHLvgCfg7ZfsZOdlJ3czhOzKFPkYLGV5OfiImMhx2d8k7Ep6s/8ZG1Jb4BtdwWoVukqDbcpwOLf1gI43i6AKgsh6O0DPtp87FlgFiG6MSxVdYawjgRUWN2x+scBQ2XmLFsUtuBVNQywuKDZPsCkko8EM8h6Xw+Hy5JEJRpOFDSZmjfCMs/WsCdwi7LwX48kR6i+1RqP2UscoGRfvnWFsVaFldOiqOYy0MWJOmw7KhOgleDVkQZ+p7sOiPb2Q9OQBM/r2Gk1GaOKaNjM8kCIqFAgoMUIJAm0qKJI2QhTcIccIOdzRJoQ2mTL2I9KMkMYj++qUyPi3ZB7hh79iJ9J3KNK3F8n9Te5BcY+ae1n0uv1iLPGFerXWeK9V6/hMxEQ/u26uYVTLrRXLiYeWExXLrZnlmGnd50zLt/1RcJ7+BocfPTW8r4fhfbWfyPfp+P8CWgyPnOKyLE8AAAAASUVORK5CYII="

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABKCAMAAAAfd/NfAAAB/lBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXFxcAAAArFRU7JycAAABJJCQAAABVIiIAAAAAAABpLS0AAABxKzkAAAAAAACAMzMAAAAAAAAuFxeAOjoAAAA3FhYAAACPPT2ZPUeJOzsAAAAbEhKSQEAAAAAjEhIAAACZPEQAAACEOjqMOkKqRk0AAAAAAACzRUwAAACWO0EAAACZQECuREuyR021Sk+3SE7YU17CTVLETlPDT1PGT1jITlbNU1rYVVzPU1rRU1nQUlvWVVvgWGDYVFzWVFzXVl6vRUquREzYVl7bV17dV2DeWF/fWF7eV1/fWV/gWGDhWF/hWmLiWWHYVl3ZVV7jWmHkWmPlWWLlW2HlWmLrXWXlWmHnW2LmWmPbV17bVl7eWF/nXGPeV1/nW2PoXGLoXGTpXGPpW2PqXWTqXGTrXGXqXGTrXWXrXWTsXWXtXWXsXWXnW2PsXWXsXmXrXWXsXWXtXmXsXWXsXWTtXWXtXmXsXWXtXWXsXWXtXmbtXmXuXmbuXmbuXWbuXWXuXmbuXWXtXWXtX2ftYGjuanLvcHfvdXzwfoXxhIrxiY/ykpfzmJ30naH1pqr1q6/2sLT2s7f3ub33v8L4xMf5zc/609X62Nr74eL85uj86+z97+/99PX++fr+/f3///9bVJV3AAAAjHRSTlMAAQIDBAUGBwgJCgsLDAwNDg4PDxARERISExQUFRYWFhcXGRkZGhwcHB0dHh4fHx8hIiUlJycoKCkrLS4uMjQ3OkFHSEpNUVdaW15fYGFianB0d3uBgoaIjJGTk5aanZ6kpauvsLGxsrO2vcDDxszS1djZ29/f4eLj5ebp7e7v7/Dy9PX19/j6+/z9/hyj87kAAAPvSURBVFjDxZjnW9NQFMbJJCmyQbCiIgqCxQFOFFCZTkBQQUHFvXALyHAhFi2XoSyhuKnif+k9pGkzbtI2yfP4fjyn9/ecm/eck7Zxcf9HVEjOEWmaYVmGpp1iUhTDlnd2d3eWs4wzTEzkjnoRlvco5wgTE/lqH1qRr5p3gImfI7e5DwXVt5mz/zwpmhU6UEgdAktTtq8dX/k+jHxfGW/36vjarntIoXsuzl6ZFMUKx5BKxwTWVpnY7eweNbInG7tuyxvxHNLonGjDIfBm/7AWObzfhkPgzTWk0zXrDkGRNYigGstl4iKTH5GQj5ItlglzcxoRddraDMG6KH5FRr4qtrQ+8LXFy8hAl0QLVwdvDvuMkL7DFhyCBrqPDHU/9kaC4W4IAX7/Dep3KNQQ66iDNxv6Q+d/ysifoVD/hhgdguFuC1/zm4z8Fo61xTbq4M1Bb/j4ooxcDMe8B2JyCLy5ozDjs4z8rAjeicUh8KZO6e+MjJxRRuticIii+fQnysOfZOQnZfRJOh9tmeBNi6oLJ2TkhCrcEq1D0EA736g7+49E/KOOvtkZZSOBN1c0w/JLQv7ShK9E5xA00JFRzdnvEvK7Jjx6JKpGwkWueqAd6S8S8os2/mBVFGXC4m3UbYl5CTmvSzRGXsbgzaYB3clZCTmrSwxsiugQNFC7fpdNScgpfaY9UiOBNxUj+oOTEnJSnxmpiOAQNNBdwsYdWwbi8hghdde8kWC464lbfAmQS8RUvemo4+Fe/Yx47gcgfxBTz1abjDp4c5b8rvkKyK/k3Fljh8CbXUPkYwuAXCDnhnYZOgTeXDV4I84Bcs4gedXIISiyyuglOw3IaaNslUGZuMikh0aHPgLyo1H2YRKxTBjuJmRRTaRRh+EuHLSKHCwkjDp8q7qILOui/nsXeHPog3Xkh0M6h6CBukyOjPsDAf+4yQe6tI0Ew33CrAo/OO43+8Rx9aiDN2ufmx0IADJg9onna1UOwXC3IntI1KocdfCm7B2yd3H0rkzhEHhzy9zRiPZg3Qo7hIsUapEDqhXkMvHiTX3sBPJxanAZw3A3I0fUHBx13ED5r51Bvs5f+a0ODXQGOSTpnYGfZOJTp5BPE+FpYru3I8e0A5seR7HiHueQ+0SWiqNZ1/oXThFfbnSxNCCzzjuFvJAFSHzxzC03nSHe3poJF8crI2Wd5+T13rf2cG97b5zyrEuJB3vwzsjILSop3b3XlnaXlhTlZqxsDli/CRk5eQVFnm025CkqyMvJSJDWMEUzvJiYlrXG7c6xLLd7TVZaosgz0oxjJscLoivBllwugeeY4B+mFEAZlrMplgEgpfzfnLap0P/u/wAqi1RDhdBeAQAAAABJRU5ErkJggg=="

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABECAMAAAAhiEISAAABEVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgICAAAAAAAAAzM00AAAAAAAAAAAAAAAAAAAAiIjMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARERoAAAAAAAAAAAAICAgAAAAAAAAAAAAAAAAAAAANDRQAAAANDRMMDBM7TWU5SmE8TWY5SWI4SGE7S2M6SmI5SWA4R10yQFQxQFMzQlg1RFowPlEzQlczQVYwPVI9Tmc4SF8+T2k9Tmc9TWY8TGU6SmI6SWE+UGo9T2g+UGs9T2g+UGo+T2k9T2k+UWs+UWo/UWo+UGpDVW5TY3qRm6rW2t/b3+P29/j///9gEqPHAAAAU3RSTlMAAQIDBAUGBwgICQoKCwwNDg8PEBESExQVFhcYGRobHB0eHh8gISEiIyQlJiYoKClWWVpeX19gYmVnaGhpa21ucI+bqKusr7S13uHh4uPk5fn6/AJJbnwAAAM7SURBVFjD7ZhrW6JAGIbjMGAQgiEKUkJpmZmdt91qa80Odi61NPv/P2TnxbZUZGakvux19XxRfK/nnhkYZuZxaupNHIjng48pRhE8UBDEQALPiCR4oCTObJ/ePD7enG7PiCxIkgdaQptX7TddbSJokcaL9kBT0yftAZ1MixQi0YNr8lANV2VcJQIJHo4TpC345anT7fW6nSf4viUJpC4SPRyPZuFePL+8Bnp5hnsyi0hdJHk4TkzsQFtvNVyF9nYVfJcjJSBlN+zZSYi4i7gx7QxfdV7f1cGX54YioUhJinEe9pxp0EVOkI07fNX9KHbbjBrx3BmygIFiwmziq95HsccKHPE0TTxmDFStrwJaKgbySM3cf82Q7zMq4gPgRfgGN6qVcnklQuVypdoIey4CIAz5MDwFauWlwkKkCkvlWthzGAwZHsri9egkvV7zXceOlOP6a2HPYv+h4Gnj7I++Rgf5rKkntQgldTObPxj17Dv9aYMntuXVh+923c/SJnbWH/V4Vn9i4zEbzvJQtb6cS9FevVRu1OMYwasHXVTTbvHo9l/p9qjoplXa4hDtgaVIs9zCRu0SSpe1jYJrafTlCzzrtcZDs/nQqK0PemCx1NI5v1QFYLXk59IaywKrpR2vuLJaqayuFD1nwAPLuaSm7HwJgKW8nVIlli1AUg3Lmfd835t3LGPQE2w4+Ll5APTw82XdpBKaYVqZjGUaWmLIA1siUkwXgK6pIOZtFMkJFSshIzG0MwuS7gDQ0cnPg/lwwKOkDUA7iV/wzx9FAKj1gRo7kKhv4DfwG/jfAL94caAuX5MBqdlmQiA927wDkxLPxKNlGwzMQuGXDgcUKpCebQDYwr+3fiqUPZkx2+DDhfU7IO7JAo3Ikm04UTHnjgPiD1kkHJRoOeUdKMi67feJe4pMOMtRcsrAKBQzt/Cn1WbX2JwydKBKuxMRx+aUgS5OTBybU8LE49anckqImPOXcBCJDim0nBIimvac5y+QRcopIaKim5msTRYpp4SISFZUjSxiThmzLIkiooiUU8Yt6zxNxJwSR3GyDXX5is4p8bpIyCnxukjKKTGJhJwSj0jMKXGRk/6JGeMo8hdPDxLLTll5egAAAABJRU5ErkJggg=="

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAMAAAAYGszCAAAAZlBMVEUAAAD////MzP/b29vR0ejIyNvIyNO9ytO9yta9yNPAx9W9ydK/ydO+y9W/ydK9y9e9ydO+ydO+yNTAydO+ydK+x9K+yNK+yNO9yNK9x9K+x9O9x9O9x9K+yNK9yNO9yNK+yNO9x9KMk1gEAAAAIXRSTlMAAwUHCw4XOj5GSVVjZmdsbXWBlqTT4+v09/f4+/v9/v4nta/LAAAAZUlEQVQY033PSQ6AIAwF0DrjPCuCE/e/pCCgQIx/0fy+pIsCfCf0zC3wxez2OX2toTgHiBljNNPW8m0CiIihwtjIS3E+ehtORK20SkPySKllSlfblDqmdUH2WwPXo3af7TdSwl8unYULg/82hvQAAAAASUVORK5CYII="

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAMAAACOLiwjAAAAZlBMVEUAAACA//9Vqv9ttv9mmeZVme5Vn+pPmuVOmOJQmeZQmuNNmuRNm+NOm+ZPmeROmeNNmONOmeNNmONNmeRPmONNmONOmeNNmeNNmeNNmeNNmONNmeJNmOJMl+JNmONOmONNmeNNmOJJBKDTAAAAIXRSTlMAAgYHCg8YOj5GSVZjZmdsbXWBlqTT4+r09ff3+Pv7/f66awFQAAAAU0lEQVQY04XHNxKAMAwFUZFzztiA//0vSWOP5KFgq7dEfmnCHqFq5/gBTGsn2CCu0PLK35u9m9xdAG47AwCcwqZhq4695x/3wpFmU3iwiap1ySxfZw0Lkfz1yqoAAAAASUVORK5CYII="

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAUCAMAAACK2/weAAAAYFBMVEUAAAD///9Vme5Vn+pPle1Tn+NOneVRnO5Qm+ZQm+NQmuNPm+ROmONPmeRNmeJNmeJNmuJNmeROmOJOmeNOmeJOmeNNmONOmeJOmONOmeJNmeJNmOJNmeJNmeJNmeNNmOKFjm0GAAAAH3RSTlMAAQ8YHSUnLDNASVRcZ46Yn6C6yMzS09Ti5u34+f7+sPlwMwAAAFVJREFUGNONz7cWgDAUAlDsvccalf//SyeTvBwHmbgbACZRaDuClrqy6kiuQhyF9kQo/dTsCkooI8njFeKL5FmaBf1NUlsPnptfLqQVhCfnf70tObw8aGIK5Lfoh/wAAAAASUVORK5CYII="

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAzFBMVEUAAAD///+AgP+qqqqAgL+OjqqAgJV2iZ15hp6AgJd2gJt1g5l5gJp2g5V5gJh3gpR1gJl4fZZ4fZV3gJV4gJd2fpV2fph1gJV3fpd2gJV2fpR1gJV1gJR2fpV2fZV1fpV0fZZ0fpV2fpV1f5Z0fpR0fpR2f5R1fpV1fZV0fpR0fpZ1fZV1fZR1fpV0fZV1fpR1fpV0fZR1fpV1fpR0fZV0fpV0fpR0fpR1fpR0fZV1fZR0fpV1fZV0fpR1fZV1fZV0fpV0fZV0fZV0fZTiiXSpAAAAQ3RSTlMAAQIDBAkMDRUWHCMmKSorMjM1OkBBRUZHUl1eYmNsb3J/goOGiI2Yn6Cio6Wqq66wv8LEzNPX2ePk6Onu7/Dy8/z+rpMdhgAAAZ1JREFUOMuNlVtDgkAQhccbSmAXRUupAK0sxIi8YAS5eP7/f+qBFRFYZd52+JZlZs8ciE5CMR3PZ8z3HFMhYciTNTKxnsilmGQxIJzrmiq1VU2fhwCzpCI3CgB30DwmmgMXCEY5rGbtseznN/eX2Fu1bKa1QGyUfY8RY9HKvG+BaFhe4DDC4vhOC1FX1IpuBCutYx8PxU0bxntekRTAoDNhIJD4wcvCw85ss3s+LJbJ4TJDoS83v8B7Pe0SmExEU7h5rrHiXCNZu5gQ0RqDPHgHfNWJSLGT9QBrIgVhMw8+AlGPSNn+8dsMoZAJu1DKPYCop2yx4QkbJjkYF8ArAIh+gBlP6HDIg1YQ3DdX5G+HZzR45EMVcavrQ0qFTwxSGfc2erptHHNgtEO7hHs93dzGLn90KUcq/Fwx5Rxp8MiBfpEjHc5Jw0UczWFmr1DINUMoGVEIuUQUNDnI7FPEcZmlwmUijgs3HYUP4KV0aPgopMNVf+idH67K41rdAKpbSmWTqm571Y00tWZ7rKmSpGq6LbJmIpKnlcz+wu/jH5RlXABG5G/4AAAAAElFTkSuQmCC"

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAzFBMVEUAAAD///+A//+q//+Av/9xxv9qv/9isf9htvNorvNkrfZmr/BlrvJkrvNhsPNlsvNmrfVkr/BlrfFlsPJkr/NisfNkrvBir/BlsPFkrvNjr/FirvFjrvJir/Jjr/Fjr/FirvJir/Fir/FhrfFhrfJirvBirvFhrvJirfFhrvFirfFjrvFhrfFirvBirvBirvBhrvFhrvBhrvFirfFirvBirvBhrfFirvFirvBhrfBirvFhrvFirvBhrvBirfBirvBirfBhrfFhrvFhrfD13LTOAAAAQ3RSTlMAAQIDBAkMDRUWHCMmKSorMjM1OkBBRUZHUl1eYmNsb3J/goOGiI2Yn6Cio6Wqq66wv8LEzNPX2ePk6Onu7/Dy8/z+rpMdhgAAAZ1JREFUOMuNlVtDgkAQhccbSmAXRUupAK0sxIi8YAS5eP7/f+qBFRFYZd52+JZlZs8ciE5CMR3PZ8z3HFMhYciTNTKxnsilmGQxIJzrmiq1VU2fhwCzpCI3CgB30DwmmgMXCEY5rGbtseznN/eX2Fu1bKa1QGyUfY8RY9HKvG+BaFhe4DDC4vhOC1FX1IpuBCutYx8PxU0bxntekRTAoDNhIJD4wcvCw85ss3s+LJbJ4TJDoS83v8B7Pe0SmExEU7h5rrHiXCNZu5gQ0RqDPHgHfNWJSLGT9QBrIgVhMw8+AlGPSNn+8dsMoZAJu1DKPYCop2yx4QkbJjkYF8ArAIh+gBlP6HDIg1YQ3DdX5G+HZzR45EMVcavrQ0qFTwxSGfc2erptHHNgtEO7hHs93dzGLn90KUcq/Fwx5Rxp8MiBfpEjHc5Jw0UczWFmr1DINUMoGVEIuUQUNDnI7FPEcZmlwmUijgs3HYUP4KV0aPgopMNVf+idH67K41rdAKpbSmWTqm571Y00tWZ7rKmSpGq6LbJmIpKnlcz+wu/jH5RlXABG5G/4AAAAAElFTkSuQmCC"

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAWlBMVEUAAAD///+////R0ejIyNu/ytXEzNXCyNW+yNLCy9W+x9XAydK/ydK+ytO/x9PAx9W9yNK+ydO+yNK+yNO+yNK+yNO+yNO9yNO+x9K+x9K9x9K9yNO+yNO9x9LmGjehAAAAHXRSTlMAAwQLDhgeKjM2NzlQVldyeHqUuMHi5+j2+/z9/oUZ9asAAACMSURBVCjPtdC5EoJAAATRVkDQRU45ROb/f9MALPfCzElfMtVwvmb4S0wKnB6a757kg8YL3CQtlSuTpAay2bd8kqQSqBbXNukgMFtcc8U2X74WysfqiOy2xmS3qEC9SlIfke2B38ySiG3SLwet1QU97Qb/bZ0M0dbPAsxB6xbSMdr6ZYBLUwZtitbwa2+OOxqhg3zxxgAAAABJRU5ErkJggg=="

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var jade = __webpack_require__(19);

	module.exports = function template(locals) {
	var buf = [];
	var jade_mixins = {};
	var jade_interp;

	buf.push("<div class=\"container-report clearfix\"><div id=\"options\" class=\"container-section\"><div class=\"container-options-start-event\"><div id=\"start-event-property-value-select\" class=\"mp-select mp-property-value-select\"></div><button class=\"excluded-values-button\"></button></div><div class=\"container-options-global-filter inactive\"><div class=\"container-controls-global-filter\"> <div class=\"mp-select mp-super-property-select\"></div></div><div class=\"global-filter-help\"><div class=\"global-filter-help-tooltip\">Each event must include the selected property/value pair to count as a conversion</div></div></div><div class=\"global-filter-button inactive\"><div class=\"globe-icon\"></div><div class=\"global-filter-text\">APPLY GLOBAL FILTER TO PATHS</div></div><div class=\"global-filter-covers\"><div class=\"global-filter-cover-1\"></div><div class=\"global-filter-cover-2\"></div></div></div><div id=\"common-user-flows\" class=\"container-section\"><div id=\"flows-chart\" class=\"container-chart\"><div class=\"container-chart-header\"><div id=\"flows-chart-header\" class=\"clearfix\"><div id=\"date-picker\" class=\"pull-left\"></div></div><button id=\"show-all-paths-button\">SHOW ALL PATHS</button><div class=\"chart-title-shadow\"></div></div><div class=\"flows-chart-area\"><div class=\"banner\"><div class=\"banner-icon banner-icon-get-started\"></div><div class=\"banner-title\">FLOWS</div><div class=\"banner-message\">Please choose a start event to retrieve results.</div></div><div id=\"flows-chart-diagram-container\"><div id=\"flows-chart-diagram\"></div></div></div></div></div></div><div class=\"modal-overlay\"><div class=\"advanced-controls\"><input type=\"text\" placeholder=\"Enter a comma-separated list of property values to exclude\" class=\"advanced-controls-textbox\"><button type=\"button\" disabled class=\"advanced-controls-button advanced-controls-update-button\">UPDATE EXCLUDED VALUES</button><button type=\"button\" class=\"advanced-controls-button advanced-controls-cancel-button\">CANCEL</button></div></div>");;return buf.join("");
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = function merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = merge(attrs, a[i]);
	    }
	    return attrs;
	  }
	  var ac = a['class'];
	  var bc = b['class'];

	  if (ac || bc) {
	    ac = ac || [];
	    bc = bc || [];
	    if (!Array.isArray(ac)) ac = [ac];
	    if (!Array.isArray(bc)) bc = [bc];
	    a['class'] = ac.concat(bc).filter(nulls);
	  }

	  for (var key in b) {
	    if (key != 'class') {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Filter null `val`s.
	 *
	 * @param {*} val
	 * @return {Boolean}
	 * @api private
	 */

	function nulls(val) {
	  return val != null && val !== '';
	}

	/**
	 * join array as classes.
	 *
	 * @param {*} val
	 * @return {String}
	 */
	exports.joinClasses = joinClasses;
	function joinClasses(val) {
	  return (Array.isArray(val) ? val.map(joinClasses) :
	    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
	    [val]).filter(nulls).join(' ');
	}

	/**
	 * Render the given classes.
	 *
	 * @param {Array} classes
	 * @param {Array.<Boolean>} escaped
	 * @return {String}
	 */
	exports.cls = function cls(classes, escaped) {
	  var buf = [];
	  for (var i = 0; i < classes.length; i++) {
	    if (escaped && escaped[i]) {
	      buf.push(exports.escape(joinClasses([classes[i]])));
	    } else {
	      buf.push(joinClasses(classes[i]));
	    }
	  }
	  var text = joinClasses(buf);
	  if (text.length) {
	    return ' class="' + text + '"';
	  } else {
	    return '';
	  }
	};


	exports.style = function (val) {
	  if (val && typeof val === 'object') {
	    return Object.keys(val).map(function (style) {
	      return style + ':' + val[style];
	    }).join(';');
	  } else {
	    return val;
	  }
	};
	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = function attr(key, val, escaped, terse) {
	  if (key === 'style') {
	    val = exports.style(val);
	  }
	  if ('boolean' == typeof val || null == val) {
	    if (val) {
	      return ' ' + (terse ? key : key + '="' + key + '"');
	    } else {
	      return '';
	    }
	  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
	    if (JSON.stringify(val).indexOf('&') !== -1) {
	      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
	                   'will be escaped to `&amp;`');
	    };
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will eliminate the double quotes around dates in ' +
	                   'ISO form after 2.0.0');
	    }
	    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
	  } else if (escaped) {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + exports.escape(val) + '"';
	  } else {
	    if (val && typeof val.toISOString === 'function') {
	      console.warn('Jade will stringify dates in ISO form after 2.0.0');
	    }
	    return ' ' + key + '="' + val + '"';
	  }
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} escaped
	 * @return {String}
	 */
	exports.attrs = function attrs(obj, terse){
	  var buf = [];

	  var keys = Object.keys(obj);

	  if (keys.length) {
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i]
	        , val = obj[key];

	      if ('class' == key) {
	        if (val = joinClasses(val)) {
	          buf.push(' ' + key + '="' + val + '"');
	        }
	      } else {
	        buf.push(exports.attr(key, val, false, terse));
	      }
	    }
	  }

	  return buf.join('');
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var jade_encode_html_rules = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;'
	};
	var jade_match_html = /[&<>"]/g;

	function jade_encode_char(c) {
	  return jade_encode_html_rules[c] || c;
	}

	exports.escape = jade_escape;
	function jade_escape(html){
	  var result = String(html).replace(jade_match_html, jade_encode_char);
	  if (result === '' + html) return html;
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the jade in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @api private
	 */

	exports.rethrow = function rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(20).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Jade') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};

	exports.DebugItem = function DebugItem(lineno, filename) {
	  this.lineno = lineno;
	  this.filename = filename;
	}


/***/ },
/* 20 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var AdvancedControls, Controls;

	Controls = __webpack_require__(22);

	AdvancedControls = __webpack_require__(30);

	AdvancedControls.advancedControlsHandler();

	Controls.initReport();


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var CountryCodes, DOM, Drawing, GLOBALS, Query, datePickerHandler, eventSelectHandler, getEndEvent, getEventCount, getFromMoment, getGlobalPropertyFilter, getPropertyFilters, getResults, getStartEvent, getStartEventPropertyFilter, getSuperPropertyOptions, getToMoment, globalFilterButtonHandler, indicatorHandler, initDatePicker, initReport, initStartEventPropertyValueSelect, initSuperPropertySelect, propertySelectHandler, propertyValueSelectHandler, runQueryWithExcludedValues, setEndEvent, setEventCount, setEventValuesForSelect, setFromMoment, setGlobalPropertyFilter, setPropertyValuesForSelect, setStartEvent, setStartEventPropertyFilter, setSuperPropertyOptions, setSuperPropertyValuesForSelect, setToMoment, superPropertySelectHandler, transformPropertyLabel, transformPropertyValueLabel;

	DOM = __webpack_require__(23);

	Query = __webpack_require__(25);

	Drawing = __webpack_require__(27);

	CountryCodes = __webpack_require__(29);

	GLOBALS = {
	  eventCount: 5,
	  fromMoment: moment(),
	  toMoment: moment(),
	  startEvent: 'featureinvoked',
	  endEvent: '',
	  superPropertyOptions: '',
	  propertyFilters: {
	    global: null,
	    startEvent: null
	  }
	};

	getEventCount = function() {
	  return GLOBALS.eventCount;
	};

	setEventCount = function(eventCount) {
	  GLOBALS.eventCount = eventCount;
	};

	getFromMoment = function() {
	  return GLOBALS.fromMoment;
	};

	setFromMoment = function(fromMoment) {
	  GLOBALS.fromMoment = fromMoment;
	};

	getToMoment = function() {
	  return GLOBALS.toMoment;
	};

	setToMoment = function(toMoment) {
	  GLOBALS.toMoment = toMoment;
	};

	getStartEvent = function() {
	  return GLOBALS.startEvent;
	};

	setStartEvent = function(startEvent) {
	  GLOBALS.startEvent = startEvent;
	};

	getEndEvent = function() {
	  return GLOBALS.endEvent;
	};

	setEndEvent = function(endEvent) {
	  GLOBALS.endEvent = endEvent;
	};

	getSuperPropertyOptions = function() {
	  return GLOBALS.superPropertyOptions;
	};

	setSuperPropertyOptions = function(superPropertyOptions) {
	  GLOBALS.superPropertyOptions = superPropertyOptions;
	};

	getStartEventPropertyFilter = function() {
	  return GLOBALS.propertyFilters.startEvent;
	};

	setStartEventPropertyFilter = function(startEventPropertyFilter) {
	  GLOBALS.propertyFilters.startEvent = startEventPropertyFilter;
	};

	getGlobalPropertyFilter = function() {
	  return GLOBALS.propertyFilters.global;
	};

	setGlobalPropertyFilter = function(globalPropertyFilter) {
	  GLOBALS.propertyFilters.global = globalPropertyFilter;
	};

	getPropertyFilters = function() {
	  return GLOBALS.propertyFilters;
	};

	initReport = function() {
	  DOM.addLoadingSymbol();
	  setEventValuesForSelect($('#start-event-select'), '--CHOOSE A START EVENT--');
	  initDatePicker();
	  initStartEventPropertyValueSelect();
	  initSuperPropertySelect();
	  indicatorHandler();
	  eventSelectHandler();
	  propertySelectHandler();
	  propertyValueSelectHandler();
	  superPropertySelectHandler();
	  globalFilterButtonHandler();
	  datePickerHandler();
	};

	setEventValuesForSelect = function($select, title) {
	  $select.MPSelect();
	  MP.api.topEvents().done(function(results) {
	    var options;
	    options = _.chain(results.values()).map(function(eventName) {
	      return {
	        label: eventName.charAt(0) === '$' ? eventName : eventName.toUpperCase(),
	        value: eventName
	      };
	    }).value();
	    options.unshift({
	      label: title,
	      value: ''
	    });
	    options = {
	      items: options
	    };
	    return $select.MPSelect('initEl', options);
	  });
	};

	setPropertyValuesForSelect = function($select, event, property) {
	  var params;
	  params = {
	    limit: 10000
	  };
	  $select.MPSelect();
	  MP.api.propertyValues(event, property, params).done(function(results) {
	    var options;
	    options = _.chain(results.values()).sortBy(function(option) {
	      if (Number(option)) {
	        option = Number(option);
	      }
	      return option;
	    }).map(function(option) {
	      return {
	        label: option.indexOf('@') < 0 && option.indexOf('http:') < 0 ? option.toUpperCase() : option,
	        value: option
	      };
	    }).value();
	    options.unshift({
	      label: '--SELECT A VALUE--',
	      value: ''
	    });
	    options = {
	      items: options
	    };
	    $select.MPSelect('initEl', options);
	  });
	};

	setSuperPropertyValuesForSelect = function($select, property) {
	  var params;
	  params = {
	    name: property,
	    limit: 10000
	  };
	  $select.MPSelect();
	  MP.api.query('/api/2.0/events/properties/values', params, null, function(data) {
	    var options;
	    data = JSON.parse(data);
	    options = _.chain(data).map(function(option) {
	      return {
	        label: transformPropertyValueLabel(property, option),
	        value: option
	      };
	    }).sortBy(function(option) {
	      if (Number(option.label)) {
	        option = Number(option.label);
	      }
	      return option.label;
	    }).value();
	    options.unshift({
	      label: '--SELECT A VALUE--',
	      value: ''
	    });
	    options = {
	      items: options
	    };
	    return $select.MPSelect('initEl', options);
	  });
	};

	initDatePicker = function() {
	  var $datePicker, $datePickerEl;
	  $datePicker = $('#date-picker').MPDatepicker();
	  $datePicker.val({
	    from: getFromMoment().toDate(),
	    to: getToMoment().toDate()
	  });
	  $datePickerEl = $datePicker.find('.mixpanel-platform-date_picker');
	  $datePickerEl.addClass('mp-date-picker');
	};

	initSuperPropertySelect = function() {
	  var $superPropertySelect;
	  $superPropertySelect = $('.mp-super-property-select').MPPropertySelect();
	  $superPropertySelect.MPPropertySelect('setEvent', getStartEvent());
	};

	initStartEventPropertyValueSelect = function() {
	  var $select;
	  $select = $('#start-event-property-value-select').MPSelect();
	  setPropertyValuesForSelect($select, 'featureinvoked', 'featureid');
	  $('#start-event-property-value-select').on('change', function(e, selectedValue) {
	    var filter, value;
	    value = $(this).val();
	    filter = {
	      property: 'featureid',
	      operator: 'equals',
	      value: value
	    };
	    setStartEventPropertyFilter(filter);
	    getResults(getFromMoment(), getToMoment(), getEventCount(), getStartEvent(), getEndEvent(), getPropertyFilters());
	  });
	};

	transformPropertyLabel = function(property) {
	  if (property.charAt(0) === '$') {
	    property = property.slice(1);
	  }
	  property = property.replace(/(^mp_|_)/g, ' ');
	  property = property.trim();
	  return property.toUpperCase();
	};

	transformPropertyValueLabel = function(property, value) {
	  if (property === 'mp_country_code') {
	    value = CountryCodes.getCountryForCountryCode(value);
	  }
	  if (value.indexOf('@') < 0 && value.indexOf('http:') < 0) {
	    value = value.toUpperCase();
	  }
	  return value;
	};

	eventSelectHandler = function() {
	  return $('body').on('change', '.mp-event-select', function(e, selectedEvent) {
	    var $filterControlsGroup, $indicator, $parent, $propertySelect, id;
	    id = $(this).attr('id');
	    $parent = $(this).parent();
	    $indicator = $parent.find('.mp-indicator');
	    if (id === 'start-event-select') {
	      if (getStartEvent() === selectedEvent) {
	        return;
	      }
	      setStartEvent(selectedEvent);
	      setStartEventPropertyFilter(null);
	    }
	    if (id === 'end-event-select') {
	      if (getEndEvent() === selectedEvent) {
	        return;
	      }
	      setEndEvent(selectedEvent);
	    }
	    if ($indicator.length) {
	      $propertySelect = $parent.find('.mp-property-select');
	      $filterControlsGroup = $parent.find('.filter-controls-group');
	      DOM.contractIndicator($indicator);
	      if ($propertySelect.length) {
	        $propertySelect.remove();
	      }
	      if ($filterControlsGroup.length) {
	        $filterControlsGroup.remove();
	      }
	    } else {
	      $indicator = DOM.createIndicator();
	      $(this).after($indicator);
	    }
	    getResults(getFromMoment(), getToMoment(), getEventCount(), getStartEvent(), getEndEvent(), getPropertyFilters());
	  });
	};

	globalFilterButtonHandler = function() {
	  var $containerOptionsGlobalFilter;
	  $containerOptionsGlobalFilter = $('.container-options-global-filter');
	  $('.global-filter-button').on('click', function(e) {
	    var $globalFilterText, $thisButton;
	    $thisButton = $(this);
	    $thisButton.toggleClass('inactive');
	    $containerOptionsGlobalFilter.toggleClass('inactive');
	    $thisButton.addClass('button-click');
	    $globalFilterText = $thisButton.find('.global-filter-text');
	    if ($thisButton.hasClass('inactive')) {
	      $globalFilterText.text('APPLY GLOBAL FILTER TO PATHS');
	    } else {
	      $globalFilterText.text('REMOVE GLOBAL FILTER');
	    }
	    $containerOptionsGlobalFilter.one('webkitTransitionEnd otransitionend msTransitionEnd transitionend', function(e) {
	      var $indicator;
	      $indicator = $(this).find('.mp-indicator');
	      if ($indicator.length) {
	        $indicator.click();
	      }
	      $thisButton.removeClass('button-click');
	    });
	  });
	};

	indicatorHandler = function() {
	  $('body').on('click', '.mp-indicator', function(e) {
	    var $eventSelect, $filterControlsGroup, $parent, $propertySelect, $superPropertySelect, fromGlobal, fromStartEvent;
	    $parent = $(this).parent();
	    $propertySelect = $parent.find('.mp-property-select');
	    $eventSelect = $parent.find('.mp-event-select');
	    $filterControlsGroup = $parent.find('.filter-controls-group');
	    if ($(this).hasClass('expand')) {
	      DOM.expandIndicator($(this));
	      $propertySelect = DOM.createPropertySelectWithID('#start-event-property-select');
	      $propertySelect.MPPropertySelect('setEvent', getStartEvent());
	      $(this).before($propertySelect);
	    } else if ($(this).hasClass('contract')) {
	      $superPropertySelect = $parent.find('.mp-super-property-select');
	      fromStartEvent = $(this).parent().attr('class').indexOf('start-event') > 0;
	      fromGlobal = $(this).parent().attr('class').indexOf('global-filter') > 0;
	      DOM.contractIndicator($(this));
	      if ($propertySelect.length) {
	        $propertySelect.remove();
	      }
	      if ($filterControlsGroup.length) {
	        $filterControlsGroup.remove();
	      }
	      if ($superPropertySelect.length) {
	        initSuperPropertySelect();
	        $(this).remove();
	      }
	      if (fromStartEvent) {
	        setStartEventPropertyFilter(null);
	      } else if (fromGlobal) {
	        setGlobalPropertyFilter(null);
	      }
	      getResults(getFromMoment(), getToMoment(), getEventCount(), getStartEvent(), getEndEvent(), getPropertyFilters());
	    }
	  });
	};

	propertySelectHandler = function() {
	  $('body').on('change', '.mp-property-select', function(e, selectedProperty) {
	    var $filterControlsGroup, $indicator, $parent, $propertyValueSelect;
	    $parent = $(this).parent();
	    $filterControlsGroup = $parent.find('.filter-controls-group');
	    $indicator = $parent.find('.mp-indicator');
	    if (!$filterControlsGroup.length) {
	      $filterControlsGroup = DOM.createFilterControlsGroup();
	      $indicator.before($filterControlsGroup);
	    }
	    $propertyValueSelect = $filterControlsGroup.find('.mp-property-value-select');
	    if ($propertyValueSelect.length) {
	      setPropertyValuesForSelect($propertyValueSelect, getStartEvent(), selectedProperty);
	    }
	  });
	};

	superPropertySelectHandler = function() {
	  $('body').on('change', '.mp-super-property-select', function(e, selectedProperty) {
	    var $filterControlsGroup, $indicator, $parent, $propertyValueSelect;
	    $parent = $(this).parent();
	    $filterControlsGroup = $parent.find('.filter-controls-group');
	    if (!$filterControlsGroup.length) {
	      $filterControlsGroup = DOM.createFilterControlsGroup();
	      $(this).after($filterControlsGroup);
	      $indicator = DOM.createIndicator();
	      DOM.expandIndicator($indicator);
	      $parent.append($indicator);
	    }
	    $propertyValueSelect = $filterControlsGroup.find('.mp-property-value-select');
	    if ($propertyValueSelect.length) {
	      setSuperPropertyValuesForSelect($propertyValueSelect, selectedProperty);
	    }
	  });
	};

	propertyValueSelectHandler = function() {
	  $('body').on('change', '.mp-property-value-select', function(e, selectedValue) {
	    var $eventSelect, $parent, $propertySelect, event, filter, fromGlobal, fromStartEvent, operator, property, value;
	    $parent = $(this).parent().parent();
	    fromStartEvent = $parent.attr('class').indexOf('start-event') > 0;
	    fromGlobal = $parent.attr('class').indexOf('global-filter') > 0;
	    if (fromStartEvent) {
	      $eventSelect = $parent.find('.mp-event-select');
	      $propertySelect = $parent.find('.mp-property-select');
	      event = $eventSelect.val();
	      property = $propertySelect.val();
	      operator = 'equals';
	      value = $(this).val();
	      filter = {
	        property: property,
	        operator: operator,
	        value: value
	      };
	      if (!_.isEqual(filter, getStartEventPropertyFilter())) {
	        setStartEventPropertyFilter(filter);
	        getResults(getFromMoment(), getToMoment(), getEventCount(), getStartEvent(), getEndEvent(), getPropertyFilters());
	      }
	    } else if (fromGlobal) {
	      $propertySelect = $parent.parent().find('.mp-super-property-select');
	      property = $propertySelect.val();
	      operator = 'equals';
	      value = $(this).val();
	      filter = {
	        property: property,
	        operator: operator,
	        value: value
	      };
	      if (!_.isEqual(filter, getGlobalPropertyFilter())) {
	        setGlobalPropertyFilter(filter);
	        getResults(getFromMoment(), getToMoment(), getEventCount(), getStartEvent(), getEndEvent(), getPropertyFilters());
	      }
	    }
	  });
	};

	datePickerHandler = function() {
	  $('#date-picker').on('change', function(e, dateRange) {
	    var fromMoment, toMoment;
	    fromMoment = moment(dateRange.from);
	    toMoment = moment(dateRange.to);
	    if (!getFromMoment().isSame(fromMoment) || !getToMoment().isSame(toMoment)) {
	      setFromMoment(fromMoment);
	      setToMoment(toMoment);
	      getResults(getFromMoment(), getToMoment(), getEventCount(), getStartEvent(), getEndEvent(), getPropertyFilters());
	    }
	  });
	};

	getResults = function(from, to, eventCount, startEvent, endEvent, propertyFilters, excludedValues) {
	  if (excludedValues == null) {
	    excludedValues = null;
	  }
	  if (_.isEmpty(startEvent) && _.isEmpty(endEvent)) {
	    return;
	  }
	  DOM.showLoadingSymbol();
	  Drawing.destroyReport();
	  Query.getFlowsResponse(from, to, eventCount, startEvent, endEvent, propertyFilters, excludedValues).then(function(results) {
	    DOM.hideLoadingSymbol();
	    return Drawing.createFlowsReport(results);
	  })["catch"](function(error) {
	    return console.log('Failed with following error:', error);
	  });
	};

	runQueryWithExcludedValues = function(excludedValues) {
	  getResults(getFromMoment(), getToMoment(), getEventCount(), getStartEvent(), getEndEvent(), getPropertyFilters(), excludedValues);
	};

	module.exports = {
	  initReport: initReport,
	  runQueryWithExcludedValues: runQueryWithExcludedValues
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var addLoadingSymbol, contractIndicator, createFilterControlsGroup, createIndicator, createPropertySelectWithID, expandIndicator, hideLoadingSymbol, showLoadingSymbol;

	createIndicator = function() {
	  return $('<div class="mp-indicator expand"></div>');
	};

	createPropertySelectWithID = function(id) {
	  return $('<div id="' + id + '" class="mp-select mp-property-select"></div>').MPPropertySelect();
	};

	createFilterControlsGroup = function() {
	  return $('<div class="filter-controls-group"><div class="mp-select-small">EQUALS</div><div class="mp-select mp-property-value-select"></div></div>');
	};

	expandIndicator = function($indicator) {
	  if ($indicator.length) {
	    $indicator.addClass('contract');
	    $indicator.removeClass('expand');
	  }
	};

	contractIndicator = function($indicator) {
	  if ($indicator.length) {
	    $indicator.addClass('expand');
	    $indicator.removeClass('contract');
	  }
	};

	addLoadingSymbol = function() {
	  var $flowsChartArea, loadingSymbol;
	  loadingSymbol = __webpack_require__(24);
	  $flowsChartArea = $('.flows-chart-area');
	  $flowsChartArea.append(loadingSymbol);
	  $('#loading-symbol').attr('class', 'hidden');
	};

	showLoadingSymbol = function() {
	  var $flowsChartArea, $loadingSymbol, $noResults;
	  $flowsChartArea = $('.flows-chart-area');
	  $loadingSymbol = $('#loading-symbol');
	  $noResults = $('.banner');
	  $noResults.addClass('hidden');
	  $flowsChartArea.addClass('loading');
	  $loadingSymbol.attr('class', '');
	};

	hideLoadingSymbol = function() {
	  var $flowsChartArea, $loadingSymbol;
	  $flowsChartArea = $('.flows-chart-area');
	  $loadingSymbol = $('#loading-symbol');
	  $flowsChartArea.removeClass('loading');
	  $loadingSymbol.attr('class', 'hidden');
	};

	module.exports.createIndicator = createIndicator;

	module.exports.createPropertySelectWithID = createPropertySelectWithID;

	module.exports.createFilterControlsGroup = createFilterControlsGroup;

	module.exports.expandIndicator = expandIndicator;

	module.exports.contractIndicator = contractIndicator;

	module.exports.addLoadingSymbol = addLoadingSymbol;

	module.exports.showLoadingSymbol = showLoadingSymbol;

	module.exports.hideLoadingSymbol = hideLoadingSymbol;


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<svg id=\"loading-symbol\" width=\"104px\" height=\"104px\" viewBox=\"0 0 104 104\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <defs>\n    <filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"filter-shadow\">\n      <feOffset dx=\"0\" dy=\"1\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"></feOffset>\n      <feGaussianBlur stdDeviation=\"1\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\"></feGaussianBlur>\n      <feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.14 0\" in=\"shadowBlurOuter1\" type=\"matrix\" result=\"shadowMatrixOuter1\"></feColorMatrix>\n      <feMerge>\n        <feMergeNode in=\"shadowMatrixOuter1\"></feMergeNode>\n        <feMergeNode in=\"SourceGraphic\"></feMergeNode>\n      </feMerge>\n    </filter>\n  </defs>\n  <g id=\"loading-group\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n    <g id=\"loading-screen-group\" transform=\"translate(-440.000000, -462.000000)\">\n      <g id=\"loading-symbol-group\" transform=\"translate(440.000000, 462.000000)\">\n        <circle id=\"loading-circle\" fill=\"#FFFFFF\" filter=\"url(#filter-shadow)\" cx=\"50\" cy=\"50\" r=\"50\"></circle>\n        <g id=\"loading-mp-circles-group\" transform=\"translate(20.000000, 42.000000)\" fill=\"#53A2EB\">\n          <circle id=\"loading-mp-circle-1\" cx=\"7.58823529\" cy=\"7.58823529\" r=\"7.58823529\"></circle>\n          <circle id=\"loading-mp-circle-2\" cx=\"34.9764706\" cy=\"7.65882353\" r=\"5.36470588\"></circle>\n          <circle id=\"loading-mp-circle-3\" cx=\"57.5647059\" cy=\"7.65882353\" r=\"2.43529412\"></circle>\n        </g>\n      </g>\n    </g>\n  </g>\n</svg>\n  \n"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var GLOBALS, getFlowsResponse;

	GLOBALS = {
	  script: ''
	};

	getFlowsResponse = function(from, to, eventCount, startEvent, endEvent, propertyFilters, excludedValues) {
	  var fromString, params, property_filters, script, toString;
	  if ((GLOBALS.script == null) || GLOBALS.script.length === 0) {
	    script = __webpack_require__(26);
	    GLOBALS.script = $.trim(script);
	  }
	  fromString = from.format('YYYY-MM-DD');
	  toString = to.format('YYYY-MM-DD');
	  property_filters = {
	    start_event: propertyFilters.startEvent,
	    global: propertyFilters.global
	  };
	  params = {
	    'from_date': fromString,
	    'to_date': toString,
	    'event_count': eventCount,
	    'session_length': 86400000,
	    'start_event': startEvent,
	    'property_filters': property_filters,
	    'excluded': excludedValues
	  };
	  return Promise.resolve(MP.api.jql(GLOBALS.script, params));
	};

	module.exports.getFlowsResponse = getFlowsResponse;


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "function nodeSort(obj){\r\n  return Object.keys(obj).sort(function(a,b){return obj[b]['value']-obj[a]['value'];});\r\n}\r\n\r\nfunction steps(flows) {\r\n        var obj = {};\r\n        _.each(flows, function(flow, flowIdx){\r\n          _.each(flow, function(event,eventIdx){\r\n            obj[eventIdx] = obj[eventIdx] || {};\r\n            var current = event;\r\n            var next = flow[eventIdx + 1] || 'Exit';\r\n            obj[eventIdx][current] = obj[eventIdx][current] || {};\r\n            obj[eventIdx][current][next] = obj[eventIdx][current][next]  + 1 || 1;\r\n          });\r\n        });\r\n        return obj;\r\n}\r\n\r\nfunction filters(event, filter){\r\n    if (filter == null || event.properties[filter.property] === filter.value || filter.property === undefined) {\r\n      return true;\r\n    }\r\n  return false;\r\n}\r\n\r\nfunction createState(state, events) {\r\n        state = state || {\r\n            journey: [],\r\n            journeys: [],\r\n            in_journey: false,\r\n            journey_start: 0\r\n        };\r\n       _.each(events, function(event){\r\n          if (filters(event, params.property_filters.global) && !_.contains(params.excluded, event.properties.featureid)) {\r\n            var name = _.clone(event.properties.featureid).split('::')[0];\r\n            // If I meet the start events criteria\r\n            // Push my list of current events to my journeys\r\n            // add the new event to my current journey\r\n            if (filters(event, params.property_filters.start_event)) {\r\n              state.in_journey = true;\r\n              state.journey_start = event.time;\r\n              if (state.journey.length > 0) {\r\n                state.journeys.push(_.clone(state.journey));\r\n                state.journey = [];\r\n              }\r\n              state.journey.push(name);\r\n            } else if (state.in_journey) {\r\n              if (name == params.end_event) {\r\n                    state.journey.push(name);\r\n                    state.journeys.push(state.journey);\r\n                    state.journey = [];\r\n                    state.in_journey = false;\r\n              } else if (state.journey.length > params.event_count || state.journey_start + params.session_length < event.time ) {\r\n                  state.journeys.push(state.journey);\r\n                  state.journey = [];\r\n                  state.in_journey = false;\r\n                } else {\r\n                  state.journey.push(name);\r\n                }\r\n            }\r\n          }\r\n        });\r\n        return state;\r\n    }\r\n\r\nfunction flows(steps){\r\n  var results = [];\r\n  _.each(steps, function(sourceObjs, step){\r\n    var nodes = {};\r\n    var links = [];\r\n    var otherObj = { value: 0, exit: 0 };\r\n    var otherCount = 0;\r\n    var targets = {};\r\n    var linkObj = {};\r\n    _.each(sourceObjs, function(targetsObjs, source){\r\n      nodes[source] = nodes[source] || { exit: 0, value: 0 };\r\n      _.each(targetsObjs, function(val, target){\r\n        targets[target] = targets[target] || { value: 0 };\r\n        linkObj[source] = linkObj[source] || {};\r\n        if (target === 'Exit') {\r\n          nodes[source]['exit'] += val;\r\n        }\r\n        nodes[source]['value'] += val;\r\n        if (target !== 'Exit') {\r\n          targets[target]['value'] += val;\r\n          linkObj[source][target] = val;\r\n        }\r\n      })\r\n    })\r\n    var sortedTargets = nodeSort(targets);\r\n    var otherTargetList = sortedTargets.slice(5);\r\n    var otherTargets = new Set(otherTargetList);\r\n    var sorted = nodeSort(nodes);\r\n    var otherNodes = sorted.slice(5);\r\n\r\n    // Modify our source to Other\r\n    // Keep a list of all other SRC all other Trg\r\n    // for each link merge\r\n\r\n    _.each(otherNodes, function(name){\r\n        otherObj['value'] += nodes[name]['value'];\r\n        otherObj['exit'] += nodes[name]['exit'];\r\n        linkObj['Other'] = linkObj['Other'] || {};\r\n        _.each(linkObj[name], function(val, target){\r\n          linkObj['Other'][target] = linkObj['Other'][target] + val || val;\r\n        });\r\n        otherCount += 1;\r\n        delete linkObj[name];\r\n        delete nodes[name];\r\n    });\r\n\r\n    _.each(linkObj, function(obj, src){\r\n      _.each(obj, function(val, target){\r\n        if (otherTargets.has(target)){\r\n          linkObj[src]['Other'] = linkObj[src]['Other'] + val || val;\r\n          delete linkObj[src][target];\r\n        }\r\n      });\r\n    });\r\n\r\n    _.each(linkObj, function(obj, src){\r\n      _.each(obj, function(val, target){\r\n        links.push({source: src, target: target, value: val});\r\n      });\r\n    });\r\n\r\n    var nodeList = [];\r\n    _.each(nodes, function(obj, src){\r\n      nodeList.push({name: src, value:obj.value, exit:obj.exit});\r\n    });\r\n\r\n    nodeList = nodeList.sort(function(a, b) { return b.value - a.value; });\r\n    if(otherObj['value'] || otherObj['exit']) {\r\n      nodeList.push({name: 'Other', value: otherObj.value, exit:otherObj.exit});\r\n    }\r\n    nodeKeys = nodeList.map(function(item){ return item.name; });\r\n    sortedTargets = sortedTargets.slice(0,5);\r\n    sortedTargets.push('Other');\r\n\r\n    _.each(links, function(link){\r\n      link.source = nodeKeys.indexOf(link.source);\r\n      link.target = sortedTargets.indexOf(link.target);\r\n    });\r\n\r\n    results.push({\r\n      'otherNodes': otherNodes,\r\n      'nodes' : nodeList,\r\n      'links' : links.sort(function(a, b) { return b.value - a.value; }),\r\n      'other' : otherCount,\r\n    });\r\n  });\r\n  return results;\r\n}\r\n\r\n function main() {\r\n          return Events({from_date: params.from_date, to_date: params.to_date, event_selectors:[{event:'featureinvoked'}]})\r\n          .groupByUser(createState)\r\n          .map(function(item){\r\n            if (item.value.journey.length > 0){\r\n              item.value.journeys.push(item.value.journey);\r\n            }\r\n            return item;\r\n          })\r\n          .filter(function(item) {\r\n              return item.value.journeys.length;\r\n          })\r\n          .map(function(item){\r\n            return item.value.journeys;\r\n          })\r\n          .map(steps)\r\n          .reduce(mixpanel.reducer.object_merge())\r\n          .map(flows)\r\n}\r\n"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var MAX_POINTS, OTHER_INDEX, PATHS, START_PATHS, VALID_WEIGHTS, addFlowsChartPointClickHandler, addResetChartClickHandler, createFlowsReport, createPath, createPoint, createStartPaths, createTooltipForPoint, destroyReport, getRange, getWeightsForPathsInStep, getWeightsForPathsInStepMinMax, highlightPointsAndPaths, placePoint, resetChart, unhighlightPointsAndPaths;

	__webpack_require__(28);

	OTHER_INDEX = 5;

	VALID_WEIGHTS = [0, 1, 2, 3, 4];

	MAX_POINTS = 6;

	START_PATHS = ['<svg id="flows-chart-path-0-0-to-1-0"  width="105px" height="185px" viewBox="0 0 105 185" class="flows-chart-path flows-chart-path-stroke-0"><path d="M2.5,182.5 L2.5,12.5 L12.5,2.5 L102.5,2.5"></path></svg>', '<svg id="flows-chart-path-0-0-to-1-1"  width="105px" height="105px" viewBox="0 0 100 100" class="flows-chart-path flows-chart-path-stroke-1"><path d="M2.5,102.5 L2.5,12.5 L12.5,2.5 L102.5,2.5"></path></svg>', '<svg id="flows-chart-path-0-0-to-1-2"  width="85px" height="43px" viewBox="0 0 85 43" class="flows-chart-path flows-chart-path-stroke-2"><path d="M2.5,40.5 L42.5,40.5 L42.5,12.5 L52.5,2.5 L82.5,2.5"></path></svg>', '<svg id="flows-chart-path-0-0-to-1-3"  width="85px" height="43px" viewBox="0 0 85 43" class="flows-chart-path flows-chart-path-stroke-3"><path d="M2.5,2.5 L42.5,2.5 L42.5,29.5 L52.5,40.5 L82.5,40.5"></path></svg>', '<svg id="flows-chart-path-0-0-to-1-4"  width="105px" height="105px" viewBox="0 0 105 105" class="flows-chart-path flows-chart-path-stroke-4"><path d="M2.5,2.5 L2.5,92.5 L12.5,102.5 L102.5,102.5"></path></svg>', '<svg id="flows-chart-path-0-0-to-1-5"  width="105px" height="185px" viewBox="0 0 105 185" class="flows-chart-path flows-chart-path-stroke-5"><path d="M2.5,2.5 L2.5,172.5 L12.5,182.5 L102.5,182.5"></path></svg>'];

	PATHS = [['<svg id="flows-chart-path-cur-0-to-nxt-0" width="135px" height="5px" viewBox="0 0 135 5" class="flows-chart-path"><path d="M2.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-0-to-nxt-1" width="135px" height="80px" viewBox="0 0 135 80" class="flows-chart-path"><path d="M2.5,2.5 L7.5,2.5 L17.5,12.5 L17.5,67.5 L27.5,77.5 L132.5,77.5"></path></svg>', '<svg id="flows-chart-path-cur-0-to-nxt-2" width="135px" height="155px" viewBox="0 0 135 155" class="flows-chart-path"><path d="M2.5,2.5 L7.5,2.5 L17.5,12.5 L17.5,142.5 L27.5,152.5 L132.5,152.5"></path></svg>', '<svg id="flows-chart-path-cur-0-to-nxt-3" width="135px" height="230px" viewBox="0 0 135 230" class="flows-chart-path"><path d="M2.5,2.5 L7.5,2.5 L17.5,12.5 L17.5,217.5 L27.5,227.5 L132.5,227.5"></path></svg>', '<svg id="flows-chart-path-cur-0-to-nxt-4" width="135px" height="305px" viewBox="0 0 135 305" class="flows-chart-path"><path d="M2.5,2.5 L7.5,2.5 L17.5,12.5 L17.5,292.5 L27.5,302.5 L132.5,302.5"></path></svg>', '<svg id="flows-chart-path-cur-0-to-nxt-5" width="135px" height="380px" viewBox="0 0 135 380" class="flows-chart-path"><path d="M2.5,2.5 L7.5,2.5 L17.5,12.5 L17.5,367.5 L27.5,377.5 L132.5,377.5"></path></svg>'], ['<svg id="flows-chart-path-cur-1-to-nxt-0" width="135px" height="80px" viewBox="0 0 135 80" class="flows-chart-path"><path d="M2.5,77.5 L27.5,77.5 L37.5,67.5 L37.5,12.5 L47.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-1-to-nxt-1" width="135px" height="5px" viewBox="0 0 135 5" class="flows-chart-path"><path d="M2.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-1-to-nxt-2" width="135px" height="80px" viewBox="0 0 135 80" class="flows-chart-path"><path d="M2.5,2.5 L27.5,2.5 L37.5,12.5 L37.5,67.5 L47.5,77.5 L132.5,77.5"></path></svg>', '<svg id="flows-chart-path-cur-1-to-nxt-3" width="135px" height="155px" viewBox="0 0 135 155" class="flows-chart-path"><path d="M2.5,2.5 L27.5,2.5 L37.5,12.5 L37.5,142.5 L47.5,152.5 L132.5,152.5"></path></svg>', '<svg id="flows-chart-path-cur-1-to-nxt-4" width="135px" height="230px" viewBox="0 0 135 230" class="flows-chart-path"><path d="M2.5,2.5 L27.5,2.5 L37.5,12.5 L37.5,217.5 L47.5,227.5 L132.5,227.5"></path></svg>', '<svg id="flows-chart-path-cur-1-to-nxt-5" width="135px" height="305px" viewBox="0 0 135 305" class="flows-chart-path"><path d="M2.5,2.5 L27.5,2.5 L37.5,12.5 L37.5,292.5 L47.5,302.5 L132.5,302.5"></path></svg>'], ['<svg id="flows-chart-path-cur-2-to-nxt-0" width="135px" height="155px" viewBox="0 0 135 155" class="flows-chart-path"><path d="M2.5,152.5 L47.5,152.5 L57.5,142.5 L57.5,12.5 L67.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-2-to-nxt-1" width="135px" height="80px" viewBox="0 0 135 80" class="flows-chart-path"><path d="M2.5,77.5 L47.5,77.5 L57.4958173,67.5 L57.4958173,12.5 L67.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-2-to-nxt-2" width="135px" height="5px" viewBox="0 0 135 5" class="flows-chart-path"><path d="M2.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-2-to-nxt-3" width="135px" height="80px" viewBox="0 0 135 80" class="flows-chart-path"><path d="M2.5,2.5 L47.5,2.5 L57.5,12.5 L57.5,67.5 L67.5,77.5 L132.5,77.5"></path></svg>', '<svg id="flows-chart-path-cur-2-to-nxt-4" width="135px" height="155px" viewBox="0 0 135 155" class="flows-chart-path"><path d="M2.5,2.5 L47.5,2.5 L57.5,12.5 L57.5,142.5 L67.5,152.5 L132.5,152.5"></path></svg>', '<svg id="flows-chart-path-cur-2-to-nxt-5" width="135px" height="230px" viewBox="0 0 135 230" class="flows-chart-path"><path d="M2.5,2.5 L47.5,2.5 L57.5,12.5 L57.5,217.5 L67.5,227.5 L132.5,227.5"></path></svg>'], ['<svg id="flows-chart-path-cur-3-to-nxt-0" width="135px" height="230px" viewBox="0 0 135 230" class="flows-chart-path"><path d="M2.5,227.5 L67.5,227.5 L77.5,217.5 L77.5,12.5 L87.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-3-to-nxt-1" width="135px" height="155px" viewBox="0 0 135 155" class="flows-chart-path"><path d="M2.5,152.5 L67.5,152.5 L77.5,142.5 L77.5,12.5 L87.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-3-to-nxt-2" width="135px" height="80px" viewBox="0 0 135 80" class="flows-chart-path"><path d="M2.5,77.5 L67.5,77.5 L77.5,67.5 L77.5,12.5 L87.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-3-to-nxt-3" width="135px" height="5px" viewBox="0 0 135 5" class="flows-chart-path"><path d="M2.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-3-to-nxt-4" width="135px" height="80px" viewBox="0 0 135 80" class="flows-chart-path"><path d="M2.5,2.5 L67.5,2.5 L77.5,12.5 L77.5,67.5 L87.5,77.5 L132.5,77.5"></path></svg>', '<svg id="flows-chart-path-cur-3-to-nxt-5" width="135px" height="155px" viewBox="0 0 135 155" class="flows-chart-path"><path d="M2.5,2.5 L67.5,2.5 L77.5,12.5 L77.5,142.5 L87.5,152.5 L132.5,152.5"></path></svg>'], ['<svg id="flows-chart-path-cur-4-to-nxt-0" width="135px" height="305px" viewBox="0 0 135 305" class="flows-chart-path"><path d="M2.5,302.5 L87.5,302.5 L97.5,292.5 L97.5,12.5 L107.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-4-to-nxt-1" width="135px" height="230px" viewBox="0 0 135 230" class="flows-chart-path"><path d="M2.5,227.5 L87.5,227.5 L97.5,217.5 L97.5,12.5 L107.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-4-to-nxt-2" width="135px" height="155px" viewBox="0 0 135 155" class="flows-chart-path"><path d="M2.5,152.5 L87.5,152.5 L97.5,142.5 L97.5,12.5 L107.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-4-to-nxt-3" width="135px" height="80px" viewBox="0 0 135 80" class="flows-chart-path"><path d="M2.5,77.5 L87.5,77.5 L97.5,67.5 L97.5,12.5 L107.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-4-to-nxt-4" width="135px" height="5px" viewBox="0 0 135 5" class="flows-chart-path"><path d="M2.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-4-to-nxt-5" width="135px" height="80px" viewBox="0 0 135 80" class="flows-chart-path"><path d="M2.5,2.5 L87.5,2.5 L97.5,12.5 L97.5,67.5 L107.5,77.5 L132.5,77.5"></path></svg>'], ['<svg id="flows-chart-path-cur-5-to-nxt-0" width="135px" height="380px" viewBox="0 0 135 380" class="flows-chart-path"><path d="M2.5,377.5 L107.5,377.5 L117.5,367.5 L117.5,12.5 L127.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-5-to-nxt-1" width="135px" height="305px" viewBox="0 0 135 305" class="flows-chart-path"><path d="M2.5,302.5 L107.5,302.5 L117.5,292.5 L117.5,12.5 L127.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-5-to-nxt-2" width="135px" height="230px" viewBox="0 0 135 230" class="flows-chart-path"><path d="M2.5,227.5 L107.5,227.5 L117.5,217.5 L117.5,12.5 L127.5,2.5 L131.320377,2.5"></path></svg>', '<svg id="flows-chart-path-cur-5-to-nxt-3" width="135px" height="155px" viewBox="0 0 135 155" class="flows-chart-path"><path d="M2.5,152.5 L107.5,152.5 L117.5,142.5 L117.5,12.5 L127.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-5-to-nxt-4" width="135px" height="80px" viewBox="0 0 135 80" class="flows-chart-path"><path d="M2.5,77.5 L107.5,77.5 L117.5,67.5 L117.5,12.5 L127.5,2.5 L132.5,2.5"></path></svg>', '<svg id="flows-chart-path-cur-5-to-nxt-5" width="135px" height="5px" viewBox="0 0 135 5" class="flows-chart-path"><path d="M2.5,2.5 L132.5,2.5"></path></svg>']];

	getRange = function(num1, num2, totalSteps) {
	  var ascending, difference, factor, range, runner, step;
	  range = [];
	  ascending = num1 < num2;
	  difference = ascending ? num2 - num1 : num1 - num2;
	  factor = Math.floor(difference / totalSteps);
	  step = 0;
	  runner = ascending ? num1 : num2;
	  while (step < totalSteps) {
	    if (ascending) {
	      range.push(runner);
	    } else {
	      range.unshift(runner);
	    }
	    runner += factor;
	    ++step;
	  }
	  return range;
	};

	createPoint = function(name, eventCount, exitCount, endPoint) {
	  var $actualPoint, $pointContainer, percentage, point;
	  point = '<a id="flows-chart-point-n-n" class="flows-chart-point"><div class="flows-chart-point-contents flows-chart-point-effect"><svg viewBox="0 0 32 32" class="flows-chart-point-drop-off"><circle style="stroke-dasharray: 50, 100;" r="16" cx="16" cy="16" class="flows-chart-point-drop-off-percentage"></circle></svg><div class="flows-chart-point-count">141M</div><div class="flows-chart-point-name">APP OPEN</div></div></a>';
	  $pointContainer = $('<div/>').html(point);
	  if (name.charAt(0) !== '$') {
	    name = name.toUpperCase();
	  }
	  $pointContainer.find('div.flows-chart-point-name').text(name);
	  $pointContainer.find('div.flows-chart-point-count').text(eventCount.condensedValue());
	  if (endPoint) {
	    $pointContainer.find('a.flows-chart-point').addClass('flows-chart-end-point');
	  }
	  percentage = exitCount / eventCount * 100;
	  if (percentage >= 1) {
	    percentage = Math.floor(percentage);
	  }
	  if (percentage > 0 && percentage < 1) {
	    percentage = 1;
	  }
	  $pointContainer.find('svg.flows-chart-point-drop-off circle').css('stroke-dasharray', percentage + ' 100');
	  $actualPoint = $pointContainer.find('.flows-chart-point');
	  return $pointContainer.html();
	};

	placePoint = function(point, row, col) {
	  var $point, maxPoint, position;
	  maxPoint = col === (MAX_POINTS - 1);
	  $point = $('<div/>').html(point);
	  if (col === 0) {
	    position = {
	      'top': 225 + 'px',
	      'left': 15 + 'px'
	    };
	  } else if (col === 1) {
	    position = {
	      'top': 25 + 80 * row + 'px',
	      'left': 135 + 'px'
	    };
	  } else {
	    position = {
	      'top': 25 + 80 * row + 'px',
	      'left': 135 + (col - 1) * 160 + 'px'
	    };
	  }
	  $point.find('.flows-chart-point').attr('id', 'flows-chart-point-' + col + '-' + row);
	  if (maxPoint) {
	    $point.find('.flows-chart-point').addClass('flows-chart-max-point');
	  }
	  $point.find('.flows-chart-point').css(position);
	  return $point.html();
	};

	createStartPaths = function(pathCount) {
	  var index, paths;
	  if (pathCount == null) {
	    pathCount = 6;
	  }
	  paths = '';
	  index = 0;
	  while (index < pathCount) {
	    paths += START_PATHS[index++];
	  }
	  return paths;
	};

	createPath = function(col, currentRow, nextRow, weight) {
	  var $flowsChartPath, $path, classList, path, position, strokeValue;
	  path = PATHS[currentRow][nextRow];
	  $path = $('<div\>').html(path);
	  position = {
	    left: 175 + 160 * (col - 1) + 'px',
	    top: '0px'
	  };
	  strokeValue = weight;
	  if (currentRow === OTHER_INDEX) {
	    strokeValue = OTHER_INDEX;
	  }
	  if (currentRow <= nextRow) {
	    position.top = 35 + nextRow * 5 + currentRow * 80 + 'px';
	  } else {
	    position.top = 35 + currentRow * 5 + nextRow * 80 + 'px';
	  }
	  $flowsChartPath = $path.find('.flows-chart-path');
	  $flowsChartPath.attr('id', 'flows-chart-path-' + col + '-' + currentRow + '-to-' + (col + 1) + '-' + nextRow);
	  $flowsChartPath.css(position);
	  classList = $flowsChartPath.attr('class');
	  classList += ' flows-chart-path-stroke-' + strokeValue;
	  $flowsChartPath.attr('class', classList);
	  return $path.html();
	};

	createTooltipForPoint = function(point, name, eventCount, exitCount) {
	  var $point, $tooltip, eventText, exitText, percentage, tooltip;
	  $point = $('<div/>').html(point);
	  tooltip = '<div class="flows-chart-point-tooltip"><div class="flows-chart-point-tooltip-contents"><div class="flows-chart-point-tooltip-item flows-chart-point-tooltip-event-name"></div><hr><div class="flows-chart-point-tooltip-item flows-chart-point-tooltip-event-count"></div><hr><div class="flows-chart-point-tooltip-item flows-chart-point-tooltip-event-exit-count"></div></div></div>';
	  $tooltip = $('<div/>').html(tooltip);
	  if (name.charAt(0) !== '$') {
	    name = name.toUpperCase();
	  }
	  $tooltip.find('.flows-chart-point-tooltip-event-name').text(name);
	  eventText = eventCount === 1 ? ' event' : ' events';
	  $tooltip.find('.flows-chart-point-tooltip-event-count').text(eventCount.condensedValue() + eventText);
	  percentage = exitCount / eventCount * 100;
	  if (percentage >= 1) {
	    percentage = Math.floor(percentage);
	  }
	  if (Number.isNaN(percentage) || !Number.isFinite(percentage)) {
	    percentage = '--';
	  }
	  if (percentage > 0 && percentage < 1) {
	    percentage = '<1';
	  }
	  exitText = exitCount === 1 ? ' EXIT (' : ' EXITS (';
	  $tooltip.find('.flows-chart-point-tooltip-event-exit-count').text(exitCount.condensedValue() + exitText + percentage + '% DROPOFF)');
	  $point.find('.flows-chart-point-contents').append($tooltip.html());
	  return $point.html();
	};

	getWeightsForPathsInStep = function(pathsInStep) {
	  var bucketSize, currentWeight, distinctPaths, i, len, path, pathIndex, weights;
	  weights = [];
	  currentWeight = 0;
	  distinctPaths = _.filter(pathsInStep, function(path) {
	    return path.source !== OTHER_INDEX;
	  });
	  bucketSize = Math.floor(distinctPaths.length / VALID_WEIGHTS.length);
	  for (pathIndex = i = 0, len = pathsInStep.length; i < len; pathIndex = ++i) {
	    path = pathsInStep[pathIndex];
	    if (path.source === OTHER_INDEX) {
	      weights.push(VALID_WEIGHTS[VALID_WEIGHTS.length - 1] + 1);
	    } else {
	      if (pathIndex % bucketSize === 0 && pathIndex !== 0) {
	        currentWeight = ++currentWeight;
	      }
	      weights.push(currentWeight);
	    }
	  }
	  return weights;
	};

	getWeightsForPathsInStepMinMax = function(pathsInStep) {
	  var currentWeight, distinctPaths, i, j, len, len1, limit, limits, max, min, path, weights, weightsLength;
	  distinctPaths = _.filter(pathsInStep, function(path) {
	    return path.source !== OTHER_INDEX;
	  });
	  weightsLength = VALID_WEIGHTS.length;
	  min = (_.min(distinctPaths, function(path) {
	    return path.value;
	  })).value || 0;
	  max = (_.max(distinctPaths, function(path) {
	    return path.value;
	  })).value || 0;
	  weights = [];
	  limits = getRange(max, min, weightsLength);
	  for (i = 0, len = pathsInStep.length; i < len; i++) {
	    path = pathsInStep[i];
	    if (path.source === OTHER_INDEX) {
	      weights.push(VALID_WEIGHTS[VALID_WEIGHTS.length - 1] + 1);
	    } else {
	      currentWeight = 0;
	      for (j = 0, len1 = limits.length; j < len1; j++) {
	        limit = limits[j];
	        if (path.value >= limit) {
	          break;
	        } else {
	          ++currentWeight;
	        }
	      }
	      weights.push(currentWeight);
	    }
	  }
	  return weights;
	};

	highlightPointsAndPaths = function($paths, direction) {
	  var $point, currentClasses, i, len, path, pathIndex, pointNumber, pointRegex, refCount;
	  for (pathIndex = i = 0, len = $paths.length; i < len; pathIndex = ++i) {
	    path = $paths[pathIndex];
	    currentClasses = $(path).attr('class');
	    $(path).attr('class', currentClasses + ' highlight');
	    pointRegex = null;
	    if (direction === 'to') {
	      pointRegex = /-to-\d+-\d+/;
	    } else if (direction === 'from') {
	      pointRegex = /\d+-\d+-to-/;
	    }
	    pointNumber = $(path).attr('id').match(pointRegex).join().replace('-to-', '');
	    $point = $('#flows-chart-point-' + pointNumber);
	    $point.addClass('highlight');
	    refCount = $point.data('refCount');
	    if (refCount && refCount !== 0) {
	      $point.data('refCount', ++refCount);
	    } else {
	      $point.data('refCount', 1);
	    }
	  }
	};

	unhighlightPointsAndPaths = function($paths, direction) {
	  var $point, currentClasses, i, len, newClasses, path, pathIndex, pointNumber, pointRegex, refCount;
	  for (pathIndex = i = 0, len = $paths.length; i < len; pathIndex = ++i) {
	    path = $paths[pathIndex];
	    currentClasses = $(path).attr('class');
	    newClasses = currentClasses.replace(/((\s)+highlight)|(highlight(\s)+)/, '');
	    $(path).attr('class', newClasses);
	    if (direction === 'to') {
	      pointRegex = /-to-\d+-\d+/;
	    } else if (direction === 'from') {
	      pointRegex = /\d+-\d+-to-/;
	    }
	    pointNumber = $(path).attr('id').match(pointRegex).join().replace('-to-', '');
	    $point = $('#flows-chart-point-' + pointNumber);
	    refCount = $point.data('refCount');
	    $point.data('refCount', --refCount);
	    if (refCount === 0 && !$point.hasClass('focus')) {
	      $point.removeClass('highlight');
	    }
	  }
	};

	resetChart = function() {
	  var $body, $highlightPaths, $highlightPoints, currentClasses, i, len, newClasses, path, pathIndex;
	  $body = $('body');
	  if ($body.hasClass('highlight-mode')) {
	    $body.removeClass('highlight-mode');
	    $highlightPoints = $('.flows-chart-point.highlight');
	    $highlightPaths = $('.flows-chart-path.highlight');
	    $highlightPoints.removeClass('focus');
	    $highlightPoints.removeClass('highlight');
	    $highlightPoints.data('refCount', 0);
	    for (pathIndex = i = 0, len = $highlightPaths.length; i < len; pathIndex = ++i) {
	      path = $highlightPaths[pathIndex];
	      currentClasses = $(path).attr('class');
	      newClasses = currentClasses.replace(/((\s)+highlight)|(highlight(\s)+)/g, '');
	      $(path).attr('class', newClasses);
	    }
	  }
	};

	addResetChartClickHandler = function() {
	  $('button#show-all-paths-button').on('click', function(event) {
	    resetChart();
	  });
	};

	addFlowsChartPointClickHandler = function() {
	  return $('.flows-chart-point').on('click', function(event) {
	    var $contents, $fromPaths, $toPaths, pointNumber, refCount;
	    event.stopPropagation();
	    $('body').addClass('highlight-mode');
	    $contents = $(this).find('.flows-chart-point-contents');
	    $contents.addClass('button-click');
	    $contents.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
	      return $(this).removeClass('button-click');
	    });
	    pointNumber = $(this).attr('id').match(/\d+-\d+/).join();
	    if ($(this).hasClass('highlight') && $(this).hasClass('focus')) {
	      refCount = $(this).data('refCount');
	      if ((refCount == null) || refCount === 0) {
	        $(this).removeClass('highlight');
	      }
	      $(this).removeClass('focus');
	      $toPaths = $('[id*=flows-chart-path-' + pointNumber + ']');
	      $fromPaths = $('[id*=-to-' + pointNumber + ']');
	      unhighlightPointsAndPaths($toPaths, 'to');
	      unhighlightPointsAndPaths($fromPaths, 'from');
	    } else {
	      $(this).addClass('highlight');
	      $(this).addClass('focus');
	      $toPaths = $('[id*=flows-chart-path-' + pointNumber + ']');
	      $fromPaths = $('[id*=-to-' + pointNumber + ']');
	      highlightPointsAndPaths($toPaths, 'to');
	      highlightPointsAndPaths($fromPaths, 'from');
	    }
	  });
	};

	destroyReport = function() {
	  var $body, $flowsChartDiagram;
	  $flowsChartDiagram = $('#flows-chart-diagram');
	  $body = $('body');
	  $flowsChartDiagram.empty();
	  return $body.removeClass('highlight-mode');
	};

	createFlowsReport = function(jsonResponse) {
	  var $banner, $bannerIcon, $bannerMessage, $bannerTitle, $flowsChartDiagram, col, endPoint, event, i, index, j, k, len, len1, len2, numberOfSteps, path, pathInfo, paths, point, points, ref, ref1, row, startPaths, startPoint, step, steps, weights;
	  $flowsChartDiagram = $('#flows-chart-diagram');
	  $banner = $('.banner');
	  startPaths = '';
	  startPoint = '';
	  points = '';
	  paths = '';
	  steps = jsonResponse[0];
	  if (steps == null) {
	    $bannerIcon = $banner.find('.banner-icon');
	    $bannerTitle = $banner.find('.banner-title');
	    $bannerMessage = $banner.find('.banner-message');
	    $bannerIcon.removeClass('banner-icon-get-started');
	    $bannerIcon.addClass('banner-icon-no-results');
	    $bannerTitle.text('NO RESULTS');
	    $bannerMessage.text('Please try your request with different parameters');
	    $banner.removeClass('hidden');
	    $flowsChartDiagram.empty();
	    return;
	  }
	  numberOfSteps = steps.length;
	  for (col = i = 0, len = steps.length; i < len; col = ++i) {
	    step = steps[col];
	    if (col === 0) {
	      event = step.nodes[col];
	      startPoint = createPoint(event.name, event.value, event.exit, false);
	      startPoint = placePoint(startPoint, 0, 0);
	      startPoint = createTooltipForPoint(startPoint, event.name, event.value, event.exit);
	      startPaths = createStartPaths(step.links.length);
	    } else {
	      endPoint = col === numberOfSteps - 1;
	      ref = step.nodes;
	      for (row = j = 0, len1 = ref.length; j < len1; row = ++j) {
	        event = ref[row];
	        if (event.name === 'Other') {
	          event.name = 'Other (' + step.other.condensedValue() + ' events)';
	        }
	        point = createPoint(event.name, event.value, event.exit, endPoint);
	        point = placePoint(point, row, col);
	        point = createTooltipForPoint(point, event.name, event.value, event.exit);
	        points = point + points;
	      }
	      weights = getWeightsForPathsInStepMinMax(step.links);
	      ref1 = step.links;
	      for (index = k = 0, len2 = ref1.length; k < len2; index = ++k) {
	        pathInfo = ref1[index];
	        path = createPath(col, pathInfo.source, pathInfo.target, weights[index]);
	        paths += path;
	      }
	    }
	  }
	  $flowsChartDiagram.prepend(paths);
	  $flowsChartDiagram.prepend(points);
	  $flowsChartDiagram.prepend(startPaths);
	  $flowsChartDiagram.prepend(startPoint);
	  addFlowsChartPointClickHandler();
	  addResetChartClickHandler();
	};

	module.exports.destroyReport = destroyReport;

	module.exports.createFlowsReport = createFlowsReport;


/***/ },
/* 28 */
/***/ function(module, exports) {

	var constants;

	if (!Number.prototype.condensedValue) {
	  constants = {
	    TRILLION: 1e12,
	    BILLION: 1e9,
	    MILLION: 1e6,
	    THOUSAND: 1e3,
	    HUNDRED: 100
	  };
	  Number.prototype.condensedValue = function() {
	    var formatHelper, isDecimal, value;
	    formatHelper = function(value) {
	      var isDecimal, result;
	      isDecimal = value % 1 !== 0;
	      return result = isDecimal && value < 100 ? value.toFixed(1) : Math.floor(value);
	    };
	    value = this.valueOf();
	    isDecimal = value % 1 !== 0;
	    switch (false) {
	      case !(value >= constants.TRILLION):
	        return (formatHelper(value / constants.TRILLION)) + 'T';
	      case !(value >= constants.BILLION):
	        return (formatHelper(value / constants.BILLION)) + 'B';
	      case !(value >= constants.MILLION):
	        return (formatHelper(value / constants.MILLION)) + 'M';
	      case !(value >= constants.THOUSAND):
	        return (formatHelper(value / constants.THOUSAND)) + 'K';
	      case !(value >= constants.HUNDRED):
	        return formatHelper(value);
	      case !(value < constants.HUNDRED && isDecimal):
	        return this.toFixed(1);
	      default:
	        return this;
	    }
	  };
	}


/***/ },
/* 29 */
/***/ function(module, exports) {

	var COUNTRIES, getCountryForCountryCode;

	COUNTRIES = {
	  "BD": "Bangladesh",
	  "BE": "Belgium",
	  "BF": "Burkina Faso",
	  "BG": "Bulgaria",
	  "BA": "Bosnia and Herzegovina",
	  "BB": "Barbados",
	  "WF": "Wallis and Futuna",
	  "BL": "Saint-Barth\u00e9lemy",
	  "BM": "Bermuda",
	  "BN": "Brunei",
	  "BO": "Bolivia",
	  "BH": "Bahrain",
	  "BI": "Burundi",
	  "BJ": "Benin",
	  "BT": "Bhutan",
	  "JM": "Jamaica",
	  "JO": "Hashemite Kingdom of Jordan",
	  "WS": "Samoa",
	  "BQ": "Bonaire, Sint Eustatius, and Saba",
	  "BR": "Brazil",
	  "BS": "Bahamas",
	  "JE": "Jersey",
	  "BY": "Belarus",
	  "BZ": "Belize",
	  "": "",
	  "RU": "Russia",
	  "RW": "Rwanda",
	  "TO": "Tonga",
	  "TL": "East Timor",
	  "RE": "R\u00e9union",
	  "LU": "Luxembourg",
	  "LR": "Liberia",
	  "RO": "Romania",
	  "TK": "Tokelau",
	  "GW": "Guinea-Bissau",
	  "GU": "Guam",
	  "GT": "Guatemala",
	  "GS": "South Georgia and the South Sandwich Islands",
	  "GR": "Greece",
	  "GQ": "Equatorial Guinea",
	  "GP": "Guadeloupe",
	  "JP": "Japan",
	  "GY": "Guyana",
	  "GG": "Guernsey",
	  "GF": "French Guiana",
	  "GE": "Georgia",
	  "GD": "Grenada",
	  "GB": "United Kingdom",
	  "GA": "Gabon",
	  "SV": "El Salvador",
	  "GN": "Guinea",
	  "GM": "Gambia",
	  "GL": "Greenland",
	  "GI": "Gibraltar",
	  "GH": "Ghana",
	  "OM": "Oman",
	  "TN": "Tunisia",
	  "BW": "Botswana",
	  "HR": "Croatia",
	  "HT": "Haiti",
	  "HU": "Hungary",
	  "HK": "Hong Kong",
	  "HN": "Honduras",
	  "CR": "Costa Rica",
	  "VE": "Venezuela",
	  "PR": "Puerto Rico",
	  "PS": "Palestine",
	  "PW": "Palau",
	  "PT": "Portugal",
	  "KR": "Republic of Korea",
	  "PY": "Paraguay",
	  "AI": "Anguilla",
	  "SH": "Saint Helena",
	  "PF": "French Polynesia",
	  "PG": "Papua New Guinea",
	  "PE": "Peru",
	  "PK": "Pakistan",
	  "PH": "Philippines",
	  "PN": "Pitcairn Islands",
	  "A2": "Satellite Provider",
	  "PL": "Poland",
	  "PM": "Saint Pierre and Miquelon",
	  "ZM": "Zambia",
	  "EE": "Estonia",
	  "NA": "Namibia",
	  "EG": "Egypt",
	  "ZA": "South Africa",
	  "EC": "Ecuador",
	  "IT": "Italy",
	  "AO": "Angola",
	  "SB": "Solomon Islands",
	  "ET": "Ethiopia",
	  "ZW": "Zimbabwe",
	  "KY": "Cayman Islands",
	  "ES": "Spain",
	  "ER": "Eritrea",
	  "ME": "Montenegro",
	  "MD": "Republic of Moldova",
	  "MG": "Madagascar",
	  "MF": "Saint Martin",
	  "MA": "Morocco",
	  "MC": "Monaco",
	  "UZ": "Uzbekistan",
	  "MM": "Myanmar [Burma]",
	  "ML": "Mali",
	  "MO": "Macao",
	  "MN": "Mongolia",
	  "MH": "Marshall Islands",
	  "MK": "Macedonia",
	  "MU": "Mauritius",
	  "MT": "Malta",
	  "MW": "Malawi",
	  "MV": "Maldives",
	  "MQ": "Martinique",
	  "MP": "Northern Mariana Islands",
	  "MS": "Montserrat",
	  "MR": "Mauritania",
	  "IM": "Isle of Man",
	  "UG": "Uganda",
	  "UA": "Ukraine",
	  "MX": "Mexico",
	  "MZ": "Mozambique",
	  "FR": "France",
	  "AW": "Aruba",
	  "A1": "Anonymous Proxy",
	  "AX": "\u00c5land",
	  "RS": "Serbia",
	  "FI": "Finland",
	  "FJ": "Fiji",
	  "FK": "Falkland Islands",
	  "FM": "Federated States of Micronesia",
	  "FO": "Faroe Islands",
	  "NI": "Nicaragua",
	  "NL": "Netherlands",
	  "NO": "Norway",
	  "SO": "Somalia",
	  "VU": "Vanuatu",
	  "NC": "New Caledonia",
	  "NE": "Niger",
	  "NF": "Norfolk Island",
	  "NG": "Nigeria",
	  "NZ": "New Zealand",
	  "NP": "Nepal",
	  "NR": "Nauru",
	  "NU": "Niue",
	  "CK": "Cook Islands",
	  "XK": "Kosovo",
	  "CI": "Ivory Coast",
	  "CH": "Switzerland",
	  "CO": "Colombia",
	  "CN": "China",
	  "CM": "Cameroon",
	  "CL": "Chile",
	  "CC": "Cocos [Keeling] Islands",
	  "CA": "Canada",
	  "CG": "Republic of the Congo",
	  "CF": "Central African Republic",
	  "CD": "Congo",
	  "CZ": "Czech Republic",
	  "CY": "Cyprus",
	  "CX": "Christmas Island",
	  "UY": "Uruguay",
	  "CW": "Cura\u00e7ao",
	  "CV": "Cape Verde",
	  "CU": "Cuba",
	  "SZ": "Swaziland",
	  "SY": "Syria",
	  "SX": "Sint Maarten",
	  "KG": "Kyrgyzstan",
	  "KE": "Kenya",
	  "SS": "South Sudan",
	  "SR": "Suriname",
	  "KI": "Kiribati",
	  "KH": "Cambodia",
	  "KN": "Saint Kitts and Nevis",
	  "KM": "Comoros",
	  "ST": "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
	  "SK": "Slovak Republic",
	  "SJ": "Svalbard and Jan Mayen",
	  "SI": "Slovenia",
	  "KP": "North Korea",
	  "KW": "Kuwait",
	  "SN": "Senegal",
	  "SM": "San Marino",
	  "SL": "Sierra Leone",
	  "SC": "Seychelles",
	  "KZ": "Kazakhstan",
	  "SA": "Saudi Arabia",
	  "SG": "Singapore",
	  "SE": "Sweden",
	  "SD": "Sudan",
	  "DO": "Dominican Republic",
	  "DM": "Dominica",
	  "DJ": "Djibouti",
	  "DK": "Denmark",
	  "VG": "British Virgin Islands",
	  "DE": "Germany",
	  "YE": "Yemen",
	  "AT": "Austria",
	  "DZ": "Algeria",
	  "US": "United States",
	  "YT": "Mayotte",
	  "UM": "U.S. Minor Outlying Islands",
	  "LB": "Lebanon",
	  "LC": "Saint Lucia",
	  "LA": "Laos",
	  "TV": "Tuvalu",
	  "TW": "Taiwan",
	  "TT": "Trinidad and Tobago",
	  "TR": "Turkey",
	  "LK": "Sri Lanka",
	  "LI": "Liechtenstein",
	  "LV": "Latvia",
	  "country_iso_code": "country_name",
	  "LT": "Republic of Lithuania",
	  "TM": "Turkmenistan",
	  "TJ": "Tajikistan",
	  "LS": "Lesotho",
	  "TH": "Thailand",
	  "TF": "French Southern Territories",
	  "TG": "Togo",
	  "TD": "Chad",
	  "TC": "Turks and Caicos Islands",
	  "LY": "Libya",
	  "VA": "Vatican City",
	  "VC": "Saint Vincent and the Grenadines",
	  "AE": "United Arab Emirates",
	  "AD": "Andorra",
	  "AG": "Antigua and Barbuda",
	  "AF": "Afghanistan",
	  "IQ": "Iraq",
	  "VI": "U.S. Virgin Islands",
	  "IS": "Iceland",
	  "IR": "Iran",
	  "AM": "Armenia",
	  "AL": "Albania",
	  "VN": "Vietnam",
	  "AN": "Netherlands Antilles",
	  "AQ": "Antarctica",
	  "AP": "Asia/Pacific Region",
	  "AS": "American Samoa",
	  "AR": "Argentina",
	  "AU": "Australia",
	  "IL": "Israel",
	  "IO": "British Indian Ocean Territory",
	  "IN": "India",
	  "TZ": "Tanzania",
	  "AZ": "Azerbaijan",
	  "IE": "Ireland",
	  "ID": "Indonesia",
	  "PA": "Panama",
	  "MY": "Malaysia",
	  "QA": "Qatar"
	};

	getCountryForCountryCode = function(countryCode) {
	  return COUNTRIES[countryCode];
	};

	module.exports.getCountryForCountryCode = getCountryForCountryCode;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	+function() {
	  var Controls = __webpack_require__(22);
	  function advancedControlsHandler() {
	    var $overlay = $('.modal-overlay');

	    $overlay.hide();

	    // Enable the 'add' button only when text is present
	    $('.advanced-controls-textbox').bind('input propertychange', function(e) {
	      var inputText = $(this).val();
	      var $addButton = $('.advanced-controls-update-button')
	      if (inputText.length) {
	        $addButton.prop('disabled', false);
	      } else {
	        $addButton.prop('disabled', true);
	      }
	    });

	    $('.excluded-values-button').on('click', function(e) {
	      $overlay.show();
	    });

	    $('.advanced-controls-cancel-button').on('click', function(e) {
	      $overlay.hide();
	    });

	    $('.advanced-controls-update-button').on('click', function(e) {
	      // Get values from list & run query
	      var textInput = $('.advanced-controls-textbox').val();
	      if (textInput.length) {
	        var excluded = textInput.split(/\s*,\s*/g);
	        Controls.runQueryWithExcludedValues(excluded);
	      } else {
	        Controls.runQueryWithExcludedValues(null);
	      }
	      $overlay.hide();
	    });
	  }
	    
	  module.exports = {
	    advancedControlsHandler: advancedControlsHandler
	  }
	}()


/***/ }
/******/ ]);