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
    case 'LAST_24_HOURS':
      {
        var _now2 = new Date();
        return new Date(_now2.setDate(_now2.getDate() - 1));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NjVjZGY0ODMwZDNmN2Y3ZmQxMiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjdGlvblRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhbnNsYXRpb25zLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Nob3VldHRlTGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVkQ2hvdWV0dGVMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudFN0ZXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvblRyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1kb3duLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tdXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvZmEvY29nLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL3JlZnJlc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQvY2hlY2stY2lyY2xlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2Vycm9yLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2hlbHAtb3V0bGluZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9ob3VyZ2xhc3MtZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQvc2NoZWR1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvZml4VXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuY3NzPzVjYzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzPzI3N2EiXSwibmFtZXMiOlsiY29sb3JEZWYiLCJibGFjayIsIndoaXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYmlnYmx1ZSIsImRhcmtCbHVlIiwiZGFya0dyZXkiLCJncmV5IiwibGlnaHRHcmV5IiwiZW50dXIiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiY29sb3IiLCJmb250IiwiaW52ZXJzZSIsInRpdGxlIiwiaW5mbzEiLCJpbmZvMiIsImluZm8zIiwid2FybiIsImRpc2FibGVkIiwidG9vbHRpcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJlZmZlY3RpdmUiLCJmYWlsIiwibW9kYWwiLCJiYWNrZHJvcCIsInRhYkFjdGl2ZSIsInRpbWVMaW5lQmFja2dyb3VuZCIsInRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kIiwidGltZUxpbmVCb3JkZXIiLCJ0aW1lTGluZVN1Y2Nlc3MiLCJ0aW1lTGluZUZhaWwiLCJ0YWJsZUhlYWRlciIsInRhYmxlUm93IiwidGFibGVJbmZvIiwidmFsaWQiLCJpbnZhbGlkIiwiZXhwaXJpbmciLCJoaWdobGlnaHQiLCJkaW1lbnNpb24iLCJ0aW1lTGluZVdpZHRoIiwic3R5bGVzIiwidGV4dCIsIkZJTEVfVFJBTlNGRVIiLCJGSUxFX0NMQVNTSUZJQ0FUSU9OIiwiRklMRV9ERUxJVkVSWSIsIklNUE9SVCIsIkVYUE9SVCIsIkVYUE9SVF9ORVRFWCIsIlZBTElEQVRJT05fTEVWRUxfMSIsIkRBVEFTUEFDRV9UUkFOU0ZFUiIsIlZBTElEQVRJT05fTEVWRUxfMiIsIkJVSUxEX0dSQVBIIiwiVU5LTk9XTiIsImZpbGVuYW1lIiwidW5kZWZpbmVkIiwic3RhdGVzIiwiT0siLCJQRU5ESU5HIiwiU1RBUlRFRCIsIkZBSUxFRCIsIkRVUExJQ0FURSIsIklHTk9SRUQiLCJDQU5DRUxMRUQiLCJlcnJvck1lc3NhZ2UiLCJmaWx0ZXJCdXR0b24iLCJBTExfVElNRSIsIkxBU1RfMjRfSE9VUlMiLCJMQVNUX1dFRUsiLCJMQVNUX01PTlRIIiwiYnV0dG9uQ29uZmlnIiwiZmllbGRzIiwiaWQiLCJnZXRMYXN0VmFsaWREYXRlIiwibm93IiwiRGF0ZSIsInNldE1vbnRoIiwiZ2V0TW9udGgiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInBhZ2UiLCJub19zdGF0dXMiLCJzdGFydGVkIiwiZW5kZWQiLCJkdXJhdGlvbiIsInNob3dfYWxsIiwic2hvd19vbmx5X2ZhaWxlZCIsInNob3dfb25seV9zdWNjZXNzIiwic2hvd19vbmx5X2NhbmNlbGxlZCIsIlRpbWVsaW5lIiwiSGVhZGVyVGltZWxpbmUiLCJFdmVudERldGFpbHMiLCJDaG91ZXR0ZUxpbmsiLCJhY3Rpb24iLCJyZWZlcmVudGlhbCIsImNoaWxkcmVuIiwiYmFzZVVSTCIsIndpbmRvdyIsImNvbmZpZyIsImNob3VldHRlQmFzZVVybCIsImFjdGlvbk1hcCIsIlVSTCIsIkNvbnRyb2xsZWRDaG91ZXR0ZUxpbmsiLCJwcm9wcyIsImV2ZW50cyIsImluY2x1ZGVMZXZlbDIiLCJzdXBwb3J0ZWRBY3Rpb25zIiwiY2hvdWV0ZUFjdGlvbk1hcCIsInB1c2giLCJsZW5ndGgiLCJlbmRTdGF0ZSIsImluZGV4T2YiLCJjaG91ZXR0ZUpvYklkIiwiQ29tcG9uZW50IiwiRmFGcmVzaCIsInJlcXVpcmUiLCJzdGF0ZSIsImFjdGl2ZVBhZ2VJbmRleCIsImVuZFN0YXRlRmlsdGVyIiwiZGF0ZUZpbHRlciIsImUiLCJwYWdlSW5kZXgiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZGF0YVNvdXJjZSIsImxvY2FsZSIsInNob3dEYXRlRmlsdGVyIiwiZmlsdGVyZWRQYWdlcyIsImxhc3REYXRlIiwiZmlsdGVyZWRCeURhdGUiLCJmaWx0ZXIiLCJldmVudCIsImZpcnN0RXZlbnQiLCJwYWdpbmF0aW9uTWFwIiwiZ2V0UGFnaW5hdGlvbk1hcCIsImZpbHRlcnMiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW5MZWZ0IiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiYmluZCIsInJlZnJlc2hCdXR0b24iLCJoYW5kbGVSZWZyZXNoIiwibWFyZ2luUmlnaHQiLCJmbG9hdCIsImN1cnNvciIsInRyYW5zZm9ybSIsIndpZHRoIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwibWFwIiwiaW5kZXgiLCJpc0FjdGl2ZSIsImhhbmRsZVBhZ2VDbGljayIsImxpc3RJdGVtIiwiZXZlbnRHcm91cCIsImZvckVhY2giLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiZm9udFdlaWdodCIsInN0YXR1c0xpc3QiLCJpIiwiaiIsInNsaWNlIiwiRXZlbnRTdGVwcGVyIiwiZXhwYW5kZWQiLCJoZWlnaHQiLCJncm91cHMiLCJldmVudFN0YXRlcyIsImdyb3Vwc1dpdGhVbmxpc3RlZCIsIk9iamVjdCIsImFzc2lnbiIsImZpcnN0U3RhdGVGb3VuZCIsIm1pc3NpbmdCZWZvcmVTdGFydFN0YXJ0IiwiZmluYWxHcm91cHMiLCJrZXlzIiwic29ydCIsImtleTEiLCJrZXkyIiwia2V5IiwiZm9ybWF0dGVkR3JvdXBzIiwibmFtZSIsImNvbWJpbmVkIiwiZ3JvdXAiLCJkYXRhIiwiZXJyb3JPbiIsImNvbHVtblN0eWxlIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiY29sdW1uIiwiQXJyYXkiLCJyZW5kZXJFdmVudCIsImlzRmlyc3QiLCJjb2x1bW5JbmRleCIsImdyb3VwU3R5bGUiLCJncm91cFRleHQiLCJsaW5rU3R5bGUiLCJib3JkZXJDb2xvciIsImJvcmRlclRvcFN0eWxlIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJ0b29sVGlwVGV4dCIsImRhdGUiLCJvcGFjaXR5IiwiZ2V0SWNvbkJ5U3RhdGUiLCJzdGVwcGVyc3R5bGUiLCJhbGlnbkNvbnRlbnQiLCJhZGRVbmxpc3RlZFN0YXRlcyIsImFnZ3JlZ2dhdGVGaWxlRXZlbnRzIiwiY3JlYXRlQ29tYmluZWRTcGxpdCIsImJ1bGxldHMiLCJidWxsZXQiLCJoYW5kbGVUb2dnbGVWaXNpYmlsaXR5IiwicHJvdmlkZXIiLCJmbGV4IiwiZmlsZU5hbWUiLCJsaW5lSGVpZ2h0Iiwic3RvcFByb3BhZ2F0aW9uIiwibGFzdEV2ZW50IiwicHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIkZpbHRlckJ1dHRvbiIsImhhbmRsZUNsaWNrIiwibGFiZWwiLCJhY3RpdmUiLCJhY3RpdmVTdHlsZSIsImluYWN0aXZlU3R5bGUiLCJkZWZhdWx0U3R5bGUiLCJtaW5XaWR0aCIsImJ1dHRvblN0eWxlIiwicG9pbnRlckV2ZW50cyIsIkZpbHRlckJ1dHRvblRyYXkiLCJhY3RpdmVCdXR0b25JZCIsIm9uQ2hhbmdlIiwic3R5bGUiLCJmaWVsZCIsInNob3dUb29sdGlwIiwiZWZmZWN0aXZlUGVyaW9kcyIsInZhbGlkRGF5c09mZnNldCIsInRpbWVsaW5lU3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwidGltZWxpbmVXcmFwcGVyIiwidGltZUJsb2NrIiwidGl0bGVUZXh0IiwiekluZGV4IiwidG9vbFRpcFN0eWxlIiwidHJhbnNpdGlvbiIsInRleHRTdHlsZSIsInRleHRTaGFkb3ciLCJ3aGl0ZVNwYWNlIiwidGV4dE92ZXJmbG93IiwiaHJTdHlsZSIsImhvdmVyVGV4dCIsImhhbmRsZVRvZ2dsZVRvb2xUaXAiLCJsaW5lIiwidGltZWxpbmUiLCJlZmZlY3RpdmVQZXJpb2QiLCJwZXJpb2RCbG9jayIsInRpbWVsaW5lRW5kUG9zaXRpb24iLCJ0aW1lbGluZVN0YXJ0UG9zaXRpb24iLCJpdGVtVGV4dCIsInRvIiwiZnJvbSIsImxvY2FsZUNvbXBhcmUiLCJ2ZXJ0aWNhbEFsaWduIiwic3RyaW5nIiwibnVtYmVyIiwidmFsaWRGcm9tRGF0ZSIsImFycmF5IiwicGVyaW9kIiwic2hhcGUiLCJ0aW1ldGFibGUiLCJvYmplY3RJZCIsInBlcmlvZHMiLCJhcnJheU9mIiwidGltZXRhYmxlcyIsImlzTGFzdCIsIm92ZXJmbG93WSIsInBhZGRpbmdCb3R0b20iLCJob3ZlciIsImJvb2wiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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K0NBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYm9ndVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJib2d1XCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODY1Y2RmNDgzMGQzZjdmN2ZkMTIiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBJY29uQmFzZSA9IGZ1bmN0aW9uIEljb25CYXNlKF9yZWYsIF9yZWYyKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBjb2xvciA9IF9yZWYuY29sb3I7XG4gIHZhciBzaXplID0gX3JlZi5zaXplO1xuICB2YXIgc3R5bGUgPSBfcmVmLnN0eWxlO1xuXG4gIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NoaWxkcmVuJywgJ2NvbG9yJywgJ3NpemUnLCAnc3R5bGUnXSk7XG5cbiAgdmFyIF9yZWYyJHJlYWN0SWNvbkJhc2UgPSBfcmVmMi5yZWFjdEljb25CYXNlO1xuICB2YXIgcmVhY3RJY29uQmFzZSA9IF9yZWYyJHJlYWN0SWNvbkJhc2UgPT09IHVuZGVmaW5lZCA/IHt9IDogX3JlZjIkcmVhY3RJY29uQmFzZTtcblxuICB2YXIgY29tcHV0ZWRTaXplID0gc2l6ZSB8fCByZWFjdEljb25CYXNlLnNpemUgfHwgJzFlbSc7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3ZnJywgX2V4dGVuZHMoe1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgbWVldCcsXG4gICAgaGVpZ2h0OiBjb21wdXRlZFNpemUsXG4gICAgd2lkdGg6IGNvbXB1dGVkU2l6ZVxuICB9LCByZWFjdEljb25CYXNlLCBwcm9wcywge1xuICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGNvbG9yOiBjb2xvciB8fCByZWFjdEljb25CYXNlLmNvbG9yXG4gICAgfSwgcmVhY3RJY29uQmFzZS5zdHlsZSB8fCB7fSwgc3R5bGUpXG4gIH0pKTtcbn07XG5cbkljb25CYXNlLnByb3BUeXBlcyA9IHtcbiAgY29sb3I6IF9yZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBfcmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShbX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsIF9yZWFjdC5Qcm9wVHlwZXMubnVtYmVyXSksXG4gIHN0eWxlOiBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdFxufTtcblxuSWNvbkJhc2UuY29udGV4dFR5cGVzID0ge1xuICByZWFjdEljb25CYXNlOiBfcmVhY3QuUHJvcFR5cGVzLnNoYXBlKEljb25CYXNlLnByb3BUeXBlcylcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEljb25CYXNlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb24tYmFzZS9saWIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5jb25zdCBjb2xvckRlZiA9IHtcbiAgYmxhY2s6ICcjMDAwJyxcbiAgd2hpdGU6ICcjRkZGJyxcbiAgcmVkOiAnI0YwMCcsXG4gIGdyZWVuOiAnIzBGMCcsXG4gIGJsdWU6ICcjMDBGJyxcbiAgYmlnYmx1ZTogJyMxMTY5QTcnLFxuICBkYXJrQmx1ZTogJyMwODM0NTMnLFxuICBkYXJrR3JleTogJyMyRjJGMkYnLFxuICBncmV5OiAnI0RERERERCcsXG4gIGxpZ2h0R3JleTogJyNGMkYyRjInLFxuICBlbnR1cjoge1xuICAgIHByaW1hcnk6ICcjMjczQTQ2JywgICAvLyAzOSw1OCw3MFxuICAgIHNlY29uZGFyeTogJyM2QkJEQzInLCAvLzEwNywxODksMTk0LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgZm9udDoge1xuICAgIGludmVyc2U6IGNvbG9yRGVmLndoaXRlLFxuICAgIHRpdGxlOiBjb2xvckRlZi5ibGFjayxcbiAgICBpbmZvMTogY29sb3JEZWYuZW50dXIuc2Vjb25kYXJ5LFxuICAgIGluZm8yOiBjb2xvckRlZi5kYXJrQmx1ZSxcbiAgICBpbmZvMzogY29sb3JEZWYuYmxhY2ssXG4gICAgd2FybjogY29sb3JEZWYucmVkLFxuICAgIGRpc2FibGVkOiBjb2xvckRlZi5ncmV5LFxuXG4gICAgdG9vbHRpcDogY29sb3JEZWYud2hpdGUsXG4gIH0sXG4gIGJhY2tncm91bmQ6IGNvbG9yRGVmLmVudHVyLnByaW1hcnksXG4gIGJvcmRlcjogY29sb3JEZWYuYmxhY2ssXG4gIGVmZmVjdGl2ZTogY29sb3JEZWYuYmxhY2ssXG4gIGZhaWw6IGNvbG9yRGVmLnJlZCxcbiAgbW9kYWw6IGNvbG9yRGVmLndoaXRlLFxuICBiYWNrZHJvcDogJ3JnYmEoMCwgMCwgMCwgMC4zKScsXG4gIHRvb2x0aXA6ICcjMTkxOTE5JyxcbiAgdGFiQWN0aXZlOiBjb2xvckRlZi5lbnR1ci5zZWNvbmRhcnksXG5cbiAgdGltZUxpbmVCYWNrZ3JvdW5kOiAnI0RFRDhEOCcsXG4gIHRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kOiAnIzZEOTJCNicsXG4gIHRpbWVMaW5lQm9yZGVyOiAnI2VlZScsXG4gIHRpbWVMaW5lU3VjY2VzczogJyM1REFFNUQnLFxuICB0aW1lTGluZUZhaWw6ICcjQjkxOTE5JyxcbiAgdGFibGVIZWFkZXI6IGNvbG9yRGVmLmxpZ2h0R3JleSxcbiAgdGFibGVSb3c6ICcjZWJmMmYxJyxcbiAgdGFibGVJbmZvOiAnI2ZmZmZkYicsXG5cbiAgdmFsaWQ6ICcjMzNjMTQ2JyxcbiAgaW52YWxpZDogJyNiMjAwMDAnLFxuICBleHBpcmluZzogJyNGRkFBMDAnLFxuICBoaWdobGlnaHQgOiB7XG4gICAgdmFsaWQ6ICcjNGNhZjUwJyxcbiAgICBleHBpcmluZzogJyNGRkI2MEEnLFxuICAgIGludmFsaWQ6ICcjY2MwMDAwJyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGltZW5zaW9uID0ge1xuICB0aW1lTGluZVdpZHRoOiA4NSxcbn1cblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHtcbiAgY29sb3I6IGNvbG9yLFxuICBkaW1lbnNpb246IGRpbWVuc2lvbixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdHlsZXMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIFwibmJcIjoge1xuICAgIHRleHQ6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6IFwiRmlsb3ZlcmbDuHJpbmdcIixcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046IFwiRmlsa2xhc3NpZmlzZXJpbmdcIixcbiAgICAgIEZJTEVfREVMSVZFUlk6ICdGaWxsZXZlcmFuc2UnLFxuICAgICAgSU1QT1JUOiBcIkltcG9ydFwiLFxuICAgICAgRVhQT1JUOiBcIkdURlMgRWtzcG9ydFwiLFxuICAgICAgRVhQT1JUX05FVEVYOiBcIk5lVEV4IEVrc3BvcnRcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogXCJWYWxpZGVyaW5nIG5pdsOlIDFcIixcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogXCJPdmVyZsO4cmluZyBzZW50cmFsIGRhdGFiYXNlXCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6IFwiVmFsaWRlcmluZyBuaXbDpSAyXCIsXG4gICAgICBCVUlMRF9HUkFQSDogXCJCeWdnIGF2IHJlaXNlc8O4a2ZvcnNsYWdcIixcbiAgICAgIFVOS05PV046IFwiVWtqZW50IHN0ZWdcIixcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiBcIk92ZXJmw7hyaW5nIGF2IGZpbCBmcmEgbG9rYWwgbWFza2luIHRpbCBzZW50cmFsIHNlcnZlclwiLFxuICAgICAgSU1QT1JUOiBcIkZpbHZhbGlkZXJpbmcgb2cgaW1wb3J0IGkgbG9rYWx0IGRhdGFiYXNlb21yw6VkZSBuaXbDpSAxXCIsXG4gICAgICBFWFBPUlQ6IFwiRWtzcG9ydCBhdiBydXRlZGF0YSBcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogXCJWYWxpZGVyaW5nIGF2IGtvbXBsZXR0IGRhdGFvbXLDpWRlIG5pdsOlIDFcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMjogXCJWYWxpZGVyaW5nIGF2IGtvbXBsZXR0IGRhdGFvbXLDpWRlIG5pdsOlIDJcIixcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogXCJPdmVyZsO4cmluZyB0aWwgc2VudHJhbHQgZGF0YWJhc2VvbXLDpWRlIG5pdsOlIDJcIixcbiAgICAgIEJVSUxEX0dSQVBIOiBcIkJ5Z2cgYXYgcmVpc2Vzw7hrZm9yc2xhZ1wiLFxuICAgICAgVU5LTk9XTjogXCJEZXR0ZSBzdGVnZXQgZXIgdWtqZW50XCIsXG4gICAgfSxcbiAgICBmaWxlbmFtZToge1xuICAgICAgdW5kZWZpbmVkOiBcIkRpcmVrdGVsZXZlcmFuc2VcIlxuICAgIH0sXG4gICAgc3RhdGVzOiB7XG4gICAgICBPSzogXCJGdWxsZsO4cnRcIixcbiAgICAgIFBFTkRJTkc6IFwiVmVudGVyXCIsXG4gICAgICBTVEFSVEVEOiBcIlDDpWJlZ3ludFwiLFxuICAgICAgRkFJTEVEOiBcIkZlaWxcIixcbiAgICAgIERVUExJQ0FURTogXCJGZWlsIC0gZHVwbGlrYXQgZGF0YXNldHRcIixcbiAgICAgIElHTk9SRUQ6IFwiSWtrZSBnamVubm9tZsO4cnRcIixcbiAgICAgIENBTkNFTExFRDogXCJLYW5zZWxsZXJ0XCIsXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6ICdGaWxvdmVyZsO4cmluZyBmZWlsZXQnLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZpbGtsYXNzaWZpc2VyaW5nIGZlaWxldCcsXG4gICAgfSxcbiAgICBmaWx0ZXJCdXR0b246IHtcbiAgICAgIEFMTF9USU1FOiAnVWJlZ3JlbnNldCcsXG4gICAgICBMQVNUXzI0X0hPVVJTOiAnU2lzdGUgZMO4Z24nLFxuICAgICAgTEFTVF9XRUVLOiAnU2lzdGUgdWtlJyxcbiAgICAgIExBU1RfTU9OVEg6ICdTaXN0ZSBtw6VuZWQnXG4gICAgfVxuICB9LFxuICBcImVuXCI6IHtcbiAgICB0ZXh0OiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiBcIkZpbGUgdHJhbnNmZXJcIixcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046IFwiRmlsZSBjbGFzc2lmaWNhdGlvblwiLFxuICAgICAgRklMRV9ERUxJVkVSWTogJ0ZpbGUgZGVsaXZlcnknLFxuICAgICAgSU1QT1JUOiBcIkltcG9ydFwiLFxuICAgICAgRVhQT1JUOiBcIkdURlMgZXhwb3J0XCIsXG4gICAgICBFWFBPUlRfTkVURVg6IFwiTmVURXggZXhwb3J0XCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6IFwiVmFsaWRhdGlvbiBsZXZlbCAxXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiVHJhbnNmZXIgdG8gY2VudHJhbCBzcGFjZVwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiBcIlZhbGlkYXRpb24gbGV2ZWwgMlwiLFxuICAgICAgQlVJTERfR1JBUEg6IFwiQnVpbGQgZ3JhcGhcIixcbiAgICAgIFVOS05PV046IFwiVWtub3duIHN0ZXBcIixcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiBcIlVwbG9hZCBsb2NhbCBmaWxlIHRvIHJlbW90ZSBzZXJ2ZXJcIixcbiAgICAgIElNUE9SVDogXCJGaWxlIHZhbGlkYXRpb24gYW5kIGltcG9ydCBpbiBsb2NhbCBkYXRhIHNwYWNlIC0gbGV2ZWwgMVwiLFxuICAgICAgRVhQT1JUOiBcIkV4cG9ydCBvZiByb3V0ZSBkYXRhIFwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8xOiBcIlZhbGlkYXRpb24gb2YgY29tcGxldGUgZGF0YSBzcGFjZSAtIGxldmVsIDFcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMjogXCJWYWxpZGF0aW9uIG9mIGNvbXBsZXRlIGRhdGEgc3BhY2UgLSBsZXZlbCAyXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiVHJhbnNmZXIgdG8gY2VudHJhbCBkYXRhc3BhY2UgLSBsZXZlbCAyXCIsXG4gICAgICBCVUlMRF9HUkFQSDogXCJCdWlsZCBncmFwaFwiLFxuICAgICAgVU5LTk9XTjogXCJUaGlzIHN0ZXAgaXMgdWtub3duXCIsXG4gICAgfSxcbiAgICBmaWxlbmFtZToge1xuICAgICAgdW5kZWZpbmVkOiBcIkRpcmVjdCBkZWxpdmVyeVwiXG4gICAgfSxcbiAgICBzdGF0ZXM6IHtcbiAgICAgIE9LOiBcIkNvbXBsZXRlZFwiLFxuICAgICAgUEVORElORzogXCJQZW5kaW5nXCIsXG4gICAgICBTVEFSVEVEOiBcIlN0YXJ0ZWRcIixcbiAgICAgIEZBSUxFRDogXCJGYWlsZWRcIixcbiAgICAgIERVUExJQ0FURTogXCJGYWlsZWQgLSBkdXBsaWNhdGUgZGF0YSBzZXRcIixcbiAgICAgIElHTk9SRUQ6IFwiU2tpcHBlZFwiLFxuICAgICAgQ0FOQ0VMTEVEOiBcIkNhbmNlbGxlZFwiLFxuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmFpbGVkIHRvIHRyYW5zZmVyIGZpbGUnLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZhaWxlZCBvbiBmaWxlIGNsYXNzaWZpY2F0aW9uJyxcbiAgICB9LFxuICAgIGZpbHRlckJ1dHRvbjoge1xuICAgICAgQUxMX1RJTUU6ICdVbmxpbWl0ZWQnLFxuICAgICAgTEFTVF8yNF9IT1VSUzogJ0xhc3QgMjQgaG91cnMnLFxuICAgICAgTEFTVF9XRUVLOiAnTGFzdCB3ZWVrJyxcbiAgICAgIExBU1RfTU9OVEg6ICdMYXN0IG1vbnRoJ1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hY3Rpb25UcmFuc2xhdGlvbnMuanMiLCJjb25zdCBidXR0b25Db25maWcgPSB7XG4gIGZpZWxkczogW1xuICAgIHsgaWQ6ICdBTExfVElNRScsXG4gICAgfSxcbiAgICB7IGlkOiAnTEFTVF8yNF9IT1VSUycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0xBU1RfV0VFSydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnTEFTVF9NT05USCdcbiAgICB9LFxuICBdXG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TGFzdFZhbGlkRGF0ZSA9IGlkID0+IHtcbiAgc3dpdGNoIChpZCkge1xuICAgIGNhc2UgJ0FMTF9USU1FJzogcmV0dXJuIG51bGw7XG4gICAgY2FzZSAnTEFTVF9NT05USCc6IHtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5zZXRNb250aChub3cuZ2V0TW9udGgoKSAtIDEpKTtcbiAgICB9XG4gICAgY2FzZSAnTEFTVF9XRUVLJzoge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldERhdGUobm93LmdldERhdGUoKSAtIDcpKTtcbiAgICB9XG4gICAgY2FzZSAnTEFTVF8yNF9IT1VSUyc6IHtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCktMSkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBidXR0b25Db25maWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9idXR0b25Db25maWcuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIFwiZW5cIjoge1xuICAgIHBhZ2U6ICdQYWdlOiAnLFxuICAgIG5vX3N0YXR1czogJ05vIHJlc3VsdCB3aXRoIGFwcGxpZWQgZmlsdGVyJyxcbiAgICBzdGFydGVkOiAnU3RhcnRlZCcsXG4gICAgZW5kZWQ6ICdFbmRlZCcsXG4gICAgZHVyYXRpb246ICdEdXJhdGlvbjogJyxcbiAgICBzaG93X2FsbDogJ1Nob3cgYWxsJyxcbiAgICBzaG93X29ubHlfZmFpbGVkOiAnU2hvdyBvbmx5IGZhaWxlZCcsXG4gICAgc2hvd19vbmx5X3N1Y2Nlc3M6ICdTaG93IG9ubHkgc3VjY2Vzc2Z1bCcsXG4gICAgc2hvd19vbmx5X2NhbmNlbGxlZDogXCJTaG93IG9ubHkgY2FuY2VsbGVkXCIsXG4gIH0sXG4gIFwibmJcIjoge1xuICAgIHBhZ2U6ICdTaWRlOiAnLFxuICAgIG5vX3N0YXR1czogJ0luZ2VuIHJlc3VsdGF0ZXIgbWVkIHZhbGd0IGZpbHRlcicsXG4gICAgc3RhcnRlZDogJ0JlZ3ludGUnLFxuICAgIGVuZGVkOiAnQXZzbHV0dGV0JyxcbiAgICBkdXJhdGlvbjogJ1ZhcmlnaGV0JyxcbiAgICBzaG93X2FsbDogJ1ZpcyBhbGxlJyxcbiAgICBzaG93X29ubHlfZmFpbGVkOiAnVmlzIGt1biBmZWlsZXQnLFxuICAgIHNob3dfb25seV9zdWNjZXNzOiAnVmlzIGt1biB2ZWxseWtrZXQnLFxuICAgIHNob3dfb25seV9jYW5jZWxsZWQ6IFwiVmlzIGt1biBrYW5zZWxsZXJ0ZVwiLFxuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RyYW5zbGF0aW9ucy5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0XHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdFx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlciBcblx0XHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0XHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0XHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG5cdH0pLFxuXHRnZXRFbGVtZW50ID0gKGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW8gPSB7fTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHRcdH07XG5cdH0pKGZ1bmN0aW9uIChzdHlsZVRhcmdldCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0eWxlVGFyZ2V0KVxuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdLFxuXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vZml4VXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0SW50byA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cdGlmICghc3R5bGVUYXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHN0eWxlVGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIHN0eWxlVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0c3R5bGVUYXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZVRhcmdldC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHN0eWxlVGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YXR0YWNoVGFnQXR0cnMoc3R5bGVFbGVtZW50LCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhdHRhY2hUYWdBdHRycyhsaW5rRWxlbWVudCwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XG5cdHJldHVybiBsaW5rRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXR0YWNoVGFnQXR0cnMoZWxlbWVudCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0LyogSWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpe1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XG5cblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKVxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBUaW1lbGluZSBmcm9tICcuL1RpbWVsaW5lJ1xuZXhwb3J0IEhlYWRlclRpbWVsaW5lIGZyb20gJy4vSGVhZGVyVGltZWxpbmUnXG5leHBvcnQgRXZlbnREZXRhaWxzIGZyb20gJy4vRXZlbnREZXRhaWxzJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IENob3VldHRlTGluayA9ICh7IGFjdGlvbiwgaWQsIHJlZmVyZW50aWFsLCBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgY29uc3QgYmFzZVVSTCA9IGAke3dpbmRvdy5jb25maWcuY2hvdWV0dGVCYXNlVXJsfXJlZmVyZW50aWFscy9gXG5cbiAgY29uc3QgYWN0aW9uTWFwID0ge1xuICAgIFwiaW1wb3J0ZXJcIjogYGltcG9ydHMvJHtpZH0vY29tcGxpYW5jZV9jaGVja2AsXG4gICAgXCJleHBvcnRlclwiOiBgZXhwb3J0cy8ke2lkfS9jb21wbGlhbmNlX2NoZWNrYCxcbiAgICBcInZhbGlkYXRvclwiOiBgY29tcGxpYW5jZV9jaGVja3MvJHtpZH0vcmVwb3J0YFxuICB9XG4gIGNvbnN0IFVSTCA9IGAke2Jhc2VVUkx9JHtyZWZlcmVudGlhbH0vJHthY3Rpb25NYXBbYWN0aW9uXX1gXG5cbiAgcmV0dXJuIChcbiAgICA8YSB0aXRsZT17VVJMfSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtVUkx9PntjaGlsZHJlbn08L2E+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hvdWV0dGVMaW5rXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Nob3VldHRlTGluay5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDaG91ZXR0ZUxpbmsgZnJvbSAnLi9DaG91ZXR0ZUxpbmsnXG5cbmNsYXNzIENvbnRyb2xsZWRDaG91ZXR0ZUxpbmsgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IHsgZXZlbnRzLCBpbmNsdWRlTGV2ZWwyIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgc3VwcG9ydGVkQWN0aW9ucyA9IFsnSU1QT1JUJywgJ1ZBTElEQVRJT05fTEVWRUxfMSddXG5cbiAgICBsZXQgY2hvdWV0ZUFjdGlvbk1hcCA9IHtcbiAgICAgICdJTVBPUlQnOiAnaW1wb3J0ZXInLFxuICAgICAgJ1ZBTElEQVRJT05fTEVWRUxfMSc6ICd2YWxpZGF0b3InLFxuICAgIH1cblxuICAgIGlmIChpbmNsdWRlTGV2ZWwyKSB7XG4gICAgICBzdXBwb3J0ZWRBY3Rpb25zLnB1c2goJ1ZBTElEQVRJT05fTEVWRUxfMicpXG4gICAgICBzdXBwb3J0ZWRBY3Rpb25zLnB1c2goJ0VYUE9SVCcpXG4gICAgICBzdXBwb3J0ZWRBY3Rpb25zLnB1c2goJ0VYUE9SVF9ORVRFWCcpXG4gICAgICBjaG91ZXRlQWN0aW9uTWFwWydWQUxJREFUSU9OX0xFVkVMXzInXSA9ICd2YWxpZGF0b3InXG4gICAgICBjaG91ZXRlQWN0aW9uTWFwWydFWFBPUlQnXSA9ICdleHBvcnRlcidcbiAgICAgIGNob3VldGVBY3Rpb25NYXBbJ0VYUE9SVF9ORVRFWCddID0gJ2V4cG9ydGVyJ1xuICAgIH1cblxuICAgIGlmIChldmVudHMuc3RhdGVzICYmIGV2ZW50cy5zdGF0ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBlbmRTdGF0ZSA9IGV2ZW50cy5zdGF0ZXNbZXZlbnRzLnN0YXRlcy5sZW5ndGgtMV1cbiAgICAgIGlmIChzdXBwb3J0ZWRBY3Rpb25zLmluZGV4T2YoZW5kU3RhdGUuYWN0aW9uKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPENob3VldHRlTGlua1xuICAgICAgICAgICAgYWN0aW9uPXtjaG91ZXRlQWN0aW9uTWFwW2VuZFN0YXRlLmFjdGlvbl19XG4gICAgICAgICAgICBpZD17ZW5kU3RhdGUuY2hvdWV0dGVKb2JJZH1cbiAgICAgICAgICAgIHJlZmVyZW50aWFsPXtlbmRTdGF0ZS5yZWZlcmVudGlhbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IHRoaXMucHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgIDwvQ2hvdWV0dGVMaW5rPlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuXG5cbiAgICByZXR1cm4gPGRpdj4geyB0aGlzLnByb3BzLmNoaWxkcmVuIH0gPC9kaXY+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlZENob3VldHRlTGlua1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZWRDaG91ZXR0ZUxpbmsuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXZlbnRTdGVwcGVyIGZyb20gJy4vRXZlbnRTdGVwcGVyJztcbmltcG9ydCAnLi9FdmVudERldGFpbHMuY3NzJztcbmNvbnN0IEZhRnJlc2ggPSByZXF1aXJlKCdyZWFjdC1pY29ucy9saWIvZmEvcmVmcmVzaCcpO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgRmlsdGVyQnV0dG9uVHJheSBmcm9tICcuL0ZpbHRlckJ1dHRvblRyYXknO1xuaW1wb3J0IHsgZ2V0TGFzdFZhbGlkRGF0ZSB9IGZyb20gJy4vYnV0dG9uQ29uZmlnJztcblxuY2xhc3MgRXZlbnREZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZVBhZ2VJbmRleDogMCxcbiAgICAgIGVuZFN0YXRlRmlsdGVyOiAnQUxMJyxcbiAgICAgIGRhdGVGaWx0ZXI6ICdBTExfVElNRSdcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlUGFnZUNsaWNrKGUsIHBhZ2VJbmRleCkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGFjdGl2ZVBhZ2VJbmRleDogcGFnZUluZGV4XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVGaWx0ZXJDaGFuZ2UoZGF0ZUZpbHRlcikge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0ZUZpbHRlcjogZGF0ZUZpbHRlclxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YVNvdXJjZSwgbG9jYWxlLCBpbmNsdWRlTGV2ZWwyLCBzaG93RGF0ZUZpbHRlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGFjdGl2ZVBhZ2VJbmRleCwgZW5kU3RhdGVGaWx0ZXIsIGRhdGVGaWx0ZXIgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBsZXQgZmlsdGVyZWRQYWdlcyA9IG51bGw7XG4gICAgY29uc3QgbGFzdERhdGUgPSBnZXRMYXN0VmFsaWREYXRlKGRhdGVGaWx0ZXIpO1xuXG4gICAgY29uc3QgZmlsdGVyZWRCeURhdGUgPSAoZGF0YVNvdXJjZSB8fCBbXSkuZmlsdGVyKGV2ZW50ID0+IHtcbiAgICAgIGlmICghbGFzdERhdGUpIHJldHVybiBldmVudDtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShldmVudC5maXJzdEV2ZW50KSA+IGxhc3REYXRlO1xuICAgIH0pO1xuXG4gICAgaWYgKFxuICAgICAgZW5kU3RhdGVGaWx0ZXIgPT09ICdGQUlMRUQnIHx8XG4gICAgICBlbmRTdGF0ZUZpbHRlciA9PT0gJ09LJyB8fFxuICAgICAgZW5kU3RhdGVGaWx0ZXIgPT09ICdDQU5DRUxMRUQnXG4gICAgKSB7XG4gICAgICBmaWx0ZXJlZFBhZ2VzID0gKGZpbHRlcmVkQnlEYXRlIHx8IFtdKVxuICAgICAgICAuZmlsdGVyKGV2ZW50ID0+IGV2ZW50LmVuZFN0YXRlID09PSBlbmRTdGF0ZUZpbHRlcik7XG4gICAgfVxuXG4gICAgbGV0IHBhZ2luYXRpb25NYXAgPSBnZXRQYWdpbmF0aW9uTWFwKGZpbHRlcmVkUGFnZXMgfHwgZmlsdGVyZWRCeURhdGUpO1xuXG4gICAgY29uc3QgZmlsdGVycyA9IChcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiAnMC45ZW0nIH19XG4gICAgICAgICAgdmFsdWU9e2VuZFN0YXRlRmlsdGVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBlbmRTdGF0ZUZpbHRlcjogZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgIGFjdGl2ZVBhZ2VJbmRleDogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBTExcIj57dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19hbGx9PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk9LXCI+e3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfb25seV9zdWNjZXNzfTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDQU5DRUxMRURcIj5cbiAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zaG93X29ubHlfY2FuY2VsbGVkfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJGQUlMRURcIj5cbiAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zaG93X29ubHlfZmFpbGVkfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAge3Nob3dEYXRlRmlsdGVyICYmXG4gICAgICAgICAgPEZpbHRlckJ1dHRvblRyYXlcbiAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogMjAgfX1cbiAgICAgICAgICAgIGFjdGl2ZUJ1dHRvbklkPXt0aGlzLnN0YXRlLmRhdGVGaWx0ZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaWx0ZXJDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAvPn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBjb25zdCBwYWdlID0gcGFnaW5hdGlvbk1hcFthY3RpdmVQYWdlSW5kZXhdO1xuXG4gICAgY29uc3QgcmVmcmVzaEJ1dHRvbiA9XG4gICAgICB0aGlzLnByb3BzLmhhbmRsZVJlZnJlc2ggJiZcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDE1LCBmbG9hdDogJ3JpZ2h0JywgY3Vyc29yOiAncG9pbnRlcicgfX0+XG4gICAgICAgIDxGYUZyZXNoXG4gICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiAnc2NhbGUoMS41KScgfX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZVJlZnJlc2h9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj47XG5cbiAgICBpZiAocGFnZSAmJiBwYWdlLmxlbmd0aCAmJiBwYWdpbmF0aW9uTWFwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnbGVmdCcsIG1hcmdpbkJvdHRvbTogNSB9fT5cbiAgICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZWZyZXNoQnV0dG9ufVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1saW5rLXBhcmVudFwiPlxuICAgICAgICAgICAgPHNwYW4+e3RyYW5zbGF0aW9uc1tsb2NhbGVdLnBhZ2V9PC9zcGFuPlxuICAgICAgICAgICAge3BhZ2luYXRpb25NYXAubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGluZGV4ID09IGFjdGl2ZVBhZ2VJbmRleFxuICAgICAgICAgICAgICAgID8gJ3BhZ2UtbGluayBhY3RpdmUtbGluaydcbiAgICAgICAgICAgICAgICA6ICdwYWdlLWxpbmsgaW5hY3RpdmUtbGluayc7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNBY3RpdmV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlUGFnZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIGtleT17J2xpbmstJyArIGluZGV4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwYWdlLm1hcCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBldmVudEdyb3VwID0ge307XG5cbiAgICAgICAgICAgICAgbGlzdEl0ZW0uZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnRHcm91cFtldmVudC5hY3Rpb25dKSB7XG4gICAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0gPSB7fTtcbiAgICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXS5zdGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnRHcm91cFtldmVudC5hY3Rpb25dLnN0YXRlcy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0uZW5kU3RhdGUgPSBldmVudC5zdGF0ZTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9eydqb2JzdGF0dXMtJyArIGxpc3RJdGVtLmNob3VldHRlSm9iSWQgKyAnLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEV2ZW50U3RlcHBlclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlTGV2ZWwyPXtpbmNsdWRlTGV2ZWwyfVxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXsnZXZlbnQtZ3JvdXAtJyArIGxpc3RJdGVtLmNob3VldHRlSm9iSWQgKyAnLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzPXtldmVudEdyb3VwfVxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbT17bGlzdEl0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdsZWZ0JywgbWFyZ2luQm90dG9tOiA1IH19PlxuICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5ub19zdGF0dXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAgfX0+XG4gICAgICAgICAgICAgIHtyZWZyZXNoQnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZ2V0UGFnaW5hdGlvbk1hcCA9IChzdGF0dXNMaXN0ID0gW10pID0+IHtcbiAgbGV0IHBhZ2luYXRpb25NYXAgPSBbXTtcblxuICBpZiAoc3RhdHVzTGlzdCAmJiBzdGF0dXNMaXN0Lmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gc3RhdHVzTGlzdC5sZW5ndGg7IGkgPCBqOyBpICs9IDEwKSB7XG4gICAgICBwYWdpbmF0aW9uTWFwLnB1c2goc3RhdHVzTGlzdC5zbGljZShpLCBpICsgMTApKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhZ2luYXRpb25NYXA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudERldGFpbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjdGlvblRyYW5zbGF0aW9ucyBmcm9tICcuL2FjdGlvblRyYW5zbGF0aW9ucyc7XG5pbXBvcnQgRmFDaGV2cm9uRG93biBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1kb3duJztcbmltcG9ydCBGYUNoZXZyb25VcCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi11cCc7XG5pbXBvcnQgTWRFcnJvciBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvZXJyb3InO1xuaW1wb3J0IE1kRG9uZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvY2hlY2stY2lyY2xlJztcbmltcG9ydCBNZFNjaGVkdWxlIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9zY2hlZHVsZSc7XG5pbXBvcnQgRmFDb2cgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NvZyc7XG5pbXBvcnQgTWRIZWxwT3V0TGluZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvaGVscC1vdXRsaW5lJztcbmltcG9ydCBNZEhvdXIgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2hvdXJnbGFzcy1lbXB0eSc7XG5pbXBvcnQgQ29udHJvbGxlZENob3VldHRlTGluayBmcm9tICcuL0NvbnRyb2xsZWRDaG91ZXR0ZUxpbmsnO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL3RyYW5zbGF0aW9ucyc7XG5cbmNsYXNzIEV2ZW50U3RlcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleHBhbmRlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBncm91cHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBsaXN0SXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG5cbiAgZ2V0SWNvbkJ5U3RhdGUoc3RhdGUpIHtcbiAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICBjYXNlICdPSyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRG9uZVxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdQRU5ESU5HJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRIb3VyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ29yYW5nZScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdTVEFSVEVEJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RmFDb2dcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnIzIyNzRiNScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdGQUlMRUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEVycm9yXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdDQU5DRUxMRUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEVycm9yXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ29yYW5nZScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdEVVBMSUNBVEUnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEVycm9yXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdJR05PUkVEJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRTY2hlZHVsZVxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8TWRIZWxwT3V0TGluZSBzdHlsZT17eyBjb2xvcjogJ2dyZXknLCB3aWR0aDogMjQsIGhlaWdodDogMjIgfX0gLz47XG4gIH1cblxuICBldmVudFN0YXRlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ0ZJTEVfVFJBTlNGRVInLFxuICAgICAgJ0ZJTEVfQ0xBU1NJRklDQVRJT04nLFxuICAgICAgJ0ZJTEVfREVMSVZFUlknLFxuICAgICAgJ0lNUE9SVCcsXG4gICAgICAnVkFMSURBVElPTl9MRVZFTF8xJyxcbiAgICAgICdEQVRBU1BBQ0VfVFJBTlNGRVInLFxuICAgICAgJ1ZBTElEQVRJT05fTEVWRUxfMicsXG4gICAgICAnRVhQT1JUJyxcbiAgICAgICdCVUlMRF9HUkFQSCcsXG4gICAgICAnRVhQT1JUX05FVEVYJ1xuICAgIF07XG4gIH1cblxuICBhZGRVbmxpc3RlZFN0YXRlcyhncm91cHMpIHtcbiAgICBjb25zdCBzdGF0ZXMgPSB0aGlzLmV2ZW50U3RhdGVzKCk7XG5cbiAgICBsZXQgZ3JvdXBzV2l0aFVubGlzdGVkID0gT2JqZWN0LmFzc2lnbih7fSwgZ3JvdXBzKTtcblxuICAgIGxldCBmaXJzdFN0YXRlRm91bmQgPSBmYWxzZTtcblxuICAgIHN0YXRlcy5mb3JFYWNoKHN0YXRlID0+IHtcbiAgICAgIGlmICghZ3JvdXBzV2l0aFVubGlzdGVkW3N0YXRlXSkge1xuICAgICAgICBncm91cHNXaXRoVW5saXN0ZWRbc3RhdGVdID0ge1xuICAgICAgICAgIGVuZFN0YXRlOiAnSUdOT1JFRCcsXG4gICAgICAgICAgbWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQ6ICFmaXJzdFN0YXRlRm91bmRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0U3RhdGVGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgZmluYWxHcm91cHMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKGdyb3Vwc1dpdGhVbmxpc3RlZClcbiAgICAgIC5zb3J0KChrZXkxLCBrZXkyKSA9PiBzdGF0ZXMuaW5kZXhPZihrZXkxKSAtIHN0YXRlcy5pbmRleE9mKGtleTIpKVxuICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgZmluYWxHcm91cHNba2V5XSA9IGdyb3Vwc1dpdGhVbmxpc3RlZFtrZXldO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGZpbmFsR3JvdXBzO1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlVmlzaWJpbGl0eShpZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVDb21iaW5lZFNwbGl0KGZvcm1hdHRlZEdyb3VwcywgZ3JvdXBzLCBuYW1lKSB7XG4gICAgY29uc3QgY29tYmluZWQgPSBbXTtcbiAgICBmb3IgKGxldCBpIGluIGdyb3Vwcykge1xuICAgICAgY29uc3QgZ3JvdXAgPSBncm91cHNbaV07XG4gICAgICBjb21iaW5lZFtncm91cF0gPSBmb3JtYXR0ZWRHcm91cHNbZ3JvdXBdO1xuXG4gICAgICBpZiAobmFtZSAhPT0gZ3JvdXApIHtcbiAgICAgICAgZGVsZXRlIGZvcm1hdHRlZEdyb3Vwc1tncm91cF07XG4gICAgICB9XG4gICAgfVxuICAgIGZvcm1hdHRlZEdyb3Vwc1tuYW1lXSA9IGNvbWJpbmVkO1xuICB9XG5cbiAgYWdncmVnZ2F0ZUZpbGVFdmVudHMoZGF0YSkge1xuICAgIGxldCBncm91cHMgPSB7Li4uZGF0YX07XG4gICAgbGV0IGVuZFN0YXRlID0gbnVsbDtcbiAgICBsZXQgZXJyb3JPbiA9IG51bGw7XG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKCBncm91cCA9PiB7XG4gICAgICBpZiAoZ3JvdXAgPT09ICdGSUxFX0NMQVNTSUZJQ0FUSU9OJyB8fCBncm91cCA9PT0gJ0ZJTEVfVFJBTlNGRVInKSB7XG4gICAgICAgIGVuZFN0YXRlID0gZ3JvdXBzW2dyb3VwXS5lbmRTdGF0ZTtcbiAgICAgICAgaWYgKGVuZFN0YXRlID09PSAnRkFJTEVEJykge1xuICAgICAgICAgIGVycm9yT24gPSBncm91cDtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgZ3JvdXBzW2dyb3VwXVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGVuZFN0YXRlICE9PSBudWxsKSB7XG4gICAgICBncm91cHMuRklMRV9ERUxJVkVSWSA9IHtcbiAgICAgICAgZW5kU3RhdGU6IGVuZFN0YXRlLFxuICAgICAgICBlcnJvck9uOiBlcnJvck9uXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBncm91cHM7XG4gIH1cblxuICBidWxsZXQoZm9ybWF0dGVkR3JvdXBzLCBncm91cHMsIGxvY2FsZSwgaW5jbHVkZUxldmVsMikge1xuICAgIGNvbnN0IGNvbHVtblN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgaGVpZ2h0OiA0NVxuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZm9ybWF0dGVkR3JvdXBzKS5tYXAoKGdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGNvbHVtbjtcbiAgICAgIGxldCBldmVudCA9IGZvcm1hdHRlZEdyb3Vwc1tncm91cF07XG5cbiAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGNvbHVtbiA9IE9iamVjdC5rZXlzKGV2ZW50KS5tYXAoKGtleSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckV2ZW50KFxuICAgICAgICAgICAgZXZlbnRba2V5XSxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgIGluY2x1ZGVMZXZlbDJcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbiA9IHRoaXMucmVuZGVyRXZlbnQoXG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgZ3JvdXBzLFxuICAgICAgICAgIGdyb3VwLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGluZGV4ID09PSAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIGluY2x1ZGVMZXZlbDJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiA8ZGl2IGtleT17J2J1bGxldC0nICsgaW5kZXh9IHN0eWxlPXtjb2x1bW5TdHlsZX0+e2NvbHVtbn08L2Rpdj47XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJFdmVudChcbiAgICBldmVudCxcbiAgICBncm91cHMsXG4gICAgZ3JvdXAsXG4gICAgaW5kZXgsXG4gICAgaXNGaXJzdCxcbiAgICBjb2x1bW5JbmRleCA9IDAsXG4gICAgbG9jYWxlLFxuICAgIGluY2x1ZGVMZXZlbDJcbiAgKSB7XG4gICAgY29uc3QgZ3JvdXBTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnXG4gICAgfTtcblxuICAgIGNvbnN0IGdyb3VwVGV4dCA9IHtcbiAgICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgbWFyZ2luTGVmdDogNVxuICAgIH07XG5cbiAgICBjb25zdCBsaW5rU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMTg5LCAxODksIDE4OSknLFxuICAgICAgbWFyZ2luTGVmdDogLTYsXG4gICAgICBib3JkZXJUb3BTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAxLFxuICAgICAgd2lkdGg6IDMwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcbiAgICAgIG1hcmdpbjogOCxcbiAgICAgIHRyYW5zZm9ybTogY29sdW1uSW5kZXggPiAwICYmICd0cmFuc2xhdGVZKC0wLjVlbSkgcm90YXRlKDI1ZGVnKSAnXG4gICAgfTtcblxuICAgIGlmICghQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uc3RhdGVzW2V2ZW50LmVuZFN0YXRlXSkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgdG9vbFRpcFRleHQgPSBBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5zdGF0ZXNbZXZlbnQuZW5kU3RhdGVdO1xuXG4gICAgaWYgKGV2ZW50LnN0YXRlcyAmJiBldmVudC5zdGF0ZXNbZ3JvdXBzW2dyb3VwXS5zdGF0ZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIHRvb2xUaXBUZXh0ICs9ICcgJyArIGV2ZW50LnN0YXRlc1tldmVudC5zdGF0ZXMubGVuZ3RoIC0gMV0uZGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZXJyb3JPbikge1xuICAgICAgdG9vbFRpcFRleHQgPSBBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5lcnJvck1lc3NhZ2VbZXZlbnQuZXJyb3JPbl07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e2dyb3VwU3R5bGV9IGtleT17J2dyb3VwLScgKyBncm91cCArIGluZGV4fT5cbiAgICAgICAgeyFpc0ZpcnN0ICYmIDxkaXYgc3R5bGU9e2xpbmtTdHlsZX0gLz59XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB0aXRsZT17dG9vbFRpcFRleHR9XG4gICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogZXZlbnQubWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQgPyAwLjIgOiAxIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5nZXRJY29uQnlTdGF0ZShldmVudC5lbmRTdGF0ZSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLmdyb3VwVGV4dCxcbiAgICAgICAgICAgIG9wYWNpdHk6IGV2ZW50Lm1pc3NpbmdCZWZvcmVTdGFydFN0YXJ0ID8gMC4yIDogMVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q29udHJvbGxlZENob3VldHRlTGluayBpbmNsdWRlTGV2ZWwyPXtpbmNsdWRlTGV2ZWwyfSBldmVudHM9e2V2ZW50fT5cbiAgICAgICAgICAgIHtBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS50ZXh0W2dyb3VwXX1cbiAgICAgICAgICA8L0NvbnRyb2xsZWRDaG91ZXR0ZUxpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdGVwcGVyc3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgIGFsaWduQ29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIG1hcmdpblRvcDogMTBcbiAgICB9O1xuXG4gICAgY29uc3QgeyBncm91cHMsIGxpc3RJdGVtLCBsb2NhbGUsIGluY2x1ZGVMZXZlbDIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBleHBhbmRlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBmb3JtYXR0ZWRHcm91cHMgPSB0aGlzLmFkZFVubGlzdGVkU3RhdGVzKGdyb3Vwcyk7XG4gICAgZm9ybWF0dGVkR3JvdXBzID0gdGhpcy5hZ2dyZWdnYXRlRmlsZUV2ZW50cyhmb3JtYXR0ZWRHcm91cHMpO1xuICAgIHRoaXMuY3JlYXRlQ29tYmluZWRTcGxpdChmb3JtYXR0ZWRHcm91cHMsIFsnRVhQT1JUJywgJ0VYUE9SVF9ORVRFWCddLCAnRVhQT1JUJyk7XG4gICAgY29uc3QgYnVsbGV0cyA9IHRoaXMuYnVsbGV0KGZvcm1hdHRlZEdyb3VwcywgZ3JvdXBzLCBsb2NhbGUsIGluY2x1ZGVMZXZlbDIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXsnZXZlbnQnICsgbGlzdEl0ZW0uY2hvdWV0dGVKb2JJZH1cbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnYXV0bycsIHdpZHRoOiAnOTglJywgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVUb2dnbGVWaXNpYmlsaXR5KCl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5MZWZ0OiAtMTUgfX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgdGl0bGU9e3RyYW5zbGF0aW9uc1tsb2NhbGVdLmR1cmF0aW9uICsgbGlzdEl0ZW0uZHVyYXRpb259XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICBjb2xvcjogJyNlNTk0MDAnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IC04LFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMjBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xpc3RJdGVtLnN0YXJ0ZWR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2xpc3RJdGVtLnByb3ZpZGVyICYmXG4gICAgICAgICAgICBsaXN0SXRlbS5wcm92aWRlci5uYW1lICYmXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMC44ZW0nLCBmb250V2VpZ2h0OiA2MDAsIGZsZXg6IDEgfX0+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbS5wcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcwLjllbScsIGZvbnRXZWlnaHQ6IDYwMCwgZmxleDogMiB9fT5cbiAgICAgICAgICAgIHtsaXN0SXRlbS5maWxlTmFtZSB8fCBBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5maWxlbmFtZS51bmRlZmluZWR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdGVwcGVyc3R5bGV9PlxuICAgICAgICAgIHtidWxsZXRzfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICdhdXRvJywgbWFyZ2luUmlnaHQ6IDIwLCBtYXJnaW5Ub3A6IC01MCB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVUb2dnbGVWaXNpYmlsaXR5KCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyFleHBhbmRlZCA/IDxGYUNoZXZyb25Eb3duIC8+IDogPEZhQ2hldnJvblVwIC8+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2V4cGFuZGVkICYmXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiA4LFxuICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogJzI1cHgnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zdGFydGVkfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbS5maXJzdEV2ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uZW5kZWR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmxhc3RFdmVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLmR1cmF0aW9ufVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbS5kdXJhdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTdGVwcGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRTdGVwcGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRmlsdGVyQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc3QgeyBoYW5kbGVDbGljaywgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGhhbmRsZUNsaWNrICYmIHR5cGVvZiBoYW5kbGVDbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaGFuZGxlQ2xpY2soaWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBhY3RpdmUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWN0aXZlU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzIxOTZGMycsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMxNTU5OWQnLFxuICAgIH07XG4gICAgY29uc3QgaW5hY3RpdmVTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2Q4ZDhkOCcsXG4gICAgfTtcbiAgICBjb25zdCBkZWZhdWx0U3R5bGUgPSB7XG4gICAgICBwYWRkaW5nOiAnMC4yZW0gMC40ZW0nLFxuICAgICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUlJyxcbiAgICAgIG1pbldpZHRoOiA0MCxcbiAgICAgIG1hcmdpbkxlZnQ6IDEwXG4gICAgfTtcblxuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIGRlZmF1bHRTdHlsZSxcbiAgICAgIGFjdGl2ZSA/IGFjdGl2ZVN0eWxlIDogaW5hY3RpdmVTdHlsZVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBzdHlsZT17YnV0dG9uU3R5bGV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9pbnRlckV2ZW50czogJ25vbmUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCdXR0b24uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbHRlckJ1dHRvbiBmcm9tICcuL0ZpbHRlckJ1dHRvbic7XG5pbXBvcnQgYnV0dG9uQ29uZmlnIGZyb20gJy4vYnV0dG9uQ29uZmlnJztcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi9hY3Rpb25UcmFuc2xhdGlvbnMnO1xuXG5jbGFzcyBGaWx0ZXJCdXR0b25UcmF5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZUJ1dHRvbklkOiAnQUxMX1RJTUUnXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvY2FsZSwgYWN0aXZlQnV0dG9uSWQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICB7YnV0dG9uQ29uZmlnLmZpZWxkcy5tYXAoZmllbGQgPT5cbiAgICAgICAgICA8RmlsdGVyQnV0dG9uXG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUJ1dHRvbklkID09PSBmaWVsZC5pZH1cbiAgICAgICAgICAgIGlkPXtmaWVsZC5pZH1cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiB7IG9uQ2hhbmdlKGZpZWxkLmlkKSB9fVxuICAgICAgICAgICAga2V5PXsnZmlsdGVyLWJ1dHRvbi0nICsgZmllbGQuaWR9XG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRpb25zW2xvY2FsZV0uZmlsdGVyQnV0dG9uW2ZpZWxkLmlkXX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCdXR0b25UcmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQnV0dG9uVHJheS5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvciwgZGltZW5zaW9uIH0gZnJvbSAnLi4vc3R5bGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlclRpbWVsaW5lLmNzcyc7XG5cbmNsYXNzIEhlYWRlclRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBob3ZlclRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRGF5c09mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRnJvbURhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBlZmZlY3RpdmVQZXJpb2RzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93VG9vbHRpcDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlVG9vbFRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWZmZWN0aXZlUGVyaW9kcywgdmFsaWREYXlzT2Zmc2V0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICBoZWlnaHQ6ICcxOHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgIHdpZHRoOiBkaW1lbnNpb24udGltZUxpbmVXaWR0aCArICclJyxcbiAgICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZm9udFNpemU6ICcwJScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH07XG5cbiAgICBsZXQgdGltZWxpbmVXcmFwcGVyID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogMlxuICAgIH07XG5cbiAgICBsZXQgdGltZUJsb2NrID0ge1xuICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVTdWNjZXNzLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGZvbnRTaXplOiAnMC44cmVtJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH07XG5cbiAgICBjb25zdCB0aXRsZVRleHQgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTBweCwgMjBweCknLFxuICAgICAgZm9udFNpemU6ICcxLjJlbScsXG4gICAgICBjb2xvcjogZWZmZWN0aXZlUGVyaW9kcy5sZW5ndGggPyBjb2xvci5lZmZlY3RpdmUgOiBjb2xvci5mYWlsLFxuICAgICAgekluZGV4OiA5OVxuICAgIH07XG5cbiAgICBjb25zdCB0b29sVGlwU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDFzJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgICBjb2xvcjogY29sb3IuZm9udC50b29sdGlwLFxuICAgICAgYmFja2dyb3VuZDogY29sb3IudG9vbHRpcCxcbiAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIHpJbmRleDogOTlcbiAgICB9O1xuXG4gICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDVweCBibGFjaycsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgaGVpZ2h0OiAxOCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xuICAgIH07XG5cbiAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXG4gICAgICB3aWR0aDogJzFweCcsXG4gICAgICBoZWlnaHQ6ICcxOHB4JyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbWFyZ2luTGVmdDogMzMgKyB2YWxpZERheXNPZmZzZXQgKyAnJSdcbiAgICB9O1xuXG4gICAgbGV0IGhvdmVyVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZHMubGVuZ3RoXG4gICAgICA/IHRoaXMucHJvcHMuaG92ZXJUZXh0XG4gICAgICA6ICdVZ3lsZGlnIGxpbmplLiBNYW5nbGVyIGRhdGEnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lV3JhcHBlcn0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17dGl0bGVUZXh0fVxuICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLmhhbmRsZVRvZ2dsZVRvb2xUaXAuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlVG9nZ2xlVG9vbFRpcC5iaW5kKHRoaXMpfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucHJvcHMubGluZX1cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VG9vbHRpcCAmJlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dG9vbFRpcFN0eWxlfT4ge2hvdmVyVGV4dH0gPC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZX0gc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgIDxkaXYga2V5PXsndGltZWxpbmUtaGVhZGVyLXdyYXBwZXInICsgdGhpcy5wcm9wcy5pbmRleH0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtoclN0eWxlfSAvPlxuICAgICAgICAgICAge2VmZmVjdGl2ZVBlcmlvZHMubWFwKChlZmZlY3RpdmVQZXJpb2QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBwZXJpb2RCbG9jayA9IHsgLi4udGltZUJsb2NrIH07XG4gICAgICAgICAgICAgIHBlcmlvZEJsb2NrLndpZHRoID1cbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAtXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArXG4gICAgICAgICAgICAgICAgJyUnO1xuXG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPVxuICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID1cbiAgICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gLVxuICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kc1tpbmRleCAtIDFdLnRpbWVsaW5lRW5kUG9zaXRpb24gK1xuICAgICAgICAgICAgICAgICAgJyUnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IGl0ZW1UZXh0ID0gZWZmZWN0aXZlUGVyaW9kLnRvO1xuXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID4gMCAmJlxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC5mcm9tLmxvY2FsZUNvbXBhcmUoZWZmZWN0aXZlUGVyaW9kLnRvKSAhPT0gMFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpdGVtVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZC5mcm9tICsgJyAtICcgKyBlZmZlY3RpdmVQZXJpb2QudG87XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXsndGltZWxpbmUtaGVhZGVyLWJsb2NrJyArIGluZGV4fSBzdHlsZT17cGVyaW9kQmxvY2t9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbVRleHR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbVRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclRpbWVsaW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGRpbWVuc2lvbiB9IGZyb20gJy4uL3N0eWxlcyc7XG5cbmNvbnN0IHBlcmlvZCA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGZyb206IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGltZWxpbmVTdGFydFBvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWVsaW5lRW5kUG9zaXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufSk7XG5cbmNvbnN0IHRpbWV0YWJsZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIG9iamVjdElkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBlcmlvZHM6IFByb3BUeXBlcy5hcnJheU9mKHBlcmlvZCkuaXNSZXF1aXJlZFxufSkuaXNSZXF1aXJlZDtcblxuY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpbWV0YWJsZXM6IFByb3BUeXBlcy5hcnJheU9mKHRpbWV0YWJsZSkuaXNSZXF1aXJlZCxcbiAgICBpc0xhc3Q6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgdmFsaWREYXlzT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aW1ldGFibGVzLCB2YWxpZERheXNPZmZzZXQsIGlzTGFzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRpbWVsaW5lU3R5bGUgPSB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVCYWNrZ3JvdW5kLFxuICAgICAgd2lkdGg6IGRpbWVuc2lvbi50aW1lTGluZVdpZHRoICsgJyUnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH07XG5cbiAgICBjb25zdCB0aW1lbGluZVdyYXBwZXIgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogaXNMYXN0ID8gMCA6IDEwXG4gICAgfTtcblxuICAgIGxldCB0aW1lQmxvY2sgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUJsb2NrQmFja2dyb3VuZCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICB9O1xuXG4gICAgbGV0IHRleHRTdHlsZSA9IHtcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgb3ZlcmZsb3c6ICd2aXNibGUnLFxuICAgICAgdGV4dFNoYWRvdzogJzBweCAwcHggNXB4IGJsYWNrJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBtYXJnaW46ICdhdXRvIDEwcHgnLFxuICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgIGZvbnRTaXplOiAnMC43ZW0nLFxuICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgfTtcblxuICAgIGxldCBoclN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9O1xuXG4gICAgaHJTdHlsZS5tYXJnaW5MZWZ0ID0gMzMgKyB2YWxpZERheXNPZmZzZXQgKyAnJSc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVXcmFwcGVyfT5cbiAgICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVTdHlsZX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17aHJTdHlsZX0gLz5cbiAgICAgICAgICB7dGltZXRhYmxlcy5tYXAodGltZXRhYmxlID0+XG4gICAgICAgICAgICB0aW1ldGFibGUucGVyaW9kcy5tYXAoKHBlcmlvZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aW1ldGFibGUub2JqZWN0SWQ7XG4gICAgICAgICAgICAgIGNvbnN0IGhvdmVyID0gYCR7dGl0bGV9IFxcbihwZXJpb2Q6ICR7cGVyaW9kLmZyb219IC0+ICR7cGVyaW9kLnRvfSlgO1xuICAgICAgICAgICAgICBsZXQgcGVyaW9kQmxvY2sgPSB7IC4uLnRpbWVCbG9jayB9O1xuICAgICAgICAgICAgICBwZXJpb2RCbG9jay53aWR0aCA9XG4gICAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gLSBwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICsgJyUnO1xuICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID0gcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJztcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9eyd0aW1ldGFibGUtcGVyaW9kLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3BlcmlvZEJsb2NrfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aG92ZXJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRTdHlsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoLy9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9ub3Rvc2Fuc2thbm5hZGEuY3NzKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucyBLYW5uYWRhJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMxOTE5MTk7XFxufVxcblxcbnAsaDEsaDIsaDMsaDQsaDUsIHNwYW4ge1xcbiAgICBjb2xvcjogIzE5MTkxOTtcXG59XFxuXFxuLl8ycE9aVDZPRXdSMnZfY2k3Mlc0a29COmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubVNHS1ZsbWNXRVNieEVIcjdCYXoyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5fMWg5QUctVld4X1U0MFR4VkUwMTU1SyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5fMWpOLU43eWZTS1loMUtVenJhczRsWiB7XFxuICAgIGNvbG9yOiAjMEQzQzYxO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLl8yMXA1NVZNX2U3NV8yaUJpclcxTWtmIHtcXG4gICAgY29sb3I6ICMyMTk2RjM7XFxufVxcblxcblxcbmEge1xcbiAgICBjb2xvcjogIzIxOTZGMztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyLCBhOmZvY3VzIHtcXG4gICAgY29sb3I6ICMxOTc2RDI7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBlcmlvZC1ibG9ja1wiOiBcIl8ycE9aVDZPRXdSMnZfY2k3Mlc0a29CXCIsXG5cdFwicGFnZS1saW5rLXBhcmVudFwiOiBcIm1TR0tWbG1jV0VTYnhFSHI3QmF6MlwiLFxuXHRcInBhZ2UtbGlua1wiOiBcIl8xaDlBRy1WV3hfVTQwVHhWRTAxNTVLXCIsXG5cdFwiYWN0aXZlLWxpbmtcIjogXCJfMWpOLU43eWZTS1loMUtVenJhczRsWlwiLFxuXHRcImluYWN0aXZlLWxpbmtcIjogXCJfMjFwNTVWTV9lNzVfMmlCaXJXMU1rZlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP21vZHVsZXM9dHJ1ZSEuL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5fMnRVLWY4NmZfNDJnMXBWVlFaWEZYQyB7XFxuICBiYWNrZ3JvdW5kOiAjQjkxOTE5O1xcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI0I5MTkxOSksIGNvbG9yLXN0b3AoNjYlLCAjZjZmNmY2KSwgY29sb3Itc3RvcCgxMDAlLCAjZjZmNmY2KSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCAjQjkxOTE5KSwgY29sb3Itc3RvcCg2NiUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI2Y2ZjZmNiksIGNvbG9yLXN0b3AoMTAwJSwgI2Y2ZjZmNikpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJ0aW1lbGluZVwiOiBcIl8ydFUtZjg2Zl80MmcxcFZWUVpYRlhDXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcz10cnVlIS4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFDaGV2cm9uRG93biA9IGZ1bmN0aW9uIEZhQ2hldnJvbkRvd24ocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMzcuNiAxOGwtMTYuNiAxNi42cS0wLjQgMC40LTEgMC40dC0xLTAuNGwtMTYuNi0xNi42cS0wLjQtMC40LTAuNC0xdDAuNC0xbDMuNy0zLjdxMC41LTAuNCAxLTAuNHQxIDAuNGwxMS45IDExLjkgMTEuOS0xMS45cTAuNC0wLjQgMS0wLjR0MSAwLjRsMy43IDMuN3EwLjQgMC40IDAuNCAxdC0wLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDaGV2cm9uRG93bjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1kb3duLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFDaGV2cm9uVXAgPSBmdW5jdGlvbiBGYUNoZXZyb25VcChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zNy42IDI5LjdsLTMuNyAzLjdxLTAuNSAwLjQtMSAwLjR0LTEtMC40bC0xMS45LTExLjktMTEuOCAxMS45cS0wLjUgMC40LTEuMSAwLjR0LTEtMC40bC0zLjctMy43cS0wLjQtMC40LTAuNC0xdDAuNC0xbDE2LjYtMTYuNnEwLjQtMC40IDEtMC40dDEgMC40bDE2LjYgMTYuNnEwLjQgMC40IDAuNCAxdC0wLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDaGV2cm9uVXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tdXAuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUNvZyA9IGZ1bmN0aW9uIEZhQ29nKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTI1LjkgMjBxMC0yLjQtMS43LTR0LTQuMS0xLjctNCAxLjctMS43IDQgMS43IDQgNCAxLjcgNC4xLTEuNyAxLjctNHogbTExLjQtMi40djQuOXEwIDAuMy0wLjIgMC41dC0wLjQgMC4zbC00LjIgMC42cS0wLjQgMS4zLTAuOCAyLjEgMC43IDEuMSAyLjMgMy4xIDAuMyAwLjIgMC4zIDAuNXQtMC4yIDAuNXEtMC42IDAuOS0yLjIgMi40dC0yLjEgMS42cS0wLjMgMC0wLjYtMC4ybC0zLjEtMi40cS0xIDAuNS0yIDAuOS0wLjQgMy0wLjcgNC4xLTAuMSAwLjYtMC44IDAuNmgtNC45cS0wLjMgMC0wLjYtMC4xdC0wLjItMC41bC0wLjctNC4xcS0xLjEtMC40LTItMC45bC0zLjEgMi40cS0wLjIgMC4yLTAuNiAwLjItMC4zIDAtMC41LTAuMi0yLjgtMi42LTMuNy0zLjgtMC4yLTAuMi0wLjItMC41IDAtMC4yIDAuMi0wLjUgMC4zLTAuNSAxLjEtMS41dDEuMi0xLjVxLTAuNi0xLjItMC45LTIuM2wtNC4xLTAuNnEtMC4yIDAtMC40LTAuMnQtMC4yLTAuNnYtNC45cTAtMC4zIDAuMi0wLjV0MC40LTAuM2w0LjItMC43cTAuMy0xIDAuOC0yLTAuOS0xLjMtMi40LTMuMS0wLjItMC4zLTAuMi0wLjUgMC0wLjIgMC4yLTAuNSAwLjYtMC44IDIuMi0yLjR0Mi4xLTEuNnEwLjMgMCAwLjYgMC4ybDMuMSAyLjRxMS0wLjUgMi0wLjkgMC40LTMgMC43LTQuMSAwLjEtMC42IDAuOC0wLjZoNC45cTAuMyAwIDAuNiAwLjF0MC4yIDAuNWwwLjcgNC4xcTEgMC40IDIgMC45bDMuMS0yLjRxMC4yLTAuMiAwLjYtMC4yIDAuMyAwIDAuNSAwLjIgMi45IDIuNiAzLjcgMy44IDAuMiAwLjIgMC4yIDAuNSAwIDAuMi0wLjIgMC41LTAuNCAwLjUtMS4yIDEuNXQtMS4yIDEuNXEwLjYgMS4yIDEgMi4ybDQgMC43cTAuMyAwIDAuNSAwLjJ0MC4yIDAuNnonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDb2c7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NvZy5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZhUmVmcmVzaCA9IGZ1bmN0aW9uIEZhUmVmcmVzaChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zNi43IDIzLjZxMCAwLjEgMCAwLjEtMS40IDYtNiA5Ljd0LTEwLjYgMy43cS0zLjMgMC02LjQtMS4ydC01LjQtMy41bC0yLjkgMi45cS0wLjQgMC40LTEgMC40dC0xLTAuNC0wLjQtMXYtMTBxMC0wLjYgMC40LTF0MS0wLjRoMTBxMC42IDAgMSAwLjR0MC41IDEtMC41IDFsLTMgM3ExLjYgMS41IDMuNiAyLjN0NC4xIDAuOHEzIDAgNS42LTEuNHQ0LjItNHEwLjItMC40IDEuMi0yLjYgMC4xLTAuNSAwLjYtMC41aDQuM3EwLjMgMCAwLjUgMC4ydDAuMiAwLjV6IG0wLjYtMTcuOXYxMHEwIDAuNi0wLjQgMXQtMSAwLjRoLTEwcS0wLjYgMC0xLTAuNHQtMC41LTEgMC41LTFsMy0zLjFxLTMuMy0zLTcuOC0zLTIuOSAwLTUuNSAxLjR0LTQuMiA0cS0wLjIgMC40LTEuMiAyLjYtMC4yIDAuNS0wLjYgMC41aC00LjVxLTAuMyAwLTAuNS0wLjJ0LTAuMi0wLjV2LTAuMXExLjUtNiA2LTkuN3QxMC43LTMuN3EzLjMgMCA2LjQgMS4ydDUuNCAzLjVsMy0yLjlxMC40LTAuNCAxLTAuNHQxIDAuNCAwLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFSZWZyZXNoO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRDaGVja0NpcmNsZSA9IGZ1bmN0aW9uIE1kQ2hlY2tDaXJjbGUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMTYuNiAyOC40bDE1LTE1LTIuMy0yLjUtMTIuNyAxMi43LTUuOS01LjktMi4zIDIuM3ogbTMuNC0yNWM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZENoZWNrQ2lyY2xlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9jaGVjay1jaXJjbGUuanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZEVycm9yID0gZnVuY3Rpb24gTWRFcnJvcihwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMS42IDIxLjZ2LTEwaC0zLjJ2MTBoMy4yeiBtMCA2Ljh2LTMuNGgtMy4ydjMuNGgzLjJ6IG0tMS42LTI1YzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kRXJyb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2Vycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRIZWxwT3V0bGluZSA9IGZ1bmN0aW9uIE1kSGVscE91dGxpbmUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMjAgMTBjMy43IDAgNi42IDMgNi42IDYuNiAwIDQuMi01IDQuNy01IDguNGgtMy4yYzAtNS40IDUtNSA1LTguNCAwLTEuOC0xLjYtMy4yLTMuNC0zLjJzLTMuNCAxLjQtMy40IDMuMmgtMy4yYzAtMy42IDIuOS02LjYgNi42LTYuNnogbTAgMjMuNGM3LjMgMCAxMy40LTYuMSAxMy40LTEzLjRzLTYuMS0xMy40LTEzLjQtMTMuNC0xMy40IDYuMS0xMy40IDEzLjQgNi4xIDEzLjQgMTMuNCAxMy40eiBtMC0zMGM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eiBtLTEuNiAyNi42di0zLjRoMy4ydjMuNGgtMy4yeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZEhlbHBPdXRsaW5lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9oZWxwLW91dGxpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZEhvdXJnbGFzc0VtcHR5ID0gZnVuY3Rpb24gTWRIb3VyZ2xhc3NFbXB0eShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMCAxOS4xbDYuNi02LjZ2LTUuOWgtMTMuMnY1Ljl6IG02LjYgOC40bC02LjYtNi42LTYuNiA2LjZ2NS45aDEzLjJ2LTUuOXogbS0xNi42LTI0LjFoMjB2MTBsLTYuNiA2LjYgNi42IDYuNnYxMGgtMjB2LTEwbDYuNi02LjYtNi42LTYuNnYtMTB6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kSG91cmdsYXNzRW1wdHk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2hvdXJnbGFzcy1lbXB0eS5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kU2NoZWR1bGUgPSBmdW5jdGlvbiBNZFNjaGVkdWxlKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIwLjkgMTEuNnY4LjhsNy41IDQuNC0xLjMgMi4yLTguNy01LjR2LTEwaDIuNXogbS0wLjkgMjEuOGM3LjMgMCAxMy40LTYuMSAxMy40LTEzLjRzLTYuMS0xMy40LTEzLjQtMTMuNC0xMy40IDYuMS0xMy40IDEzLjQgNi4xIDEzLjQgMTMuNCAxMy40eiBtMC0zMGM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZFNjaGVkdWxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9zY2hlZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2ZpeFVybHMuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9FdmVudERldGFpbHMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0V2ZW50RGV0YWlscy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0V2ZW50RGV0YWlscy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0hlYWRlclRpbWVsaW5lLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9IZWFkZXJUaW1lbGluZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0hlYWRlclRpbWVsaW5lLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=