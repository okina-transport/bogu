(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["bogu"] = factory(require("react"));
	else
		root["bogu"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(25);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconBase = function IconBase(_ref, _ref2) {
  var children = _ref.children;
  var color = _ref.color;
  var size = _ref.size;
  var style = _ref.style;
  var width = _ref.width;
  var height = _ref.height;

  var props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style', 'width', 'height']);

  var _ref2$reactIconBase = _ref2.reactIconBase;
  var reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;

  var computedSize = size || reactIconBase.size || '1em';
  return _react2.default.createElement('svg', _extends({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: height || computedSize,
    width: width || computedSize
  }, reactIconBase, props, {
    style: _extends({
      verticalAlign: 'middle',
      color: color || reactIconBase.color
    }, reactIconBase.style || {}, style)
  }));
};

IconBase.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object
};

IconBase.contextTypes = {
  reactIconBase: _propTypes2.default.shape(IconBase.propTypes)
};

exports.default = IconBase;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var colorDef = {
  black: '#000',
  white: '#FFF',
  red: '#F00',
  green: '#0F0',
  blue: '#00F',
  bigblue: '#1169A7',
  darkBlue: '#083453',
  darkGrey: '#2F2F2F',
  grey: '#DDDDDD',
  lightGrey: '#F2F2F2',
  entur: {
    primary: '#273A46', // 39,58,70
    secondary: '#6BBDC2' //107,189,194,
  }
};

var color = exports.color = {
  font: {
    inverse: colorDef.white,
    title: colorDef.black,
    info1: colorDef.entur.secondary,
    info2: colorDef.darkBlue,
    info3: colorDef.black,
    warn: colorDef.red,
    disabled: colorDef.grey,

    tooltip: colorDef.white
  },
  background: colorDef.entur.primary,
  border: colorDef.black,
  effective: colorDef.black,
  fail: colorDef.red,
  modal: colorDef.white,
  backdrop: 'rgba(0, 0, 0, 0.3)',
  tooltip: '#191919',
  tabActive: colorDef.entur.secondary,

  timeLineBackground: '#DED8D8',
  timeLineBlockBackground: '#6D92B6',
  timeLineBorder: '#eee',
  timeLineSuccess: '#5DAE5D',
  timeLineFail: '#B91919',
  tableHeader: colorDef.lightGrey,
  tableRow: '#ebf2f1',
  tableInfo: '#ffffdb',

  valid: '#33c146',
  invalid: '#b20000',
  expiring: '#FFAA00',
  highlight: {
    valid: '#4caf50',
    expiring: '#FFB60A',
    invalid: '#cc0000'
  }
};

var dimension = exports.dimension = {
  timeLineWidth: 85
};

var styles = exports.styles = {
  color: color,
  dimension: dimension
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  nb: {
    text: {
      FILE_TRANSFER: 'Filoverføring',
      FILE_CLASSIFICATION: 'Filklassifisering',
      FILE_DELIVERY: 'Filleveranse',
      IMPORT: 'Import',
      EXPORT: 'GTFS-eksport',
      EXPORT_NETEX: 'NeTEx-eksport',
      VALIDATION_LEVEL_1: 'Validering nivå 1',
      DATASPACE_TRANSFER: 'Overføring sentral database',
      VALIDATION_LEVEL_2: 'Validering nivå 2',
      BUILD_GRAPH: 'Bygg av reisesøkforslag',
      UNKNOWN: 'Ukjent steg'
    },
    title: {
      FILE_TRANSFER: 'Overføring av fil fra lokal maskin til sentral server',
      IMPORT: 'Filvalidering og import i lokalt databaseområde nivå 1',
      EXPORT: 'Eksport av rutedata ',
      VALIDATION_LEVEL_1: 'Validering av komplett dataområde nivå 1',
      VALIDATION_LEVEL_2: 'Validering av komplett dataområde nivå 2',
      DATASPACE_TRANSFER: 'Overføring til sentralt databaseområde nivå 2',
      BUILD_GRAPH: 'Bygg av reisesøkforslag',
      UNKNOWN: 'Dette steget er ukjent'
    },
    filename: {
      undefined: 'Validering'
    },
    states: {
      OK: 'Fullført',
      PENDING: 'Venter',
      STARTED: 'Påbegynt',
      FAILED: 'Feil',
      DUPLICATE: 'Feil - duplikat datasett',
      IGNORED: 'Ikke gjennomført',
      CANCELLED: 'Kansellert',
      TIMEOUT: 'Tidsavbrudd'
    },
    errorMessage: {
      FILE_TRANSFER: 'Filoverføring feilet',
      FILE_CLASSIFICATION: 'Filklassifisering feilet'
    },
    filterButton: {
      ALL_TIME: 'Ubegrenset',
      LAST_12_HOURS: 'Siste 12 timene',
      LAST_24_HOURS: 'Siste døgn',
      LAST_WEEK: 'Siste uke',
      LAST_MONTH: 'Siste måned'
    }
  },
  en: {
    text: {
      FILE_TRANSFER: 'File transfer',
      FILE_CLASSIFICATION: 'File classification',
      FILE_DELIVERY: 'File delivery',
      IMPORT: 'Import',
      EXPORT: 'GTFS export',
      EXPORT_NETEX: 'NeTEx export',
      VALIDATION_LEVEL_1: 'Validation level 1',
      DATASPACE_TRANSFER: 'Transfer to central space',
      VALIDATION_LEVEL_2: 'Validation level 2',
      BUILD_GRAPH: 'Build graph',
      UNKNOWN: 'Uknown step'
    },
    title: {
      FILE_TRANSFER: 'Upload local file to remote server',
      IMPORT: 'File validation and import in local data space - level 1',
      EXPORT: 'Export of route data ',
      VALIDATION_LEVEL_1: 'Validation of complete data space - level 1',
      VALIDATION_LEVEL_2: 'Validation of complete data space - level 2',
      DATASPACE_TRANSFER: 'Transfer to central dataspace - level 2',
      BUILD_GRAPH: 'Build graph',
      UNKNOWN: 'This step is uknown'
    },
    filename: {
      undefined: 'Validation'
    },
    states: {
      OK: 'Completed',
      PENDING: 'Pending',
      STARTED: 'Started',
      FAILED: 'Failed',
      DUPLICATE: 'Failed - duplicate data set',
      IGNORED: 'Skipped',
      CANCELLED: 'Cancelled',
      TIMEOUT: 'Timeout'
    },
    errorMessage: {
      FILE_TRANSFER: 'Failed to transfer file',
      FILE_CLASSIFICATION: 'Failed on file classification'
    },
    filterButton: {
      ALL_TIME: 'Unlimited',
      LAST_12_HOURS: 'Last 12 hours',
      LAST_24_HOURS: 'Last 24 hours',
      LAST_WEEK: 'Last week',
      LAST_MONTH: 'Last month'
    }
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var buttonConfig = {
  fields: [{
    id: 'LAST_12_HOURS'
  }, {
    id: 'LAST_24_HOURS'
  }, {
    id: 'LAST_WEEK'
  }, {
    id: 'LAST_MONTH'
  }, {
    id: 'ALL_TIME'
  }]
};

var getLastValidDate = exports.getLastValidDate = function getLastValidDate(id) {
  switch (id) {
    case 'ALL_TIME':
      return null;
    case 'LAST_MONTH':
      {
        var now = new Date();
        return new Date(now.setMonth(now.getMonth() - 1));
      }
    case 'LAST_WEEK':
      {
        var _now = new Date();
        return new Date(_now.setDate(_now.getDate() - 7));
      }
    case 'LAST_12_HOURS':
      {
        var _now2 = new Date();
        return new Date(_now2.setHours(_now2.getHours() - 12));
      }
    case 'LAST_24_HOURS':
      {
        var _now3 = new Date();
        return new Date(_now3.setDate(_now3.getDate() - 1));
      }
  }
};

exports.default = buttonConfig;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  "en": {
    page: 'Page: ',
    no_status: 'No result with applied filter',
    started: 'Started',
    ended: 'Ended',
    duration: 'Duration: ',
    show_all: 'Show all',
    show_only_failed: 'Show only failed',
    show_only_success: 'Show only successful',
    show_only_cancelled: "Show only cancelled",
    filter_direct_delivery: "Only started with file delivery"
  },
  "nb": {
    page: 'Side: ',
    no_status: 'Ingen resultater med valgt filter',
    started: 'Begynte',
    ended: 'Avsluttet',
    duration: 'Varighet',
    show_all: 'Vis alle',
    show_only_failed: 'Vis kun feilet',
    show_only_success: 'Vis kun vellykket',
    show_only_cancelled: "Vis kun kansellerte",
    filter_direct_delivery: "Kun startet ved filleveranse"
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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
		// Test for IE <= 9 as proposed by Browserhacks
		// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
		// Tests for existence of standard globals is to allow style-loader 
		// to operate correctly into non-standard environments
		// @see https://github.com/webpack-contrib/style-loader/issues/177
		return window && document && document.all && !window.atob;
	}),
	getElement = (function(fn) {
		var memo = {};
		return function(selector) {
			if (typeof memo[selector] === "undefined") {
				memo[selector] = fn.call(this, selector);
			}
			return memo[selector]
		};
	})(function (styleTarget) {
		return document.querySelector(styleTarget)
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [],
	fixUrls = __webpack_require__(36);

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (typeof options.insertInto === "undefined") options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
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
};

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
	var styleTarget = getElement(options.insertInto)
	if (!styleTarget) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			styleTarget.insertBefore(styleElement, styleTarget.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			styleTarget.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			styleTarget.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		styleTarget.appendChild(styleElement);
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
	options.attrs.type = "text/css";

	attachTagAttrs(styleElement, options.attrs);
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	attachTagAttrs(linkElement, options.attrs);
	insertStyleElement(options, linkElement);
	return linkElement;
}

function attachTagAttrs(element, attrs) {
	Object.keys(attrs).forEach(function (key) {
		element.setAttribute(key, attrs[key]);
	});
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
		update = updateLink.bind(null, styleElement, options);
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

function updateLink(linkElement, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/* If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
	and there is no publicPath defined then lets turn convertToAbsoluteUrls
	on by default.  Otherwise default to the convertToAbsoluteUrls option
	directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls){
		css = fixUrls(css);
	}

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


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventDetails = exports.HeaderTimeline = exports.Timeline = undefined;

var _Timeline2 = __webpack_require__(18);

var _Timeline3 = _interopRequireDefault(_Timeline2);

var _HeaderTimeline2 = __webpack_require__(17);

var _HeaderTimeline3 = _interopRequireDefault(_HeaderTimeline2);

var _EventDetails2 = __webpack_require__(12);

var _EventDetails3 = _interopRequireDefault(_EventDetails2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Timeline = _Timeline3.default;
exports.HeaderTimeline = _HeaderTimeline3.default;
exports.EventDetails = _EventDetails3.default;

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChouetteLink = function ChouetteLink(_ref) {
  var action = _ref.action,
      id = _ref.id,
      referential = _ref.referential,
      children = _ref.children;

  var baseURL = window.config.chouetteBaseUrl + "referentials/";

  var actionMap = {
    importer: "imports/" + id + "/compliance_check",
    exporter: "exports/" + id + "/compliance_check",
    validator: "compliance_checks/" + id + "/report"
  };
  var URL = "" + baseURL + referential + "/" + actionMap[action];

  return _react2.default.createElement(
    "a",
    { title: URL, target: "_blank", href: URL },
    children
  );
};

exports.default = ChouetteLink;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ChouetteLink = __webpack_require__(10);

var _ChouetteLink2 = _interopRequireDefault(_ChouetteLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlledChouetteLink = function ControlledChouetteLink(_ref) {
  var events = _ref.events,
      includeLevel2 = _ref.includeLevel2,
      children = _ref.children;

  var supportedActions = ['IMPORT', 'VALIDATION_LEVEL_1'];

  var chouetteMap = {
    IMPORT: 'importer',
    VALIDATION_LEVEL_1: 'validator'
  };

  if (includeLevel2) {
    supportedActions.push('VALIDATION_LEVEL_2');
    supportedActions.push('EXPORT');
    supportedActions.push('EXPORT_NETEX');
    chouetteMap['VALIDATION_LEVEL_2'] = 'validator';
    chouetteMap['EXPORT'] = 'exporter';
    chouetteMap['EXPORT_NETEX'] = 'exporter';
  }

  if (events.states && events.states.length) {
    var endState = events.states[events.states.length - 1];
    if (supportedActions.indexOf(endState.action) > -1 && endState.chouetteJobId) {
      return _react2.default.createElement(
        _ChouetteLink2.default,
        {
          action: chouetteMap[endState.action],
          id: endState.chouetteJobId,
          referential: endState.referential
        },
        children
      );
    }
  }

  return _react2.default.createElement(
    'div',
    null,
    ' ',
    children,
    ' '
  );
};

exports.default = ControlledChouetteLink;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _EventStepper = __webpack_require__(14);

var _EventStepper2 = _interopRequireDefault(_EventStepper);

__webpack_require__(37);

var _refresh = __webpack_require__(30);

var _refresh2 = _interopRequireDefault(_refresh);

var _translations = __webpack_require__(5);

var _translations2 = _interopRequireDefault(_translations);

var _FilterButtonTray = __webpack_require__(16);

var _FilterButtonTray2 = _interopRequireDefault(_FilterButtonTray);

var _buttonConfig = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventDetails = function (_React$Component) {
  _inherits(EventDetails, _React$Component);

  function EventDetails(props) {
    _classCallCheck(this, EventDetails);

    var _this = _possibleConstructorReturn(this, (EventDetails.__proto__ || Object.getPrototypeOf(EventDetails)).call(this, props));

    _this.state = {
      activePageIndex: 0,
      endStateFilter: 'ALL',
      dateFilter: props.showDateFilter ? 'LAST_12_HOURS' : 'ALL_TIME',
      onlyNewDeliveryFilter: false
    };
    return _this;
  }

  _createClass(EventDetails, [{
    key: 'handlePageClick',
    value: function handlePageClick(e, pageIndex) {
      e.preventDefault();
      this.setState({
        activePageIndex: pageIndex
      });
    }
  }, {
    key: 'handleFilterChange',
    value: function handleFilterChange(dateFilter) {
      this.setState({
        dateFilter: dateFilter,
        activePageIndex: 0
      });
    }
  }, {
    key: 'getFilteredSource',
    value: function getFilteredSource(dataSource, dateFilter, endStateFilter, onlyNewDeliveryFilter) {
      var lastDate = (0, _buttonConfig.getLastValidDate)(dateFilter);

      return (dataSource || []).filter(function (event) {
        var appliedFilter = [];

        /* Filter by date from pre-defined periods */
        if (lastDate) {
          var filterByPeriod = new Date(event.firstEvent) > lastDate;
          appliedFilter.push(filterByPeriod);
        }

        /* Filter by end state from dropdown */
        var endStateFilterApplied = endStateFilter === 'FAILED' || endStateFilter === 'OK' || endStateFilter === 'CANCELLED';

        if (endStateFilterApplied) {
          var filterByEndState = event.endState === endStateFilter;
          appliedFilter.push(filterByEndState);
        }

        /* Filter by only new deliveries */
        var containsEvents = Array.isArray(event.events) && event.events.length;

        if (containsEvents && onlyNewDeliveryFilter) {
          var filterByNewDelivery = event.events[0].action === 'FILE_TRANSFER';
          appliedFilter.push(filterByNewDelivery);
        }

        return appliedFilter.every(function (filter) {
          return filter;
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          dataSource = _props.dataSource,
          locale = _props.locale,
          includeLevel2 = _props.includeLevel2,
          showDateFilter = _props.showDateFilter,
          showNewDeliveriesFilter = _props.showNewDeliveriesFilter;
      var _state = this.state,
          activePageIndex = _state.activePageIndex,
          endStateFilter = _state.endStateFilter,
          dateFilter = _state.dateFilter,
          onlyNewDeliveryFilter = _state.onlyNewDeliveryFilter;


      var filteredSource = this.getFilteredSource(dataSource, dateFilter, endStateFilter, onlyNewDeliveryFilter);
      var paginationMap = getPaginationMap(filteredSource);

      var filters = _react2.default.createElement(
        'div',
        { style: { display: 'flex', alignItems: 'center' } },
        _react2.default.createElement(
          'select',
          {
            style: { fontSize: '0.9em' },
            value: endStateFilter,
            onChange: function onChange(e) {
              e.preventDefault();
              _this2.setState({
                endStateFilter: e.target.value,
                activePageIndex: 0
              });
            }
          },
          _react2.default.createElement(
            'option',
            { value: 'ALL' },
            _translations2.default[locale].show_all
          ),
          _react2.default.createElement(
            'option',
            { value: 'OK' },
            _translations2.default[locale].show_only_success
          ),
          _react2.default.createElement(
            'option',
            { value: 'CANCELLED' },
            _translations2.default[locale].show_only_cancelled
          ),
          _react2.default.createElement(
            'option',
            { value: 'FAILED' },
            _translations2.default[locale].show_only_failed
          )
        ),
        showDateFilter && _react2.default.createElement(_FilterButtonTray2.default, {
          locale: locale,
          style: { marginLeft: 20 },
          activeButtonId: this.state.dateFilter,
          onChange: this.handleFilterChange.bind(this)
        }),
        showNewDeliveriesFilter && _react2.default.createElement(
          'div',
          { style: { marginLeft: 10, paddingTop: 2 } },
          _react2.default.createElement('input', {
            type: 'checkbox',
            id: 'direct_delivery',
            name: 'direct_delivery',
            checked: onlyNewDeliveryFilter,
            style: { margin: '0 10px' },
            onChange: function onChange(e) {
              _this2.setState({
                onlyNewDeliveryFilter: e.target.checked,
                activePageIndex: 0
              });
            }
          }),
          _react2.default.createElement(
            'label',
            { htmlFor: 'direct_delivery' },
            _translations2.default[locale].filter_direct_delivery
          )
        )
      );

      var page = paginationMap[activePageIndex];

      var refreshButton = this.props.handleRefresh && _react2.default.createElement(
        'div',
        { style: { marginRight: 15, float: 'right', cursor: 'pointer' } },
        _react2.default.createElement(_refresh2.default, {
          style: { transform: 'scale(1.5)' },
          onClick: this.props.handleRefresh
        })
      );

      if (page && page.length && paginationMap) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { style: { width: '100%', textAlign: 'left', marginBottom: 5 } },
            filters
          ),
          refreshButton,
          _react2.default.createElement(
            'div',
            { className: 'page-link-parent' },
            _react2.default.createElement(
              'span',
              null,
              _translations2.default[locale].page
            ),
            paginationMap.map(function (page, index) {
              var isActive = index == activePageIndex ? 'page-link active-link' : 'page-link inactive-link';
              return _react2.default.createElement(
                'span',
                {
                  className: isActive,
                  onClick: function onClick(e) {
                    return _this2.handlePageClick(e, index);
                  },
                  key: 'link-' + index
                },
                index + 1
              );
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            page.map(function (listItem, index) {
              var eventGroup = {};

              listItem.events.forEach(function (event) {
                if (!eventGroup[event.action]) {
                  eventGroup[event.action] = {};
                  eventGroup[event.action].states = [];
                }
                eventGroup[event.action].states.push(event);
                eventGroup[event.action].endState = event.state;
              });

              return _react2.default.createElement(
                'div',
                {
                  key: 'jobstatus-' + listItem.chouetteJobId + '-' + index,
                  style: {
                    marginBottom: 20,
                    border: '1px solid #eee',
                    padding: 10
                  }
                },
                _react2.default.createElement(_EventStepper2.default, {
                  includeLevel2: includeLevel2,
                  locale: locale,
                  key: 'event-group-' + listItem.chouetteJobId + '-' + index,
                  groups: eventGroup,
                  listItem: listItem
                })
              );
            })
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { style: { width: '100%', textAlign: 'left', marginBottom: 5 } },
          filters,
          _react2.default.createElement(
            'div',
            {
              style: {
                marginBottom: 20,
                marginTop: 20,
                border: '1px solid #eee',
                padding: 40
              }
            },
            _react2.default.createElement(
              'div',
              { style: { fontWeight: 600 } },
              _translations2.default[locale].no_status
            ),
            _react2.default.createElement(
              'div',
              { style: { marginLeft: 10 } },
              refreshButton
            )
          )
        );
      }
    }
  }]);

  return EventDetails;
}(_react2.default.Component);

var getPaginationMap = function getPaginationMap() {
  var statusList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var paginationMap = [];

  if (statusList && statusList.length) {
    for (var i = 0, j = statusList.length; i < j; i += 10) {
      paginationMap.push(statusList.slice(i, i + 10));
    }
  }
  return paginationMap;
};

exports.default = EventDetails;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _error = __webpack_require__(32);

var _error2 = _interopRequireDefault(_error);

var _checkCircle = __webpack_require__(31);

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _schedule = __webpack_require__(35);

var _schedule2 = _interopRequireDefault(_schedule);

var _cog = __webpack_require__(29);

var _cog2 = _interopRequireDefault(_cog);

var _helpOutline = __webpack_require__(33);

var _helpOutline2 = _interopRequireDefault(_helpOutline);

var _hourglassEmpty = __webpack_require__(34);

var _hourglassEmpty2 = _interopRequireDefault(_hourglassEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventStatusIcon = function (_Component) {
  _inherits(EventStatusIcon, _Component);

  function EventStatusIcon() {
    _classCallCheck(this, EventStatusIcon);

    return _possibleConstructorReturn(this, (EventStatusIcon.__proto__ || Object.getPrototypeOf(EventStatusIcon)).apply(this, arguments));
  }

  _createClass(EventStatusIcon, [{
    key: 'render',
    value: function render() {
      switch (this.props.state) {
        case 'OK':
          return _react2.default.createElement(_checkCircle2.default, {
            style: { color: 'green', width: 24, height: 22, marginTop: -2 }
          });
        case 'PENDING':
          return _react2.default.createElement(_hourglassEmpty2.default, {
            style: { color: 'orange', width: 24, height: 22, marginTop: -2 }
          });
        case 'STARTED':
          return _react2.default.createElement(_cog2.default, {
            style: { color: '#2274b5', width: 24, height: 22, marginTop: -2 }
          });
        case 'FAILED':
          return _react2.default.createElement(_error2.default, {
            style: { color: 'red', width: 24, height: 22, marginTop: -2 }
          });
        case 'CANCELLED':
          return _react2.default.createElement(_error2.default, {
            style: { color: 'orange', width: 24, height: 22, marginTop: -2 }
          });
        case 'DUPLICATE':
          return _react2.default.createElement(_error2.default, {
            style: { color: 'red', width: 24, height: 22, marginTop: -2 }
          });
        case 'IGNORED':
          return _react2.default.createElement(_schedule2.default, {
            style: { color: 'black', width: 24, height: 22, marginTop: -2 }
          });

        case 'TIMEOUT':
          return _react2.default.createElement(_schedule2.default, {
            style: { color: 'red', width: 24, height: 22, marginTop: -2 }
          });
      }
      return _react2.default.createElement(_helpOutline2.default, { style: { color: 'grey', width: 24, height: 22 } });
    }
  }]);

  return EventStatusIcon;
}(_react.Component);

exports.default = EventStatusIcon;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actionTranslations = __webpack_require__(3);

var _actionTranslations2 = _interopRequireDefault(_actionTranslations);

var _chevronDown = __webpack_require__(27);

var _chevronDown2 = _interopRequireDefault(_chevronDown);

var _chevronUp = __webpack_require__(28);

var _chevronUp2 = _interopRequireDefault(_chevronUp);

var _ControlledChouetteLink = __webpack_require__(11);

var _ControlledChouetteLink2 = _interopRequireDefault(_ControlledChouetteLink);

var _translations = __webpack_require__(5);

var _translations2 = _interopRequireDefault(_translations);

var _EventStatusIcon = __webpack_require__(13);

var _EventStatusIcon2 = _interopRequireDefault(_EventStatusIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventStepper = function (_React$Component) {
  _inherits(EventStepper, _React$Component);

  function EventStepper(props) {
    _classCallCheck(this, EventStepper);

    var _this = _possibleConstructorReturn(this, (EventStepper.__proto__ || Object.getPrototypeOf(EventStepper)).call(this, props));

    _this.state = {
      expanded: false
    };
    return _this;
  }

  _createClass(EventStepper, [{
    key: 'eventStates',
    value: function eventStates() {
      return ['FILE_TRANSFER', 'FILE_CLASSIFICATION', 'FILE_DELIVERY', 'IMPORT', 'VALIDATION_LEVEL_1', 'DATASPACE_TRANSFER', 'VALIDATION_LEVEL_2', 'EXPORT', 'BUILD_GRAPH', 'EXPORT_NETEX'];
    }
  }, {
    key: 'addUnlistedStates',
    value: function addUnlistedStates(groups) {
      var states = this.eventStates();

      var groupsWithUnlisted = Object.assign({}, groups);

      var firstStateFound = false;

      states.forEach(function (state) {
        if (!groupsWithUnlisted[state]) {
          groupsWithUnlisted[state] = {
            endState: 'IGNORED',
            missingBeforeStartStart: !firstStateFound
          };
        } else {
          firstStateFound = true;
        }
      });

      var finalGroups = {};

      Object.keys(groupsWithUnlisted).sort(function (key1, key2) {
        return states.indexOf(key1) - states.indexOf(key2);
      }).forEach(function (key) {
        finalGroups[key] = groupsWithUnlisted[key];
      });
      return finalGroups;
    }
  }, {
    key: 'handleToggleVisibility',
    value: function handleToggleVisibility() {
      this.setState({
        expanded: !this.state.expanded
      });
    }
  }, {
    key: 'createCombinedSplit',
    value: function createCombinedSplit(formattedGroups, groups, name) {
      var combined = [];
      for (var i in groups) {
        var group = groups[i];
        combined[group] = formattedGroups[group];

        if (name !== group) {
          delete formattedGroups[group];
        }
      }
      formattedGroups[name] = combined;
    }
  }, {
    key: 'aggreggateFileEvents',
    value: function aggreggateFileEvents(data) {
      var groups = _extends({}, data);
      var endState = null;
      var errorOn = null;
      Object.keys(groups).forEach(function (group) {
        if (group === 'FILE_CLASSIFICATION' || group === 'FILE_TRANSFER') {
          endState = groups[group].endState;

          if (endState === 'FAILED' || endState === 'DUPLICATE') {
            errorOn = group;
          }
          delete groups[group];
        }
      });

      if (endState !== null) {
        groups.FILE_DELIVERY = {
          endState: errorOn ? 'FAILED' : endState,
          errorOn: errorOn,
          missingBeforeStartStart: endState == 'IGNORED' && !errorOn
        };
      }
      return groups;
    }
  }, {
    key: 'bullet',
    value: function bullet(formattedGroups, groups, locale, includeLevel2) {
      var _this2 = this;

      var columnStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 45
      };

      return Object.keys(formattedGroups).map(function (group, index) {
        var column = void 0;
        var event = formattedGroups[group];

        if (Array.isArray(event)) {
          column = Object.keys(event).map(function (key, i) {
            return _this2.renderEvent(event[key], event, key, i, false, i, locale, includeLevel2);
          });
        } else {
          column = _this2.renderEvent(event, groups, group, index, index === 0, 0, locale, includeLevel2);
        }
        return _react2.default.createElement(
          'div',
          { key: 'bullet-' + index, style: columnStyle },
          column
        );
      });
    }
  }, {
    key: 'renderEvent',
    value: function renderEvent(event, groups, group, index, isFirst) {
      var columnIndex = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var locale = arguments[6];
      var includeLevel2 = arguments[7];

      var groupStyle = {
        display: 'flex',
        flexDirection: 'row'
      };

      var groupText = {
        fontSize: '0.9em',
        marginLeft: 5
      };

      var linkStyle = {
        display: 'block',
        borderColor: 'rgb(189, 189, 189)',
        marginLeft: -6,
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        width: 30,
        borderRadius: 30,
        margin: 8,
        transform: columnIndex > 0 && 'translateY(-0.5em) rotate(25deg) '
      };

      if (!_actionTranslations2.default[locale].states[event.endState]) return null;

      var toolTipText = _actionTranslations2.default[locale].states[event.endState];

      if (event.states && event.states[groups[group].states.length - 1]) {
        toolTipText += ' ' + event.states[event.states.length - 1].date;
      }

      if (event.errorOn) {
        toolTipText = _actionTranslations2.default[locale].errorMessage[event.errorOn];
      }

      return _react2.default.createElement(
        'div',
        { style: groupStyle, key: 'group-' + group + index },
        !isFirst && _react2.default.createElement('div', { style: linkStyle }),
        _react2.default.createElement(
          'div',
          {
            title: toolTipText,
            style: { opacity: event.missingBeforeStartStart ? 0.2 : 1 }
          },
          _react2.default.createElement(_EventStatusIcon2.default, { state: event.endState })
        ),
        _react2.default.createElement(
          'div',
          {
            style: _extends({}, groupText, {
              opacity: event.missingBeforeStartStart ? 0.2 : 1
            })
          },
          _react2.default.createElement(
            _ControlledChouetteLink2.default,
            { includeLevel2: includeLevel2, events: event },
            _actionTranslations2.default[locale].text[group]
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var stepperstyle = {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
      };

      var _props = this.props,
          groups = _props.groups,
          listItem = _props.listItem,
          locale = _props.locale,
          includeLevel2 = _props.includeLevel2;
      var expanded = this.state.expanded;


      var formattedGroups = this.addUnlistedStates(groups);
      formattedGroups = this.aggreggateFileEvents(formattedGroups);
      this.createCombinedSplit(formattedGroups, ['EXPORT_NETEX', 'EXPORT'], 'EXPORT');
      var bullets = this.bullet(formattedGroups, groups, locale, includeLevel2);

      return _react2.default.createElement(
        'div',
        {
          key: 'event' + listItem.chouetteJobId,
          style: { margin: 'auto', width: '98%', cursor: 'pointer' },
          onClick: function onClick() {
            return _this3.handleToggleVisibility();
          }
        },
        _react2.default.createElement(
          'div',
          { style: { display: 'flex', marginLeft: -15 } },
          _react2.default.createElement(
            'div',
            {
              title: _translations2.default[locale].duration + listItem.duration,
              style: {
                fontSize: '0.9em',
                fontWeight: 600,
                color: '#e59400',
                marginTop: -8,
                marginRight: 20
              }
            },
            listItem.started
          ),
          listItem.provider && listItem.provider.name && _react2.default.createElement(
            'div',
            { style: { fontSize: '0.8em', fontWeight: 600, flex: 1 } },
            listItem.provider.name
          ),
          _react2.default.createElement(
            'div',
            { style: { fontSize: '0.9em', fontWeight: 600, flex: 2 } },
            listItem.fileName || _actionTranslations2.default[locale].filename.undefined
          )
        ),
        _react2.default.createElement(
          'div',
          { style: stepperstyle },
          bullets,
          _react2.default.createElement(
            'div',
            {
              style: { marginLeft: 'auto', marginRight: 20, marginTop: -50 },
              onClick: function onClick() {
                return _this3.handleToggleVisibility();
              }
            },
            !expanded ? _react2.default.createElement(_chevronDown2.default, null) : _react2.default.createElement(_chevronUp2.default, null)
          )
        ),
        expanded && _react2.default.createElement(
          'div',
          {
            style: {
              display: 'flex',
              padding: 8,
              flexDirection: 'column',
              marginTop: 10,
              cursor: 'default'
            },
            onClick: function onClick(event) {
              return event.stopPropagation();
            }
          },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { style: { fontWeight: 600, marginRight: 10 } },
              _translations2.default[locale].started
            ),
            listItem.firstEvent
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { style: { fontWeight: 600, marginRight: 10 } },
              _translations2.default[locale].ended
            ),
            listItem.lastEvent
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { style: { fontWeight: 600, marginRight: 10 } },
              _translations2.default[locale].duration
            ),
            listItem.duration
          )
        )
      );
    }
  }]);

  return EventStepper;
}(_react2.default.Component);

EventStepper.propTypes = {
  groups: _react.PropTypes.object.isRequired,
  listItem: _react.PropTypes.object.isRequired
};
exports.default = EventStepper;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterButton = function (_Component) {
  _inherits(FilterButton, _Component);

  function FilterButton() {
    _classCallCheck(this, FilterButton);

    return _possibleConstructorReturn(this, (FilterButton.__proto__ || Object.getPrototypeOf(FilterButton)).apply(this, arguments));
  }

  _createClass(FilterButton, [{
    key: 'handleClick',
    value: function handleClick() {
      var _props = this.props,
          handleClick = _props.handleClick,
          id = _props.id;

      if (handleClick && typeof handleClick === 'function') {
        handleClick(id);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          label = _props2.label,
          active = _props2.active;

      var activeStyle = {
        background: '#2196F3',
        color: '#fff',
        border: '1px solid #15599d'
      };
      var inactiveStyle = {
        background: '#fff',
        color: '#000',
        border: '1px solid #d8d8d8'
      };
      var defaultStyle = {
        padding: '0.2em 0.4em',
        fontSize: '0.9em',
        cursor: 'pointer',
        borderRadius: '5%',
        minWidth: 40,
        marginLeft: 10
      };

      var buttonStyle = Object.assign(defaultStyle, active ? activeStyle : inactiveStyle);

      return _react2.default.createElement(
        'button',
        { style: buttonStyle, onClick: function onClick() {
            return _this2.handleClick();
          } },
        _react2.default.createElement(
          'div',
          { style: { pointerEvents: 'none', textAlign: 'center' } },
          label
        )
      );
    }
  }]);

  return FilterButton;
}(_react.Component);

exports.default = FilterButton;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FilterButton = __webpack_require__(15);

var _FilterButton2 = _interopRequireDefault(_FilterButton);

var _buttonConfig = __webpack_require__(4);

var _buttonConfig2 = _interopRequireDefault(_buttonConfig);

var _actionTranslations = __webpack_require__(3);

var _actionTranslations2 = _interopRequireDefault(_actionTranslations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterButtonTray = function (_Component) {
  _inherits(FilterButtonTray, _Component);

  function FilterButtonTray() {
    _classCallCheck(this, FilterButtonTray);

    return _possibleConstructorReturn(this, (FilterButtonTray.__proto__ || Object.getPrototypeOf(FilterButtonTray)).apply(this, arguments));
  }

  _createClass(FilterButtonTray, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          locale = _props.locale,
          activeButtonId = _props.activeButtonId,
          onChange = _props.onChange;


      return _react2.default.createElement(
        'div',
        { style: this.props.style },
        _buttonConfig2.default.fields.map(function (field) {
          return _react2.default.createElement(_FilterButton2.default, {
            active: activeButtonId === field.id,
            id: field.id,
            handleClick: function handleClick() {
              onChange(field.id);
            },
            key: 'filter-button-' + field.id,
            label: _actionTranslations2.default[locale].filterButton[field.id]
          });
        })
      );
    }
  }]);

  return FilterButtonTray;
}(_react.Component);

exports.default = FilterButtonTray;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(2);

var _HeaderTimeline = __webpack_require__(38);

var _HeaderTimeline2 = _interopRequireDefault(_HeaderTimeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderTimeline = function (_React$Component) {
  _inherits(HeaderTimeline, _React$Component);

  function HeaderTimeline(props) {
    _classCallCheck(this, HeaderTimeline);

    var _this = _possibleConstructorReturn(this, (HeaderTimeline.__proto__ || Object.getPrototypeOf(HeaderTimeline)).call(this, props));

    _this.state = {
      showTooltip: false
    };
    return _this;
  }

  _createClass(HeaderTimeline, [{
    key: 'handleToggleToolTip',
    value: function handleToggleToolTip() {
      this.setState({
        showTooltip: !this.state.showTooltip
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          effectivePeriods = _props.effectivePeriods,
          validDaysOffset = _props.validDaysOffset;


      var timelineStyle = {
        border: '1px solid black',
        borderRadius: 5,
        height: '18px',
        lineHeight: '18px',
        width: _styles.dimension.timeLineWidth + '%',
        margin: '10px auto',
        display: 'block',
        overflow: 'hidden',
        fontSize: '0%',
        position: 'relative'
      };

      var timelineWrapper = {
        width: '100%',
        marginBottom: 2
      };

      var timeBlock = {
        background: _styles.color.timeLineSuccess,
        height: 'auto',
        cursor: 'pointer',
        fontWeight: 500,
        fontSize: '0.8rem',
        textAlign: 'center',
        display: 'inline-block'
      };

      var titleText = {
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        transform: 'translate(10px, 20px)',
        fontSize: '1.2em',
        color: effectivePeriods.length ? _styles.color.effective : _styles.color.fail,
        zIndex: 99
      };

      var toolTipStyle = {
        position: 'relative',
        transition: 'opacity 1s',
        display: 'inline',
        fontSize: '0.8em',
        color: _styles.color.font.tooltip,
        background: _styles.color.tooltip,
        padding: 10,
        width: 'auto',
        zIndex: 99
      };

      var textStyle = {
        color: _styles.color.font.inverse,
        textShadow: '0px 0px 5px black',
        fontSize: '12px',
        height: 18,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      };

      var hrStyle = {
        background: 'black',
        width: '1px',
        height: '18px',
        position: 'absolute',
        marginLeft: 33 + validDaysOffset + '%'
      };

      var hoverText = effectivePeriods.length ? this.props.hoverText : 'Ugyldig linje. Mangler data';

      return _react2.default.createElement(
        'div',
        { style: timelineWrapper },
        _react2.default.createElement(
          'div',
          {
            style: titleText,
            onMouseOver: this.handleToggleToolTip.bind(this),
            onMouseLeave: this.handleToggleToolTip.bind(this)
          },
          this.props.line,
          this.state.showTooltip && _react2.default.createElement(
            'div',
            { style: toolTipStyle },
            ' ',
            hoverText,
            ' '
          )
        ),
        _react2.default.createElement(
          'div',
          { className: _HeaderTimeline2.default.timeline, style: timelineStyle },
          _react2.default.createElement(
            'div',
            { key: 'timeline-header-wrapper' + this.props.index },
            _react2.default.createElement('div', { style: hrStyle }),
            effectivePeriods.map(function (effectivePeriod, index) {
              var periodBlock = _extends({}, timeBlock);
              periodBlock.width = effectivePeriod.timelineEndPosition - effectivePeriod.timelineStartPosition + '%';

              if (index === 0) {
                periodBlock.marginLeft = effectivePeriod.timelineStartPosition + '%';
              } else {
                periodBlock.marginLeft = effectivePeriod.timelineStartPosition - effectivePeriods[index - 1].timelineEndPosition + '%';
              }

              var itemText = effectivePeriod.to;

              if (effectivePeriod.timelineStartPosition > 0 && effectivePeriod.from.localeCompare(effectivePeriod.to) !== 0) {
                itemText = effectivePeriod.from + ' - ' + effectivePeriod.to;
              }

              return _react2.default.createElement(
                'div',
                { key: 'timeline-header-block' + index, style: periodBlock },
                _react2.default.createElement(
                  'div',
                  { style: textStyle },
                  _react2.default.createElement(
                    'div',
                    {
                      className: 'period-block',
                      style: {
                        height: '100%',
                        color: _styles.color.font.inverse,
                        verticalAlign: 'middle'
                      },
                      title: itemText
                    },
                    itemText
                  )
                )
              );
            })
          )
        )
      );
    }
  }]);

  return HeaderTimeline;
}(_react2.default.Component);

HeaderTimeline.propTypes = {
  hoverText: _react.PropTypes.string.isRequired,
  index: _react.PropTypes.number.isRequired,
  validDaysOffset: _react.PropTypes.number.isRequired,
  validFromDate: _react.PropTypes.string.isRequired,
  effectivePeriods: _react.PropTypes.array.isRequired
};
exports.default = HeaderTimeline;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var period = _react.PropTypes.shape({
  from: _react.PropTypes.string.isRequired,
  to: _react.PropTypes.string.isRequired,
  timelineStartPosition: _react.PropTypes.number.isRequired,
  timelineEndPosition: _react.PropTypes.number.isRequired
});

var timetable = _react.PropTypes.shape({
  objectId: _react.PropTypes.string.isRequired,
  periods: _react.PropTypes.arrayOf(period).isRequired
}).isRequired;

var Timeline = function (_React$Component) {
  _inherits(Timeline, _React$Component);

  function Timeline() {
    _classCallCheck(this, Timeline);

    return _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).apply(this, arguments));
  }

  _createClass(Timeline, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          timetables = _props.timetables,
          validDaysOffset = _props.validDaysOffset,
          isLast = _props.isLast;


      var timelineStyle = {
        border: '1px solid black',
        borderRadius: 5,
        background: _styles.color.timeLineBackground,
        width: _styles.dimension.timeLineWidth + '%',
        margin: 'auto',
        display: 'block',
        overflowY: 'auto',
        position: 'relative'
      };

      var timelineWrapper = {
        width: '100%',
        paddingBottom: isLast ? 0 : 10
      };

      var timeBlock = {
        background: _styles.color.timeLineBlockBackground,
        width: '100%',
        height: '100%',
        color: _styles.color.font.inverse,
        fontWeight: 500
      };

      var textStyle = {
        whiteSpace: 'nowrap',
        overflow: 'visble',
        textShadow: '0px 0px 5px black',
        textOverflow: 'ellipsis',
        display: 'block',
        margin: 'auto 10px',
        lineHeight: '18px',
        color: _styles.color.font.inverse,
        fontSize: '0.7em',
        fontWeight: 500
      };

      var hrStyle = {
        background: 'black',
        width: '1px',
        height: '100%',
        position: 'absolute'
      };

      hrStyle.marginLeft = 33 + validDaysOffset + '%';

      return _react2.default.createElement(
        'div',
        { style: timelineWrapper },
        _react2.default.createElement(
          'div',
          { style: timelineStyle },
          _react2.default.createElement('div', { style: hrStyle }),
          timetables.map(function (timetable) {
            return timetable.periods.map(function (period, index) {
              var title = timetable.objectId;
              var hover = title + ' \n(period: ' + period.from + ' -> ' + period.to + ')';
              var periodBlock = _extends({}, timeBlock);
              periodBlock.width = period.timelineEndPosition - period.timelineStartPosition + '%';
              periodBlock.marginLeft = period.timelineStartPosition + '%';
              return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'div',
                  {
                    key: 'timetable-period-' + index,
                    style: periodBlock,
                    title: hover
                  },
                  _react2.default.createElement(
                    'div',
                    { style: textStyle },
                    title
                  )
                )
              );
            });
          })
        )
      );
    }
  }]);

  return Timeline;
}(_react2.default.Component);

