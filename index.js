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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconBase = function IconBase(_ref, _ref2) {
  var children = _ref.children;
  var color = _ref.color;
  var size = _ref.size;
  var style = _ref.style;

  var props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style']);

  var _ref2$reactIconBase = _ref2.reactIconBase;
  var reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;

  var computedSize = size || reactIconBase.size || '1em';
  return _react2.default.createElement('svg', _extends({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: computedSize,
    width: computedSize
  }, reactIconBase, props, {
    style: _extends({
      verticalAlign: 'middle',
      color: color || reactIconBase.color
    }, reactIconBase.style || {}, style)
  }));
};

IconBase.propTypes = {
  color: _react.PropTypes.string,
  size: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  style: _react.PropTypes.object
};

IconBase.contextTypes = {
  reactIconBase: _react.PropTypes.shape(IconBase.propTypes)
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
    secondary: '#6BBDC2' }
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
  "nb": {
    text: {
      FILE_TRANSFER: "Filoverføring",
      FILE_CLASSIFICATION: "Filklassifisering",
      FILE_DELIVERY: 'Filleveranse',
      IMPORT: "Import",
      EXPORT: "GTFS Eksport",
      EXPORT_NETEX: "NeTEx Eksport",
      VALIDATION_LEVEL_1: "Validering nivå 1",
      DATASPACE_TRANSFER: "Overføring sentral database",
      VALIDATION_LEVEL_2: "Validering nivå 2",
      BUILD_GRAPH: "Bygg av reisesøkforslag",
      UNKNOWN: "Ukjent steg"
    },
    title: {
      FILE_TRANSFER: "Overføring av fil fra lokal maskin til sentral server",
      IMPORT: "Filvalidering og import i lokalt databaseområde nivå 1",
      EXPORT: "Eksport av rutedata ",
      VALIDATION_LEVEL_1: "Validering av komplett dataområde nivå 1",
      VALIDATION_LEVEL_2: "Validering av komplett dataområde nivå 2",
      DATASPACE_TRANSFER: "Overføring til sentralt databaseområde nivå 2",
      BUILD_GRAPH: "Bygg av reisesøkforslag",
      UNKNOWN: "Dette steget er ukjent"
    },
    filename: {
      undefined: "Direkteleveranse"
    },
    states: {
      OK: "Fullført",
      PENDING: "Venter",
      STARTED: "Påbegynt",
      FAILED: "Feil",
      DUPLICATE: "Feil - duplikat datasett",
      IGNORED: "Ikke gjennomført",
      CANCELLED: "Kansellert",
      TIMEOUT: "Tidsavbrudd"
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
  "en": {
    text: {
      FILE_TRANSFER: "File transfer",
      FILE_CLASSIFICATION: "File classification",
      FILE_DELIVERY: 'File delivery',
      IMPORT: "Import",
      EXPORT: "GTFS export",
      EXPORT_NETEX: "NeTEx export",
      VALIDATION_LEVEL_1: "Validation level 1",
      DATASPACE_TRANSFER: "Transfer to central space",
      VALIDATION_LEVEL_2: "Validation level 2",
      BUILD_GRAPH: "Build graph",
      UNKNOWN: "Uknown step"
    },
    title: {
      FILE_TRANSFER: "Upload local file to remote server",
      IMPORT: "File validation and import in local data space - level 1",
      EXPORT: "Export of route data ",
      VALIDATION_LEVEL_1: "Validation of complete data space - level 1",
      VALIDATION_LEVEL_2: "Validation of complete data space - level 2",
      DATASPACE_TRANSFER: "Transfer to central dataspace - level 2",
      BUILD_GRAPH: "Build graph",
      UNKNOWN: "This step is uknown"
    },
    filename: {
      undefined: "Direct delivery"
    },
    states: {
      OK: "Completed",
      PENDING: "Pending",
      STARTED: "Started",
      FAILED: "Failed",
      DUPLICATE: "Failed - duplicate data set",
      IGNORED: "Skipped",
      CANCELLED: "Cancelled",
      TIMEOUT: "Timeout"
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
  }, { id: 'LAST_24_HOURS'
  }, {
    id: 'LAST_WEEK'
  }, {
    id: 'LAST_MONTH'
  }, { id: 'ALL_TIME'
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
    show_only_cancelled: "Show only cancelled"
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
    show_only_cancelled: "Vis kun kansellerte"
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
	fixUrls = __webpack_require__(31);

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
    "importer": "imports/" + id + "/compliance_check",
    "exporter": "exports/" + id + "/compliance_check",
    "validator": "compliance_checks/" + id + "/report"
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ChouetteLink = __webpack_require__(10);

var _ChouetteLink2 = _interopRequireDefault(_ChouetteLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlledChouetteLink = function (_React$Component) {
  _inherits(ControlledChouetteLink, _React$Component);

  function ControlledChouetteLink() {
    _classCallCheck(this, ControlledChouetteLink);

    return _possibleConstructorReturn(this, (ControlledChouetteLink.__proto__ || Object.getPrototypeOf(ControlledChouetteLink)).apply(this, arguments));
  }

  _createClass(ControlledChouetteLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          events = _props.events,
          includeLevel2 = _props.includeLevel2;


      var supportedActions = ['IMPORT', 'VALIDATION_LEVEL_1'];

      var choueteActionMap = {
        'IMPORT': 'importer',
        'VALIDATION_LEVEL_1': 'validator'
      };

      if (includeLevel2) {
        supportedActions.push('VALIDATION_LEVEL_2');
        supportedActions.push('EXPORT');
        supportedActions.push('EXPORT_NETEX');
        choueteActionMap['VALIDATION_LEVEL_2'] = 'validator';
        choueteActionMap['EXPORT'] = 'exporter';
        choueteActionMap['EXPORT_NETEX'] = 'exporter';
      }

      if (events.states && events.states.length) {
        var endState = events.states[events.states.length - 1];
        if (supportedActions.indexOf(endState.action) > -1) {
          return _react2.default.createElement(
            _ChouetteLink2.default,
            {
              action: choueteActionMap[endState.action],
              id: endState.chouetteJobId,
              referential: endState.referential
            },
            this.props.children
          );
        }
      }

      return _react2.default.createElement(
        'div',
        null,
        ' ',
        this.props.children,
        ' '
      );
    }
  }]);

  return ControlledChouetteLink;
}(_react2.default.Component);

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

__webpack_require__(32);

var _translations = __webpack_require__(5);

var _translations2 = _interopRequireDefault(_translations);

var _FilterButtonTray = __webpack_require__(16);

var _FilterButtonTray2 = _interopRequireDefault(_FilterButtonTray);

var _buttonConfig = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FaFresh = __webpack_require__(25);

var EventDetails = function (_React$Component) {
  _inherits(EventDetails, _React$Component);

  function EventDetails(props) {
    _classCallCheck(this, EventDetails);

    var _this = _possibleConstructorReturn(this, (EventDetails.__proto__ || Object.getPrototypeOf(EventDetails)).call(this, props));

    _this.state = {
      activePageIndex: 0,
      endStateFilter: 'ALL',
      dateFilter: 'LAST_12_HOURS'
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
        dateFilter: dateFilter
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
          showDateFilter = _props.showDateFilter;
      var _state = this.state,
          activePageIndex = _state.activePageIndex,
          endStateFilter = _state.endStateFilter,
          dateFilter = _state.dateFilter;


      var filteredPages = null;
      var lastDate = (0, _buttonConfig.getLastValidDate)(dateFilter);

      var filteredByDate = (dataSource || []).filter(function (event) {
        if (!lastDate) return event;
        return new Date(event.firstEvent) > lastDate;
      });

      if (endStateFilter === 'FAILED' || endStateFilter === 'OK' || endStateFilter === 'CANCELLED') {
        filteredPages = (filteredByDate || []).filter(function (event) {
          return event.endState === endStateFilter;
        });
      }

      var paginationMap = getPaginationMap(filteredPages || filteredByDate);

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
        })
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

var _error = __webpack_require__(27);

var _error2 = _interopRequireDefault(_error);

var _checkCircle = __webpack_require__(26);

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _schedule = __webpack_require__(30);

var _schedule2 = _interopRequireDefault(_schedule);

var _cog = __webpack_require__(24);

var _cog2 = _interopRequireDefault(_cog);

var _helpOutline = __webpack_require__(28);

var _helpOutline2 = _interopRequireDefault(_helpOutline);

var _hourglassEmpty = __webpack_require__(29);

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

var _chevronDown = __webpack_require__(22);

var _chevronDown2 = _interopRequireDefault(_chevronDown);

var _chevronUp = __webpack_require__(23);

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
    value: function handleToggleVisibility(id) {
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
          if (endState === 'FAILED') {
            errorOn = group;
          }
          delete groups[group];
        }
      });

      if (endState !== null) {
        groups.FILE_DELIVERY = {
          endState: endState,
          errorOn: errorOn
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

        if (event instanceof Array) {
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
      this.createCombinedSplit(formattedGroups, ['EXPORT', 'EXPORT_NETEX'], 'EXPORT');
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
              lineHeight: '25px',
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

var _HeaderTimeline = __webpack_require__(33);

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

exports = module.exports = __webpack_require__(6)(undefined);
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

exports = module.exports = __webpack_require__(6)(undefined);
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwZmUyMjNiYjNmM2Q5YmJhNzZlYyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjdGlvblRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhbnNsYXRpb25zLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Nob3VldHRlTGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVkQ2hvdWV0dGVMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudFN0YXR1c0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRTdGVwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCdXR0b25UcmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLXVwLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2NoZWNrLWNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9oZWxwLW91dGxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQvaG91cmdsYXNzLWVtcHR5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL3NjaGVkdWxlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2ZpeFVybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzcz81Y2MxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmNzcz8yNzdhIl0sIm5hbWVzIjpbImNvbG9yRGVmIiwiYmxhY2siLCJ3aGl0ZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImJpZ2JsdWUiLCJkYXJrQmx1ZSIsImRhcmtHcmV5IiwiZ3JleSIsImxpZ2h0R3JleSIsImVudHVyIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImNvbG9yIiwiZm9udCIsImludmVyc2UiLCJ0aXRsZSIsImluZm8xIiwiaW5mbzIiLCJpbmZvMyIsIndhcm4iLCJkaXNhYmxlZCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiZWZmZWN0aXZlIiwiZmFpbCIsIm1vZGFsIiwiYmFja2Ryb3AiLCJ0YWJBY3RpdmUiLCJ0aW1lTGluZUJhY2tncm91bmQiLCJ0aW1lTGluZUJsb2NrQmFja2dyb3VuZCIsInRpbWVMaW5lQm9yZGVyIiwidGltZUxpbmVTdWNjZXNzIiwidGltZUxpbmVGYWlsIiwidGFibGVIZWFkZXIiLCJ0YWJsZVJvdyIsInRhYmxlSW5mbyIsInZhbGlkIiwiaW52YWxpZCIsImV4cGlyaW5nIiwiaGlnaGxpZ2h0IiwiZGltZW5zaW9uIiwidGltZUxpbmVXaWR0aCIsInN0eWxlcyIsInRleHQiLCJGSUxFX1RSQU5TRkVSIiwiRklMRV9DTEFTU0lGSUNBVElPTiIsIkZJTEVfREVMSVZFUlkiLCJJTVBPUlQiLCJFWFBPUlQiLCJFWFBPUlRfTkVURVgiLCJWQUxJREFUSU9OX0xFVkVMXzEiLCJEQVRBU1BBQ0VfVFJBTlNGRVIiLCJWQUxJREFUSU9OX0xFVkVMXzIiLCJCVUlMRF9HUkFQSCIsIlVOS05PV04iLCJmaWxlbmFtZSIsInVuZGVmaW5lZCIsInN0YXRlcyIsIk9LIiwiUEVORElORyIsIlNUQVJURUQiLCJGQUlMRUQiLCJEVVBMSUNBVEUiLCJJR05PUkVEIiwiQ0FOQ0VMTEVEIiwiVElNRU9VVCIsImVycm9yTWVzc2FnZSIsImZpbHRlckJ1dHRvbiIsIkFMTF9USU1FIiwiTEFTVF8xMl9IT1VSUyIsIkxBU1RfMjRfSE9VUlMiLCJMQVNUX1dFRUsiLCJMQVNUX01PTlRIIiwiYnV0dG9uQ29uZmlnIiwiZmllbGRzIiwiaWQiLCJnZXRMYXN0VmFsaWREYXRlIiwibm93IiwiRGF0ZSIsInNldE1vbnRoIiwiZ2V0TW9udGgiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJwYWdlIiwibm9fc3RhdHVzIiwic3RhcnRlZCIsImVuZGVkIiwiZHVyYXRpb24iLCJzaG93X2FsbCIsInNob3dfb25seV9mYWlsZWQiLCJzaG93X29ubHlfc3VjY2VzcyIsInNob3dfb25seV9jYW5jZWxsZWQiLCJUaW1lbGluZSIsIkhlYWRlclRpbWVsaW5lIiwiRXZlbnREZXRhaWxzIiwiQ2hvdWV0dGVMaW5rIiwiYWN0aW9uIiwicmVmZXJlbnRpYWwiLCJjaGlsZHJlbiIsImJhc2VVUkwiLCJ3aW5kb3ciLCJjb25maWciLCJjaG91ZXR0ZUJhc2VVcmwiLCJhY3Rpb25NYXAiLCJVUkwiLCJDb250cm9sbGVkQ2hvdWV0dGVMaW5rIiwicHJvcHMiLCJldmVudHMiLCJpbmNsdWRlTGV2ZWwyIiwic3VwcG9ydGVkQWN0aW9ucyIsImNob3VldGVBY3Rpb25NYXAiLCJwdXNoIiwibGVuZ3RoIiwiZW5kU3RhdGUiLCJpbmRleE9mIiwiY2hvdWV0dGVKb2JJZCIsIkNvbXBvbmVudCIsIkZhRnJlc2giLCJyZXF1aXJlIiwic3RhdGUiLCJhY3RpdmVQYWdlSW5kZXgiLCJlbmRTdGF0ZUZpbHRlciIsImRhdGVGaWx0ZXIiLCJlIiwicGFnZUluZGV4IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImRhdGFTb3VyY2UiLCJsb2NhbGUiLCJzaG93RGF0ZUZpbHRlciIsImZpbHRlcmVkUGFnZXMiLCJsYXN0RGF0ZSIsImZpbHRlcmVkQnlEYXRlIiwiZmlsdGVyIiwiZXZlbnQiLCJmaXJzdEV2ZW50IiwicGFnaW5hdGlvbk1hcCIsImdldFBhZ2luYXRpb25NYXAiLCJmaWx0ZXJzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luTGVmdCIsImhhbmRsZUZpbHRlckNoYW5nZSIsImJpbmQiLCJyZWZyZXNoQnV0dG9uIiwiaGFuZGxlUmVmcmVzaCIsIm1hcmdpblJpZ2h0IiwiZmxvYXQiLCJjdXJzb3IiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImluZGV4IiwiaXNBY3RpdmUiLCJoYW5kbGVQYWdlQ2xpY2siLCJsaXN0SXRlbSIsImV2ZW50R3JvdXAiLCJmb3JFYWNoIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImZvbnRXZWlnaHQiLCJzdGF0dXNMaXN0IiwiaSIsImoiLCJzbGljZSIsIkV2ZW50U3RhdHVzSWNvbiIsImhlaWdodCIsIkV2ZW50U3RlcHBlciIsImV4cGFuZGVkIiwiZ3JvdXBzIiwiZXZlbnRTdGF0ZXMiLCJncm91cHNXaXRoVW5saXN0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJmaXJzdFN0YXRlRm91bmQiLCJtaXNzaW5nQmVmb3JlU3RhcnRTdGFydCIsImZpbmFsR3JvdXBzIiwia2V5cyIsInNvcnQiLCJrZXkxIiwia2V5MiIsImtleSIsImZvcm1hdHRlZEdyb3VwcyIsIm5hbWUiLCJjb21iaW5lZCIsImdyb3VwIiwiZGF0YSIsImVycm9yT24iLCJjb2x1bW5TdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImNvbHVtbiIsIkFycmF5IiwicmVuZGVyRXZlbnQiLCJpc0ZpcnN0IiwiY29sdW1uSW5kZXgiLCJncm91cFN0eWxlIiwiZ3JvdXBUZXh0IiwibGlua1N0eWxlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJUb3BTdHlsZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwidG9vbFRpcFRleHQiLCJkYXRlIiwib3BhY2l0eSIsInN0ZXBwZXJzdHlsZSIsImFsaWduQ29udGVudCIsImFkZFVubGlzdGVkU3RhdGVzIiwiYWdncmVnZ2F0ZUZpbGVFdmVudHMiLCJjcmVhdGVDb21iaW5lZFNwbGl0IiwiYnVsbGV0cyIsImJ1bGxldCIsImhhbmRsZVRvZ2dsZVZpc2liaWxpdHkiLCJwcm92aWRlciIsImZsZXgiLCJmaWxlTmFtZSIsImxpbmVIZWlnaHQiLCJzdG9wUHJvcGFnYXRpb24iLCJsYXN0RXZlbnQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiRmlsdGVyQnV0dG9uIiwiaGFuZGxlQ2xpY2siLCJsYWJlbCIsImFjdGl2ZSIsImFjdGl2ZVN0eWxlIiwiaW5hY3RpdmVTdHlsZSIsImRlZmF1bHRTdHlsZSIsIm1pbldpZHRoIiwiYnV0dG9uU3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiRmlsdGVyQnV0dG9uVHJheSIsImFjdGl2ZUJ1dHRvbklkIiwib25DaGFuZ2UiLCJzdHlsZSIsImZpZWxkIiwic2hvd1Rvb2x0aXAiLCJlZmZlY3RpdmVQZXJpb2RzIiwidmFsaWREYXlzT2Zmc2V0IiwidGltZWxpbmVTdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJ0aW1lbGluZVdyYXBwZXIiLCJ0aW1lQmxvY2siLCJ0aXRsZVRleHQiLCJ6SW5kZXgiLCJ0b29sVGlwU3R5bGUiLCJ0cmFuc2l0aW9uIiwidGV4dFN0eWxlIiwidGV4dFNoYWRvdyIsIndoaXRlU3BhY2UiLCJ0ZXh0T3ZlcmZsb3ciLCJoclN0eWxlIiwiaG92ZXJUZXh0IiwiaGFuZGxlVG9nZ2xlVG9vbFRpcCIsImxpbmUiLCJ0aW1lbGluZSIsImVmZmVjdGl2ZVBlcmlvZCIsInBlcmlvZEJsb2NrIiwidGltZWxpbmVFbmRQb3NpdGlvbiIsInRpbWVsaW5lU3RhcnRQb3NpdGlvbiIsIml0ZW1UZXh0IiwidG8iLCJmcm9tIiwibG9jYWxlQ29tcGFyZSIsInZlcnRpY2FsQWxpZ24iLCJzdHJpbmciLCJudW1iZXIiLCJ2YWxpZEZyb21EYXRlIiwiYXJyYXkiLCJwZXJpb2QiLCJzaGFwZSIsInRpbWV0YWJsZSIsIm9iamVjdElkIiwicGVyaW9kcyIsImFycmF5T2YiLCJ0aW1ldGFibGVzIiwiaXNMYXN0Iiwib3ZlcmZsb3dZIiwicGFkZGluZ0JvdHRvbSIsImhvdmVyIiwiYm9vbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7O0FDeEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwZmUyMjNiYjNmM2Q5YmJhNzZlYyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIEljb25CYXNlID0gZnVuY3Rpb24gSWNvbkJhc2UoX3JlZiwgX3JlZjIpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIGNvbG9yID0gX3JlZi5jb2xvcjtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemU7XG4gIHZhciBzdHlsZSA9IF9yZWYuc3R5bGU7XG5cbiAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2hpbGRyZW4nLCAnY29sb3InLCAnc2l6ZScsICdzdHlsZSddKTtcblxuICB2YXIgX3JlZjIkcmVhY3RJY29uQmFzZSA9IF9yZWYyLnJlYWN0SWNvbkJhc2U7XG4gIHZhciByZWFjdEljb25CYXNlID0gX3JlZjIkcmVhY3RJY29uQmFzZSA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmMiRyZWFjdEljb25CYXNlO1xuXG4gIHZhciBjb21wdXRlZFNpemUgPSBzaXplIHx8IHJlYWN0SWNvbkJhc2Uuc2l6ZSB8fCAnMWVtJztcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzdmcnLCBfZXh0ZW5kcyh7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBtZWV0JyxcbiAgICBoZWlnaHQ6IGNvbXB1dGVkU2l6ZSxcbiAgICB3aWR0aDogY29tcHV0ZWRTaXplXG4gIH0sIHJlYWN0SWNvbkJhc2UsIHByb3BzLCB7XG4gICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgY29sb3I6IGNvbG9yIHx8IHJlYWN0SWNvbkJhc2UuY29sb3JcbiAgICB9LCByZWFjdEljb25CYXNlLnN0eWxlIHx8IHt9LCBzdHlsZSlcbiAgfSkpO1xufTtcblxuSWNvbkJhc2UucHJvcFR5cGVzID0ge1xuICBjb2xvcjogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IF9yZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QuUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0LlByb3BUeXBlcy5udW1iZXJdKSxcbiAgc3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuXG5JY29uQmFzZS5jb250ZXh0VHlwZXMgPSB7XG4gIHJlYWN0SWNvbkJhc2U6IF9yZWFjdC5Qcm9wVHlwZXMuc2hhcGUoSWNvbkJhc2UucHJvcFR5cGVzKVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSWNvbkJhc2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmNvbnN0IGNvbG9yRGVmID0ge1xuICBibGFjazogJyMwMDAnLFxuICB3aGl0ZTogJyNGRkYnLFxuICByZWQ6ICcjRjAwJyxcbiAgZ3JlZW46ICcjMEYwJyxcbiAgYmx1ZTogJyMwMEYnLFxuICBiaWdibHVlOiAnIzExNjlBNycsXG4gIGRhcmtCbHVlOiAnIzA4MzQ1MycsXG4gIGRhcmtHcmV5OiAnIzJGMkYyRicsXG4gIGdyZXk6ICcjREREREREJyxcbiAgbGlnaHRHcmV5OiAnI0YyRjJGMicsXG4gIGVudHVyOiB7XG4gICAgcHJpbWFyeTogJyMyNzNBNDYnLCAgIC8vIDM5LDU4LDcwXG4gICAgc2Vjb25kYXJ5OiAnIzZCQkRDMicsIC8vMTA3LDE4OSwxOTQsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbG9yID0ge1xuICBmb250OiB7XG4gICAgaW52ZXJzZTogY29sb3JEZWYud2hpdGUsXG4gICAgdGl0bGU6IGNvbG9yRGVmLmJsYWNrLFxuICAgIGluZm8xOiBjb2xvckRlZi5lbnR1ci5zZWNvbmRhcnksXG4gICAgaW5mbzI6IGNvbG9yRGVmLmRhcmtCbHVlLFxuICAgIGluZm8zOiBjb2xvckRlZi5ibGFjayxcbiAgICB3YXJuOiBjb2xvckRlZi5yZWQsXG4gICAgZGlzYWJsZWQ6IGNvbG9yRGVmLmdyZXksXG5cbiAgICB0b29sdGlwOiBjb2xvckRlZi53aGl0ZSxcbiAgfSxcbiAgYmFja2dyb3VuZDogY29sb3JEZWYuZW50dXIucHJpbWFyeSxcbiAgYm9yZGVyOiBjb2xvckRlZi5ibGFjayxcbiAgZWZmZWN0aXZlOiBjb2xvckRlZi5ibGFjayxcbiAgZmFpbDogY29sb3JEZWYucmVkLFxuICBtb2RhbDogY29sb3JEZWYud2hpdGUsXG4gIGJhY2tkcm9wOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcbiAgdG9vbHRpcDogJyMxOTE5MTknLFxuICB0YWJBY3RpdmU6IGNvbG9yRGVmLmVudHVyLnNlY29uZGFyeSxcblxuICB0aW1lTGluZUJhY2tncm91bmQ6ICcjREVEOEQ4JyxcbiAgdGltZUxpbmVCbG9ja0JhY2tncm91bmQ6ICcjNkQ5MkI2JyxcbiAgdGltZUxpbmVCb3JkZXI6ICcjZWVlJyxcbiAgdGltZUxpbmVTdWNjZXNzOiAnIzVEQUU1RCcsXG4gIHRpbWVMaW5lRmFpbDogJyNCOTE5MTknLFxuICB0YWJsZUhlYWRlcjogY29sb3JEZWYubGlnaHRHcmV5LFxuICB0YWJsZVJvdzogJyNlYmYyZjEnLFxuICB0YWJsZUluZm86ICcjZmZmZmRiJyxcblxuICB2YWxpZDogJyMzM2MxNDYnLFxuICBpbnZhbGlkOiAnI2IyMDAwMCcsXG4gIGV4cGlyaW5nOiAnI0ZGQUEwMCcsXG4gIGhpZ2hsaWdodCA6IHtcbiAgICB2YWxpZDogJyM0Y2FmNTAnLFxuICAgIGV4cGlyaW5nOiAnI0ZGQjYwQScsXG4gICAgaW52YWxpZDogJyNjYzAwMDAnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkaW1lbnNpb24gPSB7XG4gIHRpbWVMaW5lV2lkdGg6IDg1LFxufVxuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICBjb2xvcjogY29sb3IsXG4gIGRpbWVuc2lvbjogZGltZW5zaW9uLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlcy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgXCJuYlwiOiB7XG4gICAgdGV4dDoge1xuICAgICAgRklMRV9UUkFOU0ZFUjogXCJGaWxvdmVyZsO4cmluZ1wiLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogXCJGaWxrbGFzc2lmaXNlcmluZ1wiLFxuICAgICAgRklMRV9ERUxJVkVSWTogJ0ZpbGxldmVyYW5zZScsXG4gICAgICBJTVBPUlQ6IFwiSW1wb3J0XCIsXG4gICAgICBFWFBPUlQ6IFwiR1RGUyBFa3Nwb3J0XCIsXG4gICAgICBFWFBPUlRfTkVURVg6IFwiTmVURXggRWtzcG9ydFwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8xOiBcIlZhbGlkZXJpbmcgbml2w6UgMVwiLFxuICAgICAgREFUQVNQQUNFX1RSQU5TRkVSOiBcIk92ZXJmw7hyaW5nIHNlbnRyYWwgZGF0YWJhc2VcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMjogXCJWYWxpZGVyaW5nIG5pdsOlIDJcIixcbiAgICAgIEJVSUxEX0dSQVBIOiBcIkJ5Z2cgYXYgcmVpc2Vzw7hrZm9yc2xhZ1wiLFxuICAgICAgVU5LTk9XTjogXCJVa2plbnQgc3RlZ1wiLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6IFwiT3ZlcmbDuHJpbmcgYXYgZmlsIGZyYSBsb2thbCBtYXNraW4gdGlsIHNlbnRyYWwgc2VydmVyXCIsXG4gICAgICBJTVBPUlQ6IFwiRmlsdmFsaWRlcmluZyBvZyBpbXBvcnQgaSBsb2thbHQgZGF0YWJhc2VvbXLDpWRlIG5pdsOlIDFcIixcbiAgICAgIEVYUE9SVDogXCJFa3Nwb3J0IGF2IHJ1dGVkYXRhIFwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8xOiBcIlZhbGlkZXJpbmcgYXYga29tcGxldHQgZGF0YW9tcsOlZGUgbml2w6UgMVwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiBcIlZhbGlkZXJpbmcgYXYga29tcGxldHQgZGF0YW9tcsOlZGUgbml2w6UgMlwiLFxuICAgICAgREFUQVNQQUNFX1RSQU5TRkVSOiBcIk92ZXJmw7hyaW5nIHRpbCBzZW50cmFsdCBkYXRhYmFzZW9tcsOlZGUgbml2w6UgMlwiLFxuICAgICAgQlVJTERfR1JBUEg6IFwiQnlnZyBhdiByZWlzZXPDuGtmb3JzbGFnXCIsXG4gICAgICBVTktOT1dOOiBcIkRldHRlIHN0ZWdldCBlciB1a2plbnRcIixcbiAgICB9LFxuICAgIGZpbGVuYW1lOiB7XG4gICAgICB1bmRlZmluZWQ6IFwiRGlyZWt0ZWxldmVyYW5zZVwiXG4gICAgfSxcbiAgICBzdGF0ZXM6IHtcbiAgICAgIE9LOiBcIkZ1bGxmw7hydFwiLFxuICAgICAgUEVORElORzogXCJWZW50ZXJcIixcbiAgICAgIFNUQVJURUQ6IFwiUMOlYmVneW50XCIsXG4gICAgICBGQUlMRUQ6IFwiRmVpbFwiLFxuICAgICAgRFVQTElDQVRFOiBcIkZlaWwgLSBkdXBsaWthdCBkYXRhc2V0dFwiLFxuICAgICAgSUdOT1JFRDogXCJJa2tlIGdqZW5ub21mw7hydFwiLFxuICAgICAgQ0FOQ0VMTEVEOiBcIkthbnNlbGxlcnRcIixcbiAgICAgIFRJTUVPVVQ6IFwiVGlkc2F2YnJ1ZGRcIixcbiAgICB9LFxuICAgIGVycm9yTWVzc2FnZToge1xuICAgICAgRklMRV9UUkFOU0ZFUjogJ0ZpbG92ZXJmw7hyaW5nIGZlaWxldCcsXG4gICAgICBGSUxFX0NMQVNTSUZJQ0FUSU9OOiAnRmlsa2xhc3NpZmlzZXJpbmcgZmVpbGV0JyxcbiAgICB9LFxuICAgIGZpbHRlckJ1dHRvbjoge1xuICAgICAgQUxMX1RJTUU6ICdVYmVncmVuc2V0JyxcbiAgICAgIExBU1RfMTJfSE9VUlM6ICdTaXN0ZSAxMiB0aW1lbmUnLFxuICAgICAgTEFTVF8yNF9IT1VSUzogJ1Npc3RlIGTDuGduJyxcbiAgICAgIExBU1RfV0VFSzogJ1Npc3RlIHVrZScsXG4gICAgICBMQVNUX01PTlRIOiAnU2lzdGUgbcOlbmVkJ1xuICAgIH1cbiAgfSxcbiAgXCJlblwiOiB7XG4gICAgdGV4dDoge1xuICAgICAgRklMRV9UUkFOU0ZFUjogXCJGaWxlIHRyYW5zZmVyXCIsXG4gICAgICBGSUxFX0NMQVNTSUZJQ0FUSU9OOiBcIkZpbGUgY2xhc3NpZmljYXRpb25cIixcbiAgICAgIEZJTEVfREVMSVZFUlk6ICdGaWxlIGRlbGl2ZXJ5JyxcbiAgICAgIElNUE9SVDogXCJJbXBvcnRcIixcbiAgICAgIEVYUE9SVDogXCJHVEZTIGV4cG9ydFwiLFxuICAgICAgRVhQT1JUX05FVEVYOiBcIk5lVEV4IGV4cG9ydFwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8xOiBcIlZhbGlkYXRpb24gbGV2ZWwgMVwiLFxuICAgICAgREFUQVNQQUNFX1RSQU5TRkVSOiBcIlRyYW5zZmVyIHRvIGNlbnRyYWwgc3BhY2VcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMjogXCJWYWxpZGF0aW9uIGxldmVsIDJcIixcbiAgICAgIEJVSUxEX0dSQVBIOiBcIkJ1aWxkIGdyYXBoXCIsXG4gICAgICBVTktOT1dOOiBcIlVrbm93biBzdGVwXCIsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgRklMRV9UUkFOU0ZFUjogXCJVcGxvYWQgbG9jYWwgZmlsZSB0byByZW1vdGUgc2VydmVyXCIsXG4gICAgICBJTVBPUlQ6IFwiRmlsZSB2YWxpZGF0aW9uIGFuZCBpbXBvcnQgaW4gbG9jYWwgZGF0YSBzcGFjZSAtIGxldmVsIDFcIixcbiAgICAgIEVYUE9SVDogXCJFeHBvcnQgb2Ygcm91dGUgZGF0YSBcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogXCJWYWxpZGF0aW9uIG9mIGNvbXBsZXRlIGRhdGEgc3BhY2UgLSBsZXZlbCAxXCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6IFwiVmFsaWRhdGlvbiBvZiBjb21wbGV0ZSBkYXRhIHNwYWNlIC0gbGV2ZWwgMlwiLFxuICAgICAgREFUQVNQQUNFX1RSQU5TRkVSOiBcIlRyYW5zZmVyIHRvIGNlbnRyYWwgZGF0YXNwYWNlIC0gbGV2ZWwgMlwiLFxuICAgICAgQlVJTERfR1JBUEg6IFwiQnVpbGQgZ3JhcGhcIixcbiAgICAgIFVOS05PV046IFwiVGhpcyBzdGVwIGlzIHVrbm93blwiLFxuICAgIH0sXG4gICAgZmlsZW5hbWU6IHtcbiAgICAgIHVuZGVmaW5lZDogXCJEaXJlY3QgZGVsaXZlcnlcIlxuICAgIH0sXG4gICAgc3RhdGVzOiB7XG4gICAgICBPSzogXCJDb21wbGV0ZWRcIixcbiAgICAgIFBFTkRJTkc6IFwiUGVuZGluZ1wiLFxuICAgICAgU1RBUlRFRDogXCJTdGFydGVkXCIsXG4gICAgICBGQUlMRUQ6IFwiRmFpbGVkXCIsXG4gICAgICBEVVBMSUNBVEU6IFwiRmFpbGVkIC0gZHVwbGljYXRlIGRhdGEgc2V0XCIsXG4gICAgICBJR05PUkVEOiBcIlNraXBwZWRcIixcbiAgICAgIENBTkNFTExFRDogXCJDYW5jZWxsZWRcIixcbiAgICAgIFRJTUVPVVQ6IFwiVGltZW91dFwiLFxuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmFpbGVkIHRvIHRyYW5zZmVyIGZpbGUnLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZhaWxlZCBvbiBmaWxlIGNsYXNzaWZpY2F0aW9uJyxcbiAgICB9LFxuICAgIGZpbHRlckJ1dHRvbjoge1xuICAgICAgQUxMX1RJTUU6ICdVbmxpbWl0ZWQnLFxuICAgICAgTEFTVF8xMl9IT1VSUzogJ0xhc3QgMTIgaG91cnMnLFxuICAgICAgTEFTVF8yNF9IT1VSUzogJ0xhc3QgMjQgaG91cnMnLFxuICAgICAgTEFTVF9XRUVLOiAnTGFzdCB3ZWVrJyxcbiAgICAgIExBU1RfTU9OVEg6ICdMYXN0IG1vbnRoJ1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hY3Rpb25UcmFuc2xhdGlvbnMuanMiLCJjb25zdCBidXR0b25Db25maWcgPSB7XG4gIGZpZWxkczogW1xuICAgIHtcbiAgICAgIGlkOiAnTEFTVF8xMl9IT1VSUydcbiAgICB9LFxuICAgIHsgaWQ6ICdMQVNUXzI0X0hPVVJTJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnTEFTVF9XRUVLJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdMQVNUX01PTlRIJ1xuICAgIH0sXG4gICAgeyBpZDogJ0FMTF9USU1FJyxcbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMYXN0VmFsaWREYXRlID0gaWQgPT4ge1xuICBzd2l0Y2ggKGlkKSB7XG4gICAgY2FzZSAnQUxMX1RJTUUnOiByZXR1cm4gbnVsbDtcbiAgICBjYXNlICdMQVNUX01PTlRIJzoge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldE1vbnRoKG5vdy5nZXRNb250aCgpIC0gMSkpO1xuICAgIH1cbiAgICBjYXNlICdMQVNUX1dFRUsnOiB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShub3cuc2V0RGF0ZShub3cuZ2V0RGF0ZSgpIC0gNykpO1xuICAgIH1cbiAgICBjYXNlICdMQVNUXzEyX0hPVVJTJzoge1xuICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5zZXRIb3Vycyhub3cuZ2V0SG91cnMoKSAtIDEyKSk7XG4gICAgfVxuICAgIGNhc2UgJ0xBU1RfMjRfSE9VUlMnOiB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShub3cuc2V0RGF0ZShub3cuZ2V0RGF0ZSgpLTEpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uQ29uZmlnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnV0dG9uQ29uZmlnLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBcImVuXCI6IHtcbiAgICBwYWdlOiAnUGFnZTogJyxcbiAgICBub19zdGF0dXM6ICdObyByZXN1bHQgd2l0aCBhcHBsaWVkIGZpbHRlcicsXG4gICAgc3RhcnRlZDogJ1N0YXJ0ZWQnLFxuICAgIGVuZGVkOiAnRW5kZWQnLFxuICAgIGR1cmF0aW9uOiAnRHVyYXRpb246ICcsXG4gICAgc2hvd19hbGw6ICdTaG93IGFsbCcsXG4gICAgc2hvd19vbmx5X2ZhaWxlZDogJ1Nob3cgb25seSBmYWlsZWQnLFxuICAgIHNob3dfb25seV9zdWNjZXNzOiAnU2hvdyBvbmx5IHN1Y2Nlc3NmdWwnLFxuICAgIHNob3dfb25seV9jYW5jZWxsZWQ6IFwiU2hvdyBvbmx5IGNhbmNlbGxlZFwiLFxuICB9LFxuICBcIm5iXCI6IHtcbiAgICBwYWdlOiAnU2lkZTogJyxcbiAgICBub19zdGF0dXM6ICdJbmdlbiByZXN1bHRhdGVyIG1lZCB2YWxndCBmaWx0ZXInLFxuICAgIHN0YXJ0ZWQ6ICdCZWd5bnRlJyxcbiAgICBlbmRlZDogJ0F2c2x1dHRldCcsXG4gICAgZHVyYXRpb246ICdWYXJpZ2hldCcsXG4gICAgc2hvd19hbGw6ICdWaXMgYWxsZScsXG4gICAgc2hvd19vbmx5X2ZhaWxlZDogJ1ZpcyBrdW4gZmVpbGV0JyxcbiAgICBzaG93X29ubHlfc3VjY2VzczogJ1ZpcyBrdW4gdmVsbHlra2V0JyxcbiAgICBzaG93X29ubHlfY2FuY2VsbGVkOiBcIlZpcyBrdW4ga2Fuc2VsbGVydGVcIixcbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy90cmFuc2xhdGlvbnMuanMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdFx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHRcdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXIgXG5cdFx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdFx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdFx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xuXHR9KSxcblx0Z2V0RWxlbWVudCA9IChmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vID0ge307XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0XHR9O1xuXHR9KShmdW5jdGlvbiAoc3R5bGVUYXJnZXQpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdHlsZVRhcmdldClcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXSxcblx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL2ZpeFVybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZih0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZih0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEludG8gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pXG5cdFx0XHRzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2Vcblx0XHRcdG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KSB7XG5cdHZhciBzdHlsZVRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXHRpZiAoIXN0eWxlVGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Bbc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHRzdHlsZVRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBzdHlsZVRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHN0eWxlVGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVUYXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRzdHlsZVRhcmdldC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGF0dGFjaFRhZ0F0dHJzKHN0eWxlRWxlbWVudCwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBsaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YXR0YWNoVGFnQXR0cnMobGlua0VsZW1lbnQsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFRhZ0F0dHJzKGVsZW1lbnQsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQsIHVwZGF0ZSwgcmVtb3ZlO1xuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXHRcdHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKTtcblx0fSBlbHNlIGlmKG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHRcdGlmKHN0eWxlRWxlbWVudC5ocmVmKVxuXHRcdFx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlRWxlbWVudC5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmtFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qIElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKXtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZihzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xuXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYylcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgVGltZWxpbmUgZnJvbSAnLi9UaW1lbGluZSdcbmV4cG9ydCBIZWFkZXJUaW1lbGluZSBmcm9tICcuL0hlYWRlclRpbWVsaW5lJ1xuZXhwb3J0IEV2ZW50RGV0YWlscyBmcm9tICcuL0V2ZW50RGV0YWlscydcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBDaG91ZXR0ZUxpbmsgPSAoeyBhY3Rpb24sIGlkLCByZWZlcmVudGlhbCwgY2hpbGRyZW4gfSkgPT4ge1xuXG4gIGNvbnN0IGJhc2VVUkwgPSBgJHt3aW5kb3cuY29uZmlnLmNob3VldHRlQmFzZVVybH1yZWZlcmVudGlhbHMvYFxuXG4gIGNvbnN0IGFjdGlvbk1hcCA9IHtcbiAgICBcImltcG9ydGVyXCI6IGBpbXBvcnRzLyR7aWR9L2NvbXBsaWFuY2VfY2hlY2tgLFxuICAgIFwiZXhwb3J0ZXJcIjogYGV4cG9ydHMvJHtpZH0vY29tcGxpYW5jZV9jaGVja2AsXG4gICAgXCJ2YWxpZGF0b3JcIjogYGNvbXBsaWFuY2VfY2hlY2tzLyR7aWR9L3JlcG9ydGBcbiAgfVxuICBjb25zdCBVUkwgPSBgJHtiYXNlVVJMfSR7cmVmZXJlbnRpYWx9LyR7YWN0aW9uTWFwW2FjdGlvbl19YFxuXG4gIHJldHVybiAoXG4gICAgPGEgdGl0bGU9e1VSTH0gdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17VVJMfT57Y2hpbGRyZW59PC9hPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENob3VldHRlTGlua1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9DaG91ZXR0ZUxpbmsuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2hvdWV0dGVMaW5rIGZyb20gJy4vQ2hvdWV0dGVMaW5rJ1xuXG5jbGFzcyBDb250cm9sbGVkQ2hvdWV0dGVMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCB7IGV2ZW50cywgaW5jbHVkZUxldmVsMiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHN1cHBvcnRlZEFjdGlvbnMgPSBbJ0lNUE9SVCcsICdWQUxJREFUSU9OX0xFVkVMXzEnXVxuXG4gICAgbGV0IGNob3VldGVBY3Rpb25NYXAgPSB7XG4gICAgICAnSU1QT1JUJzogJ2ltcG9ydGVyJyxcbiAgICAgICdWQUxJREFUSU9OX0xFVkVMXzEnOiAndmFsaWRhdG9yJyxcbiAgICB9XG5cbiAgICBpZiAoaW5jbHVkZUxldmVsMikge1xuICAgICAgc3VwcG9ydGVkQWN0aW9ucy5wdXNoKCdWQUxJREFUSU9OX0xFVkVMXzInKVxuICAgICAgc3VwcG9ydGVkQWN0aW9ucy5wdXNoKCdFWFBPUlQnKVxuICAgICAgc3VwcG9ydGVkQWN0aW9ucy5wdXNoKCdFWFBPUlRfTkVURVgnKVxuICAgICAgY2hvdWV0ZUFjdGlvbk1hcFsnVkFMSURBVElPTl9MRVZFTF8yJ10gPSAndmFsaWRhdG9yJ1xuICAgICAgY2hvdWV0ZUFjdGlvbk1hcFsnRVhQT1JUJ10gPSAnZXhwb3J0ZXInXG4gICAgICBjaG91ZXRlQWN0aW9uTWFwWydFWFBPUlRfTkVURVgnXSA9ICdleHBvcnRlcidcbiAgICB9XG5cbiAgICBpZiAoZXZlbnRzLnN0YXRlcyAmJiBldmVudHMuc3RhdGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZW5kU3RhdGUgPSBldmVudHMuc3RhdGVzW2V2ZW50cy5zdGF0ZXMubGVuZ3RoLTFdXG4gICAgICBpZiAoc3VwcG9ydGVkQWN0aW9ucy5pbmRleE9mKGVuZFN0YXRlLmFjdGlvbikgPiAtMSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDaG91ZXR0ZUxpbmtcbiAgICAgICAgICAgIGFjdGlvbj17Y2hvdWV0ZUFjdGlvbk1hcFtlbmRTdGF0ZS5hY3Rpb25dfVxuICAgICAgICAgICAgaWQ9e2VuZFN0YXRlLmNob3VldHRlSm9iSWR9XG4gICAgICAgICAgICByZWZlcmVudGlhbD17ZW5kU3RhdGUucmVmZXJlbnRpYWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyB0aGlzLnByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICA8L0Nob3VldHRlTGluaz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIDxkaXY+IHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9IDwvZGl2PlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZWRDaG91ZXR0ZUxpbmtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVkQ2hvdWV0dGVMaW5rLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV2ZW50U3RlcHBlciBmcm9tICcuL0V2ZW50U3RlcHBlcic7XG5pbXBvcnQgJy4vRXZlbnREZXRhaWxzLmNzcyc7XG5jb25zdCBGYUZyZXNoID0gcmVxdWlyZSgncmVhY3QtaWNvbnMvbGliL2ZhL3JlZnJlc2gnKTtcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IEZpbHRlckJ1dHRvblRyYXkgZnJvbSAnLi9GaWx0ZXJCdXR0b25UcmF5JztcbmltcG9ydCB7IGdldExhc3RWYWxpZERhdGUgfSBmcm9tICcuL2J1dHRvbkNvbmZpZyc7XG5cbmNsYXNzIEV2ZW50RGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVQYWdlSW5kZXg6IDAsXG4gICAgICBlbmRTdGF0ZUZpbHRlcjogJ0FMTCcsXG4gICAgICBkYXRlRmlsdGVyOiAnTEFTVF8xMl9IT1VSUydcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlUGFnZUNsaWNrKGUsIHBhZ2VJbmRleCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2VJbmRleDogcGFnZUluZGV4XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UoZGF0ZUZpbHRlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0ZUZpbHRlcjogZGF0ZUZpbHRlclxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgbG9jYWxlLCBpbmNsdWRlTGV2ZWwyLCBzaG93RGF0ZUZpbHRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2VJbmRleCwgZW5kU3RhdGVGaWx0ZXIsIGRhdGVGaWx0ZXIgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBsZXQgZmlsdGVyZWRQYWdlcyA9IG51bGw7XG4gICAgY29uc3QgbGFzdERhdGUgPSBnZXRMYXN0VmFsaWREYXRlKGRhdGVGaWx0ZXIpO1xuXG4gICAgY29uc3QgZmlsdGVyZWRCeURhdGUgPSAoZGF0YVNvdXJjZSB8fCBbXSkuZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgIGlmICghbGFzdERhdGUpIHJldHVybiBldmVudDtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShldmVudC5maXJzdEV2ZW50KSA+IGxhc3REYXRlO1xuICAgIH0pO1xuXG4gICAgaWYgKFxuICAgICAgZW5kU3RhdGVGaWx0ZXIgPT09ICdGQUlMRUQnIHx8XG4gICAgICBlbmRTdGF0ZUZpbHRlciA9PT0gJ09LJyB8fFxuICAgICAgZW5kU3RhdGVGaWx0ZXIgPT09ICdDQU5DRUxMRUQnXG4gICAgKSB7XG4gICAgICBmaWx0ZXJlZFBhZ2VzID0gKGZpbHRlcmVkQnlEYXRlIHx8IFtdKVxuICAgICAgICAuZmlsdGVyKGV2ZW50ID0+IGV2ZW50LmVuZFN0YXRlID09PSBlbmRTdGF0ZUZpbHRlcik7XG4gICAgfVxuXG4gICAgbGV0IHBhZ2luYXRpb25NYXAgPSBnZXRQYWdpbmF0aW9uTWFwKGZpbHRlcmVkUGFnZXMgfHwgZmlsdGVyZWRCeURhdGUpO1xuXG4gICAgY29uc3QgZmlsdGVycyA9IChcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMC45ZW0nIH19XG4gICAgICAgICAgdmFsdWU9e2VuZFN0YXRlRmlsdGVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBlbmRTdGF0ZUZpbHRlcjogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgIGFjdGl2ZVBhZ2VJbmRleDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBTExcIj57dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19hbGx9PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk9LXCI+e3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfb25seV9zdWNjZXNzfTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDQU5DRUxMRURcIj5cbiAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zaG93X29ubHlfY2FuY2VsbGVkfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGQUlMRURcIj5cbiAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zaG93X29ubHlfZmFpbGVkfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAge3Nob3dEYXRlRmlsdGVyICYmXG4gICAgICAgICAgPEZpbHRlckJ1dHRvblRyYXlcbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjAgfX1cbiAgICAgICAgICAgIGFjdGl2ZUJ1dHRvbklkPXt0aGlzLnN0YXRlLmRhdGVGaWx0ZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBjb25zdCBwYWdlID0gcGFnaW5hdGlvbk1hcFthY3RpdmVQYWdlSW5kZXhdO1xuXG4gICAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZVJlZnJlc2ggJiZcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDE1LCBmbG9hdDogJ3JpZ2h0JywgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgIDxGYUZyZXNoXG4gICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiAnc2NhbGUoMS41KScgfX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZVJlZnJlc2h9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj47XG5cbiAgICBpZiAocGFnZSAmJiBwYWdlLmxlbmd0aCAmJiBwYWdpbmF0aW9uTWFwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnbGVmdCcsIG1hcmdpbkJvdHRvbTogNSB9fT5cbiAgICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZWZyZXNoQnV0dG9ufVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1saW5rLXBhcmVudFwiPlxuICAgICAgICAgICAgPHNwYW4+e3RyYW5zbGF0aW9uc1tsb2NhbGVdLnBhZ2V9PC9zcGFuPlxuICAgICAgICAgICAge3BhZ2luYXRpb25NYXAubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGluZGV4ID09IGFjdGl2ZVBhZ2VJbmRleFxuICAgICAgICAgICAgICAgID8gJ3BhZ2UtbGluayBhY3RpdmUtbGluaydcbiAgICAgICAgICAgICAgICA6ICdwYWdlLWxpbmsgaW5hY3RpdmUtbGluayc7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNBY3RpdmV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlUGFnZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIGtleT17J2xpbmstJyArIGluZGV4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwYWdlLm1hcCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBldmVudEdyb3VwID0ge307XG5cbiAgICAgICAgICAgICAgbGlzdEl0ZW0uZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnRHcm91cFtldmVudC5hY3Rpb25dKSB7XG4gICAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0gPSB7fTtcbiAgICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXS5zdGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnRHcm91cFtldmVudC5hY3Rpb25dLnN0YXRlcy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0uZW5kU3RhdGUgPSBldmVudC5zdGF0ZTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9eydqb2JzdGF0dXMtJyArIGxpc3RJdGVtLmNob3VldHRlSm9iSWQgKyAnLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEV2ZW50U3RlcHBlclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlTGV2ZWwyPXtpbmNsdWRlTGV2ZWwyfVxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXsnZXZlbnQtZ3JvdXAtJyArIGxpc3RJdGVtLmNob3VldHRlSm9iSWQgKyAnLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzPXtldmVudEdyb3VwfVxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbT17bGlzdEl0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdsZWZ0JywgbWFyZ2luQm90dG9tOiA1IH19PlxuICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5ub19zdGF0dXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAgfX0+XG4gICAgICAgICAgICAgIHtyZWZyZXNoQnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZ2V0UGFnaW5hdGlvbk1hcCA9IChzdGF0dXNMaXN0ID0gW10pID0+IHtcbiAgbGV0IHBhZ2luYXRpb25NYXAgPSBbXTtcblxuICBpZiAoc3RhdHVzTGlzdCAmJiBzdGF0dXNMaXN0Lmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gc3RhdHVzTGlzdC5sZW5ndGg7IGkgPCBqOyBpICs9IDEwKSB7XG4gICAgICBwYWdpbmF0aW9uTWFwLnB1c2goc3RhdHVzTGlzdC5zbGljZShpLCBpICsgMTApKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhZ2luYXRpb25NYXA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudERldGFpbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1kRXJyb3IgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2Vycm9yJztcbmltcG9ydCBNZERvbmUgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2NoZWNrLWNpcmNsZSc7XG5pbXBvcnQgTWRTY2hlZHVsZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvc2NoZWR1bGUnO1xuaW1wb3J0IEZhQ29nIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jb2cnO1xuaW1wb3J0IE1kSGVscE91dExpbmUgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2hlbHAtb3V0bGluZSc7XG5pbXBvcnQgTWRIb3VyIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9ob3VyZ2xhc3MtZW1wdHknO1xuXG5jbGFzcyBFdmVudFN0YXR1c0ljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnN0YXRlKSB7XG4gICAgICBjYXNlICdPSyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRG9uZVxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdQRU5ESU5HJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRIb3VyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ29yYW5nZScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdTVEFSVEVEJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RmFDb2dcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnIzIyNzRiNScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdGQUlMRUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEVycm9yXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdDQU5DRUxMRUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEVycm9yXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ29yYW5nZScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdEVVBMSUNBVEUnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEVycm9yXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdJR05PUkVEJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRTY2hlZHVsZVxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgJ1RJTUVPVVQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZFNjaGVkdWxlXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8TWRIZWxwT3V0TGluZSBzdHlsZT17eyBjb2xvcjogJ2dyZXknLCB3aWR0aDogMjQsIGhlaWdodDogMjIgfX0gLz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTdGF0dXNJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRTdGF0dXNJY29uLmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY3Rpb25UcmFuc2xhdGlvbnMgZnJvbSAnLi9hY3Rpb25UcmFuc2xhdGlvbnMnO1xuaW1wb3J0IEZhQ2hldnJvbkRvd24gZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tZG93bic7XG5pbXBvcnQgRmFDaGV2cm9uVXAgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tdXAnO1xuaW1wb3J0IENvbnRyb2xsZWRDaG91ZXR0ZUxpbmsgZnJvbSAnLi9Db250cm9sbGVkQ2hvdWV0dGVMaW5rJztcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IEV2ZW50U3RhdHVzSWNvbiBmcm9tICcuL0V2ZW50U3RhdHVzSWNvbic7XG5cbmNsYXNzIEV2ZW50U3RlcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleHBhbmRlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBncm91cHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBsaXN0SXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG5cbiAgZXZlbnRTdGF0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdGSUxFX1RSQU5TRkVSJyxcbiAgICAgICdGSUxFX0NMQVNTSUZJQ0FUSU9OJyxcbiAgICAgICdGSUxFX0RFTElWRVJZJyxcbiAgICAgICdJTVBPUlQnLFxuICAgICAgJ1ZBTElEQVRJT05fTEVWRUxfMScsXG4gICAgICAnREFUQVNQQUNFX1RSQU5TRkVSJyxcbiAgICAgICdWQUxJREFUSU9OX0xFVkVMXzInLFxuICAgICAgJ0VYUE9SVCcsXG4gICAgICAnQlVJTERfR1JBUEgnLFxuICAgICAgJ0VYUE9SVF9ORVRFWCdcbiAgICBdO1xuICB9XG5cbiAgYWRkVW5saXN0ZWRTdGF0ZXMoZ3JvdXBzKSB7XG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5ldmVudFN0YXRlcygpO1xuXG4gICAgbGV0IGdyb3Vwc1dpdGhVbmxpc3RlZCA9IE9iamVjdC5hc3NpZ24oe30sIGdyb3Vwcyk7XG5cbiAgICBsZXQgZmlyc3RTdGF0ZUZvdW5kID0gZmFsc2U7XG5cbiAgICBzdGF0ZXMuZm9yRWFjaChzdGF0ZSA9PiB7XG4gICAgICBpZiAoIWdyb3Vwc1dpdGhVbmxpc3RlZFtzdGF0ZV0pIHtcbiAgICAgICAgZ3JvdXBzV2l0aFVubGlzdGVkW3N0YXRlXSA9IHtcbiAgICAgICAgICBlbmRTdGF0ZTogJ0lHTk9SRUQnLFxuICAgICAgICAgIG1pc3NpbmdCZWZvcmVTdGFydFN0YXJ0OiAhZmlyc3RTdGF0ZUZvdW5kXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXJzdFN0YXRlRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGZpbmFsR3JvdXBzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHNXaXRoVW5saXN0ZWQpXG4gICAgICAuc29ydCgoa2V5MSwga2V5MikgPT4gc3RhdGVzLmluZGV4T2Yoa2V5MSkgLSBzdGF0ZXMuaW5kZXhPZihrZXkyKSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGZpbmFsR3JvdXBzW2tleV0gPSBncm91cHNXaXRoVW5saXN0ZWRba2V5XTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBmaW5hbEdyb3VwcztcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoaWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZFxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlQ29tYmluZWRTcGxpdChmb3JtYXR0ZWRHcm91cHMsIGdyb3VwcywgbmFtZSkge1xuICAgIGNvbnN0IGNvbWJpbmVkID0gW107XG4gICAgZm9yIChsZXQgaSBpbiBncm91cHMpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBzW2ldO1xuICAgICAgY29tYmluZWRbZ3JvdXBdID0gZm9ybWF0dGVkR3JvdXBzW2dyb3VwXTtcblxuICAgICAgaWYgKG5hbWUgIT09IGdyb3VwKSB7XG4gICAgICAgIGRlbGV0ZSBmb3JtYXR0ZWRHcm91cHNbZ3JvdXBdO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3JtYXR0ZWRHcm91cHNbbmFtZV0gPSBjb21iaW5lZDtcbiAgfVxuXG4gIGFnZ3JlZ2dhdGVGaWxlRXZlbnRzKGRhdGEpIHtcbiAgICBsZXQgZ3JvdXBzID0gey4uLmRhdGF9O1xuICAgIGxldCBlbmRTdGF0ZSA9IG51bGw7XG4gICAgbGV0IGVycm9yT24gPSBudWxsO1xuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCggZ3JvdXAgPT4ge1xuICAgICAgaWYgKGdyb3VwID09PSAnRklMRV9DTEFTU0lGSUNBVElPTicgfHwgZ3JvdXAgPT09ICdGSUxFX1RSQU5TRkVSJykge1xuICAgICAgICBlbmRTdGF0ZSA9IGdyb3Vwc1tncm91cF0uZW5kU3RhdGU7XG4gICAgICAgIGlmIChlbmRTdGF0ZSA9PT0gJ0ZBSUxFRCcpIHtcbiAgICAgICAgICBlcnJvck9uID0gZ3JvdXA7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGdyb3Vwc1tncm91cF1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChlbmRTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgZ3JvdXBzLkZJTEVfREVMSVZFUlkgPSB7XG4gICAgICAgIGVuZFN0YXRlOiBlbmRTdGF0ZSxcbiAgICAgICAgZXJyb3JPbjogZXJyb3JPblxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9XG5cbiAgYnVsbGV0KGZvcm1hdHRlZEdyb3VwcywgZ3JvdXBzLCBsb2NhbGUsIGluY2x1ZGVMZXZlbDIpIHtcbiAgICBjb25zdCBjb2x1bW5TdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgIGhlaWdodDogNDVcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZvcm1hdHRlZEdyb3VwcykubWFwKChncm91cCwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBjb2x1bW47XG4gICAgICBsZXQgZXZlbnQgPSBmb3JtYXR0ZWRHcm91cHNbZ3JvdXBdO1xuXG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICBjb2x1bW4gPSBPYmplY3Qua2V5cyhldmVudCkubWFwKChrZXksIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJFdmVudChcbiAgICAgICAgICAgIGV2ZW50W2tleV0sXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICBpbmNsdWRlTGV2ZWwyXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW4gPSB0aGlzLnJlbmRlckV2ZW50KFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIGdyb3VwcyxcbiAgICAgICAgICBncm91cCxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBpbmRleCA9PT0gMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICBpbmNsdWRlTGV2ZWwyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gPGRpdiBrZXk9eydidWxsZXQtJyArIGluZGV4fSBzdHlsZT17Y29sdW1uU3R5bGV9Pntjb2x1bW59PC9kaXY+O1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyRXZlbnQoXG4gICAgZXZlbnQsXG4gICAgZ3JvdXBzLFxuICAgIGdyb3VwLFxuICAgIGluZGV4LFxuICAgIGlzRmlyc3QsXG4gICAgY29sdW1uSW5kZXggPSAwLFxuICAgIGxvY2FsZSxcbiAgICBpbmNsdWRlTGV2ZWwyXG4gICkge1xuICAgIGNvbnN0IGdyb3VwU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93J1xuICAgIH07XG5cbiAgICBjb25zdCBncm91cFRleHQgPSB7XG4gICAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICAgIG1hcmdpbkxlZnQ6IDVcbiAgICB9O1xuXG4gICAgY29uc3QgbGlua1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiKDE4OSwgMTg5LCAxODkpJyxcbiAgICAgIG1hcmdpbkxlZnQ6IC02LFxuICAgICAgYm9yZGVyVG9wU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJUb3BXaWR0aDogMSxcbiAgICAgIHdpZHRoOiAzMCxcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXG4gICAgICBtYXJnaW46IDgsXG4gICAgICB0cmFuc2Zvcm06IGNvbHVtbkluZGV4ID4gMCAmJiAndHJhbnNsYXRlWSgtMC41ZW0pIHJvdGF0ZSgyNWRlZykgJ1xuICAgIH07XG5cbiAgICBpZiAoIUFjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLnN0YXRlc1tldmVudC5lbmRTdGF0ZV0pIHJldHVybiBudWxsO1xuXG4gICAgbGV0IHRvb2xUaXBUZXh0ID0gQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uc3RhdGVzW2V2ZW50LmVuZFN0YXRlXTtcblxuICAgIGlmIChldmVudC5zdGF0ZXMgJiYgZXZlbnQuc3RhdGVzW2dyb3Vwc1tncm91cF0uc3RhdGVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICB0b29sVGlwVGV4dCArPSAnICcgKyBldmVudC5zdGF0ZXNbZXZlbnQuc3RhdGVzLmxlbmd0aCAtIDFdLmRhdGU7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmVycm9yT24pIHtcbiAgICAgIHRvb2xUaXBUZXh0ID0gQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uZXJyb3JNZXNzYWdlW2V2ZW50LmVycm9yT25dO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtncm91cFN0eWxlfSBrZXk9eydncm91cC0nICsgZ3JvdXAgKyBpbmRleH0+XG4gICAgICAgIHshaXNGaXJzdCAmJiA8ZGl2IHN0eWxlPXtsaW5rU3R5bGV9IC8+fVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdGl0bGU9e3Rvb2xUaXBUZXh0fVxuICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IGV2ZW50Lm1pc3NpbmdCZWZvcmVTdGFydFN0YXJ0ID8gMC4yIDogMSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEV2ZW50U3RhdHVzSWNvbiBzdGF0ZT17ZXZlbnQuZW5kU3RhdGV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uZ3JvdXBUZXh0LFxuICAgICAgICAgICAgb3BhY2l0eTogZXZlbnQubWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQgPyAwLjIgOiAxXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb250cm9sbGVkQ2hvdWV0dGVMaW5rIGluY2x1ZGVMZXZlbDI9e2luY2x1ZGVMZXZlbDJ9IGV2ZW50cz17ZXZlbnR9PlxuICAgICAgICAgICAge0FjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLnRleHRbZ3JvdXBdfVxuICAgICAgICAgIDwvQ29udHJvbGxlZENob3VldHRlTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0ZXBwZXJzdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiAxMFxuICAgIH07XG5cbiAgICBjb25zdCB7IGdyb3VwcywgbGlzdEl0ZW0sIGxvY2FsZSwgaW5jbHVkZUxldmVsMiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGZvcm1hdHRlZEdyb3VwcyA9IHRoaXMuYWRkVW5saXN0ZWRTdGF0ZXMoZ3JvdXBzKTtcbiAgICBmb3JtYXR0ZWRHcm91cHMgPSB0aGlzLmFnZ3JlZ2dhdGVGaWxlRXZlbnRzKGZvcm1hdHRlZEdyb3Vwcyk7XG4gICAgdGhpcy5jcmVhdGVDb21iaW5lZFNwbGl0KGZvcm1hdHRlZEdyb3VwcywgWydFWFBPUlQnLCAnRVhQT1JUX05FVEVYJ10sICdFWFBPUlQnKTtcbiAgICBjb25zdCBidWxsZXRzID0gdGhpcy5idWxsZXQoZm9ybWF0dGVkR3JvdXBzLCBncm91cHMsIGxvY2FsZSwgaW5jbHVkZUxldmVsMik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9eydldmVudCcgKyBsaXN0SXRlbS5jaG91ZXR0ZUpvYklkfVxuICAgICAgICBzdHlsZT17eyBtYXJnaW46ICdhdXRvJywgd2lkdGg6ICc5OCUnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbkxlZnQ6IC0xNSB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICB0aXRsZT17dHJhbnNsYXRpb25zW2xvY2FsZV0uZHVyYXRpb24gKyBsaXN0SXRlbS5kdXJhdGlvbn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgIGNvbG9yOiAnI2U1OTQwMCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogLTgsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGlzdEl0ZW0uc3RhcnRlZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bGlzdEl0ZW0ucHJvdmlkZXIgJiZcbiAgICAgICAgICAgIGxpc3RJdGVtLnByb3ZpZGVyLm5hbWUgJiZcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcwLjhlbScsIGZvbnRXZWlnaHQ6IDYwMCwgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLnByb3ZpZGVyLm5hbWV9XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzAuOWVtJywgZm9udFdlaWdodDogNjAwLCBmbGV4OiAyIH19PlxuICAgICAgICAgICAge2xpc3RJdGVtLmZpbGVOYW1lIHx8IEFjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLmZpbGVuYW1lLnVuZGVmaW5lZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0ZXBwZXJzdHlsZX0+XG4gICAgICAgICAge2J1bGxldHN9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBtYXJnaW5SaWdodDogMjAsIG1hcmdpblRvcDogLTUwIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWV4cGFuZGVkID8gPEZhQ2hldnJvbkRvd24gLz4gOiA8RmFDaGV2cm9uVXAgLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZXhwYW5kZWQgJiZcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjVweCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnN0YXJ0ZWR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmZpcnN0RXZlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5lbmRlZH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7bGlzdEl0ZW0ubGFzdEV2ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uZHVyYXRpb259XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmR1cmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFN0ZXBwZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudFN0ZXBwZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBGaWx0ZXJCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVDbGljaygpIHtcbiAgICBjb25zdCB7IGhhbmRsZUNsaWNrLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaGFuZGxlQ2xpY2sgJiYgdHlwZW9mIGhhbmRsZUNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBoYW5kbGVDbGljayhpZCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGFjdGl2ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhY3RpdmVTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMjE5NkYzJyxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgIzE1NTk5ZCcsXG4gICAgfTtcbiAgICBjb25zdCBpbmFjdGl2ZVN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDhkOGQ4JyxcbiAgICB9O1xuICAgIGNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcbiAgICAgIHBhZGRpbmc6ICcwLjJlbSAwLjRlbScsXG4gICAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNSUnLFxuICAgICAgbWluV2lkdGg6IDQwLFxuICAgICAgbWFyZ2luTGVmdDogMTBcbiAgICB9O1xuXG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgZGVmYXVsdFN0eWxlLFxuICAgICAgYWN0aXZlID8gYWN0aXZlU3R5bGUgOiBpbmFjdGl2ZVN0eWxlXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb2ludGVyRXZlbnRzOiAnbm9uZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsdGVyQnV0dG9uIGZyb20gJy4vRmlsdGVyQnV0dG9uJztcbmltcG9ydCBidXR0b25Db25maWcgZnJvbSAnLi9idXR0b25Db25maWcnO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL2FjdGlvblRyYW5zbGF0aW9ucyc7XG5cbmNsYXNzIEZpbHRlckJ1dHRvblRyYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvY2FsZSwgYWN0aXZlQnV0dG9uSWQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICB7YnV0dG9uQ29uZmlnLmZpZWxkcy5tYXAoZmllbGQgPT5cbiAgICAgICAgICA8RmlsdGVyQnV0dG9uXG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUJ1dHRvbklkID09PSBmaWVsZC5pZH1cbiAgICAgICAgICAgIGlkPXtmaWVsZC5pZH1cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiB7IG9uQ2hhbmdlKGZpZWxkLmlkKSB9fVxuICAgICAgICAgICAga2V5PXsnZmlsdGVyLWJ1dHRvbi0nICsgZmllbGQuaWR9XG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRpb25zW2xvY2FsZV0uZmlsdGVyQnV0dG9uW2ZpZWxkLmlkXX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCdXR0b25UcmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQnV0dG9uVHJheS5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvciwgZGltZW5zaW9uIH0gZnJvbSAnLi4vc3R5bGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlclRpbWVsaW5lLmNzcyc7XG5cbmNsYXNzIEhlYWRlclRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBob3ZlclRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRGF5c09mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRnJvbURhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBlZmZlY3RpdmVQZXJpb2RzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93VG9vbHRpcDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlVG9vbFRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWZmZWN0aXZlUGVyaW9kcywgdmFsaWREYXlzT2Zmc2V0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICBoZWlnaHQ6ICcxOHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgIHdpZHRoOiBkaW1lbnNpb24udGltZUxpbmVXaWR0aCArICclJyxcbiAgICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZm9udFNpemU6ICcwJScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH07XG5cbiAgICBsZXQgdGltZWxpbmVXcmFwcGVyID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogMlxuICAgIH07XG5cbiAgICBsZXQgdGltZUJsb2NrID0ge1xuICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVTdWNjZXNzLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGZvbnRTaXplOiAnMC44cmVtJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH07XG5cbiAgICBjb25zdCB0aXRsZVRleHQgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTBweCwgMjBweCknLFxuICAgICAgZm9udFNpemU6ICcxLjJlbScsXG4gICAgICBjb2xvcjogZWZmZWN0aXZlUGVyaW9kcy5sZW5ndGggPyBjb2xvci5lZmZlY3RpdmUgOiBjb2xvci5mYWlsLFxuICAgICAgekluZGV4OiA5OVxuICAgIH07XG5cbiAgICBjb25zdCB0b29sVGlwU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDFzJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgICBjb2xvcjogY29sb3IuZm9udC50b29sdGlwLFxuICAgICAgYmFja2dyb3VuZDogY29sb3IudG9vbHRpcCxcbiAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIHpJbmRleDogOTlcbiAgICB9O1xuXG4gICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDVweCBibGFjaycsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgaGVpZ2h0OiAxOCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xuICAgIH07XG5cbiAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXG4gICAgICB3aWR0aDogJzFweCcsXG4gICAgICBoZWlnaHQ6ICcxOHB4JyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbWFyZ2luTGVmdDogMzMgKyB2YWxpZERheXNPZmZzZXQgKyAnJSdcbiAgICB9O1xuXG4gICAgbGV0IGhvdmVyVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZHMubGVuZ3RoXG4gICAgICA/IHRoaXMucHJvcHMuaG92ZXJUZXh0XG4gICAgICA6ICdVZ3lsZGlnIGxpbmplLiBNYW5nbGVyIGRhdGEnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lV3JhcHBlcn0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17dGl0bGVUZXh0fVxuICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLmhhbmRsZVRvZ2dsZVRvb2xUaXAuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlVG9nZ2xlVG9vbFRpcC5iaW5kKHRoaXMpfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucHJvcHMubGluZX1cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VG9vbHRpcCAmJlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dG9vbFRpcFN0eWxlfT4ge2hvdmVyVGV4dH0gPC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZX0gc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgIDxkaXYga2V5PXsndGltZWxpbmUtaGVhZGVyLXdyYXBwZXInICsgdGhpcy5wcm9wcy5pbmRleH0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtoclN0eWxlfSAvPlxuICAgICAgICAgICAge2VmZmVjdGl2ZVBlcmlvZHMubWFwKChlZmZlY3RpdmVQZXJpb2QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBwZXJpb2RCbG9jayA9IHsgLi4udGltZUJsb2NrIH07XG4gICAgICAgICAgICAgIHBlcmlvZEJsb2NrLndpZHRoID1cbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAtXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArXG4gICAgICAgICAgICAgICAgJyUnO1xuXG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPVxuICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID1cbiAgICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gLVxuICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kc1tpbmRleCAtIDFdLnRpbWVsaW5lRW5kUG9zaXRpb24gK1xuICAgICAgICAgICAgICAgICAgJyUnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IGl0ZW1UZXh0ID0gZWZmZWN0aXZlUGVyaW9kLnRvO1xuXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID4gMCAmJlxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC5mcm9tLmxvY2FsZUNvbXBhcmUoZWZmZWN0aXZlUGVyaW9kLnRvKSAhPT0gMFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpdGVtVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZC5mcm9tICsgJyAtICcgKyBlZmZlY3RpdmVQZXJpb2QudG87XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXsndGltZWxpbmUtaGVhZGVyLWJsb2NrJyArIGluZGV4fSBzdHlsZT17cGVyaW9kQmxvY2t9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbVRleHR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbVRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclRpbWVsaW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGRpbWVuc2lvbiB9IGZyb20gJy4uL3N0eWxlcyc7XG5cbmNvbnN0IHBlcmlvZCA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGZyb206IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGltZWxpbmVTdGFydFBvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWVsaW5lRW5kUG9zaXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufSk7XG5cbmNvbnN0IHRpbWV0YWJsZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIG9iamVjdElkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBlcmlvZHM6IFByb3BUeXBlcy5hcnJheU9mKHBlcmlvZCkuaXNSZXF1aXJlZFxufSkuaXNSZXF1aXJlZDtcblxuY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpbWV0YWJsZXM6IFByb3BUeXBlcy5hcnJheU9mKHRpbWV0YWJsZSkuaXNSZXF1aXJlZCxcbiAgICBpc0xhc3Q6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgdmFsaWREYXlzT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aW1ldGFibGVzLCB2YWxpZERheXNPZmZzZXQsIGlzTGFzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRpbWVsaW5lU3R5bGUgPSB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVCYWNrZ3JvdW5kLFxuICAgICAgd2lkdGg6IGRpbWVuc2lvbi50aW1lTGluZVdpZHRoICsgJyUnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH07XG5cbiAgICBjb25zdCB0aW1lbGluZVdyYXBwZXIgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogaXNMYXN0ID8gMCA6IDEwXG4gICAgfTtcblxuICAgIGxldCB0aW1lQmxvY2sgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUJsb2NrQmFja2dyb3VuZCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICB9O1xuXG4gICAgbGV0IHRleHRTdHlsZSA9IHtcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgb3ZlcmZsb3c6ICd2aXNibGUnLFxuICAgICAgdGV4dFNoYWRvdzogJzBweCAwcHggNXB4IGJsYWNrJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBtYXJnaW46ICdhdXRvIDEwcHgnLFxuICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgIGZvbnRTaXplOiAnMC43ZW0nLFxuICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgfTtcblxuICAgIGxldCBoclN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9O1xuXG4gICAgaHJTdHlsZS5tYXJnaW5MZWZ0ID0gMzMgKyB2YWxpZERheXNPZmZzZXQgKyAnJSc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVXcmFwcGVyfT5cbiAgICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVTdHlsZX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17aHJTdHlsZX0gLz5cbiAgICAgICAgICB7dGltZXRhYmxlcy5tYXAodGltZXRhYmxlID0+XG4gICAgICAgICAgICB0aW1ldGFibGUucGVyaW9kcy5tYXAoKHBlcmlvZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aW1ldGFibGUub2JqZWN0SWQ7XG4gICAgICAgICAgICAgIGNvbnN0IGhvdmVyID0gYCR7dGl0bGV9IFxcbihwZXJpb2Q6ICR7cGVyaW9kLmZyb219IC0+ICR7cGVyaW9kLnRvfSlgO1xuICAgICAgICAgICAgICBsZXQgcGVyaW9kQmxvY2sgPSB7IC4uLnRpbWVCbG9jayB9O1xuICAgICAgICAgICAgICBwZXJpb2RCbG9jay53aWR0aCA9XG4gICAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gLSBwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICsgJyUnO1xuICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID0gcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJztcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9eyd0aW1ldGFibGUtcGVyaW9kLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3BlcmlvZEJsb2NrfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aG92ZXJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRTdHlsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoLy9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9ub3Rvc2Fuc2thbm5hZGEuY3NzKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucyBLYW5uYWRhJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMxOTE5MTk7XFxufVxcblxcbnAsaDEsaDIsaDMsaDQsaDUsIHNwYW4ge1xcbiAgICBjb2xvcjogIzE5MTkxOTtcXG59XFxuXFxuLl8ycE9aVDZPRXdSMnZfY2k3Mlc0a29COmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubVNHS1ZsbWNXRVNieEVIcjdCYXoyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5fMWg5QUctVld4X1U0MFR4VkUwMTU1SyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5fMWpOLU43eWZTS1loMUtVenJhczRsWiB7XFxuICAgIGNvbG9yOiAjMEQzQzYxO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLl8yMXA1NVZNX2U3NV8yaUJpclcxTWtmIHtcXG4gICAgY29sb3I6ICMyMTk2RjM7XFxufVxcblxcblxcbmEge1xcbiAgICBjb2xvcjogIzIxOTZGMztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyLCBhOmZvY3VzIHtcXG4gICAgY29sb3I6ICMxOTc2RDI7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBlcmlvZC1ibG9ja1wiOiBcIl8ycE9aVDZPRXdSMnZfY2k3Mlc0a29CXCIsXG5cdFwicGFnZS1saW5rLXBhcmVudFwiOiBcIm1TR0tWbG1jV0VTYnhFSHI3QmF6MlwiLFxuXHRcInBhZ2UtbGlua1wiOiBcIl8xaDlBRy1WV3hfVTQwVHhWRTAxNTVLXCIsXG5cdFwiYWN0aXZlLWxpbmtcIjogXCJfMWpOLU43eWZTS1loMUtVenJhczRsWlwiLFxuXHRcImluYWN0aXZlLWxpbmtcIjogXCJfMjFwNTVWTV9lNzVfMmlCaXJXMU1rZlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP21vZHVsZXM9dHJ1ZSEuL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5fMnRVLWY4NmZfNDJnMXBWVlFaWEZYQyB7XFxuICBiYWNrZ3JvdW5kOiAjQjkxOTE5O1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI0I5MTkxOSksIGNvbG9yLXN0b3AoNjYlLCAjZjZmNmY2KSwgY29sb3Itc3RvcCgxMDAlLCAjZjZmNmY2KSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCAjQjkxOTE5KSwgY29sb3Itc3RvcCg2NiUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI2Y2ZjZmNiksIGNvbG9yLXN0b3AoMTAwJSwgI2Y2ZjZmNikpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0aW1lbGluZVwiOiBcIl8ydFUtZjg2Zl80MmcxcFZWUVpYRlhDXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcz10cnVlIS4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFDaGV2cm9uRG93biA9IGZ1bmN0aW9uIEZhQ2hldnJvbkRvd24ocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMzcuNiAxOGwtMTYuNiAxNi42cS0wLjQgMC40LTEgMC40dC0xLTAuNGwtMTYuNi0xNi42cS0wLjQtMC40LTAuNC0xdDAuNC0xbDMuNy0zLjdxMC41LTAuNCAxLTAuNHQxIDAuNGwxMS45IDExLjkgMTEuOS0xMS45cTAuNC0wLjQgMS0wLjR0MSAwLjRsMy43IDMuN3EwLjQgMC40IDAuNCAxdC0wLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDaGV2cm9uRG93bjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1kb3duLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFDaGV2cm9uVXAgPSBmdW5jdGlvbiBGYUNoZXZyb25VcChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zNy42IDI5LjdsLTMuNyAzLjdxLTAuNSAwLjQtMSAwLjR0LTEtMC40bC0xMS45LTExLjktMTEuOCAxMS45cS0wLjUgMC40LTEuMSAwLjR0LTEtMC40bC0zLjctMy43cS0wLjQtMC40LTAuNC0xdDAuNC0xbDE2LjYtMTYuNnEwLjQtMC40IDEtMC40dDEgMC40bDE2LjYgMTYuNnEwLjQgMC40IDAuNCAxdC0wLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDaGV2cm9uVXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tdXAuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUNvZyA9IGZ1bmN0aW9uIEZhQ29nKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTI1LjkgMjBxMC0yLjQtMS43LTR0LTQuMS0xLjctNCAxLjctMS43IDQgMS43IDQgNCAxLjcgNC4xLTEuNyAxLjctNHogbTExLjQtMi40djQuOXEwIDAuMy0wLjIgMC41dC0wLjQgMC4zbC00LjIgMC42cS0wLjQgMS4zLTAuOCAyLjEgMC43IDEuMSAyLjMgMy4xIDAuMyAwLjIgMC4zIDAuNXQtMC4yIDAuNXEtMC42IDAuOS0yLjIgMi40dC0yLjEgMS42cS0wLjMgMC0wLjYtMC4ybC0zLjEtMi40cS0xIDAuNS0yIDAuOS0wLjQgMy0wLjcgNC4xLTAuMSAwLjYtMC44IDAuNmgtNC45cS0wLjMgMC0wLjYtMC4xdC0wLjItMC41bC0wLjctNC4xcS0xLjEtMC40LTItMC45bC0zLjEgMi40cS0wLjIgMC4yLTAuNiAwLjItMC4zIDAtMC41LTAuMi0yLjgtMi42LTMuNy0zLjgtMC4yLTAuMi0wLjItMC41IDAtMC4yIDAuMi0wLjUgMC4zLTAuNSAxLjEtMS41dDEuMi0xLjVxLTAuNi0xLjItMC45LTIuM2wtNC4xLTAuNnEtMC4yIDAtMC40LTAuMnQtMC4yLTAuNnYtNC45cTAtMC4zIDAuMi0wLjV0MC40LTAuM2w0LjItMC43cTAuMy0xIDAuOC0yLTAuOS0xLjMtMi40LTMuMS0wLjItMC4zLTAuMi0wLjUgMC0wLjIgMC4yLTAuNSAwLjYtMC44IDIuMi0yLjR0Mi4xLTEuNnEwLjMgMCAwLjYgMC4ybDMuMSAyLjRxMS0wLjUgMi0wLjkgMC40LTMgMC43LTQuMSAwLjEtMC42IDAuOC0wLjZoNC45cTAuMyAwIDAuNiAwLjF0MC4yIDAuNWwwLjcgNC4xcTEgMC40IDIgMC45bDMuMS0yLjRxMC4yLTAuMiAwLjYtMC4yIDAuMyAwIDAuNSAwLjIgMi45IDIuNiAzLjcgMy44IDAuMiAwLjIgMC4yIDAuNSAwIDAuMi0wLjIgMC41LTAuNCAwLjUtMS4yIDEuNXQtMS4yIDEuNXEwLjYgMS4yIDEgMi4ybDQgMC43cTAuMyAwIDAuNSAwLjJ0MC4yIDAuNnonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDb2c7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NvZy5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZhUmVmcmVzaCA9IGZ1bmN0aW9uIEZhUmVmcmVzaChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zNi43IDIzLjZxMCAwLjEgMCAwLjEtMS40IDYtNiA5Ljd0LTEwLjYgMy43cS0zLjMgMC02LjQtMS4ydC01LjQtMy41bC0yLjkgMi45cS0wLjQgMC40LTEgMC40dC0xLTAuNC0wLjQtMXYtMTBxMC0wLjYgMC40LTF0MS0wLjRoMTBxMC42IDAgMSAwLjR0MC41IDEtMC41IDFsLTMgM3ExLjYgMS41IDMuNiAyLjN0NC4xIDAuOHEzIDAgNS42LTEuNHQ0LjItNHEwLjItMC40IDEuMi0yLjYgMC4xLTAuNSAwLjYtMC41aDQuM3EwLjMgMCAwLjUgMC4ydDAuMiAwLjV6IG0wLjYtMTcuOXYxMHEwIDAuNi0wLjQgMXQtMSAwLjRoLTEwcS0wLjYgMC0xLTAuNHQtMC41LTEgMC41LTFsMy0zLjFxLTMuMy0zLTcuOC0zLTIuOSAwLTUuNSAxLjR0LTQuMiA0cS0wLjIgMC40LTEuMiAyLjYtMC4yIDAuNS0wLjYgMC41aC00LjVxLTAuMyAwLTAuNS0wLjJ0LTAuMi0wLjV2LTAuMXExLjUtNiA2LTkuN3QxMC43LTMuN3EzLjMgMCA2LjQgMS4ydDUuNCAzLjVsMy0yLjlxMC40LTAuNCAxLTAuNHQxIDAuNCAwLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFSZWZyZXNoO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRDaGVja0NpcmNsZSA9IGZ1bmN0aW9uIE1kQ2hlY2tDaXJjbGUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMTYuNiAyOC40bDE1LTE1LTIuMy0yLjUtMTIuNyAxMi43LTUuOS01LjktMi4zIDIuM3ogbTMuNC0yNWM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZENoZWNrQ2lyY2xlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9jaGVjay1jaXJjbGUuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZEVycm9yID0gZnVuY3Rpb24gTWRFcnJvcihwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMS42IDIxLjZ2LTEwaC0zLjJ2MTBoMy4yeiBtMCA2Ljh2LTMuNGgtMy4ydjMuNGgzLjJ6IG0tMS42LTI1YzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kRXJyb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2Vycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRIZWxwT3V0bGluZSA9IGZ1bmN0aW9uIE1kSGVscE91dGxpbmUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMjAgMTBjMy43IDAgNi42IDMgNi42IDYuNiAwIDQuMi01IDQuNy01IDguNGgtMy4yYzAtNS40IDUtNSA1LTguNCAwLTEuOC0xLjYtMy4yLTMuNC0zLjJzLTMuNCAxLjQtMy40IDMuMmgtMy4yYzAtMy42IDIuOS02LjYgNi42LTYuNnogbTAgMjMuNGM3LjMgMCAxMy40LTYuMSAxMy40LTEzLjRzLTYuMS0xMy40LTEzLjQtMTMuNC0xMy40IDYuMS0xMy40IDEzLjQgNi4xIDEzLjQgMTMuNCAxMy40eiBtMC0zMGM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eiBtLTEuNiAyNi42di0zLjRoMy4ydjMuNGgtMy4yeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZEhlbHBPdXRsaW5lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9oZWxwLW91dGxpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZEhvdXJnbGFzc0VtcHR5ID0gZnVuY3Rpb24gTWRIb3VyZ2xhc3NFbXB0eShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMCAxOS4xbDYuNi02LjZ2LTUuOWgtMTMuMnY1Ljl6IG02LjYgOC40bC02LjYtNi42LTYuNiA2LjZ2NS45aDEzLjJ2LTUuOXogbS0xNi42LTI0LjFoMjB2MTBsLTYuNiA2LjYgNi42IDYuNnYxMGgtMjB2LTEwbDYuNi02LjYtNi42LTYuNnYtMTB6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kSG91cmdsYXNzRW1wdHk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2hvdXJnbGFzcy1lbXB0eS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kU2NoZWR1bGUgPSBmdW5jdGlvbiBNZFNjaGVkdWxlKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIwLjkgMTEuNnY4LjhsNy41IDQuNC0xLjMgMi4yLTguNy01LjR2LTEwaDIuNXogbS0wLjkgMjEuOGM3LjMgMCAxMy40LTYuMSAxMy40LTEzLjRzLTYuMS0xMy40LTEzLjQtMTMuNC0xMy40IDYuMS0xMy40IDEzLjQgNi4xIDEzLjQgMTMuNCAxMy40eiBtMC0zMGM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZFNjaGVkdWxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9zY2hlZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2ZpeFVybHMuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9FdmVudERldGFpbHMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0V2ZW50RGV0YWlscy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0V2ZW50RGV0YWlscy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0hlYWRlclRpbWVsaW5lLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9IZWFkZXJUaW1lbGluZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0hlYWRlclRpbWVsaW5lLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=