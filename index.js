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
  },
  "fr": {
    text: {
      FILE_TRANSFER: "Transfert de fichiers",
      FILE_CLASSIFICATION: "Classification de fichiers",
      FILE_DELIVERY: 'Import de fichier',
      IMPORT: "Import",
      EXPORT: "Export GTFS",
      EXPORT_NETEX: "Export Netex",
      VALIDATION_LEVEL_1: "Validation niveau 1",
      DATASPACE_TRANSFER: "Transfert vers l'espace de données central",
      VALIDATION_LEVEL_2: "Validation niveau 2",
      BUILD_GRAPH: "Construction du graphe",
      UNKNOWN: "Etape inconnue"
    },
    title: {
      FILE_TRANSFER: "Envoyer un fichier local vers le serveur distant",
      IMPORT: "Validation de fichier et import dans l'espace de données local - niveau 1",
      EXPORT: "Export des données topologiques ",
      VALIDATION_LEVEL_1: "Validation de l'espace de données local - niveau 1",
      VALIDATION_LEVEL_2: "Validation de l'espace de données central - niveau 2",
      DATASPACE_TRANSFER: "Transfer vers l'espace de données central - niveau 2",
      BUILD_GRAPH: "Construction du graphe",
      UNKNOWN: "Etape inconnue"
    },
    filename: {
      undefined: "Validation"
    },
    states: {
      OK: "Terminé",
      PENDING: "En attente",
      STARTED: "Démarré",
      FAILED: "Echoué",
      DUPLICATE: "Echoué - données à insérer en doucle",
      IGNORED: "Ignoré",
      CANCELLED: "Anuulé",
      TIMEOUT: "Erreur - temps écoulé"
    },
    errorMessage: {
      FILE_TRANSFER: 'Echec lors du transfert du fichier',
      FILE_CLASSIFICATION: 'Echec lors de la classification de fichiers'
    },
    filterButton: {
      ALL_TIME: 'Tous',
      LAST_12_HOURS: 'Les dernières 12 heures',
      LAST_24_HOURS: 'Les dernières 24 heures',
      LAST_WEEK: 'La semaine dernière',
      LAST_MONTH: 'Le mois dernier.'
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
  },
  "fr": {
    page: 'Page: ',
    no_status: 'Aucun résultat avec ces critères',
    started: 'Démarré',
    ended: 'Terminé',
    duration: 'Durée: ',
    show_all: 'Montrer tous',
    show_only_failed: 'Montrer seulement les échecs',
    show_only_success: 'Monter seulement les succès',
    show_only_cancelled: "Montrer seulement les annulés"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNWRjMWQxN2RkMjYwYzhkZmEwZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjdGlvblRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhbnNsYXRpb25zLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Nob3VldHRlTGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVkQ2hvdWV0dGVMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudFN0YXR1c0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRTdGVwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCdXR0b25UcmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzIiwid2VicGFjazovLy8uL34vZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLXVwLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2NoZWNrLWNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9oZWxwLW91dGxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQvaG91cmdsYXNzLWVtcHR5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL3NjaGVkdWxlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2ZpeFVybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzcz81Y2MxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmNzcz8yNzdhIl0sIm5hbWVzIjpbImNvbG9yRGVmIiwiYmxhY2siLCJ3aGl0ZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImJpZ2JsdWUiLCJkYXJrQmx1ZSIsImRhcmtHcmV5IiwiZ3JleSIsImxpZ2h0R3JleSIsImVudHVyIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImNvbG9yIiwiZm9udCIsImludmVyc2UiLCJ0aXRsZSIsImluZm8xIiwiaW5mbzIiLCJpbmZvMyIsIndhcm4iLCJkaXNhYmxlZCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiZWZmZWN0aXZlIiwiZmFpbCIsIm1vZGFsIiwiYmFja2Ryb3AiLCJ0YWJBY3RpdmUiLCJ0aW1lTGluZUJhY2tncm91bmQiLCJ0aW1lTGluZUJsb2NrQmFja2dyb3VuZCIsInRpbWVMaW5lQm9yZGVyIiwidGltZUxpbmVTdWNjZXNzIiwidGltZUxpbmVGYWlsIiwidGFibGVIZWFkZXIiLCJ0YWJsZVJvdyIsInRhYmxlSW5mbyIsInZhbGlkIiwiaW52YWxpZCIsImV4cGlyaW5nIiwiaGlnaGxpZ2h0IiwiZGltZW5zaW9uIiwidGltZUxpbmVXaWR0aCIsInN0eWxlcyIsInRleHQiLCJGSUxFX1RSQU5TRkVSIiwiRklMRV9DTEFTU0lGSUNBVElPTiIsIkZJTEVfREVMSVZFUlkiLCJJTVBPUlQiLCJFWFBPUlQiLCJFWFBPUlRfTkVURVgiLCJWQUxJREFUSU9OX0xFVkVMXzEiLCJEQVRBU1BBQ0VfVFJBTlNGRVIiLCJWQUxJREFUSU9OX0xFVkVMXzIiLCJCVUlMRF9HUkFQSCIsIlVOS05PV04iLCJmaWxlbmFtZSIsInVuZGVmaW5lZCIsInN0YXRlcyIsIk9LIiwiUEVORElORyIsIlNUQVJURUQiLCJGQUlMRUQiLCJEVVBMSUNBVEUiLCJJR05PUkVEIiwiQ0FOQ0VMTEVEIiwiVElNRU9VVCIsImVycm9yTWVzc2FnZSIsImZpbHRlckJ1dHRvbiIsIkFMTF9USU1FIiwiTEFTVF8xMl9IT1VSUyIsIkxBU1RfMjRfSE9VUlMiLCJMQVNUX1dFRUsiLCJMQVNUX01PTlRIIiwiYnV0dG9uQ29uZmlnIiwiZmllbGRzIiwiaWQiLCJnZXRMYXN0VmFsaWREYXRlIiwibm93IiwiRGF0ZSIsInNldE1vbnRoIiwiZ2V0TW9udGgiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInNldEhvdXJzIiwiZ2V0SG91cnMiLCJwYWdlIiwibm9fc3RhdHVzIiwic3RhcnRlZCIsImVuZGVkIiwiZHVyYXRpb24iLCJzaG93X2FsbCIsInNob3dfb25seV9mYWlsZWQiLCJzaG93X29ubHlfc3VjY2VzcyIsInNob3dfb25seV9jYW5jZWxsZWQiLCJUaW1lbGluZSIsIkhlYWRlclRpbWVsaW5lIiwiRXZlbnREZXRhaWxzIiwiQ2hvdWV0dGVMaW5rIiwiYWN0aW9uIiwicmVmZXJlbnRpYWwiLCJjaGlsZHJlbiIsImJhc2VVUkwiLCJ3aW5kb3ciLCJjb25maWciLCJjaG91ZXR0ZUJhc2VVcmwiLCJhY3Rpb25NYXAiLCJVUkwiLCJDb250cm9sbGVkQ2hvdWV0dGVMaW5rIiwicHJvcHMiLCJldmVudHMiLCJpbmNsdWRlTGV2ZWwyIiwic3VwcG9ydGVkQWN0aW9ucyIsImNob3VldGVBY3Rpb25NYXAiLCJwdXNoIiwibGVuZ3RoIiwiZW5kU3RhdGUiLCJpbmRleE9mIiwiY2hvdWV0dGVKb2JJZCIsIkNvbXBvbmVudCIsIkZhRnJlc2giLCJyZXF1aXJlIiwic3RhdGUiLCJhY3RpdmVQYWdlSW5kZXgiLCJlbmRTdGF0ZUZpbHRlciIsImRhdGVGaWx0ZXIiLCJzaG93RGF0ZUZpbHRlciIsImUiLCJwYWdlSW5kZXgiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZGF0YVNvdXJjZSIsImxvY2FsZSIsImZpbHRlcmVkUGFnZXMiLCJsYXN0RGF0ZSIsImZpbHRlcmVkQnlEYXRlIiwiZmlsdGVyIiwiZXZlbnQiLCJmaXJzdEV2ZW50IiwicGFnaW5hdGlvbk1hcCIsImdldFBhZ2luYXRpb25NYXAiLCJmaWx0ZXJzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmb250U2l6ZSIsInRhcmdldCIsInZhbHVlIiwibWFyZ2luTGVmdCIsImhhbmRsZUZpbHRlckNoYW5nZSIsImJpbmQiLCJyZWZyZXNoQnV0dG9uIiwiaGFuZGxlUmVmcmVzaCIsIm1hcmdpblJpZ2h0IiwiZmxvYXQiLCJjdXJzb3IiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImluZGV4IiwiaXNBY3RpdmUiLCJoYW5kbGVQYWdlQ2xpY2siLCJsaXN0SXRlbSIsImV2ZW50R3JvdXAiLCJmb3JFYWNoIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImZvbnRXZWlnaHQiLCJzdGF0dXNMaXN0IiwiaSIsImoiLCJzbGljZSIsIkV2ZW50U3RhdHVzSWNvbiIsImhlaWdodCIsIkV2ZW50U3RlcHBlciIsImV4cGFuZGVkIiwiZ3JvdXBzIiwiZXZlbnRTdGF0ZXMiLCJncm91cHNXaXRoVW5saXN0ZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJmaXJzdFN0YXRlRm91bmQiLCJtaXNzaW5nQmVmb3JlU3RhcnRTdGFydCIsImZpbmFsR3JvdXBzIiwia2V5cyIsInNvcnQiLCJrZXkxIiwia2V5MiIsImtleSIsImZvcm1hdHRlZEdyb3VwcyIsIm5hbWUiLCJjb21iaW5lZCIsImdyb3VwIiwiZGF0YSIsImVycm9yT24iLCJjb2x1bW5TdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImNvbHVtbiIsIkFycmF5IiwiaXNBcnJheSIsInJlbmRlckV2ZW50IiwiaXNGaXJzdCIsImNvbHVtbkluZGV4IiwiZ3JvdXBTdHlsZSIsImdyb3VwVGV4dCIsImxpbmtTdHlsZSIsImJvcmRlckNvbG9yIiwiYm9yZGVyVG9wU3R5bGUiLCJib3JkZXJUb3BXaWR0aCIsImJvcmRlclJhZGl1cyIsIm1hcmdpbiIsInRvb2xUaXBUZXh0IiwiZGF0ZSIsIm9wYWNpdHkiLCJzdGVwcGVyc3R5bGUiLCJhbGlnbkNvbnRlbnQiLCJhZGRVbmxpc3RlZFN0YXRlcyIsImFnZ3JlZ2dhdGVGaWxlRXZlbnRzIiwiY3JlYXRlQ29tYmluZWRTcGxpdCIsImJ1bGxldHMiLCJidWxsZXQiLCJoYW5kbGVUb2dnbGVWaXNpYmlsaXR5IiwicHJvdmlkZXIiLCJmbGV4IiwiZmlsZU5hbWUiLCJzdG9wUHJvcGFnYXRpb24iLCJsYXN0RXZlbnQiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiRmlsdGVyQnV0dG9uIiwiaGFuZGxlQ2xpY2siLCJsYWJlbCIsImFjdGl2ZSIsImFjdGl2ZVN0eWxlIiwiaW5hY3RpdmVTdHlsZSIsImRlZmF1bHRTdHlsZSIsIm1pbldpZHRoIiwiYnV0dG9uU3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiRmlsdGVyQnV0dG9uVHJheSIsImFjdGl2ZUJ1dHRvbklkIiwib25DaGFuZ2UiLCJzdHlsZSIsImZpZWxkIiwic2hvd1Rvb2x0aXAiLCJlZmZlY3RpdmVQZXJpb2RzIiwidmFsaWREYXlzT2Zmc2V0IiwidGltZWxpbmVTdHlsZSIsImxpbmVIZWlnaHQiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwidGltZWxpbmVXcmFwcGVyIiwidGltZUJsb2NrIiwidGl0bGVUZXh0IiwiekluZGV4IiwidG9vbFRpcFN0eWxlIiwidHJhbnNpdGlvbiIsInRleHRTdHlsZSIsInRleHRTaGFkb3ciLCJ3aGl0ZVNwYWNlIiwidGV4dE92ZXJmbG93IiwiaHJTdHlsZSIsImhvdmVyVGV4dCIsImhhbmRsZVRvZ2dsZVRvb2xUaXAiLCJsaW5lIiwidGltZWxpbmUiLCJlZmZlY3RpdmVQZXJpb2QiLCJwZXJpb2RCbG9jayIsInRpbWVsaW5lRW5kUG9zaXRpb24iLCJ0aW1lbGluZVN0YXJ0UG9zaXRpb24iLCJpdGVtVGV4dCIsInRvIiwiZnJvbSIsImxvY2FsZUNvbXBhcmUiLCJ2ZXJ0aWNhbEFsaWduIiwic3RyaW5nIiwibnVtYmVyIiwidmFsaWRGcm9tRGF0ZSIsImFycmF5IiwicGVyaW9kIiwic2hhcGUiLCJ0aW1ldGFibGUiLCJvYmplY3RJZCIsInBlcmlvZHMiLCJhcnJheU9mIiwidGltZXRhYmxlcyIsImlzTGFzdCIsIm92ZXJmbG93WSIsInBhZGRpbmdCb3R0b20iLCJob3ZlciIsImJvb2wiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsK0M7Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsOENBQThDLGlCQUFpQixxQkFBcUIsb0NBQW9DLDZEQUE2RCxvQkFBb0IsRUFBRSxlQUFlOztBQUUxTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSywyQkFBMkI7QUFDaEMsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJvZ3VcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYm9ndVwiXSA9IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI1ZGMxZDE3ZGQyNjBjOGRmYTBlIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIEljb25CYXNlID0gZnVuY3Rpb24gSWNvbkJhc2UoX3JlZiwgX3JlZjIpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIGNvbG9yID0gX3JlZi5jb2xvcjtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemU7XG4gIHZhciBzdHlsZSA9IF9yZWYuc3R5bGU7XG4gIHZhciB3aWR0aCA9IF9yZWYud2lkdGg7XG4gIHZhciBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjaGlsZHJlbicsICdjb2xvcicsICdzaXplJywgJ3N0eWxlJywgJ3dpZHRoJywgJ2hlaWdodCddKTtcblxuICB2YXIgX3JlZjIkcmVhY3RJY29uQmFzZSA9IF9yZWYyLnJlYWN0SWNvbkJhc2U7XG4gIHZhciByZWFjdEljb25CYXNlID0gX3JlZjIkcmVhY3RJY29uQmFzZSA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmMiRyZWFjdEljb25CYXNlO1xuXG4gIHZhciBjb21wdXRlZFNpemUgPSBzaXplIHx8IHJlYWN0SWNvbkJhc2Uuc2l6ZSB8fCAnMWVtJztcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzdmcnLCBfZXh0ZW5kcyh7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBtZWV0JyxcbiAgICBoZWlnaHQ6IGhlaWdodCB8fCBjb21wdXRlZFNpemUsXG4gICAgd2lkdGg6IHdpZHRoIHx8IGNvbXB1dGVkU2l6ZVxuICB9LCByZWFjdEljb25CYXNlLCBwcm9wcywge1xuICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGNvbG9yOiBjb2xvciB8fCByZWFjdEljb25CYXNlLmNvbG9yXG4gICAgfSwgcmVhY3RJY29uQmFzZS5zdHlsZSB8fCB7fSwgc3R5bGUpXG4gIH0pKTtcbn07XG5cbkljb25CYXNlLnByb3BUeXBlcyA9IHtcbiAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBzaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5cbkljb25CYXNlLmNvbnRleHRUeXBlcyA9IHtcbiAgcmVhY3RJY29uQmFzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZShJY29uQmFzZS5wcm9wVHlwZXMpXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJY29uQmFzZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29uLWJhc2UvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuY29uc3QgY29sb3JEZWYgPSB7XG4gIGJsYWNrOiAnIzAwMCcsXG4gIHdoaXRlOiAnI0ZGRicsXG4gIHJlZDogJyNGMDAnLFxuICBncmVlbjogJyMwRjAnLFxuICBibHVlOiAnIzAwRicsXG4gIGJpZ2JsdWU6ICcjMTE2OUE3JyxcbiAgZGFya0JsdWU6ICcjMDgzNDUzJyxcbiAgZGFya0dyZXk6ICcjMkYyRjJGJyxcbiAgZ3JleTogJyNEREREREQnLFxuICBsaWdodEdyZXk6ICcjRjJGMkYyJyxcbiAgZW50dXI6IHtcbiAgICBwcmltYXJ5OiAnIzI3M0E0NicsICAgLy8gMzksNTgsNzBcbiAgICBzZWNvbmRhcnk6ICcjNkJCREMyJywgLy8xMDcsMTg5LDE5NCxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29sb3IgPSB7XG4gIGZvbnQ6IHtcbiAgICBpbnZlcnNlOiBjb2xvckRlZi53aGl0ZSxcbiAgICB0aXRsZTogY29sb3JEZWYuYmxhY2ssXG4gICAgaW5mbzE6IGNvbG9yRGVmLmVudHVyLnNlY29uZGFyeSxcbiAgICBpbmZvMjogY29sb3JEZWYuZGFya0JsdWUsXG4gICAgaW5mbzM6IGNvbG9yRGVmLmJsYWNrLFxuICAgIHdhcm46IGNvbG9yRGVmLnJlZCxcbiAgICBkaXNhYmxlZDogY29sb3JEZWYuZ3JleSxcblxuICAgIHRvb2x0aXA6IGNvbG9yRGVmLndoaXRlLFxuICB9LFxuICBiYWNrZ3JvdW5kOiBjb2xvckRlZi5lbnR1ci5wcmltYXJ5LFxuICBib3JkZXI6IGNvbG9yRGVmLmJsYWNrLFxuICBlZmZlY3RpdmU6IGNvbG9yRGVmLmJsYWNrLFxuICBmYWlsOiBjb2xvckRlZi5yZWQsXG4gIG1vZGFsOiBjb2xvckRlZi53aGl0ZSxcbiAgYmFja2Ryb3A6ICdyZ2JhKDAsIDAsIDAsIDAuMyknLFxuICB0b29sdGlwOiAnIzE5MTkxOScsXG4gIHRhYkFjdGl2ZTogY29sb3JEZWYuZW50dXIuc2Vjb25kYXJ5LFxuXG4gIHRpbWVMaW5lQmFja2dyb3VuZDogJyNERUQ4RDgnLFxuICB0aW1lTGluZUJsb2NrQmFja2dyb3VuZDogJyM2RDkyQjYnLFxuICB0aW1lTGluZUJvcmRlcjogJyNlZWUnLFxuICB0aW1lTGluZVN1Y2Nlc3M6ICcjNURBRTVEJyxcbiAgdGltZUxpbmVGYWlsOiAnI0I5MTkxOScsXG4gIHRhYmxlSGVhZGVyOiBjb2xvckRlZi5saWdodEdyZXksXG4gIHRhYmxlUm93OiAnI2ViZjJmMScsXG4gIHRhYmxlSW5mbzogJyNmZmZmZGInLFxuXG4gIHZhbGlkOiAnIzMzYzE0NicsXG4gIGludmFsaWQ6ICcjYjIwMDAwJyxcbiAgZXhwaXJpbmc6ICcjRkZBQTAwJyxcbiAgaGlnaGxpZ2h0IDoge1xuICAgIHZhbGlkOiAnIzRjYWY1MCcsXG4gICAgZXhwaXJpbmc6ICcjRkZCNjBBJyxcbiAgICBpbnZhbGlkOiAnI2NjMDAwMCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRpbWVuc2lvbiA9IHtcbiAgdGltZUxpbmVXaWR0aDogODUsXG59XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB7XG4gIGNvbG9yOiBjb2xvcixcbiAgZGltZW5zaW9uOiBkaW1lbnNpb24sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBcIm5iXCI6IHtcbiAgICB0ZXh0OiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiBcIkZpbG92ZXJmw7hyaW5nXCIsXG4gICAgICBGSUxFX0NMQVNTSUZJQ0FUSU9OOiBcIkZpbGtsYXNzaWZpc2VyaW5nXCIsXG4gICAgICBGSUxFX0RFTElWRVJZOiAnRmlsbGV2ZXJhbnNlJyxcbiAgICAgIElNUE9SVDogXCJJbXBvcnRcIixcbiAgICAgIEVYUE9SVDogXCJHVEZTLWVrc3BvcnRcIixcbiAgICAgIEVYUE9SVF9ORVRFWDogXCJOZVRFeC1la3Nwb3J0XCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6IFwiVmFsaWRlcmluZyBuaXbDpSAxXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiT3ZlcmbDuHJpbmcgc2VudHJhbCBkYXRhYmFzZVwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiBcIlZhbGlkZXJpbmcgbml2w6UgMlwiLFxuICAgICAgQlVJTERfR1JBUEg6IFwiQnlnZyBhdiByZWlzZXPDuGtmb3JzbGFnXCIsXG4gICAgICBVTktOT1dOOiBcIlVramVudCBzdGVnXCIsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgRklMRV9UUkFOU0ZFUjogXCJPdmVyZsO4cmluZyBhdiBmaWwgZnJhIGxva2FsIG1hc2tpbiB0aWwgc2VudHJhbCBzZXJ2ZXJcIixcbiAgICAgIElNUE9SVDogXCJGaWx2YWxpZGVyaW5nIG9nIGltcG9ydCBpIGxva2FsdCBkYXRhYmFzZW9tcsOlZGUgbml2w6UgMVwiLFxuICAgICAgRVhQT1JUOiBcIkVrc3BvcnQgYXYgcnV0ZWRhdGEgXCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6IFwiVmFsaWRlcmluZyBhdiBrb21wbGV0dCBkYXRhb21yw6VkZSBuaXbDpSAxXCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6IFwiVmFsaWRlcmluZyBhdiBrb21wbGV0dCBkYXRhb21yw6VkZSBuaXbDpSAyXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiT3ZlcmbDuHJpbmcgdGlsIHNlbnRyYWx0IGRhdGFiYXNlb21yw6VkZSBuaXbDpSAyXCIsXG4gICAgICBCVUlMRF9HUkFQSDogXCJCeWdnIGF2IHJlaXNlc8O4a2ZvcnNsYWdcIixcbiAgICAgIFVOS05PV046IFwiRGV0dGUgc3RlZ2V0IGVyIHVramVudFwiLFxuICAgIH0sXG4gICAgZmlsZW5hbWU6IHtcbiAgICAgIHVuZGVmaW5lZDogXCJWYWxpZGVyaW5nXCJcbiAgICB9LFxuICAgIHN0YXRlczoge1xuICAgICAgT0s6IFwiRnVsbGbDuHJ0XCIsXG4gICAgICBQRU5ESU5HOiBcIlZlbnRlclwiLFxuICAgICAgU1RBUlRFRDogXCJQw6ViZWd5bnRcIixcbiAgICAgIEZBSUxFRDogXCJGZWlsXCIsXG4gICAgICBEVVBMSUNBVEU6IFwiRmVpbCAtIGR1cGxpa2F0IGRhdGFzZXR0XCIsXG4gICAgICBJR05PUkVEOiBcIklra2UgZ2plbm5vbWbDuHJ0XCIsXG4gICAgICBDQU5DRUxMRUQ6IFwiS2Fuc2VsbGVydFwiLFxuICAgICAgVElNRU9VVDogXCJUaWRzYXZicnVkZFwiLFxuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmlsb3ZlcmbDuHJpbmcgZmVpbGV0JyxcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046ICdGaWxrbGFzc2lmaXNlcmluZyBmZWlsZXQnLFxuICAgIH0sXG4gICAgZmlsdGVyQnV0dG9uOiB7XG4gICAgICBBTExfVElNRTogJ1ViZWdyZW5zZXQnLFxuICAgICAgTEFTVF8xMl9IT1VSUzogJ1Npc3RlIDEyIHRpbWVuZScsXG4gICAgICBMQVNUXzI0X0hPVVJTOiAnU2lzdGUgZMO4Z24nLFxuICAgICAgTEFTVF9XRUVLOiAnU2lzdGUgdWtlJyxcbiAgICAgIExBU1RfTU9OVEg6ICdTaXN0ZSBtw6VuZWQnXG4gICAgfVxuICB9LFxuICBcImVuXCI6IHtcbiAgICB0ZXh0OiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiBcIkZpbGUgdHJhbnNmZXJcIixcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046IFwiRmlsZSBjbGFzc2lmaWNhdGlvblwiLFxuICAgICAgRklMRV9ERUxJVkVSWTogJ0ZpbGUgZGVsaXZlcnknLFxuICAgICAgSU1QT1JUOiBcIkltcG9ydFwiLFxuICAgICAgRVhQT1JUOiBcIkdURlMgZXhwb3J0XCIsXG4gICAgICBFWFBPUlRfTkVURVg6IFwiTmVURXggZXhwb3J0XCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6IFwiVmFsaWRhdGlvbiBsZXZlbCAxXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiVHJhbnNmZXIgdG8gY2VudHJhbCBzcGFjZVwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiBcIlZhbGlkYXRpb24gbGV2ZWwgMlwiLFxuICAgICAgQlVJTERfR1JBUEg6IFwiQnVpbGQgZ3JhcGhcIixcbiAgICAgIFVOS05PV046IFwiVWtub3duIHN0ZXBcIixcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiBcIlVwbG9hZCBsb2NhbCBmaWxlIHRvIHJlbW90ZSBzZXJ2ZXJcIixcbiAgICAgIElNUE9SVDogXCJGaWxlIHZhbGlkYXRpb24gYW5kIGltcG9ydCBpbiBsb2NhbCBkYXRhIHNwYWNlIC0gbGV2ZWwgMVwiLFxuICAgICAgRVhQT1JUOiBcIkV4cG9ydCBvZiByb3V0ZSBkYXRhIFwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8xOiBcIlZhbGlkYXRpb24gb2YgY29tcGxldGUgZGF0YSBzcGFjZSAtIGxldmVsIDFcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMjogXCJWYWxpZGF0aW9uIG9mIGNvbXBsZXRlIGRhdGEgc3BhY2UgLSBsZXZlbCAyXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiVHJhbnNmZXIgdG8gY2VudHJhbCBkYXRhc3BhY2UgLSBsZXZlbCAyXCIsXG4gICAgICBCVUlMRF9HUkFQSDogXCJCdWlsZCBncmFwaFwiLFxuICAgICAgVU5LTk9XTjogXCJUaGlzIHN0ZXAgaXMgdWtub3duXCIsXG4gICAgfSxcbiAgICBmaWxlbmFtZToge1xuICAgICAgdW5kZWZpbmVkOiBcIlZhbGlkYXRpb25cIlxuICAgIH0sXG4gICAgc3RhdGVzOiB7XG4gICAgICBPSzogXCJDb21wbGV0ZWRcIixcbiAgICAgIFBFTkRJTkc6IFwiUGVuZGluZ1wiLFxuICAgICAgU1RBUlRFRDogXCJTdGFydGVkXCIsXG4gICAgICBGQUlMRUQ6IFwiRmFpbGVkXCIsXG4gICAgICBEVVBMSUNBVEU6IFwiRmFpbGVkIC0gZHVwbGljYXRlIGRhdGEgc2V0XCIsXG4gICAgICBJR05PUkVEOiBcIlNraXBwZWRcIixcbiAgICAgIENBTkNFTExFRDogXCJDYW5jZWxsZWRcIixcbiAgICAgIFRJTUVPVVQ6IFwiVGltZW91dFwiLFxuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmFpbGVkIHRvIHRyYW5zZmVyIGZpbGUnLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZhaWxlZCBvbiBmaWxlIGNsYXNzaWZpY2F0aW9uJyxcbiAgICB9LFxuICAgIGZpbHRlckJ1dHRvbjoge1xuICAgICAgQUxMX1RJTUU6ICdVbmxpbWl0ZWQnLFxuICAgICAgTEFTVF8xMl9IT1VSUzogJ0xhc3QgMTIgaG91cnMnLFxuICAgICAgTEFTVF8yNF9IT1VSUzogJ0xhc3QgMjQgaG91cnMnLFxuICAgICAgTEFTVF9XRUVLOiAnTGFzdCB3ZWVrJyxcbiAgICAgIExBU1RfTU9OVEg6ICdMYXN0IG1vbnRoJ1xuICAgIH1cbiAgfSxcbiAgXCJmclwiOiB7XG4gICAgdGV4dDoge1xuICAgICAgRklMRV9UUkFOU0ZFUjogXCJUcmFuc2ZlcnQgZGUgZmljaGllcnNcIixcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046IFwiQ2xhc3NpZmljYXRpb24gZGUgZmljaGllcnNcIixcbiAgICAgIEZJTEVfREVMSVZFUlk6ICdMaXZyYWlzb24gZGUgZmljaGllcicsXG4gICAgICBJTVBPUlQ6IFwiSW1wb3J0XCIsXG4gICAgICBFWFBPUlQ6IFwiR1RGUyBleHBvcnRcIixcbiAgICAgIEVYUE9SVF9ORVRFWDogXCJOZVRFeCBleHBvcnRcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogXCJWYWxpZGF0aW9uIG5pdmVhdSAxXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiVHJhbnNmZXJ0IHZlcnMgbCdlc3BhY2UgZGUgZG9ubsOpZXMgcHJpbmNpcGFsXCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6IFwiVmFsaWRhdGlvbiBuaXZlYXUgMlwiLFxuICAgICAgQlVJTERfR1JBUEg6IFwiQ29uc3RydWlyZSBsZSBncmFwaGVcIixcbiAgICAgIFVOS05PV046IFwiRXRhcGUgaW5jb25udWVcIlxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6IFwiRW52b3llciB1biBmaWNoaWVyIGxvY2FsIHZlcnMgbGUgc2VydmV1ciBkaXN0YW50XCIsXG4gICAgICBJTVBPUlQ6IFwiVmFsaWRhdGlvbiBkZSBmaWNoaWVyIGV0IGltcG9ydCBkYW5zIGwnZXNwYWNlIGRlIGRvbm7DqWVzIGxvY2FsIC0gbml2ZWF1IDFcIixcbiAgICAgIEVYUE9SVDogXCJFeHBvcnQgZGVzIGRvbm7DqWVzIHRvcG9sb2dpcXVlcyBcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogXCJWYWxpZGF0aW9uIGRlIGwnZXNwYWNlIGRlIGRvbm7DqWVzIGNvbXBsZXQgLSBuaXZlYXUgMVwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiBcIlZhbGlkYXRpb24gZGUgbCdlc3BhY2UgZGUgZG9ubsOpZXMgY29tcGxldCAtIG5pdmVhdSAyXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiVHJhbnNmZXIgdmVycyBsJ2VzcGFjZSBkZSBkb25uw6llcyBwcmluY2lwYWwgLSBuaXZlYXUgMlwiLFxuICAgICAgQlVJTERfR1JBUEg6IFwiQ29uc3RydWlyZSBsZSBncmFwaGVcIixcbiAgICAgIFVOS05PV046IFwiRXRhcGUgaW5jb25udWVcIlxuICAgIH0sXG4gICAgZmlsZW5hbWU6IHtcbiAgICAgIHVuZGVmaW5lZDogXCJWYWxpZGF0aW9uXCJcbiAgICB9LFxuICAgIHN0YXRlczoge1xuICAgICAgT0s6IFwiVGVybWluw6lcIixcbiAgICAgIFBFTkRJTkc6IFwiRW4gYXR0ZW50ZVwiLFxuICAgICAgU1RBUlRFRDogXCJEw6ltYXJyw6lcIixcbiAgICAgIEZBSUxFRDogXCJFY2hvdcOpXCIsXG4gICAgICBEVVBMSUNBVEU6IFwiRWNob3XDqSAtIGRvbm7DqWVzIMOgIGluc8OpcmVyIGVuIGRvdWNsZVwiLFxuICAgICAgSUdOT1JFRDogXCJJZ25vcsOpXCIsXG4gICAgICBDQU5DRUxMRUQ6IFwiQW51dWzDqVwiLFxuICAgICAgVElNRU9VVDogXCJFcnJldXIgLSB0ZW1wcyDDqWNvdWzDqVwiXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6ICdFY2hlYyBsb3JzIGR1IHRyYW5zZmVydCBkdSBmaWNoaWVyJyxcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046ICdFY2hlYyBsb3JzIGRlIGxhIGNsYXNzaWZpY2F0aW9uIGRlIGZpY2hpZXJzJ1xuICAgIH0sXG4gICAgZmlsdGVyQnV0dG9uOiB7XG4gICAgICBBTExfVElNRTogJ1RvdXMnLFxuICAgICAgTEFTVF8xMl9IT1VSUzogJ0xlcyBkZXJuacOocmVzIDEyIGhldXJlcycsXG4gICAgICBMQVNUXzI0X0hPVVJTOiAnTGVzIGRlcm5pw6hyZXMgMjQgaGV1cmVzJyxcbiAgICAgIExBU1RfV0VFSzogJ0xhIHNlbWFpbmUgZGVybmnDqHJlJyxcbiAgICAgIExBU1RfTU9OVEg6ICdMZSBtb2lzIGRlcm5pZXIuJ1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9hY3Rpb25UcmFuc2xhdGlvbnMuanMiLCJjb25zdCBidXR0b25Db25maWcgPSB7XG4gIGZpZWxkczogW1xuICAgIHtcbiAgICAgIGlkOiAnTEFTVF8xMl9IT1VSUydcbiAgICB9LFxuICAgIHsgaWQ6ICdMQVNUXzI0X0hPVVJTJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnTEFTVF9XRUVLJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdMQVNUX01PTlRIJ1xuICAgIH0sXG4gICAgeyBpZDogJ0FMTF9USU1FJyxcbiAgICB9XG4gIF1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRMYXN0VmFsaWREYXRlID0gaWQgPT4ge1xuICBzd2l0Y2ggKGlkKSB7XG4gICAgY2FzZSAnQUxMX1RJTUUnOiByZXR1cm4gbnVsbDtcbiAgICBjYXNlICdMQVNUX01PTlRIJzoge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldE1vbnRoKG5vdy5nZXRNb250aCgpIC0gMSkpO1xuICAgIH1cbiAgICBjYXNlICdMQVNUX1dFRUsnOiB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShub3cuc2V0RGF0ZShub3cuZ2V0RGF0ZSgpIC0gNykpO1xuICAgIH1cbiAgICBjYXNlICdMQVNUXzEyX0hPVVJTJzoge1xuICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5zZXRIb3Vycyhub3cuZ2V0SG91cnMoKSAtIDEyKSk7XG4gICAgfVxuICAgIGNhc2UgJ0xBU1RfMjRfSE9VUlMnOiB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShub3cuc2V0RGF0ZShub3cuZ2V0RGF0ZSgpLTEpKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYnV0dG9uQ29uZmlnO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvYnV0dG9uQ29uZmlnLmpzIiwiZXhwb3J0IGRlZmF1bHQge1xuICBcImVuXCI6IHtcbiAgICBwYWdlOiAnUGFnZTogJyxcbiAgICBub19zdGF0dXM6ICdObyByZXN1bHQgd2l0aCBhcHBsaWVkIGZpbHRlcicsXG4gICAgc3RhcnRlZDogJ1N0YXJ0ZWQnLFxuICAgIGVuZGVkOiAnRW5kZWQnLFxuICAgIGR1cmF0aW9uOiAnRHVyYXRpb246ICcsXG4gICAgc2hvd19hbGw6ICdTaG93IGFsbCcsXG4gICAgc2hvd19vbmx5X2ZhaWxlZDogJ1Nob3cgb25seSBmYWlsZWQnLFxuICAgIHNob3dfb25seV9zdWNjZXNzOiAnU2hvdyBvbmx5IHN1Y2Nlc3NmdWwnLFxuICAgIHNob3dfb25seV9jYW5jZWxsZWQ6IFwiU2hvdyBvbmx5IGNhbmNlbGxlZFwiLFxuICB9LFxuICBcIm5iXCI6IHtcbiAgICBwYWdlOiAnU2lkZTogJyxcbiAgICBub19zdGF0dXM6ICdJbmdlbiByZXN1bHRhdGVyIG1lZCB2YWxndCBmaWx0ZXInLFxuICAgIHN0YXJ0ZWQ6ICdCZWd5bnRlJyxcbiAgICBlbmRlZDogJ0F2c2x1dHRldCcsXG4gICAgZHVyYXRpb246ICdWYXJpZ2hldCcsXG4gICAgc2hvd19hbGw6ICdWaXMgYWxsZScsXG4gICAgc2hvd19vbmx5X2ZhaWxlZDogJ1ZpcyBrdW4gZmVpbGV0JyxcbiAgICBzaG93X29ubHlfc3VjY2VzczogJ1ZpcyBrdW4gdmVsbHlra2V0JyxcbiAgICBzaG93X29ubHlfY2FuY2VsbGVkOiBcIlZpcyBrdW4ga2Fuc2VsbGVydGVcIixcbiAgfSxcbiAgXCJmclwiOiB7XG4gICAgcGFnZTogJ1BhZ2U6ICcsXG4gICAgbm9fc3RhdHVzOiAnQXVjdW4gcsOpc3VsdGF0IGF2ZWMgY2VzIGNyaXTDqHJlcycsXG4gICAgc3RhcnRlZDogJ0TDqW1hcnLDqScsXG4gICAgZW5kZWQ6ICdUZXJsdW7DqScsXG4gICAgZHVyYXRpb246ICdEdXLDqWU6ICcsXG4gICAgc2hvd19hbGw6ICdNb250cmVyIHRvdXMnLFxuICAgIHNob3dfb25seV9mYWlsZWQ6ICdNb250cmVyIHNldWxlbWVudCBsZXMgw6ljaGVjcycsXG4gICAgc2hvd19vbmx5X3N1Y2Nlc3M6ICdNb250ZXIgc2V1bGVtZW50IGxlcyBzdWNjw6hzJyxcbiAgICBzaG93X29ubHlfY2FuY2VsbGVkOiBcIk1vbnRyZXIgc2V1bGVtZW50IGxlcyBhbnV1bMOpc1wiXG4gIH1cbn1cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvdHJhbnNsYXRpb25zLmpzIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHRcdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0XHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyIFxuXHRcdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHRcdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRcdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcblx0fSksXG5cdGdldEVsZW1lbnQgPSAoZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbyA9IHt9O1xuXHRcdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRtZW1vW3NlbGVjdG9yXSA9IGZuLmNhbGwodGhpcywgc2VsZWN0b3IpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdFx0fTtcblx0fSkoZnVuY3Rpb24gKHN0eWxlVGFyZ2V0KSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3R5bGVUYXJnZXQpXG5cdH0pLFxuXHRzaW5nbGV0b25FbGVtZW50ID0gbnVsbCxcblx0c2luZ2xldG9uQ291bnRlciA9IDAsXG5cdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wID0gW10sXG5cdGZpeFVybHMgPSByZXF1aXJlKFwiLi9maXhVcmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRJbnRvID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCk7XG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblx0aWYgKCFzdHlsZVRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0c3R5bGVUYXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgc3R5bGVUYXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHRzdHlsZVRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlVGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0c3R5bGVUYXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0Jy4gTXVzdCBiZSAndG9wJyBvciAnYm90dG9tJy5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuXHRzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR2YXIgaWR4ID0gc3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZUVsZW1lbnQpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSB7XG5cdHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhdHRhY2hUYWdBdHRycyhzdHlsZUVsZW1lbnQsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGVFbGVtZW50KTtcblx0cmV0dXJuIHN0eWxlRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgbGlua0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGF0dGFjaFRhZ0F0dHJzKGxpbmtFbGVtZW50LCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmtFbGVtZW50KTtcblx0cmV0dXJuIGxpbmtFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhdHRhY2hUYWdBdHRycyhlbGVtZW50LCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKiBJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscyl7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGlua0VsZW1lbnQuaHJlZjtcblxuXHRsaW5rRWxlbWVudC5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpXG5cdFx0VVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IFRpbWVsaW5lIGZyb20gJy4vVGltZWxpbmUnXG5leHBvcnQgSGVhZGVyVGltZWxpbmUgZnJvbSAnLi9IZWFkZXJUaW1lbGluZSdcbmV4cG9ydCBFdmVudERldGFpbHMgZnJvbSAnLi9FdmVudERldGFpbHMnXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgQ2hvdWV0dGVMaW5rID0gKHsgYWN0aW9uLCBpZCwgcmVmZXJlbnRpYWwsIGNoaWxkcmVuIH0pID0+IHtcblxuICBjb25zdCBiYXNlVVJMID0gYCR7d2luZG93LmNvbmZpZy5jaG91ZXR0ZUJhc2VVcmx9cmVmZXJlbnRpYWxzL2BcblxuICBjb25zdCBhY3Rpb25NYXAgPSB7XG4gICAgXCJpbXBvcnRlclwiOiBgaW1wb3J0cy8ke2lkfS9jb21wbGlhbmNlX2NoZWNrYCxcbiAgICBcImV4cG9ydGVyXCI6IGBleHBvcnRzLyR7aWR9L2NvbXBsaWFuY2VfY2hlY2tgLFxuICAgIFwidmFsaWRhdG9yXCI6IGBjb21wbGlhbmNlX2NoZWNrcy8ke2lkfS9yZXBvcnRgXG4gIH1cbiAgY29uc3QgVVJMID0gYCR7YmFzZVVSTH0ke3JlZmVyZW50aWFsfS8ke2FjdGlvbk1hcFthY3Rpb25dfWBcblxuICByZXR1cm4gKFxuICAgIDxhIHRpdGxlPXtVUkx9IHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e1VSTH0+e2NoaWxkcmVufTwvYT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaG91ZXR0ZUxpbmtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ2hvdWV0dGVMaW5rLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDaG91ZXR0ZUxpbmsgZnJvbSAnLi9DaG91ZXR0ZUxpbmsnO1xuXG5jbGFzcyBDb250cm9sbGVkQ2hvdWV0dGVMaW5rIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZXZlbnRzLCBpbmNsdWRlTGV2ZWwyIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IHN1cHBvcnRlZEFjdGlvbnMgPSBbJ0lNUE9SVCcsICdWQUxJREFUSU9OX0xFVkVMXzEnXTtcblxuICAgIGxldCBjaG91ZXRlQWN0aW9uTWFwID0ge1xuICAgICAgSU1QT1JUOiAnaW1wb3J0ZXInLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8xOiAndmFsaWRhdG9yJ1xuICAgIH07XG5cbiAgICBpZiAoaW5jbHVkZUxldmVsMikge1xuICAgICAgc3VwcG9ydGVkQWN0aW9ucy5wdXNoKCdWQUxJREFUSU9OX0xFVkVMXzInKTtcbiAgICAgIHN1cHBvcnRlZEFjdGlvbnMucHVzaCgnRVhQT1JUJyk7XG4gICAgICBzdXBwb3J0ZWRBY3Rpb25zLnB1c2goJ0VYUE9SVF9ORVRFWCcpO1xuICAgICAgY2hvdWV0ZUFjdGlvbk1hcFsnVkFMSURBVElPTl9MRVZFTF8yJ10gPSAndmFsaWRhdG9yJztcbiAgICAgIGNob3VldGVBY3Rpb25NYXBbJ0VYUE9SVCddID0gJ2V4cG9ydGVyJztcbiAgICAgIGNob3VldGVBY3Rpb25NYXBbJ0VYUE9SVF9ORVRFWCddID0gJ2V4cG9ydGVyJztcbiAgICB9XG5cbiAgICBpZiAoZXZlbnRzLnN0YXRlcyAmJiBldmVudHMuc3RhdGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZW5kU3RhdGUgPSBldmVudHMuc3RhdGVzW2V2ZW50cy5zdGF0ZXMubGVuZ3RoIC0gMV07XG4gICAgICBpZiAoc3VwcG9ydGVkQWN0aW9ucy5pbmRleE9mKGVuZFN0YXRlLmFjdGlvbikgPiAtMSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDaG91ZXR0ZUxpbmtcbiAgICAgICAgICAgIGFjdGlvbj17Y2hvdWV0ZUFjdGlvbk1hcFtlbmRTdGF0ZS5hY3Rpb25dfVxuICAgICAgICAgICAgaWQ9e2VuZFN0YXRlLmNob3VldHRlSm9iSWR9XG4gICAgICAgICAgICByZWZlcmVudGlhbD17ZW5kU3RhdGUucmVmZXJlbnRpYWx9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9DaG91ZXR0ZUxpbms+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIDxkaXY+IHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgeycgJ308L2Rpdj47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlZENob3VldHRlTGluaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0NvbnRyb2xsZWRDaG91ZXR0ZUxpbmsuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXZlbnRTdGVwcGVyIGZyb20gJy4vRXZlbnRTdGVwcGVyJztcbmltcG9ydCAnLi9FdmVudERldGFpbHMuY3NzJztcbmNvbnN0IEZhRnJlc2ggPSByZXF1aXJlKCdyZWFjdC1pY29ucy9saWIvZmEvcmVmcmVzaCcpO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgRmlsdGVyQnV0dG9uVHJheSBmcm9tICcuL0ZpbHRlckJ1dHRvblRyYXknO1xuaW1wb3J0IHsgZ2V0TGFzdFZhbGlkRGF0ZSB9IGZyb20gJy4vYnV0dG9uQ29uZmlnJztcblxuY2xhc3MgRXZlbnREZXRhaWxzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFjdGl2ZVBhZ2VJbmRleDogMCxcbiAgICAgIGVuZFN0YXRlRmlsdGVyOiAnQUxMJyxcbiAgICAgIGRhdGVGaWx0ZXI6IHByb3BzLnNob3dEYXRlRmlsdGVyXG4gICAgICAgID8gJ0xBU1RfMTJfSE9VUlMnXG4gICAgICAgIDogJ0FMTF9USU1FJ1xuICAgIH07XG4gIH1cblxuICBoYW5kbGVQYWdlQ2xpY2soZSwgcGFnZUluZGV4KSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYWN0aXZlUGFnZUluZGV4OiBwYWdlSW5kZXhcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlckNoYW5nZShkYXRlRmlsdGVyKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRlRmlsdGVyOiBkYXRlRmlsdGVyXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRhU291cmNlLCBsb2NhbGUsIGluY2x1ZGVMZXZlbDIsIHNob3dEYXRlRmlsdGVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgYWN0aXZlUGFnZUluZGV4LCBlbmRTdGF0ZUZpbHRlciwgZGF0ZUZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBmaWx0ZXJlZFBhZ2VzID0gbnVsbDtcbiAgICBjb25zdCBsYXN0RGF0ZSA9IGdldExhc3RWYWxpZERhdGUoZGF0ZUZpbHRlcik7XG5cbiAgICBjb25zdCBmaWx0ZXJlZEJ5RGF0ZSA9IChkYXRhU291cmNlIHx8IFtdKS5maWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgaWYgKCFsYXN0RGF0ZSkgcmV0dXJuIGV2ZW50O1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGV2ZW50LmZpcnN0RXZlbnQpID4gbGFzdERhdGU7XG4gICAgfSk7XG5cbiAgICBpZiAoXG4gICAgICBlbmRTdGF0ZUZpbHRlciA9PT0gJ0ZBSUxFRCcgfHxcbiAgICAgIGVuZFN0YXRlRmlsdGVyID09PSAnT0snIHx8XG4gICAgICBlbmRTdGF0ZUZpbHRlciA9PT0gJ0NBTkNFTExFRCdcbiAgICApIHtcbiAgICAgIGZpbHRlcmVkUGFnZXMgPSAoZmlsdGVyZWRCeURhdGUgfHwgW10pXG4gICAgICAgIC5maWx0ZXIoZXZlbnQgPT4gZXZlbnQuZW5kU3RhdGUgPT09IGVuZFN0YXRlRmlsdGVyKTtcbiAgICB9XG5cbiAgICBsZXQgcGFnaW5hdGlvbk1hcCA9IGdldFBhZ2luYXRpb25NYXAoZmlsdGVyZWRQYWdlcyB8fCBmaWx0ZXJlZEJ5RGF0ZSk7XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gKFxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcwLjllbScgfX1cbiAgICAgICAgICB2YWx1ZT17ZW5kU3RhdGVGaWx0ZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGVuZFN0YXRlRmlsdGVyOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgYWN0aXZlUGFnZUluZGV4OiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFMTFwiPnt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zaG93X2FsbH08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT0tcIj57dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19vbmx5X3N1Y2Nlc3N9PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNBTkNFTExFRFwiPlxuICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfb25seV9jYW5jZWxsZWR9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZBSUxFRFwiPlxuICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfb25seV9mYWlsZWR9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7c2hvd0RhdGVGaWx0ZXIgJiZcbiAgICAgICAgICA8RmlsdGVyQnV0dG9uVHJheVxuICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyMCB9fVxuICAgICAgICAgICAgYWN0aXZlQnV0dG9uSWQ9e3RoaXMuc3RhdGUuZGF0ZUZpbHRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZpbHRlckNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIC8+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIGNvbnN0IHBhZ2UgPSBwYWdpbmF0aW9uTWFwW2FjdGl2ZVBhZ2VJbmRleF07XG5cbiAgICBjb25zdCByZWZyZXNoQnV0dG9uID1cbiAgICAgIHRoaXMucHJvcHMuaGFuZGxlUmVmcmVzaCAmJlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTUsIGZsb2F0OiAncmlnaHQnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgPEZhRnJlc2hcbiAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06ICdzY2FsZSgxLjUpJyB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlUmVmcmVzaH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PjtcblxuICAgIGlmIChwYWdlICYmIHBhZ2UubGVuZ3RoICYmIHBhZ2luYXRpb25NYXApIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdsZWZ0JywgbWFyZ2luQm90dG9tOiA1IH19PlxuICAgICAgICAgICAge2ZpbHRlcnN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3JlZnJlc2hCdXR0b259XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxpbmstcGFyZW50XCI+XG4gICAgICAgICAgICA8c3Bhbj57dHJhbnNsYXRpb25zW2xvY2FsZV0ucGFnZX08L3NwYW4+XG4gICAgICAgICAgICB7cGFnaW5hdGlvbk1hcC5tYXAoKHBhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gaW5kZXggPT0gYWN0aXZlUGFnZUluZGV4XG4gICAgICAgICAgICAgICAgPyAncGFnZS1saW5rIGFjdGl2ZS1saW5rJ1xuICAgICAgICAgICAgICAgIDogJ3BhZ2UtbGluayBpbmFjdGl2ZS1saW5rJztcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpc0FjdGl2ZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5oYW5kbGVQYWdlQ2xpY2soZSwgaW5kZXgpfVxuICAgICAgICAgICAgICAgICAga2V5PXsnbGluay0nICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3BhZ2UubWFwKChsaXN0SXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IGV2ZW50R3JvdXAgPSB7fTtcblxuICAgICAgICAgICAgICBsaXN0SXRlbS5ldmVudHMuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0pIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgZXZlbnRHcm91cFtldmVudC5hY3Rpb25dLnN0YXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0uc3RhdGVzLnB1c2goZXZlbnQpO1xuICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXS5lbmRTdGF0ZSA9IGV2ZW50LnN0YXRlO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17J2pvYnN0YXR1cy0nICsgbGlzdEl0ZW0uY2hvdWV0dGVKb2JJZCArICctJyArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RXZlbnRTdGVwcGVyXG4gICAgICAgICAgICAgICAgICAgIGluY2x1ZGVMZXZlbDI9e2luY2x1ZGVMZXZlbDJ9XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgICAgICAgICBrZXk9eydldmVudC1ncm91cC0nICsgbGlzdEl0ZW0uY2hvdWV0dGVKb2JJZCArICctJyArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICBncm91cHM9e2V2ZW50R3JvdXB9XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtPXtsaXN0SXRlbX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHRleHRBbGlnbjogJ2xlZnQnLCBtYXJnaW5Cb3R0b206IDUgfX0+XG4gICAgICAgICAge2ZpbHRlcnN9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyMCxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNlZWUnLFxuICAgICAgICAgICAgICBwYWRkaW5nOiA0MFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCB9fT5cbiAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLm5vX3N0YXR1c31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiAxMCB9fT5cbiAgICAgICAgICAgICAge3JlZnJlc2hCdXR0b259XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBnZXRQYWdpbmF0aW9uTWFwID0gKHN0YXR1c0xpc3QgPSBbXSkgPT4ge1xuICBsZXQgcGFnaW5hdGlvbk1hcCA9IFtdO1xuXG4gIGlmIChzdGF0dXNMaXN0ICYmIHN0YXR1c0xpc3QubGVuZ3RoKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGogPSBzdGF0dXNMaXN0Lmxlbmd0aDsgaSA8IGo7IGkgKz0gMTApIHtcbiAgICAgIHBhZ2luYXRpb25NYXAucHVzaChzdGF0dXNMaXN0LnNsaWNlKGksIGkgKyAxMCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFnaW5hdGlvbk1hcDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RGV0YWlscztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWRFcnJvciBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvZXJyb3InO1xuaW1wb3J0IE1kRG9uZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvY2hlY2stY2lyY2xlJztcbmltcG9ydCBNZFNjaGVkdWxlIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9zY2hlZHVsZSc7XG5pbXBvcnQgRmFDb2cgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NvZyc7XG5pbXBvcnQgTWRIZWxwT3V0TGluZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvaGVscC1vdXRsaW5lJztcbmltcG9ydCBNZEhvdXIgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2hvdXJnbGFzcy1lbXB0eSc7XG5cbmNsYXNzIEV2ZW50U3RhdHVzSWNvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcblxuICAgIHN3aXRjaCAodGhpcy5wcm9wcy5zdGF0ZSkge1xuICAgICAgY2FzZSAnT0snOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZERvbmVcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnZ3JlZW4nLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnUEVORElORyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kSG91clxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnU1RBUlRFRCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEZhQ29nXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJyMyMjc0YjUnLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnRkFJTEVEJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRFcnJvclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnQ0FOQ0VMTEVEJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRFcnJvclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdvcmFuZ2UnLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnRFVQTElDQVRFJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRFcnJvclxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAnSUdOT1JFRCc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kU2NoZWR1bGVcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuXG4gICAgICBjYXNlICdUSU1FT1VUJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRTY2hlZHVsZVxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdyZWQnLCB3aWR0aDogMjQsIGhlaWdodDogMjIsIG1hcmdpblRvcDogLTIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gPE1kSGVscE91dExpbmUgc3R5bGU9e3sgY29sb3I6ICdncmV5Jywgd2lkdGg6IDI0LCBoZWlnaHQ6IDIyIH19IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U3RhdHVzSWNvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0V2ZW50U3RhdHVzSWNvbi5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWN0aW9uVHJhbnNsYXRpb25zIGZyb20gJy4vYWN0aW9uVHJhbnNsYXRpb25zJztcbmltcG9ydCBGYUNoZXZyb25Eb3duIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLWRvd24nO1xuaW1wb3J0IEZhQ2hldnJvblVwIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLXVwJztcbmltcG9ydCBDb250cm9sbGVkQ2hvdWV0dGVMaW5rIGZyb20gJy4vQ29udHJvbGxlZENob3VldHRlTGluayc7XG5pbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJy4vdHJhbnNsYXRpb25zJztcbmltcG9ydCBFdmVudFN0YXR1c0ljb24gZnJvbSAnLi9FdmVudFN0YXR1c0ljb24nO1xuXG5jbGFzcyBFdmVudFN0ZXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXhwYW5kZWQ6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgZ3JvdXBzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgbGlzdEl0ZW06IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGV2ZW50U3RhdGVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnRklMRV9UUkFOU0ZFUicsXG4gICAgICAnRklMRV9DTEFTU0lGSUNBVElPTicsXG4gICAgICAnRklMRV9ERUxJVkVSWScsXG4gICAgICAnSU1QT1JUJyxcbiAgICAgICdWQUxJREFUSU9OX0xFVkVMXzEnLFxuICAgICAgJ0RBVEFTUEFDRV9UUkFOU0ZFUicsXG4gICAgICAnVkFMSURBVElPTl9MRVZFTF8yJyxcbiAgICAgICdFWFBPUlQnLFxuICAgICAgJ0JVSUxEX0dSQVBIJyxcbiAgICAgICdFWFBPUlRfTkVURVgnXG4gICAgXTtcbiAgfVxuXG4gIGFkZFVubGlzdGVkU3RhdGVzKGdyb3Vwcykge1xuICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMuZXZlbnRTdGF0ZXMoKTtcblxuICAgIGxldCBncm91cHNXaXRoVW5saXN0ZWQgPSBPYmplY3QuYXNzaWduKHt9LCBncm91cHMpO1xuXG4gICAgbGV0IGZpcnN0U3RhdGVGb3VuZCA9IGZhbHNlO1xuXG4gICAgc3RhdGVzLmZvckVhY2goc3RhdGUgPT4ge1xuICAgICAgaWYgKCFncm91cHNXaXRoVW5saXN0ZWRbc3RhdGVdKSB7XG4gICAgICAgIGdyb3Vwc1dpdGhVbmxpc3RlZFtzdGF0ZV0gPSB7XG4gICAgICAgICAgZW5kU3RhdGU6ICdJR05PUkVEJyxcbiAgICAgICAgICBtaXNzaW5nQmVmb3JlU3RhcnRTdGFydDogIWZpcnN0U3RhdGVGb3VuZFxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlyc3RTdGF0ZUZvdW5kID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBmaW5hbEdyb3VwcyA9IHt9O1xuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzV2l0aFVubGlzdGVkKVxuICAgICAgLnNvcnQoKGtleTEsIGtleTIpID0+IHN0YXRlcy5pbmRleE9mKGtleTEpIC0gc3RhdGVzLmluZGV4T2Yoa2V5MikpXG4gICAgICAuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBmaW5hbEdyb3Vwc1trZXldID0gZ3JvdXBzV2l0aFVubGlzdGVkW2tleV07XG4gICAgICB9KTtcbiAgICByZXR1cm4gZmluYWxHcm91cHM7XG4gIH1cblxuICBoYW5kbGVUb2dnbGVWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVDb21iaW5lZFNwbGl0KGZvcm1hdHRlZEdyb3VwcywgZ3JvdXBzLCBuYW1lKSB7XG4gICAgY29uc3QgY29tYmluZWQgPSBbXTtcbiAgICBmb3IgKGxldCBpIGluIGdyb3Vwcykge1xuICAgICAgY29uc3QgZ3JvdXAgPSBncm91cHNbaV07XG4gICAgICBjb21iaW5lZFtncm91cF0gPSBmb3JtYXR0ZWRHcm91cHNbZ3JvdXBdO1xuXG4gICAgICBpZiAobmFtZSAhPT0gZ3JvdXApIHtcbiAgICAgICAgZGVsZXRlIGZvcm1hdHRlZEdyb3Vwc1tncm91cF07XG4gICAgICB9XG4gICAgfVxuICAgIGZvcm1hdHRlZEdyb3Vwc1tuYW1lXSA9IGNvbWJpbmVkO1xuICB9XG5cbiAgYWdncmVnZ2F0ZUZpbGVFdmVudHMoZGF0YSkge1xuICAgIGxldCBncm91cHMgPSB7Li4uZGF0YX07XG4gICAgbGV0IGVuZFN0YXRlID0gbnVsbDtcbiAgICBsZXQgZXJyb3JPbiA9IG51bGw7XG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKCBncm91cCA9PiB7XG4gICAgICBpZiAoZ3JvdXAgPT09ICdGSUxFX0NMQVNTSUZJQ0FUSU9OJyB8fCBncm91cCA9PT0gJ0ZJTEVfVFJBTlNGRVInKSB7XG4gICAgICAgIGVuZFN0YXRlID0gZ3JvdXBzW2dyb3VwXS5lbmRTdGF0ZTtcblxuICAgICAgICBpZiAoZW5kU3RhdGUgPT09ICdGQUlMRUQnIHx8IGVuZFN0YXRlID09PSAnRFVQTElDQVRFJykge1xuICAgICAgICAgIGVycm9yT24gPSBncm91cDtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgZ3JvdXBzW2dyb3VwXVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGVuZFN0YXRlICE9PSBudWxsKSB7XG4gICAgICBncm91cHMuRklMRV9ERUxJVkVSWSA9IHtcbiAgICAgICAgZW5kU3RhdGU6IGVycm9yT24gPyAnRkFJTEVEJyA6IGVuZFN0YXRlLFxuICAgICAgICBlcnJvck9uLFxuICAgICAgICBtaXNzaW5nQmVmb3JlU3RhcnRTdGFydDogKGVuZFN0YXRlID09ICdJR05PUkVEJyAmJiAhZXJyb3JPbilcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxuXG4gIGJ1bGxldChmb3JtYXR0ZWRHcm91cHMsIGdyb3VwcywgbG9jYWxlLCBpbmNsdWRlTGV2ZWwyKSB7XG4gICAgY29uc3QgY29sdW1uU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICBoZWlnaHQ6IDQ1XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhmb3JtYXR0ZWRHcm91cHMpLm1hcCgoZ3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY29sdW1uO1xuICAgICAgbGV0IGV2ZW50ID0gZm9ybWF0dGVkR3JvdXBzW2dyb3VwXTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICAgIGNvbHVtbiA9IE9iamVjdC5rZXlzKGV2ZW50KS5tYXAoKGtleSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckV2ZW50KFxuICAgICAgICAgICAgZXZlbnRba2V5XSxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgIGluY2x1ZGVMZXZlbDJcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbiA9IHRoaXMucmVuZGVyRXZlbnQoXG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgZ3JvdXBzLFxuICAgICAgICAgIGdyb3VwLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGluZGV4ID09PSAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIGluY2x1ZGVMZXZlbDJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiA8ZGl2IGtleT17J2J1bGxldC0nICsgaW5kZXh9IHN0eWxlPXtjb2x1bW5TdHlsZX0+e2NvbHVtbn08L2Rpdj47XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJFdmVudChcbiAgICBldmVudCxcbiAgICBncm91cHMsXG4gICAgZ3JvdXAsXG4gICAgaW5kZXgsXG4gICAgaXNGaXJzdCxcbiAgICBjb2x1bW5JbmRleCA9IDAsXG4gICAgbG9jYWxlLFxuICAgIGluY2x1ZGVMZXZlbDJcbiAgKSB7XG4gICAgY29uc3QgZ3JvdXBTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnXG4gICAgfTtcblxuICAgIGNvbnN0IGdyb3VwVGV4dCA9IHtcbiAgICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgbWFyZ2luTGVmdDogNVxuICAgIH07XG5cbiAgICBjb25zdCBsaW5rU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMTg5LCAxODksIDE4OSknLFxuICAgICAgbWFyZ2luTGVmdDogLTYsXG4gICAgICBib3JkZXJUb3BTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAxLFxuICAgICAgd2lkdGg6IDMwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcbiAgICAgIG1hcmdpbjogOCxcbiAgICAgIHRyYW5zZm9ybTogY29sdW1uSW5kZXggPiAwICYmICd0cmFuc2xhdGVZKC0wLjVlbSkgcm90YXRlKDI1ZGVnKSAnXG4gICAgfTtcblxuICAgIGlmICghQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uc3RhdGVzW2V2ZW50LmVuZFN0YXRlXSkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgdG9vbFRpcFRleHQgPSBBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5zdGF0ZXNbZXZlbnQuZW5kU3RhdGVdO1xuXG4gICAgaWYgKGV2ZW50LnN0YXRlcyAmJiBldmVudC5zdGF0ZXNbZ3JvdXBzW2dyb3VwXS5zdGF0ZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIHRvb2xUaXBUZXh0ICs9ICcgJyArIGV2ZW50LnN0YXRlc1tldmVudC5zdGF0ZXMubGVuZ3RoIC0gMV0uZGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZXJyb3JPbikge1xuICAgICAgdG9vbFRpcFRleHQgPSBBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5lcnJvck1lc3NhZ2VbZXZlbnQuZXJyb3JPbl07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e2dyb3VwU3R5bGV9IGtleT17J2dyb3VwLScgKyBncm91cCArIGluZGV4fT5cbiAgICAgICAgeyFpc0ZpcnN0ICYmIDxkaXYgc3R5bGU9e2xpbmtTdHlsZX0gLz59XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB0aXRsZT17dG9vbFRpcFRleHR9XG4gICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogZXZlbnQubWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQgPyAwLjIgOiAxIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RXZlbnRTdGF0dXNJY29uIHN0YXRlPXtldmVudC5lbmRTdGF0ZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5ncm91cFRleHQsXG4gICAgICAgICAgICBvcGFjaXR5OiBldmVudC5taXNzaW5nQmVmb3JlU3RhcnRTdGFydCA/IDAuMiA6IDFcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENvbnRyb2xsZWRDaG91ZXR0ZUxpbmsgaW5jbHVkZUxldmVsMj17aW5jbHVkZUxldmVsMn0gZXZlbnRzPXtldmVudH0+XG4gICAgICAgICAgICB7QWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0udGV4dFtncm91cF19XG4gICAgICAgICAgPC9Db250cm9sbGVkQ2hvdWV0dGVMaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3RlcHBlcnN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBtYXJnaW5Ub3A6IDEwXG4gICAgfTtcblxuICAgIGNvbnN0IHsgZ3JvdXBzLCBsaXN0SXRlbSwgbG9jYWxlLCBpbmNsdWRlTGV2ZWwyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZXhwYW5kZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBsZXQgZm9ybWF0dGVkR3JvdXBzID0gdGhpcy5hZGRVbmxpc3RlZFN0YXRlcyhncm91cHMpO1xuICAgIGZvcm1hdHRlZEdyb3VwcyA9IHRoaXMuYWdncmVnZ2F0ZUZpbGVFdmVudHMoZm9ybWF0dGVkR3JvdXBzKTtcbiAgICB0aGlzLmNyZWF0ZUNvbWJpbmVkU3BsaXQoZm9ybWF0dGVkR3JvdXBzLCBbJ0VYUE9SVF9ORVRFWCcsICdFWFBPUlQnXSwgJ0VYUE9SVCcpO1xuICAgIGNvbnN0IGJ1bGxldHMgPSB0aGlzLmJ1bGxldChmb3JtYXR0ZWRHcm91cHMsIGdyb3VwcywgbG9jYWxlLCBpbmNsdWRlTGV2ZWwyKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17J2V2ZW50JyArIGxpc3RJdGVtLmNob3VldHRlSm9iSWR9XG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbjogJ2F1dG8nLCB3aWR0aDogJzk4JScsIGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVG9nZ2xlVmlzaWJpbGl0eSgpfVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgbWFyZ2luTGVmdDogLTE1IH19PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHRpdGxlPXt0cmFuc2xhdGlvbnNbbG9jYWxlXS5kdXJhdGlvbiArIGxpc3RJdGVtLmR1cmF0aW9ufVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgY29sb3I6ICcjZTU5NDAwJyxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAtOCxcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDIwXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsaXN0SXRlbS5zdGFydGVkfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtsaXN0SXRlbS5wcm92aWRlciAmJlxuICAgICAgICAgICAgbGlzdEl0ZW0ucHJvdmlkZXIubmFtZSAmJlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzAuOGVtJywgZm9udFdlaWdodDogNjAwLCBmbGV4OiAxIH19PlxuICAgICAgICAgICAgICB7bGlzdEl0ZW0ucHJvdmlkZXIubmFtZX1cbiAgICAgICAgICAgIDwvZGl2Pn1cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMC45ZW0nLCBmb250V2VpZ2h0OiA2MDAsIGZsZXg6IDIgfX0+XG4gICAgICAgICAgICB7bGlzdEl0ZW0uZmlsZU5hbWUgfHwgQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uZmlsZW5hbWUudW5kZWZpbmVkfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17c3RlcHBlcnN0eWxlfT5cbiAgICAgICAgICB7YnVsbGV0c31cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnYXV0bycsIG1hcmdpblJpZ2h0OiAyMCwgbWFyZ2luVG9wOiAtNTAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVG9nZ2xlVmlzaWJpbGl0eSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshZXhwYW5kZWQgPyA8RmFDaGV2cm9uRG93biAvPiA6IDxGYUNoZXZyb25VcCAvPn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtleHBhbmRlZCAmJlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgcGFkZGluZzogOCxcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnN0YXJ0ZWR9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmZpcnN0RXZlbnR9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDYwMCwgbWFyZ2luUmlnaHQ6IDEwIH19PlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5lbmRlZH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7bGlzdEl0ZW0ubGFzdEV2ZW50fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uZHVyYXRpb259XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmR1cmF0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFN0ZXBwZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudFN0ZXBwZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBGaWx0ZXJCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVDbGljaygpIHtcbiAgICBjb25zdCB7IGhhbmRsZUNsaWNrLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaGFuZGxlQ2xpY2sgJiYgdHlwZW9mIGhhbmRsZUNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBoYW5kbGVDbGljayhpZCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGFjdGl2ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhY3RpdmVTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMjE5NkYzJyxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgIzE1NTk5ZCcsXG4gICAgfTtcbiAgICBjb25zdCBpbmFjdGl2ZVN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJyNmZmYnLFxuICAgICAgY29sb3I6ICcjMDAwJyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZDhkOGQ4JyxcbiAgICB9O1xuICAgIGNvbnN0IGRlZmF1bHRTdHlsZSA9IHtcbiAgICAgIHBhZGRpbmc6ICcwLjJlbSAwLjRlbScsXG4gICAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNSUnLFxuICAgICAgbWluV2lkdGg6IDQwLFxuICAgICAgbWFyZ2luTGVmdDogMTBcbiAgICB9O1xuXG4gICAgY29uc3QgYnV0dG9uU3R5bGUgPSBPYmplY3QuYXNzaWduKFxuICAgICAgZGVmYXVsdFN0eWxlLFxuICAgICAgYWN0aXZlID8gYWN0aXZlU3R5bGUgOiBpbmFjdGl2ZVN0eWxlXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIHN0eWxlPXtidXR0b25TdHlsZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDbGljaygpfT5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwb2ludGVyRXZlbnRzOiAnbm9uZScsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJ1dHRvbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvbi5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsdGVyQnV0dG9uIGZyb20gJy4vRmlsdGVyQnV0dG9uJztcbmltcG9ydCBidXR0b25Db25maWcgZnJvbSAnLi9idXR0b25Db25maWcnO1xuaW1wb3J0IHRyYW5zbGF0aW9ucyBmcm9tICcuL2FjdGlvblRyYW5zbGF0aW9ucyc7XG5cbmNsYXNzIEZpbHRlckJ1dHRvblRyYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvY2FsZSwgYWN0aXZlQnV0dG9uSWQsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9PlxuICAgICAgICB7YnV0dG9uQ29uZmlnLmZpZWxkcy5tYXAoZmllbGQgPT5cbiAgICAgICAgICA8RmlsdGVyQnV0dG9uXG4gICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUJ1dHRvbklkID09PSBmaWVsZC5pZH1cbiAgICAgICAgICAgIGlkPXtmaWVsZC5pZH1cbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiB7IG9uQ2hhbmdlKGZpZWxkLmlkKSB9fVxuICAgICAgICAgICAga2V5PXsnZmlsdGVyLWJ1dHRvbi0nICsgZmllbGQuaWR9XG4gICAgICAgICAgICBsYWJlbD17dHJhbnNsYXRpb25zW2xvY2FsZV0uZmlsdGVyQnV0dG9uW2ZpZWxkLmlkXX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCdXR0b25UcmF5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQnV0dG9uVHJheS5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb2xvciwgZGltZW5zaW9uIH0gZnJvbSAnLi4vc3R5bGVzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlclRpbWVsaW5lLmNzcyc7XG5cbmNsYXNzIEhlYWRlclRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBob3ZlclRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRGF5c09mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRnJvbURhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBlZmZlY3RpdmVQZXJpb2RzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93VG9vbHRpcDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlVG9vbFRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZWZmZWN0aXZlUGVyaW9kcywgdmFsaWREYXlzT2Zmc2V0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICBoZWlnaHQ6ICcxOHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgIHdpZHRoOiBkaW1lbnNpb24udGltZUxpbmVXaWR0aCArICclJyxcbiAgICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgZm9udFNpemU6ICcwJScsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH07XG5cbiAgICBsZXQgdGltZWxpbmVXcmFwcGVyID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIG1hcmdpbkJvdHRvbTogMlxuICAgIH07XG5cbiAgICBsZXQgdGltZUJsb2NrID0ge1xuICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVTdWNjZXNzLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGZvbnRTaXplOiAnMC44cmVtJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH07XG5cbiAgICBjb25zdCB0aXRsZVRleHQgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTBweCwgMjBweCknLFxuICAgICAgZm9udFNpemU6ICcxLjJlbScsXG4gICAgICBjb2xvcjogZWZmZWN0aXZlUGVyaW9kcy5sZW5ndGggPyBjb2xvci5lZmZlY3RpdmUgOiBjb2xvci5mYWlsLFxuICAgICAgekluZGV4OiA5OVxuICAgIH07XG5cbiAgICBjb25zdCB0b29sVGlwU3R5bGUgPSB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDFzJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgICBjb2xvcjogY29sb3IuZm9udC50b29sdGlwLFxuICAgICAgYmFja2dyb3VuZDogY29sb3IudG9vbHRpcCxcbiAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgIHpJbmRleDogOTlcbiAgICB9O1xuXG4gICAgY29uc3QgdGV4dFN0eWxlID0ge1xuICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDVweCBibGFjaycsXG4gICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgaGVpZ2h0OiAxOCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJ1xuICAgIH07XG5cbiAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXG4gICAgICB3aWR0aDogJzFweCcsXG4gICAgICBoZWlnaHQ6ICcxOHB4JyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgbWFyZ2luTGVmdDogMzMgKyB2YWxpZERheXNPZmZzZXQgKyAnJSdcbiAgICB9O1xuXG4gICAgbGV0IGhvdmVyVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZHMubGVuZ3RoXG4gICAgICA/IHRoaXMucHJvcHMuaG92ZXJUZXh0XG4gICAgICA6ICdVZ3lsZGlnIGxpbmplLiBNYW5nbGVyIGRhdGEnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lV3JhcHBlcn0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17dGl0bGVUZXh0fVxuICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLmhhbmRsZVRvZ2dsZVRvb2xUaXAuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlVG9nZ2xlVG9vbFRpcC5iaW5kKHRoaXMpfVxuICAgICAgICA+XG4gICAgICAgICAge3RoaXMucHJvcHMubGluZX1cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VG9vbHRpcCAmJlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dG9vbFRpcFN0eWxlfT4ge2hvdmVyVGV4dH0gPC9kaXY+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lbGluZX0gc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgIDxkaXYga2V5PXsndGltZWxpbmUtaGVhZGVyLXdyYXBwZXInICsgdGhpcy5wcm9wcy5pbmRleH0+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtoclN0eWxlfSAvPlxuICAgICAgICAgICAge2VmZmVjdGl2ZVBlcmlvZHMubWFwKChlZmZlY3RpdmVQZXJpb2QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBwZXJpb2RCbG9jayA9IHsgLi4udGltZUJsb2NrIH07XG4gICAgICAgICAgICAgIHBlcmlvZEJsb2NrLndpZHRoID1cbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAtXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArXG4gICAgICAgICAgICAgICAgJyUnO1xuXG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPVxuICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID1cbiAgICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gLVxuICAgICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kc1tpbmRleCAtIDFdLnRpbWVsaW5lRW5kUG9zaXRpb24gK1xuICAgICAgICAgICAgICAgICAgJyUnO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgbGV0IGl0ZW1UZXh0ID0gZWZmZWN0aXZlUGVyaW9kLnRvO1xuXG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID4gMCAmJlxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC5mcm9tLmxvY2FsZUNvbXBhcmUoZWZmZWN0aXZlUGVyaW9kLnRvKSAhPT0gMFxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpdGVtVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZC5mcm9tICsgJyAtICcgKyBlZmZlY3RpdmVQZXJpb2QudG87XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXsndGltZWxpbmUtaGVhZGVyLWJsb2NrJyArIGluZGV4fSBzdHlsZT17cGVyaW9kQmxvY2t9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBlcmlvZC1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbVRleHR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7aXRlbVRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclRpbWVsaW5lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGRpbWVuc2lvbiB9IGZyb20gJy4uL3N0eWxlcyc7XG5cbmNvbnN0IHBlcmlvZCA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGZyb206IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdG86IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdGltZWxpbmVTdGFydFBvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpbWVsaW5lRW5kUG9zaXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZFxufSk7XG5cbmNvbnN0IHRpbWV0YWJsZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIG9iamVjdElkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBlcmlvZHM6IFByb3BUeXBlcy5hcnJheU9mKHBlcmlvZCkuaXNSZXF1aXJlZFxufSkuaXNSZXF1aXJlZDtcblxuY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHRpbWV0YWJsZXM6IFByb3BUeXBlcy5hcnJheU9mKHRpbWV0YWJsZSkuaXNSZXF1aXJlZCxcbiAgICBpc0xhc3Q6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgdmFsaWREYXlzT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0aW1ldGFibGVzLCB2YWxpZERheXNPZmZzZXQsIGlzTGFzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRpbWVsaW5lU3R5bGUgPSB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVCYWNrZ3JvdW5kLFxuICAgICAgd2lkdGg6IGRpbWVuc2lvbi50aW1lTGluZVdpZHRoICsgJyUnLFxuICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH07XG5cbiAgICBjb25zdCB0aW1lbGluZVdyYXBwZXIgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgcGFkZGluZ0JvdHRvbTogaXNMYXN0ID8gMCA6IDEwXG4gICAgfTtcblxuICAgIGxldCB0aW1lQmxvY2sgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUJsb2NrQmFja2dyb3VuZCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICB9O1xuXG4gICAgbGV0IHRleHRTdHlsZSA9IHtcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgb3ZlcmZsb3c6ICd2aXNibGUnLFxuICAgICAgdGV4dFNoYWRvdzogJzBweCAwcHggNXB4IGJsYWNrJyxcbiAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBtYXJnaW46ICdhdXRvIDEwcHgnLFxuICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgIGZvbnRTaXplOiAnMC43ZW0nLFxuICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgfTtcblxuICAgIGxldCBoclN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9O1xuXG4gICAgaHJTdHlsZS5tYXJnaW5MZWZ0ID0gMzMgKyB2YWxpZERheXNPZmZzZXQgKyAnJSc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVXcmFwcGVyfT5cbiAgICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVTdHlsZX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17aHJTdHlsZX0gLz5cbiAgICAgICAgICB7dGltZXRhYmxlcy5tYXAodGltZXRhYmxlID0+XG4gICAgICAgICAgICB0aW1ldGFibGUucGVyaW9kcy5tYXAoKHBlcmlvZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aW1ldGFibGUub2JqZWN0SWQ7XG4gICAgICAgICAgICAgIGNvbnN0IGhvdmVyID0gYCR7dGl0bGV9IFxcbihwZXJpb2Q6ICR7cGVyaW9kLmZyb219IC0+ICR7cGVyaW9kLnRvfSlgO1xuICAgICAgICAgICAgICBsZXQgcGVyaW9kQmxvY2sgPSB7IC4uLnRpbWVCbG9jayB9O1xuICAgICAgICAgICAgICBwZXJpb2RCbG9jay53aWR0aCA9XG4gICAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gLSBwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICsgJyUnO1xuICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID0gcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJztcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBrZXk9eyd0aW1ldGFibGUtcGVyaW9kLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3BlcmlvZEJsb2NrfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aG92ZXJ9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRTdHlsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybCgvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Vhcmx5YWNjZXNzL25vdG9zYW5za2FubmFkYS5jc3MpO1wiLCBcIlwiXSk7XG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEthbm5hZGEnLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogIzE5MTkxOTtcXG59XFxuXFxucCxoMSxoMixoMyxoNCxoNSwgc3BhbiB7XFxuICAgIGNvbG9yOiAjMTkxOTE5O1xcbn1cXG5cXG4uXzJwT1pUNk9Fd1Iydl9jaTcyVzRrb0I6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi5tU0dLVmxtY1dFU2J4RUhyN0JhejIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLl8xaDlBRy1WV3hfVTQwVHhWRTAxNTVLIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDNweDtcXG4gICAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLl8xak4tTjd5ZlNLWWgxS1V6cmFzNGxaIHtcXG4gICAgY29sb3I6ICMwRDNDNjE7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4uXzIxcDU1Vk1fZTc1XzJpQmlyVzFNa2Yge1xcbiAgICBjb2xvcjogIzIxOTZGMztcXG59XFxuXFxuXFxuYSB7XFxuICAgIGNvbG9yOiAjMjE5NkYzO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbmE6aG92ZXIsIGE6Zm9jdXMge1xcbiAgICBjb2xvcjogIzE5NzZEMjtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwicGVyaW9kLWJsb2NrXCI6IFwiXzJwT1pUNk9Fd1Iydl9jaTcyVzRrb0JcIixcblx0XCJwYWdlLWxpbmstcGFyZW50XCI6IFwibVNHS1ZsbWNXRVNieEVIcjdCYXoyXCIsXG5cdFwicGFnZS1saW5rXCI6IFwiXzFoOUFHLVZXeF9VNDBUeFZFMDE1NUtcIixcblx0XCJhY3RpdmUtbGlua1wiOiBcIl8xak4tTjd5ZlNLWWgxS1V6cmFzNGxaXCIsXG5cdFwiaW5hY3RpdmUtbGlua1wiOiBcIl8yMXA1NVZNX2U3NV8yaUJpclcxTWtmXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/bW9kdWxlcz10cnVlIS4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uXzJ0VS1mODZmXzQyZzFwVlZRWlhGWEMge1xcbiAgYmFja2dyb3VuZDogI0I5MTkxOTtcXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBjb2xvci1zdG9wKDAlLCAjQjkxOTE5KSwgY29sb3Itc3RvcCg2NiUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI2Y2ZjZmNiksIGNvbG9yLXN0b3AoMTAwJSwgI2Y2ZjZmNikpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgI0I5MTkxOSksIGNvbG9yLXN0b3AoNjYlLCAjQjkxOTE5KSwgY29sb3Itc3RvcCg2NiUsICNmNmY2ZjYpLCBjb2xvci1zdG9wKDEwMCUsICNmNmY2ZjYpKTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwidGltZWxpbmVcIjogXCJfMnRVLWY4NmZfNDJnMXBWVlFaWEZYQ1wiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP21vZHVsZXM9dHJ1ZSEuL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmNzc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2VtcHR5RnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpO1xuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgKyAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KSk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZmJqcy9saWIvaW52YXJpYW50LmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGVtcHR5RnVuY3Rpb24gPSByZXF1aXJlKCdmYmpzL2xpYi9lbXB0eUZ1bmN0aW9uJyk7XG52YXIgaW52YXJpYW50ID0gcmVxdWlyZSgnZmJqcy9saWIvaW52YXJpYW50Jyk7XG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaW52YXJpYW50KFxuICAgICAgZmFsc2UsXG4gICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAnVXNlIFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICApO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbVxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gZW1wdHlGdW5jdGlvbjtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiZcbiAgICBTeW1ib2wuZm9yICYmXG4gICAgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpKSB8fFxuICAgIDB4ZWFjNztcblxuICB2YXIgaXNWYWxpZEVsZW1lbnQgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgIG9iamVjdCAhPT0gbnVsbCAmJlxuICAgICAgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH07XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFDaGV2cm9uRG93biA9IGZ1bmN0aW9uIEZhQ2hldnJvbkRvd24ocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMzcuNiAxOGwtMTYuNiAxNi42cS0wLjQgMC40LTEgMC40dC0xLTAuNGwtMTYuNi0xNi42cS0wLjQtMC40LTAuNC0xdDAuNC0xbDMuNy0zLjdxMC41LTAuNCAxLTAuNHQxIDAuNGwxMS45IDExLjkgMTEuOS0xMS45cTAuNC0wLjQgMS0wLjR0MSAwLjRsMy43IDMuN3EwLjQgMC40IDAuNCAxdC0wLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDaGV2cm9uRG93bjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvZmEvY2hldnJvbi1kb3duLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFDaGV2cm9uVXAgPSBmdW5jdGlvbiBGYUNoZXZyb25VcChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zNy42IDI5LjdsLTMuNyAzLjdxLTAuNSAwLjQtMSAwLjR0LTEtMC40bC0xMS45LTExLjktMTEuOCAxMS45cS0wLjUgMC40LTEuMSAwLjR0LTEtMC40bC0zLjctMy43cS0wLjQtMC40LTAuNC0xdDAuNC0xbDE2LjYtMTYuNnEwLjQtMC40IDEtMC40dDEgMC40bDE2LjYgMTYuNnEwLjQgMC40IDAuNCAxdC0wLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDaGV2cm9uVXA7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tdXAuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUNvZyA9IGZ1bmN0aW9uIEZhQ29nKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTI1LjkgMjBxMC0yLjQtMS43LTR0LTQuMS0xLjctNCAxLjctMS43IDQgMS43IDQgNCAxLjcgNC4xLTEuNyAxLjctNHogbTExLjQtMi40djQuOXEwIDAuMy0wLjIgMC41dC0wLjQgMC4zbC00LjIgMC42cS0wLjQgMS4zLTAuOCAyLjEgMC43IDEuMSAyLjMgMy4xIDAuMyAwLjIgMC4zIDAuNXQtMC4yIDAuNXEtMC42IDAuOS0yLjIgMi40dC0yLjEgMS42cS0wLjMgMC0wLjYtMC4ybC0zLjEtMi40cS0xIDAuNS0yIDAuOS0wLjQgMy0wLjcgNC4xLTAuMSAwLjYtMC44IDAuNmgtNC45cS0wLjMgMC0wLjYtMC4xdC0wLjItMC41bC0wLjctNC4xcS0xLjEtMC40LTItMC45bC0zLjEgMi40cS0wLjIgMC4yLTAuNiAwLjItMC4zIDAtMC41LTAuMi0yLjgtMi42LTMuNy0zLjgtMC4yLTAuMi0wLjItMC41IDAtMC4yIDAuMi0wLjUgMC4zLTAuNSAxLjEtMS41dDEuMi0xLjVxLTAuNi0xLjItMC45LTIuM2wtNC4xLTAuNnEtMC4yIDAtMC40LTAuMnQtMC4yLTAuNnYtNC45cTAtMC4zIDAuMi0wLjV0MC40LTAuM2w0LjItMC43cTAuMy0xIDAuOC0yLTAuOS0xLjMtMi40LTMuMS0wLjItMC4zLTAuMi0wLjUgMC0wLjIgMC4yLTAuNSAwLjYtMC44IDIuMi0yLjR0Mi4xLTEuNnEwLjMgMCAwLjYgMC4ybDMuMSAyLjRxMS0wLjUgMi0wLjkgMC40LTMgMC43LTQuMSAwLjEtMC42IDAuOC0wLjZoNC45cTAuMyAwIDAuNiAwLjF0MC4yIDAuNWwwLjcgNC4xcTEgMC40IDIgMC45bDMuMS0yLjRxMC4yLTAuMiAwLjYtMC4yIDAuMyAwIDAuNSAwLjIgMi45IDIuNiAzLjcgMy44IDAuMiAwLjIgMC4yIDAuNSAwIDAuMi0wLjIgMC41LTAuNCAwLjUtMS4yIDEuNXQtMS4yIDEuNXEwLjYgMS4yIDEgMi4ybDQgMC43cTAuMyAwIDAuNSAwLjJ0MC4yIDAuNnonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDb2c7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NvZy5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZhUmVmcmVzaCA9IGZ1bmN0aW9uIEZhUmVmcmVzaChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zNi43IDIzLjZxMCAwLjEgMCAwLjEtMS40IDYtNiA5Ljd0LTEwLjYgMy43cS0zLjMgMC02LjQtMS4ydC01LjQtMy41bC0yLjkgMi45cS0wLjQgMC40LTEgMC40dC0xLTAuNC0wLjQtMXYtMTBxMC0wLjYgMC40LTF0MS0wLjRoMTBxMC42IDAgMSAwLjR0MC41IDEtMC41IDFsLTMgM3ExLjYgMS41IDMuNiAyLjN0NC4xIDAuOHEzIDAgNS42LTEuNHQ0LjItNHEwLjItMC40IDEuMi0yLjYgMC4xLTAuNSAwLjYtMC41aDQuM3EwLjMgMCAwLjUgMC4ydDAuMiAwLjV6IG0wLjYtMTcuOXYxMHEwIDAuNi0wLjQgMXQtMSAwLjRoLTEwcS0wLjYgMC0xLTAuNHQtMC41LTEgMC41LTFsMy0zLjFxLTMuMy0zLTcuOC0zLTIuOSAwLTUuNSAxLjR0LTQuMiA0cS0wLjIgMC40LTEuMiAyLjYtMC4yIDAuNS0wLjYgMC41aC00LjVxLTAuMyAwLTAuNS0wLjJ0LTAuMi0wLjV2LTAuMXExLjUtNiA2LTkuN3QxMC43LTMuN3EzLjMgMCA2LjQgMS4ydDUuNCAzLjVsMy0yLjlxMC40LTAuNCAxLTAuNHQxIDAuNCAwLjQgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFSZWZyZXNoO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRDaGVja0NpcmNsZSA9IGZ1bmN0aW9uIE1kQ2hlY2tDaXJjbGUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMTYuNiAyOC40bDE1LTE1LTIuMy0yLjUtMTIuNyAxMi43LTUuOS01LjktMi4zIDIuM3ogbTMuNC0yNWM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZENoZWNrQ2lyY2xlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9jaGVjay1jaXJjbGUuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZEVycm9yID0gZnVuY3Rpb24gTWRFcnJvcihwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMS42IDIxLjZ2LTEwaC0zLjJ2MTBoMy4yeiBtMCA2Ljh2LTMuNGgtMy4ydjMuNGgzLjJ6IG0tMS42LTI1YzkuMiAwIDE2LjYgNy40IDE2LjYgMTYuNnMtNy40IDE2LjYtMTYuNiAxNi42LTE2LjYtNy40LTE2LjYtMTYuNiA3LjQtMTYuNiAxNi42LTE2LjZ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kRXJyb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2Vycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRIZWxwT3V0bGluZSA9IGZ1bmN0aW9uIE1kSGVscE91dGxpbmUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMjAgMTBjMy43IDAgNi42IDMgNi42IDYuNiAwIDQuMi01IDQuNy01IDguNGgtMy4yYzAtNS40IDUtNSA1LTguNCAwLTEuOC0xLjYtMy4yLTMuNC0zLjJzLTMuNCAxLjQtMy40IDMuMmgtMy4yYzAtMy42IDIuOS02LjYgNi42LTYuNnogbTAgMjMuNGM3LjMgMCAxMy40LTYuMSAxMy40LTEzLjRzLTYuMS0xMy40LTEzLjQtMTMuNC0xMy40IDYuMS0xMy40IDEzLjQgNi4xIDEzLjQgMTMuNCAxMy40eiBtMC0zMGM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eiBtLTEuNiAyNi42di0zLjRoMy4ydjMuNGgtMy4yeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZEhlbHBPdXRsaW5lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9oZWxwLW91dGxpbmUuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZEhvdXJnbGFzc0VtcHR5ID0gZnVuY3Rpb24gTWRIb3VyZ2xhc3NFbXB0eShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMCAxOS4xbDYuNi02LjZ2LTUuOWgtMTMuMnY1Ljl6IG02LjYgOC40bC02LjYtNi42LTYuNiA2LjZ2NS45aDEzLjJ2LTUuOXogbS0xNi42LTI0LjFoMjB2MTBsLTYuNiA2LjYgNi42IDYuNnYxMGgtMjB2LTEwbDYuNi02LjYtNi42LTYuNnYtMTB6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kSG91cmdsYXNzRW1wdHk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL21kL2hvdXJnbGFzcy1lbXB0eS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kU2NoZWR1bGUgPSBmdW5jdGlvbiBNZFNjaGVkdWxlKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIwLjkgMTEuNnY4LjhsNy41IDQuNC0xLjMgMi4yLTguNy01LjR2LTEwaDIuNXogbS0wLjkgMjEuOGM3LjMgMCAxMy40LTYuMSAxMy40LTEzLjRzLTYuMS0xMy40LTEzLjQtMTMuNC0xMy40IDYuMS0xMy40IDEzLjQgNi4xIDEzLjQgMTMuNCAxMy40eiBtMC0zMGM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZFNjaGVkdWxlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9zY2hlZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2ZpeFVybHMuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9FdmVudERldGFpbHMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0V2ZW50RGV0YWlscy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0V2ZW50RGV0YWlscy5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0hlYWRlclRpbWVsaW5lLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9IZWFkZXJUaW1lbGluZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP21vZHVsZXM9dHJ1ZSEuL0hlYWRlclRpbWVsaW5lLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=