Timeline.propTypes = {
  timetables: _react.PropTypes.arrayOf(timetable).isRequired,
  isLast: _react.PropTypes.bool.isRequired,
  validDaysOffset: _react.PropTypes.number.isRequired
};
exports.default = Timeline;

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports
exports.push([module.i, "@import url(//fonts.googleapis.com/earlyaccess/notosanskannada.css);", ""]);

// module
exports.push([module.i, "body {\n    font-family: 'Noto Sans Kannada', sans-serif;\n    color: #191919;\n}\n\np,h1,h2,h3,h4,h5, span {\n    color: #191919;\n}\n\n._2pOZT6OEwR2v_ci72W4koB:after {\n    content: \"\";\n    height: 18px;\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.mSGKVlmcWESbxEHr7Baz2 {\n    display: block;\n    margin-bottom: 20px;\n}\n\n._1h9AG-VWx_U40TxVE0155K {\n    display: inline-block;\n    cursor: pointer;\n    margin-left: 5px;\n    margin-top: 3px;\n    font-size: 0.9em;\n}\n\n._1jN-N7yfSKYh1KUzras4lZ {\n    color: #0D3C61;\n    text-decoration: underline;\n}\n\n._21p55VM_e75_2iBirW1Mkf {\n    color: #2196F3;\n}\n\n\na {\n    color: #2196F3;\n    text-decoration: none;\n}\n\na:hover, a:focus {\n    color: #1976D2;\n}", ""]);

