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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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
/* 2 */
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
      EXPORT: "GTFS-eksport",
      EXPORT_NETEX: "NeTEx-eksport",
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
      undefined: "Validering"
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
      undefined: "Validation"
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
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
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
	fixUrls = __webpack_require__(21);

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
/* 7 */
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

var _EventDetails2 = __webpack_require__(11);

var _EventDetails3 = _interopRequireDefault(_EventDetails2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Timeline = _Timeline3.default;
exports.HeaderTimeline = _HeaderTimeline3.default;
exports.EventDetails = _EventDetails3.default;

/***/ }),
/* 8 */,
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ChouetteLink = __webpack_require__(9);

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
        IMPORT: 'importer',
        VALIDATION_LEVEL_1: 'validator'
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
/* 11 */
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

__webpack_require__(22);

var _translations = __webpack_require__(4);

var _translations2 = _interopRequireDefault(_translations);

var _FilterButtonTray = __webpack_require__(15);

var _FilterButtonTray2 = _interopRequireDefault(_FilterButtonTray);

var _buttonConfig = __webpack_require__(3);

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
      dateFilter: props.showDateFilter ? 'LAST_12_HOURS' : 'ALL_TIME'
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
        _react2.default.createElement('div', {
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _error = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-icons/lib/md/error\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _error2 = _interopRequireDefault(_error);

var _checkCircle = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-icons/lib/md/check-circle\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _checkCircle2 = _interopRequireDefault(_checkCircle);

var _schedule = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-icons/lib/md/schedule\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _schedule2 = _interopRequireDefault(_schedule);

var _cog = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-icons/lib/fa/cog\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _cog2 = _interopRequireDefault(_cog);

var _helpOutline = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-icons/lib/md/help-outline\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _helpOutline2 = _interopRequireDefault(_helpOutline);

var _hourglassEmpty = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-icons/lib/md/hourglass-empty\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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

var _actionTranslations = __webpack_require__(2);

var _actionTranslations2 = _interopRequireDefault(_actionTranslations);

var _chevronDown = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-icons/lib/fa/chevron-down\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _chevronDown2 = _interopRequireDefault(_chevronDown);

var _chevronUp = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-icons/lib/fa/chevron-up\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

var _chevronUp2 = _interopRequireDefault(_chevronUp);

var _ControlledChouetteLink = __webpack_require__(10);

var _ControlledChouetteLink2 = _interopRequireDefault(_ControlledChouetteLink);

var _translations = __webpack_require__(4);

var _translations2 = _interopRequireDefault(_translations);

var _EventStatusIcon = __webpack_require__(12);

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

var _buttonConfig = __webpack_require__(3);

var _buttonConfig2 = _interopRequireDefault(_buttonConfig);

var _actionTranslations = __webpack_require__(2);

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

var _styles = __webpack_require__(1);

var _HeaderTimeline = __webpack_require__(23);

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

var _styles = __webpack_require__(1);

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

exports = module.exports = __webpack_require__(5)(false);
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

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n._2tU-f86f_42g1pVVQZXFXC {\n  background: #B91919;\n  background: -moz-linear-gradient(left, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #B91919), color-stop(66%, #B91919), color-stop(66%, #f6f6f6), color-stop(100%, #f6f6f6));\n  background: -webkit-linear-gradient(left, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: -o-linear-gradient(left, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: -ms-linear-gradient(left, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: linear-gradient(to right, #B91919 0%, #B91919 66%, #f6f6f6 66%, #f6f6f6 100%);\n  background: -webkit-gradient(linear, left top, right top, color-stop(0%, #B91919), color-stop(66%, #B91919), color-stop(66%, #f6f6f6), color-stop(100%, #f6f6f6));\n}\n", ""]);

// exports
exports.locals = {
	"timeline": "_2tU-f86f_42g1pVVQZXFXC"
};

/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(6)(content, {});
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZGIyYTZmZDFlOWM4NmUyMGNiNyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWN0aW9uVHJhbnNsYXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2J1dHRvbkNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90cmFuc2xhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hvdWV0dGVMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZWRDaG91ZXR0ZUxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50U3RhdHVzSWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudFN0ZXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQnV0dG9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvblRyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvZml4VXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuY3NzPzVjYzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzPzI3N2EiXSwibmFtZXMiOlsiY29sb3JEZWYiLCJibGFjayIsIndoaXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYmlnYmx1ZSIsImRhcmtCbHVlIiwiZGFya0dyZXkiLCJncmV5IiwibGlnaHRHcmV5IiwiZW50dXIiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiY29sb3IiLCJmb250IiwiaW52ZXJzZSIsInRpdGxlIiwiaW5mbzEiLCJpbmZvMiIsImluZm8zIiwid2FybiIsImRpc2FibGVkIiwidG9vbHRpcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJlZmZlY3RpdmUiLCJmYWlsIiwibW9kYWwiLCJiYWNrZHJvcCIsInRhYkFjdGl2ZSIsInRpbWVMaW5lQmFja2dyb3VuZCIsInRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kIiwidGltZUxpbmVCb3JkZXIiLCJ0aW1lTGluZVN1Y2Nlc3MiLCJ0aW1lTGluZUZhaWwiLCJ0YWJsZUhlYWRlciIsInRhYmxlUm93IiwidGFibGVJbmZvIiwidmFsaWQiLCJpbnZhbGlkIiwiZXhwaXJpbmciLCJoaWdobGlnaHQiLCJkaW1lbnNpb24iLCJ0aW1lTGluZVdpZHRoIiwic3R5bGVzIiwidGV4dCIsIkZJTEVfVFJBTlNGRVIiLCJGSUxFX0NMQVNTSUZJQ0FUSU9OIiwiRklMRV9ERUxJVkVSWSIsIklNUE9SVCIsIkVYUE9SVCIsIkVYUE9SVF9ORVRFWCIsIlZBTElEQVRJT05fTEVWRUxfMSIsIkRBVEFTUEFDRV9UUkFOU0ZFUiIsIlZBTElEQVRJT05fTEVWRUxfMiIsIkJVSUxEX0dSQVBIIiwiVU5LTk9XTiIsImZpbGVuYW1lIiwidW5kZWZpbmVkIiwic3RhdGVzIiwiT0siLCJQRU5ESU5HIiwiU1RBUlRFRCIsIkZBSUxFRCIsIkRVUExJQ0FURSIsIklHTk9SRUQiLCJDQU5DRUxMRUQiLCJUSU1FT1VUIiwiZXJyb3JNZXNzYWdlIiwiZmlsdGVyQnV0dG9uIiwiQUxMX1RJTUUiLCJMQVNUXzEyX0hPVVJTIiwiTEFTVF8yNF9IT1VSUyIsIkxBU1RfV0VFSyIsIkxBU1RfTU9OVEgiLCJidXR0b25Db25maWciLCJmaWVsZHMiLCJpZCIsImdldExhc3RWYWxpZERhdGUiLCJub3ciLCJEYXRlIiwic2V0TW9udGgiLCJnZXRNb250aCIsInNldERhdGUiLCJnZXREYXRlIiwic2V0SG91cnMiLCJnZXRIb3VycyIsInBhZ2UiLCJub19zdGF0dXMiLCJzdGFydGVkIiwiZW5kZWQiLCJkdXJhdGlvbiIsInNob3dfYWxsIiwic2hvd19vbmx5X2ZhaWxlZCIsInNob3dfb25seV9zdWNjZXNzIiwic2hvd19vbmx5X2NhbmNlbGxlZCIsIlRpbWVsaW5lIiwiSGVhZGVyVGltZWxpbmUiLCJFdmVudERldGFpbHMiLCJDaG91ZXR0ZUxpbmsiLCJhY3Rpb24iLCJyZWZlcmVudGlhbCIsImNoaWxkcmVuIiwiYmFzZVVSTCIsIndpbmRvdyIsImNvbmZpZyIsImNob3VldHRlQmFzZVVybCIsImFjdGlvbk1hcCIsIlVSTCIsIkNvbnRyb2xsZWRDaG91ZXR0ZUxpbmsiLCJwcm9wcyIsImV2ZW50cyIsImluY2x1ZGVMZXZlbDIiLCJzdXBwb3J0ZWRBY3Rpb25zIiwiY2hvdWV0ZUFjdGlvbk1hcCIsInB1c2giLCJsZW5ndGgiLCJlbmRTdGF0ZSIsImluZGV4T2YiLCJjaG91ZXR0ZUpvYklkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJzdGF0ZSIsImFjdGl2ZVBhZ2VJbmRleCIsImVuZFN0YXRlRmlsdGVyIiwiZGF0ZUZpbHRlciIsInNob3dEYXRlRmlsdGVyIiwiZSIsInBhZ2VJbmRleCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJkYXRhU291cmNlIiwibG9jYWxlIiwiZmlsdGVyZWRQYWdlcyIsImxhc3REYXRlIiwiZmlsdGVyZWRCeURhdGUiLCJmaWx0ZXIiLCJldmVudCIsImZpcnN0RXZlbnQiLCJwYWdpbmF0aW9uTWFwIiwiZ2V0UGFnaW5hdGlvbk1hcCIsImZpbHRlcnMiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImZvbnRTaXplIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmFuc2xhdGlvbnMiLCJtYXJnaW5MZWZ0IiwiaGFuZGxlRmlsdGVyQ2hhbmdlIiwiYmluZCIsInJlZnJlc2hCdXR0b24iLCJoYW5kbGVSZWZyZXNoIiwibWFyZ2luUmlnaHQiLCJmbG9hdCIsImN1cnNvciIsInRyYW5zZm9ybSIsIndpZHRoIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwibWFwIiwiaW5kZXgiLCJpc0FjdGl2ZSIsImhhbmRsZVBhZ2VDbGljayIsImxpc3RJdGVtIiwiZXZlbnRHcm91cCIsImZvckVhY2giLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiZm9udFdlaWdodCIsInN0YXR1c0xpc3QiLCJpIiwiaiIsInNsaWNlIiwiRXZlbnRTdGF0dXNJY29uIiwiaGVpZ2h0IiwiRXZlbnRTdGVwcGVyIiwiZXhwYW5kZWQiLCJncm91cHMiLCJldmVudFN0YXRlcyIsImdyb3Vwc1dpdGhVbmxpc3RlZCIsIk9iamVjdCIsImFzc2lnbiIsImZpcnN0U3RhdGVGb3VuZCIsIm1pc3NpbmdCZWZvcmVTdGFydFN0YXJ0IiwiZmluYWxHcm91cHMiLCJrZXlzIiwic29ydCIsImtleTEiLCJrZXkyIiwia2V5IiwiZm9ybWF0dGVkR3JvdXBzIiwibmFtZSIsImNvbWJpbmVkIiwiZ3JvdXAiLCJkYXRhIiwiZXJyb3JPbiIsImNvbHVtblN0eWxlIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiY29sdW1uIiwiQXJyYXkiLCJpc0FycmF5IiwicmVuZGVyRXZlbnQiLCJpc0ZpcnN0IiwiY29sdW1uSW5kZXgiLCJncm91cFN0eWxlIiwiZ3JvdXBUZXh0IiwibGlua1N0eWxlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJUb3BTdHlsZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luIiwiQWN0aW9uVHJhbnNsYXRpb25zIiwidG9vbFRpcFRleHQiLCJkYXRlIiwib3BhY2l0eSIsInN0ZXBwZXJzdHlsZSIsImFsaWduQ29udGVudCIsImFkZFVubGlzdGVkU3RhdGVzIiwiYWdncmVnZ2F0ZUZpbGVFdmVudHMiLCJjcmVhdGVDb21iaW5lZFNwbGl0IiwiYnVsbGV0cyIsImJ1bGxldCIsImhhbmRsZVRvZ2dsZVZpc2liaWxpdHkiLCJwcm92aWRlciIsImZsZXgiLCJmaWxlTmFtZSIsInN0b3BQcm9wYWdhdGlvbiIsImxhc3RFdmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJGaWx0ZXJCdXR0b24iLCJoYW5kbGVDbGljayIsImxhYmVsIiwiYWN0aXZlIiwiYWN0aXZlU3R5bGUiLCJpbmFjdGl2ZVN0eWxlIiwiZGVmYXVsdFN0eWxlIiwibWluV2lkdGgiLCJidXR0b25TdHlsZSIsInBvaW50ZXJFdmVudHMiLCJGaWx0ZXJCdXR0b25UcmF5IiwiYWN0aXZlQnV0dG9uSWQiLCJvbkNoYW5nZSIsInN0eWxlIiwiZmllbGQiLCJzaG93VG9vbHRpcCIsImVmZmVjdGl2ZVBlcmlvZHMiLCJ2YWxpZERheXNPZmZzZXQiLCJ0aW1lbGluZVN0eWxlIiwibGluZUhlaWdodCIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJ0aW1lbGluZVdyYXBwZXIiLCJ0aW1lQmxvY2siLCJ0aXRsZVRleHQiLCJ6SW5kZXgiLCJ0b29sVGlwU3R5bGUiLCJ0cmFuc2l0aW9uIiwidGV4dFN0eWxlIiwidGV4dFNoYWRvdyIsIndoaXRlU3BhY2UiLCJ0ZXh0T3ZlcmZsb3ciLCJoclN0eWxlIiwiaG92ZXJUZXh0IiwiaGFuZGxlVG9nZ2xlVG9vbFRpcCIsImxpbmUiLCJ0aW1lbGluZSIsImVmZmVjdGl2ZVBlcmlvZCIsInBlcmlvZEJsb2NrIiwidGltZWxpbmVFbmRQb3NpdGlvbiIsInRpbWVsaW5lU3RhcnRQb3NpdGlvbiIsIml0ZW1UZXh0IiwidG8iLCJmcm9tIiwibG9jYWxlQ29tcGFyZSIsInZlcnRpY2FsQWxpZ24iLCJzdHJpbmciLCJudW1iZXIiLCJ2YWxpZEZyb21EYXRlIiwiYXJyYXkiLCJwZXJpb2QiLCJzaGFwZSIsInRpbWV0YWJsZSIsIm9iamVjdElkIiwicGVyaW9kcyIsImFycmF5T2YiLCJ0aW1ldGFibGVzIiwiaXNMYXN0Iiwib3ZlcmZsb3dZIiwicGFkZGluZ0JvdHRvbSIsImhvdmVyIiwiYm9vbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7Ozs7Ozs7OztBQ0NBLElBQU1BLFdBQVc7QUFDZkMsU0FBTyxNQURRO0FBRWZDLFNBQU8sTUFGUTtBQUdmQyxPQUFLLE1BSFU7QUFJZkMsU0FBTyxNQUpRO0FBS2ZDLFFBQU0sTUFMUztBQU1mQyxXQUFTLFNBTk07QUFPZkMsWUFBVSxTQVBLO0FBUWZDLFlBQVUsU0FSSztBQVNmQyxRQUFNLFNBVFM7QUFVZkMsYUFBVyxT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Q0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7O0FDeEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7QUNwQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzZGIyYTZmZDFlOWM4NmUyMGNiNyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXG5jb25zdCBjb2xvckRlZiA9IHtcbiAgYmxhY2s6ICcjMDAwJyxcbiAgd2hpdGU6ICcjRkZGJyxcbiAgcmVkOiAnI0YwMCcsXG4gIGdyZWVuOiAnIzBGMCcsXG4gIGJsdWU6ICcjMDBGJyxcbiAgYmlnYmx1ZTogJyMxMTY5QTcnLFxuICBkYXJrQmx1ZTogJyMwODM0NTMnLFxuICBkYXJrR3JleTogJyMyRjJGMkYnLFxuICBncmV5OiAnI0RERERERCcsXG4gIGxpZ2h0R3JleTogJyNGMkYyRjInLFxuICBlbnR1cjoge1xuICAgIHByaW1hcnk6ICcjMjczQTQ2JywgICAvLyAzOSw1OCw3MFxuICAgIHNlY29uZGFyeTogJyM2QkJEQzInLCAvLzEwNywxODksMTk0LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgZm9udDoge1xuICAgIGludmVyc2U6IGNvbG9yRGVmLndoaXRlLFxuICAgIHRpdGxlOiBjb2xvckRlZi5ibGFjayxcbiAgICBpbmZvMTogY29sb3JEZWYuZW50dXIuc2Vjb25kYXJ5LFxuICAgIGluZm8yOiBjb2xvckRlZi5kYXJrQmx1ZSxcbiAgICBpbmZvMzogY29sb3JEZWYuYmxhY2ssXG4gICAgd2FybjogY29sb3JEZWYucmVkLFxuICAgIGRpc2FibGVkOiBjb2xvckRlZi5ncmV5LFxuXG4gICAgdG9vbHRpcDogY29sb3JEZWYud2hpdGUsXG4gIH0sXG4gIGJhY2tncm91bmQ6IGNvbG9yRGVmLmVudHVyLnByaW1hcnksXG4gIGJvcmRlcjogY29sb3JEZWYuYmxhY2ssXG4gIGVmZmVjdGl2ZTogY29sb3JEZWYuYmxhY2ssXG4gIGZhaWw6IGNvbG9yRGVmLnJlZCxcbiAgbW9kYWw6IGNvbG9yRGVmLndoaXRlLFxuICBiYWNrZHJvcDogJ3JnYmEoMCwgMCwgMCwgMC4zKScsXG4gIHRvb2x0aXA6ICcjMTkxOTE5JyxcbiAgdGFiQWN0aXZlOiBjb2xvckRlZi5lbnR1ci5zZWNvbmRhcnksXG5cbiAgdGltZUxpbmVCYWNrZ3JvdW5kOiAnI0RFRDhEOCcsXG4gIHRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kOiAnIzZEOTJCNicsXG4gIHRpbWVMaW5lQm9yZGVyOiAnI2VlZScsXG4gIHRpbWVMaW5lU3VjY2VzczogJyM1REFFNUQnLFxuICB0aW1lTGluZUZhaWw6ICcjQjkxOTE5JyxcbiAgdGFibGVIZWFkZXI6IGNvbG9yRGVmLmxpZ2h0R3JleSxcbiAgdGFibGVSb3c6ICcjZWJmMmYxJyxcbiAgdGFibGVJbmZvOiAnI2ZmZmZkYicsXG5cbiAgdmFsaWQ6ICcjMzNjMTQ2JyxcbiAgaW52YWxpZDogJyNiMjAwMDAnLFxuICBleHBpcmluZzogJyNGRkFBMDAnLFxuICBoaWdobGlnaHQgOiB7XG4gICAgdmFsaWQ6ICcjNGNhZjUwJyxcbiAgICBleHBpcmluZzogJyNGRkI2MEEnLFxuICAgIGludmFsaWQ6ICcjY2MwMDAwJyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGltZW5zaW9uID0ge1xuICB0aW1lTGluZVdpZHRoOiA4NSxcbn1cblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHtcbiAgY29sb3I6IGNvbG9yLFxuICBkaW1lbnNpb246IGRpbWVuc2lvbixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdHlsZXMvaW5kZXguanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIFwibmJcIjoge1xuICAgIHRleHQ6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6IFwiRmlsb3ZlcmbDuHJpbmdcIixcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046IFwiRmlsa2xhc3NpZmlzZXJpbmdcIixcbiAgICAgIEZJTEVfREVMSVZFUlk6ICdGaWxsZXZlcmFuc2UnLFxuICAgICAgSU1QT1JUOiBcIkltcG9ydFwiLFxuICAgICAgRVhQT1JUOiBcIkdURlMtZWtzcG9ydFwiLFxuICAgICAgRVhQT1JUX05FVEVYOiBcIk5lVEV4LWVrc3BvcnRcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogXCJWYWxpZGVyaW5nIG5pdsOlIDFcIixcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogXCJPdmVyZsO4cmluZyBzZW50cmFsIGRhdGFiYXNlXCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6IFwiVmFsaWRlcmluZyBuaXbDpSAyXCIsXG4gICAgICBCVUlMRF9HUkFQSDogXCJCeWdnIGF2IHJlaXNlc8O4a2ZvcnNsYWdcIixcbiAgICAgIFVOS05PV046IFwiVWtqZW50IHN0ZWdcIixcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiBcIk92ZXJmw7hyaW5nIGF2IGZpbCBmcmEgbG9rYWwgbWFza2luIHRpbCBzZW50cmFsIHNlcnZlclwiLFxuICAgICAgSU1QT1JUOiBcIkZpbHZhbGlkZXJpbmcgb2cgaW1wb3J0IGkgbG9rYWx0IGRhdGFiYXNlb21yw6VkZSBuaXbDpSAxXCIsXG4gICAgICBFWFBPUlQ6IFwiRWtzcG9ydCBhdiBydXRlZGF0YSBcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogXCJWYWxpZGVyaW5nIGF2IGtvbXBsZXR0IGRhdGFvbXLDpWRlIG5pdsOlIDFcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMjogXCJWYWxpZGVyaW5nIGF2IGtvbXBsZXR0IGRhdGFvbXLDpWRlIG5pdsOlIDJcIixcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogXCJPdmVyZsO4cmluZyB0aWwgc2VudHJhbHQgZGF0YWJhc2VvbXLDpWRlIG5pdsOlIDJcIixcbiAgICAgIEJVSUxEX0dSQVBIOiBcIkJ5Z2cgYXYgcmVpc2Vzw7hrZm9yc2xhZ1wiLFxuICAgICAgVU5LTk9XTjogXCJEZXR0ZSBzdGVnZXQgZXIgdWtqZW50XCIsXG4gICAgfSxcbiAgICBmaWxlbmFtZToge1xuICAgICAgdW5kZWZpbmVkOiBcIlZhbGlkZXJpbmdcIlxuICAgIH0sXG4gICAgc3RhdGVzOiB7XG4gICAgICBPSzogXCJGdWxsZsO4cnRcIixcbiAgICAgIFBFTkRJTkc6IFwiVmVudGVyXCIsXG4gICAgICBTVEFSVEVEOiBcIlDDpWJlZ3ludFwiLFxuICAgICAgRkFJTEVEOiBcIkZlaWxcIixcbiAgICAgIERVUExJQ0FURTogXCJGZWlsIC0gZHVwbGlrYXQgZGF0YXNldHRcIixcbiAgICAgIElHTk9SRUQ6IFwiSWtrZSBnamVubm9tZsO4cnRcIixcbiAgICAgIENBTkNFTExFRDogXCJLYW5zZWxsZXJ0XCIsXG4gICAgICBUSU1FT1VUOiBcIlRpZHNhdmJydWRkXCIsXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6ICdGaWxvdmVyZsO4cmluZyBmZWlsZXQnLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZpbGtsYXNzaWZpc2VyaW5nIGZlaWxldCcsXG4gICAgfSxcbiAgICBmaWx0ZXJCdXR0b246IHtcbiAgICAgIEFMTF9USU1FOiAnVWJlZ3JlbnNldCcsXG4gICAgICBMQVNUXzEyX0hPVVJTOiAnU2lzdGUgMTIgdGltZW5lJyxcbiAgICAgIExBU1RfMjRfSE9VUlM6ICdTaXN0ZSBkw7hnbicsXG4gICAgICBMQVNUX1dFRUs6ICdTaXN0ZSB1a2UnLFxuICAgICAgTEFTVF9NT05USDogJ1Npc3RlIG3DpW5lZCdcbiAgICB9XG4gIH0sXG4gIFwiZW5cIjoge1xuICAgIHRleHQ6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6IFwiRmlsZSB0cmFuc2ZlclwiLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogXCJGaWxlIGNsYXNzaWZpY2F0aW9uXCIsXG4gICAgICBGSUxFX0RFTElWRVJZOiAnRmlsZSBkZWxpdmVyeScsXG4gICAgICBJTVBPUlQ6IFwiSW1wb3J0XCIsXG4gICAgICBFWFBPUlQ6IFwiR1RGUyBleHBvcnRcIixcbiAgICAgIEVYUE9SVF9ORVRFWDogXCJOZVRFeCBleHBvcnRcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogXCJWYWxpZGF0aW9uIGxldmVsIDFcIixcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogXCJUcmFuc2ZlciB0byBjZW50cmFsIHNwYWNlXCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6IFwiVmFsaWRhdGlvbiBsZXZlbCAyXCIsXG4gICAgICBCVUlMRF9HUkFQSDogXCJCdWlsZCBncmFwaFwiLFxuICAgICAgVU5LTk9XTjogXCJVa25vd24gc3RlcFwiLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6IFwiVXBsb2FkIGxvY2FsIGZpbGUgdG8gcmVtb3RlIHNlcnZlclwiLFxuICAgICAgSU1QT1JUOiBcIkZpbGUgdmFsaWRhdGlvbiBhbmQgaW1wb3J0IGluIGxvY2FsIGRhdGEgc3BhY2UgLSBsZXZlbCAxXCIsXG4gICAgICBFWFBPUlQ6IFwiRXhwb3J0IG9mIHJvdXRlIGRhdGEgXCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6IFwiVmFsaWRhdGlvbiBvZiBjb21wbGV0ZSBkYXRhIHNwYWNlIC0gbGV2ZWwgMVwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiBcIlZhbGlkYXRpb24gb2YgY29tcGxldGUgZGF0YSBzcGFjZSAtIGxldmVsIDJcIixcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogXCJUcmFuc2ZlciB0byBjZW50cmFsIGRhdGFzcGFjZSAtIGxldmVsIDJcIixcbiAgICAgIEJVSUxEX0dSQVBIOiBcIkJ1aWxkIGdyYXBoXCIsXG4gICAgICBVTktOT1dOOiBcIlRoaXMgc3RlcCBpcyB1a25vd25cIixcbiAgICB9LFxuICAgIGZpbGVuYW1lOiB7XG4gICAgICB1bmRlZmluZWQ6IFwiVmFsaWRhdGlvblwiXG4gICAgfSxcbiAgICBzdGF0ZXM6IHtcbiAgICAgIE9LOiBcIkNvbXBsZXRlZFwiLFxuICAgICAgUEVORElORzogXCJQZW5kaW5nXCIsXG4gICAgICBTVEFSVEVEOiBcIlN0YXJ0ZWRcIixcbiAgICAgIEZBSUxFRDogXCJGYWlsZWRcIixcbiAgICAgIERVUExJQ0FURTogXCJGYWlsZWQgLSBkdXBsaWNhdGUgZGF0YSBzZXRcIixcbiAgICAgIElHTk9SRUQ6IFwiU2tpcHBlZFwiLFxuICAgICAgQ0FOQ0VMTEVEOiBcIkNhbmNlbGxlZFwiLFxuICAgICAgVElNRU9VVDogXCJUaW1lb3V0XCIsXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6ICdGYWlsZWQgdG8gdHJhbnNmZXIgZmlsZScsXG4gICAgICBGSUxFX0NMQVNTSUZJQ0FUSU9OOiAnRmFpbGVkIG9uIGZpbGUgY2xhc3NpZmljYXRpb24nLFxuICAgIH0sXG4gICAgZmlsdGVyQnV0dG9uOiB7XG4gICAgICBBTExfVElNRTogJ1VubGltaXRlZCcsXG4gICAgICBMQVNUXzEyX0hPVVJTOiAnTGFzdCAxMiBob3VycycsXG4gICAgICBMQVNUXzI0X0hPVVJTOiAnTGFzdCAyNCBob3VycycsXG4gICAgICBMQVNUX1dFRUs6ICdMYXN0IHdlZWsnLFxuICAgICAgTEFTVF9NT05USDogJ0xhc3QgbW9udGgnXG4gICAgfVxuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FjdGlvblRyYW5zbGF0aW9ucy5qcyIsImNvbnN0IGJ1dHRvbkNvbmZpZyA9IHtcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgaWQ6ICdMQVNUXzEyX0hPVVJTJ1xuICAgIH0sXG4gICAgeyBpZDogJ0xBU1RfMjRfSE9VUlMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdMQVNUX1dFRUsnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0xBU1RfTU9OVEgnXG4gICAgfSxcbiAgICB7IGlkOiAnQUxMX1RJTUUnLFxuICAgIH1cbiAgXVxufTtcblxuZXhwb3J0IGNvbnN0IGdldExhc3RWYWxpZERhdGUgPSBpZCA9PiB7XG4gIHN3aXRjaCAoaWQpIHtcbiAgICBjYXNlICdBTExfVElNRSc6IHJldHVybiBudWxsO1xuICAgIGNhc2UgJ0xBU1RfTU9OVEgnOiB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShub3cuc2V0TW9udGgobm93LmdldE1vbnRoKCkgLSAxKSk7XG4gICAgfVxuICAgIGNhc2UgJ0xBU1RfV0VFSyc6IHtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCkgLSA3KSk7XG4gICAgfVxuICAgIGNhc2UgJ0xBU1RfMTJfSE9VUlMnOiB7XG4gICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldEhvdXJzKG5vdy5nZXRIb3VycygpIC0gMTIpKTtcbiAgICB9XG4gICAgY2FzZSAnTEFTVF8yNF9IT1VSUyc6IHtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCktMSkpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBidXR0b25Db25maWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9idXR0b25Db25maWcuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIFwiZW5cIjoge1xuICAgIHBhZ2U6ICdQYWdlOiAnLFxuICAgIG5vX3N0YXR1czogJ05vIHJlc3VsdCB3aXRoIGFwcGxpZWQgZmlsdGVyJyxcbiAgICBzdGFydGVkOiAnU3RhcnRlZCcsXG4gICAgZW5kZWQ6ICdFbmRlZCcsXG4gICAgZHVyYXRpb246ICdEdXJhdGlvbjogJyxcbiAgICBzaG93X2FsbDogJ1Nob3cgYWxsJyxcbiAgICBzaG93X29ubHlfZmFpbGVkOiAnU2hvdyBvbmx5IGZhaWxlZCcsXG4gICAgc2hvd19vbmx5X3N1Y2Nlc3M6ICdTaG93IG9ubHkgc3VjY2Vzc2Z1bCcsXG4gICAgc2hvd19vbmx5X2NhbmNlbGxlZDogXCJTaG93IG9ubHkgY2FuY2VsbGVkXCIsXG4gIH0sXG4gIFwibmJcIjoge1xuICAgIHBhZ2U6ICdTaWRlOiAnLFxuICAgIG5vX3N0YXR1czogJ0luZ2VuIHJlc3VsdGF0ZXIgbWVkIHZhbGd0IGZpbHRlcicsXG4gICAgc3RhcnRlZDogJ0JlZ3ludGUnLFxuICAgIGVuZGVkOiAnQXZzbHV0dGV0JyxcbiAgICBkdXJhdGlvbjogJ1ZhcmlnaGV0JyxcbiAgICBzaG93X2FsbDogJ1ZpcyBhbGxlJyxcbiAgICBzaG93X29ubHlfZmFpbGVkOiAnVmlzIGt1biBmZWlsZXQnLFxuICAgIHNob3dfb25seV9zdWNjZXNzOiAnVmlzIGt1biB2ZWxseWtrZXQnLFxuICAgIHNob3dfb25seV9jYW5jZWxsZWQ6IFwiVmlzIGt1biBrYW5zZWxsZXJ0ZVwiLFxuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RyYW5zbGF0aW9ucy5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0XHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdFx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlciBcblx0XHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0XHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0XHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG5cdH0pLFxuXHRnZXRFbGVtZW50ID0gKGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW8gPSB7fTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHRcdH07XG5cdH0pKGZ1bmN0aW9uIChzdHlsZVRhcmdldCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0eWxlVGFyZ2V0KVxuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdLFxuXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vZml4VXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0SW50byA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cdGlmICghc3R5bGVUYXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHN0eWxlVGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIHN0eWxlVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0c3R5bGVUYXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZVRhcmdldC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHN0eWxlVGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YXR0YWNoVGFnQXR0cnMoc3R5bGVFbGVtZW50LCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhdHRhY2hUYWdBdHRycyhsaW5rRWxlbWVudCwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XG5cdHJldHVybiBsaW5rRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXR0YWNoVGFnQXR0cnMoZWxlbWVudCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0LyogSWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpe1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XG5cblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKVxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBUaW1lbGluZSBmcm9tICcuL1RpbWVsaW5lJ1xuZXhwb3J0IEhlYWRlclRpbWVsaW5lIGZyb20gJy4vSGVhZGVyVGltZWxpbmUnXG5leHBvcnQgRXZlbnREZXRhaWxzIGZyb20gJy4vRXZlbnREZXRhaWxzJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IENob3VldHRlTGluayA9ICh7IGFjdGlvbiwgaWQsIHJlZmVyZW50aWFsLCBjaGlsZHJlbiB9KSA9PiB7XG5cbiAgY29uc3QgYmFzZVVSTCA9IGAke3dpbmRvdy5jb25maWcuY2hvdWV0dGVCYXNlVXJsfXJlZmVyZW50aWFscy9gXG5cbiAgY29uc3QgYWN0aW9uTWFwID0ge1xuICAgIFwiaW1wb3J0ZXJcIjogYGltcG9ydHMvJHtpZH0vY29tcGxpYW5jZV9jaGVja2AsXG4gICAgXCJleHBvcnRlclwiOiBgZXhwb3J0cy8ke2lkfS9jb21wbGlhbmNlX2NoZWNrYCxcbiAgICBcInZhbGlkYXRvclwiOiBgY29tcGxpYW5jZV9jaGVja3MvJHtpZH0vcmVwb3J0YFxuICB9XG4gIGNvbnN0IFVSTCA9IGAke2Jhc2VVUkx9JHtyZWZlcmVudGlhbH0vJHthY3Rpb25NYXBbYWN0aW9uXX1gXG5cbiAgcmV0dXJuIChcbiAgICA8YSB0aXRsZT17VVJMfSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtVUkx9PntjaGlsZHJlbn08L2E+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hvdWV0dGVMaW5rXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0Nob3VldHRlTGluay5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2hvdWV0dGVMaW5rIGZyb20gJy4vQ2hvdWV0dGVMaW5rJztcblxuY2xhc3MgQ29udHJvbGxlZENob3VldHRlTGluayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGV2ZW50cywgaW5jbHVkZUxldmVsMiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBzdXBwb3J0ZWRBY3Rpb25zID0gWydJTVBPUlQnLCAnVkFMSURBVElPTl9MRVZFTF8xJ107XG5cbiAgICBsZXQgY2hvdWV0ZUFjdGlvbk1hcCA9IHtcbiAgICAgIElNUE9SVDogJ2ltcG9ydGVyJyxcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogJ3ZhbGlkYXRvcidcbiAgICB9O1xuXG4gICAgaWYgKGluY2x1ZGVMZXZlbDIpIHtcbiAgICAgIHN1cHBvcnRlZEFjdGlvbnMucHVzaCgnVkFMSURBVElPTl9MRVZFTF8yJyk7XG4gICAgICBzdXBwb3J0ZWRBY3Rpb25zLnB1c2goJ0VYUE9SVCcpO1xuICAgICAgc3VwcG9ydGVkQWN0aW9ucy5wdXNoKCdFWFBPUlRfTkVURVgnKTtcbiAgICAgIGNob3VldGVBY3Rpb25NYXBbJ1ZBTElEQVRJT05fTEVWRUxfMiddID0gJ3ZhbGlkYXRvcic7XG4gICAgICBjaG91ZXRlQWN0aW9uTWFwWydFWFBPUlQnXSA9ICdleHBvcnRlcic7XG4gICAgICBjaG91ZXRlQWN0aW9uTWFwWydFWFBPUlRfTkVURVgnXSA9ICdleHBvcnRlcic7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50cy5zdGF0ZXMgJiYgZXZlbnRzLnN0YXRlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGVuZFN0YXRlID0gZXZlbnRzLnN0YXRlc1tldmVudHMuc3RhdGVzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKHN1cHBvcnRlZEFjdGlvbnMuaW5kZXhPZihlbmRTdGF0ZS5hY3Rpb24pID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8Q2hvdWV0dGVMaW5rXG4gICAgICAgICAgICBhY3Rpb249e2Nob3VldGVBY3Rpb25NYXBbZW5kU3RhdGUuYWN0aW9uXX1cbiAgICAgICAgICAgIGlkPXtlbmRTdGF0ZS5jaG91ZXR0ZUpvYklkfVxuICAgICAgICAgICAgcmVmZXJlbnRpYWw9e2VuZFN0YXRlLnJlZmVyZW50aWFsfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvQ2hvdWV0dGVMaW5rPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiA8ZGl2PiB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIHsnICd9PC9kaXY+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZWRDaG91ZXR0ZUxpbms7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVkQ2hvdWV0dGVMaW5rLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEV2ZW50U3RlcHBlciBmcm9tICcuL0V2ZW50U3RlcHBlcic7XG5pbXBvcnQgJy4vRXZlbnREZXRhaWxzLmNzcyc7XG5pbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJy4vdHJhbnNsYXRpb25zJztcbmltcG9ydCBGaWx0ZXJCdXR0b25UcmF5IGZyb20gJy4vRmlsdGVyQnV0dG9uVHJheSc7XG5pbXBvcnQgeyBnZXRMYXN0VmFsaWREYXRlIH0gZnJvbSAnLi9idXR0b25Db25maWcnO1xuXG5jbGFzcyBFdmVudERldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlUGFnZUluZGV4OiAwLFxuICAgICAgZW5kU3RhdGVGaWx0ZXI6ICdBTEwnLFxuICAgICAgZGF0ZUZpbHRlcjogcHJvcHMuc2hvd0RhdGVGaWx0ZXJcbiAgICAgICAgPyAnTEFTVF8xMl9IT1VSUydcbiAgICAgICAgOiAnQUxMX1RJTUUnXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVBhZ2VDbGljayhlLCBwYWdlSW5kZXgpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlSW5kZXg6IHBhZ2VJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKGRhdGVGaWx0ZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGVGaWx0ZXI6IGRhdGVGaWx0ZXJcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGFTb3VyY2UsIGxvY2FsZSwgaW5jbHVkZUxldmVsMiwgc2hvd0RhdGVGaWx0ZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBhY3RpdmVQYWdlSW5kZXgsIGVuZFN0YXRlRmlsdGVyLCBkYXRlRmlsdGVyIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGZpbHRlcmVkUGFnZXMgPSBudWxsO1xuICAgIGNvbnN0IGxhc3REYXRlID0gZ2V0TGFzdFZhbGlkRGF0ZShkYXRlRmlsdGVyKTtcblxuICAgIGNvbnN0IGZpbHRlcmVkQnlEYXRlID0gKGRhdGFTb3VyY2UgfHwgW10pLmZpbHRlcihldmVudCA9PiB7XG4gICAgICBpZiAoIWxhc3REYXRlKSByZXR1cm4gZXZlbnQ7XG4gICAgICByZXR1cm4gbmV3IERhdGUoZXZlbnQuZmlyc3RFdmVudCkgPiBsYXN0RGF0ZTtcbiAgICB9KTtcblxuICAgIGlmIChcbiAgICAgIGVuZFN0YXRlRmlsdGVyID09PSAnRkFJTEVEJyB8fFxuICAgICAgZW5kU3RhdGVGaWx0ZXIgPT09ICdPSycgfHxcbiAgICAgIGVuZFN0YXRlRmlsdGVyID09PSAnQ0FOQ0VMTEVEJ1xuICAgICkge1xuICAgICAgZmlsdGVyZWRQYWdlcyA9IChmaWx0ZXJlZEJ5RGF0ZSB8fCBbXSlcbiAgICAgICAgLmZpbHRlcihldmVudCA9PiBldmVudC5lbmRTdGF0ZSA9PT0gZW5kU3RhdGVGaWx0ZXIpO1xuICAgIH1cblxuICAgIGxldCBwYWdpbmF0aW9uTWFwID0gZ2V0UGFnaW5hdGlvbk1hcChmaWx0ZXJlZFBhZ2VzIHx8IGZpbHRlcmVkQnlEYXRlKTtcblxuICAgIGNvbnN0IGZpbHRlcnMgPSAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogJzAuOWVtJyB9fVxuICAgICAgICAgIHZhbHVlPXtlbmRTdGF0ZUZpbHRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgZW5kU3RhdGVGaWx0ZXI6IGUudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgICBhY3RpdmVQYWdlSW5kZXg6IDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQUxMXCI+e3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfYWxsfTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPS1wiPnt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zaG93X29ubHlfc3VjY2Vzc308L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ0FOQ0VMTEVEXCI+XG4gICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19vbmx5X2NhbmNlbGxlZH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRkFJTEVEXCI+XG4gICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19vbmx5X2ZhaWxlZH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIHtzaG93RGF0ZUZpbHRlciAmJlxuICAgICAgICAgIDxGaWx0ZXJCdXR0b25UcmF5XG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDIwIH19XG4gICAgICAgICAgICBhY3RpdmVCdXR0b25JZD17dGhpcy5zdGF0ZS5kYXRlRmlsdGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgLz59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgY29uc3QgcGFnZSA9IHBhZ2luYXRpb25NYXBbYWN0aXZlUGFnZUluZGV4XTtcblxuICAgIGNvbnN0IHJlZnJlc2hCdXR0b24gPVxuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVSZWZyZXNoICYmXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxNSwgZmxvYXQ6ICdyaWdodCcsIGN1cnNvcjogJ3BvaW50ZXInIH19PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiAnc2NhbGUoMS41KScgfX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZVJlZnJlc2h9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj47XG5cbiAgICBpZiAocGFnZSAmJiBwYWdlLmxlbmd0aCAmJiBwYWdpbmF0aW9uTWFwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnbGVmdCcsIG1hcmdpbkJvdHRvbTogNSB9fT5cbiAgICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZWZyZXNoQnV0dG9ufVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1saW5rLXBhcmVudFwiPlxuICAgICAgICAgICAgPHNwYW4+e3RyYW5zbGF0aW9uc1tsb2NhbGVdLnBhZ2V9PC9zcGFuPlxuICAgICAgICAgICAge3BhZ2luYXRpb25NYXAubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9IGluZGV4ID09IGFjdGl2ZVBhZ2VJbmRleFxuICAgICAgICAgICAgICAgID8gJ3BhZ2UtbGluayBhY3RpdmUtbGluaydcbiAgICAgICAgICAgICAgICA6ICdwYWdlLWxpbmsgaW5hY3RpdmUtbGluayc7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNBY3RpdmV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlUGFnZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIGtleT17J2xpbmstJyArIGluZGV4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwYWdlLm1hcCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBldmVudEdyb3VwID0ge307XG5cbiAgICAgICAgICAgICAgbGlzdEl0ZW0uZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnRHcm91cFtldmVudC5hY3Rpb25dKSB7XG4gICAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0gPSB7fTtcbiAgICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXS5zdGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnRHcm91cFtldmVudC5hY3Rpb25dLnN0YXRlcy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0uZW5kU3RhdGUgPSBldmVudC5zdGF0ZTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9eydqb2JzdGF0dXMtJyArIGxpc3RJdGVtLmNob3VldHRlSm9iSWQgKyAnLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEV2ZW50U3RlcHBlclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlTGV2ZWwyPXtpbmNsdWRlTGV2ZWwyfVxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXsnZXZlbnQtZ3JvdXAtJyArIGxpc3RJdGVtLmNob3VldHRlSm9iSWQgKyAnLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzPXtldmVudEdyb3VwfVxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbT17bGlzdEl0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdsZWZ0JywgbWFyZ2luQm90dG9tOiA1IH19PlxuICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5ub19zdGF0dXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAgfX0+XG4gICAgICAgICAgICAgIHtyZWZyZXNoQnV0dG9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZ2V0UGFnaW5hdGlvbk1hcCA9IChzdGF0dXNMaXN0ID0gW10pID0+IHtcbiAgbGV0IHBhZ2luYXRpb25NYXAgPSBbXTtcblxuICBpZiAoc3RhdHVzTGlzdCAmJiBzdGF0dXNMaXN0Lmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gc3RhdHVzTGlzdC5sZW5ndGg7IGkgPCBqOyBpICs9IDEwKSB7XG4gICAgICBwYWdpbmF0aW9uTWFwLnB1c2goc3RhdHVzTGlzdC5zbGljZShpLCBpICsgMTApKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhZ2luYXRpb25NYXA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudERldGFpbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1kRXJyb3IgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2Vycm9yJztcbmltcG9ydCBNZERvbmUgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2NoZWNrLWNpcmNsZSc7XG5pbXBvcnQgTWRTY2hlZHVsZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvc2NoZWR1bGUnO1xuaW1wb3J0IEZhQ29nIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jb2cnO1xuaW1wb3J0IE1kSGVscE91dExpbmUgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2hlbHAtb3V0bGluZSc7XG5pbXBvcnQgTWRIb3VyIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9ob3VyZ2xhc3MtZW1wdHknO1xuXG5jbGFzcyBFdmVudFN0YXR1c0ljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG5cbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMuc3RhdGUpIHtcbiAgICAgIGNhc2UgJ09LJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWREb25lXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2dyZWVuJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ1BFTkRJTkcnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEhvdXJcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ1NUQVJURUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxGYUNvZ1xuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICcjMjI3NGI1Jywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0ZBSUxFRCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRXJyb3JcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0NBTkNFTExFRCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRXJyb3JcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnb3JhbmdlJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0RVUExJQ0FURSc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRXJyb3JcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ0lHTk9SRUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZFNjaGVkdWxlXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcblxuICAgICAgY2FzZSAnVElNRU9VVCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kU2NoZWR1bGVcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAncmVkJywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyLCBtYXJnaW5Ub3A6IC0yIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIDxNZEhlbHBPdXRMaW5lIHN0eWxlPXt7IGNvbG9yOiAnZ3JleScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiB9fSAvPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFN0YXR1c0ljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudFN0YXR1c0ljb24uanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjdGlvblRyYW5zbGF0aW9ucyBmcm9tICcuL2FjdGlvblRyYW5zbGF0aW9ucyc7XG5pbXBvcnQgRmFDaGV2cm9uRG93biBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1kb3duJztcbmltcG9ydCBGYUNoZXZyb25VcCBmcm9tICdyZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi11cCc7XG5pbXBvcnQgQ29udHJvbGxlZENob3VldHRlTGluayBmcm9tICcuL0NvbnRyb2xsZWRDaG91ZXR0ZUxpbmsnO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgRXZlbnRTdGF0dXNJY29uIGZyb20gJy4vRXZlbnRTdGF0dXNJY29uJztcblxuY2xhc3MgRXZlbnRTdGVwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV4cGFuZGVkOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGdyb3VwczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGxpc3RJdGVtOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfTtcblxuICBldmVudFN0YXRlcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ0ZJTEVfVFJBTlNGRVInLFxuICAgICAgJ0ZJTEVfQ0xBU1NJRklDQVRJT04nLFxuICAgICAgJ0ZJTEVfREVMSVZFUlknLFxuICAgICAgJ0lNUE9SVCcsXG4gICAgICAnVkFMSURBVElPTl9MRVZFTF8xJyxcbiAgICAgICdEQVRBU1BBQ0VfVFJBTlNGRVInLFxuICAgICAgJ1ZBTElEQVRJT05fTEVWRUxfMicsXG4gICAgICAnRVhQT1JUJyxcbiAgICAgICdCVUlMRF9HUkFQSCcsXG4gICAgICAnRVhQT1JUX05FVEVYJ1xuICAgIF07XG4gIH1cblxuICBhZGRVbmxpc3RlZFN0YXRlcyhncm91cHMpIHtcbiAgICBjb25zdCBzdGF0ZXMgPSB0aGlzLmV2ZW50U3RhdGVzKCk7XG5cbiAgICBsZXQgZ3JvdXBzV2l0aFVubGlzdGVkID0gT2JqZWN0LmFzc2lnbih7fSwgZ3JvdXBzKTtcblxuICAgIGxldCBmaXJzdFN0YXRlRm91bmQgPSBmYWxzZTtcblxuICAgIHN0YXRlcy5mb3JFYWNoKHN0YXRlID0+IHtcbiAgICAgIGlmICghZ3JvdXBzV2l0aFVubGlzdGVkW3N0YXRlXSkge1xuICAgICAgICBncm91cHNXaXRoVW5saXN0ZWRbc3RhdGVdID0ge1xuICAgICAgICAgIGVuZFN0YXRlOiAnSUdOT1JFRCcsXG4gICAgICAgICAgbWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQ6ICFmaXJzdFN0YXRlRm91bmRcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0U3RhdGVGb3VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgZmluYWxHcm91cHMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKGdyb3Vwc1dpdGhVbmxpc3RlZClcbiAgICAgIC5zb3J0KChrZXkxLCBrZXkyKSA9PiBzdGF0ZXMuaW5kZXhPZihrZXkxKSAtIHN0YXRlcy5pbmRleE9mKGtleTIpKVxuICAgICAgLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgZmluYWxHcm91cHNba2V5XSA9IGdyb3Vwc1dpdGhVbmxpc3RlZFtrZXldO1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGZpbmFsR3JvdXBzO1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlVmlzaWJpbGl0eSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5leHBhbmRlZFxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlQ29tYmluZWRTcGxpdChmb3JtYXR0ZWRHcm91cHMsIGdyb3VwcywgbmFtZSkge1xuICAgIGNvbnN0IGNvbWJpbmVkID0gW107XG4gICAgZm9yIChsZXQgaSBpbiBncm91cHMpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gZ3JvdXBzW2ldO1xuICAgICAgY29tYmluZWRbZ3JvdXBdID0gZm9ybWF0dGVkR3JvdXBzW2dyb3VwXTtcblxuICAgICAgaWYgKG5hbWUgIT09IGdyb3VwKSB7XG4gICAgICAgIGRlbGV0ZSBmb3JtYXR0ZWRHcm91cHNbZ3JvdXBdO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3JtYXR0ZWRHcm91cHNbbmFtZV0gPSBjb21iaW5lZDtcbiAgfVxuXG4gIGFnZ3JlZ2dhdGVGaWxlRXZlbnRzKGRhdGEpIHtcbiAgICBsZXQgZ3JvdXBzID0gey4uLmRhdGF9O1xuICAgIGxldCBlbmRTdGF0ZSA9IG51bGw7XG4gICAgbGV0IGVycm9yT24gPSBudWxsO1xuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCggZ3JvdXAgPT4ge1xuICAgICAgaWYgKGdyb3VwID09PSAnRklMRV9DTEFTU0lGSUNBVElPTicgfHwgZ3JvdXAgPT09ICdGSUxFX1RSQU5TRkVSJykge1xuICAgICAgICBlbmRTdGF0ZSA9IGdyb3Vwc1tncm91cF0uZW5kU3RhdGU7XG5cbiAgICAgICAgaWYgKGVuZFN0YXRlID09PSAnRkFJTEVEJyB8fCBlbmRTdGF0ZSA9PT0gJ0RVUExJQ0FURScpIHtcbiAgICAgICAgICBlcnJvck9uID0gZ3JvdXA7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGdyb3Vwc1tncm91cF1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChlbmRTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgZ3JvdXBzLkZJTEVfREVMSVZFUlkgPSB7XG4gICAgICAgIGVuZFN0YXRlOiBlcnJvck9uID8gJ0ZBSUxFRCcgOiBlbmRTdGF0ZSxcbiAgICAgICAgZXJyb3JPbixcbiAgICAgICAgbWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQ6IChlbmRTdGF0ZSA9PSAnSUdOT1JFRCcgJiYgIWVycm9yT24pXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBncm91cHM7XG4gIH1cblxuICBidWxsZXQoZm9ybWF0dGVkR3JvdXBzLCBncm91cHMsIGxvY2FsZSwgaW5jbHVkZUxldmVsMikge1xuICAgIGNvbnN0IGNvbHVtblN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgaGVpZ2h0OiA0NVxuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoZm9ybWF0dGVkR3JvdXBzKS5tYXAoKGdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IGNvbHVtbjtcbiAgICAgIGxldCBldmVudCA9IGZvcm1hdHRlZEdyb3Vwc1tncm91cF07XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xuICAgICAgICBjb2x1bW4gPSBPYmplY3Qua2V5cyhldmVudCkubWFwKChrZXksIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJFdmVudChcbiAgICAgICAgICAgIGV2ZW50W2tleV0sXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBsb2NhbGUsXG4gICAgICAgICAgICBpbmNsdWRlTGV2ZWwyXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW4gPSB0aGlzLnJlbmRlckV2ZW50KFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIGdyb3VwcyxcbiAgICAgICAgICBncm91cCxcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICBpbmRleCA9PT0gMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICBpbmNsdWRlTGV2ZWwyXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gPGRpdiBrZXk9eydidWxsZXQtJyArIGluZGV4fSBzdHlsZT17Y29sdW1uU3R5bGV9Pntjb2x1bW59PC9kaXY+O1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyRXZlbnQoXG4gICAgZXZlbnQsXG4gICAgZ3JvdXBzLFxuICAgIGdyb3VwLFxuICAgIGluZGV4LFxuICAgIGlzRmlyc3QsXG4gICAgY29sdW1uSW5kZXggPSAwLFxuICAgIGxvY2FsZSxcbiAgICBpbmNsdWRlTGV2ZWwyXG4gICkge1xuICAgIGNvbnN0IGdyb3VwU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAncm93J1xuICAgIH07XG5cbiAgICBjb25zdCBncm91cFRleHQgPSB7XG4gICAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICAgIG1hcmdpbkxlZnQ6IDVcbiAgICB9O1xuXG4gICAgY29uc3QgbGlua1N0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIGJvcmRlckNvbG9yOiAncmdiKDE4OSwgMTg5LCAxODkpJyxcbiAgICAgIG1hcmdpbkxlZnQ6IC02LFxuICAgICAgYm9yZGVyVG9wU3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJUb3BXaWR0aDogMSxcbiAgICAgIHdpZHRoOiAzMCxcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXG4gICAgICBtYXJnaW46IDgsXG4gICAgICB0cmFuc2Zvcm06IGNvbHVtbkluZGV4ID4gMCAmJiAndHJhbnNsYXRlWSgtMC41ZW0pIHJvdGF0ZSgyNWRlZykgJ1xuICAgIH07XG5cbiAgICBpZiAoIUFjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLnN0YXRlc1tldmVudC5lbmRTdGF0ZV0pIHJldHVybiBudWxsO1xuXG4gICAgbGV0IHRvb2xUaXBUZXh0ID0gQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uc3RhdGVzW2V2ZW50LmVuZFN0YXRlXTtcblxuICAgIGlmIChldmVudC5zdGF0ZXMgJiYgZXZlbnQuc3RhdGVzW2dyb3Vwc1tncm91cF0uc3RhdGVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICB0b29sVGlwVGV4dCArPSAnICcgKyBldmVudC5zdGF0ZXNbZXZlbnQuc3RhdGVzLmxlbmd0aCAtIDFdLmRhdGU7XG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmVycm9yT24pIHtcbiAgICAgIHRvb2xUaXBUZXh0ID0gQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uZXJyb3JNZXNzYWdlW2V2ZW50LmVycm9yT25dO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtncm91cFN0eWxlfSBrZXk9eydncm91cC0nICsgZ3JvdXAgKyBpbmRleH0+XG4gICAgICAgIHshaXNGaXJzdCAmJiA8ZGl2IHN0eWxlPXtsaW5rU3R5bGV9IC8+fVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgdGl0bGU9e3Rvb2xUaXBUZXh0fVxuICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IGV2ZW50Lm1pc3NpbmdCZWZvcmVTdGFydFN0YXJ0ID8gMC4yIDogMSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEV2ZW50U3RhdHVzSWNvbiBzdGF0ZT17ZXZlbnQuZW5kU3RhdGV9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uZ3JvdXBUZXh0LFxuICAgICAgICAgICAgb3BhY2l0eTogZXZlbnQubWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQgPyAwLjIgOiAxXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb250cm9sbGVkQ2hvdWV0dGVMaW5rIGluY2x1ZGVMZXZlbDI9e2luY2x1ZGVMZXZlbDJ9IGV2ZW50cz17ZXZlbnR9PlxuICAgICAgICAgICAge0FjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLnRleHRbZ3JvdXBdfVxuICAgICAgICAgIDwvQ29udHJvbGxlZENob3VldHRlTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0ZXBwZXJzdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiAxMFxuICAgIH07XG5cbiAgICBjb25zdCB7IGdyb3VwcywgbGlzdEl0ZW0sIGxvY2FsZSwgaW5jbHVkZUxldmVsMiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGZvcm1hdHRlZEdyb3VwcyA9IHRoaXMuYWRkVW5saXN0ZWRTdGF0ZXMoZ3JvdXBzKTtcbiAgICBmb3JtYXR0ZWRHcm91cHMgPSB0aGlzLmFnZ3JlZ2dhdGVGaWxlRXZlbnRzKGZvcm1hdHRlZEdyb3Vwcyk7XG4gICAgdGhpcy5jcmVhdGVDb21iaW5lZFNwbGl0KGZvcm1hdHRlZEdyb3VwcywgWydFWFBPUlRfTkVURVgnLCAnRVhQT1JUJ10sICdFWFBPUlQnKTtcbiAgICBjb25zdCBidWxsZXRzID0gdGhpcy5idWxsZXQoZm9ybWF0dGVkR3JvdXBzLCBncm91cHMsIGxvY2FsZSwgaW5jbHVkZUxldmVsMik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9eydldmVudCcgKyBsaXN0SXRlbS5jaG91ZXR0ZUpvYklkfVxuICAgICAgICBzdHlsZT17eyBtYXJnaW46ICdhdXRvJywgd2lkdGg6ICc5OCUnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbkxlZnQ6IC0xNSB9fT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICB0aXRsZT17dHJhbnNsYXRpb25zW2xvY2FsZV0uZHVyYXRpb24gKyBsaXN0SXRlbS5kdXJhdGlvbn1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgIGNvbG9yOiAnI2U1OTQwMCcsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogLTgsXG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAyMFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bGlzdEl0ZW0uc3RhcnRlZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7bGlzdEl0ZW0ucHJvdmlkZXIgJiZcbiAgICAgICAgICAgIGxpc3RJdGVtLnByb3ZpZGVyLm5hbWUgJiZcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZm9udFNpemU6ICcwLjhlbScsIGZvbnRXZWlnaHQ6IDYwMCwgZmxleDogMSB9fT5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLnByb3ZpZGVyLm5hbWV9XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzAuOWVtJywgZm9udFdlaWdodDogNjAwLCBmbGV4OiAyIH19PlxuICAgICAgICAgICAge2xpc3RJdGVtLmZpbGVOYW1lIHx8IEFjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLmZpbGVuYW1lLnVuZGVmaW5lZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0ZXBwZXJzdHlsZX0+XG4gICAgICAgICAge2J1bGxldHN9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBtYXJnaW5SaWdodDogMjAsIG1hcmdpblRvcDogLTUwIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWV4cGFuZGVkID8gPEZhQ2hldnJvbkRvd24gLz4gOiA8RmFDaGV2cm9uVXAgLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZXhwYW5kZWQgJiZcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDgsXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEwLFxuICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zdGFydGVkfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbS5maXJzdEV2ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uZW5kZWR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmxhc3RFdmVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLmR1cmF0aW9ufVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbS5kdXJhdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2Pn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTdGVwcGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRTdGVwcGVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgRmlsdGVyQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc3QgeyBoYW5kbGVDbGljaywgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKGhhbmRsZUNsaWNrICYmIHR5cGVvZiBoYW5kbGVDbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaGFuZGxlQ2xpY2soaWQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxhYmVsLCBhY3RpdmUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWN0aXZlU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiAnIzIxOTZGMycsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICMxNTU5OWQnLFxuICAgIH07XG4gICAgY29uc3QgaW5hY3RpdmVTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgIGNvbG9yOiAnIzAwMCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI2Q4ZDhkOCcsXG4gICAgfTtcbiAgICBjb25zdCBkZWZhdWx0U3R5bGUgPSB7XG4gICAgICBwYWRkaW5nOiAnMC4yZW0gMC40ZW0nLFxuICAgICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUlJyxcbiAgICAgIG1pbldpZHRoOiA0MCxcbiAgICAgIG1hcmdpbkxlZnQ6IDEwXG4gICAgfTtcblxuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIGRlZmF1bHRTdHlsZSxcbiAgICAgIGFjdGl2ZSA/IGFjdGl2ZVN0eWxlIDogaW5hY3RpdmVTdHlsZVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBzdHlsZT17YnV0dG9uU3R5bGV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9pbnRlckV2ZW50czogJ25vbmUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCdXR0b24uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbHRlckJ1dHRvbiBmcm9tICcuL0ZpbHRlckJ1dHRvbic7XG5pbXBvcnQgYnV0dG9uQ29uZmlnIGZyb20gJy4vYnV0dG9uQ29uZmlnJztcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi9hY3Rpb25UcmFuc2xhdGlvbnMnO1xuXG5jbGFzcyBGaWx0ZXJCdXR0b25UcmF5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2NhbGUsIGFjdGl2ZUJ1dHRvbklkLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAge2J1dHRvbkNvbmZpZy5maWVsZHMubWFwKGZpZWxkID0+XG4gICAgICAgICAgPEZpbHRlckJ1dHRvblxuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVCdXR0b25JZCA9PT0gZmllbGQuaWR9XG4gICAgICAgICAgICBpZD17ZmllbGQuaWR9XG4gICAgICAgICAgICBoYW5kbGVDbGljaz17KCkgPT4geyBvbkNoYW5nZShmaWVsZC5pZCkgfX1cbiAgICAgICAgICAgIGtleT17J2ZpbHRlci1idXR0b24tJyArIGZpZWxkLmlkfVxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0aW9uc1tsb2NhbGVdLmZpbHRlckJ1dHRvbltmaWVsZC5pZF19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQnV0dG9uVHJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvblRyYXkuanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGRpbWVuc2lvbiB9IGZyb20gJy4uL3N0eWxlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXJUaW1lbGluZS5jc3MnO1xuXG5jbGFzcyBIZWFkZXJUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaG92ZXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWxpZERheXNPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWxpZEZyb21EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZWZmZWN0aXZlUGVyaW9kczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZVRvb2xUaXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93VG9vbHRpcDogIXRoaXMuc3RhdGUuc2hvd1Rvb2x0aXBcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVmZmVjdGl2ZVBlcmlvZHMsIHZhbGlkRGF5c09mZnNldCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRpbWVsaW5lU3R5bGUgPSB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgaGVpZ2h0OiAnMThweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICB3aWR0aDogZGltZW5zaW9uLnRpbWVMaW5lV2lkdGggKyAnJScsXG4gICAgICBtYXJnaW46ICcxMHB4IGF1dG8nLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGZvbnRTaXplOiAnMCUnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9O1xuXG4gICAgbGV0IHRpbWVsaW5lV3JhcHBlciA9IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW5Cb3R0b206IDJcbiAgICB9O1xuXG4gICAgbGV0IHRpbWVCbG9jayA9IHtcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lU3VjY2VzcyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBmb250U2l6ZTogJzAuOHJlbScsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9O1xuXG4gICAgY29uc3QgdGl0bGVUZXh0ID0ge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEwcHgsIDIwcHgpJyxcbiAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxuICAgICAgY29sb3I6IGVmZmVjdGl2ZVBlcmlvZHMubGVuZ3RoID8gY29sb3IuZWZmZWN0aXZlIDogY29sb3IuZmFpbCxcbiAgICAgIHpJbmRleDogOTlcbiAgICB9O1xuXG4gICAgY29uc3QgdG9vbFRpcFN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAxcycsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICAgIGZvbnRTaXplOiAnMC44ZW0nLFxuICAgICAgY29sb3I6IGNvbG9yLmZvbnQudG9vbHRpcCxcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRvb2x0aXAsXG4gICAgICBwYWRkaW5nOiAxMCxcbiAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICB6SW5kZXg6IDk5XG4gICAgfTtcblxuICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICB0ZXh0U2hhZG93OiAnMHB4IDBweCA1cHggYmxhY2snLFxuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIGhlaWdodDogMTgsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcydcbiAgICB9O1xuXG4gICAgbGV0IGhyU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgaGVpZ2h0OiAnMThweCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG1hcmdpbkxlZnQ6IDMzICsgdmFsaWREYXlzT2Zmc2V0ICsgJyUnXG4gICAgfTtcblxuICAgIGxldCBob3ZlclRleHQgPSBlZmZlY3RpdmVQZXJpb2RzLmxlbmd0aFxuICAgICAgPyB0aGlzLnByb3BzLmhvdmVyVGV4dFxuICAgICAgOiAnVWd5bGRpZyBsaW5qZS4gTWFuZ2xlciBkYXRhJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVdyYXBwZXJ9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3RpdGxlVGV4dH1cbiAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5oYW5kbGVUb2dnbGVUb29sVGlwLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZVRvZ2dsZVRvb2xUaXAuYmluZCh0aGlzKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxpbmV9XG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1Rvb2x0aXAgJiZcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Rvb2xUaXBTdHlsZX0+IHtob3ZlclRleHR9IDwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmV9IHN0eWxlPXt0aW1lbGluZVN0eWxlfT5cbiAgICAgICAgICA8ZGl2IGtleT17J3RpbWVsaW5lLWhlYWRlci13cmFwcGVyJyArIHRoaXMucHJvcHMuaW5kZXh9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17aHJTdHlsZX0gLz5cbiAgICAgICAgICAgIHtlZmZlY3RpdmVQZXJpb2RzLm1hcCgoZWZmZWN0aXZlUGVyaW9kLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgcGVyaW9kQmxvY2sgPSB7IC4uLnRpbWVCbG9jayB9O1xuICAgICAgICAgICAgICBwZXJpb2RCbG9jay53aWR0aCA9XG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gLVxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gK1xuICAgICAgICAgICAgICAgICclJztcblxuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID1cbiAgICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJSc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVyaW9kQmxvY2subWFyZ2luTGVmdCA9XG4gICAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uIC1cbiAgICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZHNbaW5kZXggLSAxXS50aW1lbGluZUVuZFBvc2l0aW9uICtcbiAgICAgICAgICAgICAgICAgICclJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBpdGVtVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZC50bztcblxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA+IDAgJiZcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QuZnJvbS5sb2NhbGVDb21wYXJlKGVmZmVjdGl2ZVBlcmlvZC50bykgIT09IDBcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaXRlbVRleHQgPSBlZmZlY3RpdmVQZXJpb2QuZnJvbSArICcgLSAnICsgZWZmZWN0aXZlUGVyaW9kLnRvO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17J3RpbWVsaW5lLWhlYWRlci1ibG9jaycgKyBpbmRleH0gc3R5bGU9e3BlcmlvZEJsb2NrfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2QtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW1UZXh0fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1UZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUaW1lbGluZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBkaW1lbnNpb24gfSBmcm9tICcuLi9zdHlsZXMnO1xuXG5jb25zdCBwZXJpb2QgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBmcm9tOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpbWVsaW5lU3RhcnRQb3NpdGlvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lbGluZUVuZFBvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn0pO1xuXG5jb25zdCB0aW1ldGFibGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBvYmplY3RJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwZXJpb2RzOiBQcm9wVHlwZXMuYXJyYXlPZihwZXJpb2QpLmlzUmVxdWlyZWRcbn0pLmlzUmVxdWlyZWQ7XG5cbmNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aW1ldGFibGVzOiBQcm9wVHlwZXMuYXJyYXlPZih0aW1ldGFibGUpLmlzUmVxdWlyZWQsXG4gICAgaXNMYXN0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRGF5c09mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGltZXRhYmxlcywgdmFsaWREYXlzT2Zmc2V0LCBpc0xhc3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lQmFja2dyb3VuZCxcbiAgICAgIHdpZHRoOiBkaW1lbnNpb24udGltZUxpbmVXaWR0aCArICclJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9O1xuXG4gICAgY29uc3QgdGltZWxpbmVXcmFwcGVyID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHBhZGRpbmdCb3R0b206IGlzTGFzdCA/IDAgOiAxMFxuICAgIH07XG5cbiAgICBsZXQgdGltZUJsb2NrID0ge1xuICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVCbG9ja0JhY2tncm91bmQsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgfTtcblxuICAgIGxldCB0ZXh0U3R5bGUgPSB7XG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIG92ZXJmbG93OiAndmlzYmxlJyxcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDVweCBibGFjaycsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbWFyZ2luOiAnYXV0byAxMHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICBmb250U2l6ZTogJzAuN2VtJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgIH07XG5cbiAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXG4gICAgICB3aWR0aDogJzFweCcsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfTtcblxuICAgIGhyU3R5bGUubWFyZ2luTGVmdCA9IDMzICsgdmFsaWREYXlzT2Zmc2V0ICsgJyUnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lV3JhcHBlcn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e2hyU3R5bGV9IC8+XG4gICAgICAgICAge3RpbWV0YWJsZXMubWFwKHRpbWV0YWJsZSA9PlxuICAgICAgICAgICAgdGltZXRhYmxlLnBlcmlvZHMubWFwKChwZXJpb2QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGltZXRhYmxlLm9iamVjdElkO1xuICAgICAgICAgICAgICBjb25zdCBob3ZlciA9IGAke3RpdGxlfSBcXG4ocGVyaW9kOiAke3BlcmlvZC5mcm9tfSAtPiAke3BlcmlvZC50b30pYDtcbiAgICAgICAgICAgICAgbGV0IHBlcmlvZEJsb2NrID0geyAuLi50aW1lQmxvY2sgfTtcbiAgICAgICAgICAgICAgcGVyaW9kQmxvY2sud2lkdGggPVxuICAgICAgICAgICAgICAgIHBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC0gcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJztcbiAgICAgICAgICAgICAgcGVyaW9kQmxvY2subWFyZ2luTGVmdCA9IHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJSc7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAga2V5PXsndGltZXRhYmxlLXBlcmlvZC0nICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtwZXJpb2RCbG9ja31cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2hvdmVyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0U3R5bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoLy9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9ub3Rvc2Fuc2thbm5hZGEuY3NzKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucyBLYW5uYWRhJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMxOTE5MTk7XFxufVxcblxcbnAsaDEsaDIsaDMsaDQsaDUsIHNwYW4ge1xcbiAgICBjb2xvcjogIzE5MTkxOTtcXG59XFxuXFxuLl8ycE9aVDZPRXdSMnZfY2k3Mlc0a29COmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubVNHS1ZsbWNXRVNieEVIcjdCYXoyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5fMWg5QUctVld4X1U0MFR4VkUwMTU1SyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5fMWpOLU43eWZTS1loMUtVenJhczRsWiB7XFxuICAgIGNvbG9yOiAjMEQzQzYxO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLl8yMXA1NVZNX2U3NV8yaUJpclcxTWtmIHtcXG4gICAgY29sb3I6ICMyMTk2RjM7XFxufVxcblxcblxcbmEge1xcbiAgICBjb2xvcjogIzIxOTZGMztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyLCBhOmZvY3VzIHtcXG4gICAgY29sb3I6ICMxOTc2RDI7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBlcmlvZC1ibG9ja1wiOiBcIl8ycE9aVDZPRXdSMnZfY2k3Mlc0a29CXCIsXG5cdFwicGFnZS1saW5rLXBhcmVudFwiOiBcIm1TR0tWbG1jV0VTYnhFSHI3QmF6MlwiLFxuXHRcInBhZ2UtbGlua1wiOiBcIl8xaDlBRy1WV3hfVTQwVHhWRTAxNTVLXCIsXG5cdFwiYWN0aXZlLWxpbmtcIjogXCJfMWpOLU43eWZTS1loMUtVenJhczRsWlwiLFxuXHRcImluYWN0aXZlLWxpbmtcIjogXCJfMjFwNTVWTV9lNzVfMmlCaXJXMU1rZlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP21vZHVsZXM9dHJ1ZSEuL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLl8ydFUtZjg2Zl80MmcxcFZWUVpYRlhDIHtcXG4gIGJhY2tncm91bmQ6ICNCOTE5MTk7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgI0I5MTkxOSksIGNvbG9yLXN0b3AoNjYlLCAjQjkxOTE5KSwgY29sb3Itc3RvcCg2NiUsICNmNmY2ZjYpLCBjb2xvci1zdG9wKDEwMCUsICNmNmY2ZjYpKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI0I5MTkxOSksIGNvbG9yLXN0b3AoNjYlLCAjZjZmNmY2KSwgY29sb3Itc3RvcCgxMDAlLCAjZjZmNmY2KSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRpbWVsaW5lXCI6IFwiXzJ0VS1mODZmXzQyZzFwVlZRWlhGWENcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9tb2R1bGVzPXRydWUhLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9maXhVcmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vRXZlbnREZXRhaWxzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9FdmVudERldGFpbHMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9FdmVudERldGFpbHMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9IZWFkZXJUaW1lbGluZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vSGVhZGVyVGltZWxpbmUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9IZWFkZXJUaW1lbGluZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9