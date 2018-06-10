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

var _translations = __webpack_require__(5);

var _translations2 = _interopRequireDefault(_translations);

var _FilterButtonTray = __webpack_require__(16);

var _FilterButtonTray2 = _interopRequireDefault(_FilterButtonTray);

var _buttonConfig = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FaFresh = __webpack_require__(30);

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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$dataSource = _props.dataSource,
          dataSource = _props$dataSource === undefined ? [] : _props$dataSource,
          locale = _props.locale,
          includeLevel2 = _props.includeLevel2,
          showDateFilter = _props.showDateFilter,
          showNewDeliveriesFilter = _props.showNewDeliveriesFilter;
      var _state = this.state,
          activePageIndex = _state.activePageIndex,
          endStateFilter = _state.endStateFilter,
          dateFilter = _state.dateFilter,
          onlyNewDeliveryFilter = _state.onlyNewDeliveryFilter;


      var lastDate = (0, _buttonConfig.getLastValidDate)(dateFilter);

      var filteredSource = dataSource.filter(function (event) {
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
            value: onlyNewDeliveryFilter,
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
        _react2.default.createElement(FaFresh, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1YmM1OTU5ZDk2MWRjMDJlYzBjMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjdGlvblRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhbnNsYXRpb25zLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Nob3VldHRlTGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVkQ2hvdWV0dGVMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudFN0YXR1c0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRTdGVwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCdXR0b25UcmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzIiwid2VicGFjazovLy8uL34vZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLXVwLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2NoZWNrLWNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9oZWxwLW91dGxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQvaG91cmdsYXNzLWVtcHR5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL3NjaGVkdWxlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2ZpeFVybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzcz81Y2MxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmNzcz8yNzdhIl0sIm5hbWVzIjpbImNvbG9yRGVmIiwiYmxhY2siLCJ3aGl0ZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImJpZ2JsdWUiLCJkYXJrQmx1ZSIsImRhcmtHcmV5IiwiZ3JleSIsImxpZ2h0R3JleSIsImVudHVyIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImNvbG9yIiwiZm9udCIsImludmVyc2UiLCJ0aXRsZSIsImluZm8xIiwiaW5mbzIiLCJpbmZvMyIsIndhcm4iLCJkaXNhYmxlZCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiZWZmZWN0aXZlIiwiZmFpbCIsIm1vZGFsIiwiYmFja2Ryb3AiLCJ0YWJBY3RpdmUiLCJ0aW1lTGluZUJhY2tncm91bmQiLCJ0aW1lTGluZUJsb2NrQmFja2dyb3VuZCIsInRpbWVMaW5lQm9yZGVyIiwidGltZUxpbmVTdWNjZXNzIiwidGltZUxpbmVGYWlsIiwidGFibGVIZWFkZXIiLCJ0YWJsZVJvdyIsInRhYmxlSW5mbyIsInZhbGlkIiwiaW52YWxpZCIsImV4cGlyaW5nIiwiaGlnaGxpZ2h0IiwiZGltZW5zaW9uIiwidGltZUxpbmVXaWR0aCIsInN0eWxlcyIsIm5iIiwidGV4dCIsIkZJTEVfVFJBTlNGRVIiLCJGSUxFX0NMQVNTSUZJQ0FUSU9OIiwiRklMRV9ERUxJVkVSWSIsIklNUE9SVCIsIkVYUE9SVCIsIkVYUE9SVF9ORVRFWCIsIlZBTElEQVRJT05fTEVWRUxfMSIsIkRBVEFTUEFDRV9UUkFOU0ZFUiIsIlZBTElEQVRJT05fTEVWRUxfMiIsIkJVSUxEX0dSQVBIIiwiVU5LTk9XTiIsImZpbGVuYW1lIiwidW5kZWZpbmVkIiwic3RhdGVzIiwiT0siLCJQRU5ESU5HIiwiU1RBUlRFRCIsIkZBSUxFRCIsIkRVUExJQ0FURSIsIklHTk9SRUQiLCJDQU5DRUxMRUQiLCJUSU1FT1VUIiwiZXJyb3JNZXNzYWdlIiwiZmlsdGVyQnV0dG9uIiwiQUxMX1RJTUUiLCJMQVNUXzEyX0hPVVJTIiwiTEFTVF8yNF9IT1VSUyIsIkxBU1RfV0VFSyIsIkxBU1RfTU9OVEgiLCJlbiIsImJ1dHRvbkNvbmZpZyIsImZpZWxkcyIsImlkIiwiZ2V0TGFzdFZhbGlkRGF0ZSIsIm5vdyIsIkRhdGUiLCJzZXRNb250aCIsImdldE1vbnRoIiwic2V0RGF0ZSIsImdldERhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwicGFnZSIsIm5vX3N0YXR1cyIsInN0YXJ0ZWQiLCJlbmRlZCIsImR1cmF0aW9uIiwic2hvd19hbGwiLCJzaG93X29ubHlfZmFpbGVkIiwic2hvd19vbmx5X3N1Y2Nlc3MiLCJzaG93X29ubHlfY2FuY2VsbGVkIiwiZmlsdGVyX2RpcmVjdF9kZWxpdmVyeSIsIlRpbWVsaW5lIiwiSGVhZGVyVGltZWxpbmUiLCJFdmVudERldGFpbHMiLCJDaG91ZXR0ZUxpbmsiLCJhY3Rpb24iLCJyZWZlcmVudGlhbCIsImNoaWxkcmVuIiwiYmFzZVVSTCIsIndpbmRvdyIsImNvbmZpZyIsImNob3VldHRlQmFzZVVybCIsImFjdGlvbk1hcCIsImltcG9ydGVyIiwiZXhwb3J0ZXIiLCJ2YWxpZGF0b3IiLCJVUkwiLCJDb250cm9sbGVkQ2hvdWV0dGVMaW5rIiwiZXZlbnRzIiwiaW5jbHVkZUxldmVsMiIsInN1cHBvcnRlZEFjdGlvbnMiLCJjaG91ZXR0ZU1hcCIsInB1c2giLCJsZW5ndGgiLCJlbmRTdGF0ZSIsImluZGV4T2YiLCJjaG91ZXR0ZUpvYklkIiwiRmFGcmVzaCIsInJlcXVpcmUiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlUGFnZUluZGV4IiwiZW5kU3RhdGVGaWx0ZXIiLCJkYXRlRmlsdGVyIiwic2hvd0RhdGVGaWx0ZXIiLCJvbmx5TmV3RGVsaXZlcnlGaWx0ZXIiLCJlIiwicGFnZUluZGV4IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImRhdGFTb3VyY2UiLCJsb2NhbGUiLCJzaG93TmV3RGVsaXZlcmllc0ZpbHRlciIsImxhc3REYXRlIiwiZmlsdGVyZWRTb3VyY2UiLCJmaWx0ZXIiLCJhcHBsaWVkRmlsdGVyIiwiZmlsdGVyQnlQZXJpb2QiLCJldmVudCIsImZpcnN0RXZlbnQiLCJlbmRTdGF0ZUZpbHRlckFwcGxpZWQiLCJmaWx0ZXJCeUVuZFN0YXRlIiwiY29udGFpbnNFdmVudHMiLCJBcnJheSIsImlzQXJyYXkiLCJmaWx0ZXJCeU5ld0RlbGl2ZXJ5IiwiZXZlcnkiLCJwYWdpbmF0aW9uTWFwIiwiZ2V0UGFnaW5hdGlvbk1hcCIsImZpbHRlcnMiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmFuc2xhdGlvbnMiLCJtYXJnaW5MZWZ0IiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiYmluZCIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJjaGVja2VkIiwicmVmcmVzaEJ1dHRvbiIsImhhbmRsZVJlZnJlc2giLCJtYXJnaW5SaWdodCIsImZsb2F0IiwiY3Vyc29yIiwidHJhbnNmb3JtIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJpbmRleCIsImlzQWN0aXZlIiwiaGFuZGxlUGFnZUNsaWNrIiwibGlzdEl0ZW0iLCJldmVudEdyb3VwIiwiZm9yRWFjaCIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJmb250V2VpZ2h0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJzdGF0dXNMaXN0IiwiaSIsImoiLCJzbGljZSIsIkV2ZW50U3RhdHVzSWNvbiIsImhlaWdodCIsIkV2ZW50U3RlcHBlciIsImV4cGFuZGVkIiwiZ3JvdXBzIiwiZXZlbnRTdGF0ZXMiLCJncm91cHNXaXRoVW5saXN0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJmaXJzdFN0YXRlRm91bmQiLCJtaXNzaW5nQmVmb3JlU3RhcnRTdGFydCIsImZpbmFsR3JvdXBzIiwia2V5cyIsInNvcnQiLCJrZXkxIiwia2V5MiIsImtleSIsImZvcm1hdHRlZEdyb3VwcyIsIm5hbWUiLCJjb21iaW5lZCIsImdyb3VwIiwiZGF0YSIsImVycm9yT24iLCJjb2x1bW5TdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImNvbHVtbiIsInJlbmRlckV2ZW50IiwiaXNGaXJzdCIsImNvbHVtbkluZGV4IiwiZ3JvdXBTdHlsZSIsImdyb3VwVGV4dCIsImxpbmtTdHlsZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wU3R5bGUiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlclJhZGl1cyIsIkFjdGlvblRyYW5zbGF0aW9ucyIsInRvb2xUaXBUZXh0IiwiZGF0ZSIsIm9wYWNpdHkiLCJzdGVwcGVyc3R5bGUiLCJhbGlnbkNvbnRlbnQiLCJhZGRVbmxpc3RlZFN0YXRlcyIsImFnZ3JlZ2dhdGVGaWxlRXZlbnRzIiwiY3JlYXRlQ29tYmluZWRTcGxpdCIsImJ1bGxldHMiLCJidWxsZXQiLCJoYW5kbGVUb2dnbGVWaXNpYmlsaXR5IiwicHJvdmlkZXIiLCJmbGV4IiwiZmlsZU5hbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJsYXN0RXZlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiRmlsdGVyQnV0dG9uIiwiaGFuZGxlQ2xpY2siLCJsYWJlbCIsImFjdGl2ZSIsImFjdGl2ZVN0eWxlIiwiaW5hY3RpdmVTdHlsZSIsImRlZmF1bHRTdHlsZSIsIm1pbldpZHRoIiwiYnV0dG9uU3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiRmlsdGVyQnV0dG9uVHJheSIsImFjdGl2ZUJ1dHRvbklkIiwib25DaGFuZ2UiLCJzdHlsZSIsImZpZWxkIiwic2hvd1Rvb2x0aXAiLCJlZmZlY3RpdmVQZXJpb2RzIiwidmFsaWREYXlzT2Zmc2V0IiwidGltZWxpbmVTdHlsZSIsImxpbmVIZWlnaHQiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwidGltZWxpbmVXcmFwcGVyIiwidGltZUJsb2NrIiwidGl0bGVUZXh0IiwiekluZGV4IiwidG9vbFRpcFN0eWxlIiwidHJhbnNpdGlvbiIsInRleHRTdHlsZSIsInRleHRTaGFkb3ciLCJ3aGl0ZVNwYWNlIiwidGV4dE92ZXJmbG93IiwiaHJTdHlsZSIsImhvdmVyVGV4dCIsImhhbmRsZVRvZ2dsZVRvb2xUaXAiLCJsaW5lIiwidGltZWxpbmUiLCJlZmZlY3RpdmVQZXJpb2QiLCJwZXJpb2RCbG9jayIsInRpbWVsaW5lRW5kUG9zaXRpb24iLCJ0aW1lbGluZVN0YXJ0UG9zaXRpb24iLCJpdGVtVGV4dCIsInRvIiwiZnJvbSIsImxvY2FsZUNvbXBhcmUiLCJ2ZXJ0aWNhbEFsaWduIiwic3RyaW5nIiwibnVtYmVyIiwidmFsaWRGcm9tRGF0ZSIsImFycmF5IiwicGVyaW9kIiwic2hhcGUiLCJ0aW1ldGFibGUiLCJvYmplY3RJZCIsInBlcmlvZHMiLCJhcnJheU9mIiwidGltZXRhYmxlcyIsImlzTGFzdCIsIm92ZXJmbG93WSIsInBhZGRpbmdCb3R0b20iLCJob3ZlciIsImJvb2wiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsK0M7Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQ2pTT0MsUTtRQUNBQyxjO1FBQ0FDLFk7Ozs7Ozs7Ozs7Ozs7O0FDRlA7Ozs7OztBQUVBLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxPQUEyQztBQUFBLE1BQXhDQyxNQUF3QyxRQUF4Q0EsTUFBd0M7QUFBQSxNQUFoQ3hCLEVBQWdDLFFBQWhDQSxFQUFnQztBQUFBLE1BQTVCeUIsV0FBNEIsUUFBNUJBLFdBQTRCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUM5RCxNQUFNQyxVQUFhQyxPQUFPQyxNQUFQLENBQWNDLGVBQTNCLGtCQUFOOztBQUVBLE1BQU1DLFlBQVk7QUFDaEJDLDJCQUFxQmhDLEVBQXJCLHNCQURnQjtBQUVoQmlDLDJCQUFxQmpDLEVBQXJCLHNCQUZnQjtBQUdoQmtDLHNDQUFnQ2xDLEVBQWhDO0FBSGdCLEdBQWxCO0FBS0EsTUFBTW1DLFdBQVNSLE9BQVQsR0FBbUJGLFdBQW5CLFNBQWtDTSxVQUFVUCxNQUFWLENBQXhDOztBQUVBLFNBQ0U7QUFBQTtBQUFBLE1BQUcsT0FBT1csR0FBVixFQUFlLFFBQU8sUUFBdEIsRUFBK0IsTUFBTUEsR0FBckM7QUFDR1Q7QUFESCxHQURGO0FBS0QsQ0FmRDs7a0JBaUJlSCxZOzs7Ozs7Ozs7Ozs7O0FDbkJmOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1hLHlCQUF5QixTQUF6QkEsc0JBQXlCLE9BQXlDO0FBQUEsTUFBdENDLE1BQXNDLFFBQXRDQSxNQUFzQztBQUFBLE1BQTlCQyxhQUE4QixRQUE5QkEsYUFBOEI7QUFBQSxNQUFmWixRQUFlLFFBQWZBLFFBQWU7O0FBQ3RFLE1BQUlhLG1CQUFtQixDQUFDLFFBQUQsRUFBVyxvQkFBWCxDQUF2Qjs7QUFFQSxNQUFJQyxjQUFjO0FBQ2hCckUsWUFBUSxVQURRO0FBRWhCRyx3QkFBb0I7QUFGSixHQUFsQjs7QUFLQSxNQUFJZ0UsYUFBSixFQUFtQjtBQUNqQkMscUJBQWlCRSxJQUFqQixDQUFzQixvQkFBdEI7QUFDQUYscUJBQWlCRSxJQUFqQixDQUFzQixRQUF0QjtBQUNBRixxQkFBaUJFLElBQWpCLENBQXNCLGNBQXRCO0FBQ0FELGdCQUFZLG9CQUFaLElBQW9DLFdBQXBDO0FBQ0FBLGdCQUFZLFFBQVosSUFBd0IsVUFBeEI7QUFDQUEsZ0JBQVksY0FBWixJQUE4QixVQUE5QjtBQUNEOztBQUVELE1BQUlILE9BQU94RCxNQUFQLElBQWlCd0QsT0FBT3hELE1BQVAsQ0FBYzZELE1BQW5DLEVBQTJDO0FBQ3pDLFFBQU1DLFdBQVdOLE9BQU94RCxNQUFQLENBQWN3RCxPQUFPeEQsTUFBUCxDQUFjNkQsTUFBZCxHQUF1QixDQUFyQyxDQUFqQjtBQUNBLFFBQUlILGlCQUFpQkssT0FBakIsQ0FBeUJELFNBQVNuQixNQUFsQyxJQUE0QyxDQUFDLENBQTdDLElBQWtEbUIsU0FBU0UsYUFBL0QsRUFBOEU7QUFDNUUsYUFDRTtBQUFDLDhCQUFEO0FBQUE7QUFDRSxrQkFBUUwsWUFBWUcsU0FBU25CLE1BQXJCLENBRFY7QUFFRSxjQUFJbUIsU0FBU0UsYUFGZjtBQUdFLHVCQUFhRixTQUFTbEI7QUFIeEI7QUFLR0M7QUFMSCxPQURGO0FBU0Q7QUFDRjs7QUFFRCxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQU9BLFlBQVA7QUFBQTtBQUFBLEdBQVA7QUFDRCxDQWpDRDs7a0JBbUNlVSxzQjs7Ozs7Ozs7Ozs7Ozs7O0FDdENmOzs7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFIQSxJQUFNVSxVQUFVLG1CQUFBQyxDQUFRLEVBQVIsQ0FBaEI7O0lBS016QixZOzs7QUFDSix3QkFBWTBCLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0SEFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLHVCQUFpQixDQUROO0FBRVhDLHNCQUFnQixLQUZMO0FBR1hDLGtCQUFZSixNQUFNSyxjQUFOLEdBQXVCLGVBQXZCLEdBQXlDLFVBSDFDO0FBSVhDLDZCQUF1QjtBQUpaLEtBQWI7QUFGaUI7QUFRbEI7Ozs7b0NBRWVDLEMsRUFBR0MsUyxFQUFXO0FBQzVCRCxRQUFFRSxjQUFGO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQ1pSLHlCQUFpQk07QUFETCxPQUFkO0FBR0Q7Ozt1Q0FFa0JKLFUsRUFBWTtBQUM3QixXQUFLTSxRQUFMLENBQWM7QUFDWk4sb0JBQVlBLFVBREE7QUFFWkYseUJBQWlCO0FBRkwsT0FBZDtBQUlEOzs7NkJBRVE7QUFBQTs7QUFBQSxtQkFPSCxLQUFLRixLQVBGO0FBQUEscUNBRUxXLFVBRks7QUFBQSxVQUVMQSxVQUZLLHFDQUVRLEVBRlI7QUFBQSxVQUdMQyxNQUhLLFVBR0xBLE1BSEs7QUFBQSxVQUlMdEIsYUFKSyxVQUlMQSxhQUpLO0FBQUEsVUFLTGUsY0FMSyxVQUtMQSxjQUxLO0FBQUEsVUFNTFEsdUJBTkssVUFNTEEsdUJBTks7QUFBQSxtQkFhSCxLQUFLWixLQWJGO0FBQUEsVUFTTEMsZUFUSyxVQVNMQSxlQVRLO0FBQUEsVUFVTEMsY0FWSyxVQVVMQSxjQVZLO0FBQUEsVUFXTEMsVUFYSyxVQVdMQSxVQVhLO0FBQUEsVUFZTEUscUJBWkssVUFZTEEscUJBWks7OztBQWVQLFVBQU1RLFdBQVcsb0NBQWlCVixVQUFqQixDQUFqQjs7QUFFQSxVQUFJVyxpQkFBaUJKLFdBQVdLLE1BQVgsQ0FBa0IsaUJBQVM7QUFDOUMsWUFBTUMsZ0JBQWdCLEVBQXRCOztBQUVBO0FBQ0EsWUFBSUgsUUFBSixFQUFjO0FBQ1osY0FBTUksaUJBQWlCLElBQUkvRCxJQUFKLENBQVNnRSxNQUFNQyxVQUFmLElBQTZCTixRQUFwRDtBQUNBRyx3QkFBY3hCLElBQWQsQ0FBbUJ5QixjQUFuQjtBQUNEOztBQUVEO0FBQ0EsWUFBTUcsd0JBQ0psQixtQkFBbUIsUUFBbkIsSUFDQUEsbUJBQW1CLElBRG5CLElBRUFBLG1CQUFtQixXQUhyQjs7QUFLQSxZQUFJa0IscUJBQUosRUFBMkI7QUFDekIsY0FBTUMsbUJBQW1CSCxNQUFNeEIsUUFBTixLQUFtQlEsY0FBNUM7QUFDQWMsd0JBQWN4QixJQUFkLENBQW1CNkIsZ0JBQW5CO0FBQ0Q7O0FBRUQ7QUFDQSxZQUFNQyxpQkFBaUJDLE1BQU1DLE9BQU4sQ0FBY04sTUFBTTlCLE1BQXBCLEtBQStCOEIsTUFBTTlCLE1BQU4sQ0FBYUssTUFBbkU7O0FBRUEsWUFBSTZCLGtCQUFrQmpCLHFCQUF0QixFQUE2QztBQUMzQyxjQUFNb0Isc0JBQXNCUCxNQUFNOUIsTUFBTixDQUFhLENBQWIsRUFBZ0JiLE1BQWhCLEtBQTJCLGVBQXZEO0FBQ0F5Qyx3QkFBY3hCLElBQWQsQ0FBbUJpQyxtQkFBbkI7QUFDRDs7QUFFRCxlQUFPVCxjQUFjVSxLQUFkLENBQW9CO0FBQUEsaUJBQVVYLE1BQVY7QUFBQSxTQUFwQixDQUFQO0FBQ0QsT0E3Qm9CLENBQXJCOztBQStCQSxVQUFNWSxnQkFBZ0JDLGlCQUFpQmQsY0FBakIsQ0FBdEI7O0FBRUEsVUFBTWUsVUFDSjtBQUFBO0FBQUEsVUFBSyxPQUFPLEVBQUVDLFNBQVMsTUFBWCxFQUFtQkMsWUFBWSxRQUEvQixFQUFaO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsbUJBQU8sRUFBRUMsVUFBVSxPQUFaLEVBRFQ7QUFFRSxtQkFBTzlCLGNBRlQ7QUFHRSxzQkFBVSxxQkFBSztBQUNiSSxnQkFBRUUsY0FBRjtBQUNBLHFCQUFLQyxRQUFMLENBQWM7QUFDWlAsZ0NBQWdCSSxFQUFFMkIsTUFBRixDQUFTQyxLQURiO0FBRVpqQyxpQ0FBaUI7QUFGTCxlQUFkO0FBSUQ7QUFUSDtBQVdFO0FBQUE7QUFBQSxjQUFRLE9BQU0sS0FBZDtBQUFxQmtDLG1DQUFheEIsTUFBYixFQUFxQjdDO0FBQTFDLFdBWEY7QUFZRTtBQUFBO0FBQUEsY0FBUSxPQUFNLElBQWQ7QUFBb0JxRSxtQ0FBYXhCLE1BQWIsRUFBcUIzQztBQUF6QyxXQVpGO0FBYUU7QUFBQTtBQUFBLGNBQVEsT0FBTSxXQUFkO0FBQ0dtRSxtQ0FBYXhCLE1BQWIsRUFBcUIxQztBQUR4QixXQWJGO0FBZ0JFO0FBQUE7QUFBQSxjQUFRLE9BQU0sUUFBZDtBQUNHa0UsbUNBQWF4QixNQUFiLEVBQXFCNUM7QUFEeEI7QUFoQkYsU0FERjtBQXFCR3FDLDBCQUNDLDhCQUFDLDBCQUFEO0FBQ0Usa0JBQVFPLE1BRFY7QUFFRSxpQkFBTyxFQUFFeUIsWUFBWSxFQUFkLEVBRlQ7QUFHRSwwQkFBZ0IsS0FBS3BDLEtBQUwsQ0FBV0csVUFIN0I7QUFJRSxvQkFBVSxLQUFLa0Msa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCO0FBSlosVUF0Qko7QUE2QkcxQixtQ0FDQztBQUFBO0FBQUEsWUFBSyxPQUFPLEVBQUV3QixZQUFZLEVBQWQsRUFBa0JHLFlBQVksQ0FBOUIsRUFBWjtBQUNFO0FBQ0Usa0JBQUssVUFEUDtBQUVFLGdCQUFHLGlCQUZMO0FBR0Usa0JBQUssaUJBSFA7QUFJRSxtQkFBT2xDLHFCQUpUO0FBS0UsbUJBQU8sRUFBRW1DLFFBQVEsUUFBVixFQUxUO0FBTUUsc0JBQVUscUJBQUs7QUFDYixxQkFBSy9CLFFBQUwsQ0FBYztBQUNaSix1Q0FBdUJDLEVBQUUyQixNQUFGLENBQVNRLE9BRHBCO0FBRVp4QyxpQ0FBaUI7QUFGTCxlQUFkO0FBSUQ7QUFYSCxZQURGO0FBY0U7QUFBQTtBQUFBLGNBQU8sU0FBUSxpQkFBZjtBQUFrQ2tDLG1DQUFheEIsTUFBYixFQUFxQnpDO0FBQXZEO0FBZEY7QUE5QkosT0FERjs7QUFtREEsVUFBTVQsT0FBT2tFLGNBQWMxQixlQUFkLENBQWI7O0FBRUEsVUFBTXlDLGdCQUFnQixLQUFLM0MsS0FBTCxDQUFXNEMsYUFBWCxJQUNwQjtBQUFBO0FBQUEsVUFBSyxPQUFPLEVBQUVDLGFBQWEsRUFBZixFQUFtQkMsT0FBTyxPQUExQixFQUFtQ0MsUUFBUSxTQUEzQyxFQUFaO0FBQ0Usc0NBQUMsT0FBRDtBQUNFLGlCQUFPLEVBQUVDLFdBQVcsWUFBYixFQURUO0FBRUUsbUJBQVMsS0FBS2hELEtBQUwsQ0FBVzRDO0FBRnRCO0FBREYsT0FERjs7QUFTQSxVQUFJbEYsUUFBUUEsS0FBS2dDLE1BQWIsSUFBdUJrQyxhQUEzQixFQUEwQztBQUN4QyxlQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFLLE9BQU8sRUFBRXFCLE9BQU8sTUFBVCxFQUFpQkMsV0FBVyxNQUE1QixFQUFvQ0MsY0FBYyxDQUFsRCxFQUFaO0FBQ0dyQjtBQURILFdBREY7QUFJR2EsdUJBSkg7QUFLRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQU9QLHFDQUFheEIsTUFBYixFQUFxQmxEO0FBQTVCLGFBREY7QUFFR2tFLDBCQUFjd0IsR0FBZCxDQUFrQixVQUFDMUYsSUFBRCxFQUFPMkYsS0FBUCxFQUFpQjtBQUNsQyxrQkFBTUMsV0FDSkQsU0FBU25ELGVBQVQsR0FDSSx1QkFESixHQUVJLHlCQUhOO0FBSUEscUJBQ0U7QUFBQTtBQUFBO0FBQ0UsNkJBQVdvRCxRQURiO0FBRUUsMkJBQVM7QUFBQSwyQkFBSyxPQUFLQyxlQUFMLENBQXFCaEQsQ0FBckIsRUFBd0I4QyxLQUF4QixDQUFMO0FBQUEsbUJBRlg7QUFHRSx1QkFBSyxVQUFVQTtBQUhqQjtBQUtHQSx3QkFBUTtBQUxYLGVBREY7QUFTRCxhQWRBO0FBRkgsV0FMRjtBQXVCRTtBQUFBO0FBQUE7QUFDRzNGLGlCQUFLMEYsR0FBTCxDQUFTLFVBQUNJLFFBQUQsRUFBV0gsS0FBWCxFQUFxQjtBQUM3QixrQkFBSUksYUFBYSxFQUFqQjs7QUFFQUQsdUJBQVNuRSxNQUFULENBQWdCcUUsT0FBaEIsQ0FBd0IsaUJBQVM7QUFDL0Isb0JBQUksQ0FBQ0QsV0FBV3RDLE1BQU0zQyxNQUFqQixDQUFMLEVBQStCO0FBQzdCaUYsNkJBQVd0QyxNQUFNM0MsTUFBakIsSUFBMkIsRUFBM0I7QUFDQWlGLDZCQUFXdEMsTUFBTTNDLE1BQWpCLEVBQXlCM0MsTUFBekIsR0FBa0MsRUFBbEM7QUFDRDtBQUNENEgsMkJBQVd0QyxNQUFNM0MsTUFBakIsRUFBeUIzQyxNQUF6QixDQUFnQzRELElBQWhDLENBQXFDMEIsS0FBckM7QUFDQXNDLDJCQUFXdEMsTUFBTTNDLE1BQWpCLEVBQXlCbUIsUUFBekIsR0FBb0N3QixNQUFNbEIsS0FBMUM7QUFDRCxlQVBEOztBQVNBLHFCQUNFO0FBQUE7QUFBQTtBQUNFLHVCQUFLLGVBQWV1RCxTQUFTM0QsYUFBeEIsR0FBd0MsR0FBeEMsR0FBOEN3RCxLQURyRDtBQUVFLHlCQUFPO0FBQ0xGLGtDQUFjLEVBRFQ7QUFFTDFKLDRCQUFRLGdCQUZIO0FBR0xrSyw2QkFBUztBQUhKO0FBRlQ7QUFRRSw4Q0FBQyxzQkFBRDtBQUNFLGlDQUFlckUsYUFEakI7QUFFRSwwQkFBUXNCLE1BRlY7QUFHRSx1QkFBSyxpQkFBaUI0QyxTQUFTM0QsYUFBMUIsR0FBMEMsR0FBMUMsR0FBZ0R3RCxLQUh2RDtBQUlFLDBCQUFRSSxVQUpWO0FBS0UsNEJBQVVEO0FBTFo7QUFSRixlQURGO0FBa0JELGFBOUJBO0FBREg7QUF2QkYsU0FERjtBQTJERCxPQTVERCxNQTRETztBQUNMLGVBQ0U7QUFBQTtBQUFBLFlBQUssT0FBTyxFQUFFUCxPQUFPLE1BQVQsRUFBaUJDLFdBQVcsTUFBNUIsRUFBb0NDLGNBQWMsQ0FBbEQsRUFBWjtBQUNHckIsaUJBREg7QUFFRTtBQUFBO0FBQUE7QUFDRSxxQkFBTztBQUNMcUIsOEJBQWMsRUFEVDtBQUVMUywyQkFBVyxFQUZOO0FBR0xuSyx3QkFBUSxnQkFISDtBQUlMa0sseUJBQVM7QUFKSjtBQURUO0FBUUU7QUFBQTtBQUFBLGdCQUFLLE9BQU8sRUFBRUUsWUFBWSxHQUFkLEVBQVo7QUFDR3pCLHFDQUFheEIsTUFBYixFQUFxQmpEO0FBRHhCLGFBUkY7QUFXRTtBQUFBO0FBQUEsZ0JBQUssT0FBTyxFQUFFMEUsWUFBWSxFQUFkLEVBQVo7QUFBaUNNO0FBQWpDO0FBWEY7QUFGRixTQURGO0FBa0JEO0FBQ0Y7Ozs7RUF6TndCbUIsZ0JBQU1DLFM7O0FBNE5qQyxJQUFNbEMsbUJBQW1CLFNBQW5CQSxnQkFBbUIsR0FBcUI7QUFBQSxNQUFwQm1DLFVBQW9CLHVFQUFQLEVBQU87O0FBQzVDLE1BQUlwQyxnQkFBZ0IsRUFBcEI7O0FBRUEsTUFBSW9DLGNBQWNBLFdBQVd0RSxNQUE3QixFQUFxQztBQUNuQyxTQUFLLElBQUl1RSxJQUFJLENBQVIsRUFBV0MsSUFBSUYsV0FBV3RFLE1BQS9CLEVBQXVDdUUsSUFBSUMsQ0FBM0MsRUFBOENELEtBQUssRUFBbkQsRUFBdUQ7QUFDckRyQyxvQkFBY25DLElBQWQsQ0FBbUJ1RSxXQUFXRyxLQUFYLENBQWlCRixDQUFqQixFQUFvQkEsSUFBSSxFQUF4QixDQUFuQjtBQUNEO0FBQ0Y7QUFDRCxTQUFPckMsYUFBUDtBQUNELENBVEQ7O2tCQVdldEQsWTs7Ozs7Ozs7Ozs7Ozs7O0FDL09mOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTThGLGU7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsY0FBUSxLQUFLcEUsS0FBTCxDQUFXQyxLQUFuQjtBQUNFLGFBQUssSUFBTDtBQUNFLGlCQUNFLDhCQUFDLHFCQUFEO0FBQ0UsbUJBQU8sRUFBRW5ILE9BQU8sT0FBVCxFQUFrQm1LLE9BQU8sRUFBekIsRUFBNkJvQixRQUFRLEVBQXJDLEVBQXlDVCxXQUFXLENBQUMsQ0FBckQ7QUFEVCxZQURGO0FBS0YsYUFBSyxTQUFMO0FBQ0UsaUJBQ0UsOEJBQUMsd0JBQUQ7QUFDRSxtQkFBTyxFQUFFOUssT0FBTyxRQUFULEVBQW1CbUssT0FBTyxFQUExQixFQUE4Qm9CLFFBQVEsRUFBdEMsRUFBMENULFdBQVcsQ0FBQyxDQUF0RDtBQURULFlBREY7QUFLRixhQUFLLFNBQUw7QUFDRSxpQkFDRSw4QkFBQyxhQUFEO0FBQ0UsbUJBQU8sRUFBRTlLLE9BQU8sU0FBVCxFQUFvQm1LLE9BQU8sRUFBM0IsRUFBK0JvQixRQUFRLEVBQXZDLEVBQTJDVCxXQUFXLENBQUMsQ0FBdkQ7QUFEVCxZQURGO0FBS0YsYUFBSyxRQUFMO0FBQ0UsaUJBQ0UsOEJBQUMsZUFBRDtBQUNFLG1CQUFPLEVBQUU5SyxPQUFPLEtBQVQsRUFBZ0JtSyxPQUFPLEVBQXZCLEVBQTJCb0IsUUFBUSxFQUFuQyxFQUF1Q1QsV0FBVyxDQUFDLENBQW5EO0FBRFQsWUFERjtBQUtGLGFBQUssV0FBTDtBQUNFLGlCQUNFLDhCQUFDLGVBQUQ7QUFDRSxtQkFBTyxFQUFFOUssT0FBTyxRQUFULEVBQW1CbUssT0FBTyxFQUExQixFQUE4Qm9CLFFBQVEsRUFBdEMsRUFBMENULFdBQVcsQ0FBQyxDQUF0RDtBQURULFlBREY7QUFLRixhQUFLLFdBQUw7QUFDRSxpQkFDRSw4QkFBQyxlQUFEO0FBQ0UsbUJBQU8sRUFBRTlLLE9BQU8sS0FBVCxFQUFnQm1LLE9BQU8sRUFBdkIsRUFBMkJvQixRQUFRLEVBQW5DLEVBQXVDVCxXQUFXLENBQUMsQ0FBbkQ7QUFEVCxZQURGO0FBS0YsYUFBSyxTQUFMO0FBQ0UsaUJBQ0UsOEJBQUMsa0JBQUQ7QUFDRSxtQkFBTyxFQUFFOUssT0FBTyxPQUFULEVBQWtCbUssT0FBTyxFQUF6QixFQUE2Qm9CLFFBQVEsRUFBckMsRUFBeUNULFdBQVcsQ0FBQyxDQUFyRDtBQURULFlBREY7O0FBTUYsYUFBSyxTQUFMO0FBQ0UsaUJBQ0UsOEJBQUMsa0JBQUQ7QUFDRSxtQkFBTyxFQUFFOUssT0FBTyxLQUFULEVBQWdCbUssT0FBTyxFQUF2QixFQUEyQm9CLFFBQVEsRUFBbkMsRUFBdUNULFdBQVcsQ0FBQyxDQUFuRDtBQURULFlBREY7QUE3Q0o7QUFtREEsYUFBTyw4QkFBQyxxQkFBRCxJQUFlLE9BQU8sRUFBRTlLLE9BQU8sTUFBVCxFQUFpQm1LLE9BQU8sRUFBeEIsRUFBNEJvQixRQUFRLEVBQXBDLEVBQXRCLEdBQVA7QUFDRDs7OztFQXREMkJOLGdCOztrQkF5RGZLLGU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTUUsWTs7O0FBQ0osd0JBQVl0RSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEhBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYc0UsZ0JBQVU7QUFEQyxLQUFiO0FBRmlCO0FBS2xCOzs7O2tDQU9hO0FBQ1osYUFBTyxDQUNMLGVBREssRUFFTCxxQkFGSyxFQUdMLGVBSEssRUFJTCxRQUpLLEVBS0wsb0JBTEssRUFNTCxvQkFOSyxFQU9MLG9CQVBLLEVBUUwsUUFSSyxFQVNMLGFBVEssRUFVTCxjQVZLLENBQVA7QUFZRDs7O3NDQUVpQkMsTSxFQUFRO0FBQ3hCLFVBQU0zSSxTQUFTLEtBQUs0SSxXQUFMLEVBQWY7O0FBRUEsVUFBSUMscUJBQXFCQyxPQUFPQyxNQUFQLENBQWMsRUFBZCxFQUFrQkosTUFBbEIsQ0FBekI7O0FBRUEsVUFBSUssa0JBQWtCLEtBQXRCOztBQUVBaEosYUFBTzZILE9BQVAsQ0FBZSxpQkFBUztBQUN0QixZQUFJLENBQUNnQixtQkFBbUJ6RSxLQUFuQixDQUFMLEVBQWdDO0FBQzlCeUUsNkJBQW1CekUsS0FBbkIsSUFBNEI7QUFDMUJOLHNCQUFVLFNBRGdCO0FBRTFCbUYscUNBQXlCLENBQUNEO0FBRkEsV0FBNUI7QUFJRCxTQUxELE1BS087QUFDTEEsNEJBQWtCLElBQWxCO0FBQ0Q7QUFDRixPQVREOztBQVdBLFVBQUlFLGNBQWMsRUFBbEI7O0FBRUFKLGFBQU9LLElBQVAsQ0FBWU4sa0JBQVosRUFDR08sSUFESCxDQUNRLFVBQUNDLElBQUQsRUFBT0MsSUFBUDtBQUFBLGVBQWdCdEosT0FBTytELE9BQVAsQ0FBZXNGLElBQWYsSUFBdUJySixPQUFPK0QsT0FBUCxDQUFldUYsSUFBZixDQUF2QztBQUFBLE9BRFIsRUFFR3pCLE9BRkgsQ0FFVyxlQUFPO0FBQ2RxQixvQkFBWUssR0FBWixJQUFtQlYsbUJBQW1CVSxHQUFuQixDQUFuQjtBQUNELE9BSkg7QUFLQSxhQUFPTCxXQUFQO0FBQ0Q7Ozs2Q0FFd0I7QUFDdkIsV0FBS3JFLFFBQUwsQ0FBYztBQUNaNkQsa0JBQVUsQ0FBQyxLQUFLdEUsS0FBTCxDQUFXc0U7QUFEVixPQUFkO0FBR0Q7Ozt3Q0FFbUJjLGUsRUFBaUJiLE0sRUFBUWMsSSxFQUFNO0FBQ2pELFVBQU1DLFdBQVcsRUFBakI7QUFDQSxXQUFLLElBQUl0QixDQUFULElBQWNPLE1BQWQsRUFBc0I7QUFDcEIsWUFBTWdCLFFBQVFoQixPQUFPUCxDQUFQLENBQWQ7QUFDQXNCLGlCQUFTQyxLQUFULElBQWtCSCxnQkFBZ0JHLEtBQWhCLENBQWxCOztBQUVBLFlBQUlGLFNBQVNFLEtBQWIsRUFBb0I7QUFDbEIsaUJBQU9ILGdCQUFnQkcsS0FBaEIsQ0FBUDtBQUNEO0FBQ0Y7QUFDREgsc0JBQWdCQyxJQUFoQixJQUF3QkMsUUFBeEI7QUFDRDs7O3lDQUVvQkUsSSxFQUFNO0FBQ3pCLFVBQUlqQixzQkFBY2lCLElBQWQsQ0FBSjtBQUNBLFVBQUk5RixXQUFXLElBQWY7QUFDQSxVQUFJK0YsVUFBVSxJQUFkO0FBQ0FmLGFBQU9LLElBQVAsQ0FBWVIsTUFBWixFQUFvQmQsT0FBcEIsQ0FBNEIsaUJBQVM7QUFDbkMsWUFBSThCLFVBQVUscUJBQVYsSUFBbUNBLFVBQVUsZUFBakQsRUFBa0U7QUFDaEU3RixxQkFBVzZFLE9BQU9nQixLQUFQLEVBQWM3RixRQUF6Qjs7QUFFQSxjQUFJQSxhQUFhLFFBQWIsSUFBeUJBLGFBQWEsV0FBMUMsRUFBdUQ7QUFDckQrRixzQkFBVUYsS0FBVjtBQUNEO0FBQ0QsaUJBQU9oQixPQUFPZ0IsS0FBUCxDQUFQO0FBQ0Q7QUFDRixPQVREOztBQVdBLFVBQUk3RixhQUFhLElBQWpCLEVBQXVCO0FBQ3JCNkUsZUFBT3RKLGFBQVAsR0FBdUI7QUFDckJ5RSxvQkFBVStGLFVBQVUsUUFBVixHQUFxQi9GLFFBRFY7QUFFckIrRiwwQkFGcUI7QUFHckJaLG1DQUF5Qm5GLFlBQVksU0FBWixJQUF5QixDQUFDK0Y7QUFIOUIsU0FBdkI7QUFLRDtBQUNELGFBQU9sQixNQUFQO0FBQ0Q7OzsyQkFFTWEsZSxFQUFpQmIsTSxFQUFRNUQsTSxFQUFRdEIsYSxFQUFlO0FBQUE7O0FBQ3JELFVBQU1xRyxjQUFjO0FBQ2xCNUQsaUJBQVMsTUFEUztBQUVsQjZELHVCQUFlLFFBRkc7QUFHbEJDLHdCQUFnQixlQUhFO0FBSWxCeEIsZ0JBQVE7QUFKVSxPQUFwQjs7QUFPQSxhQUFPTSxPQUFPSyxJQUFQLENBQVlLLGVBQVosRUFBNkJqQyxHQUE3QixDQUFpQyxVQUFDb0MsS0FBRCxFQUFRbkMsS0FBUixFQUFrQjtBQUN4RCxZQUFJeUMsZUFBSjtBQUNBLFlBQUkzRSxRQUFRa0UsZ0JBQWdCRyxLQUFoQixDQUFaOztBQUVBLFlBQUloRSxNQUFNQyxPQUFOLENBQWNOLEtBQWQsQ0FBSixFQUEwQjtBQUN4QjJFLG1CQUFTbkIsT0FBT0ssSUFBUCxDQUFZN0QsS0FBWixFQUFtQmlDLEdBQW5CLENBQXVCLFVBQUNnQyxHQUFELEVBQU1uQixDQUFOLEVBQVk7QUFDMUMsbUJBQU8sT0FBSzhCLFdBQUwsQ0FDTDVFLE1BQU1pRSxHQUFOLENBREssRUFFTGpFLEtBRkssRUFHTGlFLEdBSEssRUFJTG5CLENBSkssRUFLTCxLQUxLLEVBTUxBLENBTkssRUFPTHJELE1BUEssRUFRTHRCLGFBUkssQ0FBUDtBQVVELFdBWFEsQ0FBVDtBQVlELFNBYkQsTUFhTztBQUNMd0csbUJBQVMsT0FBS0MsV0FBTCxDQUNQNUUsS0FETyxFQUVQcUQsTUFGTyxFQUdQZ0IsS0FITyxFQUlQbkMsS0FKTyxFQUtQQSxVQUFVLENBTEgsRUFNUCxDQU5PLEVBT1B6QyxNQVBPLEVBUVB0QixhQVJPLENBQVQ7QUFVRDtBQUNELGVBQ0U7QUFBQTtBQUFBLFlBQUssS0FBSyxZQUFZK0QsS0FBdEIsRUFBNkIsT0FBT3NDLFdBQXBDO0FBQ0dHO0FBREgsU0FERjtBQUtELE9BbENNLENBQVA7QUFtQ0Q7OztnQ0FHQzNFLEssRUFDQXFELE0sRUFDQWdCLEssRUFDQW5DLEssRUFDQTJDLE8sRUFJQTtBQUFBLFVBSEFDLFdBR0EsdUVBSGMsQ0FHZDtBQUFBLFVBRkFyRixNQUVBO0FBQUEsVUFEQXRCLGFBQ0E7O0FBQ0EsVUFBTTRHLGFBQWE7QUFDakJuRSxpQkFBUyxNQURRO0FBRWpCNkQsdUJBQWU7QUFGRSxPQUFuQjs7QUFLQSxVQUFNTyxZQUFZO0FBQ2hCbEUsa0JBQVUsT0FETTtBQUVoQkksb0JBQVk7QUFGSSxPQUFsQjs7QUFLQSxVQUFNK0QsWUFBWTtBQUNoQnJFLGlCQUFTLE9BRE87QUFFaEJzRSxxQkFBYSxvQkFGRztBQUdoQmhFLG9CQUFZLENBQUMsQ0FIRztBQUloQmlFLHdCQUFnQixPQUpBO0FBS2hCQyx3QkFBZ0IsQ0FMQTtBQU1oQnRELGVBQU8sRUFOUztBQU9oQnVELHNCQUFjLEVBUEU7QUFRaEIvRCxnQkFBUSxDQVJRO0FBU2hCTyxtQkFBV2lELGNBQWMsQ0FBZCxJQUFtQjtBQVRkLE9BQWxCOztBQVlBLFVBQUksQ0FBQ1EsNkJBQW1CN0YsTUFBbkIsRUFBMkIvRSxNQUEzQixDQUFrQ3NGLE1BQU14QixRQUF4QyxDQUFMLEVBQXdELE9BQU8sSUFBUDs7QUFFeEQsVUFBSStHLGNBQWNELDZCQUFtQjdGLE1BQW5CLEVBQTJCL0UsTUFBM0IsQ0FBa0NzRixNQUFNeEIsUUFBeEMsQ0FBbEI7O0FBRUEsVUFBSXdCLE1BQU10RixNQUFOLElBQWdCc0YsTUFBTXRGLE1BQU4sQ0FBYTJJLE9BQU9nQixLQUFQLEVBQWMzSixNQUFkLENBQXFCNkQsTUFBckIsR0FBOEIsQ0FBM0MsQ0FBcEIsRUFBbUU7QUFDakVnSCx1QkFBZSxNQUFNdkYsTUFBTXRGLE1BQU4sQ0FBYXNGLE1BQU10RixNQUFOLENBQWE2RCxNQUFiLEdBQXNCLENBQW5DLEVBQXNDaUgsSUFBM0Q7QUFDRDs7QUFFRCxVQUFJeEYsTUFBTXVFLE9BQVYsRUFBbUI7QUFDakJnQixzQkFBY0QsNkJBQW1CN0YsTUFBbkIsRUFBMkJ0RSxZQUEzQixDQUF3QzZFLE1BQU11RSxPQUE5QyxDQUFkO0FBQ0Q7O0FBRUQsYUFDRTtBQUFBO0FBQUEsVUFBSyxPQUFPUSxVQUFaLEVBQXdCLEtBQUssV0FBV1YsS0FBWCxHQUFtQm5DLEtBQWhEO0FBQ0csU0FBQzJDLE9BQUQsSUFBWSx1Q0FBSyxPQUFPSSxTQUFaLEdBRGY7QUFFRTtBQUFBO0FBQUE7QUFDRSxtQkFBT00sV0FEVDtBQUVFLG1CQUFPLEVBQUVFLFNBQVN6RixNQUFNMkQsdUJBQU4sR0FBZ0MsR0FBaEMsR0FBc0MsQ0FBakQ7QUFGVDtBQUlFLHdDQUFDLHlCQUFELElBQWlCLE9BQU8zRCxNQUFNeEIsUUFBOUI7QUFKRixTQUZGO0FBUUU7QUFBQTtBQUFBO0FBQ0UsZ0NBQ0t3RyxTQURMO0FBRUVTLHVCQUFTekYsTUFBTTJELHVCQUFOLEdBQWdDLEdBQWhDLEdBQXNDO0FBRmpEO0FBREY7QUFNRTtBQUFDLDRDQUFEO0FBQUEsY0FBd0IsZUFBZXhGLGFBQXZDLEVBQXNELFFBQVE2QixLQUE5RDtBQUNHc0YseUNBQW1CN0YsTUFBbkIsRUFBMkI3RixJQUEzQixDQUFnQ3lLLEtBQWhDO0FBREg7QUFORjtBQVJGLE9BREY7QUFxQkQ7Ozs2QkFFUTtBQUFBOztBQUNQLFVBQU1xQixlQUFlO0FBQ25COUUsaUJBQVMsTUFEVTtBQUVuQjZELHVCQUFlLEtBRkk7QUFHbkJrQixzQkFBYyxRQUhLO0FBSW5COUUsb0JBQVksUUFKTztBQUtuQjZELHdCQUFnQixRQUxHO0FBTW5CakMsbUJBQVc7QUFOUSxPQUFyQjs7QUFETyxtQkFVNkMsS0FBSzVELEtBVmxEO0FBQUEsVUFVQ3dFLE1BVkQsVUFVQ0EsTUFWRDtBQUFBLFVBVVNoQixRQVZULFVBVVNBLFFBVlQ7QUFBQSxVQVVtQjVDLE1BVm5CLFVBVW1CQSxNQVZuQjtBQUFBLFVBVTJCdEIsYUFWM0IsVUFVMkJBLGFBVjNCO0FBQUEsVUFXQ2lGLFFBWEQsR0FXYyxLQUFLdEUsS0FYbkIsQ0FXQ3NFLFFBWEQ7OztBQWFQLFVBQUljLGtCQUFrQixLQUFLMEIsaUJBQUwsQ0FBdUJ2QyxNQUF2QixDQUF0QjtBQUNBYSx3QkFBa0IsS0FBSzJCLG9CQUFMLENBQTBCM0IsZUFBMUIsQ0FBbEI7QUFDQSxXQUFLNEIsbUJBQUwsQ0FDRTVCLGVBREYsRUFFRSxDQUFDLGNBQUQsRUFBaUIsUUFBakIsQ0FGRixFQUdFLFFBSEY7QUFLQSxVQUFNNkIsVUFBVSxLQUFLQyxNQUFMLENBQVk5QixlQUFaLEVBQTZCYixNQUE3QixFQUFxQzVELE1BQXJDLEVBQTZDdEIsYUFBN0MsQ0FBaEI7O0FBRUEsYUFDRTtBQUFBO0FBQUE7QUFDRSxlQUFLLFVBQVVrRSxTQUFTM0QsYUFEMUI7QUFFRSxpQkFBTyxFQUFFNEMsUUFBUSxNQUFWLEVBQWtCUSxPQUFPLEtBQXpCLEVBQWdDRixRQUFRLFNBQXhDLEVBRlQ7QUFHRSxtQkFBUztBQUFBLG1CQUFNLE9BQUtxRSxzQkFBTCxFQUFOO0FBQUE7QUFIWDtBQUtFO0FBQUE7QUFBQSxZQUFLLE9BQU8sRUFBRXJGLFNBQVMsTUFBWCxFQUFtQk0sWUFBWSxDQUFDLEVBQWhDLEVBQVo7QUFDRTtBQUFBO0FBQUE7QUFDRSxxQkFBT0QsdUJBQWF4QixNQUFiLEVBQXFCOUMsUUFBckIsR0FBZ0MwRixTQUFTMUYsUUFEbEQ7QUFFRSxxQkFBTztBQUNMbUUsMEJBQVUsT0FETDtBQUVMNEIsNEJBQVksR0FGUDtBQUdML0ssdUJBQU8sU0FIRjtBQUlMOEssMkJBQVcsQ0FBQyxDQUpQO0FBS0xmLDZCQUFhO0FBTFI7QUFGVDtBQVVHVyxxQkFBUzVGO0FBVlosV0FERjtBQWFHNEYsbUJBQVM2RCxRQUFULElBQ0M3RCxTQUFTNkQsUUFBVCxDQUFrQi9CLElBRG5CLElBRUc7QUFBQTtBQUFBLGNBQUssT0FBTyxFQUFFckQsVUFBVSxPQUFaLEVBQXFCNEIsWUFBWSxHQUFqQyxFQUFzQ3lELE1BQU0sQ0FBNUMsRUFBWjtBQUNHOUQscUJBQVM2RCxRQUFULENBQWtCL0I7QUFEckIsV0FmTjtBQW1CRTtBQUFBO0FBQUEsY0FBSyxPQUFPLEVBQUVyRCxVQUFVLE9BQVosRUFBcUI0QixZQUFZLEdBQWpDLEVBQXNDeUQsTUFBTSxDQUE1QyxFQUFaO0FBQ0c5RCxxQkFBUytELFFBQVQsSUFBcUJkLDZCQUFtQjdGLE1BQW5CLEVBQTJCakYsUUFBM0IsQ0FBb0NDO0FBRDVEO0FBbkJGLFNBTEY7QUE0QkU7QUFBQTtBQUFBLFlBQUssT0FBT2lMLFlBQVo7QUFDR0ssaUJBREg7QUFFRTtBQUFBO0FBQUE7QUFDRSxxQkFBTyxFQUFFN0UsWUFBWSxNQUFkLEVBQXNCUSxhQUFhLEVBQW5DLEVBQXVDZSxXQUFXLENBQUMsRUFBbkQsRUFEVDtBQUVFLHVCQUFTO0FBQUEsdUJBQU0sT0FBS3dELHNCQUFMLEVBQU47QUFBQTtBQUZYO0FBSUcsYUFBQzdDLFFBQUQsR0FBWSw4QkFBQyxxQkFBRCxPQUFaLEdBQWdDLDhCQUFDLG1CQUFEO0FBSm5DO0FBRkYsU0E1QkY7QUFxQ0dBLG9CQUNDO0FBQUE7QUFBQTtBQUNFLG1CQUFPO0FBQ0x4Qyx1QkFBUyxNQURKO0FBRUw0Qix1QkFBUyxDQUZKO0FBR0xpQyw2QkFBZSxRQUhWO0FBSUxoQyx5QkFBVyxFQUpOO0FBS0xiLHNCQUFRO0FBTEgsYUFEVDtBQVFFLHFCQUFTO0FBQUEscUJBQVM1QixNQUFNcUcsZUFBTixFQUFUO0FBQUE7QUFSWDtBQVVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBTSxPQUFPLEVBQUUzRCxZQUFZLEdBQWQsRUFBbUJoQixhQUFhLEVBQWhDLEVBQWI7QUFDR1QscUNBQWF4QixNQUFiLEVBQXFCaEQ7QUFEeEIsYUFERjtBQUlHNEYscUJBQVNwQztBQUpaLFdBVkY7QUFnQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFNLE9BQU8sRUFBRXlDLFlBQVksR0FBZCxFQUFtQmhCLGFBQWEsRUFBaEMsRUFBYjtBQUNHVCxxQ0FBYXhCLE1BQWIsRUFBcUIvQztBQUR4QixhQURGO0FBSUcyRixxQkFBU2lFO0FBSlosV0FoQkY7QUFzQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQUFNLE9BQU8sRUFBRTVELFlBQVksR0FBZCxFQUFtQmhCLGFBQWEsRUFBaEMsRUFBYjtBQUNHVCxxQ0FBYXhCLE1BQWIsRUFBcUI5QztBQUR4QixhQURGO0FBSUcwRixxQkFBUzFGO0FBSlo7QUF0QkY7QUF0Q0osT0FERjtBQXVFRDs7OztFQWpUd0JnRyxnQkFBTUMsUzs7QUFBM0JPLFksQ0FRR29ELFMsR0FBWTtBQUNqQmxELFVBQVFtRCxpQkFBVUMsTUFBVixDQUFpQkMsVUFEUjtBQUVqQnJFLFlBQVVtRSxpQkFBVUMsTUFBVixDQUFpQkM7QUFGVixDO2tCQTRTTnZELFk7Ozs7Ozs7Ozs7Ozs7OztBQzVUZjs7Ozs7Ozs7Ozs7O0lBRU13RCxZOzs7Ozs7Ozs7OztrQ0FDVTtBQUFBLG1CQUNnQixLQUFLOUgsS0FEckI7QUFBQSxVQUNKK0gsV0FESSxVQUNKQSxXQURJO0FBQUEsVUFDUy9LLEVBRFQsVUFDU0EsRUFEVDs7QUFFWixVQUFJK0ssZUFBZSxPQUFPQSxXQUFQLEtBQXVCLFVBQTFDLEVBQXNEO0FBQ3BEQSxvQkFBWS9LLEVBQVo7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQTs7QUFBQSxvQkFDbUIsS0FBS2dELEtBRHhCO0FBQUEsVUFDQ2dJLEtBREQsV0FDQ0EsS0FERDtBQUFBLFVBQ1FDLE1BRFIsV0FDUUEsTUFEUjs7QUFFUCxVQUFNQyxjQUFjO0FBQ2xCMU8sb0JBQVksU0FETTtBQUVsQlYsZUFBTyxNQUZXO0FBR2xCVyxnQkFBUTtBQUhVLE9BQXBCO0FBS0EsVUFBTTBPLGdCQUFnQjtBQUNwQjNPLG9CQUFZLE1BRFE7QUFFcEJWLGVBQU8sTUFGYTtBQUdwQlcsZ0JBQVE7QUFIWSxPQUF0QjtBQUtBLFVBQU0yTyxlQUFlO0FBQ25CekUsaUJBQVMsYUFEVTtBQUVuQjFCLGtCQUFVLE9BRlM7QUFHbkJjLGdCQUFRLFNBSFc7QUFJbkJ5RCxzQkFBYyxJQUpLO0FBS25CNkIsa0JBQVUsRUFMUztBQU1uQmhHLG9CQUFZO0FBTk8sT0FBckI7O0FBU0EsVUFBTWlHLGNBQWMzRCxPQUFPQyxNQUFQLENBQ2xCd0QsWUFEa0IsRUFFbEJILFNBQVNDLFdBQVQsR0FBdUJDLGFBRkwsQ0FBcEI7O0FBS0EsYUFDRTtBQUFBO0FBQUEsVUFBUSxPQUFPRyxXQUFmLEVBQTRCLFNBQVM7QUFBQSxtQkFBTSxPQUFLUCxXQUFMLEVBQU47QUFBQSxXQUFyQztBQUNFO0FBQUE7QUFBQSxZQUFLLE9BQU8sRUFBRVEsZUFBZSxNQUFqQixFQUF5QnJGLFdBQVcsUUFBcEMsRUFBWjtBQUNHOEU7QUFESDtBQURGLE9BREY7QUFPRDs7OztFQXpDd0JqRSxnQjs7a0JBMkNaK0QsWTs7Ozs7Ozs7Ozs7Ozs7O0FDN0NmOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTVUsZ0I7Ozs7Ozs7Ozs7OzZCQUVLO0FBQUEsbUJBQ3NDLEtBQUt4SSxLQUQzQztBQUFBLFVBQ0NZLE1BREQsVUFDQ0EsTUFERDtBQUFBLFVBQ1M2SCxjQURULFVBQ1NBLGNBRFQ7QUFBQSxVQUN5QkMsUUFEekIsVUFDeUJBLFFBRHpCOzs7QUFHUCxhQUNFO0FBQUE7QUFBQSxVQUFLLE9BQU8sS0FBSzFJLEtBQUwsQ0FBVzJJLEtBQXZCO0FBQ0c3TCwrQkFBYUMsTUFBYixDQUFvQnFHLEdBQXBCLENBQXdCO0FBQUEsaUJBQ3ZCLDhCQUFDLHNCQUFEO0FBQ0Usb0JBQVFxRixtQkFBbUJHLE1BQU01TCxFQURuQztBQUVFLGdCQUFJNEwsTUFBTTVMLEVBRlo7QUFHRSx5QkFBYSx1QkFBTTtBQUFFMEwsdUJBQVNFLE1BQU01TCxFQUFmO0FBQW9CLGFBSDNDO0FBSUUsaUJBQUssbUJBQW1CNEwsTUFBTTVMLEVBSmhDO0FBS0UsbUJBQU9vRiw2QkFBYXhCLE1BQWIsRUFBcUJyRSxZQUFyQixDQUFrQ3FNLE1BQU01TCxFQUF4QztBQUxULFlBRHVCO0FBQUEsU0FBeEI7QUFESCxPQURGO0FBYUQ7Ozs7RUFsQjRCK0csZ0I7O2tCQXFCaEJ5RSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmY7Ozs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0lBRU1uSyxjOzs7QUFTSiwwQkFBWTJCLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1g0SSxtQkFBYTtBQURGLEtBQWI7QUFGaUI7QUFLbEI7Ozs7MENBRXFCO0FBQ3BCLFdBQUtuSSxRQUFMLENBQWM7QUFDWm1JLHFCQUFhLENBQUMsS0FBSzVJLEtBQUwsQ0FBVzRJO0FBRGIsT0FBZDtBQUdEOzs7NkJBRVE7QUFBQSxtQkFDdUMsS0FBSzdJLEtBRDVDO0FBQUEsVUFDQzhJLGdCQURELFVBQ0NBLGdCQUREO0FBQUEsVUFDbUJDLGVBRG5CLFVBQ21CQSxlQURuQjs7O0FBR1AsVUFBTUMsZ0JBQWdCO0FBQ3BCdlAsZ0JBQVEsaUJBRFk7QUFFcEIrTSxzQkFBYyxDQUZNO0FBR3BCbkMsZ0JBQVEsTUFIWTtBQUlwQjRFLG9CQUFZLE1BSlE7QUFLcEJoRyxlQUFPdEksa0JBQVVDLGFBQVYsR0FBMEIsR0FMYjtBQU1wQjZILGdCQUFRLFdBTlk7QUFPcEJWLGlCQUFTLE9BUFc7QUFRcEJtSCxrQkFBVSxRQVJVO0FBU3BCakgsa0JBQVUsSUFUVTtBQVVwQmtILGtCQUFVO0FBVlUsT0FBdEI7O0FBYUEsVUFBSUMsa0JBQWtCO0FBQ3BCbkcsZUFBTyxNQURhO0FBRXBCRSxzQkFBYztBQUZNLE9BQXRCOztBQUtBLFVBQUlrRyxZQUFZO0FBQ2Q3UCxvQkFBWVYsY0FBTW9CLGVBREo7QUFFZG1LLGdCQUFRLE1BRk07QUFHZHRCLGdCQUFRLFNBSE07QUFJZGMsb0JBQVksR0FKRTtBQUtkNUIsa0JBQVUsUUFMSTtBQU1kaUIsbUJBQVcsUUFORztBQU9kbkIsaUJBQVM7QUFQSyxPQUFoQjs7QUFVQSxVQUFNdUgsWUFBWTtBQUNoQkgsa0JBQVUsVUFETTtBQUVoQnBILGlCQUFTLGNBRk87QUFHaEJnQixnQkFBUSxTQUhRO0FBSWhCQyxtQkFBVyx1QkFKSztBQUtoQmYsa0JBQVUsT0FMTTtBQU1oQm5KLGVBQU9nUSxpQkFBaUJwSixNQUFqQixHQUEwQjVHLGNBQU1ZLFNBQWhDLEdBQTRDWixjQUFNYSxJQU56QztBQU9oQjRQLGdCQUFRO0FBUFEsT0FBbEI7O0FBVUEsVUFBTUMsZUFBZTtBQUNuQkwsa0JBQVUsVUFEUztBQUVuQk0sb0JBQVksWUFGTztBQUduQjFILGlCQUFTLFFBSFU7QUFJbkJFLGtCQUFVLE9BSlM7QUFLbkJuSixlQUFPQSxjQUFNQyxJQUFOLENBQVdRLE9BTEM7QUFNbkJDLG9CQUFZVixjQUFNUyxPQU5DO0FBT25Cb0ssaUJBQVMsRUFQVTtBQVFuQlYsZUFBTyxNQVJZO0FBU25Cc0csZ0JBQVE7QUFUVyxPQUFyQjs7QUFZQSxVQUFNRyxZQUFZO0FBQ2hCNVEsZUFBT0EsY0FBTUMsSUFBTixDQUFXQyxPQURGO0FBRWhCMlEsb0JBQVksbUJBRkk7QUFHaEIxSCxrQkFBVSxNQUhNO0FBSWhCb0MsZ0JBQVEsRUFKUTtBQUtoQnRDLGlCQUFTLE1BTE87QUFNaEI2RCx1QkFBZSxRQU5DO0FBT2hCNUQsb0JBQVksUUFQSTtBQVFoQjZELHdCQUFnQixRQVJBO0FBU2hCK0Qsb0JBQVksUUFUSTtBQVVoQlYsa0JBQVUsUUFWTTtBQVdoQlcsc0JBQWM7QUFYRSxPQUFsQjs7QUFjQSxVQUFJQyxVQUFVO0FBQ1p0USxvQkFBWSxPQURBO0FBRVp5SixlQUFPLEtBRks7QUFHWm9CLGdCQUFRLE1BSEk7QUFJWjhFLGtCQUFVLFVBSkU7QUFLWjlHLG9CQUFZLEtBQUswRyxlQUFMLEdBQXVCO0FBTHZCLE9BQWQ7O0FBUUEsVUFBSWdCLFlBQVlqQixpQkFBaUJwSixNQUFqQixHQUNaLEtBQUtNLEtBQUwsQ0FBVytKLFNBREMsR0FFWiw2QkFGSjs7QUFJQSxhQUNFO0FBQUE7QUFBQSxVQUFLLE9BQU9YLGVBQVo7QUFDRTtBQUFBO0FBQUE7QUFDRSxtQkFBT0UsU0FEVDtBQUVFLHlCQUFhLEtBQUtVLG1CQUFMLENBQXlCekgsSUFBekIsQ0FBOEIsSUFBOUIsQ0FGZjtBQUdFLDBCQUFjLEtBQUt5SCxtQkFBTCxDQUF5QnpILElBQXpCLENBQThCLElBQTlCO0FBSGhCO0FBS0csZUFBS3ZDLEtBQUwsQ0FBV2lLLElBTGQ7QUFNRyxlQUFLaEssS0FBTCxDQUFXNEksV0FBWCxJQUNDO0FBQUE7QUFBQSxjQUFLLE9BQU9XLFlBQVo7QUFBQTtBQUE0Qk8scUJBQTVCO0FBQUE7QUFBQTtBQVBKLFNBREY7QUFVRTtBQUFBO0FBQUEsWUFBSyxXQUFXbFAseUJBQU9xUCxRQUF2QixFQUFpQyxPQUFPbEIsYUFBeEM7QUFDRTtBQUFBO0FBQUEsY0FBSyxLQUFLLDRCQUE0QixLQUFLaEosS0FBTCxDQUFXcUQsS0FBakQ7QUFDRSxtREFBSyxPQUFPeUcsT0FBWixHQURGO0FBRUdoQiw2QkFBaUIxRixHQUFqQixDQUFxQixVQUFDK0csZUFBRCxFQUFrQjlHLEtBQWxCLEVBQTRCO0FBQ2hELGtCQUFJK0csMkJBQW1CZixTQUFuQixDQUFKO0FBQ0FlLDBCQUFZbkgsS0FBWixHQUNFa0gsZ0JBQWdCRSxtQkFBaEIsR0FDQUYsZ0JBQWdCRyxxQkFEaEIsR0FFQSxHQUhGOztBQUtBLGtCQUFJakgsVUFBVSxDQUFkLEVBQWlCO0FBQ2YrRyw0QkFBWS9ILFVBQVosR0FDRThILGdCQUFnQkcscUJBQWhCLEdBQXdDLEdBRDFDO0FBRUQsZUFIRCxNQUdPO0FBQ0xGLDRCQUFZL0gsVUFBWixHQUNFOEgsZ0JBQWdCRyxxQkFBaEIsR0FDQXhCLGlCQUFpQnpGLFFBQVEsQ0FBekIsRUFBNEJnSCxtQkFENUIsR0FFQSxHQUhGO0FBSUQ7O0FBRUQsa0JBQUlFLFdBQVdKLGdCQUFnQkssRUFBL0I7O0FBRUEsa0JBQ0VMLGdCQUFnQkcscUJBQWhCLEdBQXdDLENBQXhDLElBQ0FILGdCQUFnQk0sSUFBaEIsQ0FBcUJDLGFBQXJCLENBQW1DUCxnQkFBZ0JLLEVBQW5ELE1BQTJELENBRjdELEVBR0U7QUFDQUQsMkJBQVdKLGdCQUFnQk0sSUFBaEIsR0FBdUIsS0FBdkIsR0FBK0JOLGdCQUFnQkssRUFBMUQ7QUFDRDs7QUFFRCxxQkFDRTtBQUFBO0FBQUEsa0JBQUssS0FBSywwQkFBMEJuSCxLQUFwQyxFQUEyQyxPQUFPK0csV0FBbEQ7QUFDRTtBQUFBO0FBQUEsb0JBQUssT0FBT1YsU0FBWjtBQUNFO0FBQUE7QUFBQTtBQUNFLGlDQUFVLGNBRFo7QUFFRSw2QkFBTztBQUNMckYsZ0NBQVEsTUFESDtBQUVMdkwsK0JBQU9BLGNBQU1DLElBQU4sQ0FBV0MsT0FGYjtBQUdMMlIsdUNBQWU7QUFIVix1QkFGVDtBQU9FLDZCQUFPSjtBQVBUO0FBU0dBO0FBVEg7QUFERjtBQURGLGVBREY7QUFpQkQsYUEzQ0E7QUFGSDtBQURGO0FBVkYsT0FERjtBQThERDs7OztFQW5LMEJ6RyxnQkFBTUMsUzs7QUFBN0IxRixjLENBQ0dxSixTLEdBQVk7QUFDakJxQyxhQUFXcEMsaUJBQVVpRCxNQUFWLENBQWlCL0MsVUFEWDtBQUVqQnhFLFNBQU9zRSxpQkFBVWtELE1BQVYsQ0FBaUJoRCxVQUZQO0FBR2pCa0IsbUJBQWlCcEIsaUJBQVVrRCxNQUFWLENBQWlCaEQsVUFIakI7QUFJakJpRCxpQkFBZW5ELGlCQUFVaUQsTUFBVixDQUFpQi9DLFVBSmY7QUFLakJpQixvQkFBa0JuQixpQkFBVW9ELEtBQVYsQ0FBZ0JsRDtBQUxqQixDO2tCQXFLTnhKLGM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0tmOzs7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNMk0sU0FBU3JELGlCQUFVc0QsS0FBVixDQUFnQjtBQUM3QlIsUUFBTTlDLGlCQUFVaUQsTUFBVixDQUFpQi9DLFVBRE07QUFFN0IyQyxNQUFJN0MsaUJBQVVpRCxNQUFWLENBQWlCL0MsVUFGUTtBQUc3QnlDLHlCQUF1QjNDLGlCQUFVa0QsTUFBVixDQUFpQmhELFVBSFg7QUFJN0J3Qyx1QkFBcUIxQyxpQkFBVWtELE1BQVYsQ0FBaUJoRDtBQUpULENBQWhCLENBQWY7O0FBT0EsSUFBTXFELFlBQVl2RCxpQkFBVXNELEtBQVYsQ0FBZ0I7QUFDaENFLFlBQVV4RCxpQkFBVWlELE1BQVYsQ0FBaUIvQyxVQURLO0FBRWhDdUQsV0FBU3pELGlCQUFVMEQsT0FBVixDQUFrQkwsTUFBbEIsRUFBMEJuRDtBQUZILENBQWhCLEVBR2ZBLFVBSEg7O0lBS016SixROzs7Ozs7Ozs7Ozs2QkFPSztBQUFBLG1CQUN5QyxLQUFLNEIsS0FEOUM7QUFBQSxVQUNDc0wsVUFERCxVQUNDQSxVQUREO0FBQUEsVUFDYXZDLGVBRGIsVUFDYUEsZUFEYjtBQUFBLFVBQzhCd0MsTUFEOUIsVUFDOEJBLE1BRDlCOzs7QUFHUCxVQUFNdkMsZ0JBQWdCO0FBQ3BCdlAsZ0JBQVEsaUJBRFk7QUFFcEIrTSxzQkFBYyxDQUZNO0FBR3BCaE4sb0JBQVlWLGNBQU1pQixrQkFIRTtBQUlwQmtKLGVBQU90SSxrQkFBVUMsYUFBVixHQUEwQixHQUpiO0FBS3BCNkgsZ0JBQVEsTUFMWTtBQU1wQlYsaUJBQVMsT0FOVztBQU9wQnlKLG1CQUFXLE1BUFM7QUFRcEJyQyxrQkFBVTtBQVJVLE9BQXRCOztBQVdBLFVBQU1DLGtCQUFrQjtBQUN0Qm5HLGVBQU8sTUFEZTtBQUV0QndJLHVCQUFlRixTQUFTLENBQVQsR0FBYTtBQUZOLE9BQXhCOztBQUtBLFVBQUlsQyxZQUFZO0FBQ2Q3UCxvQkFBWVYsY0FBTWtCLHVCQURKO0FBRWRpSixlQUFPLE1BRk87QUFHZG9CLGdCQUFRLE1BSE07QUFJZHZMLGVBQU9BLGNBQU1DLElBQU4sQ0FBV0MsT0FKSjtBQUtkNkssb0JBQVk7QUFMRSxPQUFoQjs7QUFRQSxVQUFJNkYsWUFBWTtBQUNkRSxvQkFBWSxRQURFO0FBRWRWLGtCQUFVLFFBRkk7QUFHZFMsb0JBQVksbUJBSEU7QUFJZEUsc0JBQWMsVUFKQTtBQUtkOUgsaUJBQVMsT0FMSztBQU1kVSxnQkFBUSxXQU5NO0FBT2R3RyxvQkFBWSxNQVBFO0FBUWRuUSxlQUFPQSxjQUFNQyxJQUFOLENBQVdDLE9BUko7QUFTZGlKLGtCQUFVLE9BVEk7QUFVZDRCLG9CQUFZO0FBVkUsT0FBaEI7O0FBYUEsVUFBSWlHLFVBQVU7QUFDWnRRLG9CQUFZLE9BREE7QUFFWnlKLGVBQU8sS0FGSztBQUdab0IsZ0JBQVEsTUFISTtBQUlaOEUsa0JBQVU7QUFKRSxPQUFkOztBQU9BVyxjQUFRekgsVUFBUixHQUFxQixLQUFLMEcsZUFBTCxHQUF1QixHQUE1Qzs7QUFFQSxhQUNFO0FBQUE7QUFBQSxVQUFLLE9BQU9LLGVBQVo7QUFDRTtBQUFBO0FBQUEsWUFBSyxPQUFPSixhQUFaO0FBQ0UsaURBQUssT0FBT2MsT0FBWixHQURGO0FBRUd3QixxQkFBV2xJLEdBQVgsQ0FBZTtBQUFBLG1CQUNkOEgsVUFBVUUsT0FBVixDQUFrQmhJLEdBQWxCLENBQXNCLFVBQUM0SCxNQUFELEVBQVMzSCxLQUFULEVBQW1CO0FBQ3ZDLGtCQUFNcEssUUFBUWlTLFVBQVVDLFFBQXhCO0FBQ0Esa0JBQU1PLFFBQVd6UyxLQUFYLG9CQUErQitSLE9BQU9QLElBQXRDLFlBQWlETyxPQUFPUixFQUF4RCxNQUFOO0FBQ0Esa0JBQUlKLDJCQUFtQmYsU0FBbkIsQ0FBSjtBQUNBZSwwQkFBWW5ILEtBQVosR0FDRStILE9BQU9YLG1CQUFQLEdBQTZCVyxPQUFPVixxQkFBcEMsR0FBNEQsR0FEOUQ7QUFFQUYsMEJBQVkvSCxVQUFaLEdBQXlCMkksT0FBT1YscUJBQVAsR0FBK0IsR0FBeEQ7QUFDQSxxQkFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSx5QkFBSyxzQkFBc0JqSCxLQUQ3QjtBQUVFLDJCQUFPK0csV0FGVDtBQUdFLDJCQUFPc0I7QUFIVDtBQUtFO0FBQUE7QUFBQSxzQkFBSyxPQUFPaEMsU0FBWjtBQUF3QnpRO0FBQXhCO0FBTEY7QUFERixlQURGO0FBV0QsYUFsQkQsQ0FEYztBQUFBLFdBQWY7QUFGSDtBQURGLE9BREY7QUE0QkQ7Ozs7RUFwRm9CNkssZ0JBQU1DLFM7O0FBQXZCM0YsUSxDQUNHc0osUyxHQUFZO0FBQ2pCNEQsY0FBWTNELGlCQUFVMEQsT0FBVixDQUFrQkgsU0FBbEIsRUFBNkJyRCxVQUR4QjtBQUVqQjBELFVBQVE1RCxpQkFBVWdFLElBQVYsQ0FBZTlELFVBRk47QUFHakJrQixtQkFBaUJwQixpQkFBVWtELE1BQVYsQ0FBaUJoRDtBQUhqQixDO2tCQXNGTnpKLFE7Ozs7Ozs7QUN0R2Y7QUFDQTtBQUNBLDZGQUE4Rjs7QUFFOUY7QUFDQSwrQkFBZ0MsbURBQW1ELHFCQUFxQixHQUFHLDRCQUE0QixxQkFBcUIsR0FBRyxvQ0FBb0Msb0JBQW9CLG1CQUFtQiw0QkFBNEIsNkJBQTZCLEdBQUcsNEJBQTRCLHFCQUFxQiwwQkFBMEIsR0FBRyw4QkFBOEIsNEJBQTRCLHNCQUFzQix1QkFBdUIsc0JBQXNCLHVCQUF1QixHQUFHLDhCQUE4QixxQkFBcUIsaUNBQWlDLEdBQUcsOEJBQThCLHFCQUFxQixHQUFHLFNBQVMscUJBQXFCLDRCQUE0QixHQUFHLHNCQUFzQixxQkFBcUIsR0FBRzs7QUFFbndCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7O0FDZEE7QUFDQTs7O0FBR0E7QUFDQSxxREFBc0Qsd0JBQXdCLCtGQUErRixzS0FBc0ssa0dBQWtHLDZGQUE2Riw4RkFBOEYsOEZBQThGLHNLQUFzSyxHQUFHOztBQUV2M0I7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ1ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQjs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBOztBQUVBLDJCOzs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7QUNYQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxtREFBbUQsbUxBQW1MO0FBQ3RPO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DOzs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwwTEFBMEw7QUFDN087QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0M7Ozs7Ozs7QUMvQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGkyQkFBaTJCO0FBQ3A1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQzs7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxtREFBbUQsaWdCQUFpZ0I7QUFDcGpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DOzs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx1SkFBdUo7QUFDMU07QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0M7Ozs7Ozs7QUMvQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDBKQUEwSjtBQUM3TTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQzs7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZ1dBQWdXO0FBQ25aO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DOzs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxvSkFBb0o7QUFDdk07QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0M7Ozs7Ozs7QUMvQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGdQQUFnUDtBQUNuUztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQzs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7QUN4RkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJvZ3VcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYm9ndVwiXSA9IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDViYzU5NTlkOTYxZGMwMmVjMGMwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIEljb25CYXNlID0gZnVuY3Rpb24gSWNvbkJhc2UoX3JlZiwgX3JlZjIpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIGNvbG9yID0gX3JlZi5jb2xvcjtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemU7XG4gIHZhciBzdHlsZSA9IF9yZWYuc3R5bGU7XG4gIHZhciB3aWR0aCA9IF9yZWYud2lkdGg7XG4gIHZhciBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjaGlsZHJlbicsICdjb2xvcicsICdzaXplJywgJ3N0eWxlJywgJ3dpZHRoJywgJ2hlaWdodCddKTtcblxuICB2YXIgX3JlZjIkcmVhY3RJY29uQmFzZSA9IF9yZWYyLnJlYWN0SWNvbkJhc2U7XG4gIHZhciByZWFjdEljb25CYXNlID0gX3JlZjIkcmVhY3RJY29uQmFzZSA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmMiRyZWFjdEljb25CYXNlO1xuXG4gIHZhciBjb21wdXRlZFNpemUgPSBzaXplIHx8IHJlYWN0SWNvbkJhc2Uuc2l6ZSB8fCAnMWVtJztcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzdmcnLCBfZXh0ZW5kcyh7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBtZWV0JyxcbiAgICBoZWlnaHQ6IGhlaWdodCB8fCBjb21wdXRlZFNpemUsXG4gICAgd2lkdGg6IHdpZHRoIHx8IGNvbXB1dGVkU2l6ZVxuICB9LCByZWFjdEljb25CYXNlLCBwcm9wcywge1xuICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGNvbG9yOiBjb2xvciB8fCByZWFjdEljb25CYXNlLmNvbG9yXG4gICAgfSwgcmVhY3RJY29uQmFzZS5zdHlsZSB8fCB7fSwgc3R5bGUpXG4gIH0pKTtcbn07XG5cbkljb25CYXNlLnByb3BUeXBlcyA9IHtcbiAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBzaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5cbkljb25CYXNlLmNvbnRleHRUeXBlcyA9IHtcbiAgcmVhY3RJY29uQmFzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZShJY29uQmFzZS5wcm9wVHlwZXMpXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJY29uQmFzZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29uLWJhc2UvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuY29uc3QgY29sb3JEZWYgPSB7XG4gIGJsYWNrOiAnIzAwMCcsXG4gIHdoaXRlOiAnI0ZGRicsXG4gIHJlZDogJyNGMDAnLFxuICBncmVlbjogJyMwRjAnLFxuICBibHVlOiAnIzAwRicsXG4gIGJpZ2JsdWU6ICcjMTE2OUE3JyxcbiAgZGFya0JsdWU6ICcjMDgzNDUzJyxcbiAgZGFya0dyZXk6ICcjMkYyRjJGJyxcbiAgZ3JleTogJyNEREREREQnLFxuICBsaWdodEdyZXk6ICcjRjJGMkYyJyxcbiAgZW50dXI6IHtcbiAgICBwcmltYXJ5OiAnIzI3M0E0NicsICAgLy8gMzksNTgsNzBcbiAgICBzZWNvbmRhcnk6ICcjNkJCREMyJywgLy8xMDcsMTg5LDE5NCxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29sb3IgPSB7XG4gIGZvbnQ6IHtcbiAgICBpbnZlcnNlOiBjb2xvckRlZi53aGl0ZSxcbiAgICB0aXRsZTogY29sb3JEZWYuYmxhY2ssXG4gICAgaW5mbzE6IGNvbG9yRGVmLmVudHVyLnNlY29uZGFyeSxcbiAgICBpbmZvMjogY29sb3JEZWYuZGFya0JsdWUsXG4gICAgaW5mbzM6IGNvbG9yRGVmLmJsYWNrLFxuICAgIHdhcm46IGNvbG9yRGVmLnJlZCxcbiAgICBkaXNhYmxlZDogY29sb3JEZWYuZ3JleSxcblxuICAgIHRvb2x0aXA6IGNvbG9yRGVmLndoaXRlLFxuICB9LFxuICBiYWNrZ3JvdW5kOiBjb2xvckRlZi5lbnR1ci5wcmltYXJ5LFxuICBib3JkZXI6IGNvbG9yRGVmLmJsYWNrLFxuICBlZmZlY3RpdmU6IGNvbG9yRGVmLmJsYWNrLFxuICBmYWlsOiBjb2xvckRlZi5yZWQsXG4gIG1vZGFsOiBjb2xvckRlZi53aGl0ZSxcbiAgYmFja2Ryb3A6ICdyZ2JhKDAsIDAsIDAsIDAuMyknLFxuICB0b29sdGlwOiAnIzE5MTkxOScsXG4gIHRhYkFjdGl2ZTogY29sb3JEZWYuZW50dXIuc2Vjb25kYXJ5LFxuXG4gIHRpbWVMaW5lQmFja2dyb3VuZDogJyNERUQ4RDgnLFxuICB0aW1lTGluZUJsb2NrQmFja2dyb3VuZDogJyM2RDkyQjYnLFxuICB0aW1lTGluZUJvcmRlcjogJyNlZWUnLFxuICB0aW1lTGluZVN1Y2Nlc3M6ICcjNURBRTVEJyxcbiAgdGltZUxpbmVGYWlsOiAnI0I5MTkxOScsXG4gIHRhYmxlSGVhZGVyOiBjb2xvckRlZi5saWdodEdyZXksXG4gIHRhYmxlUm93OiAnI2ViZjJmMScsXG4gIHRhYmxlSW5mbzogJyNmZmZmZGInLFxuXG4gIHZhbGlkOiAnIzMzYzE0NicsXG4gIGludmFsaWQ6ICcjYjIwMDAwJyxcbiAgZXhwaXJpbmc6ICcjRkZBQTAwJyxcbiAgaGlnaGxpZ2h0IDoge1xuICAgIHZhbGlkOiAnIzRjYWY1MCcsXG4gICAgZXhwaXJpbmc6ICcjRkZCNjBBJyxcbiAgICBpbnZhbGlkOiAnI2NjMDAwMCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRpbWVuc2lvbiA9IHtcbiAgdGltZUxpbmVXaWR0aDogODUsXG59XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB7XG4gIGNvbG9yOiBjb2xvcixcbiAgZGltZW5zaW9uOiBkaW1lbnNpb24sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBuYjoge1xuICAgIHRleHQ6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6ICdGaWxvdmVyZsO4cmluZycsXG4gICAgICBGSUxFX0NMQVNTSUZJQ0FUSU9OOiAnRmlsa2xhc3NpZmlzZXJpbmcnLFxuICAgICAgRklMRV9ERUxJVkVSWTogJ0ZpbGxldmVyYW5zZScsXG4gICAgICBJTVBPUlQ6ICdJbXBvcnQnLFxuICAgICAgRVhQT1JUOiAnR1RGUy1la3Nwb3J0JyxcbiAgICAgIEVYUE9SVF9ORVRFWDogJ05lVEV4LWVrc3BvcnQnLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8xOiAnVmFsaWRlcmluZyBuaXbDpSAxJyxcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogJ092ZXJmw7hyaW5nIHNlbnRyYWwgZGF0YWJhc2UnLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiAnVmFsaWRlcmluZyBuaXbDpSAyJyxcbiAgICAgIEJVSUxEX0dSQVBIOiAnQnlnZyBhdiByZWlzZXPDuGtmb3JzbGFnJyxcbiAgICAgIFVOS05PV046ICdVa2plbnQgc3RlZydcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnT3ZlcmbDuHJpbmcgYXYgZmlsIGZyYSBsb2thbCBtYXNraW4gdGlsIHNlbnRyYWwgc2VydmVyJyxcbiAgICAgIElNUE9SVDogJ0ZpbHZhbGlkZXJpbmcgb2cgaW1wb3J0IGkgbG9rYWx0IGRhdGFiYXNlb21yw6VkZSBuaXbDpSAxJyxcbiAgICAgIEVYUE9SVDogJ0Vrc3BvcnQgYXYgcnV0ZWRhdGEgJyxcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogJ1ZhbGlkZXJpbmcgYXYga29tcGxldHQgZGF0YW9tcsOlZGUgbml2w6UgMScsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6ICdWYWxpZGVyaW5nIGF2IGtvbXBsZXR0IGRhdGFvbXLDpWRlIG5pdsOlIDInLFxuICAgICAgREFUQVNQQUNFX1RSQU5TRkVSOiAnT3ZlcmbDuHJpbmcgdGlsIHNlbnRyYWx0IGRhdGFiYXNlb21yw6VkZSBuaXbDpSAyJyxcbiAgICAgIEJVSUxEX0dSQVBIOiAnQnlnZyBhdiByZWlzZXPDuGtmb3JzbGFnJyxcbiAgICAgIFVOS05PV046ICdEZXR0ZSBzdGVnZXQgZXIgdWtqZW50J1xuICAgIH0sXG4gICAgZmlsZW5hbWU6IHtcbiAgICAgIHVuZGVmaW5lZDogJ1ZhbGlkZXJpbmcnXG4gICAgfSxcbiAgICBzdGF0ZXM6IHtcbiAgICAgIE9LOiAnRnVsbGbDuHJ0JyxcbiAgICAgIFBFTkRJTkc6ICdWZW50ZXInLFxuICAgICAgU1RBUlRFRDogJ1DDpWJlZ3ludCcsXG4gICAgICBGQUlMRUQ6ICdGZWlsJyxcbiAgICAgIERVUExJQ0FURTogJ0ZlaWwgLSBkdXBsaWthdCBkYXRhc2V0dCcsXG4gICAgICBJR05PUkVEOiAnSWtrZSBnamVubm9tZsO4cnQnLFxuICAgICAgQ0FOQ0VMTEVEOiAnS2Fuc2VsbGVydCcsXG4gICAgICBUSU1FT1VUOiAnVGlkc2F2YnJ1ZGQnXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6ICdGaWxvdmVyZsO4cmluZyBmZWlsZXQnLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZpbGtsYXNzaWZpc2VyaW5nIGZlaWxldCdcbiAgICB9LFxuICAgIGZpbHRlckJ1dHRvbjoge1xuICAgICAgQUxMX1RJTUU6ICdVYmVncmVuc2V0JyxcbiAgICAgIExBU1RfMTJfSE9VUlM6ICdTaXN0ZSAxMiB0aW1lbmUnLFxuICAgICAgTEFTVF8yNF9IT1VSUzogJ1Npc3RlIGTDuGduJyxcbiAgICAgIExBU1RfV0VFSzogJ1Npc3RlIHVrZScsXG4gICAgICBMQVNUX01PTlRIOiAnU2lzdGUgbcOlbmVkJ1xuICAgIH1cbiAgfSxcbiAgZW46IHtcbiAgICB0ZXh0OiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmlsZSB0cmFuc2ZlcicsXG4gICAgICBGSUxFX0NMQVNTSUZJQ0FUSU9OOiAnRmlsZSBjbGFzc2lmaWNhdGlvbicsXG4gICAgICBGSUxFX0RFTElWRVJZOiAnRmlsZSBkZWxpdmVyeScsXG4gICAgICBJTVBPUlQ6ICdJbXBvcnQnLFxuICAgICAgRVhQT1JUOiAnR1RGUyBleHBvcnQnLFxuICAgICAgRVhQT1JUX05FVEVYOiAnTmVURXggZXhwb3J0JyxcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogJ1ZhbGlkYXRpb24gbGV2ZWwgMScsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6ICdUcmFuc2ZlciB0byBjZW50cmFsIHNwYWNlJyxcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMjogJ1ZhbGlkYXRpb24gbGV2ZWwgMicsXG4gICAgICBCVUlMRF9HUkFQSDogJ0J1aWxkIGdyYXBoJyxcbiAgICAgIFVOS05PV046ICdVa25vd24gc3RlcCdcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnVXBsb2FkIGxvY2FsIGZpbGUgdG8gcmVtb3RlIHNlcnZlcicsXG4gICAgICBJTVBPUlQ6ICdGaWxlIHZhbGlkYXRpb24gYW5kIGltcG9ydCBpbiBsb2NhbCBkYXRhIHNwYWNlIC0gbGV2ZWwgMScsXG4gICAgICBFWFBPUlQ6ICdFeHBvcnQgb2Ygcm91dGUgZGF0YSAnLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8xOiAnVmFsaWRhdGlvbiBvZiBjb21wbGV0ZSBkYXRhIHNwYWNlIC0gbGV2ZWwgMScsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6ICdWYWxpZGF0aW9uIG9mIGNvbXBsZXRlIGRhdGEgc3BhY2UgLSBsZXZlbCAyJyxcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogJ1RyYW5zZmVyIHRvIGNlbnRyYWwgZGF0YXNwYWNlIC0gbGV2ZWwgMicsXG4gICAgICBCVUlMRF9HUkFQSDogJ0J1aWxkIGdyYXBoJyxcbiAgICAgIFVOS05PV046ICdUaGlzIHN0ZXAgaXMgdWtub3duJ1xuICAgIH0sXG4gICAgZmlsZW5hbWU6IHtcbiAgICAgIHVuZGVmaW5lZDogJ1ZhbGlkYXRpb24nXG4gICAgfSxcbiAgICBzdGF0ZXM6IHtcbiAgICAgIE9LOiAnQ29tcGxldGVkJyxcbiAgICAgIFBFTkRJTkc6ICdQZW5kaW5nJyxcbiAgICAgIFNUQVJURUQ6ICdTdGFydGVkJyxcbiAgICAgIEZBSUxFRDogJ0ZhaWxlZCcsXG4gICAgICBEVVBMSUNBVEU6ICdGYWlsZWQgLSBkdXBsaWNhdGUgZGF0YSBzZXQnLFxuICAgICAgSUdOT1JFRDogJ1NraXBwZWQnLFxuICAgICAgQ0FOQ0VMTEVEOiAnQ2FuY2VsbGVkJyxcbiAgICAgIFRJTUVPVVQ6ICdUaW1lb3V0J1xuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmFpbGVkIHRvIHRyYW5zZmVyIGZpbGUnLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZhaWxlZCBvbiBmaWxlIGNsYXNzaWZpY2F0aW9uJ1xuICAgIH0sXG4gICAgZmlsdGVyQnV0dG9uOiB7XG4gICAgICBBTExfVElNRTogJ1VubGltaXRlZCcsXG4gICAgICBMQVNUXzEyX0hPVVJTOiAnTGFzdCAxMiBob3VycycsXG4gICAgICBMQVNUXzI0X0hPVVJTOiAnTGFzdCAyNCBob3VycycsXG4gICAgICBMQVNUX1dFRUs6ICdMYXN0IHdlZWsnLFxuICAgICAgTEFTVF9NT05USDogJ0xhc3QgbW9udGgnXG4gICAgfVxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYWN0aW9uVHJhbnNsYXRpb25zLmpzIiwiY29uc3QgYnV0dG9uQ29uZmlnID0ge1xuICBmaWVsZHM6IFtcbiAgICB7XG4gICAgICBpZDogJ0xBU1RfMTJfSE9VUlMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0xBU1RfMjRfSE9VUlMnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0xBU1RfV0VFSydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnTEFTVF9NT05USCdcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnQUxMX1RJTUUnXG4gICAgfVxuICBdXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGFzdFZhbGlkRGF0ZSA9IGlkID0+IHtcbiAgc3dpdGNoIChpZCkge1xuICAgIGNhc2UgJ0FMTF9USU1FJzpcbiAgICAgIHJldHVybiBudWxsO1xuICAgIGNhc2UgJ0xBU1RfTU9OVEgnOiB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShub3cuc2V0TW9udGgobm93LmdldE1vbnRoKCkgLSAxKSk7XG4gICAgfVxuICAgIGNhc2UgJ0xBU1RfV0VFSyc6IHtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCkgLSA3KSk7XG4gICAgfVxuICAgIGNhc2UgJ0xBU1RfMTJfSE9VUlMnOiB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShub3cuc2V0SG91cnMobm93LmdldEhvdXJzKCkgLSAxMikpO1xuICAgIH1cbiAgICBjYXNlICdMQVNUXzI0X0hPVVJTJzoge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldERhdGUobm93LmdldERhdGUoKSAtIDEpKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1dHRvbkNvbmZpZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2J1dHRvbkNvbmZpZy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgXCJlblwiOiB7XG4gICAgcGFnZTogJ1BhZ2U6ICcsXG4gICAgbm9fc3RhdHVzOiAnTm8gcmVzdWx0IHdpdGggYXBwbGllZCBmaWx0ZXInLFxuICAgIHN0YXJ0ZWQ6ICdTdGFydGVkJyxcbiAgICBlbmRlZDogJ0VuZGVkJyxcbiAgICBkdXJhdGlvbjogJ0R1cmF0aW9uOiAnLFxuICAgIHNob3dfYWxsOiAnU2hvdyBhbGwnLFxuICAgIHNob3dfb25seV9mYWlsZWQ6ICdTaG93IG9ubHkgZmFpbGVkJyxcbiAgICBzaG93X29ubHlfc3VjY2VzczogJ1Nob3cgb25seSBzdWNjZXNzZnVsJyxcbiAgICBzaG93X29ubHlfY2FuY2VsbGVkOiBcIlNob3cgb25seSBjYW5jZWxsZWRcIixcbiAgICBmaWx0ZXJfZGlyZWN0X2RlbGl2ZXJ5OiBcIk9ubHkgc3RhcnRlZCB3aXRoIGZpbGUgZGVsaXZlcnlcIlxuICB9LFxuICBcIm5iXCI6IHtcbiAgICBwYWdlOiAnU2lkZTogJyxcbiAgICBub19zdGF0dXM6ICdJbmdlbiByZXN1bHRhdGVyIG1lZCB2YWxndCBmaWx0ZXInLFxuICAgIHN0YXJ0ZWQ6ICdCZWd5bnRlJyxcbiAgICBlbmRlZDogJ0F2c2x1dHRldCcsXG4gICAgZHVyYXRpb246ICdWYXJpZ2hldCcsXG4gICAgc2hvd19hbGw6ICdWaXMgYWxsZScsXG4gICAgc2hvd19vbmx5X2ZhaWxlZDogJ1ZpcyBrdW4gZmVpbGV0JyxcbiAgICBzaG93X29ubHlfc3VjY2VzczogJ1ZpcyBrdW4gdmVsbHlra2V0JyxcbiAgICBzaG93X29ubHlfY2FuY2VsbGVkOiBcIlZpcyBrdW4ga2Fuc2VsbGVydGVcIixcbiAgICBmaWx0ZXJfZGlyZWN0X2RlbGl2ZXJ5OiBcIkt1biBzdGFydGV0IHZlZCBmaWxsZXZlcmFuc2VcIlxuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RyYW5zbGF0aW9ucy5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0XHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdFx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlciBcblx0XHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0XHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0XHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG5cdH0pLFxuXHRnZXRFbGVtZW50ID0gKGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW8gPSB7fTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHRcdH07XG5cdH0pKGZ1bmN0aW9uIChzdHlsZVRhcmdldCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0eWxlVGFyZ2V0KVxuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdLFxuXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vZml4VXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0SW50byA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cdGlmICghc3R5bGVUYXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHN0eWxlVGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIHN0eWxlVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0c3R5bGVUYXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZVRhcmdldC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHN0eWxlVGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YXR0YWNoVGFnQXR0cnMoc3R5bGVFbGVtZW50LCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhdHRhY2hUYWdBdHRycyhsaW5rRWxlbWVudCwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XG5cdHJldHVybiBsaW5rRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXR0YWNoVGFnQXR0cnMoZWxlbWVudCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0LyogSWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpe1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XG5cblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKVxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBUaW1lbGluZSBmcm9tICcuL1RpbWVsaW5lJ1xuZXhwb3J0IEhlYWRlclRpbWVsaW5lIGZyb20gJy4vSGVhZGVyVGltZWxpbmUnXG5leHBvcnQgRXZlbnREZXRhaWxzIGZyb20gJy4vRXZlbnREZXRhaWxzJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDaG91ZXR0ZUxpbmsgPSAoeyBhY3Rpb24sIGlkLCByZWZlcmVudGlhbCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBiYXNlVVJMID0gYCR7d2luZG93LmNvbmZpZy5jaG91ZXR0ZUJhc2VVcmx9cmVmZXJlbnRpYWxzL2A7XG5cbiAgY29uc3QgYWN0aW9uTWFwID0ge1xuICAgIGltcG9ydGVyOiBgaW1wb3J0cy8ke2lkfS9jb21wbGlhbmNlX2NoZWNrYCxcbiAgICBleHBvcnRlcjogYGV4cG9ydHMvJHtpZH0vY29tcGxpYW5jZV9jaGVja2AsXG4gICAgdmFsaWRhdG9yOiBgY29tcGxpYW5jZV9jaGVja3MvJHtpZH0vcmVwb3J0YFxuICB9O1xuICBjb25zdCBVUkwgPSBgJHtiYXNlVVJMfSR7cmVmZXJlbnRpYWx9LyR7YWN0aW9uTWFwW2FjdGlvbl19YDtcblxuICByZXR1cm4gKFxuICAgIDxhIHRpdGxlPXtVUkx9IHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e1VSTH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9hPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hvdWV0dGVMaW5rO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ2hvdWV0dGVMaW5rLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaG91ZXR0ZUxpbmsgZnJvbSAnLi9DaG91ZXR0ZUxpbmsnO1xuXG5jb25zdCBDb250cm9sbGVkQ2hvdWV0dGVMaW5rID0gKHsgZXZlbnRzLCBpbmNsdWRlTGV2ZWwyLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGxldCBzdXBwb3J0ZWRBY3Rpb25zID0gWydJTVBPUlQnLCAnVkFMSURBVElPTl9MRVZFTF8xJ107XG5cbiAgbGV0IGNob3VldHRlTWFwID0ge1xuICAgIElNUE9SVDogJ2ltcG9ydGVyJyxcbiAgICBWQUxJREFUSU9OX0xFVkVMXzE6ICd2YWxpZGF0b3InXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVMZXZlbDIpIHtcbiAgICBzdXBwb3J0ZWRBY3Rpb25zLnB1c2goJ1ZBTElEQVRJT05fTEVWRUxfMicpO1xuICAgIHN1cHBvcnRlZEFjdGlvbnMucHVzaCgnRVhQT1JUJyk7XG4gICAgc3VwcG9ydGVkQWN0aW9ucy5wdXNoKCdFWFBPUlRfTkVURVgnKTtcbiAgICBjaG91ZXR0ZU1hcFsnVkFMSURBVElPTl9MRVZFTF8yJ10gPSAndmFsaWRhdG9yJztcbiAgICBjaG91ZXR0ZU1hcFsnRVhQT1JUJ10gPSAnZXhwb3J0ZXInO1xuICAgIGNob3VldHRlTWFwWydFWFBPUlRfTkVURVgnXSA9ICdleHBvcnRlcic7XG4gIH1cblxuICBpZiAoZXZlbnRzLnN0YXRlcyAmJiBldmVudHMuc3RhdGVzLmxlbmd0aCkge1xuICAgIGNvbnN0IGVuZFN0YXRlID0gZXZlbnRzLnN0YXRlc1tldmVudHMuc3RhdGVzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChzdXBwb3J0ZWRBY3Rpb25zLmluZGV4T2YoZW5kU3RhdGUuYWN0aW9uKSA+IC0xICYmIGVuZFN0YXRlLmNob3VldHRlSm9iSWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxDaG91ZXR0ZUxpbmtcbiAgICAgICAgICBhY3Rpb249e2Nob3VldHRlTWFwW2VuZFN0YXRlLmFjdGlvbl19XG4gICAgICAgICAgaWQ9e2VuZFN0YXRlLmNob3VldHRlSm9iSWR9XG4gICAgICAgICAgcmVmZXJlbnRpYWw9e2VuZFN0YXRlLnJlZmVyZW50aWFsfVxuICAgICAgICA+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0Nob3VldHRlTGluaz5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDxkaXY+IHtjaGlsZHJlbn0gPC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlZENob3VldHRlTGluaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZWRDaG91ZXR0ZUxpbmsuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXZlbnRTdGVwcGVyIGZyb20gJy4vRXZlbnRTdGVwcGVyJztcbmltcG9ydCAnLi9FdmVudERldGFpbHMuY3NzJztcbmNvbnN0IEZhRnJlc2ggPSByZXF1aXJlKCdyZWFjdC1pY29ucy9saWIvZmEvcmVmcmVzaCcpO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgRmlsdGVyQnV0dG9uVHJheSBmcm9tICcuL0ZpbHRlckJ1dHRvblRyYXknO1xuaW1wb3J0IHsgZ2V0TGFzdFZhbGlkRGF0ZSB9IGZyb20gJy4vYnV0dG9uQ29uZmlnJztcblxuY2xhc3MgRXZlbnREZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZVBhZ2VJbmRleDogMCxcbiAgICAgIGVuZFN0YXRlRmlsdGVyOiAnQUxMJyxcbiAgICAgIGRhdGVGaWx0ZXI6IHByb3BzLnNob3dEYXRlRmlsdGVyID8gJ0xBU1RfMTJfSE9VUlMnIDogJ0FMTF9USU1FJyxcbiAgICAgIG9ubHlOZXdEZWxpdmVyeUZpbHRlcjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlUGFnZUNsaWNrKGUsIHBhZ2VJbmRleCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2VJbmRleDogcGFnZUluZGV4XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UoZGF0ZUZpbHRlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0ZUZpbHRlcjogZGF0ZUZpbHRlcixcbiAgICAgIGFjdGl2ZVBhZ2VJbmRleDogMFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGRhdGFTb3VyY2UgPSBbXSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGluY2x1ZGVMZXZlbDIsXG4gICAgICBzaG93RGF0ZUZpbHRlcixcbiAgICAgIHNob3dOZXdEZWxpdmVyaWVzRmlsdGVyXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlUGFnZUluZGV4LFxuICAgICAgZW5kU3RhdGVGaWx0ZXIsXG4gICAgICBkYXRlRmlsdGVyLFxuICAgICAgb25seU5ld0RlbGl2ZXJ5RmlsdGVyXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBsYXN0RGF0ZSA9IGdldExhc3RWYWxpZERhdGUoZGF0ZUZpbHRlcik7XG5cbiAgICBsZXQgZmlsdGVyZWRTb3VyY2UgPSBkYXRhU291cmNlLmZpbHRlcihldmVudCA9PiB7XG4gICAgICBjb25zdCBhcHBsaWVkRmlsdGVyID0gW107XG5cbiAgICAgIC8qIEZpbHRlciBieSBkYXRlIGZyb20gcHJlLWRlZmluZWQgcGVyaW9kcyAqL1xuICAgICAgaWYgKGxhc3REYXRlKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlckJ5UGVyaW9kID0gbmV3IERhdGUoZXZlbnQuZmlyc3RFdmVudCkgPiBsYXN0RGF0ZTtcbiAgICAgICAgYXBwbGllZEZpbHRlci5wdXNoKGZpbHRlckJ5UGVyaW9kKTtcbiAgICAgIH1cblxuICAgICAgLyogRmlsdGVyIGJ5IGVuZCBzdGF0ZSBmcm9tIGRyb3Bkb3duICovXG4gICAgICBjb25zdCBlbmRTdGF0ZUZpbHRlckFwcGxpZWQgPVxuICAgICAgICBlbmRTdGF0ZUZpbHRlciA9PT0gJ0ZBSUxFRCcgfHxcbiAgICAgICAgZW5kU3RhdGVGaWx0ZXIgPT09ICdPSycgfHxcbiAgICAgICAgZW5kU3RhdGVGaWx0ZXIgPT09ICdDQU5DRUxMRUQnO1xuXG4gICAgICBpZiAoZW5kU3RhdGVGaWx0ZXJBcHBsaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlckJ5RW5kU3RhdGUgPSBldmVudC5lbmRTdGF0ZSA9PT0gZW5kU3RhdGVGaWx0ZXI7XG4gICAgICAgIGFwcGxpZWRGaWx0ZXIucHVzaChmaWx0ZXJCeUVuZFN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgLyogRmlsdGVyIGJ5IG9ubHkgbmV3IGRlbGl2ZXJpZXMgKi9cbiAgICAgIGNvbnN0IGNvbnRhaW5zRXZlbnRzID0gQXJyYXkuaXNBcnJheShldmVudC5ldmVudHMpICYmIGV2ZW50LmV2ZW50cy5sZW5ndGg7XG5cbiAgICAgIGlmIChjb250YWluc0V2ZW50cyAmJiBvbmx5TmV3RGVsaXZlcnlGaWx0ZXIpIHtcbiAgICAgICAgY29uc3QgZmlsdGVyQnlOZXdEZWxpdmVyeSA9IGV2ZW50LmV2ZW50c1swXS5hY3Rpb24gPT09ICdGSUxFX1RSQU5TRkVSJztcbiAgICAgICAgYXBwbGllZEZpbHRlci5wdXNoKGZpbHRlckJ5TmV3RGVsaXZlcnkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYXBwbGllZEZpbHRlci5ldmVyeShmaWx0ZXIgPT4gZmlsdGVyKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHBhZ2luYXRpb25NYXAgPSBnZXRQYWdpbmF0aW9uTWFwKGZpbHRlcmVkU291cmNlKTtcblxuICAgIGNvbnN0IGZpbHRlcnMgPSAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzAuOWVtJyB9fVxuICAgICAgICAgIHZhbHVlPXtlbmRTdGF0ZUZpbHRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgZW5kU3RhdGVGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICBhY3RpdmVQYWdlSW5kZXg6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUxMXCI+e3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfYWxsfTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPS1wiPnt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zaG93X29ubHlfc3VjY2Vzc308L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0FOQ0VMTEVEXCI+XG4gICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19vbmx5X2NhbmNlbGxlZH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRkFJTEVEXCI+XG4gICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19vbmx5X2ZhaWxlZH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIHtzaG93RGF0ZUZpbHRlciAmJiAoXG4gICAgICAgICAgPEZpbHRlckJ1dHRvblRyYXlcbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjAgfX1cbiAgICAgICAgICAgIGFjdGl2ZUJ1dHRvbklkPXt0aGlzLnN0YXRlLmRhdGVGaWx0ZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7c2hvd05ld0RlbGl2ZXJpZXNGaWx0ZXIgJiYgKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAsIHBhZGRpbmdUb3A6IDIgfX0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgaWQ9XCJkaXJlY3RfZGVsaXZlcnlcIlxuICAgICAgICAgICAgICBuYW1lPVwiZGlyZWN0X2RlbGl2ZXJ5XCJcbiAgICAgICAgICAgICAgdmFsdWU9e29ubHlOZXdEZWxpdmVyeUZpbHRlcn1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnMCAxMHB4JyB9fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBvbmx5TmV3RGVsaXZlcnlGaWx0ZXI6IGUudGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlSW5kZXg6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpcmVjdF9kZWxpdmVyeVwiPnt0cmFuc2xhdGlvbnNbbG9jYWxlXS5maWx0ZXJfZGlyZWN0X2RlbGl2ZXJ5fTwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgY29uc3QgcGFnZSA9IHBhZ2luYXRpb25NYXBbYWN0aXZlUGFnZUluZGV4XTtcblxuICAgIGNvbnN0IHJlZnJlc2hCdXR0b24gPSB0aGlzLnByb3BzLmhhbmRsZVJlZnJlc2ggJiYgKFxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTUsIGZsb2F0OiAncmlnaHQnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgPEZhRnJlc2hcbiAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06ICdzY2FsZSgxLjUpJyB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlUmVmcmVzaH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBpZiAocGFnZSAmJiBwYWdlLmxlbmd0aCAmJiBwYWdpbmF0aW9uTWFwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnbGVmdCcsIG1hcmdpbkJvdHRvbTogNSB9fT5cbiAgICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZWZyZXNoQnV0dG9ufVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1saW5rLXBhcmVudFwiPlxuICAgICAgICAgICAgPHNwYW4+e3RyYW5zbGF0aW9uc1tsb2NhbGVdLnBhZ2V9PC9zcGFuPlxuICAgICAgICAgICAge3BhZ2luYXRpb25NYXAubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9XG4gICAgICAgICAgICAgICAgaW5kZXggPT0gYWN0aXZlUGFnZUluZGV4XG4gICAgICAgICAgICAgICAgICA/ICdwYWdlLWxpbmsgYWN0aXZlLWxpbmsnXG4gICAgICAgICAgICAgICAgICA6ICdwYWdlLWxpbmsgaW5hY3RpdmUtbGluayc7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNBY3RpdmV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlUGFnZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIGtleT17J2xpbmstJyArIGluZGV4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwYWdlLm1hcCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBldmVudEdyb3VwID0ge307XG5cbiAgICAgICAgICAgICAgbGlzdEl0ZW0uZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnRHcm91cFtldmVudC5hY3Rpb25dKSB7XG4gICAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0gPSB7fTtcbiAgICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXS5zdGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnRHcm91cFtldmVudC5hY3Rpb25dLnN0YXRlcy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0uZW5kU3RhdGUgPSBldmVudC5zdGF0ZTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9eydqb2JzdGF0dXMtJyArIGxpc3RJdGVtLmNob3VldHRlSm9iSWQgKyAnLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEV2ZW50U3RlcHBlclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlTGV2ZWwyPXtpbmNsdWRlTGV2ZWwyfVxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXsnZXZlbnQtZ3JvdXAtJyArIGxpc3RJdGVtLmNob3VldHRlSm9iSWQgKyAnLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzPXtldmVudEdyb3VwfVxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbT17bGlzdEl0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdsZWZ0JywgbWFyZ2luQm90dG9tOiA1IH19PlxuICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5ub19zdGF0dXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAgfX0+e3JlZnJlc2hCdXR0b259PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZ2V0UGFnaW5hdGlvbk1hcCA9IChzdGF0dXNMaXN0ID0gW10pID0+IHtcbiAgbGV0IHBhZ2luYXRpb25NYXAgPSBbXTtcblxuICBpZiAoc3RhdHVzTGlzdCAmJiBzdGF0dXNMaXN0Lmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gc3RhdHVzTGlzdC5sZW5ndGg7IGkgPCBqOyBpICs9IDEwKSB7XG4gICAgICBwYWdpbmF0aW9uTWFwLnB1c2goc3RhdHVzTGlzdC5zbGljZShpLCBpICsgMTApKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhZ2luYXRpb25NYXA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudERldGFpbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1kRXJyb3IgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2Vycm9yJztcbmltcG9ydCBNZERvbmUgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2NoZWNrLWNpcmNsZSc7XG5pbXBvcnQgTWRTY2hlZHVsZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvc2NoZWR1bGUnO1xuaW1wb3J0IEZhQ29nIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jb2cnO1xuaW1wb3J0IE1kSGVscE91dExpbmUgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2hlbHAtb3V0bGluZSc7XG5pbXBvcnQgTWRIb3VyIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9ob3VyZ2xhc3MtZW1wdHknO1xuXG5jbGFzcyBFdmVudFN0YXR1c0ljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnN0YXRlKSB7XG4gICAgICBjYXNlICdPSyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRG9uZVxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdQRU5ESU5HJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRIb3VyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ29yYW5nZScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdTVEFSVEVEJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RmFDb2dcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnIzIyNzRiNScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdGQUlMRUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEVycm9yXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdDQU5DRUxMRUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEVycm9yXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ29yYW5nZScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdEVVBMSUNBVEUnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEVycm9yXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdJR05PUkVEJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRTY2hlZHVsZVxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgJ1RJTUVPVVQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZFNjaGVkdWxlXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8TWRIZWxwT3V0TGluZSBzdHlsZT17eyBjb2xvcjogJ2dyZXknLCB3aWR0aDogMjQsIGhlaWdodDogMjIgfX0gLz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTdGF0dXNJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRTdGF0dXNJY29uLmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY3Rpb25UcmFuc2xhdGlvbnMgZnJvbSAnLi9hY3Rpb25UcmFuc2xhdGlvbnMnO1xuaW1wb3J0IEZhQ2hldnJvbkRvd24gZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tZG93bic7XG5pbXBvcnQgRmFDaGV2cm9uVXAgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tdXAnO1xuaW1wb3J0IENvbnRyb2xsZWRDaG91ZXR0ZUxpbmsgZnJvbSAnLi9Db250cm9sbGVkQ2hvdWV0dGVMaW5rJztcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IEV2ZW50U3RhdHVzSWNvbiBmcm9tICcuL0V2ZW50U3RhdHVzSWNvbic7XG5cbmNsYXNzIEV2ZW50U3RlcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleHBhbmRlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBncm91cHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBsaXN0SXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG5cbiAgZXZlbnRTdGF0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdGSUxFX1RSQU5TRkVSJyxcbiAgICAgICdGSUxFX0NMQVNTSUZJQ0FUSU9OJyxcbiAgICAgICdGSUxFX0RFTElWRVJZJyxcbiAgICAgICdJTVBPUlQnLFxuICAgICAgJ1ZBTElEQVRJT05fTEVWRUxfMScsXG4gICAgICAnREFUQVNQQUNFX1RSQU5TRkVSJyxcbiAgICAgICdWQUxJREFUSU9OX0xFVkVMXzInLFxuICAgICAgJ0VYUE9SVCcsXG4gICAgICAnQlVJTERfR1JBUEgnLFxuICAgICAgJ0VYUE9SVF9ORVRFWCdcbiAgICBdO1xuICB9XG5cbiAgYWRkVW5saXN0ZWRTdGF0ZXMoZ3JvdXBzKSB7XG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5ldmVudFN0YXRlcygpO1xuXG4gICAgbGV0IGdyb3Vwc1dpdGhVbmxpc3RlZCA9IE9iamVjdC5hc3NpZ24oe30sIGdyb3Vwcyk7XG5cbiAgICBsZXQgZmlyc3RTdGF0ZUZvdW5kID0gZmFsc2U7XG5cbiAgICBzdGF0ZXMuZm9yRWFjaChzdGF0ZSA9PiB7XG4gICAgICBpZiAoIWdyb3Vwc1dpdGhVbmxpc3RlZFtzdGF0ZV0pIHtcbiAgICAgICAgZ3JvdXBzV2l0aFVubGlzdGVkW3N0YXRlXSA9IHtcbiAgICAgICAgICBlbmRTdGF0ZTogJ0lHTk9SRUQnLFxuICAgICAgICAgIG1pc3NpbmdCZWZvcmVTdGFydFN0YXJ0OiAhZmlyc3RTdGF0ZUZvdW5kXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXJzdFN0YXRlRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGZpbmFsR3JvdXBzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHNXaXRoVW5saXN0ZWQpXG4gICAgICAuc29ydCgoa2V5MSwga2V5MikgPT4gc3RhdGVzLmluZGV4T2Yoa2V5MSkgLSBzdGF0ZXMuaW5kZXhPZihrZXkyKSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGZpbmFsR3JvdXBzW2tleV0gPSBncm91cHNXaXRoVW5saXN0ZWRba2V5XTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBmaW5hbEdyb3VwcztcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWRcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNvbWJpbmVkU3BsaXQoZm9ybWF0dGVkR3JvdXBzLCBncm91cHMsIG5hbWUpIHtcbiAgICBjb25zdCBjb21iaW5lZCA9IFtdO1xuICAgIGZvciAobGV0IGkgaW4gZ3JvdXBzKSB7XG4gICAgICBjb25zdCBncm91cCA9IGdyb3Vwc1tpXTtcbiAgICAgIGNvbWJpbmVkW2dyb3VwXSA9IGZvcm1hdHRlZEdyb3Vwc1tncm91cF07XG5cbiAgICAgIGlmIChuYW1lICE9PSBncm91cCkge1xuICAgICAgICBkZWxldGUgZm9ybWF0dGVkR3JvdXBzW2dyb3VwXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9ybWF0dGVkR3JvdXBzW25hbWVdID0gY29tYmluZWQ7XG4gIH1cblxuICBhZ2dyZWdnYXRlRmlsZUV2ZW50cyhkYXRhKSB7XG4gICAgbGV0IGdyb3VwcyA9IHsgLi4uZGF0YSB9O1xuICAgIGxldCBlbmRTdGF0ZSA9IG51bGw7XG4gICAgbGV0IGVycm9yT24gPSBudWxsO1xuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICBpZiAoZ3JvdXAgPT09ICdGSUxFX0NMQVNTSUZJQ0FUSU9OJyB8fCBncm91cCA9PT0gJ0ZJTEVfVFJBTlNGRVInKSB7XG4gICAgICAgIGVuZFN0YXRlID0gZ3JvdXBzW2dyb3VwXS5lbmRTdGF0ZTtcblxuICAgICAgICBpZiAoZW5kU3RhdGUgPT09ICdGQUlMRUQnIHx8IGVuZFN0YXRlID09PSAnRFVQTElDQVRFJykge1xuICAgICAgICAgIGVycm9yT24gPSBncm91cDtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgZ3JvdXBzW2dyb3VwXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChlbmRTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgZ3JvdXBzLkZJTEVfREVMSVZFUlkgPSB7XG4gICAgICAgIGVuZFN0YXRlOiBlcnJvck9uID8gJ0ZBSUxFRCcgOiBlbmRTdGF0ZSxcbiAgICAgICAgZXJyb3JPbixcbiAgICAgICAgbWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQ6IGVuZFN0YXRlID09ICdJR05PUkVEJyAmJiAhZXJyb3JPblxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxuXG4gIGJ1bGxldChmb3JtYXR0ZWRHcm91cHMsIGdyb3VwcywgbG9jYWxlLCBpbmNsdWRlTGV2ZWwyKSB7XG4gICAgY29uc3QgY29sdW1uU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICBoZWlnaHQ6IDQ1XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhmb3JtYXR0ZWRHcm91cHMpLm1hcCgoZ3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY29sdW1uO1xuICAgICAgbGV0IGV2ZW50ID0gZm9ybWF0dGVkR3JvdXBzW2dyb3VwXTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICAgIGNvbHVtbiA9IE9iamVjdC5rZXlzKGV2ZW50KS5tYXAoKGtleSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckV2ZW50KFxuICAgICAgICAgICAgZXZlbnRba2V5XSxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgIGluY2x1ZGVMZXZlbDJcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbiA9IHRoaXMucmVuZGVyRXZlbnQoXG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgZ3JvdXBzLFxuICAgICAgICAgIGdyb3VwLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGluZGV4ID09PSAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIGluY2x1ZGVMZXZlbDJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXsnYnVsbGV0LScgKyBpbmRleH0gc3R5bGU9e2NvbHVtblN0eWxlfT5cbiAgICAgICAgICB7Y29sdW1ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJFdmVudChcbiAgICBldmVudCxcbiAgICBncm91cHMsXG4gICAgZ3JvdXAsXG4gICAgaW5kZXgsXG4gICAgaXNGaXJzdCxcbiAgICBjb2x1bW5JbmRleCA9IDAsXG4gICAgbG9jYWxlLFxuICAgIGluY2x1ZGVMZXZlbDJcbiAgKSB7XG4gICAgY29uc3QgZ3JvdXBTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnXG4gICAgfTtcblxuICAgIGNvbnN0IGdyb3VwVGV4dCA9IHtcbiAgICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgbWFyZ2luTGVmdDogNVxuICAgIH07XG5cbiAgICBjb25zdCBsaW5rU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMTg5LCAxODksIDE4OSknLFxuICAgICAgbWFyZ2luTGVmdDogLTYsXG4gICAgICBib3JkZXJUb3BTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAxLFxuICAgICAgd2lkdGg6IDMwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcbiAgICAgIG1hcmdpbjogOCxcbiAgICAgIHRyYW5zZm9ybTogY29sdW1uSW5kZXggPiAwICYmICd0cmFuc2xhdGVZKC0wLjVlbSkgcm90YXRlKDI1ZGVnKSAnXG4gICAgfTtcblxuICAgIGlmICghQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uc3RhdGVzW2V2ZW50LmVuZFN0YXRlXSkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgdG9vbFRpcFRleHQgPSBBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5zdGF0ZXNbZXZlbnQuZW5kU3RhdGVdO1xuXG4gICAgaWYgKGV2ZW50LnN0YXRlcyAmJiBldmVudC5zdGF0ZXNbZ3JvdXBzW2dyb3VwXS5zdGF0ZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIHRvb2xUaXBUZXh0ICs9ICcgJyArIGV2ZW50LnN0YXRlc1tldmVudC5zdGF0ZXMubGVuZ3RoIC0gMV0uZGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZXJyb3JPbikge1xuICAgICAgdG9vbFRpcFRleHQgPSBBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5lcnJvck1lc3NhZ2VbZXZlbnQuZXJyb3JPbl07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e2dyb3VwU3R5bGV9IGtleT17J2dyb3VwLScgKyBncm91cCArIGluZGV4fT5cbiAgICAgICAgeyFpc0ZpcnN0ICYmIDxkaXYgc3R5bGU9e2xpbmtTdHlsZX0gLz59XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB0aXRsZT17dG9vbFRpcFRleHR9XG4gICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogZXZlbnQubWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQgPyAwLjIgOiAxIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RXZlbnRTdGF0dXNJY29uIHN0YXRlPXtldmVudC5lbmRTdGF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uZ3JvdXBUZXh0LFxuICAgICAgICAgICAgb3BhY2l0eTogZXZlbnQubWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQgPyAwLjIgOiAxXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb250cm9sbGVkQ2hvdWV0dGVMaW5rIGluY2x1ZGVMZXZlbDI9e2luY2x1ZGVMZXZlbDJ9IGV2ZW50cz17ZXZlbnR9PlxuICAgICAgICAgICAge0FjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLnRleHRbZ3JvdXBdfVxuICAgICAgICAgIDwvQ29udHJvbGxlZENob3VldHRlTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0ZXBwZXJzdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiAxMFxuICAgIH07XG5cbiAgICBjb25zdCB7IGdyb3VwcywgbGlzdEl0ZW0sIGxvY2FsZSwgaW5jbHVkZUxldmVsMiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGZvcm1hdHRlZEdyb3VwcyA9IHRoaXMuYWRkVW5saXN0ZWRTdGF0ZXMoZ3JvdXBzKTtcbiAgICBmb3JtYXR0ZWRHcm91cHMgPSB0aGlzLmFnZ3JlZ2dhdGVGaWxlRXZlbnRzKGZvcm1hdHRlZEdyb3Vwcyk7XG4gICAgdGhpcy5jcmVhdGVDb21iaW5lZFNwbGl0KFxuICAgICAgZm9ybWF0dGVkR3JvdXBzLFxuICAgICAgWydFWFBPUlRfTkVURVgnLCAnRVhQT1JUJ10sXG4gICAgICAnRVhQT1JUJ1xuICAgICk7XG4gICAgY29uc3QgYnVsbGV0cyA9IHRoaXMuYnVsbGV0KGZvcm1hdHRlZEdyb3VwcywgZ3JvdXBzLCBsb2NhbGUsIGluY2x1ZGVMZXZlbDIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXsnZXZlbnQnICsgbGlzdEl0ZW0uY2hvdWV0dGVKb2JJZH1cbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnYXV0bycsIHdpZHRoOiAnOTglJywgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVUb2dnbGVWaXNpYmlsaXR5KCl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5MZWZ0OiAtMTUgfX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgdGl0bGU9e3RyYW5zbGF0aW9uc1tsb2NhbGVdLmR1cmF0aW9uICsgbGlzdEl0ZW0uZHVyYXRpb259XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICBjb2xvcjogJyNlNTk0MDAnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IC04LFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMjBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xpc3RJdGVtLnN0YXJ0ZWR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2xpc3RJdGVtLnByb3ZpZGVyICYmXG4gICAgICAgICAgICBsaXN0SXRlbS5wcm92aWRlci5uYW1lICYmIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzAuOGVtJywgZm9udFdlaWdodDogNjAwLCBmbGV4OiAxIH19PlxuICAgICAgICAgICAgICAgIHtsaXN0SXRlbS5wcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzAuOWVtJywgZm9udFdlaWdodDogNjAwLCBmbGV4OiAyIH19PlxuICAgICAgICAgICAge2xpc3RJdGVtLmZpbGVOYW1lIHx8IEFjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLmZpbGVuYW1lLnVuZGVmaW5lZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0ZXBwZXJzdHlsZX0+XG4gICAgICAgICAge2J1bGxldHN9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBtYXJnaW5SaWdodDogMjAsIG1hcmdpblRvcDogLTUwIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWV4cGFuZGVkID8gPEZhQ2hldnJvbkRvd24gLz4gOiA8RmFDaGV2cm9uVXAgLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZXhwYW5kZWQgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgcGFkZGluZzogOCxcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnN0YXJ0ZWR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmZpcnN0RXZlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5lbmRlZH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7bGlzdEl0ZW0ubGFzdEV2ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uZHVyYXRpb259XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmR1cmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U3RlcHBlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0V2ZW50U3RlcHBlci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEZpbHRlckJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIGNvbnN0IHsgaGFuZGxlQ2xpY2ssIGlkIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChoYW5kbGVDbGljayAmJiB0eXBlb2YgaGFuZGxlQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGhhbmRsZUNsaWNrKGlkKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsYWJlbCwgYWN0aXZlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGFjdGl2ZVN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJyMyMTk2RjMnLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMTU1OTlkJ1xuICAgIH07XG4gICAgY29uc3QgaW5hY3RpdmVTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2Q4ZDhkOCdcbiAgICB9O1xuICAgIGNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcbiAgICAgIHBhZGRpbmc6ICcwLjJlbSAwLjRlbScsXG4gICAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNSUnLFxuICAgICAgbWluV2lkdGg6IDQwLFxuICAgICAgbWFyZ2luTGVmdDogMTBcbiAgICB9O1xuXG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgZGVmYXVsdFN0eWxlLFxuICAgICAgYWN0aXZlID8gYWN0aXZlU3R5bGUgOiBpbmFjdGl2ZVN0eWxlXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb2ludGVyRXZlbnRzOiAnbm9uZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsdGVyQnV0dG9uIGZyb20gJy4vRmlsdGVyQnV0dG9uJztcbmltcG9ydCBidXR0b25Db25maWcgZnJvbSAnLi9idXR0b25Db25maWcnO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL2FjdGlvblRyYW5zbGF0aW9ucyc7XG5cbmNsYXNzIEZpbHRlckJ1dHRvblRyYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvY2FsZSwgYWN0aXZlQnV0dG9uSWQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICB7YnV0dG9uQ29uZmlnLmZpZWxkcy5tYXAoZmllbGQgPT5cbiAgICAgICAgICA8RmlsdGVyQnV0dG9uXG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUJ1dHRvbklkID09PSBmaWVsZC5pZH1cbiAgICAgICAgICAgIGlkPXtmaWVsZC5pZH1cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiB7IG9uQ2hhbmdlKGZpZWxkLmlkKSB9fVxuICAgICAgICAgICAga2V5PXsnZmlsdGVyLWJ1dHRvbi0nICsgZmllbGQuaWR9XG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRpb25zW2xvY2FsZV0uZmlsdGVyQnV0dG9uW2ZpZWxkLmlkXX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCdXR0b25UcmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQnV0dG9uVHJheS5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvciwgZGltZW5zaW9uIH0gZnJvbSAnLi4vc3R5bGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlclRpbWVsaW5lLmNzcyc7XG5cbmNsYXNzIEhlYWRlclRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBob3ZlclRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRGF5c09mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRnJvbURhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBlZmZlY3RpdmVQZXJpb2RzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93VG9vbHRpcDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlVG9vbFRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWZmZWN0aXZlUGVyaW9kcywgdmFsaWREYXlzT2Zmc2V0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICBoZWlnaHQ6ICcxOHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgIHdpZHRoOiBkaW1lbnNpb24udGltZUxpbmVXaWR0aCArICclJyxcbiAgICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZm9udFNpemU6ICcwJScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH07XG5cbiAgICBsZXQgdGltZWxpbmVXcmFwcGVyID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogMlxuICAgIH07XG5cbiAgICBsZXQgdGltZUJsb2NrID0ge1xuICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVTdWNjZXNzLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGZvbnRTaXplOiAnMC44cmVtJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH07XG5cbiAgICBjb25zdCB0aXRsZVRleHQgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTBweCwgMjBweCknLFxuICAgICAgZm9udFNpemU6ICcxLjJlbScsXG4gICAgICBjb2xvcjogZWZmZWN0aXZlUGVyaW9kcy5sZW5ndGggPyBjb2xvci5lZmZlY3RpdmUgOiBjb2xvci5mYWlsLFxuICAgICAgekluZGV4OiA5OVxuICAgIH07XG5cbiAgICBjb25zdCB0b29sVGlwU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDFzJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgICBjb2xvcjogY29sb3IuZm9udC50b29sdGlwLFxuICAgICAgYmFja2dyb3VuZDogY29sb3IudG9vbHRpcCxcbiAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIHpJbmRleDogOTlcbiAgICB9O1xuXG4gICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDVweCBibGFjaycsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgaGVpZ2h0OiAxOCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xuICAgIH07XG5cbiAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXG4gICAgICB3aWR0aDogJzFweCcsXG4gICAgICBoZWlnaHQ6ICcxOHB4JyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbWFyZ2luTGVmdDogMzMgKyB2YWxpZERheXNPZmZzZXQgKyAnJSdcbiAgICB9O1xuXG4gICAgbGV0IGhvdmVyVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZHMubGVuZ3RoXG4gICAgICA/IHRoaXMucHJvcHMuaG92ZXJUZXh0XG4gICAgICA6ICdVZ3lsZGlnIGxpbmplLiBNYW5nbGVyIGRhdGEnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lV3JhcHBlcn0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17dGl0bGVUZXh0fVxuICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLmhhbmRsZVRvZ2dsZVRvb2xUaXAuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlVG9nZ2xlVG9vbFRpcC5iaW5kKHRoaXMpfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucHJvcHMubGluZX1cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VG9vbHRpcCAmJlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dG9vbFRpcFN0eWxlfT4ge2hvdmVyVGV4dH0gPC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZX0gc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgIDxkaXYga2V5PXsndGltZWxpbmUtaGVhZGVyLXdyYXBwZXInICsgdGhpcy5wcm9wcy5pbmRleH0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtoclN0eWxlfSAvPlxuICAgICAgICAgICAge2VmZmVjdGl2ZVBlcmlvZHMubWFwKChlZmZlY3RpdmVQZXJpb2QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBwZXJpb2RCbG9jayA9IHsgLi4udGltZUJsb2NrIH07XG4gICAgICAgICAgICAgIHBlcmlvZEJsb2NrLndpZHRoID1cbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAtXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArXG4gICAgICAgICAgICAgICAgJyUnO1xuXG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPVxuICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID1cbiAgICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gLVxuICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kc1tpbmRleCAtIDFdLnRpbWVsaW5lRW5kUG9zaXRpb24gK1xuICAgICAgICAgICAgICAgICAgJyUnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IGl0ZW1UZXh0ID0gZWZmZWN0aXZlUGVyaW9kLnRvO1xuXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID4gMCAmJlxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC5mcm9tLmxvY2FsZUNvbXBhcmUoZWZmZWN0aXZlUGVyaW9kLnRvKSAhPT0gMFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpdGVtVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZC5mcm9tICsgJyAtICcgKyBlZmZlY3RpdmVQZXJpb2QudG87XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXsndGltZWxpbmUtaGVhZGVyLWJsb2NrJyArIGluZGV4fSBzdHlsZT17cGVyaW9kQmxvY2t9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbVRleHR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbVRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclRpbWVsaW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGRpbWVuc2lvbiB9IGZyb20gJy4uL3N0eWxlcyc7XG5cbmNvbnN0IHBlcmlvZCA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGZyb206IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGltZWxpbmVTdGFydFBvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWVsaW5lRW5kUG9zaXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufSk7XG5cbmNvbnN0IHRpbWV0YWJsZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIG9iamVjdElkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBlcmlvZHM6IFByb3BUeXBlcy5hcnJheU9mKHBlcmlvZCkuaXNSZXF1aXJlZFxufSkuaXNSZXF1aXJlZDtcblxuY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpbWV0YWJsZXM6IFByb3BUeXBlcy5hcnJheU9mKHRpbWV0YWJsZSkuaXNSZXF1aXJlZCxcbiAgICBpc0xhc3Q6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgdmFsaWREYXlzT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aW1ldGFibGVzLCB2YWxpZERheXNPZmZzZXQsIGlzTGFzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRpbWVsaW5lU3R5bGUgPSB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVCYWNrZ3JvdW5kLFxuICAgICAgd2lkdGg6IGRpbWVuc2lvbi50aW1lTGluZVdpZHRoICsgJyUnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH07XG5cbiAgICBjb25zdCB0aW1lbGluZVdyYXBwZXIgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogaXNMYXN0ID8gMCA6IDEwXG4gICAgfTtcblxuICAgIGxldCB0aW1lQmxvY2sgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUJsb2NrQmFja2dyb3VuZCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICB9O1xuXG4gICAgbGV0IHRleHRTdHlsZSA9IHtcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgb3ZlcmZsb3c6ICd2aXNibGUnLFxuICAgICAgdGV4dFNoYWRvdzogJzBweCAwcHggNXB4IGJsYWNrJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBtYXJnaW46ICdhdXRvIDEwcHgnLFxuICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgIGZvbnRTaXplOiAnMC43ZW0nLFxuICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgfTtcblxuICAgIGxldCBoclN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9O1xuXG4gICAgaHJTdHlsZS5tYXJnaW5MZWZ0ID0gMzMgKyB2YWxpZERheXNPZmZzZXQgKyAnJSc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVXcmFwcGVyfT5cbiAgICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVTdHlsZX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17aHJTdHlsZX0gLz5cbiAgICAgICAgICB7dGltZXRhYmxlcy5tYXAodGltZXRhYmxlID0+XG4gICAgICAgICAgICB0aW1ldGFibGUucGVyaW9kcy5tYXAoKHBlcmlvZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aW1ldGFibGUub2JqZWN0SWQ7XG4gICAgICAgICAgICAgIGNvbnN0IGhvdmVyID0gYCR7dGl0bGV9IFxcbihwZXJpb2Q6ICR7cGVyaW9kLmZyb219IC0+ICR7cGVyaW9kLnRvfSlgO1xuICAgICAgICAgICAgICBsZXQgcGVyaW9kQmxvY2sgPSB7IC4uLnRpbWVCbG9jayB9O1xuICAgICAgICAgICAgICBwZXJpb2RCbG9jay53aWR0aCA9XG4gICAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gLSBwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICsgJyUnO1xuICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID0gcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJztcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9eyd0aW1ldGFibGUtcGVyaW9kLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3BlcmlvZEJsb2NrfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aG92ZXJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRTdHlsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL25vdG9zYW5za2FubmFkYS5jc3MpO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEthbm5hZGEnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzE5MTkxOTtcXG59XFxuXFxucCxoMSxoMixoMyxoNCxoNSwgc3BhbiB7XFxuICAgIGNvbG9yOiAjMTkxOTE5O1xcbn1cXG5cXG4uXzJwT1pUNk9Fd1Iydl9jaTcyVzRrb0I6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5tU0dLVmxtY1dFU2J4RUhyN0JhejIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLl8xaDlBRy1WV3hfVTQwVHhWRTAxNTVLIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLl8xak4tTjd5ZlNLWWgxS1V6cmFzNGxaIHtcXG4gICAgY29sb3I6ICMwRDNDNjE7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uXzIxcDU1Vk1fZTc1XzJpQmlyVzFNa2Yge1xcbiAgICBjb2xvcjogIzIxOTZGMztcXG59XFxuXFxuXFxuYSB7XFxuICAgIGNvbG9yOiAjMjE5NkYzO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIsIGE6Zm9jdXMge1xcbiAgICBjb2xvcjogIzE5NzZEMjtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGVyaW9kLWJsb2NrXCI6IFwiXzJwT1pUNk9Fd1Iydl9jaTcyVzRrb0JcIixcblx0XCJwYWdlLWxpbmstcGFyZW50XCI6IFwibVNHS1ZsbWNXRVNieEVIcjdCYXoyXCIsXG5cdFwicGFnZS1saW5rXCI6IFwiXzFoOUFHLVZXeF9VNDBUeFZFMDE1NUtcIixcblx0XCJhY3RpdmUtbGlua1wiOiBcIl8xak4tTjd5ZlNLWWgxS1V6cmFzNGxaXCIsXG5cdFwiaW5hY3RpdmUtbGlua1wiOiBcIl8yMXA1NVZNX2U3NV8yaUJpclcxTWtmXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcz10cnVlIS4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uXzJ0VS1mODZmXzQyZzFwVlZRWlhGWEMge1xcbiAgYmFja2dyb3VuZDogI0I5MTkxOTtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCAjQjkxOTE5KSwgY29sb3Itc3RvcCg2NiUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI2Y2ZjZmNiksIGNvbG9yLXN0b3AoMTAwJSwgI2Y2ZjZmNikpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgI0I5MTkxOSksIGNvbG9yLXN0b3AoNjYlLCAjQjkxOTE5KSwgY29sb3Itc3RvcCg2NiUsICNmNmY2ZjYpLCBjb2xvci1zdG9wKDEwMCUsICNmNmY2ZjYpKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGltZWxpbmVcIjogXCJfMnRVLWY4NmZfNDJnMXBWVlFaWEZYQ1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP21vZHVsZXM9dHJ1ZSEuL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmNzc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFDaGV2cm9uRG93biA9IGZ1bmN0aW9uIEZhQ2hldnJvbkRvd24ocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMzcuNiAxOGwtMTYuNiAxNi42cS0wLjQgMC40LTEgMC40dC0xLTAuNGwtMTYuNi0xNi42cS0wLjQtMC40LTAuNC0xdDAuNC0xbDMuNy0zLjdxMC41LTAuNCAxLTAuNHQxIDAuNGwxMS45IDExLjkgMTEuOS0xMS45cTAuNC0wLjQgMS0wLjR0MSAwLjRsMy43IDMuN3EwLjQgMC40IDAuNCAxdC0wLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDaGV2cm9uRG93bjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1kb3duLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFDaGV2cm9uVXAgPSBmdW5jdGlvbiBGYUNoZXZyb25VcChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zNy42IDI5LjdsLTMuNyAzLjdxLTAuNSAwLjQtMSAwLjR0LTEtMC40bC0xMS45LTExLjktMTEuOCAxMS45cS0wLjUgMC40LTEuMSAwLjR0LTEtMC40bC0zLjctMy43cS0wLjQtMC40LTAuNC0xdDAuNC0xbDE2LjYtMTYuNnEwLjQtMC40IDEtMC40dDEgMC40bDE2LjYgMTYuNnEwLjQgMC40IDAuNCAxdC0wLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDaGV2cm9uVXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tdXAuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUNvZyA9IGZ1bmN0aW9uIEZhQ29nKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTI1LjkgMjBxMC0yLjQtMS43LTR0LTQuMS0xLjctNCAxLjctMS43IDQgMS43IDQgNCAxLjcgNC4xLTEuNyAxLjctNHogbTExLjQtMi40djQuOXEwIDAuMy0wLjIgMC41dC0wLjQgMC4zbC00LjIgMC42cS0wLjQgMS4zLTAuOCAyLjEgMC43IDEuMSAyLjMgMy4xIDAuMyAwLjIgMC4zIDAuNXQtMC4yIDAuNXEtMC42IDAuOS0yLjIgMi40dC0yLjEgMS42cS0wLjMgMC0wLjYtMC4ybC0zLjEtMi40cS0xIDAuNS0yIDAuOS0wLjQgMy0wLjcgNC4xLTAuMSAwLjYtMC44IDAuNmgtNC45cS0wLjMgMC0wLjYtMC4xdC0wLjItMC41bC0wLjctNC4xcS0xLjEtMC40LTItMC45bC0zLjEgMi40cS0wLjIgMC4yLTAuNiAwLjItMC4zIDAtMC41LTAuMi0yLjgtMi42LTMuNy0zLjgtMC4yLTAuMi0wLjItMC41IDAtMC4yIDAuMi0wLjUgMC4zLTAuNSAxLjEtMS41dDEuMi0xLjVxLTAuNi0xLjItMC45LTIuM2wtNC4xLTAuNnEtMC4yIDAtMC40LTAuMnQtMC4yLTAuNnYtNC45cTAtMC4zIDAuMi0wLjV0MC40LTAuM2w0LjItMC43cTAuMy0xIDAuOC0yLTAuOS0xLjMtMi40LTMuMS0wLjItMC4zLTAuMi0wLjUgMC0wLjIgMC4yLTAuNSAwLjYtMC44IDIuMi0yLjR0Mi4xLTEuNnEwLjMgMCAwLjYgMC4ybDMuMSAyLjRxMS0wLjUgMi0wLjkgMC40LTMgMC43LTQuMSAwLjEtMC42IDAuOC0wLjZoNC45cTAuMyAwIDAuNiAwLjF0MC4yIDAuNWwwLjcgNC4xcTEgMC40IDIgMC45bDMuMS0yLjRxMC4yLTAuMiAwLjYtMC4yIDAuMyAwIDAuNSAwLjIgMi45IDIuNiAzLjcgMy44IDAuMiAwLjIgMC4yIDAuNSAwIDAuMi0wLjIgMC41LTAuNCAwLjUtMS4yIDEuNXQtMS4yIDEuNXEwLjYgMS4yIDEgMi4ybDQgMC43cTAuMyAwIDAuNSAwLjJ0MC4yIDAuNnonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDb2c7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NvZy5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZhUmVmcmVzaCA9IGZ1bmN0aW9uIEZhUmVmcmVzaChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zNi43IDIzLjZxMCAwLjEgMCAwLjEtMS40IDYtNiA5Ljd0LTEwLjYgMy43cS0zLjMgMC02LjQtMS4ydC01LjQtMy41bC0yLjkgMi45cS0wLjQgMC40LTEgMC40dC0xLTAuNC0wLjQtMXYtMTBxMC0wLjYgMC40LTF0MS0wLjRoMTBxMC42IDAgMSAwLjR0MC41IDEtMC41IDFsLTMgM3ExLjYgMS41IDMuNiAyLjN0NC4xIDAuOHEzIDAgNS42LTEuNHQ0LjItNHEwLjItMC40IDEuMi0yLjYgMC4xLTAuNSAwLjYtMC41aDQuM3EwLjMgMCAwLjUgMC4ydDAuMiAwLjV6IG0wLjYtMTcuOXYxMHEwIDAuNi0wLjQgMXQtMSAwLjRoLTEwcS0wLjYgMC0xLTAuNHQtMC41LTEgMC41LTFsMy0zLjFxLTMuMy0zLTcuOC0zLTIuOSAwLTUuNSAxLjR0LTQuMiA0cS0wLjIgMC40LTEuMiAyLjYtMC4yIDAuNS0wLjYgMC41aC00LjVxLTAuMyAwLTAuNS0wLjJ0LTAuMi0wLjV2LTAuMXExLjUtNiA2LTkuN3QxMC43LTMuN3EzLjMgMCA2LjQgMS4ydDUuNCAzLjVsMy0yLjlxMC40LTAuNCAxLTAuNHQxIDAuNCAwLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFSZWZyZXNoO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRDaGVja0NpcmNsZSA9IGZ1bmN0aW9uIE1kQ2hlY2tDaXJjbGUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMTYuNiAyOC40bDE1LTE1LTIuMy0yLjUtMTIuNyAxMi43LTUuOS01LjktMi4zIDIuM3ogbTMuNC0yNWM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZENoZWNrQ2lyY2xlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9jaGVjay1jaXJjbGUuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZEVycm9yID0gZnVuY3Rpb24gTWRFcnJvcihwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMS42IDIxLjZ2LTEwaC0zLjJ2MTBoMy4yeiBtMCA2Ljh2LTMuNGgtMy4ydjMuNGgzLjJ6IG0tMS42LTI1YzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kRXJyb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2Vycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRIZWxwT3V0bGluZSA9IGZ1bmN0aW9uIE1kSGVscE91dGxpbmUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMjAgMTBjMy43IDAgNi42IDMgNi42IDYuNiAwIDQuMi01IDQuNy01IDguNGgtMy4yYzAtNS40IDUtNSA1LTguNCAwLTEuOC0xLjYtMy4yLTMuNC0zLjJzLTMuNCAxLjQtMy40IDMuMmgtMy4yYzAtMy42IDIuOS02LjYgNi42LTYuNnogbTAgMjMuNGM3LjMgMCAxMy40LTYuMSAxMy40LTEzLjRzLTYuMS0xMy40LTEzLjQtMTMuNC0xMy40IDYuMS0xMy40IDEzLjQgNi4xIDEzLjQgMTMuNCAxMy40eiBtMC0zMGM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eiBtLTEuNiAyNi42di0zLjRoMy4ydjMuNGgtMy4yeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZEhlbHBPdXRsaW5lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9oZWxwLW91dGxpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZEhvdXJnbGFzc0VtcHR5ID0gZnVuY3Rpb24gTWRIb3VyZ2xhc3NFbXB0eShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMCAxOS4xbDYuNi02LjZ2LTUuOWgtMTMuMnY1Ljl6IG02LjYgOC40bC02LjYtNi42LTYuNiA2LjZ2NS45aDEzLjJ2LTUuOXogbS0xNi42LTI0LjFoMjB2MTBsLTYuNiA2LjYgNi42IDYuNnYxMGgtMjB2LTEwbDYuNi02LjYtNi42LTYuNnYtMTB6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kSG91cmdsYXNzRW1wdHk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2hvdXJnbGFzcy1lbXB0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kU2NoZWR1bGUgPSBmdW5jdGlvbiBNZFNjaGVkdWxlKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIwLjkgMTEuNnY4LjhsNy41IDQuNC0xLjMgMi4yLTguNy01LjR2LTEwaDIuNXogbS0wLjkgMjEuOGM3LjMgMCAxMy40LTYuMSAxMy40LTEzLjRzLTYuMS0xMy40LTEzLjQtMTMuNC0xMy40IDYuMS0xMy40IDEzLjQgNi4xIDEzLjQgMTMuNCAxMy40eiBtMC0zMGM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZFNjaGVkdWxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9zY2hlZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2ZpeFVybHMuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9FdmVudERldGFpbHMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0V2ZW50RGV0YWlscy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0V2ZW50RGV0YWlscy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0hlYWRlclRpbWVsaW5lLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9IZWFkZXJUaW1lbGluZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0hlYWRlclRpbWVsaW5lLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=