// exports
exports.locals = {
	"period-block": "_2pOZT6OEwR2v_ci72W4koB",
	"page-link-parent": "mSGKVlmcWESbxEHr7Baz2",
	"page-link": "_1h9AG-VWx_U40TxVE0155K",
	"active-link": "_1jN-N7yfSKYh1KUzras4lZ",
	"inactive-link": "_21p55VM_e75_2iBirW1Mkf"
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "\n._2tU-f86f_42g1pVVQZXFXC {\n  background: #B91919;\n  background: -moz-linear-gradient(left, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #B91919), color-stop(66%, #B91919), color-stop(66%, #f6f6f6), color-stop(100%, #f6f6f6));\n  background: -webkit-linear-gradient(left, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: -o-linear-gradient(left, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: -ms-linear-gradient(left, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: linear-gradient(to right, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #B91919), color-stop(66%, #B91919), color-stop(66%, #f6f6f6), color-stop(100%, #f6f6f6));\n}\n", ""]);

// exports
exports.locals = {
	"timeline": "_2tU-f86f_42g1pVVQZXFXC"
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(22);
var invariant = __webpack_require__(23);
var ReactPropTypesSecret = __webpack_require__(26);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(24)();
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaChevronDown = function FaChevronDown(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm37.6 18l-16.6 16.6q-0.4 0.4-1 0.4t-1-0.4l-16.6-16.6q-0.4-0.4-0.4-1t0.4-1l3.7-3.7q0.5-0.4 1-0.4t1 0.4l11.9 11.9 11.9-11.9q0.4-0.4 1-0.4t1 0.4l3.7 3.7q0.4 0.4 0.4 1t-0.4 1z' })
        )
    );
};

exports.default = FaChevronDown;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaChevronUp = function FaChevronUp(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm37.6 29.7l-3.7 3.7q-0.5 0.4-1 0.4t-1-0.4l-11.9-11.9-11.8 11.9q-0.5 0.4-1.1 0.4t-1-0.4l-3.7-3.7q-0.4-0.4-0.4-1t0.4-1l16.6-16.6q0.4-0.4 1-0.4t1 0.4l16.6 16.6q0.4 0.4 0.4 1t-0.4 1z' })
        )
    );
};

exports.default = FaChevronUp;
module.exports = exports['default'];

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaCog = function FaCog(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm25.9 20q0-2.4-1.7-4t-4.1-1.7-4 1.7-1.7 4 1.7 4 4 1.7 4.1-1.7 1.7-4z m11.4-2.4v4.9q0 0.3-0.2 0.5t-0.4 0.3l-4.2 0.6q-0.4 1.3-0.8 2.1 0.7 1.1 2.3 3.1 0.3 0.2 0.3 0.5t-0.2 0.5q-0.6 0.9-2.2 2.4t-2.1 1.6q-0.3 0-0.6-0.2l-3.1-2.4q-1 0.5-2 0.9-0.4 3-0.7 4.1-0.1 0.6-0.8 0.6h-4.9q-0.3 0-0.6-0.1t-0.2-0.5l-0.7-4.1q-1.1-0.4-2-0.9l-3.1 2.4q-0.2 0.2-0.6 0.2-0.3 0-0.5-0.2-2.8-2.6-3.7-3.8-0.2-0.2-0.2-0.5 0-0.2 0.2-0.5 0.3-0.5 1.1-1.5t1.2-1.5q-0.6-1.2-0.9-2.3l-4.1-0.6q-0.2 0-0.4-0.2t-0.2-0.6v-4.9q0-0.3 0.2-0.5t0.4-0.3l4.2-0.7q0.3-1 0.8-2-0.9-1.3-2.4-3.1-0.2-0.3-0.2-0.5 0-0.2 0.2-0.5 0.6-0.8 2.2-2.4t2.1-1.6q0.3 0 0.6 0.2l3.1 2.4q1-0.5 2-0.9 0.4-3 0.7-4.1 0.1-0.6 0.8-0.6h4.9q0.3 0 0.6 0.1t0.2 0.5l0.7 4.1q1 0.4 2 0.9l3.1-2.4q0.2-0.2 0.6-0.2 0.3 0 0.5 0.2 2.9 2.6 3.7 3.8 0.2 0.2 0.2 0.5 0 0.2-0.2 0.5-0.4 0.5-1.2 1.5t-1.2 1.5q0.6 1.2 1 2.2l4 0.7q0.3 0 0.5 0.2t0.2 0.6z' })
        )
    );
};

exports.default = FaCog;
module.exports = exports['default'];

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaRefresh = function FaRefresh(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm36.7 23.6q0 0.1 0 0.1-1.4 6-6 9.7t-10.6 3.7q-3.3 0-6.4-1.2t-5.4-3.5l-2.9 2.9q-0.4 0.4-1 0.4t-1-0.4-0.4-1v-10q0-0.6 0.4-1t1-0.4h10q0.6 0 1 0.4t0.5 1-0.5 1l-3 3q1.6 1.5 3.6 2.3t4.1 0.8q3 0 5.6-1.4t4.2-4q0.2-0.4 1.2-2.6 0.1-0.5 0.6-0.5h4.3q0.3 0 0.5 0.2t0.2 0.5z m0.6-17.9v10q0 0.6-0.4 1t-1 0.4h-10q-0.6 0-1-0.4t-0.5-1 0.5-1l3-3.1q-3.3-3-7.8-3-2.9 0-5.5 1.4t-4.2 4q-0.2 0.4-1.2 2.6-0.2 0.5-0.6 0.5h-4.5q-0.3 0-0.5-0.2t-0.2-0.5v-0.1q1.5-6 6-9.7t10.7-3.7q3.3 0 6.4 1.2t5.4 3.5l3-2.9q0.4-0.4 1-0.4t1 0.4 0.4 1z' })
        )
    );
};

exports.default = FaRefresh;
module.exports = exports['default'];

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdCheckCircle = function MdCheckCircle(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm16.6 28.4l15-15-2.3-2.5-12.7 12.7-5.9-5.9-2.3 2.3z m3.4-25c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z' })
        )
    );
};

exports.default = MdCheckCircle;
module.exports = exports['default'];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdError = function MdError(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm21.6 21.6v-10h-3.2v10h3.2z m0 6.8v-3.4h-3.2v3.4h3.2z m-1.6-25c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z' })
        )
    );
};

exports.default = MdError;
module.exports = exports['default'];

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdHelpOutline = function MdHelpOutline(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 10c3.7 0 6.6 3 6.6 6.6 0 4.2-5 4.7-5 8.4h-3.2c0-5.4 5-5 5-8.4 0-1.8-1.6-3.2-3.4-3.2s-3.4 1.4-3.4 3.2h-3.2c0-3.6 2.9-6.6 6.6-6.6z m0 23.4c7.3 0 13.4-6.1 13.4-13.4s-6.1-13.4-13.4-13.4-13.4 6.1-13.4 13.4 6.1 13.4 13.4 13.4z m0-30c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z m-1.6 26.6v-3.4h3.2v3.4h-3.2z' })
        )
    );
};

exports.default = MdHelpOutline;
module.exports = exports['default'];

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdHourglassEmpty = function MdHourglassEmpty(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 19.1l6.6-6.6v-5.9h-13.2v5.9z m6.6 8.4l-6.6-6.6-6.6 6.6v5.9h13.2v-5.9z m-16.6-24.1h20v10l-6.6 6.6 6.6 6.6v10h-20v-10l6.6-6.6-6.6-6.6v-10z' })
        )
    );
};

exports.default = MdHourglassEmpty;
module.exports = exports['default'];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(1);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdSchedule = function MdSchedule(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20.9 11.6v8.8l7.5 4.4-1.3 2.2-8.7-5.4v-10h2.5z m-0.9 21.8c7.3 0 13.4-6.1 13.4-13.4s-6.1-13.4-13.4-13.4-13.4 6.1-13.4 13.4 6.1 13.4 13.4 13.4z m0-30c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z' })
        )
    );
};

exports.default = MdSchedule;
module.exports = exports['default'];

