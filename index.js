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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
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
      CANCELLED: "Kansellert"
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
      CANCELLED: "Cancelled"
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
  fields: [{ id: 'ALL_TIME'
  }, {
    id: 'LAST_12_HOURS'
  }, { id: 'LAST_24_HOURS'
  }, {
    id: 'LAST_WEEK'
  }, {
    id: 'LAST_MONTH'
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
	fixUrls = __webpack_require__(30);

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

var _Timeline2 = __webpack_require__(17);

var _Timeline3 = _interopRequireDefault(_Timeline2);

var _HeaderTimeline2 = __webpack_require__(16);

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

var _EventStepper = __webpack_require__(13);

var _EventStepper2 = _interopRequireDefault(_EventStepper);

__webpack_require__(31);

var _translations = __webpack_require__(5);

var _translations2 = _interopRequireDefault(_translations);

var _FilterButtonTray = __webpack_require__(15);

var _FilterButtonTray2 = _interopRequireDefault(_FilterButtonTray);

var _buttonConfig = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FaFresh = __webpack_require__(24);

var EventDetails = function (_React$Component) {
  _inherits(EventDetails, _React$Component);

  function EventDetails(props) {
    _classCallCheck(this, EventDetails);

    var _this = _possibleConstructorReturn(this, (EventDetails.__proto__ || Object.getPrototypeOf(EventDetails)).call(this, props));

    _this.state = {
      activePageIndex: 0,
      endStateFilter: 'ALL',
      dateFilter: 'ALL_TIME'
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actionTranslations = __webpack_require__(3);

var _actionTranslations2 = _interopRequireDefault(_actionTranslations);

var _chevronDown = __webpack_require__(21);

var _chevronDown2 = _interopRequireDefault(_chevronDown);

var _chevronUp = __webpack_require__(22);

var _chevronUp2 = _interopRequireDefault(_chevronUp);

var _error = __webpack_require__(26);

var _error2 = _interopRequireDefault(_error);

var _checkCircle = __webpack_require__(25);

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _schedule = __webpack_require__(29);

var _schedule2 = _interopRequireDefault(_schedule);

var _cog = __webpack_require__(23);

var _cog2 = _interopRequireDefault(_cog);

var _helpOutline = __webpack_require__(27);

var _helpOutline2 = _interopRequireDefault(_helpOutline);

var _hourglassEmpty = __webpack_require__(28);

var _hourglassEmpty2 = _interopRequireDefault(_hourglassEmpty);

var _ControlledChouetteLink = __webpack_require__(11);

var _ControlledChouetteLink2 = _interopRequireDefault(_ControlledChouetteLink);

var _translations = __webpack_require__(5);

var _translations2 = _interopRequireDefault(_translations);

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
    key: 'getIconByState',
    value: function getIconByState(state) {
      switch (state) {
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
      }
      return _react2.default.createElement(_helpOutline2.default, { style: { color: 'grey', width: 24, height: 22 } });
    }
  }, {
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
          this.getIconByState(event.endState)
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FilterButton = __webpack_require__(14);

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

  function FilterButtonTray(props) {
    _classCallCheck(this, FilterButtonTray);

    var _this = _possibleConstructorReturn(this, (FilterButtonTray.__proto__ || Object.getPrototypeOf(FilterButtonTray)).call(this, props));

    _this.state = {
      activeButtonId: 'ALL_TIME'
    };
    return _this;
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
/* 16 */
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

var _HeaderTimeline = __webpack_require__(32);

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
/* 18 */,
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 30 */
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4YzYyYmFjOTc5NGQ0ODMxMzJiOSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjdGlvblRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhbnNsYXRpb25zLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Nob3VldHRlTGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVkQ2hvdWV0dGVMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudFN0ZXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvblRyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1kb3duLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tdXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvZmEvY29nLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL3JlZnJlc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQvY2hlY2stY2lyY2xlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2Vycm9yLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2hlbHAtb3V0bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9ob3VyZ2xhc3MtZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQvc2NoZWR1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvZml4VXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuY3NzPzVjYzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzPzI3N2EiXSwibmFtZXMiOlsiY29sb3JEZWYiLCJibGFjayIsIndoaXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYmlnYmx1ZSIsImRhcmtCbHVlIiwiZGFya0dyZXkiLCJncmV5IiwibGlnaHRHcmV5IiwiZW50dXIiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiY29sb3IiLCJmb250IiwiaW52ZXJzZSIsInRpdGxlIiwiaW5mbzEiLCJpbmZvMiIsImluZm8zIiwid2FybiIsImRpc2FibGVkIiwidG9vbHRpcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJlZmZlY3RpdmUiLCJmYWlsIiwibW9kYWwiLCJiYWNrZHJvcCIsInRhYkFjdGl2ZSIsInRpbWVMaW5lQmFja2dyb3VuZCIsInRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kIiwidGltZUxpbmVCb3JkZXIiLCJ0aW1lTGluZVN1Y2Nlc3MiLCJ0aW1lTGluZUZhaWwiLCJ0YWJsZUhlYWRlciIsInRhYmxlUm93IiwidGFibGVJbmZvIiwidmFsaWQiLCJpbnZhbGlkIiwiZXhwaXJpbmciLCJoaWdobGlnaHQiLCJkaW1lbnNpb24iLCJ0aW1lTGluZVdpZHRoIiwic3R5bGVzIiwidGV4dCIsIkZJTEVfVFJBTlNGRVIiLCJGSUxFX0NMQVNTSUZJQ0FUSU9OIiwiRklMRV9ERUxJVkVSWSIsIklNUE9SVCIsIkVYUE9SVCIsIkVYUE9SVF9ORVRFWCIsIlZBTElEQVRJT05fTEVWRUxfMSIsIkRBVEFTUEFDRV9UUkFOU0ZFUiIsIlZBTElEQVRJT05fTEVWRUxfMiIsIkJVSUxEX0dSQVBIIiwiVU5LTk9XTiIsImZpbGVuYW1lIiwidW5kZWZpbmVkIiwic3RhdGVzIiwiT0siLCJQRU5ESU5HIiwiU1RBUlRFRCIsIkZBSUxFRCIsIkRVUExJQ0FURSIsIklHTk9SRUQiLCJDQU5DRUxMRUQiLCJlcnJvck1lc3NhZ2UiLCJmaWx0ZXJCdXR0b24iLCJBTExfVElNRSIsIkxBU1RfMTJfSE9VUlMiLCJMQVNUXzI0X0hPVVJTIiwiTEFTVF9XRUVLIiwiTEFTVF9NT05USCIsImJ1dHRvbkNvbmZpZyIsImZpZWxkcyIsImlkIiwiZ2V0TGFzdFZhbGlkRGF0ZSIsIm5vdyIsIkRhdGUiLCJzZXRNb250aCIsImdldE1vbnRoIiwic2V0RGF0ZSIsImdldERhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwicGFnZSIsIm5vX3N0YXR1cyIsInN0YXJ0ZWQiLCJlbmRlZCIsImR1cmF0aW9uIiwic2hvd19hbGwiLCJzaG93X29ubHlfZmFpbGVkIiwic2hvd19vbmx5X3N1Y2Nlc3MiLCJzaG93X29ubHlfY2FuY2VsbGVkIiwiVGltZWxpbmUiLCJIZWFkZXJUaW1lbGluZSIsIkV2ZW50RGV0YWlscyIsIkNob3VldHRlTGluayIsImFjdGlvbiIsInJlZmVyZW50aWFsIiwiY2hpbGRyZW4iLCJiYXNlVVJMIiwid2luZG93IiwiY29uZmlnIiwiY2hvdWV0dGVCYXNlVXJsIiwiYWN0aW9uTWFwIiwiVVJMIiwiQ29udHJvbGxlZENob3VldHRlTGluayIsInByb3BzIiwiZXZlbnRzIiwiaW5jbHVkZUxldmVsMiIsInN1cHBvcnRlZEFjdGlvbnMiLCJjaG91ZXRlQWN0aW9uTWFwIiwicHVzaCIsImxlbmd0aCIsImVuZFN0YXRlIiwiaW5kZXhPZiIsImNob3VldHRlSm9iSWQiLCJDb21wb25lbnQiLCJGYUZyZXNoIiwicmVxdWlyZSIsInN0YXRlIiwiYWN0aXZlUGFnZUluZGV4IiwiZW5kU3RhdGVGaWx0ZXIiLCJkYXRlRmlsdGVyIiwiZSIsInBhZ2VJbmRleCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJkYXRhU291cmNlIiwibG9jYWxlIiwic2hvd0RhdGVGaWx0ZXIiLCJmaWx0ZXJlZFBhZ2VzIiwibGFzdERhdGUiLCJmaWx0ZXJlZEJ5RGF0ZSIsImZpbHRlciIsImV2ZW50IiwiZmlyc3RFdmVudCIsInBhZ2luYXRpb25NYXAiLCJnZXRQYWdpbmF0aW9uTWFwIiwiZmlsdGVycyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpbkxlZnQiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJiaW5kIiwicmVmcmVzaEJ1dHRvbiIsImhhbmRsZVJlZnJlc2giLCJtYXJnaW5SaWdodCIsImZsb2F0IiwiY3Vyc29yIiwidHJhbnNmb3JtIiwid2lkdGgiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJpbmRleCIsImlzQWN0aXZlIiwiaGFuZGxlUGFnZUNsaWNrIiwibGlzdEl0ZW0iLCJldmVudEdyb3VwIiwiZm9yRWFjaCIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJmb250V2VpZ2h0Iiwic3RhdHVzTGlzdCIsImkiLCJqIiwic2xpY2UiLCJFdmVudFN0ZXBwZXIiLCJleHBhbmRlZCIsImhlaWdodCIsImdyb3VwcyIsImV2ZW50U3RhdGVzIiwiZ3JvdXBzV2l0aFVubGlzdGVkIiwiT2JqZWN0IiwiYXNzaWduIiwiZmlyc3RTdGF0ZUZvdW5kIiwibWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQiLCJmaW5hbEdyb3VwcyIsImtleXMiLCJzb3J0Iiwia2V5MSIsImtleTIiLCJrZXkiLCJmb3JtYXR0ZWRHcm91cHMiLCJuYW1lIiwiY29tYmluZWQiLCJncm91cCIsImRhdGEiLCJlcnJvck9uIiwiY29sdW1uU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJjb2x1bW4iLCJBcnJheSIsInJlbmRlckV2ZW50IiwiaXNGaXJzdCIsImNvbHVtbkluZGV4IiwiZ3JvdXBTdHlsZSIsImdyb3VwVGV4dCIsImxpbmtTdHlsZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wU3R5bGUiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInRvb2xUaXBUZXh0IiwiZGF0ZSIsIm9wYWNpdHkiLCJnZXRJY29uQnlTdGF0ZSIsInN0ZXBwZXJzdHlsZSIsImFsaWduQ29udGVudCIsImFkZFVubGlzdGVkU3RhdGVzIiwiYWdncmVnZ2F0ZUZpbGVFdmVudHMiLCJjcmVhdGVDb21iaW5lZFNwbGl0IiwiYnVsbGV0cyIsImJ1bGxldCIsImhhbmRsZVRvZ2dsZVZpc2liaWxpdHkiLCJwcm92aWRlciIsImZsZXgiLCJmaWxlTmFtZSIsImxpbmVIZWlnaHQiLCJzdG9wUHJvcGFnYXRpb24iLCJsYXN0RXZlbnQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiRmlsdGVyQnV0dG9uIiwiaGFuZGxlQ2xpY2siLCJsYWJlbCIsImFjdGl2ZSIsImFjdGl2ZVN0eWxlIiwiaW5hY3RpdmVTdHlsZSIsImRlZmF1bHRTdHlsZSIsIm1pbldpZHRoIiwiYnV0dG9uU3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiRmlsdGVyQnV0dG9uVHJheSIsImFjdGl2ZUJ1dHRvbklkIiwib25DaGFuZ2UiLCJzdHlsZSIsImZpZWxkIiwic2hvd1Rvb2x0aXAiLCJlZmZlY3RpdmVQZXJpb2RzIiwidmFsaWREYXlzT2Zmc2V0IiwidGltZWxpbmVTdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJ0aW1lbGluZVdyYXBwZXIiLCJ0aW1lQmxvY2siLCJ0aXRsZVRleHQiLCJ6SW5kZXgiLCJ0b29sVGlwU3R5bGUiLCJ0cmFuc2l0aW9uIiwidGV4dFN0eWxlIiwidGV4dFNoYWRvdyIsIndoaXRlU3BhY2UiLCJ0ZXh0T3ZlcmZsb3ciLCJoclN0eWxlIiwiaG92ZXJUZXh0IiwiaGFuZGxlVG9nZ2xlVG9vbFRpcCIsImxpbmUiLCJ0aW1lbGluZSIsImVmZmVjdGl2ZVBlcmlvZCIsInBlcmlvZEJsb2NrIiwidGltZWxpbmVFbmRQb3NpdGlvbiIsInRpbWVsaW5lU3RhcnRQb3NpdGlvbiIsIml0ZW1UZXh0IiwidG8iLCJmcm9tIiwibG9jYWxlQ29tcGFyZSIsInZlcnRpY2FsQWxpZ24iLCJzdHJpbmciLCJudW1iZXIiLCJ2YWxpZEZyb21EYXRlIiwiYXJyYXkiLCJwZXJpb2QiLCJzaGFwZSIsInRpbWV0YWJsZSIsIm9iamVjdElkIiwicGVyaW9kcyIsImFycmF5T2YiLCJ0aW1ldGFibGVzIiwiaXNMYXN0Iiwib3ZlcmZsb3dZIiwicGFkZGluZ0JvdHRvbSIsImhvdmVyIiwiYm9vbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJD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QXVCO0FBQ3hDO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxnQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7QUN4RkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJvZ3VcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYm9ndVwiXSA9IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhjNjJiYWM5Nzk0ZDQ4MzEzMmI5IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgSWNvbkJhc2UgPSBmdW5jdGlvbiBJY29uQmFzZShfcmVmLCBfcmVmMikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICB2YXIgY29sb3IgPSBfcmVmLmNvbG9yO1xuICB2YXIgc2l6ZSA9IF9yZWYuc2l6ZTtcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZTtcblxuICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjaGlsZHJlbicsICdjb2xvcicsICdzaXplJywgJ3N0eWxlJ10pO1xuXG4gIHZhciBfcmVmMiRyZWFjdEljb25CYXNlID0gX3JlZjIucmVhY3RJY29uQmFzZTtcbiAgdmFyIHJlYWN0SWNvbkJhc2UgPSBfcmVmMiRyZWFjdEljb25CYXNlID09PSB1bmRlZmluZWQgPyB7fSA6IF9yZWYyJHJlYWN0SWNvbkJhc2U7XG5cbiAgdmFyIGNvbXB1dGVkU2l6ZSA9IHNpemUgfHwgcmVhY3RJY29uQmFzZS5zaXplIHx8ICcxZW0nO1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIF9leHRlbmRzKHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWlkIG1lZXQnLFxuICAgIGhlaWdodDogY29tcHV0ZWRTaXplLFxuICAgIHdpZHRoOiBjb21wdXRlZFNpemVcbiAgfSwgcmVhY3RJY29uQmFzZSwgcHJvcHMsIHtcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBjb2xvcjogY29sb3IgfHwgcmVhY3RJY29uQmFzZS5jb2xvclxuICAgIH0sIHJlYWN0SWNvbkJhc2Uuc3R5bGUgfHwge30sIHN0eWxlKVxuICB9KSk7XG59O1xuXG5JY29uQmFzZS5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogX3JlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGUoW19yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLCBfcmVhY3QuUHJvcFR5cGVzLm51bWJlcl0pLFxuICBzdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3Rcbn07XG5cbkljb25CYXNlLmNvbnRleHRUeXBlcyA9IHtcbiAgcmVhY3RJY29uQmFzZTogX3JlYWN0LlByb3BUeXBlcy5zaGFwZShJY29uQmFzZS5wcm9wVHlwZXMpXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJY29uQmFzZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29uLWJhc2UvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuY29uc3QgY29sb3JEZWYgPSB7XG4gIGJsYWNrOiAnIzAwMCcsXG4gIHdoaXRlOiAnI0ZGRicsXG4gIHJlZDogJyNGMDAnLFxuICBncmVlbjogJyMwRjAnLFxuICBibHVlOiAnIzAwRicsXG4gIGJpZ2JsdWU6ICcjMTE2OUE3JyxcbiAgZGFya0JsdWU6ICcjMDgzNDUzJyxcbiAgZGFya0dyZXk6ICcjMkYyRjJGJyxcbiAgZ3JleTogJyNEREREREQnLFxuICBsaWdodEdyZXk6ICcjRjJGMkYyJyxcbiAgZW50dXI6IHtcbiAgICBwcmltYXJ5OiAnIzI3M0E0NicsICAgLy8gMzksNTgsNzBcbiAgICBzZWNvbmRhcnk6ICcjNkJCREMyJywgLy8xMDcsMTg5LDE5NCxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29sb3IgPSB7XG4gIGZvbnQ6IHtcbiAgICBpbnZlcnNlOiBjb2xvckRlZi53aGl0ZSxcbiAgICB0aXRsZTogY29sb3JEZWYuYmxhY2ssXG4gICAgaW5mbzE6IGNvbG9yRGVmLmVudHVyLnNlY29uZGFyeSxcbiAgICBpbmZvMjogY29sb3JEZWYuZGFya0JsdWUsXG4gICAgaW5mbzM6IGNvbG9yRGVmLmJsYWNrLFxuICAgIHdhcm46IGNvbG9yRGVmLnJlZCxcbiAgICBkaXNhYmxlZDogY29sb3JEZWYuZ3JleSxcblxuICAgIHRvb2x0aXA6IGNvbG9yRGVmLndoaXRlLFxuICB9LFxuICBiYWNrZ3JvdW5kOiBjb2xvckRlZi5lbnR1ci5wcmltYXJ5LFxuICBib3JkZXI6IGNvbG9yRGVmLmJsYWNrLFxuICBlZmZlY3RpdmU6IGNvbG9yRGVmLmJsYWNrLFxuICBmYWlsOiBjb2xvckRlZi5yZWQsXG4gIG1vZGFsOiBjb2xvckRlZi53aGl0ZSxcbiAgYmFja2Ryb3A6ICdyZ2JhKDAsIDAsIDAsIDAuMyknLFxuICB0b29sdGlwOiAnIzE5MTkxOScsXG4gIHRhYkFjdGl2ZTogY29sb3JEZWYuZW50dXIuc2Vjb25kYXJ5LFxuXG4gIHRpbWVMaW5lQmFja2dyb3VuZDogJyNERUQ4RDgnLFxuICB0aW1lTGluZUJsb2NrQmFja2dyb3VuZDogJyM2RDkyQjYnLFxuICB0aW1lTGluZUJvcmRlcjogJyNlZWUnLFxuICB0aW1lTGluZVN1Y2Nlc3M6ICcjNURBRTVEJyxcbiAgdGltZUxpbmVGYWlsOiAnI0I5MTkxOScsXG4gIHRhYmxlSGVhZGVyOiBjb2xvckRlZi5saWdodEdyZXksXG4gIHRhYmxlUm93OiAnI2ViZjJmMScsXG4gIHRhYmxlSW5mbzogJyNmZmZmZGInLFxuXG4gIHZhbGlkOiAnIzMzYzE0NicsXG4gIGludmFsaWQ6ICcjYjIwMDAwJyxcbiAgZXhwaXJpbmc6ICcjRkZBQTAwJyxcbiAgaGlnaGxpZ2h0IDoge1xuICAgIHZhbGlkOiAnIzRjYWY1MCcsXG4gICAgZXhwaXJpbmc6ICcjRkZCNjBBJyxcbiAgICBpbnZhbGlkOiAnI2NjMDAwMCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRpbWVuc2lvbiA9IHtcbiAgdGltZUxpbmVXaWR0aDogODUsXG59XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB7XG4gIGNvbG9yOiBjb2xvcixcbiAgZGltZW5zaW9uOiBkaW1lbnNpb24sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBcIm5iXCI6IHtcbiAgICB0ZXh0OiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiBcIkZpbG92ZXJmw7hyaW5nXCIsXG4gICAgICBGSUxFX0NMQVNTSUZJQ0FUSU9OOiBcIkZpbGtsYXNzaWZpc2VyaW5nXCIsXG4gICAgICBGSUxFX0RFTElWRVJZOiAnRmlsbGV2ZXJhbnNlJyxcbiAgICAgIElNUE9SVDogXCJJbXBvcnRcIixcbiAgICAgIEVYUE9SVDogXCJHVEZTIEVrc3BvcnRcIixcbiAgICAgIEVYUE9SVF9ORVRFWDogXCJOZVRFeCBFa3Nwb3J0XCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6IFwiVmFsaWRlcmluZyBuaXbDpSAxXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiT3ZlcmbDuHJpbmcgc2VudHJhbCBkYXRhYmFzZVwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiBcIlZhbGlkZXJpbmcgbml2w6UgMlwiLFxuICAgICAgQlVJTERfR1JBUEg6IFwiQnlnZyBhdiByZWlzZXPDuGtmb3JzbGFnXCIsXG4gICAgICBVTktOT1dOOiBcIlVramVudCBzdGVnXCIsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgRklMRV9UUkFOU0ZFUjogXCJPdmVyZsO4cmluZyBhdiBmaWwgZnJhIGxva2FsIG1hc2tpbiB0aWwgc2VudHJhbCBzZXJ2ZXJcIixcbiAgICAgIElNUE9SVDogXCJGaWx2YWxpZGVyaW5nIG9nIGltcG9ydCBpIGxva2FsdCBkYXRhYmFzZW9tcsOlZGUgbml2w6UgMVwiLFxuICAgICAgRVhQT1JUOiBcIkVrc3BvcnQgYXYgcnV0ZWRhdGEgXCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6IFwiVmFsaWRlcmluZyBhdiBrb21wbGV0dCBkYXRhb21yw6VkZSBuaXbDpSAxXCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6IFwiVmFsaWRlcmluZyBhdiBrb21wbGV0dCBkYXRhb21yw6VkZSBuaXbDpSAyXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiT3ZlcmbDuHJpbmcgdGlsIHNlbnRyYWx0IGRhdGFiYXNlb21yw6VkZSBuaXbDpSAyXCIsXG4gICAgICBCVUlMRF9HUkFQSDogXCJCeWdnIGF2IHJlaXNlc8O4a2ZvcnNsYWdcIixcbiAgICAgIFVOS05PV046IFwiRGV0dGUgc3RlZ2V0IGVyIHVramVudFwiLFxuICAgIH0sXG4gICAgZmlsZW5hbWU6IHtcbiAgICAgIHVuZGVmaW5lZDogXCJEaXJla3RlbGV2ZXJhbnNlXCJcbiAgICB9LFxuICAgIHN0YXRlczoge1xuICAgICAgT0s6IFwiRnVsbGbDuHJ0XCIsXG4gICAgICBQRU5ESU5HOiBcIlZlbnRlclwiLFxuICAgICAgU1RBUlRFRDogXCJQw6ViZWd5bnRcIixcbiAgICAgIEZBSUxFRDogXCJGZWlsXCIsXG4gICAgICBEVVBMSUNBVEU6IFwiRmVpbCAtIGR1cGxpa2F0IGRhdGFzZXR0XCIsXG4gICAgICBJR05PUkVEOiBcIklra2UgZ2plbm5vbWbDuHJ0XCIsXG4gICAgICBDQU5DRUxMRUQ6IFwiS2Fuc2VsbGVydFwiLFxuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmlsb3ZlcmbDuHJpbmcgZmVpbGV0JyxcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046ICdGaWxrbGFzc2lmaXNlcmluZyBmZWlsZXQnLFxuICAgIH0sXG4gICAgZmlsdGVyQnV0dG9uOiB7XG4gICAgICBBTExfVElNRTogJ1ViZWdyZW5zZXQnLFxuICAgICAgTEFTVF8xMl9IT1VSUzogJ1Npc3RlIDEyIHRpbWVuZScsXG4gICAgICBMQVNUXzI0X0hPVVJTOiAnU2lzdGUgZMO4Z24nLFxuICAgICAgTEFTVF9XRUVLOiAnU2lzdGUgdWtlJyxcbiAgICAgIExBU1RfTU9OVEg6ICdTaXN0ZSBtw6VuZWQnXG4gICAgfVxuICB9LFxuICBcImVuXCI6IHtcbiAgICB0ZXh0OiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiBcIkZpbGUgdHJhbnNmZXJcIixcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046IFwiRmlsZSBjbGFzc2lmaWNhdGlvblwiLFxuICAgICAgRklMRV9ERUxJVkVSWTogJ0ZpbGUgZGVsaXZlcnknLFxuICAgICAgSU1QT1JUOiBcIkltcG9ydFwiLFxuICAgICAgRVhQT1JUOiBcIkdURlMgZXhwb3J0XCIsXG4gICAgICBFWFBPUlRfTkVURVg6IFwiTmVURXggZXhwb3J0XCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6IFwiVmFsaWRhdGlvbiBsZXZlbCAxXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiVHJhbnNmZXIgdG8gY2VudHJhbCBzcGFjZVwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiBcIlZhbGlkYXRpb24gbGV2ZWwgMlwiLFxuICAgICAgQlVJTERfR1JBUEg6IFwiQnVpbGQgZ3JhcGhcIixcbiAgICAgIFVOS05PV046IFwiVWtub3duIHN0ZXBcIixcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiBcIlVwbG9hZCBsb2NhbCBmaWxlIHRvIHJlbW90ZSBzZXJ2ZXJcIixcbiAgICAgIElNUE9SVDogXCJGaWxlIHZhbGlkYXRpb24gYW5kIGltcG9ydCBpbiBsb2NhbCBkYXRhIHNwYWNlIC0gbGV2ZWwgMVwiLFxuICAgICAgRVhQT1JUOiBcIkV4cG9ydCBvZiByb3V0ZSBkYXRhIFwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8xOiBcIlZhbGlkYXRpb24gb2YgY29tcGxldGUgZGF0YSBzcGFjZSAtIGxldmVsIDFcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMjogXCJWYWxpZGF0aW9uIG9mIGNvbXBsZXRlIGRhdGEgc3BhY2UgLSBsZXZlbCAyXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiVHJhbnNmZXIgdG8gY2VudHJhbCBkYXRhc3BhY2UgLSBsZXZlbCAyXCIsXG4gICAgICBCVUlMRF9HUkFQSDogXCJCdWlsZCBncmFwaFwiLFxuICAgICAgVU5LTk9XTjogXCJUaGlzIHN0ZXAgaXMgdWtub3duXCIsXG4gICAgfSxcbiAgICBmaWxlbmFtZToge1xuICAgICAgdW5kZWZpbmVkOiBcIkRpcmVjdCBkZWxpdmVyeVwiXG4gICAgfSxcbiAgICBzdGF0ZXM6IHtcbiAgICAgIE9LOiBcIkNvbXBsZXRlZFwiLFxuICAgICAgUEVORElORzogXCJQZW5kaW5nXCIsXG4gICAgICBTVEFSVEVEOiBcIlN0YXJ0ZWRcIixcbiAgICAgIEZBSUxFRDogXCJGYWlsZWRcIixcbiAgICAgIERVUExJQ0FURTogXCJGYWlsZWQgLSBkdXBsaWNhdGUgZGF0YSBzZXRcIixcbiAgICAgIElHTk9SRUQ6IFwiU2tpcHBlZFwiLFxuICAgICAgQ0FOQ0VMTEVEOiBcIkNhbmNlbGxlZFwiLFxuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmFpbGVkIHRvIHRyYW5zZmVyIGZpbGUnLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZhaWxlZCBvbiBmaWxlIGNsYXNzaWZpY2F0aW9uJyxcbiAgICB9LFxuICAgIGZpbHRlckJ1dHRvbjoge1xuICAgICAgQUxMX1RJTUU6ICdVbmxpbWl0ZWQnLFxuICAgICAgTEFTVF8xMl9IT1VSUzogJ0xhc3QgMTIgaG91cnMnLFxuICAgICAgTEFTVF8yNF9IT1VSUzogJ0xhc3QgMjQgaG91cnMnLFxuICAgICAgTEFTVF9XRUVLOiAnTGFzdCB3ZWVrJyxcbiAgICAgIExBU1RfTU9OVEg6ICdMYXN0IG1vbnRoJ1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hY3Rpb25UcmFuc2xhdGlvbnMuanMiLCJjb25zdCBidXR0b25Db25maWcgPSB7XG4gIGZpZWxkczogW1xuICAgIHsgaWQ6ICdBTExfVElNRScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0xBU1RfMTJfSE9VUlMnXG4gICAgfSxcbiAgICB7IGlkOiAnTEFTVF8yNF9IT1VSUycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0xBU1RfV0VFSydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnTEFTVF9NT05USCdcbiAgICB9LFxuICBdXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGFzdFZhbGlkRGF0ZSA9IGlkID0+IHtcbiAgc3dpdGNoIChpZCkge1xuICAgIGNhc2UgJ0FMTF9USU1FJzogcmV0dXJuIG51bGw7XG4gICAgY2FzZSAnTEFTVF9NT05USCc6IHtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5zZXRNb250aChub3cuZ2V0TW9udGgoKSAtIDEpKTtcbiAgICB9XG4gICAgY2FzZSAnTEFTVF9XRUVLJzoge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldERhdGUobm93LmdldERhdGUoKSAtIDcpKTtcbiAgICB9XG4gICAgY2FzZSAnTEFTVF8xMl9IT1VSUyc6IHtcbiAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgIHJldHVybiBuZXcgRGF0ZShub3cuc2V0SG91cnMobm93LmdldEhvdXJzKCkgLSAxMikpO1xuICAgIH1cbiAgICBjYXNlICdMQVNUXzI0X0hPVVJTJzoge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldERhdGUobm93LmdldERhdGUoKS0xKSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ1dHRvbkNvbmZpZztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2J1dHRvbkNvbmZpZy5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgXCJlblwiOiB7XG4gICAgcGFnZTogJ1BhZ2U6ICcsXG4gICAgbm9fc3RhdHVzOiAnTm8gcmVzdWx0IHdpdGggYXBwbGllZCBmaWx0ZXInLFxuICAgIHN0YXJ0ZWQ6ICdTdGFydGVkJyxcbiAgICBlbmRlZDogJ0VuZGVkJyxcbiAgICBkdXJhdGlvbjogJ0R1cmF0aW9uOiAnLFxuICAgIHNob3dfYWxsOiAnU2hvdyBhbGwnLFxuICAgIHNob3dfb25seV9mYWlsZWQ6ICdTaG93IG9ubHkgZmFpbGVkJyxcbiAgICBzaG93X29ubHlfc3VjY2VzczogJ1Nob3cgb25seSBzdWNjZXNzZnVsJyxcbiAgICBzaG93X29ubHlfY2FuY2VsbGVkOiBcIlNob3cgb25seSBjYW5jZWxsZWRcIixcbiAgfSxcbiAgXCJuYlwiOiB7XG4gICAgcGFnZTogJ1NpZGU6ICcsXG4gICAgbm9fc3RhdHVzOiAnSW5nZW4gcmVzdWx0YXRlciBtZWQgdmFsZ3QgZmlsdGVyJyxcbiAgICBzdGFydGVkOiAnQmVneW50ZScsXG4gICAgZW5kZWQ6ICdBdnNsdXR0ZXQnLFxuICAgIGR1cmF0aW9uOiAnVmFyaWdoZXQnLFxuICAgIHNob3dfYWxsOiAnVmlzIGFsbGUnLFxuICAgIHNob3dfb25seV9mYWlsZWQ6ICdWaXMga3VuIGZlaWxldCcsXG4gICAgc2hvd19vbmx5X3N1Y2Nlc3M6ICdWaXMga3VuIHZlbGx5a2tldCcsXG4gICAgc2hvd19vbmx5X2NhbmNlbGxlZDogXCJWaXMga3VuIGthbnNlbGxlcnRlXCIsXG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdHJhbnNsYXRpb25zLmpzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHRcdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0XHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyIFxuXHRcdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHRcdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRcdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcblx0fSksXG5cdGdldEVsZW1lbnQgPSAoZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbyA9IHt9O1xuXHRcdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdFx0fTtcblx0fSkoZnVuY3Rpb24gKHN0eWxlVGFyZ2V0KSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3R5bGVUYXJnZXQpXG5cdH0pLFxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW10sXG5cdGZpeFVybHMgPSByZXF1aXJlKFwiLi9maXhVcmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRJbnRvID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblx0aWYgKCFzdHlsZVRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0c3R5bGVUYXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgc3R5bGVUYXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRzdHlsZVRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlVGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0c3R5bGVUYXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhdHRhY2hUYWdBdHRycyhzdHlsZUVsZW1lbnQsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGF0dGFjaFRhZ0F0dHJzKGxpbmtFbGVtZW50LCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhdHRhY2hUYWdBdHRycyhlbGVtZW50LCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKiBJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscyl7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcblxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IFRpbWVsaW5lIGZyb20gJy4vVGltZWxpbmUnXG5leHBvcnQgSGVhZGVyVGltZWxpbmUgZnJvbSAnLi9IZWFkZXJUaW1lbGluZSdcbmV4cG9ydCBFdmVudERldGFpbHMgZnJvbSAnLi9FdmVudERldGFpbHMnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgQ2hvdWV0dGVMaW5rID0gKHsgYWN0aW9uLCBpZCwgcmVmZXJlbnRpYWwsIGNoaWxkcmVuIH0pID0+IHtcblxuICBjb25zdCBiYXNlVVJMID0gYCR7d2luZG93LmNvbmZpZy5jaG91ZXR0ZUJhc2VVcmx9cmVmZXJlbnRpYWxzL2BcblxuICBjb25zdCBhY3Rpb25NYXAgPSB7XG4gICAgXCJpbXBvcnRlclwiOiBgaW1wb3J0cy8ke2lkfS9jb21wbGlhbmNlX2NoZWNrYCxcbiAgICBcImV4cG9ydGVyXCI6IGBleHBvcnRzLyR7aWR9L2NvbXBsaWFuY2VfY2hlY2tgLFxuICAgIFwidmFsaWRhdG9yXCI6IGBjb21wbGlhbmNlX2NoZWNrcy8ke2lkfS9yZXBvcnRgXG4gIH1cbiAgY29uc3QgVVJMID0gYCR7YmFzZVVSTH0ke3JlZmVyZW50aWFsfS8ke2FjdGlvbk1hcFthY3Rpb25dfWBcblxuICByZXR1cm4gKFxuICAgIDxhIHRpdGxlPXtVUkx9IHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e1VSTH0+e2NoaWxkcmVufTwvYT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaG91ZXR0ZUxpbmtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ2hvdWV0dGVMaW5rLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENob3VldHRlTGluayBmcm9tICcuL0Nob3VldHRlTGluaydcblxuY2xhc3MgQ29udHJvbGxlZENob3VldHRlTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgeyBldmVudHMsIGluY2x1ZGVMZXZlbDIgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBzdXBwb3J0ZWRBY3Rpb25zID0gWydJTVBPUlQnLCAnVkFMSURBVElPTl9MRVZFTF8xJ11cblxuICAgIGxldCBjaG91ZXRlQWN0aW9uTWFwID0ge1xuICAgICAgJ0lNUE9SVCc6ICdpbXBvcnRlcicsXG4gICAgICAnVkFMSURBVElPTl9MRVZFTF8xJzogJ3ZhbGlkYXRvcicsXG4gICAgfVxuXG4gICAgaWYgKGluY2x1ZGVMZXZlbDIpIHtcbiAgICAgIHN1cHBvcnRlZEFjdGlvbnMucHVzaCgnVkFMSURBVElPTl9MRVZFTF8yJylcbiAgICAgIHN1cHBvcnRlZEFjdGlvbnMucHVzaCgnRVhQT1JUJylcbiAgICAgIHN1cHBvcnRlZEFjdGlvbnMucHVzaCgnRVhQT1JUX05FVEVYJylcbiAgICAgIGNob3VldGVBY3Rpb25NYXBbJ1ZBTElEQVRJT05fTEVWRUxfMiddID0gJ3ZhbGlkYXRvcidcbiAgICAgIGNob3VldGVBY3Rpb25NYXBbJ0VYUE9SVCddID0gJ2V4cG9ydGVyJ1xuICAgICAgY2hvdWV0ZUFjdGlvbk1hcFsnRVhQT1JUX05FVEVYJ10gPSAnZXhwb3J0ZXInXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50cy5zdGF0ZXMgJiYgZXZlbnRzLnN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGVuZFN0YXRlID0gZXZlbnRzLnN0YXRlc1tldmVudHMuc3RhdGVzLmxlbmd0aC0xXVxuICAgICAgaWYgKHN1cHBvcnRlZEFjdGlvbnMuaW5kZXhPZihlbmRTdGF0ZS5hY3Rpb24pID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q2hvdWV0dGVMaW5rXG4gICAgICAgICAgICBhY3Rpb249e2Nob3VldGVBY3Rpb25NYXBbZW5kU3RhdGUuYWN0aW9uXX1cbiAgICAgICAgICAgIGlkPXtlbmRTdGF0ZS5jaG91ZXR0ZUpvYklkfVxuICAgICAgICAgICAgcmVmZXJlbnRpYWw9e2VuZFN0YXRlLnJlZmVyZW50aWFsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgICAgPC9DaG91ZXR0ZUxpbms+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIHJldHVybiA8ZGl2PiB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfSA8L2Rpdj5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVkQ2hvdWV0dGVMaW5rXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlZENob3VldHRlTGluay5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBFdmVudFN0ZXBwZXIgZnJvbSAnLi9FdmVudFN0ZXBwZXInO1xuaW1wb3J0ICcuL0V2ZW50RGV0YWlscy5jc3MnO1xuY29uc3QgRmFGcmVzaCA9IHJlcXVpcmUoJ3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoJyk7XG5pbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJy4vdHJhbnNsYXRpb25zJztcbmltcG9ydCBGaWx0ZXJCdXR0b25UcmF5IGZyb20gJy4vRmlsdGVyQnV0dG9uVHJheSc7XG5pbXBvcnQgeyBnZXRMYXN0VmFsaWREYXRlIH0gZnJvbSAnLi9idXR0b25Db25maWcnO1xuXG5jbGFzcyBFdmVudERldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlUGFnZUluZGV4OiAwLFxuICAgICAgZW5kU3RhdGVGaWx0ZXI6ICdBTEwnLFxuICAgICAgZGF0ZUZpbHRlcjogJ0FMTF9USU1FJ1xuICAgIH07XG4gIH1cblxuICBoYW5kbGVQYWdlQ2xpY2soZSwgcGFnZUluZGV4KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZUluZGV4OiBwYWdlSW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlckNoYW5nZShkYXRlRmlsdGVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRlRmlsdGVyOiBkYXRlRmlsdGVyXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhU291cmNlLCBsb2NhbGUsIGluY2x1ZGVMZXZlbDIsIHNob3dEYXRlRmlsdGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZUluZGV4LCBlbmRTdGF0ZUZpbHRlciwgZGF0ZUZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBmaWx0ZXJlZFBhZ2VzID0gbnVsbDtcbiAgICBjb25zdCBsYXN0RGF0ZSA9IGdldExhc3RWYWxpZERhdGUoZGF0ZUZpbHRlcik7XG5cbiAgICBjb25zdCBmaWx0ZXJlZEJ5RGF0ZSA9IChkYXRhU291cmNlIHx8IFtdKS5maWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgaWYgKCFsYXN0RGF0ZSkgcmV0dXJuIGV2ZW50O1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGV2ZW50LmZpcnN0RXZlbnQpID4gbGFzdERhdGU7XG4gICAgfSk7XG5cbiAgICBpZiAoXG4gICAgICBlbmRTdGF0ZUZpbHRlciA9PT0gJ0ZBSUxFRCcgfHxcbiAgICAgIGVuZFN0YXRlRmlsdGVyID09PSAnT0snIHx8XG4gICAgICBlbmRTdGF0ZUZpbHRlciA9PT0gJ0NBTkNFTExFRCdcbiAgICApIHtcbiAgICAgIGZpbHRlcmVkUGFnZXMgPSAoZmlsdGVyZWRCeURhdGUgfHwgW10pXG4gICAgICAgIC5maWx0ZXIoZXZlbnQgPT4gZXZlbnQuZW5kU3RhdGUgPT09IGVuZFN0YXRlRmlsdGVyKTtcbiAgICB9XG5cbiAgICBsZXQgcGFnaW5hdGlvbk1hcCA9IGdldFBhZ2luYXRpb25NYXAoZmlsdGVyZWRQYWdlcyB8fCBmaWx0ZXJlZEJ5RGF0ZSk7XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gKFxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcwLjllbScgfX1cbiAgICAgICAgICB2YWx1ZT17ZW5kU3RhdGVGaWx0ZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGVuZFN0YXRlRmlsdGVyOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgYWN0aXZlUGFnZUluZGV4OiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFMTFwiPnt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zaG93X2FsbH08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT0tcIj57dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19vbmx5X3N1Y2Nlc3N9PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNBTkNFTExFRFwiPlxuICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfb25seV9jYW5jZWxsZWR9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZBSUxFRFwiPlxuICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfb25seV9mYWlsZWR9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7c2hvd0RhdGVGaWx0ZXIgJiZcbiAgICAgICAgICA8RmlsdGVyQnV0dG9uVHJheVxuICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyMCB9fVxuICAgICAgICAgICAgYWN0aXZlQnV0dG9uSWQ9e3RoaXMuc3RhdGUuZGF0ZUZpbHRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbHRlckNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIC8+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGNvbnN0IHBhZ2UgPSBwYWdpbmF0aW9uTWFwW2FjdGl2ZVBhZ2VJbmRleF07XG5cbiAgICBjb25zdCByZWZyZXNoQnV0dG9uID1cbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlUmVmcmVzaCAmJlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTUsIGZsb2F0OiAncmlnaHQnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgPEZhRnJlc2hcbiAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06ICdzY2FsZSgxLjUpJyB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlUmVmcmVzaH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PjtcblxuICAgIGlmIChwYWdlICYmIHBhZ2UubGVuZ3RoICYmIHBhZ2luYXRpb25NYXApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdsZWZ0JywgbWFyZ2luQm90dG9tOiA1IH19PlxuICAgICAgICAgICAge2ZpbHRlcnN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3JlZnJlc2hCdXR0b259XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxpbmstcGFyZW50XCI+XG4gICAgICAgICAgICA8c3Bhbj57dHJhbnNsYXRpb25zW2xvY2FsZV0ucGFnZX08L3NwYW4+XG4gICAgICAgICAgICB7cGFnaW5hdGlvbk1hcC5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gaW5kZXggPT0gYWN0aXZlUGFnZUluZGV4XG4gICAgICAgICAgICAgICAgPyAncGFnZS1saW5rIGFjdGl2ZS1saW5rJ1xuICAgICAgICAgICAgICAgIDogJ3BhZ2UtbGluayBpbmFjdGl2ZS1saW5rJztcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0FjdGl2ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5oYW5kbGVQYWdlQ2xpY2soZSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAga2V5PXsnbGluay0nICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3BhZ2UubWFwKChsaXN0SXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGV2ZW50R3JvdXAgPSB7fTtcblxuICAgICAgICAgICAgICBsaXN0SXRlbS5ldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0pIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgZXZlbnRHcm91cFtldmVudC5hY3Rpb25dLnN0YXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0uc3RhdGVzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXS5lbmRTdGF0ZSA9IGV2ZW50LnN0YXRlO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17J2pvYnN0YXR1cy0nICsgbGlzdEl0ZW0uY2hvdWV0dGVKb2JJZCArICctJyArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RXZlbnRTdGVwcGVyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGVMZXZlbDI9e2luY2x1ZGVMZXZlbDJ9XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgICAgICAgICBrZXk9eydldmVudC1ncm91cC0nICsgbGlzdEl0ZW0uY2hvdWV0dGVKb2JJZCArICctJyArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICBncm91cHM9e2V2ZW50R3JvdXB9XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtPXtsaXN0SXRlbX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2xlZnQnLCBtYXJnaW5Cb3R0b206IDUgfX0+XG4gICAgICAgICAge2ZpbHRlcnN9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMCxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiA0MFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLm5vX3N0YXR1c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAxMCB9fT5cbiAgICAgICAgICAgICAge3JlZnJlc2hCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBnZXRQYWdpbmF0aW9uTWFwID0gKHN0YXR1c0xpc3QgPSBbXSkgPT4ge1xuICBsZXQgcGFnaW5hdGlvbk1hcCA9IFtdO1xuXG4gIGlmIChzdGF0dXNMaXN0ICYmIHN0YXR1c0xpc3QubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSBzdGF0dXNMaXN0Lmxlbmd0aDsgaSA8IGo7IGkgKz0gMTApIHtcbiAgICAgIHBhZ2luYXRpb25NYXAucHVzaChzdGF0dXNMaXN0LnNsaWNlKGksIGkgKyAxMCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFnaW5hdGlvbk1hcDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RGV0YWlscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWN0aW9uVHJhbnNsYXRpb25zIGZyb20gJy4vYWN0aW9uVHJhbnNsYXRpb25zJztcbmltcG9ydCBGYUNoZXZyb25Eb3duIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLWRvd24nO1xuaW1wb3J0IEZhQ2hldnJvblVwIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLXVwJztcbmltcG9ydCBNZEVycm9yIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9lcnJvcic7XG5pbXBvcnQgTWREb25lIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9jaGVjay1jaXJjbGUnO1xuaW1wb3J0IE1kU2NoZWR1bGUgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL3NjaGVkdWxlJztcbmltcG9ydCBGYUNvZyBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY29nJztcbmltcG9ydCBNZEhlbHBPdXRMaW5lIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9oZWxwLW91dGxpbmUnO1xuaW1wb3J0IE1kSG91ciBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvaG91cmdsYXNzLWVtcHR5JztcbmltcG9ydCBDb250cm9sbGVkQ2hvdWV0dGVMaW5rIGZyb20gJy4vQ29udHJvbGxlZENob3VldHRlTGluayc7XG5pbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJy4vdHJhbnNsYXRpb25zJztcblxuY2xhc3MgRXZlbnRTdGVwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV4cGFuZGVkOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGdyb3VwczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGxpc3RJdGVtOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfTtcblxuICBnZXRJY29uQnlTdGF0ZShzdGF0ZSkge1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgJ09LJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWREb25lXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ1BFTkRJTkcnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEhvdXJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ1NUQVJURUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGYUNvZ1xuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjMjI3NGI1Jywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0ZBSUxFRCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRXJyb3JcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0NBTkNFTExFRCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRXJyb3JcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0RVUExJQ0FURSc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRXJyb3JcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0lHTk9SRUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZFNjaGVkdWxlXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIDxNZEhlbHBPdXRMaW5lIHN0eWxlPXt7IGNvbG9yOiAnZ3JleScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiB9fSAvPjtcbiAgfVxuXG4gIGV2ZW50U3RhdGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnRklMRV9UUkFOU0ZFUicsXG4gICAgICAnRklMRV9DTEFTU0lGSUNBVElPTicsXG4gICAgICAnRklMRV9ERUxJVkVSWScsXG4gICAgICAnSU1QT1JUJyxcbiAgICAgICdWQUxJREFUSU9OX0xFVkVMXzEnLFxuICAgICAgJ0RBVEFTUEFDRV9UUkFOU0ZFUicsXG4gICAgICAnVkFMSURBVElPTl9MRVZFTF8yJyxcbiAgICAgICdFWFBPUlQnLFxuICAgICAgJ0JVSUxEX0dSQVBIJyxcbiAgICAgICdFWFBPUlRfTkVURVgnXG4gICAgXTtcbiAgfVxuXG4gIGFkZFVubGlzdGVkU3RhdGVzKGdyb3Vwcykge1xuICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMuZXZlbnRTdGF0ZXMoKTtcblxuICAgIGxldCBncm91cHNXaXRoVW5saXN0ZWQgPSBPYmplY3QuYXNzaWduKHt9LCBncm91cHMpO1xuXG4gICAgbGV0IGZpcnN0U3RhdGVGb3VuZCA9IGZhbHNlO1xuXG4gICAgc3RhdGVzLmZvckVhY2goc3RhdGUgPT4ge1xuICAgICAgaWYgKCFncm91cHNXaXRoVW5saXN0ZWRbc3RhdGVdKSB7XG4gICAgICAgIGdyb3Vwc1dpdGhVbmxpc3RlZFtzdGF0ZV0gPSB7XG4gICAgICAgICAgZW5kU3RhdGU6ICdJR05PUkVEJyxcbiAgICAgICAgICBtaXNzaW5nQmVmb3JlU3RhcnRTdGFydDogIWZpcnN0U3RhdGVGb3VuZFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3RTdGF0ZUZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBmaW5hbEdyb3VwcyA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzV2l0aFVubGlzdGVkKVxuICAgICAgLnNvcnQoKGtleTEsIGtleTIpID0+IHN0YXRlcy5pbmRleE9mKGtleTEpIC0gc3RhdGVzLmluZGV4T2Yoa2V5MikpXG4gICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBmaW5hbEdyb3Vwc1trZXldID0gZ3JvdXBzV2l0aFVubGlzdGVkW2tleV07XG4gICAgICB9KTtcbiAgICByZXR1cm4gZmluYWxHcm91cHM7XG4gIH1cblxuICBoYW5kbGVUb2dnbGVWaXNpYmlsaXR5KGlkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWRcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNvbWJpbmVkU3BsaXQoZm9ybWF0dGVkR3JvdXBzLCBncm91cHMsIG5hbWUpIHtcbiAgICBjb25zdCBjb21iaW5lZCA9IFtdO1xuICAgIGZvciAobGV0IGkgaW4gZ3JvdXBzKSB7XG4gICAgICBjb25zdCBncm91cCA9IGdyb3Vwc1tpXTtcbiAgICAgIGNvbWJpbmVkW2dyb3VwXSA9IGZvcm1hdHRlZEdyb3Vwc1tncm91cF07XG5cbiAgICAgIGlmIChuYW1lICE9PSBncm91cCkge1xuICAgICAgICBkZWxldGUgZm9ybWF0dGVkR3JvdXBzW2dyb3VwXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9ybWF0dGVkR3JvdXBzW25hbWVdID0gY29tYmluZWQ7XG4gIH1cblxuICBhZ2dyZWdnYXRlRmlsZUV2ZW50cyhkYXRhKSB7XG4gICAgbGV0IGdyb3VwcyA9IHsuLi5kYXRhfTtcbiAgICBsZXQgZW5kU3RhdGUgPSBudWxsO1xuICAgIGxldCBlcnJvck9uID0gbnVsbDtcbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goIGdyb3VwID0+IHtcbiAgICAgIGlmIChncm91cCA9PT0gJ0ZJTEVfQ0xBU1NJRklDQVRJT04nIHx8IGdyb3VwID09PSAnRklMRV9UUkFOU0ZFUicpIHtcbiAgICAgICAgZW5kU3RhdGUgPSBncm91cHNbZ3JvdXBdLmVuZFN0YXRlO1xuICAgICAgICBpZiAoZW5kU3RhdGUgPT09ICdGQUlMRUQnKSB7XG4gICAgICAgICAgZXJyb3JPbiA9IGdyb3VwO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBncm91cHNbZ3JvdXBdXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoZW5kU3RhdGUgIT09IG51bGwpIHtcbiAgICAgIGdyb3Vwcy5GSUxFX0RFTElWRVJZID0ge1xuICAgICAgICBlbmRTdGF0ZTogZW5kU3RhdGUsXG4gICAgICAgIGVycm9yT246IGVycm9yT25cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxuXG4gIGJ1bGxldChmb3JtYXR0ZWRHcm91cHMsIGdyb3VwcywgbG9jYWxlLCBpbmNsdWRlTGV2ZWwyKSB7XG4gICAgY29uc3QgY29sdW1uU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICBoZWlnaHQ6IDQ1XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhmb3JtYXR0ZWRHcm91cHMpLm1hcCgoZ3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY29sdW1uO1xuICAgICAgbGV0IGV2ZW50ID0gZm9ybWF0dGVkR3JvdXBzW2dyb3VwXTtcblxuICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgY29sdW1uID0gT2JqZWN0LmtleXMoZXZlbnQpLm1hcCgoa2V5LCBpKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRXZlbnQoXG4gICAgICAgICAgICBldmVudFtrZXldLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgICAgaW5jbHVkZUxldmVsMlxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sdW1uID0gdGhpcy5yZW5kZXJFdmVudChcbiAgICAgICAgICBldmVudCxcbiAgICAgICAgICBncm91cHMsXG4gICAgICAgICAgZ3JvdXAsXG4gICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgaW5kZXggPT09IDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgaW5jbHVkZUxldmVsMlxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDxkaXYga2V5PXsnYnVsbGV0LScgKyBpbmRleH0gc3R5bGU9e2NvbHVtblN0eWxlfT57Y29sdW1ufTwvZGl2PjtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlckV2ZW50KFxuICAgIGV2ZW50LFxuICAgIGdyb3VwcyxcbiAgICBncm91cCxcbiAgICBpbmRleCxcbiAgICBpc0ZpcnN0LFxuICAgIGNvbHVtbkluZGV4ID0gMCxcbiAgICBsb2NhbGUsXG4gICAgaW5jbHVkZUxldmVsMlxuICApIHtcbiAgICBjb25zdCBncm91cFN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdydcbiAgICB9O1xuXG4gICAgY29uc3QgZ3JvdXBUZXh0ID0ge1xuICAgICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgICBtYXJnaW5MZWZ0OiA1XG4gICAgfTtcblxuICAgIGNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBib3JkZXJDb2xvcjogJ3JnYigxODksIDE4OSwgMTg5KScsXG4gICAgICBtYXJnaW5MZWZ0OiAtNixcbiAgICAgIGJvcmRlclRvcFN0eWxlOiAnc29saWQnLFxuICAgICAgYm9yZGVyVG9wV2lkdGg6IDEsXG4gICAgICB3aWR0aDogMzAsXG4gICAgICBib3JkZXJSYWRpdXM6IDMwLFxuICAgICAgbWFyZ2luOiA4LFxuICAgICAgdHJhbnNmb3JtOiBjb2x1bW5JbmRleCA+IDAgJiYgJ3RyYW5zbGF0ZVkoLTAuNWVtKSByb3RhdGUoMjVkZWcpICdcbiAgICB9O1xuXG4gICAgaWYgKCFBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5zdGF0ZXNbZXZlbnQuZW5kU3RhdGVdKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCB0b29sVGlwVGV4dCA9IEFjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLnN0YXRlc1tldmVudC5lbmRTdGF0ZV07XG5cbiAgICBpZiAoZXZlbnQuc3RhdGVzICYmIGV2ZW50LnN0YXRlc1tncm91cHNbZ3JvdXBdLnN0YXRlcy5sZW5ndGggLSAxXSkge1xuICAgICAgdG9vbFRpcFRleHQgKz0gJyAnICsgZXZlbnQuc3RhdGVzW2V2ZW50LnN0YXRlcy5sZW5ndGggLSAxXS5kYXRlO1xuICAgIH1cblxuICAgIGlmIChldmVudC5lcnJvck9uKSB7XG4gICAgICB0b29sVGlwVGV4dCA9IEFjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLmVycm9yTWVzc2FnZVtldmVudC5lcnJvck9uXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17Z3JvdXBTdHlsZX0ga2V5PXsnZ3JvdXAtJyArIGdyb3VwICsgaW5kZXh9PlxuICAgICAgICB7IWlzRmlyc3QgJiYgPGRpdiBzdHlsZT17bGlua1N0eWxlfSAvPn1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHRpdGxlPXt0b29sVGlwVGV4dH1cbiAgICAgICAgICBzdHlsZT17eyBvcGFjaXR5OiBldmVudC5taXNzaW5nQmVmb3JlU3RhcnRTdGFydCA/IDAuMiA6IDEgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLmdldEljb25CeVN0YXRlKGV2ZW50LmVuZFN0YXRlKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uZ3JvdXBUZXh0LFxuICAgICAgICAgICAgb3BhY2l0eTogZXZlbnQubWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQgPyAwLjIgOiAxXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb250cm9sbGVkQ2hvdWV0dGVMaW5rIGluY2x1ZGVMZXZlbDI9e2luY2x1ZGVMZXZlbDJ9IGV2ZW50cz17ZXZlbnR9PlxuICAgICAgICAgICAge0FjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLnRleHRbZ3JvdXBdfVxuICAgICAgICAgIDwvQ29udHJvbGxlZENob3VldHRlTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0ZXBwZXJzdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiAxMFxuICAgIH07XG5cbiAgICBjb25zdCB7IGdyb3VwcywgbGlzdEl0ZW0sIGxvY2FsZSwgaW5jbHVkZUxldmVsMiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGZvcm1hdHRlZEdyb3VwcyA9IHRoaXMuYWRkVW5saXN0ZWRTdGF0ZXMoZ3JvdXBzKTtcbiAgICBmb3JtYXR0ZWRHcm91cHMgPSB0aGlzLmFnZ3JlZ2dhdGVGaWxlRXZlbnRzKGZvcm1hdHRlZEdyb3Vwcyk7XG4gICAgdGhpcy5jcmVhdGVDb21iaW5lZFNwbGl0KGZvcm1hdHRlZEdyb3VwcywgWydFWFBPUlQnLCAnRVhQT1JUX05FVEVYJ10sICdFWFBPUlQnKTtcbiAgICBjb25zdCBidWxsZXRzID0gdGhpcy5idWxsZXQoZm9ybWF0dGVkR3JvdXBzLCBncm91cHMsIGxvY2FsZSwgaW5jbHVkZUxldmVsMik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9eydldmVudCcgKyBsaXN0SXRlbS5jaG91ZXR0ZUpvYklkfVxuICAgICAgICBzdHlsZT17eyBtYXJnaW46ICdhdXRvJywgd2lkdGg6ICc5OCUnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbkxlZnQ6IC0xNSB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICB0aXRsZT17dHJhbnNsYXRpb25zW2xvY2FsZV0uZHVyYXRpb24gKyBsaXN0SXRlbS5kdXJhdGlvbn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgIGNvbG9yOiAnI2U1OTQwMCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogLTgsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGlzdEl0ZW0uc3RhcnRlZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bGlzdEl0ZW0ucHJvdmlkZXIgJiZcbiAgICAgICAgICAgIGxpc3RJdGVtLnByb3ZpZGVyLm5hbWUgJiZcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcwLjhlbScsIGZvbnRXZWlnaHQ6IDYwMCwgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLnByb3ZpZGVyLm5hbWV9XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzAuOWVtJywgZm9udFdlaWdodDogNjAwLCBmbGV4OiAyIH19PlxuICAgICAgICAgICAge2xpc3RJdGVtLmZpbGVOYW1lIHx8IEFjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLmZpbGVuYW1lLnVuZGVmaW5lZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0ZXBwZXJzdHlsZX0+XG4gICAgICAgICAge2J1bGxldHN9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBtYXJnaW5SaWdodDogMjAsIG1hcmdpblRvcDogLTUwIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWV4cGFuZGVkID8gPEZhQ2hldnJvbkRvd24gLz4gOiA8RmFDaGV2cm9uVXAgLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZXhwYW5kZWQgJiZcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAnMjVweCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnN0YXJ0ZWR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmZpcnN0RXZlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5lbmRlZH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7bGlzdEl0ZW0ubGFzdEV2ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uZHVyYXRpb259XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmR1cmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFN0ZXBwZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudFN0ZXBwZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBGaWx0ZXJCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVDbGljaygpIHtcbiAgICBjb25zdCB7IGhhbmRsZUNsaWNrLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaGFuZGxlQ2xpY2sgJiYgdHlwZW9mIGhhbmRsZUNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBoYW5kbGVDbGljayhpZCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGFjdGl2ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhY3RpdmVTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMjE5NkYzJyxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgIzE1NTk5ZCcsXG4gICAgfTtcbiAgICBjb25zdCBpbmFjdGl2ZVN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDhkOGQ4JyxcbiAgICB9O1xuICAgIGNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcbiAgICAgIHBhZGRpbmc6ICcwLjJlbSAwLjRlbScsXG4gICAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNSUnLFxuICAgICAgbWluV2lkdGg6IDQwLFxuICAgICAgbWFyZ2luTGVmdDogMTBcbiAgICB9O1xuXG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgZGVmYXVsdFN0eWxlLFxuICAgICAgYWN0aXZlID8gYWN0aXZlU3R5bGUgOiBpbmFjdGl2ZVN0eWxlXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb2ludGVyRXZlbnRzOiAnbm9uZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsdGVyQnV0dG9uIGZyb20gJy4vRmlsdGVyQnV0dG9uJztcbmltcG9ydCBidXR0b25Db25maWcgZnJvbSAnLi9idXR0b25Db25maWcnO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL2FjdGlvblRyYW5zbGF0aW9ucyc7XG5cbmNsYXNzIEZpbHRlckJ1dHRvblRyYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlQnV0dG9uSWQ6ICdBTExfVElNRSdcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9jYWxlLCBhY3RpdmVCdXR0b25JZCwgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17dGhpcy5wcm9wcy5zdHlsZX0+XG4gICAgICAgIHtidXR0b25Db25maWcuZmllbGRzLm1hcChmaWVsZCA9PlxuICAgICAgICAgIDxGaWx0ZXJCdXR0b25cbiAgICAgICAgICAgIGFjdGl2ZT17YWN0aXZlQnV0dG9uSWQgPT09IGZpZWxkLmlkfVxuICAgICAgICAgICAgaWQ9e2ZpZWxkLmlkfVxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IHsgb25DaGFuZ2UoZmllbGQuaWQpIH19XG4gICAgICAgICAgICBrZXk9eydmaWx0ZXItYnV0dG9uLScgKyBmaWVsZC5pZH1cbiAgICAgICAgICAgIGxhYmVsPXt0cmFuc2xhdGlvbnNbbG9jYWxlXS5maWx0ZXJCdXR0b25bZmllbGQuaWRdfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJ1dHRvblRyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCdXR0b25UcmF5LmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBkaW1lbnNpb24gfSBmcm9tICcuLi9zdHlsZXMnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyVGltZWxpbmUuY3NzJztcblxuY2xhc3MgSGVhZGVyVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhvdmVyVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdmFsaWREYXlzT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdmFsaWRGcm9tRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGVmZmVjdGl2ZVBlcmlvZHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dUb29sdGlwOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBoYW5kbGVUb2dnbGVUb29sVGlwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1Rvb2x0aXA6ICF0aGlzLnN0YXRlLnNob3dUb29sdGlwXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBlZmZlY3RpdmVQZXJpb2RzLCB2YWxpZERheXNPZmZzZXQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgIGhlaWdodDogJzE4cHgnLFxuICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgd2lkdGg6IGRpbWVuc2lvbi50aW1lTGluZVdpZHRoICsgJyUnLFxuICAgICAgbWFyZ2luOiAnMTBweCBhdXRvJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBmb250U2l6ZTogJzAlJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfTtcblxuICAgIGxldCB0aW1lbGluZVdyYXBwZXIgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgbWFyZ2luQm90dG9tOiAyXG4gICAgfTtcblxuICAgIGxldCB0aW1lQmxvY2sgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZVN1Y2Nlc3MsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgZm9udFNpemU6ICcwLjhyZW0nLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snXG4gICAgfTtcblxuICAgIGNvbnN0IHRpdGxlVGV4dCA9IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxMHB4LCAyMHB4KScsXG4gICAgICBmb250U2l6ZTogJzEuMmVtJyxcbiAgICAgIGNvbG9yOiBlZmZlY3RpdmVQZXJpb2RzLmxlbmd0aCA/IGNvbG9yLmVmZmVjdGl2ZSA6IGNvbG9yLmZhaWwsXG4gICAgICB6SW5kZXg6IDk5XG4gICAgfTtcblxuICAgIGNvbnN0IHRvb2xUaXBTdHlsZSA9IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMXMnLFxuICAgICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgICBmb250U2l6ZTogJzAuOGVtJyxcbiAgICAgIGNvbG9yOiBjb2xvci5mb250LnRvb2x0aXAsXG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvci50b29sdGlwLFxuICAgICAgcGFkZGluZzogMTAsXG4gICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgekluZGV4OiA5OVxuICAgIH07XG5cbiAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgdGV4dFNoYWRvdzogJzBweCAwcHggNXB4IGJsYWNrJyxcbiAgICAgIGZvbnRTaXplOiAnMTJweCcsXG4gICAgICBoZWlnaHQ6IDE4LFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnXG4gICAgfTtcblxuICAgIGxldCBoclN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgIGhlaWdodDogJzE4cHgnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBtYXJnaW5MZWZ0OiAzMyArIHZhbGlkRGF5c09mZnNldCArICclJ1xuICAgIH07XG5cbiAgICBsZXQgaG92ZXJUZXh0ID0gZWZmZWN0aXZlUGVyaW9kcy5sZW5ndGhcbiAgICAgID8gdGhpcy5wcm9wcy5ob3ZlclRleHRcbiAgICAgIDogJ1VneWxkaWcgbGluamUuIE1hbmdsZXIgZGF0YSc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVXcmFwcGVyfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt0aXRsZVRleHR9XG4gICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMuaGFuZGxlVG9nZ2xlVG9vbFRpcC5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVUb2dnbGVUb29sVGlwLmJpbmQodGhpcyl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5saW5lfVxuICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dUb29sdGlwICYmXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0b29sVGlwU3R5bGV9PiB7aG92ZXJUZXh0fSA8L2Rpdj59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVsaW5lfSBzdHlsZT17dGltZWxpbmVTdHlsZX0+XG4gICAgICAgICAgPGRpdiBrZXk9eyd0aW1lbGluZS1oZWFkZXItd3JhcHBlcicgKyB0aGlzLnByb3BzLmluZGV4fT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e2hyU3R5bGV9IC8+XG4gICAgICAgICAgICB7ZWZmZWN0aXZlUGVyaW9kcy5tYXAoKGVmZmVjdGl2ZVBlcmlvZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHBlcmlvZEJsb2NrID0geyAuLi50aW1lQmxvY2sgfTtcbiAgICAgICAgICAgICAgcGVyaW9kQmxvY2sud2lkdGggPVxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC1cbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICtcbiAgICAgICAgICAgICAgICAnJSc7XG5cbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGVyaW9kQmxvY2subWFyZ2luTGVmdCA9XG4gICAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICsgJyUnO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPVxuICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiAtXG4gICAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2RzW2luZGV4IC0gMV0udGltZWxpbmVFbmRQb3NpdGlvbiArXG4gICAgICAgICAgICAgICAgICAnJSc7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBsZXQgaXRlbVRleHQgPSBlZmZlY3RpdmVQZXJpb2QudG87XG5cbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gPiAwICYmXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLmZyb20ubG9jYWxlQ29tcGFyZShlZmZlY3RpdmVQZXJpb2QudG8pICE9PSAwXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGl0ZW1UZXh0ID0gZWZmZWN0aXZlUGVyaW9kLmZyb20gKyAnIC0gJyArIGVmZmVjdGl2ZVBlcmlvZC50bztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9eyd0aW1lbGluZS1oZWFkZXItYmxvY2snICsgaW5kZXh9IHN0eWxlPXtwZXJpb2RCbG9ja30+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGVyaW9kLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyVGltZWxpbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvciwgZGltZW5zaW9uIH0gZnJvbSAnLi4vc3R5bGVzJztcblxuY29uc3QgcGVyaW9kID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgZnJvbTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0bzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aW1lbGluZVN0YXJ0UG9zaXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGltZWxpbmVFbmRQb3NpdGlvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG59KTtcblxuY29uc3QgdGltZXRhYmxlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgb2JqZWN0SWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcGVyaW9kczogUHJvcFR5cGVzLmFycmF5T2YocGVyaW9kKS5pc1JlcXVpcmVkXG59KS5pc1JlcXVpcmVkO1xuXG5jbGFzcyBUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdGltZXRhYmxlczogUHJvcFR5cGVzLmFycmF5T2YodGltZXRhYmxlKS5pc1JlcXVpcmVkLFxuICAgIGlzTGFzdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICB2YWxpZERheXNPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRpbWV0YWJsZXMsIHZhbGlkRGF5c09mZnNldCwgaXNMYXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUJhY2tncm91bmQsXG4gICAgICB3aWR0aDogZGltZW5zaW9uLnRpbWVMaW5lV2lkdGggKyAnJScsXG4gICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgfTtcblxuICAgIGNvbnN0IHRpbWVsaW5lV3JhcHBlciA9IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBwYWRkaW5nQm90dG9tOiBpc0xhc3QgPyAwIDogMTBcbiAgICB9O1xuXG4gICAgbGV0IHRpbWVCbG9jayA9IHtcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgIH07XG5cbiAgICBsZXQgdGV4dFN0eWxlID0ge1xuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBvdmVyZmxvdzogJ3Zpc2JsZScsXG4gICAgICB0ZXh0U2hhZG93OiAnMHB4IDBweCA1cHggYmxhY2snLFxuICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8gMTBweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgZm9udFNpemU6ICcwLjdlbScsXG4gICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICB9O1xuXG4gICAgbGV0IGhyU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgIH07XG5cbiAgICBoclN0eWxlLm1hcmdpbkxlZnQgPSAzMyArIHZhbGlkRGF5c09mZnNldCArICclJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVdyYXBwZXJ9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVN0eWxlfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtoclN0eWxlfSAvPlxuICAgICAgICAgIHt0aW1ldGFibGVzLm1hcCh0aW1ldGFibGUgPT5cbiAgICAgICAgICAgIHRpbWV0YWJsZS5wZXJpb2RzLm1hcCgocGVyaW9kLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpbWV0YWJsZS5vYmplY3RJZDtcbiAgICAgICAgICAgICAgY29uc3QgaG92ZXIgPSBgJHt0aXRsZX0gXFxuKHBlcmlvZDogJHtwZXJpb2QuZnJvbX0gLT4gJHtwZXJpb2QudG99KWA7XG4gICAgICAgICAgICAgIGxldCBwZXJpb2RCbG9jayA9IHsgLi4udGltZUJsb2NrIH07XG4gICAgICAgICAgICAgIHBlcmlvZEJsb2NrLndpZHRoID1cbiAgICAgICAgICAgICAgICBwZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAtIHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJSc7XG4gICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPSBwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICsgJyUnO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGtleT17J3RpbWV0YWJsZS1wZXJpb2QtJyArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17cGVyaW9kQmxvY2t9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtob3Zlcn1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dFN0eWxlfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHVuZGVmaW5lZCk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL25vdG9zYW5za2FubmFkYS5jc3MpO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEthbm5hZGEnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzE5MTkxOTtcXG59XFxuXFxucCxoMSxoMixoMyxoNCxoNSwgc3BhbiB7XFxuICAgIGNvbG9yOiAjMTkxOTE5O1xcbn1cXG5cXG4uXzJwT1pUNk9Fd1Iydl9jaTcyVzRrb0I6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5tU0dLVmxtY1dFU2J4RUhyN0JhejIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLl8xaDlBRy1WV3hfVTQwVHhWRTAxNTVLIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLl8xak4tTjd5ZlNLWWgxS1V6cmFzNGxaIHtcXG4gICAgY29sb3I6ICMwRDNDNjE7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uXzIxcDU1Vk1fZTc1XzJpQmlyVzFNa2Yge1xcbiAgICBjb2xvcjogIzIxOTZGMztcXG59XFxuXFxuXFxuYSB7XFxuICAgIGNvbG9yOiAjMjE5NkYzO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIsIGE6Zm9jdXMge1xcbiAgICBjb2xvcjogIzE5NzZEMjtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGVyaW9kLWJsb2NrXCI6IFwiXzJwT1pUNk9Fd1Iydl9jaTcyVzRrb0JcIixcblx0XCJwYWdlLWxpbmstcGFyZW50XCI6IFwibVNHS1ZsbWNXRVNieEVIcjdCYXoyXCIsXG5cdFwicGFnZS1saW5rXCI6IFwiXzFoOUFHLVZXeF9VNDBUeFZFMDE1NUtcIixcblx0XCJhY3RpdmUtbGlua1wiOiBcIl8xak4tTjd5ZlNLWWgxS1V6cmFzNGxaXCIsXG5cdFwiaW5hY3RpdmUtbGlua1wiOiBcIl8yMXA1NVZNX2U3NV8yaUJpclcxTWtmXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcz10cnVlIS4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLl8ydFUtZjg2Zl80MmcxcFZWUVpYRlhDIHtcXG4gIGJhY2tncm91bmQ6ICNCOTE5MTk7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgI0I5MTkxOSksIGNvbG9yLXN0b3AoNjYlLCAjQjkxOTE5KSwgY29sb3Itc3RvcCg2NiUsICNmNmY2ZjYpLCBjb2xvci1zdG9wKDEwMCUsICNmNmY2ZjYpKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI0I5MTkxOSksIGNvbG9yLXN0b3AoNjYlLCAjZjZmNmY2KSwgY29sb3Itc3RvcCgxMDAlLCAjZjZmNmY2KSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRpbWVsaW5lXCI6IFwiXzJ0VS1mODZmXzQyZzFwVlZRWlhGWENcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9tb2R1bGVzPXRydWUhLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUNoZXZyb25Eb3duID0gZnVuY3Rpb24gRmFDaGV2cm9uRG93bihwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zNy42IDE4bC0xNi42IDE2LjZxLTAuNCAwLjQtMSAwLjR0LTEtMC40bC0xNi42LTE2LjZxLTAuNC0wLjQtMC40LTF0MC40LTFsMy43LTMuN3EwLjUtMC40IDEtMC40dDEgMC40bDExLjkgMTEuOSAxMS45LTExLjlxMC40LTAuNCAxLTAuNHQxIDAuNGwzLjcgMy43cTAuNCAwLjQgMC40IDF0LTAuNCAxeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYUNoZXZyb25Eb3duO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLWRvd24uanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUNoZXZyb25VcCA9IGZ1bmN0aW9uIEZhQ2hldnJvblVwKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTM3LjYgMjkuN2wtMy43IDMuN3EtMC41IDAuNC0xIDAuNHQtMS0wLjRsLTExLjktMTEuOS0xMS44IDExLjlxLTAuNSAwLjQtMS4xIDAuNHQtMS0wLjRsLTMuNy0zLjdxLTAuNC0wLjQtMC40LTF0MC40LTFsMTYuNi0xNi42cTAuNC0wLjQgMS0wLjR0MSAwLjRsMTYuNiAxNi42cTAuNCAwLjQgMC40IDF0LTAuNCAxeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYUNoZXZyb25VcDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi11cC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZhQ29nID0gZnVuY3Rpb24gRmFDb2cocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMjUuOSAyMHEwLTIuNC0xLjctNHQtNC4xLTEuNy00IDEuNy0xLjcgNCAxLjcgNCA0IDEuNyA0LjEtMS43IDEuNy00eiBtMTEuNC0yLjR2NC45cTAgMC4zLTAuMiAwLjV0LTAuNCAwLjNsLTQuMiAwLjZxLTAuNCAxLjMtMC44IDIuMSAwLjcgMS4xIDIuMyAzLjEgMC4zIDAuMiAwLjMgMC41dC0wLjIgMC41cS0wLjYgMC45LTIuMiAyLjR0LTIuMSAxLjZxLTAuMyAwLTAuNi0wLjJsLTMuMS0yLjRxLTEgMC41LTIgMC45LTAuNCAzLTAuNyA0LjEtMC4xIDAuNi0wLjggMC42aC00LjlxLTAuMyAwLTAuNi0wLjF0LTAuMi0wLjVsLTAuNy00LjFxLTEuMS0wLjQtMi0wLjlsLTMuMSAyLjRxLTAuMiAwLjItMC42IDAuMi0wLjMgMC0wLjUtMC4yLTIuOC0yLjYtMy43LTMuOC0wLjItMC4yLTAuMi0wLjUgMC0wLjIgMC4yLTAuNSAwLjMtMC41IDEuMS0xLjV0MS4yLTEuNXEtMC42LTEuMi0wLjktMi4zbC00LjEtMC42cS0wLjIgMC0wLjQtMC4ydC0wLjItMC42di00LjlxMC0wLjMgMC4yLTAuNXQwLjQtMC4zbDQuMi0wLjdxMC4zLTEgMC44LTItMC45LTEuMy0yLjQtMy4xLTAuMi0wLjMtMC4yLTAuNSAwLTAuMiAwLjItMC41IDAuNi0wLjggMi4yLTIuNHQyLjEtMS42cTAuMyAwIDAuNiAwLjJsMy4xIDIuNHExLTAuNSAyLTAuOSAwLjQtMyAwLjctNC4xIDAuMS0wLjYgMC44LTAuNmg0LjlxMC4zIDAgMC42IDAuMXQwLjIgMC41bDAuNyA0LjFxMSAwLjQgMiAwLjlsMy4xLTIuNHEwLjItMC4yIDAuNi0wLjIgMC4zIDAgMC41IDAuMiAyLjkgMi42IDMuNyAzLjggMC4yIDAuMiAwLjIgMC41IDAgMC4yLTAuMiAwLjUtMC40IDAuNS0xLjIgMS41dC0xLjIgMS41cTAuNiAxLjIgMSAyLjJsNCAwLjdxMC4zIDAgMC41IDAuMnQwLjIgMC42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYUNvZztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvZmEvY29nLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFSZWZyZXNoID0gZnVuY3Rpb24gRmFSZWZyZXNoKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTM2LjcgMjMuNnEwIDAuMSAwIDAuMS0xLjQgNi02IDkuN3QtMTAuNiAzLjdxLTMuMyAwLTYuNC0xLjJ0LTUuNC0zLjVsLTIuOSAyLjlxLTAuNCAwLjQtMSAwLjR0LTEtMC40LTAuNC0xdi0xMHEwLTAuNiAwLjQtMXQxLTAuNGgxMHEwLjYgMCAxIDAuNHQwLjUgMS0wLjUgMWwtMyAzcTEuNiAxLjUgMy42IDIuM3Q0LjEgMC44cTMgMCA1LjYtMS40dDQuMi00cTAuMi0wLjQgMS4yLTIuNiAwLjEtMC41IDAuNi0wLjVoNC4zcTAuMyAwIDAuNSAwLjJ0MC4yIDAuNXogbTAuNi0xNy45djEwcTAgMC42LTAuNCAxdC0xIDAuNGgtMTBxLTAuNiAwLTEtMC40dC0wLjUtMSAwLjUtMWwzLTMuMXEtMy4zLTMtNy44LTMtMi45IDAtNS41IDEuNHQtNC4yIDRxLTAuMiAwLjQtMS4yIDIuNi0wLjIgMC41LTAuNiAwLjVoLTQuNXEtMC4zIDAtMC41LTAuMnQtMC4yLTAuNXYtMC4xcTEuNS02IDYtOS43dDEwLjctMy43cTMuMyAwIDYuNCAxLjJ0NS40IDMuNWwzLTIuOXEwLjQtMC40IDEtMC40dDEgMC40IDAuNCAxeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYVJlZnJlc2g7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL3JlZnJlc2guanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZENoZWNrQ2lyY2xlID0gZnVuY3Rpb24gTWRDaGVja0NpcmNsZShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20xNi42IDI4LjRsMTUtMTUtMi4zLTIuNS0xMi43IDEyLjctNS45LTUuOS0yLjMgMi4zeiBtMy40LTI1YzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kQ2hlY2tDaXJjbGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2NoZWNrLWNpcmNsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kRXJyb3IgPSBmdW5jdGlvbiBNZEVycm9yKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIxLjYgMjEuNnYtMTBoLTMuMnYxMGgzLjJ6IG0wIDYuOHYtMy40aC0zLjJ2My40aDMuMnogbS0xLjYtMjVjOS4yIDAgMTYuNiA3LjQgMTYuNiAxNi42cy03LjQgMTYuNi0xNi42IDE2LjYtMTYuNi03LjQtMTYuNi0xNi42IDcuNC0xNi42IDE2LjYtMTYuNnonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWRFcnJvcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvbWQvZXJyb3IuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZEhlbHBPdXRsaW5lID0gZnVuY3Rpb24gTWRIZWxwT3V0bGluZShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMCAxMGMzLjcgMCA2LjYgMyA2LjYgNi42IDAgNC4yLTUgNC43LTUgOC40aC0zLjJjMC01LjQgNS01IDUtOC40IDAtMS44LTEuNi0zLjItMy40LTMuMnMtMy40IDEuNC0zLjQgMy4yaC0zLjJjMC0zLjYgMi45LTYuNiA2LjYtNi42eiBtMCAyMy40YzcuMyAwIDEzLjQtNi4xIDEzLjQtMTMuNHMtNi4xLTEzLjQtMTMuNC0xMy40LTEzLjQgNi4xLTEzLjQgMTMuNCA2LjEgMTMuNCAxMy40IDEzLjR6IG0wLTMwYzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6IG0tMS42IDI2LjZ2LTMuNGgzLjJ2My40aC0zLjJ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kSGVscE91dGxpbmU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2hlbHAtb3V0bGluZS5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kSG91cmdsYXNzRW1wdHkgPSBmdW5jdGlvbiBNZEhvdXJnbGFzc0VtcHR5KHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIwIDE5LjFsNi42LTYuNnYtNS45aC0xMy4ydjUuOXogbTYuNiA4LjRsLTYuNi02LjYtNi42IDYuNnY1LjloMTMuMnYtNS45eiBtLTE2LjYtMjQuMWgyMHYxMGwtNi42IDYuNiA2LjYgNi42djEwaC0yMHYtMTBsNi42LTYuNi02LjYtNi42di0xMHonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWRIb3VyZ2xhc3NFbXB0eTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvbWQvaG91cmdsYXNzLWVtcHR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRTY2hlZHVsZSA9IGZ1bmN0aW9uIE1kU2NoZWR1bGUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMjAuOSAxMS42djguOGw3LjUgNC40LTEuMyAyLjItOC43LTUuNHYtMTBoMi41eiBtLTAuOSAyMS44YzcuMyAwIDEzLjQtNi4xIDEzLjQtMTMuNHMtNi4xLTEzLjQtMTMuNC0xMy40LTEzLjQgNi4xLTEzLjQgMTMuNCA2LjEgMTMuNCAxMy40IDEzLjR6IG0wLTMwYzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kU2NoZWR1bGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL3NjaGVkdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcLykvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvZml4VXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0V2ZW50RGV0YWlscy5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vRXZlbnREZXRhaWxzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vRXZlbnREZXRhaWxzLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vSGVhZGVyVGltZWxpbmUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0hlYWRlclRpbWVsaW5lLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vSGVhZGVyVGltZWxpbmUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmNzc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==