/***/ }),
/* 36 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?modules=true!./EventDetails.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?modules=true!./EventDetails.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?modules=true!./HeaderTimeline.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?modules=true!./HeaderTimeline.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyYTJjYzVhNjIwNmFlNTQzOWI0ZCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjdGlvblRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhbnNsYXRpb25zLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Nob3VldHRlTGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVkQ2hvdWV0dGVMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudFN0YXR1c0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRTdGVwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCdXR0b25UcmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzIiwid2VicGFjazovLy8uL34vZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLXVwLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2NoZWNrLWNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9oZWxwLW91dGxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQvaG91cmdsYXNzLWVtcHR5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL3NjaGVkdWxlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2ZpeFVybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzcz81Y2MxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmNzcz8yNzdhIl0sIm5hbWVzIjpbImNvbG9yRGVmIiwiYmxhY2siLCJ3aGl0ZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImJpZ2JsdWUiLCJkYXJrQmx1ZSIsImRhcmtHcmV5IiwiZ3JleSIsImxpZ2h0R3JleSIsImVudHVyIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImNvbG9yIiwiZm9udCIsImludmVyc2UiLCJ0aXRsZSIsImluZm8xIiwiaW5mbzIiLCJpbmZvMyIsIndhcm4iLCJkaXNhYmxlZCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiZWZmZWN0aXZlIiwiZmFpbCIsIm1vZGFsIiwiYmFja2Ryb3AiLCJ0YWJBY3RpdmUiLCJ0aW1lTGluZUJhY2tncm91bmQiLCJ0aW1lTGluZUJsb2NrQmFja2dyb3VuZCIsInRpbWVMaW5lQm9yZGVyIiwidGltZUxpbmVTdWNjZXNzIiwidGltZUxpbmVGYWlsIiwidGFibGVIZWFkZXIiLCJ0YWJsZVJvdyIsInRhYmxlSW5mbyIsInZhbGlkIiwiaW52YWxpZCIsImV4cGlyaW5nIiwiaGlnaGxpZ2h0IiwiZGltZW5zaW9uIiwidGltZUxpbmVXaWR0aCIsInN0eWxlcyIsIm5iIiwidGV4dCIsIkZJTEVfVFJBTlNGRVIiLCJGSUxFX0NMQVNTSUZJQ0FUSU9OIiwiRklMRV9ERUxJVkVSWSIsIklNUE9SVCIsIkVYUE9SVCIsIkVYUE9SVF9ORVRFWCIsIlZBTElEQVRJT05fTEVWRUxfMSIsIkRBVEFTUEFDRV9UUkFOU0ZFUiIsIlZBTElEQVRJT05fTEVWRUxfMiIsIkJVSUxEX0dSQVBIIiwiVU5LTk9XTiIsImZpbGVuYW1lIiwidW5kZWZpbmVkIiwic3RhdGVzIiwiT0siLCJQRU5ESU5HIiwiU1RBUlRFRCIsIkZBSUxFRCIsIkRVUExJQ0FURSIsIklHTk9SRUQiLCJDQU5DRUxMRUQiLCJUSU1FT1VUIiwiZXJyb3JNZXNzYWdlIiwiZmlsdGVyQnV0dG9uIiwiQUxMX1RJTUUiLCJMQVNUXzEyX0hPVVJTIiwiTEFTVF8yNF9IT1VSUyIsIkxBU1RfV0VFSyIsIkxBU1RfTU9OVEgiLCJlbiIsImJ1dHRvbkNvbmZpZyIsImZpZWxkcyIsImlkIiwiZ2V0TGFzdFZhbGlkRGF0ZSIsIm5vdyIsIkRhdGUiLCJzZXRNb250aCIsImdldE1vbnRoIiwic2V0RGF0ZSIsImdldERhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwicGFnZSIsIm5vX3N0YXR1cyIsInN0YXJ0ZWQiLCJlbmRlZCIsImR1cmF0aW9uIiwic2hvd19hbGwiLCJzaG93X29ubHlfZmFpbGVkIiwic2hvd19vbmx5X3N1Y2Nlc3MiLCJzaG93X29ubHlfY2FuY2VsbGVkIiwiZmlsdGVyX2RpcmVjdF9kZWxpdmVyeSIsIlRpbWVsaW5lIiwiSGVhZGVyVGltZWxpbmUiLCJFdmVudERldGFpbHMiLCJDaG91ZXR0ZUxpbmsiLCJhY3Rpb24iLCJyZWZlcmVudGlhbCIsImNoaWxkcmVuIiwiYmFzZVVSTCIsIndpbmRvdyIsImNvbmZpZyIsImNob3VldHRlQmFzZVVybCIsImFjdGlvbk1hcCIsImltcG9ydGVyIiwiZXhwb3J0ZXIiLCJ2YWxpZGF0b3IiLCJVUkwiLCJDb250cm9sbGVkQ2hvdWV0dGVMaW5rIiwiZXZlbnRzIiwiaW5jbHVkZUxldmVsMiIsInN1cHBvcnRlZEFjdGlvbnMiLCJjaG91ZXR0ZU1hcCIsInB1c2giLCJsZW5ndGgiLCJlbmRTdGF0ZSIsImluZGV4T2YiLCJjaG91ZXR0ZUpvYklkIiwicHJvcHMiLCJzdGF0ZSIsImFjdGl2ZVBhZ2VJbmRleCIsImVuZFN0YXRlRmlsdGVyIiwiZGF0ZUZpbHRlciIsInNob3dEYXRlRmlsdGVyIiwib25seU5ld0RlbGl2ZXJ5RmlsdGVyIiwiZSIsInBhZ2VJbmRleCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJkYXRhU291cmNlIiwibGFzdERhdGUiLCJmaWx0ZXIiLCJhcHBsaWVkRmlsdGVyIiwiZmlsdGVyQnlQZXJpb2QiLCJldmVudCIsImZpcnN0RXZlbnQiLCJlbmRTdGF0ZUZpbHRlckFwcGxpZWQiLCJmaWx0ZXJCeUVuZFN0YXRlIiwiY29udGFpbnNFdmVudHMiLCJBcnJheSIsImlzQXJyYXkiLCJmaWx0ZXJCeU5ld0RlbGl2ZXJ5IiwiZXZlcnkiLCJsb2NhbGUiLCJzaG93TmV3RGVsaXZlcmllc0ZpbHRlciIsImZpbHRlcmVkU291cmNlIiwiZ2V0RmlsdGVyZWRTb3VyY2UiLCJwYWdpbmF0aW9uTWFwIiwiZ2V0UGFnaW5hdGlvbk1hcCIsImZpbHRlcnMiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmFuc2xhdGlvbnMiLCJtYXJnaW5MZWZ0IiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiYmluZCIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJjaGVja2VkIiwicmVmcmVzaEJ1dHRvbiIsImhhbmRsZVJlZnJlc2giLCJtYXJnaW5SaWdodCIsImZsb2F0IiwiY3Vyc29yIiwidHJhbnNmb3JtIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJpbmRleCIsImlzQWN0aXZlIiwiaGFuZGxlUGFnZUNsaWNrIiwibGlzdEl0ZW0iLCJldmVudEdyb3VwIiwiZm9yRWFjaCIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJmb250V2VpZ2h0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJzdGF0dXNMaXN0IiwiaSIsImoiLCJzbGljZSIsIkV2ZW50U3RhdHVzSWNvbiIsImhlaWdodCIsIkV2ZW50U3RlcHBlciIsImV4cGFuZGVkIiwiZ3JvdXBzIiwiZXZlbnRTdGF0ZXMiLCJncm91cHNXaXRoVW5saXN0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJmaXJzdFN0YXRlRm91bmQiLCJtaXNzaW5nQmVmb3JlU3RhcnRTdGFydCIsImZpbmFsR3JvdXBzIiwia2V5cyIsInNvcnQiLCJrZXkxIiwia2V5MiIsImtleSIsImZvcm1hdHRlZEdyb3VwcyIsIm5hbWUiLCJjb21iaW5lZCIsImdyb3VwIiwiZGF0YSIsImVycm9yT24iLCJjb2x1bW5TdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImNvbHVtbiIsInJlbmRlckV2ZW50IiwiaXNGaXJzdCIsImNvbHVtbkluZGV4IiwiZ3JvdXBTdHlsZSIsImdyb3VwVGV4dCIsImxpbmtTdHlsZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wU3R5bGUiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlclJhZGl1cyIsIkFjdGlvblRyYW5zbGF0aW9ucyIsInRvb2xUaXBUZXh0IiwiZGF0ZSIsIm9wYWNpdHkiLCJzdGVwcGVyc3R5bGUiLCJhbGlnbkNvbnRlbnQiLCJhZGRVbmxpc3RlZFN0YXRlcyIsImFnZ3JlZ2dhdGVGaWxlRXZlbnRzIiwiY3JlYXRlQ29tYmluZWRTcGxpdCIsImJ1bGxldHMiLCJidWxsZXQiLCJoYW5kbGVUb2dnbGVWaXNpYmlsaXR5IiwicHJvdmlkZXIiLCJmbGV4IiwiZmlsZU5hbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJsYXN0RXZlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiRmlsdGVyQnV0dG9uIiwiaGFuZGxlQ2xpY2siLCJsYWJlbCIsImFjdGl2ZSIsImFjdGl2ZVN0eWxlIiwiaW5hY3RpdmVTdHlsZSIsImRlZmF1bHRTdHlsZSIsIm1pbldpZHRoIiwiYnV0dG9uU3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiRmlsdGVyQnV0dG9uVHJheSIsImFjdGl2ZUJ1dHRvbklkIiwib25DaGFuZ2UiLCJzdHlsZSIsImZpZWxkIiwic2hvd1Rvb2x0aXAiLCJlZmZlY3RpdmVQZXJpb2RzIiwidmFsaWREYXlzT2Zmc2V0IiwidGltZWxpbmVTdHlsZSIsImxpbmVIZWlnaHQiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwidGltZWxpbmVXcmFwcGVyIiwidGltZUJsb2NrIiwidGl0bGVUZXh0IiwiekluZGV4IiwidG9vbFRpcFN0eWxlIiwidHJhbnNpdGlvbiIsInRleHRTdHlsZSIsInRleHRTaGFkb3ciLCJ3aGl0ZVNwYWNlIiwidGV4dE92ZXJmbG93IiwiaHJTdHlsZSIsImhvdmVyVGV4dCIsImhhbmRsZVRvZ2dsZVRvb2xUaXAiLCJsaW5lIiwidGltZWxpbmUiLCJlZmZlY3RpdmVQZXJpb2QiLCJwZXJpb2RCbG9jayIsInRpbWVsaW5lRW5kUG9zaXRpb24iLCJ0aW1lbGluZVN0YXJ0UG9zaXRpb24iLCJpdGVtVGV4dCIsInRvIiwiZnJvbSIsImxvY2FsZUNvbXBhcmUiLCJ2ZXJ0aWNhbEFsaWduIiwic3RyaW5nIiwibnVtYmVyIiwidmFsaWRGcm9tRGF0ZSIsImFycmF5IiwicGVyaW9kIiwic2hhcGUiLCJ0aW1ldGFibGUiLCJvYmplY3RJZCIsInBlcmlvZHMiLCJhcnJheU9mIiwidGltZXRhYmxlcyIsImlzTGFzdCIsIm92ZXJmbG93WSIsInBhZGRpbmdCb3R0b20iLCJob3ZlciIsImJvb2wiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsK0M7Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQ2pTT0MsUTtRQUNBQyxjO1FBQ0FDLFk7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Ozs7OztBQUVBLElBQU1D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RUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7O0FDeEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyYTJjYzVhNjIwNmFlNTQzOWI0ZCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBJY29uQmFzZSA9IGZ1bmN0aW9uIEljb25CYXNlKF9yZWYsIF9yZWYyKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBjb2xvciA9IF9yZWYuY29sb3I7XG4gIHZhciBzaXplID0gX3JlZi5zaXplO1xuICB2YXIgc3R5bGUgPSBfcmVmLnN0eWxlO1xuICB2YXIgd2lkdGggPSBfcmVmLndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG5cbiAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2hpbGRyZW4nLCAnY29sb3InLCAnc2l6ZScsICdzdHlsZScsICd3aWR0aCcsICdoZWlnaHQnXSk7XG5cbiAgdmFyIF9yZWYyJHJlYWN0SWNvbkJhc2UgPSBfcmVmMi5yZWFjdEljb25CYXNlO1xuICB2YXIgcmVhY3RJY29uQmFzZSA9IF9yZWYyJHJlYWN0SWNvbkJhc2UgPT09IHVuZGVmaW5lZCA/IHt9IDogX3JlZjIkcmVhY3RJY29uQmFzZTtcblxuICB2YXIgY29tcHV0ZWRTaXplID0gc2l6ZSB8fCByZWFjdEljb25CYXNlLnNpemUgfHwgJzFlbSc7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3ZnJywgX2V4dGVuZHMoe1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgbWVldCcsXG4gICAgaGVpZ2h0OiBoZWlnaHQgfHwgY29tcHV0ZWRTaXplLFxuICAgIHdpZHRoOiB3aWR0aCB8fCBjb21wdXRlZFNpemVcbiAgfSwgcmVhY3RJY29uQmFzZSwgcHJvcHMsIHtcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBjb2xvcjogY29sb3IgfHwgcmVhY3RJY29uQmFzZS5jb2xvclxuICAgIH0sIHJlYWN0SWNvbkJhc2Uuc3R5bGUgfHwge30sIHN0eWxlKVxuICB9KSk7XG59O1xuXG5JY29uQmFzZS5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgc2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICB3aWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59O1xuXG5JY29uQmFzZS5jb250ZXh0VHlwZXMgPSB7XG4gIHJlYWN0SWNvbkJhc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoSWNvbkJhc2UucHJvcFR5cGVzKVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSWNvbkJhc2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmNvbnN0IGNvbG9yRGVmID0ge1xuICBibGFjazogJyMwMDAnLFxuICB3aGl0ZTogJyNGRkYnLFxuICByZWQ6ICcjRjAwJyxcbiAgZ3JlZW46ICcjMEYwJyxcbiAgYmx1ZTogJyMwMEYnLFxuICBiaWdibHVlOiAnIzExNjlBNycsXG4gIGRhcmtCbHVlOiAnIzA4MzQ1MycsXG4gIGRhcmtHcmV5OiAnIzJGMkYyRicsXG4gIGdyZXk6ICcjREREREREJyxcbiAgbGlnaHRHcmV5OiAnI0YyRjJGMicsXG4gIGVudHVyOiB7XG4gICAgcHJpbWFyeTogJyMyNzNBNDYnLCAgIC8vIDM5LDU4LDcwXG4gICAgc2Vjb25kYXJ5OiAnIzZCQkRDMicsIC8vMTA3LDE4OSwxOTQsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbG9yID0ge1xuICBmb250OiB7XG4gICAgaW52ZXJzZTogY29sb3JEZWYud2hpdGUsXG4gICAgdGl0bGU6IGNvbG9yRGVmLmJsYWNrLFxuICAgIGluZm8xOiBjb2xvckRlZi5lbnR1ci5zZWNvbmRhcnksXG4gICAgaW5mbzI6IGNvbG9yRGVmLmRhcmtCbHVlLFxuICAgIGluZm8zOiBjb2xvckRlZi5ibGFjayxcbiAgICB3YXJuOiBjb2xvckRlZi5yZWQsXG4gICAgZGlzYWJsZWQ6IGNvbG9yRGVmLmdyZXksXG5cbiAgICB0b29sdGlwOiBjb2xvckRlZi53aGl0ZSxcbiAgfSxcbiAgYmFja2dyb3VuZDogY29sb3JEZWYuZW50dXIucHJpbWFyeSxcbiAgYm9yZGVyOiBjb2xvckRlZi5ibGFjayxcbiAgZWZmZWN0aXZlOiBjb2xvckRlZi5ibGFjayxcbiAgZmFpbDogY29sb3JEZWYucmVkLFxuICBtb2RhbDogY29sb3JEZWYud2hpdGUsXG4gIGJhY2tkcm9wOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcbiAgdG9vbHRpcDogJyMxOTE5MTknLFxuICB0YWJBY3RpdmU6IGNvbG9yRGVmLmVudHVyLnNlY29uZGFyeSxcblxuICB0aW1lTGluZUJhY2tncm91bmQ6ICcjREVEOEQ4JyxcbiAgdGltZUxpbmVCbG9ja0JhY2tncm91bmQ6ICcjNkQ5MkI2JyxcbiAgdGltZUxpbmVCb3JkZXI6ICcjZWVlJyxcbiAgdGltZUxpbmVTdWNjZXNzOiAnIzVEQUU1RCcsXG4gIHRpbWVMaW5lRmFpbDogJyNCOTE5MTknLFxuICB0YWJsZUhlYWRlcjogY29sb3JEZWYubGlnaHRHcmV5LFxuICB0YWJsZVJvdzogJyNlYmYyZjEnLFxuICB0YWJsZUluZm86ICcjZmZmZmRiJyxcblxuICB2YWxpZDogJyMzM2MxNDYnLFxuICBpbnZhbGlkOiAnI2IyMDAwMCcsXG4gIGV4cGlyaW5nOiAnI0ZGQUEwMCcsXG4gIGhpZ2hsaWdodCA6IHtcbiAgICB2YWxpZDogJyM0Y2FmNTAnLFxuICAgIGV4cGlyaW5nOiAnI0ZGQjYwQScsXG4gICAgaW52YWxpZDogJyNjYzAwMDAnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkaW1lbnNpb24gPSB7XG4gIHRpbWVMaW5lV2lkdGg6IDg1LFxufVxuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICBjb2xvcjogY29sb3IsXG4gIGRpbWVuc2lvbjogZGltZW5zaW9uLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlcy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmI6IHtcbiAgICB0ZXh0OiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmlsb3ZlcmbDuHJpbmcnLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZpbGtsYXNzaWZpc2VyaW5nJyxcbiAgICAgIEZJTEVfREVMSVZFUlk6ICdGaWxsZXZlcmFuc2UnLFxuICAgICAgSU1QT1JUOiAnSW1wb3J0JyxcbiAgICAgIEVYUE9SVDogJ0dURlMtZWtzcG9ydCcsXG4gICAgICBFWFBPUlRfTkVURVg6ICdOZVRFeC1la3Nwb3J0JyxcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogJ1ZhbGlkZXJpbmcgbml2w6UgMScsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6ICdPdmVyZsO4cmluZyBzZW50cmFsIGRhdGFiYXNlJyxcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMjogJ1ZhbGlkZXJpbmcgbml2w6UgMicsXG4gICAgICBCVUlMRF9HUkFQSDogJ0J5Z2cgYXYgcmVpc2Vzw7hrZm9yc2xhZycsXG4gICAgICBVTktOT1dOOiAnVWtqZW50IHN0ZWcnXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgRklMRV9UUkFOU0ZFUjogJ092ZXJmw7hyaW5nIGF2IGZpbCBmcmEgbG9rYWwgbWFza2luIHRpbCBzZW50cmFsIHNlcnZlcicsXG4gICAgICBJTVBPUlQ6ICdGaWx2YWxpZGVyaW5nIG9nIGltcG9ydCBpIGxva2FsdCBkYXRhYmFzZW9tcsOlZGUgbml2w6UgMScsXG4gICAgICBFWFBPUlQ6ICdFa3Nwb3J0IGF2IHJ1dGVkYXRhICcsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6ICdWYWxpZGVyaW5nIGF2IGtvbXBsZXR0IGRhdGFvbXLDpWRlIG5pdsOlIDEnLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiAnVmFsaWRlcmluZyBhdiBrb21wbGV0dCBkYXRhb21yw6VkZSBuaXbDpSAyJyxcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogJ092ZXJmw7hyaW5nIHRpbCBzZW50cmFsdCBkYXRhYmFzZW9tcsOlZGUgbml2w6UgMicsXG4gICAgICBCVUlMRF9HUkFQSDogJ0J5Z2cgYXYgcmVpc2Vzw7hrZm9yc2xhZycsXG4gICAgICBVTktOT1dOOiAnRGV0dGUgc3RlZ2V0IGVyIHVramVudCdcbiAgICB9LFxuICAgIGZpbGVuYW1lOiB7XG4gICAgICB1bmRlZmluZWQ6ICdWYWxpZGVyaW5nJ1xuICAgIH0sXG4gICAgc3RhdGVzOiB7XG4gICAgICBPSzogJ0Z1bGxmw7hydCcsXG4gICAgICBQRU5ESU5HOiAnVmVudGVyJyxcbiAgICAgIFNUQVJURUQ6ICdQw6ViZWd5bnQnLFxuICAgICAgRkFJTEVEOiAnRmVpbCcsXG4gICAgICBEVVBMSUNBVEU6ICdGZWlsIC0gZHVwbGlrYXQgZGF0YXNldHQnLFxuICAgICAgSUdOT1JFRDogJ0lra2UgZ2plbm5vbWbDuHJ0JyxcbiAgICAgIENBTkNFTExFRDogJ0thbnNlbGxlcnQnLFxuICAgICAgVElNRU9VVDogJ1RpZHNhdmJydWRkJ1xuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmlsb3ZlcmbDuHJpbmcgZmVpbGV0JyxcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046ICdGaWxrbGFzc2lmaXNlcmluZyBmZWlsZXQnXG4gICAgfSxcbiAgICBmaWx0ZXJCdXR0b246IHtcbiAgICAgIEFMTF9USU1FOiAnVWJlZ3JlbnNldCcsXG4gICAgICBMQVNUXzEyX0hPVVJTOiAnU2lzdGUgMTIgdGltZW5lJyxcbiAgICAgIExBU1RfMjRfSE9VUlM6ICdTaXN0ZSBkw7hnbicsXG4gICAgICBMQVNUX1dFRUs6ICdTaXN0ZSB1a2UnLFxuICAgICAgTEFTVF9NT05USDogJ1Npc3RlIG3DpW5lZCdcbiAgICB9XG4gIH0sXG4gIGVuOiB7XG4gICAgdGV4dDoge1xuICAgICAgRklMRV9UUkFOU0ZFUjogJ0ZpbGUgdHJhbnNmZXInLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZpbGUgY2xhc3NpZmljYXRpb24nLFxuICAgICAgRklMRV9ERUxJVkVSWTogJ0ZpbGUgZGVsaXZlcnknLFxuICAgICAgSU1QT1JUOiAnSW1wb3J0JyxcbiAgICAgIEVYUE9SVDogJ0dURlMgZXhwb3J0JyxcbiAgICAgIEVYUE9SVF9ORVRFWDogJ05lVEV4IGV4cG9ydCcsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6ICdWYWxpZGF0aW9uIGxldmVsIDEnLFxuICAgICAgREFUQVNQQUNFX1RSQU5TRkVSOiAnVHJhbnNmZXIgdG8gY2VudHJhbCBzcGFjZScsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6ICdWYWxpZGF0aW9uIGxldmVsIDInLFxuICAgICAgQlVJTERfR1JBUEg6ICdCdWlsZCBncmFwaCcsXG4gICAgICBVTktOT1dOOiAnVWtub3duIHN0ZXAnXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgRklMRV9UUkFOU0ZFUjogJ1VwbG9hZCBsb2NhbCBmaWxlIHRvIHJlbW90ZSBzZXJ2ZXInLFxuICAgICAgSU1QT1JUOiAnRmlsZSB2YWxpZGF0aW9uIGFuZCBpbXBvcnQgaW4gbG9jYWwgZGF0YSBzcGFjZSAtIGxldmVsIDEnLFxuICAgICAgRVhQT1JUOiAnRXhwb3J0IG9mIHJvdXRlIGRhdGEgJyxcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogJ1ZhbGlkYXRpb24gb2YgY29tcGxldGUgZGF0YSBzcGFjZSAtIGxldmVsIDEnLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiAnVmFsaWRhdGlvbiBvZiBjb21wbGV0ZSBkYXRhIHNwYWNlIC0gbGV2ZWwgMicsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6ICdUcmFuc2ZlciB0byBjZW50cmFsIGRhdGFzcGFjZSAtIGxldmVsIDInLFxuICAgICAgQlVJTERfR1JBUEg6ICdCdWlsZCBncmFwaCcsXG4gICAgICBVTktOT1dOOiAnVGhpcyBzdGVwIGlzIHVrbm93bidcbiAgICB9LFxuICAgIGZpbGVuYW1lOiB7XG4gICAgICB1bmRlZmluZWQ6ICdWYWxpZGF0aW9uJ1xuICAgIH0sXG4gICAgc3RhdGVzOiB7XG4gICAgICBPSzogJ0NvbXBsZXRlZCcsXG4gICAgICBQRU5ESU5HOiAnUGVuZGluZycsXG4gICAgICBTVEFSVEVEOiAnU3RhcnRlZCcsXG4gICAgICBGQUlMRUQ6ICdGYWlsZWQnLFxuICAgICAgRFVQTElDQVRFOiAnRmFpbGVkIC0gZHVwbGljYXRlIGRhdGEgc2V0JyxcbiAgICAgIElHTk9SRUQ6ICdTa2lwcGVkJyxcbiAgICAgIENBTkNFTExFRDogJ0NhbmNlbGxlZCcsXG4gICAgICBUSU1FT1VUOiAnVGltZW91dCdcbiAgICB9LFxuICAgIGVycm9yTWVzc2FnZToge1xuICAgICAgRklMRV9UUkFOU0ZFUjogJ0ZhaWxlZCB0byB0cmFuc2ZlciBmaWxlJyxcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046ICdGYWlsZWQgb24gZmlsZSBjbGFzc2lmaWNhdGlvbidcbiAgICB9LFxuICAgIGZpbHRlckJ1dHRvbjoge1xuICAgICAgQUxMX1RJTUU6ICdVbmxpbWl0ZWQnLFxuICAgICAgTEFTVF8xMl9IT1VSUzogJ0xhc3QgMTIgaG91cnMnLFxuICAgICAgTEFTVF8yNF9IT1VSUzogJ0xhc3QgMjQgaG91cnMnLFxuICAgICAgTEFTVF9XRUVLOiAnTGFzdCB3ZWVrJyxcbiAgICAgIExBU1RfTU9OVEg6ICdMYXN0IG1vbnRoJ1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FjdGlvblRyYW5zbGF0aW9ucy5qcyIsImNvbnN0IGJ1dHRvbkNvbmZpZyA9IHtcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgaWQ6ICdMQVNUXzEyX0hPVVJTJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdMQVNUXzI0X0hPVVJTJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdMQVNUX1dFRUsnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0xBU1RfTU9OVEgnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0FMTF9USU1FJ1xuICAgIH1cbiAgXVxufTtcblxuZXhwb3J0IGNvbnN0IGdldExhc3RWYWxpZERhdGUgPSBpZCA9PiB7XG4gIHN3aXRjaCAoaWQpIHtcbiAgICBjYXNlICdBTExfVElNRSc6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBjYXNlICdMQVNUX01PTlRIJzoge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldE1vbnRoKG5vdy5nZXRNb250aCgpIC0gMSkpO1xuICAgIH1cbiAgICBjYXNlICdMQVNUX1dFRUsnOiB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShub3cuc2V0RGF0ZShub3cuZ2V0RGF0ZSgpIC0gNykpO1xuICAgIH1cbiAgICBjYXNlICdMQVNUXzEyX0hPVVJTJzoge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldEhvdXJzKG5vdy5nZXRIb3VycygpIC0gMTIpKTtcbiAgICB9XG4gICAgY2FzZSAnTEFTVF8yNF9IT1VSUyc6IHtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCkgLSAxKSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidXR0b25Db25maWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9idXR0b25Db25maWcuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIFwiZW5cIjoge1xuICAgIHBhZ2U6ICdQYWdlOiAnLFxuICAgIG5vX3N0YXR1czogJ05vIHJlc3VsdCB3aXRoIGFwcGxpZWQgZmlsdGVyJyxcbiAgICBzdGFydGVkOiAnU3RhcnRlZCcsXG4gICAgZW5kZWQ6ICdFbmRlZCcsXG4gICAgZHVyYXRpb246ICdEdXJhdGlvbjogJyxcbiAgICBzaG93X2FsbDogJ1Nob3cgYWxsJyxcbiAgICBzaG93X29ubHlfZmFpbGVkOiAnU2hvdyBvbmx5IGZhaWxlZCcsXG4gICAgc2hvd19vbmx5X3N1Y2Nlc3M6ICdTaG93IG9ubHkgc3VjY2Vzc2Z1bCcsXG4gICAgc2hvd19vbmx5X2NhbmNlbGxlZDogXCJTaG93IG9ubHkgY2FuY2VsbGVkXCIsXG4gICAgZmlsdGVyX2RpcmVjdF9kZWxpdmVyeTogXCJPbmx5IHN0YXJ0ZWQgd2l0aCBmaWxlIGRlbGl2ZXJ5XCJcbiAgfSxcbiAgXCJuYlwiOiB7XG4gICAgcGFnZTogJ1NpZGU6ICcsXG4gICAgbm9fc3RhdHVzOiAnSW5nZW4gcmVzdWx0YXRlciBtZWQgdmFsZ3QgZmlsdGVyJyxcbiAgICBzdGFydGVkOiAnQmVneW50ZScsXG4gICAgZW5kZWQ6ICdBdnNsdXR0ZXQnLFxuICAgIGR1cmF0aW9uOiAnVmFyaWdoZXQnLFxuICAgIHNob3dfYWxsOiAnVmlzIGFsbGUnLFxuICAgIHNob3dfb25seV9mYWlsZWQ6ICdWaXMga3VuIGZlaWxldCcsXG4gICAgc2hvd19vbmx5X3N1Y2Nlc3M6ICdWaXMga3VuIHZlbGx5a2tldCcsXG4gICAgc2hvd19vbmx5X2NhbmNlbGxlZDogXCJWaXMga3VuIGthbnNlbGxlcnRlXCIsXG4gICAgZmlsdGVyX2RpcmVjdF9kZWxpdmVyeTogXCJLdW4gc3RhcnRldCB2ZWQgZmlsbGV2ZXJhbnNlXCJcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90cmFuc2xhdGlvbnMuanMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdFx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHRcdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXIgXG5cdFx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdFx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdFx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xuXHR9KSxcblx0Z2V0RWxlbWVudCA9IChmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vID0ge307XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0XHR9O1xuXHR9KShmdW5jdGlvbiAoc3R5bGVUYXJnZXQpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdHlsZVRhcmdldClcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXSxcblx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL2ZpeFVybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEludG8gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2Vcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG5cdHZhciBzdHlsZVRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXHRpZiAoIXN0eWxlVGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHRzdHlsZVRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBzdHlsZVRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHN0eWxlVGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVUYXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRzdHlsZVRhcmdldC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGF0dGFjaFRhZ0F0dHJzKHN0eWxlRWxlbWVudCwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YXR0YWNoVGFnQXR0cnMobGlua0VsZW1lbnQsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFRhZ0F0dHJzKGVsZW1lbnQsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qIElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKXtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZihzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xuXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYylcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgVGltZWxpbmUgZnJvbSAnLi9UaW1lbGluZSdcbmV4cG9ydCBIZWFkZXJUaW1lbGluZSBmcm9tICcuL0hlYWRlclRpbWVsaW5lJ1xuZXhwb3J0IEV2ZW50RGV0YWlscyBmcm9tICcuL0V2ZW50RGV0YWlscydcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQ2hvdWV0dGVMaW5rID0gKHsgYWN0aW9uLCBpZCwgcmVmZXJlbnRpYWwsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgYmFzZVVSTCA9IGAke3dpbmRvdy5jb25maWcuY2hvdWV0dGVCYXNlVXJsfXJlZmVyZW50aWFscy9gO1xuXG4gIGNvbnN0IGFjdGlvbk1hcCA9IHtcbiAgICBpbXBvcnRlcjogYGltcG9ydHMvJHtpZH0vY29tcGxpYW5jZV9jaGVja2AsXG4gICAgZXhwb3J0ZXI6IGBleHBvcnRzLyR7aWR9L2NvbXBsaWFuY2VfY2hlY2tgLFxuICAgIHZhbGlkYXRvcjogYGNvbXBsaWFuY2VfY2hlY2tzLyR7aWR9L3JlcG9ydGBcbiAgfTtcbiAgY29uc3QgVVJMID0gYCR7YmFzZVVSTH0ke3JlZmVyZW50aWFsfS8ke2FjdGlvbk1hcFthY3Rpb25dfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8YSB0aXRsZT17VVJMfSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtVUkx9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENob3VldHRlTGluaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Nob3VldHRlTGluay5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hvdWV0dGVMaW5rIGZyb20gJy4vQ2hvdWV0dGVMaW5rJztcblxuY29uc3QgQ29udHJvbGxlZENob3VldHRlTGluayA9ICh7IGV2ZW50cywgaW5jbHVkZUxldmVsMiwgY2hpbGRyZW4gfSkgPT4ge1xuICBsZXQgc3VwcG9ydGVkQWN0aW9ucyA9IFsnSU1QT1JUJywgJ1ZBTElEQVRJT05fTEVWRUxfMSddO1xuXG4gIGxldCBjaG91ZXR0ZU1hcCA9IHtcbiAgICBJTVBPUlQ6ICdpbXBvcnRlcicsXG4gICAgVkFMSURBVElPTl9MRVZFTF8xOiAndmFsaWRhdG9yJ1xuICB9O1xuXG4gIGlmIChpbmNsdWRlTGV2ZWwyKSB7XG4gICAgc3VwcG9ydGVkQWN0aW9ucy5wdXNoKCdWQUxJREFUSU9OX0xFVkVMXzInKTtcbiAgICBzdXBwb3J0ZWRBY3Rpb25zLnB1c2goJ0VYUE9SVCcpO1xuICAgIHN1cHBvcnRlZEFjdGlvbnMucHVzaCgnRVhQT1JUX05FVEVYJyk7XG4gICAgY2hvdWV0dGVNYXBbJ1ZBTElEQVRJT05fTEVWRUxfMiddID0gJ3ZhbGlkYXRvcic7XG4gICAgY2hvdWV0dGVNYXBbJ0VYUE9SVCddID0gJ2V4cG9ydGVyJztcbiAgICBjaG91ZXR0ZU1hcFsnRVhQT1JUX05FVEVYJ10gPSAnZXhwb3J0ZXInO1xuICB9XG5cbiAgaWYgKGV2ZW50cy5zdGF0ZXMgJiYgZXZlbnRzLnN0YXRlcy5sZW5ndGgpIHtcbiAgICBjb25zdCBlbmRTdGF0ZSA9IGV2ZW50cy5zdGF0ZXNbZXZlbnRzLnN0YXRlcy5sZW5ndGggLSAxXTtcbiAgICBpZiAoc3VwcG9ydGVkQWN0aW9ucy5pbmRleE9mKGVuZFN0YXRlLmFjdGlvbikgPiAtMSAmJiBlbmRTdGF0ZS5jaG91ZXR0ZUpvYklkKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q2hvdWV0dGVMaW5rXG4gICAgICAgICAgYWN0aW9uPXtjaG91ZXR0ZU1hcFtlbmRTdGF0ZS5hY3Rpb25dfVxuICAgICAgICAgIGlkPXtlbmRTdGF0ZS5jaG91ZXR0ZUpvYklkfVxuICAgICAgICAgIHJlZmVyZW50aWFsPXtlbmRTdGF0ZS5yZWZlcmVudGlhbH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9DaG91ZXR0ZUxpbms+XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiA8ZGl2PiB7Y2hpbGRyZW59IDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZWRDaG91ZXR0ZUxpbms7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVkQ2hvdWV0dGVMaW5rLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFdmVudFN0ZXBwZXIgZnJvbSAnLi9FdmVudFN0ZXBwZXInO1xuaW1wb3J0ICcuL0V2ZW50RGV0YWlscy5jc3MnO1xuaW1wb3J0IEZhRnJlc2ggZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL3JlZnJlc2gnO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgRmlsdGVyQnV0dG9uVHJheSBmcm9tICcuL0ZpbHRlckJ1dHRvblRyYXknO1xuaW1wb3J0IHsgZ2V0TGFzdFZhbGlkRGF0ZSB9IGZyb20gJy4vYnV0dG9uQ29uZmlnJztcblxuY2xhc3MgRXZlbnREZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZVBhZ2VJbmRleDogMCxcbiAgICAgIGVuZFN0YXRlRmlsdGVyOiAnQUxMJyxcbiAgICAgIGRhdGVGaWx0ZXI6IHByb3BzLnNob3dEYXRlRmlsdGVyID8gJ0xBU1RfMTJfSE9VUlMnIDogJ0FMTF9USU1FJyxcbiAgICAgIG9ubHlOZXdEZWxpdmVyeUZpbHRlcjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlUGFnZUNsaWNrKGUsIHBhZ2VJbmRleCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2VJbmRleDogcGFnZUluZGV4XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UoZGF0ZUZpbHRlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0ZUZpbHRlcjogZGF0ZUZpbHRlcixcbiAgICAgIGFjdGl2ZVBhZ2VJbmRleDogMFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0RmlsdGVyZWRTb3VyY2UoXG4gICAgZGF0YVNvdXJjZSxcbiAgICBkYXRlRmlsdGVyLFxuICAgIGVuZFN0YXRlRmlsdGVyLFxuICAgIG9ubHlOZXdEZWxpdmVyeUZpbHRlclxuICApIHtcbiAgICBjb25zdCBsYXN0RGF0ZSA9IGdldExhc3RWYWxpZERhdGUoZGF0ZUZpbHRlcik7XG5cbiAgICByZXR1cm4gKGRhdGFTb3VyY2UgfHwgW10pLmZpbHRlcihldmVudCA9PiB7XG4gICAgICBjb25zdCBhcHBsaWVkRmlsdGVyID0gW107XG5cbiAgICAgIC8qIEZpbHRlciBieSBkYXRlIGZyb20gcHJlLWRlZmluZWQgcGVyaW9kcyAqL1xuICAgICAgaWYgKGxhc3REYXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlckJ5UGVyaW9kID0gbmV3IERhdGUoZXZlbnQuZmlyc3RFdmVudCkgPiBsYXN0RGF0ZTtcbiAgICAgICAgYXBwbGllZEZpbHRlci5wdXNoKGZpbHRlckJ5UGVyaW9kKTtcbiAgICAgIH1cblxuICAgICAgLyogRmlsdGVyIGJ5IGVuZCBzdGF0ZSBmcm9tIGRyb3Bkb3duICovXG4gICAgICBjb25zdCBlbmRTdGF0ZUZpbHRlckFwcGxpZWQgPVxuICAgICAgICBlbmRTdGF0ZUZpbHRlciA9PT0gJ0ZBSUxFRCcgfHxcbiAgICAgICAgZW5kU3RhdGVGaWx0ZXIgPT09ICdPSycgfHxcbiAgICAgICAgZW5kU3RhdGVGaWx0ZXIgPT09ICdDQU5DRUxMRUQnO1xuXG4gICAgICBpZiAoZW5kU3RhdGVGaWx0ZXJBcHBsaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlckJ5RW5kU3RhdGUgPSBldmVudC5lbmRTdGF0ZSA9PT0gZW5kU3RhdGVGaWx0ZXI7XG4gICAgICAgIGFwcGxpZWRGaWx0ZXIucHVzaChmaWx0ZXJCeUVuZFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgLyogRmlsdGVyIGJ5IG9ubHkgbmV3IGRlbGl2ZXJpZXMgKi9cbiAgICAgIGNvbnN0IGNvbnRhaW5zRXZlbnRzID0gQXJyYXkuaXNBcnJheShldmVudC5ldmVudHMpICYmIGV2ZW50LmV2ZW50cy5sZW5ndGg7XG5cbiAgICAgIGlmIChjb250YWluc0V2ZW50cyAmJiBvbmx5TmV3RGVsaXZlcnlGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyQnlOZXdEZWxpdmVyeSA9IGV2ZW50LmV2ZW50c1swXS5hY3Rpb24gPT09ICdGSUxFX1RSQU5TRkVSJztcbiAgICAgICAgYXBwbGllZEZpbHRlci5wdXNoKGZpbHRlckJ5TmV3RGVsaXZlcnkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXBwbGllZEZpbHRlci5ldmVyeShmaWx0ZXIgPT4gZmlsdGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBkYXRhU291cmNlLFxuICAgICAgbG9jYWxlLFxuICAgICAgaW5jbHVkZUxldmVsMixcbiAgICAgIHNob3dEYXRlRmlsdGVyLFxuICAgICAgc2hvd05ld0RlbGl2ZXJpZXNGaWx0ZXJcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBhY3RpdmVQYWdlSW5kZXgsXG4gICAgICBlbmRTdGF0ZUZpbHRlcixcbiAgICAgIGRhdGVGaWx0ZXIsXG4gICAgICBvbmx5TmV3RGVsaXZlcnlGaWx0ZXJcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGZpbHRlcmVkU291cmNlID0gdGhpcy5nZXRGaWx0ZXJlZFNvdXJjZShcbiAgICAgIGRhdGFTb3VyY2UsXG4gICAgICBkYXRlRmlsdGVyLFxuICAgICAgZW5kU3RhdGVGaWx0ZXIsXG4gICAgICBvbmx5TmV3RGVsaXZlcnlGaWx0ZXJcbiAgICApO1xuICAgIGNvbnN0IHBhZ2luYXRpb25NYXAgPSBnZXRQYWdpbmF0aW9uTWFwKGZpbHRlcmVkU291cmNlKTtcblxuICAgIGNvbnN0IGZpbHRlcnMgPSAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzAuOWVtJyB9fVxuICAgICAgICAgIHZhbHVlPXtlbmRTdGF0ZUZpbHRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgZW5kU3RhdGVGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICBhY3RpdmVQYWdlSW5kZXg6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUxMXCI+e3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfYWxsfTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPS1wiPnt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zaG93X29ubHlfc3VjY2Vzc308L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0FOQ0VMTEVEXCI+XG4gICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19vbmx5X2NhbmNlbGxlZH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRkFJTEVEXCI+XG4gICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19vbmx5X2ZhaWxlZH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIHtzaG93RGF0ZUZpbHRlciAmJiAoXG4gICAgICAgICAgPEZpbHRlckJ1dHRvblRyYXlcbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjAgfX1cbiAgICAgICAgICAgIGFjdGl2ZUJ1dHRvbklkPXt0aGlzLnN0YXRlLmRhdGVGaWx0ZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7c2hvd05ld0RlbGl2ZXJpZXNGaWx0ZXIgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAsIHBhZGRpbmdUb3A6IDIgfX0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9XCJkaXJlY3RfZGVsaXZlcnlcIlxuICAgICAgICAgICAgICBuYW1lPVwiZGlyZWN0X2RlbGl2ZXJ5XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17b25seU5ld0RlbGl2ZXJ5RmlsdGVyfVxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcwIDEwcHgnIH19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgIG9ubHlOZXdEZWxpdmVyeUZpbHRlcjogZS50YXJnZXQuY2hlY2tlZCxcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2VJbmRleDogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGlyZWN0X2RlbGl2ZXJ5XCI+XG4gICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5maWx0ZXJfZGlyZWN0X2RlbGl2ZXJ5fVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBjb25zdCBwYWdlID0gcGFnaW5hdGlvbk1hcFthY3RpdmVQYWdlSW5kZXhdO1xuXG4gICAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9IHRoaXMucHJvcHMuaGFuZGxlUmVmcmVzaCAmJiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxNSwgZmxvYXQ6ICdyaWdodCcsIGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICA8RmFGcmVzaFxuICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogJ3NjYWxlKDEuNSknIH19XG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVSZWZyZXNofVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGlmIChwYWdlICYmIHBhZ2UubGVuZ3RoICYmIHBhZ2luYXRpb25NYXApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdsZWZ0JywgbWFyZ2luQm90dG9tOiA1IH19PlxuICAgICAgICAgICAge2ZpbHRlcnN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3JlZnJlc2hCdXR0b259XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxpbmstcGFyZW50XCI+XG4gICAgICAgICAgICA8c3Bhbj57dHJhbnNsYXRpb25zW2xvY2FsZV0ucGFnZX08L3NwYW4+XG4gICAgICAgICAgICB7cGFnaW5hdGlvbk1hcC5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID1cbiAgICAgICAgICAgICAgICBpbmRleCA9PSBhY3RpdmVQYWdlSW5kZXhcbiAgICAgICAgICAgICAgICAgID8gJ3BhZ2UtbGluayBhY3RpdmUtbGluaydcbiAgICAgICAgICAgICAgICAgIDogJ3BhZ2UtbGluayBpbmFjdGl2ZS1saW5rJztcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0FjdGl2ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5oYW5kbGVQYWdlQ2xpY2soZSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAga2V5PXsnbGluay0nICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3BhZ2UubWFwKChsaXN0SXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGV2ZW50R3JvdXAgPSB7fTtcblxuICAgICAgICAgICAgICBsaXN0SXRlbS5ldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0pIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgZXZlbnRHcm91cFtldmVudC5hY3Rpb25dLnN0YXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0uc3RhdGVzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXS5lbmRTdGF0ZSA9IGV2ZW50LnN0YXRlO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17J2pvYnN0YXR1cy0nICsgbGlzdEl0ZW0uY2hvdWV0dGVKb2JJZCArICctJyArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RXZlbnRTdGVwcGVyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGVMZXZlbDI9e2luY2x1ZGVMZXZlbDJ9XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgICAgICAgICBrZXk9eydldmVudC1ncm91cC0nICsgbGlzdEl0ZW0uY2hvdWV0dGVKb2JJZCArICctJyArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICBncm91cHM9e2V2ZW50R3JvdXB9XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtPXtsaXN0SXRlbX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2xlZnQnLCBtYXJnaW5Cb3R0b206IDUgfX0+XG4gICAgICAgICAge2ZpbHRlcnN9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMCxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiA0MFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLm5vX3N0YXR1c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAxMCB9fT57cmVmcmVzaEJ1dHRvbn08L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBnZXRQYWdpbmF0aW9uTWFwID0gKHN0YXR1c0xpc3QgPSBbXSkgPT4ge1xuICBsZXQgcGFnaW5hdGlvbk1hcCA9IFtdO1xuXG4gIGlmIChzdGF0dXNMaXN0ICYmIHN0YXR1c0xpc3QubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSBzdGF0dXNMaXN0Lmxlbmd0aDsgaSA8IGo7IGkgKz0gMTApIHtcbiAgICAgIHBhZ2luYXRpb25NYXAucHVzaChzdGF0dXNMaXN0LnNsaWNlKGksIGkgKyAxMCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFnaW5hdGlvbk1hcDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RGV0YWlscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWRFcnJvciBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvZXJyb3InO1xuaW1wb3J0IE1kRG9uZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvY2hlY2stY2lyY2xlJztcbmltcG9ydCBNZFNjaGVkdWxlIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9zY2hlZHVsZSc7XG5pbXBvcnQgRmFDb2cgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NvZyc7XG5pbXBvcnQgTWRIZWxwT3V0TGluZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvaGVscC1vdXRsaW5lJztcbmltcG9ydCBNZEhvdXIgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2hvdXJnbGFzcy1lbXB0eSc7XG5cbmNsYXNzIEV2ZW50U3RhdHVzSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMuc3RhdGUpIHtcbiAgICAgIGNhc2UgJ09LJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWREb25lXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ1BFTkRJTkcnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEhvdXJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ1NUQVJURUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGYUNvZ1xuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjMjI3NGI1Jywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0ZBSUxFRCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRXJyb3JcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0NBTkNFTExFRCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRXJyb3JcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0RVUExJQ0FURSc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRXJyb3JcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0lHTk9SRUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZFNjaGVkdWxlXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSAnVElNRU9VVCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kU2NoZWR1bGVcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIDxNZEhlbHBPdXRMaW5lIHN0eWxlPXt7IGNvbG9yOiAnZ3JleScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiB9fSAvPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFN0YXR1c0ljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudFN0YXR1c0ljb24uanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjdGlvblRyYW5zbGF0aW9ucyBmcm9tICcuL2FjdGlvblRyYW5zbGF0aW9ucyc7XG5pbXBvcnQgRmFDaGV2cm9uRG93biBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1kb3duJztcbmltcG9ydCBGYUNoZXZyb25VcCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi11cCc7XG5pbXBvcnQgQ29udHJvbGxlZENob3VldHRlTGluayBmcm9tICcuL0NvbnRyb2xsZWRDaG91ZXR0ZUxpbmsnO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgRXZlbnRTdGF0dXNJY29uIGZyb20gJy4vRXZlbnRTdGF0dXNJY29uJztcblxuY2xhc3MgRXZlbnRTdGVwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV4cGFuZGVkOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGdyb3VwczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGxpc3RJdGVtOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfTtcblxuICBldmVudFN0YXRlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ0ZJTEVfVFJBTlNGRVInLFxuICAgICAgJ0ZJTEVfQ0xBU1NJRklDQVRJT04nLFxuICAgICAgJ0ZJTEVfREVMSVZFUlknLFxuICAgICAgJ0lNUE9SVCcsXG4gICAgICAnVkFMSURBVElPTl9MRVZFTF8xJyxcbiAgICAgICdEQVRBU1BBQ0VfVFJBTlNGRVInLFxuICAgICAgJ1ZBTElEQVRJT05fTEVWRUxfMicsXG4gICAgICAnRVhQT1JUJyxcbiAgICAgICdCVUlMRF9HUkFQSCcsXG4gICAgICAnRVhQT1JUX05FVEVYJ1xuICAgIF07XG4gIH1cblxuICBhZGRVbmxpc3RlZFN0YXRlcyhncm91cHMpIHtcbiAgICBjb25zdCBzdGF0ZXMgPSB0aGlzLmV2ZW50U3RhdGVzKCk7XG5cbiAgICBsZXQgZ3JvdXBzV2l0aFVubGlzdGVkID0gT2JqZWN0LmFzc2lnbih7fSwgZ3JvdXBzKTtcblxuICAgIGxldCBmaXJzdFN0YXRlRm91bmQgPSBmYWxzZTtcblxuICAgIHN0YXRlcy5mb3JFYWNoKHN0YXRlID0+IHtcbiAgICAgIGlmICghZ3JvdXBzV2l0aFVubGlzdGVkW3N0YXRlXSkge1xuICAgICAgICBncm91cHNXaXRoVW5saXN0ZWRbc3RhdGVdID0ge1xuICAgICAgICAgIGVuZFN0YXRlOiAnSUdOT1JFRCcsXG4gICAgICAgICAgbWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQ6ICFmaXJzdFN0YXRlRm91bmRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0U3RhdGVGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgZmluYWxHcm91cHMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKGdyb3Vwc1dpdGhVbmxpc3RlZClcbiAgICAgIC5zb3J0KChrZXkxLCBrZXkyKSA9PiBzdGF0ZXMuaW5kZXhPZihrZXkxKSAtIHN0YXRlcy5pbmRleE9mKGtleTIpKVxuICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgZmluYWxHcm91cHNba2V5XSA9IGdyb3Vwc1dpdGhVbmxpc3RlZFtrZXldO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGZpbmFsR3JvdXBzO1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlVmlzaWJpbGl0eSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZFxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlQ29tYmluZWRTcGxpdChmb3JtYXR0ZWRHcm91cHMsIGdyb3VwcywgbmFtZSkge1xuICAgIGNvbnN0IGNvbWJpbmVkID0gW107XG4gICAgZm9yIChsZXQgaSBpbiBncm91cHMpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBzW2ldO1xuICAgICAgY29tYmluZWRbZ3JvdXBdID0gZm9ybWF0dGVkR3JvdXBzW2dyb3VwXTtcblxuICAgICAgaWYgKG5hbWUgIT09IGdyb3VwKSB7XG4gICAgICAgIGRlbGV0ZSBmb3JtYXR0ZWRHcm91cHNbZ3JvdXBdO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3JtYXR0ZWRHcm91cHNbbmFtZV0gPSBjb21iaW5lZDtcbiAgfVxuXG4gIGFnZ3JlZ2dhdGVGaWxlRXZlbnRzKGRhdGEpIHtcbiAgICBsZXQgZ3JvdXBzID0geyAuLi5kYXRhIH07XG4gICAgbGV0IGVuZFN0YXRlID0gbnVsbDtcbiAgICBsZXQgZXJyb3JPbiA9IG51bGw7XG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgIGlmIChncm91cCA9PT0gJ0ZJTEVfQ0xBU1NJRklDQVRJT04nIHx8IGdyb3VwID09PSAnRklMRV9UUkFOU0ZFUicpIHtcbiAgICAgICAgZW5kU3RhdGUgPSBncm91cHNbZ3JvdXBdLmVuZFN0YXRlO1xuXG4gICAgICAgIGlmIChlbmRTdGF0ZSA9PT0gJ0ZBSUxFRCcgfHwgZW5kU3RhdGUgPT09ICdEVVBMSUNBVEUnKSB7XG4gICAgICAgICAgZXJyb3JPbiA9IGdyb3VwO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBncm91cHNbZ3JvdXBdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGVuZFN0YXRlICE9PSBudWxsKSB7XG4gICAgICBncm91cHMuRklMRV9ERUxJVkVSWSA9IHtcbiAgICAgICAgZW5kU3RhdGU6IGVycm9yT24gPyAnRkFJTEVEJyA6IGVuZFN0YXRlLFxuICAgICAgICBlcnJvck9uLFxuICAgICAgICBtaXNzaW5nQmVmb3JlU3RhcnRTdGFydDogZW5kU3RhdGUgPT0gJ0lHTk9SRUQnICYmICFlcnJvck9uXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9XG5cbiAgYnVsbGV0KGZvcm1hdHRlZEdyb3VwcywgZ3JvdXBzLCBsb2NhbGUsIGluY2x1ZGVMZXZlbDIpIHtcbiAgICBjb25zdCBjb2x1bW5TdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgIGhlaWdodDogNDVcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZvcm1hdHRlZEdyb3VwcykubWFwKChncm91cCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBjb2x1bW47XG4gICAgICBsZXQgZXZlbnQgPSBmb3JtYXR0ZWRHcm91cHNbZ3JvdXBdO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShldmVudCkpIHtcbiAgICAgICAgY29sdW1uID0gT2JqZWN0LmtleXMoZXZlbnQpLm1hcCgoa2V5LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRXZlbnQoXG4gICAgICAgICAgICBldmVudFtrZXldLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgaW5jbHVkZUxldmVsMlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sdW1uID0gdGhpcy5yZW5kZXJFdmVudChcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBncm91cHMsXG4gICAgICAgICAgZ3JvdXAsXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgaW5kZXggPT09IDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgaW5jbHVkZUxldmVsMlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBrZXk9eydidWxsZXQtJyArIGluZGV4fSBzdHlsZT17Y29sdW1uU3R5bGV9PlxuICAgICAgICAgIHtjb2x1bW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckV2ZW50KFxuICAgIGV2ZW50LFxuICAgIGdyb3VwcyxcbiAgICBncm91cCxcbiAgICBpbmRleCxcbiAgICBpc0ZpcnN0LFxuICAgIGNvbHVtbkluZGV4ID0gMCxcbiAgICBsb2NhbGUsXG4gICAgaW5jbHVkZUxldmVsMlxuICApIHtcbiAgICBjb25zdCBncm91cFN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdydcbiAgICB9O1xuXG4gICAgY29uc3QgZ3JvdXBUZXh0ID0ge1xuICAgICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgICBtYXJnaW5MZWZ0OiA1XG4gICAgfTtcblxuICAgIGNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYigxODksIDE4OSwgMTg5KScsXG4gICAgICBtYXJnaW5MZWZ0OiAtNixcbiAgICAgIGJvcmRlclRvcFN0eWxlOiAnc29saWQnLFxuICAgICAgYm9yZGVyVG9wV2lkdGg6IDEsXG4gICAgICB3aWR0aDogMzAsXG4gICAgICBib3JkZXJSYWRpdXM6IDMwLFxuICAgICAgbWFyZ2luOiA4LFxuICAgICAgdHJhbnNmb3JtOiBjb2x1bW5JbmRleCA+IDAgJiYgJ3RyYW5zbGF0ZVkoLTAuNWVtKSByb3RhdGUoMjVkZWcpICdcbiAgICB9O1xuXG4gICAgaWYgKCFBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5zdGF0ZXNbZXZlbnQuZW5kU3RhdGVdKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCB0b29sVGlwVGV4dCA9IEFjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLnN0YXRlc1tldmVudC5lbmRTdGF0ZV07XG5cbiAgICBpZiAoZXZlbnQuc3RhdGVzICYmIGV2ZW50LnN0YXRlc1tncm91cHNbZ3JvdXBdLnN0YXRlcy5sZW5ndGggLSAxXSkge1xuICAgICAgdG9vbFRpcFRleHQgKz0gJyAnICsgZXZlbnQuc3RhdGVzW2V2ZW50LnN0YXRlcy5sZW5ndGggLSAxXS5kYXRlO1xuICAgIH1cblxuICAgIGlmIChldmVudC5lcnJvck9uKSB7XG4gICAgICB0b29sVGlwVGV4dCA9IEFjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLmVycm9yTWVzc2FnZVtldmVudC5lcnJvck9uXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17Z3JvdXBTdHlsZX0ga2V5PXsnZ3JvdXAtJyArIGdyb3VwICsgaW5kZXh9PlxuICAgICAgICB7IWlzRmlyc3QgJiYgPGRpdiBzdHlsZT17bGlua1N0eWxlfSAvPn1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHRpdGxlPXt0b29sVGlwVGV4dH1cbiAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBldmVudC5taXNzaW5nQmVmb3JlU3RhcnRTdGFydCA/IDAuMiA6IDEgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxFdmVudFN0YXR1c0ljb24gc3RhdGU9e2V2ZW50LmVuZFN0YXRlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5ncm91cFRleHQsXG4gICAgICAgICAgICBvcGFjaXR5OiBldmVudC5taXNzaW5nQmVmb3JlU3RhcnRTdGFydCA/IDAuMiA6IDFcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENvbnRyb2xsZWRDaG91ZXR0ZUxpbmsgaW5jbHVkZUxldmVsMj17aW5jbHVkZUxldmVsMn0gZXZlbnRzPXtldmVudH0+XG4gICAgICAgICAgICB7QWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0udGV4dFtncm91cF19XG4gICAgICAgICAgPC9Db250cm9sbGVkQ2hvdWV0dGVMaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3RlcHBlcnN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYXJnaW5Ub3A6IDEwXG4gICAgfTtcblxuICAgIGNvbnN0IHsgZ3JvdXBzLCBsaXN0SXRlbSwgbG9jYWxlLCBpbmNsdWRlTGV2ZWwyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZXhwYW5kZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBsZXQgZm9ybWF0dGVkR3JvdXBzID0gdGhpcy5hZGRVbmxpc3RlZFN0YXRlcyhncm91cHMpO1xuICAgIGZvcm1hdHRlZEdyb3VwcyA9IHRoaXMuYWdncmVnZ2F0ZUZpbGVFdmVudHMoZm9ybWF0dGVkR3JvdXBzKTtcbiAgICB0aGlzLmNyZWF0ZUNvbWJpbmVkU3BsaXQoXG4gICAgICBmb3JtYXR0ZWRHcm91cHMsXG4gICAgICBbJ0VYUE9SVF9ORVRFWCcsICdFWFBPUlQnXSxcbiAgICAgICdFWFBPUlQnXG4gICAgKTtcbiAgICBjb25zdCBidWxsZXRzID0gdGhpcy5idWxsZXQoZm9ybWF0dGVkR3JvdXBzLCBncm91cHMsIGxvY2FsZSwgaW5jbHVkZUxldmVsMik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9eydldmVudCcgKyBsaXN0SXRlbS5jaG91ZXR0ZUpvYklkfVxuICAgICAgICBzdHlsZT17eyBtYXJnaW46ICdhdXRvJywgd2lkdGg6ICc5OCUnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbkxlZnQ6IC0xNSB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICB0aXRsZT17dHJhbnNsYXRpb25zW2xvY2FsZV0uZHVyYXRpb24gKyBsaXN0SXRlbS5kdXJhdGlvbn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgIGNvbG9yOiAnI2U1OTQwMCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogLTgsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGlzdEl0ZW0uc3RhcnRlZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bGlzdEl0ZW0ucHJvdmlkZXIgJiZcbiAgICAgICAgICAgIGxpc3RJdGVtLnByb3ZpZGVyLm5hbWUgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMC44ZW0nLCBmb250V2VpZ2h0OiA2MDAsIGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgICAge2xpc3RJdGVtLnByb3ZpZGVyLm5hbWV9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMC45ZW0nLCBmb250V2VpZ2h0OiA2MDAsIGZsZXg6IDIgfX0+XG4gICAgICAgICAgICB7bGlzdEl0ZW0uZmlsZU5hbWUgfHwgQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uZmlsZW5hbWUudW5kZWZpbmVkfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17c3RlcHBlcnN0eWxlfT5cbiAgICAgICAgICB7YnVsbGV0c31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIG1hcmdpblJpZ2h0OiAyMCwgbWFyZ2luVG9wOiAtNTAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVG9nZ2xlVmlzaWJpbGl0eSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshZXhwYW5kZWQgPyA8RmFDaGV2cm9uRG93biAvPiA6IDxGYUNoZXZyb25VcCAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtleHBhbmRlZCAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiA4LFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAxMCxcbiAgICAgICAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uc3RhcnRlZH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7bGlzdEl0ZW0uZmlyc3RFdmVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLmVuZGVkfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbS5sYXN0RXZlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5kdXJhdGlvbn1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7bGlzdEl0ZW0uZHVyYXRpb259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTdGVwcGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRTdGVwcGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRmlsdGVyQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc3QgeyBoYW5kbGVDbGljaywgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGhhbmRsZUNsaWNrICYmIHR5cGVvZiBoYW5kbGVDbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaGFuZGxlQ2xpY2soaWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBhY3RpdmUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWN0aXZlU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzIxOTZGMycsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMxNTU5OWQnXG4gICAgfTtcbiAgICBjb25zdCBpbmFjdGl2ZVN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDhkOGQ4J1xuICAgIH07XG4gICAgY29uc3QgZGVmYXVsdFN0eWxlID0ge1xuICAgICAgcGFkZGluZzogJzAuMmVtIDAuNGVtJyxcbiAgICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1JScsXG4gICAgICBtaW5XaWR0aDogNDAsXG4gICAgICBtYXJnaW5MZWZ0OiAxMFxuICAgIH07XG5cbiAgICBjb25zdCBidXR0b25TdHlsZSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICBkZWZhdWx0U3R5bGUsXG4gICAgICBhY3RpdmUgPyBhY3RpdmVTdHlsZSA6IGluYWN0aXZlU3R5bGVcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gc3R5bGU9e2J1dHRvblN0eWxlfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNsaWNrKCl9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvaW50ZXJFdmVudHM6ICdub25lJywgdGV4dEFsaWduOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQnV0dG9uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQnV0dG9uLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGaWx0ZXJCdXR0b24gZnJvbSAnLi9GaWx0ZXJCdXR0b24nO1xuaW1wb3J0IGJ1dHRvbkNvbmZpZyBmcm9tICcuL2J1dHRvbkNvbmZpZyc7XG5pbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJy4vYWN0aW9uVHJhbnNsYXRpb25zJztcblxuY2xhc3MgRmlsdGVyQnV0dG9uVHJheSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9jYWxlLCBhY3RpdmVCdXR0b25JZCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgIHtidXR0b25Db25maWcuZmllbGRzLm1hcChmaWVsZCA9PlxuICAgICAgICAgIDxGaWx0ZXJCdXR0b25cbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlQnV0dG9uSWQgPT09IGZpZWxkLmlkfVxuICAgICAgICAgICAgaWQ9e2ZpZWxkLmlkfVxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IHsgb25DaGFuZ2UoZmllbGQuaWQpIH19XG4gICAgICAgICAgICBrZXk9eydmaWx0ZXItYnV0dG9uLScgKyBmaWVsZC5pZH1cbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGlvbnNbbG9jYWxlXS5maWx0ZXJCdXR0b25bZmllbGQuaWRdfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJ1dHRvblRyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCdXR0b25UcmF5LmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBkaW1lbnNpb24gfSBmcm9tICcuLi9zdHlsZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyVGltZWxpbmUuY3NzJztcblxuY2xhc3MgSGVhZGVyVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhvdmVyVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdmFsaWREYXlzT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdmFsaWRGcm9tRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGVmZmVjdGl2ZVBlcmlvZHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dUb29sdGlwOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBoYW5kbGVUb2dnbGVUb29sVGlwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1Rvb2x0aXA6ICF0aGlzLnN0YXRlLnNob3dUb29sdGlwXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlZmZlY3RpdmVQZXJpb2RzLCB2YWxpZERheXNPZmZzZXQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgIGhlaWdodDogJzE4cHgnLFxuICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgd2lkdGg6IGRpbWVuc2lvbi50aW1lTGluZVdpZHRoICsgJyUnLFxuICAgICAgbWFyZ2luOiAnMTBweCBhdXRvJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBmb250U2l6ZTogJzAlJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfTtcblxuICAgIGxldCB0aW1lbGluZVdyYXBwZXIgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luQm90dG9tOiAyXG4gICAgfTtcblxuICAgIGxldCB0aW1lQmxvY2sgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZVN1Y2Nlc3MsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgZm9udFNpemU6ICcwLjhyZW0nLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgfTtcblxuICAgIGNvbnN0IHRpdGxlVGV4dCA9IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxMHB4LCAyMHB4KScsXG4gICAgICBmb250U2l6ZTogJzEuMmVtJyxcbiAgICAgIGNvbG9yOiBlZmZlY3RpdmVQZXJpb2RzLmxlbmd0aCA/IGNvbG9yLmVmZmVjdGl2ZSA6IGNvbG9yLmZhaWwsXG4gICAgICB6SW5kZXg6IDk5XG4gICAgfTtcblxuICAgIGNvbnN0IHRvb2xUaXBTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMXMnLFxuICAgICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgICBmb250U2l6ZTogJzAuOGVtJyxcbiAgICAgIGNvbG9yOiBjb2xvci5mb250LnRvb2x0aXAsXG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvci50b29sdGlwLFxuICAgICAgcGFkZGluZzogMTAsXG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgekluZGV4OiA5OVxuICAgIH07XG5cbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgdGV4dFNoYWRvdzogJzBweCAwcHggNXB4IGJsYWNrJyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBoZWlnaHQ6IDE4LFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnXG4gICAgfTtcblxuICAgIGxldCBoclN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgIGhlaWdodDogJzE4cHgnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBtYXJnaW5MZWZ0OiAzMyArIHZhbGlkRGF5c09mZnNldCArICclJ1xuICAgIH07XG5cbiAgICBsZXQgaG92ZXJUZXh0ID0gZWZmZWN0aXZlUGVyaW9kcy5sZW5ndGhcbiAgICAgID8gdGhpcy5wcm9wcy5ob3ZlclRleHRcbiAgICAgIDogJ1VneWxkaWcgbGluamUuIE1hbmdsZXIgZGF0YSc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVXcmFwcGVyfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt0aXRsZVRleHR9XG4gICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMuaGFuZGxlVG9nZ2xlVG9vbFRpcC5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVUb2dnbGVUb29sVGlwLmJpbmQodGhpcyl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5saW5lfVxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dUb29sdGlwICYmXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0b29sVGlwU3R5bGV9PiB7aG92ZXJUZXh0fSA8L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lfSBzdHlsZT17dGltZWxpbmVTdHlsZX0+XG4gICAgICAgICAgPGRpdiBrZXk9eyd0aW1lbGluZS1oZWFkZXItd3JhcHBlcicgKyB0aGlzLnByb3BzLmluZGV4fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2hyU3R5bGV9IC8+XG4gICAgICAgICAgICB7ZWZmZWN0aXZlUGVyaW9kcy5tYXAoKGVmZmVjdGl2ZVBlcmlvZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHBlcmlvZEJsb2NrID0geyAuLi50aW1lQmxvY2sgfTtcbiAgICAgICAgICAgICAgcGVyaW9kQmxvY2sud2lkdGggPVxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC1cbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICtcbiAgICAgICAgICAgICAgICAnJSc7XG5cbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGVyaW9kQmxvY2subWFyZ2luTGVmdCA9XG4gICAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICsgJyUnO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPVxuICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiAtXG4gICAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2RzW2luZGV4IC0gMV0udGltZWxpbmVFbmRQb3NpdGlvbiArXG4gICAgICAgICAgICAgICAgICAnJSc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgaXRlbVRleHQgPSBlZmZlY3RpdmVQZXJpb2QudG87XG5cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gPiAwICYmXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLmZyb20ubG9jYWxlQ29tcGFyZShlZmZlY3RpdmVQZXJpb2QudG8pICE9PSAwXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGl0ZW1UZXh0ID0gZWZmZWN0aXZlUGVyaW9kLmZyb20gKyAnIC0gJyArIGVmZmVjdGl2ZVBlcmlvZC50bztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9eyd0aW1lbGluZS1oZWFkZXItYmxvY2snICsgaW5kZXh9IHN0eWxlPXtwZXJpb2RCbG9ja30+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyVGltZWxpbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvciwgZGltZW5zaW9uIH0gZnJvbSAnLi4vc3R5bGVzJztcblxuY29uc3QgcGVyaW9kID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgZnJvbTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0bzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aW1lbGluZVN0YXJ0UG9zaXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGltZWxpbmVFbmRQb3NpdGlvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59KTtcblxuY29uc3QgdGltZXRhYmxlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgb2JqZWN0SWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGVyaW9kczogUHJvcFR5cGVzLmFycmF5T2YocGVyaW9kKS5pc1JlcXVpcmVkXG59KS5pc1JlcXVpcmVkO1xuXG5jbGFzcyBUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGltZXRhYmxlczogUHJvcFR5cGVzLmFycmF5T2YodGltZXRhYmxlKS5pc1JlcXVpcmVkLFxuICAgIGlzTGFzdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICB2YWxpZERheXNPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpbWV0YWJsZXMsIHZhbGlkRGF5c09mZnNldCwgaXNMYXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUJhY2tncm91bmQsXG4gICAgICB3aWR0aDogZGltZW5zaW9uLnRpbWVMaW5lV2lkdGggKyAnJScsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfTtcblxuICAgIGNvbnN0IHRpbWVsaW5lV3JhcHBlciA9IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwYWRkaW5nQm90dG9tOiBpc0xhc3QgPyAwIDogMTBcbiAgICB9O1xuXG4gICAgbGV0IHRpbWVCbG9jayA9IHtcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgIH07XG5cbiAgICBsZXQgdGV4dFN0eWxlID0ge1xuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBvdmVyZmxvdzogJ3Zpc2JsZScsXG4gICAgICB0ZXh0U2hhZG93OiAnMHB4IDBweCA1cHggYmxhY2snLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8gMTBweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgZm9udFNpemU6ICcwLjdlbScsXG4gICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICB9O1xuXG4gICAgbGV0IGhyU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH07XG5cbiAgICBoclN0eWxlLm1hcmdpbkxlZnQgPSAzMyArIHZhbGlkRGF5c09mZnNldCArICclJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVdyYXBwZXJ9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVN0eWxlfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtoclN0eWxlfSAvPlxuICAgICAgICAgIHt0aW1ldGFibGVzLm1hcCh0aW1ldGFibGUgPT5cbiAgICAgICAgICAgIHRpbWV0YWJsZS5wZXJpb2RzLm1hcCgocGVyaW9kLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpbWV0YWJsZS5vYmplY3RJZDtcbiAgICAgICAgICAgICAgY29uc3QgaG92ZXIgPSBgJHt0aXRsZX0gXFxuKHBlcmlvZDogJHtwZXJpb2QuZnJvbX0gLT4gJHtwZXJpb2QudG99KWA7XG4gICAgICAgICAgICAgIGxldCBwZXJpb2RCbG9jayA9IHsgLi4udGltZUJsb2NrIH07XG4gICAgICAgICAgICAgIHBlcmlvZEJsb2NrLndpZHRoID1cbiAgICAgICAgICAgICAgICBwZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAtIHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJSc7XG4gICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPSBwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICsgJyUnO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17J3RpbWV0YWJsZS1wZXJpb2QtJyArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17cGVyaW9kQmxvY2t9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtob3Zlcn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dFN0eWxlfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKC8vZm9udHMuZ29vZ2xlYXBpcy5jb20vZWFybHlhY2Nlc3Mvbm90b3NhbnNrYW5uYWRhLmNzcyk7XCIsIFwiXCJdKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMgS2FubmFkYScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjMTkxOTE5O1xcbn1cXG5cXG5wLGgxLGgyLGgzLGg0LGg1LCBzcGFuIHtcXG4gICAgY29sb3I6ICMxOTE5MTk7XFxufVxcblxcbi5fMnBPWlQ2T0V3UjJ2X2NpNzJXNGtvQjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuLm1TR0tWbG1jV0VTYnhFSHI3QmF6MiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uXzFoOUFHLVZXeF9VNDBUeFZFMDE1NUsge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcbiAgICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG4uXzFqTi1ON3lmU0tZaDFLVXpyYXM0bFoge1xcbiAgICBjb2xvcjogIzBEM0M2MTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5fMjFwNTVWTV9lNzVfMmlCaXJXMU1rZiB7XFxuICAgIGNvbG9yOiAjMjE5NkYzO1xcbn1cXG5cXG5cXG5hIHtcXG4gICAgY29sb3I6ICMyMTk2RjM7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpob3ZlciwgYTpmb2N1cyB7XFxuICAgIGNvbG9yOiAjMTk3NkQyO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJwZXJpb2QtYmxvY2tcIjogXCJfMnBPWlQ2T0V3UjJ2X2NpNzJXNGtvQlwiLFxuXHRcInBhZ2UtbGluay1wYXJlbnRcIjogXCJtU0dLVmxtY1dFU2J4RUhyN0JhejJcIixcblx0XCJwYWdlLWxpbmtcIjogXCJfMWg5QUctVld4X1U0MFR4VkUwMTU1S1wiLFxuXHRcImFjdGl2ZS1saW5rXCI6IFwiXzFqTi1ON3lmU0tZaDFLVXpyYXM0bFpcIixcblx0XCJpbmFjdGl2ZS1saW5rXCI6IFwiXzIxcDU1Vk1fZTc1XzJpQmlyVzFNa2ZcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9tb2R1bGVzPXRydWUhLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5fMnRVLWY4NmZfNDJnMXBWVlFaWEZYQyB7XFxuICBiYWNrZ3JvdW5kOiAjQjkxOTE5O1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI0I5MTkxOSksIGNvbG9yLXN0b3AoNjYlLCAjZjZmNmY2KSwgY29sb3Itc3RvcCgxMDAlLCAjZjZmNmY2KSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCAjQjkxOTE5KSwgY29sb3Itc3RvcCg2NiUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI2Y2ZjZmNiksIGNvbG9yLXN0b3AoMTAwJSwgI2Y2ZjZmNikpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0aW1lbGluZVwiOiBcIl8ydFUtZjg2Zl80MmcxcFZWUVpYRlhDXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcz10cnVlIS4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBcbiAqL1xuXG5mdW5jdGlvbiBtYWtlRW1wdHlGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXJnO1xuICB9O1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbmQgZGlzY2FyZHMgaW5wdXRzOyBpdCBoYXMgbm8gc2lkZSBlZmZlY3RzLiBUaGlzIGlzXG4gKiBwcmltYXJpbHkgdXNlZnVsIGlkaW9tYXRpY2FsbHkgZm9yIG92ZXJyaWRhYmxlIGZ1bmN0aW9uIGVuZHBvaW50cyB3aGljaFxuICogYWx3YXlzIG5lZWQgdG8gYmUgY2FsbGFibGUsIHNpbmNlIEpTIGxhY2tzIGEgbnVsbC1jYWxsIGlkaW9tIGFsYSBDb2NvYS5cbiAqL1xudmFyIGVtcHR5RnVuY3Rpb24gPSBmdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge307XG5cbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnMgPSBtYWtlRW1wdHlGdW5jdGlvbjtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNGYWxzZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKGZhbHNlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUcnVlID0gbWFrZUVtcHR5RnVuY3Rpb24odHJ1ZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zTnVsbCA9IG1ha2VFbXB0eUZ1bmN0aW9uKG51bGwpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RoaXMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNBcmd1bWVudCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgcmV0dXJuIGFyZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZW1wdHlGdW5jdGlvbjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9pbnZhcmlhbnQuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJ2ZianMvbGliL2VtcHR5RnVuY3Rpb24nKTtcbnZhciBpbnZhcmlhbnQgPSByZXF1aXJlKCdmYmpzL2xpYi9pbnZhcmlhbnQnKTtcbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpbnZhcmlhbnQoXG4gICAgICBmYWxzZSxcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBlbXB0eUZ1bmN0aW9uO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIFN5bWJvbC5mb3IgJiZcbiAgICBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykpIHx8XG4gICAgMHhlYWM3O1xuXG4gIHZhciBpc1ZhbGlkRWxlbWVudCA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgb2JqZWN0ICE9PSBudWxsICYmXG4gICAgICBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvcC10eXBlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUNoZXZyb25Eb3duID0gZnVuY3Rpb24gRmFDaGV2cm9uRG93bihwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zNy42IDE4bC0xNi42IDE2LjZxLTAuNCAwLjQtMSAwLjR0LTEtMC40bC0xNi42LTE2LjZxLTAuNC0wLjQtMC40LTF0MC40LTFsMy43LTMuN3EwLjUtMC40IDEtMC40dDEgMC40bDExLjkgMTEuOSAxMS45LTExLjlxMC40LTAuNCAxLTAuNHQxIDAuNGwzLjcgMy43cTAuNCAwLjQgMC40IDF0LTAuNCAxeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYUNoZXZyb25Eb3duO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLWRvd24uanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUNoZXZyb25VcCA9IGZ1bmN0aW9uIEZhQ2hldnJvblVwKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTM3LjYgMjkuN2wtMy43IDMuN3EtMC41IDAuNC0xIDAuNHQtMS0wLjRsLTExLjktMTEuOS0xMS44IDExLjlxLTAuNSAwLjQtMS4xIDAuNHQtMS0wLjRsLTMuNy0zLjdxLTAuNC0wLjQtMC40LTF0MC40LTFsMTYuNi0xNi42cTAuNC0wLjQgMS0wLjR0MSAwLjRsMTYuNiAxNi42cTAuNCAwLjQgMC40IDF0LTAuNCAxeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYUNoZXZyb25VcDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi11cC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZhQ29nID0gZnVuY3Rpb24gRmFDb2cocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMjUuOSAyMHEwLTIuNC0xLjctNHQtNC4xLTEuNy00IDEuNy0xLjcgNCAxLjcgNCA0IDEuNyA0LjEtMS43IDEuNy00eiBtMTEuNC0yLjR2NC45cTAgMC4zLTAuMiAwLjV0LTAuNCAwLjNsLTQuMiAwLjZxLTAuNCAxLjMtMC44IDIuMSAwLjcgMS4xIDIuMyAzLjEgMC4zIDAuMiAwLjMgMC41dC0wLjIgMC41cS0wLjYgMC45LTIuMiAyLjR0LTIuMSAxLjZxLTAuMyAwLTAuNi0wLjJsLTMuMS0yLjRxLTEgMC41LTIgMC45LTAuNCAzLTAuNyA0LjEtMC4xIDAuNi0wLjggMC42aC00LjlxLTAuMyAwLTAuNi0wLjF0LTAuMi0wLjVsLTAuNy00LjFxLTEuMS0wLjQtMi0wLjlsLTMuMSAyLjRxLTAuMiAwLjItMC42IDAuMi0wLjMgMC0wLjUtMC4yLTIuOC0yLjYtMy43LTMuOC0wLjItMC4yLTAuMi0wLjUgMC0wLjIgMC4yLTAuNSAwLjMtMC41IDEuMS0xLjV0MS4yLTEuNXEtMC42LTEuMi0wLjktMi4zbC00LjEtMC42cS0wLjIgMC0wLjQtMC4ydC0wLjItMC42di00LjlxMC0wLjMgMC4yLTAuNXQwLjQtMC4zbDQuMi0wLjdxMC4zLTEgMC44LTItMC45LTEuMy0yLjQtMy4xLTAuMi0wLjMtMC4yLTAuNSAwLTAuMiAwLjItMC41IDAuNi0wLjggMi4yLTIuNHQyLjEtMS42cTAuMyAwIDAuNiAwLjJsMy4xIDIuNHExLTAuNSAyLTAuOSAwLjQtMyAwLjctNC4xIDAuMS0wLjYgMC44LTAuNmg0LjlxMC4zIDAgMC42IDAuMXQwLjIgMC41bDAuNyA0LjFxMSAwLjQgMiAwLjlsMy4xLTIuNHEwLjItMC4yIDAuNi0wLjIgMC4zIDAgMC41IDAuMiAyLjkgMi42IDMuNyAzLjggMC4yIDAuMiAwLjIgMC41IDAgMC4yLTAuMiAwLjUtMC40IDAuNS0xLjIgMS41dC0xLjIgMS41cTAuNiAxLjIgMSAyLjJsNCAwLjdxMC4zIDAgMC41IDAuMnQwLjIgMC42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYUNvZztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvZmEvY29nLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFSZWZyZXNoID0gZnVuY3Rpb24gRmFSZWZyZXNoKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTM2LjcgMjMuNnEwIDAuMSAwIDAuMS0xLjQgNi02IDkuN3QtMTAuNiAzLjdxLTMuMyAwLTYuNC0xLjJ0LTUuNC0zLjVsLTIuOSAyLjlxLTAuNCAwLjQtMSAwLjR0LTEtMC40LTAuNC0xdi0xMHEwLTAuNiAwLjQtMXQxLTAuNGgxMHEwLjYgMCAxIDAuNHQwLjUgMS0wLjUgMWwtMyAzcTEuNiAxLjUgMy42IDIuM3Q0LjEgMC44cTMgMCA1LjYtMS40dDQuMi00cTAuMi0wLjQgMS4yLTIuNiAwLjEtMC41IDAuNi0wLjVoNC4zcTAuMyAwIDAuNSAwLjJ0MC4yIDAuNXogbTAuNi0xNy45djEwcTAgMC42LTAuNCAxdC0xIDAuNGgtMTBxLTAuNiAwLTEtMC40dC0wLjUtMSAwLjUtMWwzLTMuMXEtMy4zLTMtNy44LTMtMi45IDAtNS41IDEuNHQtNC4yIDRxLTAuMiAwLjQtMS4yIDIuNi0wLjIgMC41LTAuNiAwLjVoLTQuNXEtMC4zIDAtMC41LTAuMnQtMC4yLTAuNXYtMC4xcTEuNS02IDYtOS43dDEwLjctMy43cTMuMyAwIDYuNCAxLjJ0NS40IDMuNWwzLTIuOXEwLjQtMC40IDEtMC40dDEgMC40IDAuNCAxeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYVJlZnJlc2g7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL3JlZnJlc2guanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZENoZWNrQ2lyY2xlID0gZnVuY3Rpb24gTWRDaGVja0NpcmNsZShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20xNi42IDI4LjRsMTUtMTUtMi4zLTIuNS0xMi43IDEyLjctNS45LTUuOS0yLjMgMi4zeiBtMy40LTI1YzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kQ2hlY2tDaXJjbGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2NoZWNrLWNpcmNsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kRXJyb3IgPSBmdW5jdGlvbiBNZEVycm9yKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIxLjYgMjEuNnYtMTBoLTMuMnYxMGgzLjJ6IG0wIDYuOHYtMy40aC0zLjJ2My40aDMuMnogbS0xLjYtMjVjOS4yIDAgMTYuNiA3LjQgMTYuNiAxNi42cy03LjQgMTYuNi0xNi42IDE2LjYtMTYuNi03LjQtMTYuNi0xNi42IDcuNC0xNi42IDE2LjYtMTYuNnonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWRFcnJvcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvbWQvZXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZEhlbHBPdXRsaW5lID0gZnVuY3Rpb24gTWRIZWxwT3V0bGluZShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMCAxMGMzLjcgMCA2LjYgMyA2LjYgNi42IDAgNC4yLTUgNC43LTUgOC40aC0zLjJjMC01LjQgNS01IDUtOC40IDAtMS44LTEuNi0zLjItMy40LTMuMnMtMy40IDEuNC0zLjQgMy4yaC0zLjJjMC0zLjYgMi45LTYuNiA2LjYtNi42eiBtMCAyMy40YzcuMyAwIDEzLjQtNi4xIDEzLjQtMTMuNHMtNi4xLTEzLjQtMTMuNC0xMy40LTEzLjQgNi4xLTEzLjQgMTMuNCA2LjEgMTMuNCAxMy40IDEzLjR6IG0wLTMwYzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6IG0tMS42IDI2LjZ2LTMuNGgzLjJ2My40aC0zLjJ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kSGVscE91dGxpbmU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2hlbHAtb3V0bGluZS5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kSG91cmdsYXNzRW1wdHkgPSBmdW5jdGlvbiBNZEhvdXJnbGFzc0VtcHR5KHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIwIDE5LjFsNi42LTYuNnYtNS45aC0xMy4ydjUuOXogbTYuNiA4LjRsLTYuNi02LjYtNi42IDYuNnY1LjloMTMuMnYtNS45eiBtLTE2LjYtMjQuMWgyMHYxMGwtNi42IDYuNiA2LjYgNi42djEwaC0yMHYtMTBsNi42LTYuNi02LjYtNi42di0xMHonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWRIb3VyZ2xhc3NFbXB0eTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvbWQvaG91cmdsYXNzLWVtcHR5LmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRTY2hlZHVsZSA9IGZ1bmN0aW9uIE1kU2NoZWR1bGUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMjAuOSAxMS42djguOGw3LjUgNC40LTEuMyAyLjItOC43LTUuNHYtMTBoMi41eiBtLTAuOSAyMS44YzcuMyAwIDEzLjQtNi4xIDEzLjQtMTMuNHMtNi4xLTEzLjQtMTMuNC0xMy40LTEzLjQgNi4xLTEzLjQgMTMuNCA2LjEgMTMuNCAxMy40IDEzLjR6IG0wLTMwYzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kU2NoZWR1bGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL3NjaGVkdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvZml4VXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0V2ZW50RGV0YWlscy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vRXZlbnREZXRhaWxzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vRXZlbnREZXRhaWxzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuY3NzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vSGVhZGVyVGltZWxpbmUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0hlYWRlclRpbWVsaW5lLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vSGVhZGVyVGltZWxpbmUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmNzc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==