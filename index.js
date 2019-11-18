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
  },
  "fr": {
    text: {
      FILE_TRANSFER: "Transfert de fichiers",
      FILE_CLASSIFICATION: "Classification de fichiers",
      FILE_DELIVERY: 'Format de fichier',
      IMPORT: "Import",
      EXPORT: "GTFS export",
      EXPORT_NETEX: "NeTEx export",
      VALIDATION_LEVEL_1: "Validation niveau 1",
      DATASPACE_TRANSFER: "Transfert vers l'espace de données principal",
      VALIDATION_LEVEL_2: "Validation niveau 2",
      BUILD_GRAPH: "Construire le graphe",
      UNKNOWN: "Etape inconnue"
    },
    title: {
      FILE_TRANSFER: "Envoyer un fichier local vers le serveur distant",
      IMPORT: "Validation de fichier et import dans l'espace de données local - niveau 1",
      EXPORT: "Export des données topologiques ",
      VALIDATION_LEVEL_1: "Validation de l'espace de données complet - niveau 1",
      VALIDATION_LEVEL_2: "Validation de l'espace de données complet - niveau 2",
      DATASPACE_TRANSFER: "Transfer vers l'espace de données principal - niveau 2",
      BUILD_GRAPH: "Construire le graphe",
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
    filter_direct_delivery: "Only started with file delivery",
    description: "Description",
    user: "User",
    file_type: "Format"
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
    filter_direct_delivery: "Kun startet ved filleveranse",
    description: "Description",
    user: "User",
    file_type: "Format"
  },
  "fr": {
    page: 'Page: ',
    no_status: 'Aucun résultat avec ces critères',
    started: 'Date',
    ended: 'Terminé',
    duration: 'Durée: ',
    show_all: 'Montrer tous',
    show_only_failed: 'Montrer seulement les échecs',
    show_only_success: 'Monter seulement les succès',
    show_only_cancelled: "Montrer seulement les anuulés",
    filter_direct_delivery: "Filtrer seulement ceux avec livraison de fichier",
    description: "Description",
    user: "Utilisateur",
    file_type: "Format"
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

  var baseURL = window.config.chouetteBaseUrl + "#";

  var actionMap = {
    "importer": "e-iti/imports/" + referential + "/" + id,
    "exporter": "open-iti/exports/" + referential + "/" + id,
    "validator": "e-iti/imports/" + referential + "/" + id
  };
  var URL = baseURL + "/" + actionMap[action];

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
      return ['FILE_TRANSFER', 'FILE_CLASSIFICATION', 'FILE_DELIVERY', 'IMPORT', 'VALIDATION_LEVEL_1', 'DATASPACE_TRANSFER', 'VALIDATION_LEVEL_2', 'EXPORT',
      // 'BUILD_GRAPH',
      'EXPORT_NETEX'];
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
          { style: { display: 'flex', marginLeft: -15, alignItems: 'baseline' } },
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
              _translations2.default[locale].user
            ),
            listItem.username
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { style: { fontWeight: 600, marginRight: 10 } },
              _translations2.default[locale].description
            ),
            listItem.description
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { style: { fontWeight: 600, marginRight: 10 } },
              _translations2.default[locale].file_type
            ),
            listItem.type
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              { style: { fontWeight: 600, marginRight: 10 } },
              _translations2.default[locale].started
            ),
            listItem.firstEvent
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5ODlhMzYzZDYxMGRlN2I2YjE3ZiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjdGlvblRyYW5zbGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9idXR0b25Db25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHJhbnNsYXRpb25zLmpzIiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Nob3VldHRlTGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250cm9sbGVkQ2hvdWV0dGVMaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudFN0YXR1c0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnRTdGVwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCdXR0b25UcmF5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzIiwid2VicGFjazovLy8uL34vZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2ZianMvbGliL2ludmFyaWFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzIiwid2VicGFjazovLy8uL34vcHJvcC10eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLXVwLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NvZy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoLmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL2NoZWNrLWNpcmNsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9lcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWljb25zL2xpYi9tZC9oZWxwLW91dGxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1pY29ucy9saWIvbWQvaG91cmdsYXNzLWVtcHR5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3QtaWNvbnMvbGliL21kL3NjaGVkdWxlLmpzIiwid2VicGFjazovLy8uL34vc3R5bGUtbG9hZGVyL2ZpeFVybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXZlbnREZXRhaWxzLmNzcz81Y2MxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmNzcz8yNzdhIl0sIm5hbWVzIjpbImNvbG9yRGVmIiwiYmxhY2siLCJ3aGl0ZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImJpZ2JsdWUiLCJkYXJrQmx1ZSIsImRhcmtHcmV5IiwiZ3JleSIsImxpZ2h0R3JleSIsImVudHVyIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImNvbG9yIiwiZm9udCIsImludmVyc2UiLCJ0aXRsZSIsImluZm8xIiwiaW5mbzIiLCJpbmZvMyIsIndhcm4iLCJkaXNhYmxlZCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiZWZmZWN0aXZlIiwiZmFpbCIsIm1vZGFsIiwiYmFja2Ryb3AiLCJ0YWJBY3RpdmUiLCJ0aW1lTGluZUJhY2tncm91bmQiLCJ0aW1lTGluZUJsb2NrQmFja2dyb3VuZCIsInRpbWVMaW5lQm9yZGVyIiwidGltZUxpbmVTdWNjZXNzIiwidGltZUxpbmVGYWlsIiwidGFibGVIZWFkZXIiLCJ0YWJsZVJvdyIsInRhYmxlSW5mbyIsInZhbGlkIiwiaW52YWxpZCIsImV4cGlyaW5nIiwiaGlnaGxpZ2h0IiwiZGltZW5zaW9uIiwidGltZUxpbmVXaWR0aCIsInN0eWxlcyIsIm5iIiwidGV4dCIsIkZJTEVfVFJBTlNGRVIiLCJGSUxFX0NMQVNTSUZJQ0FUSU9OIiwiRklMRV9ERUxJVkVSWSIsIklNUE9SVCIsIkVYUE9SVCIsIkVYUE9SVF9ORVRFWCIsIlZBTElEQVRJT05fTEVWRUxfMSIsIkRBVEFTUEFDRV9UUkFOU0ZFUiIsIlZBTElEQVRJT05fTEVWRUxfMiIsIkJVSUxEX0dSQVBIIiwiVU5LTk9XTiIsImZpbGVuYW1lIiwidW5kZWZpbmVkIiwic3RhdGVzIiwiT0siLCJQRU5ESU5HIiwiU1RBUlRFRCIsIkZBSUxFRCIsIkRVUExJQ0FURSIsIklHTk9SRUQiLCJDQU5DRUxMRUQiLCJUSU1FT1VUIiwiZXJyb3JNZXNzYWdlIiwiZmlsdGVyQnV0dG9uIiwiQUxMX1RJTUUiLCJMQVNUXzEyX0hPVVJTIiwiTEFTVF8yNF9IT1VSUyIsIkxBU1RfV0VFSyIsIkxBU1RfTU9OVEgiLCJlbiIsImJ1dHRvbkNvbmZpZyIsImZpZWxkcyIsImlkIiwiZ2V0TGFzdFZhbGlkRGF0ZSIsIm5vdyIsIkRhdGUiLCJzZXRNb250aCIsImdldE1vbnRoIiwic2V0RGF0ZSIsImdldERhdGUiLCJzZXRIb3VycyIsImdldEhvdXJzIiwicGFnZSIsIm5vX3N0YXR1cyIsInN0YXJ0ZWQiLCJlbmRlZCIsImR1cmF0aW9uIiwic2hvd19hbGwiLCJzaG93X29ubHlfZmFpbGVkIiwic2hvd19vbmx5X3N1Y2Nlc3MiLCJzaG93X29ubHlfY2FuY2VsbGVkIiwiZmlsdGVyX2RpcmVjdF9kZWxpdmVyeSIsImRlc2NyaXB0aW9uIiwidXNlciIsImZpbGVfdHlwZSIsIlRpbWVsaW5lIiwiSGVhZGVyVGltZWxpbmUiLCJFdmVudERldGFpbHMiLCJDaG91ZXR0ZUxpbmsiLCJhY3Rpb24iLCJyZWZlcmVudGlhbCIsImNoaWxkcmVuIiwiYmFzZVVSTCIsIndpbmRvdyIsImNvbmZpZyIsImNob3VldHRlQmFzZVVybCIsImFjdGlvbk1hcCIsIlVSTCIsIkNvbnRyb2xsZWRDaG91ZXR0ZUxpbmsiLCJldmVudHMiLCJpbmNsdWRlTGV2ZWwyIiwic3VwcG9ydGVkQWN0aW9ucyIsImNob3VldHRlTWFwIiwicHVzaCIsImxlbmd0aCIsImVuZFN0YXRlIiwiaW5kZXhPZiIsImNob3VldHRlSm9iSWQiLCJwcm9wcyIsInN0YXRlIiwiYWN0aXZlUGFnZUluZGV4IiwiZW5kU3RhdGVGaWx0ZXIiLCJkYXRlRmlsdGVyIiwic2hvd0RhdGVGaWx0ZXIiLCJvbmx5TmV3RGVsaXZlcnlGaWx0ZXIiLCJlIiwicGFnZUluZGV4IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImRhdGFTb3VyY2UiLCJsYXN0RGF0ZSIsImZpbHRlciIsImFwcGxpZWRGaWx0ZXIiLCJmaWx0ZXJCeVBlcmlvZCIsImV2ZW50IiwiZmlyc3RFdmVudCIsImVuZFN0YXRlRmlsdGVyQXBwbGllZCIsImZpbHRlckJ5RW5kU3RhdGUiLCJjb250YWluc0V2ZW50cyIsIkFycmF5IiwiaXNBcnJheSIsImZpbHRlckJ5TmV3RGVsaXZlcnkiLCJldmVyeSIsImxvY2FsZSIsInNob3dOZXdEZWxpdmVyaWVzRmlsdGVyIiwiZmlsdGVyZWRTb3VyY2UiLCJnZXRGaWx0ZXJlZFNvdXJjZSIsInBhZ2luYXRpb25NYXAiLCJnZXRQYWdpbmF0aW9uTWFwIiwiZmlsdGVycyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiZm9udFNpemUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyYW5zbGF0aW9ucyIsIm1hcmdpbkxlZnQiLCJoYW5kbGVGaWx0ZXJDaGFuZ2UiLCJiaW5kIiwicGFkZGluZ1RvcCIsIm1hcmdpbiIsImNoZWNrZWQiLCJyZWZyZXNoQnV0dG9uIiwiaGFuZGxlUmVmcmVzaCIsIm1hcmdpblJpZ2h0IiwiZmxvYXQiLCJjdXJzb3IiLCJ0cmFuc2Zvcm0iLCJ3aWR0aCIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImluZGV4IiwiaXNBY3RpdmUiLCJoYW5kbGVQYWdlQ2xpY2siLCJsaXN0SXRlbSIsImV2ZW50R3JvdXAiLCJmb3JFYWNoIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImZvbnRXZWlnaHQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInN0YXR1c0xpc3QiLCJpIiwiaiIsInNsaWNlIiwiRXZlbnRTdGF0dXNJY29uIiwiaGVpZ2h0IiwiRXZlbnRTdGVwcGVyIiwiZXhwYW5kZWQiLCJncm91cHMiLCJldmVudFN0YXRlcyIsImdyb3Vwc1dpdGhVbmxpc3RlZCIsIk9iamVjdCIsImFzc2lnbiIsImZpcnN0U3RhdGVGb3VuZCIsIm1pc3NpbmdCZWZvcmVTdGFydFN0YXJ0IiwiZmluYWxHcm91cHMiLCJrZXlzIiwic29ydCIsImtleTEiLCJrZXkyIiwia2V5IiwiZm9ybWF0dGVkR3JvdXBzIiwibmFtZSIsImNvbWJpbmVkIiwiZ3JvdXAiLCJkYXRhIiwiZXJyb3JPbiIsImNvbHVtblN0eWxlIiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiY29sdW1uIiwicmVuZGVyRXZlbnQiLCJpc0ZpcnN0IiwiY29sdW1uSW5kZXgiLCJncm91cFN0eWxlIiwiZ3JvdXBUZXh0IiwibGlua1N0eWxlIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJUb3BTdHlsZSIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwiQWN0aW9uVHJhbnNsYXRpb25zIiwidG9vbFRpcFRleHQiLCJkYXRlIiwib3BhY2l0eSIsInN0ZXBwZXJzdHlsZSIsImFsaWduQ29udGVudCIsImFkZFVubGlzdGVkU3RhdGVzIiwiYWdncmVnZ2F0ZUZpbGVFdmVudHMiLCJjcmVhdGVDb21iaW5lZFNwbGl0IiwiYnVsbGV0cyIsImJ1bGxldCIsImhhbmRsZVRvZ2dsZVZpc2liaWxpdHkiLCJwcm92aWRlciIsImZsZXgiLCJmaWxlTmFtZSIsInN0b3BQcm9wYWdhdGlvbiIsInVzZXJuYW1lIiwidHlwZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJGaWx0ZXJCdXR0b24iLCJoYW5kbGVDbGljayIsImxhYmVsIiwiYWN0aXZlIiwiYWN0aXZlU3R5bGUiLCJpbmFjdGl2ZVN0eWxlIiwiZGVmYXVsdFN0eWxlIiwibWluV2lkdGgiLCJidXR0b25TdHlsZSIsInBvaW50ZXJFdmVudHMiLCJGaWx0ZXJCdXR0b25UcmF5IiwiYWN0aXZlQnV0dG9uSWQiLCJvbkNoYW5nZSIsInN0eWxlIiwiZmllbGQiLCJzaG93VG9vbHRpcCIsImVmZmVjdGl2ZVBlcmlvZHMiLCJ2YWxpZERheXNPZmZzZXQiLCJ0aW1lbGluZVN0eWxlIiwibGluZUhlaWdodCIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJ0aW1lbGluZVdyYXBwZXIiLCJ0aW1lQmxvY2siLCJ0aXRsZVRleHQiLCJ6SW5kZXgiLCJ0b29sVGlwU3R5bGUiLCJ0cmFuc2l0aW9uIiwidGV4dFN0eWxlIiwidGV4dFNoYWRvdyIsIndoaXRlU3BhY2UiLCJ0ZXh0T3ZlcmZsb3ciLCJoclN0eWxlIiwiaG92ZXJUZXh0IiwiaGFuZGxlVG9nZ2xlVG9vbFRpcCIsImxpbmUiLCJ0aW1lbGluZSIsImVmZmVjdGl2ZVBlcmlvZCIsInBlcmlvZEJsb2NrIiwidGltZWxpbmVFbmRQb3NpdGlvbiIsInRpbWVsaW5lU3RhcnRQb3NpdGlvbiIsIml0ZW1UZXh0IiwidG8iLCJmcm9tIiwibG9jYWxlQ29tcGFyZSIsInZlcnRpY2FsQWxpZ24iLCJzdHJpbmciLCJudW1iZXIiLCJ2YWxpZEZyb21EYXRlIiwiYXJyYXkiLCJwZXJpb2QiLCJzaGFwZSIsInRpbWV0YWJsZSIsIm9iamVjdElkIiwicGVyaW9kcyIsImFycmF5T2YiLCJ0aW1ldGFibGVzIiwiaXNMYXN0Iiwib3ZlcmZsb3dZIiwicGFkZGluZ0JvdHRvbSIsImhvdmVyIiwiYm9vbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSwrQzs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDM5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5ODlhMzYzZDYxMGRlN2I2YjE3ZiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBJY29uQmFzZSA9IGZ1bmN0aW9uIEljb25CYXNlKF9yZWYsIF9yZWYyKSB7XG4gIHZhciBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBjb2xvciA9IF9yZWYuY29sb3I7XG4gIHZhciBzaXplID0gX3JlZi5zaXplO1xuICB2YXIgc3R5bGUgPSBfcmVmLnN0eWxlO1xuICB2YXIgd2lkdGggPSBfcmVmLndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gX3JlZi5oZWlnaHQ7XG5cbiAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFsnY2hpbGRyZW4nLCAnY29sb3InLCAnc2l6ZScsICdzdHlsZScsICd3aWR0aCcsICdoZWlnaHQnXSk7XG5cbiAgdmFyIF9yZWYyJHJlYWN0SWNvbkJhc2UgPSBfcmVmMi5yZWFjdEljb25CYXNlO1xuICB2YXIgcmVhY3RJY29uQmFzZSA9IF9yZWYyJHJlYWN0SWNvbkJhc2UgPT09IHVuZGVmaW5lZCA/IHt9IDogX3JlZjIkcmVhY3RJY29uQmFzZTtcblxuICB2YXIgY29tcHV0ZWRTaXplID0gc2l6ZSB8fCByZWFjdEljb25CYXNlLnNpemUgfHwgJzFlbSc7XG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnc3ZnJywgX2V4dGVuZHMoe1xuICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICBmaWxsOiAnY3VycmVudENvbG9yJyxcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgbWVldCcsXG4gICAgaGVpZ2h0OiBoZWlnaHQgfHwgY29tcHV0ZWRTaXplLFxuICAgIHdpZHRoOiB3aWR0aCB8fCBjb21wdXRlZFNpemVcbiAgfSwgcmVhY3RJY29uQmFzZSwgcHJvcHMsIHtcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBjb2xvcjogY29sb3IgfHwgcmVhY3RJY29uQmFzZS5jb2xvclxuICAgIH0sIHJlYWN0SWNvbkJhc2Uuc3R5bGUgfHwge30sIHN0eWxlKVxuICB9KSk7XG59O1xuXG5JY29uQmFzZS5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgc2l6ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICB3aWR0aDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgc3R5bGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0XG59O1xuXG5JY29uQmFzZS5jb250ZXh0VHlwZXMgPSB7XG4gIHJlYWN0SWNvbkJhc2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc2hhcGUoSWNvbkJhc2UucHJvcFR5cGVzKVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSWNvbkJhc2U7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbmNvbnN0IGNvbG9yRGVmID0ge1xuICBibGFjazogJyMwMDAnLFxuICB3aGl0ZTogJyNGRkYnLFxuICByZWQ6ICcjRjAwJyxcbiAgZ3JlZW46ICcjMEYwJyxcbiAgYmx1ZTogJyMwMEYnLFxuICBiaWdibHVlOiAnIzExNjlBNycsXG4gIGRhcmtCbHVlOiAnIzA4MzQ1MycsXG4gIGRhcmtHcmV5OiAnIzJGMkYyRicsXG4gIGdyZXk6ICcjREREREREJyxcbiAgbGlnaHRHcmV5OiAnI0YyRjJGMicsXG4gIGVudHVyOiB7XG4gICAgcHJpbWFyeTogJyMyNzNBNDYnLCAgIC8vIDM5LDU4LDcwXG4gICAgc2Vjb25kYXJ5OiAnIzZCQkRDMicsIC8vMTA3LDE4OSwxOTQsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbG9yID0ge1xuICBmb250OiB7XG4gICAgaW52ZXJzZTogY29sb3JEZWYud2hpdGUsXG4gICAgdGl0bGU6IGNvbG9yRGVmLmJsYWNrLFxuICAgIGluZm8xOiBjb2xvckRlZi5lbnR1ci5zZWNvbmRhcnksXG4gICAgaW5mbzI6IGNvbG9yRGVmLmRhcmtCbHVlLFxuICAgIGluZm8zOiBjb2xvckRlZi5ibGFjayxcbiAgICB3YXJuOiBjb2xvckRlZi5yZWQsXG4gICAgZGlzYWJsZWQ6IGNvbG9yRGVmLmdyZXksXG5cbiAgICB0b29sdGlwOiBjb2xvckRlZi53aGl0ZSxcbiAgfSxcbiAgYmFja2dyb3VuZDogY29sb3JEZWYuZW50dXIucHJpbWFyeSxcbiAgYm9yZGVyOiBjb2xvckRlZi5ibGFjayxcbiAgZWZmZWN0aXZlOiBjb2xvckRlZi5ibGFjayxcbiAgZmFpbDogY29sb3JEZWYucmVkLFxuICBtb2RhbDogY29sb3JEZWYud2hpdGUsXG4gIGJhY2tkcm9wOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcbiAgdG9vbHRpcDogJyMxOTE5MTknLFxuICB0YWJBY3RpdmU6IGNvbG9yRGVmLmVudHVyLnNlY29uZGFyeSxcblxuICB0aW1lTGluZUJhY2tncm91bmQ6ICcjREVEOEQ4JyxcbiAgdGltZUxpbmVCbG9ja0JhY2tncm91bmQ6ICcjNkQ5MkI2JyxcbiAgdGltZUxpbmVCb3JkZXI6ICcjZWVlJyxcbiAgdGltZUxpbmVTdWNjZXNzOiAnIzVEQUU1RCcsXG4gIHRpbWVMaW5lRmFpbDogJyNCOTE5MTknLFxuICB0YWJsZUhlYWRlcjogY29sb3JEZWYubGlnaHRHcmV5LFxuICB0YWJsZVJvdzogJyNlYmYyZjEnLFxuICB0YWJsZUluZm86ICcjZmZmZmRiJyxcblxuICB2YWxpZDogJyMzM2MxNDYnLFxuICBpbnZhbGlkOiAnI2IyMDAwMCcsXG4gIGV4cGlyaW5nOiAnI0ZGQUEwMCcsXG4gIGhpZ2hsaWdodCA6IHtcbiAgICB2YWxpZDogJyM0Y2FmNTAnLFxuICAgIGV4cGlyaW5nOiAnI0ZGQjYwQScsXG4gICAgaW52YWxpZDogJyNjYzAwMDAnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkaW1lbnNpb24gPSB7XG4gIHRpbWVMaW5lV2lkdGg6IDg1LFxufVxuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICBjb2xvcjogY29sb3IsXG4gIGRpbWVuc2lvbjogZGltZW5zaW9uLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlcy9pbmRleC5qcyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgbmI6IHtcbiAgICB0ZXh0OiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmlsb3ZlcmbDuHJpbmcnLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZpbGtsYXNzaWZpc2VyaW5nJyxcbiAgICAgIEZJTEVfREVMSVZFUlk6ICdGaWxsZXZlcmFuc2UnLFxuICAgICAgSU1QT1JUOiAnSW1wb3J0JyxcbiAgICAgIEVYUE9SVDogJ0dURlMtZWtzcG9ydCcsXG4gICAgICBFWFBPUlRfTkVURVg6ICdOZVRFeC1la3Nwb3J0JyxcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogJ1ZhbGlkZXJpbmcgbml2w6UgMScsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6ICdPdmVyZsO4cmluZyBzZW50cmFsIGRhdGFiYXNlJyxcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMjogJ1ZhbGlkZXJpbmcgbml2w6UgMicsXG4gICAgICBCVUlMRF9HUkFQSDogJ0J5Z2cgYXYgcmVpc2Vzw7hrZm9yc2xhZycsXG4gICAgICBVTktOT1dOOiAnVWtqZW50IHN0ZWcnXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgRklMRV9UUkFOU0ZFUjogJ092ZXJmw7hyaW5nIGF2IGZpbCBmcmEgbG9rYWwgbWFza2luIHRpbCBzZW50cmFsIHNlcnZlcicsXG4gICAgICBJTVBPUlQ6ICdGaWx2YWxpZGVyaW5nIG9nIGltcG9ydCBpIGxva2FsdCBkYXRhYmFzZW9tcsOlZGUgbml2w6UgMScsXG4gICAgICBFWFBPUlQ6ICdFa3Nwb3J0IGF2IHJ1dGVkYXRhICcsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6ICdWYWxpZGVyaW5nIGF2IGtvbXBsZXR0IGRhdGFvbXLDpWRlIG5pdsOlIDEnLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiAnVmFsaWRlcmluZyBhdiBrb21wbGV0dCBkYXRhb21yw6VkZSBuaXbDpSAyJyxcbiAgICAgIERBVEFTUEFDRV9UUkFOU0ZFUjogJ092ZXJmw7hyaW5nIHRpbCBzZW50cmFsdCBkYXRhYmFzZW9tcsOlZGUgbml2w6UgMicsXG4gICAgICBCVUlMRF9HUkFQSDogJ0J5Z2cgYXYgcmVpc2Vzw7hrZm9yc2xhZycsXG4gICAgICBVTktOT1dOOiAnRGV0dGUgc3RlZ2V0IGVyIHVramVudCdcbiAgICB9LFxuICAgIGZpbGVuYW1lOiB7XG4gICAgICB1bmRlZmluZWQ6ICdWYWxpZGVyaW5nJ1xuICAgIH0sXG4gICAgc3RhdGVzOiB7XG4gICAgICBPSzogJ0Z1bGxmw7hydCcsXG4gICAgICBQRU5ESU5HOiAnVmVudGVyJyxcbiAgICAgIFNUQVJURUQ6ICdQw6ViZWd5bnQnLFxuICAgICAgRkFJTEVEOiAnRmVpbCcsXG4gICAgICBEVVBMSUNBVEU6ICdGZWlsIC0gZHVwbGlrYXQgZGF0YXNldHQnLFxuICAgICAgSUdOT1JFRDogJ0lra2UgZ2plbm5vbWbDuHJ0JyxcbiAgICAgIENBTkNFTExFRDogJ0thbnNlbGxlcnQnLFxuICAgICAgVElNRU9VVDogJ1RpZHNhdmJydWRkJ1xuICAgIH0sXG4gICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICBGSUxFX1RSQU5TRkVSOiAnRmlsb3ZlcmbDuHJpbmcgZmVpbGV0JyxcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046ICdGaWxrbGFzc2lmaXNlcmluZyBmZWlsZXQnXG4gICAgfSxcbiAgICBmaWx0ZXJCdXR0b246IHtcbiAgICAgIEFMTF9USU1FOiAnVWJlZ3JlbnNldCcsXG4gICAgICBMQVNUXzEyX0hPVVJTOiAnU2lzdGUgMTIgdGltZW5lJyxcbiAgICAgIExBU1RfMjRfSE9VUlM6ICdTaXN0ZSBkw7hnbicsXG4gICAgICBMQVNUX1dFRUs6ICdTaXN0ZSB1a2UnLFxuICAgICAgTEFTVF9NT05USDogJ1Npc3RlIG3DpW5lZCdcbiAgICB9XG4gIH0sXG4gIGVuOiB7XG4gICAgdGV4dDoge1xuICAgICAgRklMRV9UUkFOU0ZFUjogJ0ZpbGUgdHJhbnNmZXInLFxuICAgICAgRklMRV9DTEFTU0lGSUNBVElPTjogJ0ZpbGUgY2xhc3NpZmljYXRpb24nLFxuICAgICAgRklMRV9ERUxJVkVSWTogJ0ZpbGUgZGVsaXZlcnknLFxuICAgICAgSU1QT1JUOiAnSW1wb3J0JyxcbiAgICAgIEVYUE9SVDogJ0dURlMgZXhwb3J0JyxcbiAgICAgIEVYUE9SVF9ORVRFWDogJ05lVEV4IGV4cG9ydCcsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzE6ICdWYWxpZGF0aW9uIGxldmVsIDEnLFxuICAgICAgREFUQVNQQUNFX1RSQU5TRkVSOiAnVHJhbnNmZXIgdG8gY2VudHJhbCBzcGFjZScsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6ICdWYWxpZGF0aW9uIGxldmVsIDInLFxuICAgICAgQlVJTERfR1JBUEg6ICdCdWlsZCBncmFwaCcsXG4gICAgICBVTktOT1dOOiAnVWtub3duIHN0ZXAnXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgRklMRV9UUkFOU0ZFUjogJ1VwbG9hZCBsb2NhbCBmaWxlIHRvIHJlbW90ZSBzZXJ2ZXInLFxuICAgICAgSU1QT1JUOiAnRmlsZSB2YWxpZGF0aW9uIGFuZCBpbXBvcnQgaW4gbG9jYWwgZGF0YSBzcGFjZSAtIGxldmVsIDEnLFxuICAgICAgRVhQT1JUOiAnRXhwb3J0IG9mIHJvdXRlIGRhdGEgJyxcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogJ1ZhbGlkYXRpb24gb2YgY29tcGxldGUgZGF0YSBzcGFjZSAtIGxldmVsIDEnLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiAnVmFsaWRhdGlvbiBvZiBjb21wbGV0ZSBkYXRhIHNwYWNlIC0gbGV2ZWwgMicsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6ICdUcmFuc2ZlciB0byBjZW50cmFsIGRhdGFzcGFjZSAtIGxldmVsIDInLFxuICAgICAgQlVJTERfR1JBUEg6ICdCdWlsZCBncmFwaCcsXG4gICAgICBVTktOT1dOOiAnVGhpcyBzdGVwIGlzIHVrbm93bidcbiAgICB9LFxuICAgIGZpbGVuYW1lOiB7XG4gICAgICB1bmRlZmluZWQ6ICdWYWxpZGF0aW9uJ1xuICAgIH0sXG4gICAgc3RhdGVzOiB7XG4gICAgICBPSzogJ0NvbXBsZXRlZCcsXG4gICAgICBQRU5ESU5HOiAnUGVuZGluZycsXG4gICAgICBTVEFSVEVEOiAnU3RhcnRlZCcsXG4gICAgICBGQUlMRUQ6ICdGYWlsZWQnLFxuICAgICAgRFVQTElDQVRFOiAnRmFpbGVkIC0gZHVwbGljYXRlIGRhdGEgc2V0JyxcbiAgICAgIElHTk9SRUQ6ICdTa2lwcGVkJyxcbiAgICAgIENBTkNFTExFRDogJ0NhbmNlbGxlZCcsXG4gICAgICBUSU1FT1VUOiAnVGltZW91dCdcbiAgICB9LFxuICAgIGVycm9yTWVzc2FnZToge1xuICAgICAgRklMRV9UUkFOU0ZFUjogJ0ZhaWxlZCB0byB0cmFuc2ZlciBmaWxlJyxcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046ICdGYWlsZWQgb24gZmlsZSBjbGFzc2lmaWNhdGlvbidcbiAgICB9LFxuICAgIGZpbHRlckJ1dHRvbjoge1xuICAgICAgQUxMX1RJTUU6ICdVbmxpbWl0ZWQnLFxuICAgICAgTEFTVF8xMl9IT1VSUzogJ0xhc3QgMTIgaG91cnMnLFxuICAgICAgTEFTVF8yNF9IT1VSUzogJ0xhc3QgMjQgaG91cnMnLFxuICAgICAgTEFTVF9XRUVLOiAnTGFzdCB3ZWVrJyxcbiAgICAgIExBU1RfTU9OVEg6ICdMYXN0IG1vbnRoJ1xuICAgIH1cbiAgfSxcbiAgXCJmclwiOiB7XG4gICAgdGV4dDoge1xuICAgICAgRklMRV9UUkFOU0ZFUjogXCJUcmFuc2ZlcnQgZGUgZmljaGllcnNcIixcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046IFwiQ2xhc3NpZmljYXRpb24gZGUgZmljaGllcnNcIixcbiAgICAgIEZJTEVfREVMSVZFUlk6ICdGb3JtYXQgZGUgZmljaGllcicsXG4gICAgICBJTVBPUlQ6IFwiSW1wb3J0XCIsXG4gICAgICBFWFBPUlQ6IFwiR1RGUyBleHBvcnRcIixcbiAgICAgIEVYUE9SVF9ORVRFWDogXCJOZVRFeCBleHBvcnRcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogXCJWYWxpZGF0aW9uIG5pdmVhdSAxXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiVHJhbnNmZXJ0IHZlcnMgbCdlc3BhY2UgZGUgZG9ubsOpZXMgcHJpbmNpcGFsXCIsXG4gICAgICBWQUxJREFUSU9OX0xFVkVMXzI6IFwiVmFsaWRhdGlvbiBuaXZlYXUgMlwiLFxuICAgICAgQlVJTERfR1JBUEg6IFwiQ29uc3RydWlyZSBsZSBncmFwaGVcIixcbiAgICAgIFVOS05PV046IFwiRXRhcGUgaW5jb25udWVcIlxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6IFwiRW52b3llciB1biBmaWNoaWVyIGxvY2FsIHZlcnMgbGUgc2VydmV1ciBkaXN0YW50XCIsXG4gICAgICBJTVBPUlQ6IFwiVmFsaWRhdGlvbiBkZSBmaWNoaWVyIGV0IGltcG9ydCBkYW5zIGwnZXNwYWNlIGRlIGRvbm7DqWVzIGxvY2FsIC0gbml2ZWF1IDFcIixcbiAgICAgIEVYUE9SVDogXCJFeHBvcnQgZGVzIGRvbm7DqWVzIHRvcG9sb2dpcXVlcyBcIixcbiAgICAgIFZBTElEQVRJT05fTEVWRUxfMTogXCJWYWxpZGF0aW9uIGRlIGwnZXNwYWNlIGRlIGRvbm7DqWVzIGNvbXBsZXQgLSBuaXZlYXUgMVwiLFxuICAgICAgVkFMSURBVElPTl9MRVZFTF8yOiBcIlZhbGlkYXRpb24gZGUgbCdlc3BhY2UgZGUgZG9ubsOpZXMgY29tcGxldCAtIG5pdmVhdSAyXCIsXG4gICAgICBEQVRBU1BBQ0VfVFJBTlNGRVI6IFwiVHJhbnNmZXIgdmVycyBsJ2VzcGFjZSBkZSBkb25uw6llcyBwcmluY2lwYWwgLSBuaXZlYXUgMlwiLFxuICAgICAgQlVJTERfR1JBUEg6IFwiQ29uc3RydWlyZSBsZSBncmFwaGVcIixcbiAgICAgIFVOS05PV046IFwiRXRhcGUgaW5jb25udWVcIlxuICAgIH0sXG4gICAgZmlsZW5hbWU6IHtcbiAgICAgIHVuZGVmaW5lZDogXCJWYWxpZGF0aW9uXCJcbiAgICB9LFxuICAgIHN0YXRlczoge1xuICAgICAgT0s6IFwiVGVybWluw6lcIixcbiAgICAgIFBFTkRJTkc6IFwiRW4gYXR0ZW50ZVwiLFxuICAgICAgU1RBUlRFRDogXCJEw6ltYXJyw6lcIixcbiAgICAgIEZBSUxFRDogXCJFY2hvdcOpXCIsXG4gICAgICBEVVBMSUNBVEU6IFwiRWNob3XDqSAtIGRvbm7DqWVzIMOgIGluc8OpcmVyIGVuIGRvdWNsZVwiLFxuICAgICAgSUdOT1JFRDogXCJJZ25vcsOpXCIsXG4gICAgICBDQU5DRUxMRUQ6IFwiQW51dWzDqVwiLFxuICAgICAgVElNRU9VVDogXCJFcnJldXIgLSB0ZW1wcyDDqWNvdWzDqVwiXG4gICAgfSxcbiAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgIEZJTEVfVFJBTlNGRVI6ICdFY2hlYyBsb3JzIGR1IHRyYW5zZmVydCBkdSBmaWNoaWVyJyxcbiAgICAgIEZJTEVfQ0xBU1NJRklDQVRJT046ICdFY2hlYyBsb3JzIGRlIGxhIGNsYXNzaWZpY2F0aW9uIGRlIGZpY2hpZXJzJ1xuICAgIH0sXG4gICAgZmlsdGVyQnV0dG9uOiB7XG4gICAgICBBTExfVElNRTogJ1RvdXMnLFxuICAgICAgTEFTVF8xMl9IT1VSUzogJ0xlcyBkZXJuacOocmVzIDEyIGhldXJlcycsXG4gICAgICBMQVNUXzI0X0hPVVJTOiAnTGVzIGRlcm5pw6hyZXMgMjQgaGV1cmVzJyxcbiAgICAgIExBU1RfV0VFSzogJ0xhIHNlbWFpbmUgZGVybmnDqHJlJyxcbiAgICAgIExBU1RfTU9OVEg6ICdMZSBtb2lzIGRlcm5pZXIuJ1xuICAgIH1cbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL2FjdGlvblRyYW5zbGF0aW9ucy5qcyIsImNvbnN0IGJ1dHRvbkNvbmZpZyA9IHtcbiAgZmllbGRzOiBbXG4gICAge1xuICAgICAgaWQ6ICdMQVNUXzEyX0hPVVJTJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdMQVNUXzI0X0hPVVJTJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdMQVNUX1dFRUsnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0xBU1RfTU9OVEgnXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ0FMTF9USU1FJ1xuICAgIH1cbiAgXVxufTtcblxuZXhwb3J0IGNvbnN0IGdldExhc3RWYWxpZERhdGUgPSBpZCA9PiB7XG4gIHN3aXRjaCAoaWQpIHtcbiAgICBjYXNlICdBTExfVElNRSc6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICBjYXNlICdMQVNUX01PTlRIJzoge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldE1vbnRoKG5vdy5nZXRNb250aCgpIC0gMSkpO1xuICAgIH1cbiAgICBjYXNlICdMQVNUX1dFRUsnOiB7XG4gICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShub3cuc2V0RGF0ZShub3cuZ2V0RGF0ZSgpIC0gNykpO1xuICAgIH1cbiAgICBjYXNlICdMQVNUXzEyX0hPVVJTJzoge1xuICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICByZXR1cm4gbmV3IERhdGUobm93LnNldEhvdXJzKG5vdy5nZXRIb3VycygpIC0gMTIpKTtcbiAgICB9XG4gICAgY2FzZSAnTEFTVF8yNF9IT1VSUyc6IHtcbiAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKG5vdy5zZXREYXRlKG5vdy5nZXREYXRlKCkgLSAxKSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBidXR0b25Db25maWc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9idXR0b25Db25maWcuanMiLCJleHBvcnQgZGVmYXVsdCB7XG4gIFwiZW5cIjoge1xuICAgIHBhZ2U6ICdQYWdlOiAnLFxuICAgIG5vX3N0YXR1czogJ05vIHJlc3VsdCB3aXRoIGFwcGxpZWQgZmlsdGVyJyxcbiAgICBzdGFydGVkOiAnU3RhcnRlZCcsXG4gICAgZW5kZWQ6ICdFbmRlZCcsXG4gICAgZHVyYXRpb246ICdEdXJhdGlvbjogJyxcbiAgICBzaG93X2FsbDogJ1Nob3cgYWxsJyxcbiAgICBzaG93X29ubHlfZmFpbGVkOiAnU2hvdyBvbmx5IGZhaWxlZCcsXG4gICAgc2hvd19vbmx5X3N1Y2Nlc3M6ICdTaG93IG9ubHkgc3VjY2Vzc2Z1bCcsXG4gICAgc2hvd19vbmx5X2NhbmNlbGxlZDogXCJTaG93IG9ubHkgY2FuY2VsbGVkXCIsXG4gICAgZmlsdGVyX2RpcmVjdF9kZWxpdmVyeTogXCJPbmx5IHN0YXJ0ZWQgd2l0aCBmaWxlIGRlbGl2ZXJ5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgICB1c2VyOiBcIlVzZXJcIixcbiAgICBmaWxlX3R5cGU6IFwiRm9ybWF0XCJcbiAgfSxcbiAgXCJuYlwiOiB7XG4gICAgcGFnZTogJ1NpZGU6ICcsXG4gICAgbm9fc3RhdHVzOiAnSW5nZW4gcmVzdWx0YXRlciBtZWQgdmFsZ3QgZmlsdGVyJyxcbiAgICBzdGFydGVkOiAnQmVneW50ZScsXG4gICAgZW5kZWQ6ICdBdnNsdXR0ZXQnLFxuICAgIGR1cmF0aW9uOiAnVmFyaWdoZXQnLFxuICAgIHNob3dfYWxsOiAnVmlzIGFsbGUnLFxuICAgIHNob3dfb25seV9mYWlsZWQ6ICdWaXMga3VuIGZlaWxldCcsXG4gICAgc2hvd19vbmx5X3N1Y2Nlc3M6ICdWaXMga3VuIHZlbGx5a2tldCcsXG4gICAgc2hvd19vbmx5X2NhbmNlbGxlZDogXCJWaXMga3VuIGthbnNlbGxlcnRlXCIsXG4gICAgZmlsdGVyX2RpcmVjdF9kZWxpdmVyeTogXCJLdW4gc3RhcnRldCB2ZWQgZmlsbGV2ZXJhbnNlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiRGVzY3JpcHRpb25cIixcbiAgICB1c2VyOiBcIlVzZXJcIixcbiAgICBmaWxlX3R5cGU6IFwiRm9ybWF0XCJcbiAgfSxcbiAgXCJmclwiOiB7XG4gICAgcGFnZTogJ1BhZ2U6ICcsXG4gICAgbm9fc3RhdHVzOiAnQXVjdW4gcsOpc3VsdGF0IGF2ZWMgY2VzIGNyaXTDqHJlcycsXG4gICAgc3RhcnRlZDogJ0RhdGUnLFxuICAgIGVuZGVkOiAnVGVybWluw6knLFxuICAgIGR1cmF0aW9uOiAnRHVyw6llOiAnLFxuICAgIHNob3dfYWxsOiAnTW9udHJlciB0b3VzJyxcbiAgICBzaG93X29ubHlfZmFpbGVkOiAnTW9udHJlciBzZXVsZW1lbnQgbGVzIMOpY2hlY3MnLFxuICAgIHNob3dfb25seV9zdWNjZXNzOiAnTW9udGVyIHNldWxlbWVudCBsZXMgc3VjY8OocycsXG4gICAgc2hvd19vbmx5X2NhbmNlbGxlZDogXCJNb250cmVyIHNldWxlbWVudCBsZXMgYW51dWzDqXNcIixcbiAgICBmaWx0ZXJfZGlyZWN0X2RlbGl2ZXJ5OiBcIkZpbHRyZXIgc2V1bGVtZW50IGNldXggYXZlYyBsaXZyYWlzb24gZGUgZmljaGllclwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgdXNlcjogXCJVdGlsaXNhdGV1clwiLFxuICAgIGZpbGVfdHlwZTogXCJGb3JtYXRcIlxuICB9XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3RyYW5zbGF0aW9ucy5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0XHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdFx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlciBcblx0XHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0XHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0XHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG5cdH0pLFxuXHRnZXRFbGVtZW50ID0gKGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW8gPSB7fTtcblx0XHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtZW1vW3NlbGVjdG9yXVxuXHRcdH07XG5cdH0pKGZ1bmN0aW9uIChzdHlsZVRhcmdldCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0eWxlVGFyZ2V0KVxuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdLFxuXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vZml4VXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAodHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0SW50byA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cdGlmICghc3R5bGVUYXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHN0eWxlVGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZUVsZW1lbnQsIHN0eWxlVGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0c3R5bGVUYXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZVRhcmdldC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHN0eWxlVGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YXR0YWNoVGFnQXR0cnMoc3R5bGVFbGVtZW50LCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhdHRhY2hUYWdBdHRycyhsaW5rRWxlbWVudCwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rRWxlbWVudCk7XG5cdHJldHVybiBsaW5rRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYXR0YWNoVGFnQXR0cnMoZWxlbWVudCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2UgaWYob2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdFx0aWYoc3R5bGVFbGVtZW50LmhyZWYpXG5cdFx0XHRcdFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGVFbGVtZW50LmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGlua0VsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0LyogSWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpe1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmtFbGVtZW50LmhyZWY7XG5cblx0bGlua0VsZW1lbnQuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKVxuXHRcdFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBUaW1lbGluZSBmcm9tICcuL1RpbWVsaW5lJ1xuZXhwb3J0IEhlYWRlclRpbWVsaW5lIGZyb20gJy4vSGVhZGVyVGltZWxpbmUnXG5leHBvcnQgRXZlbnREZXRhaWxzIGZyb20gJy4vRXZlbnREZXRhaWxzJ1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBDaG91ZXR0ZUxpbmsgPSAoeyBhY3Rpb24sIGlkLCByZWZlcmVudGlhbCwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBiYXNlVVJMID0gYCR7d2luZG93LmNvbmZpZy5jaG91ZXR0ZUJhc2VVcmx9I2A7XG5cbiAgY29uc3QgYWN0aW9uTWFwID0ge1xuICAgIFwiaW1wb3J0ZXJcIjogYGUtaXRpL2ltcG9ydHMvJHtyZWZlcmVudGlhbH0vJHtpZH1gLFxuICAgIFwiZXhwb3J0ZXJcIjogYG9wZW4taXRpL2V4cG9ydHMvJHtyZWZlcmVudGlhbH0vJHtpZH1gLFxuICAgIFwidmFsaWRhdG9yXCI6IGBlLWl0aS9pbXBvcnRzLyR7cmVmZXJlbnRpYWx9LyR7aWR9YFxuICB9XG4gIGNvbnN0IFVSTCA9IGAke2Jhc2VVUkx9LyR7YWN0aW9uTWFwW2FjdGlvbl19YFxuXG4gIHJldHVybiAoXG4gICAgPGEgdGl0bGU9e1VSTH0gdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17VVJMfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaG91ZXR0ZUxpbms7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9DaG91ZXR0ZUxpbmsuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENob3VldHRlTGluayBmcm9tICcuL0Nob3VldHRlTGluayc7XG5cbmNvbnN0IENvbnRyb2xsZWRDaG91ZXR0ZUxpbmsgPSAoeyBldmVudHMsIGluY2x1ZGVMZXZlbDIsIGNoaWxkcmVuIH0pID0+IHtcbiAgbGV0IHN1cHBvcnRlZEFjdGlvbnMgPSBbJ0lNUE9SVCcsICdWQUxJREFUSU9OX0xFVkVMXzEnXTtcblxuICBsZXQgY2hvdWV0dGVNYXAgPSB7XG4gICAgSU1QT1JUOiAnaW1wb3J0ZXInLFxuICAgIFZBTElEQVRJT05fTEVWRUxfMTogJ3ZhbGlkYXRvcidcbiAgfTtcblxuICBpZiAoaW5jbHVkZUxldmVsMikge1xuICAgIHN1cHBvcnRlZEFjdGlvbnMucHVzaCgnVkFMSURBVElPTl9MRVZFTF8yJyk7XG4gICAgc3VwcG9ydGVkQWN0aW9ucy5wdXNoKCdFWFBPUlQnKTtcbiAgICBzdXBwb3J0ZWRBY3Rpb25zLnB1c2goJ0VYUE9SVF9ORVRFWCcpO1xuICAgIGNob3VldHRlTWFwWydWQUxJREFUSU9OX0xFVkVMXzInXSA9ICd2YWxpZGF0b3InO1xuICAgIGNob3VldHRlTWFwWydFWFBPUlQnXSA9ICdleHBvcnRlcic7XG4gICAgY2hvdWV0dGVNYXBbJ0VYUE9SVF9ORVRFWCddID0gJ2V4cG9ydGVyJztcbiAgfVxuXG4gIGlmIChldmVudHMuc3RhdGVzICYmIGV2ZW50cy5zdGF0ZXMubGVuZ3RoKSB7XG4gICAgY29uc3QgZW5kU3RhdGUgPSBldmVudHMuc3RhdGVzW2V2ZW50cy5zdGF0ZXMubGVuZ3RoIC0gMV07XG4gICAgaWYgKHN1cHBvcnRlZEFjdGlvbnMuaW5kZXhPZihlbmRTdGF0ZS5hY3Rpb24pID4gLTEgJiYgZW5kU3RhdGUuY2hvdWV0dGVKb2JJZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPENob3VldHRlTGlua1xuICAgICAgICAgIGFjdGlvbj17Y2hvdWV0dGVNYXBbZW5kU3RhdGUuYWN0aW9uXX1cbiAgICAgICAgICBpZD17ZW5kU3RhdGUuY2hvdWV0dGVKb2JJZH1cbiAgICAgICAgICByZWZlcmVudGlhbD17ZW5kU3RhdGUucmVmZXJlbnRpYWx9XG4gICAgICAgID5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvQ2hvdWV0dGVMaW5rPlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gPGRpdj4ge2NoaWxkcmVufSA8L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sbGVkQ2hvdWV0dGVMaW5rO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQ29udHJvbGxlZENob3VldHRlTGluay5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRXZlbnRTdGVwcGVyIGZyb20gJy4vRXZlbnRTdGVwcGVyJztcbmltcG9ydCAnLi9FdmVudERldGFpbHMuY3NzJztcbmltcG9ydCBGYUZyZXNoIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9yZWZyZXNoJztcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IEZpbHRlckJ1dHRvblRyYXkgZnJvbSAnLi9GaWx0ZXJCdXR0b25UcmF5JztcbmltcG9ydCB7IGdldExhc3RWYWxpZERhdGUgfSBmcm9tICcuL2J1dHRvbkNvbmZpZyc7XG5cbmNsYXNzIEV2ZW50RGV0YWlscyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhY3RpdmVQYWdlSW5kZXg6IDAsXG4gICAgICBlbmRTdGF0ZUZpbHRlcjogJ0FMTCcsXG4gICAgICBkYXRlRmlsdGVyOiBwcm9wcy5zaG93RGF0ZUZpbHRlciA/ICdMQVNUXzEyX0hPVVJTJyA6ICdBTExfVElNRScsXG4gICAgICBvbmx5TmV3RGVsaXZlcnlGaWx0ZXI6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVBhZ2VDbGljayhlLCBwYWdlSW5kZXgpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBhY3RpdmVQYWdlSW5kZXg6IHBhZ2VJbmRleFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKGRhdGVGaWx0ZXIpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGVGaWx0ZXI6IGRhdGVGaWx0ZXIsXG4gICAgICBhY3RpdmVQYWdlSW5kZXg6IDBcbiAgICB9KTtcbiAgfVxuXG4gIGdldEZpbHRlcmVkU291cmNlKFxuICAgIGRhdGFTb3VyY2UsXG4gICAgZGF0ZUZpbHRlcixcbiAgICBlbmRTdGF0ZUZpbHRlcixcbiAgICBvbmx5TmV3RGVsaXZlcnlGaWx0ZXJcbiAgKSB7XG4gICAgY29uc3QgbGFzdERhdGUgPSBnZXRMYXN0VmFsaWREYXRlKGRhdGVGaWx0ZXIpO1xuXG4gICAgcmV0dXJuIChkYXRhU291cmNlIHx8IFtdKS5maWx0ZXIoZXZlbnQgPT4ge1xuICAgICAgY29uc3QgYXBwbGllZEZpbHRlciA9IFtdO1xuXG4gICAgICAvKiBGaWx0ZXIgYnkgZGF0ZSBmcm9tIHByZS1kZWZpbmVkIHBlcmlvZHMgKi9cbiAgICAgIGlmIChsYXN0RGF0ZSkge1xuICAgICAgICBjb25zdCBmaWx0ZXJCeVBlcmlvZCA9IG5ldyBEYXRlKGV2ZW50LmZpcnN0RXZlbnQpID4gbGFzdERhdGU7XG4gICAgICAgIGFwcGxpZWRGaWx0ZXIucHVzaChmaWx0ZXJCeVBlcmlvZCk7XG4gICAgICB9XG5cbiAgICAgIC8qIEZpbHRlciBieSBlbmQgc3RhdGUgZnJvbSBkcm9wZG93biAqL1xuICAgICAgY29uc3QgZW5kU3RhdGVGaWx0ZXJBcHBsaWVkID1cbiAgICAgICAgZW5kU3RhdGVGaWx0ZXIgPT09ICdGQUlMRUQnIHx8XG4gICAgICAgIGVuZFN0YXRlRmlsdGVyID09PSAnT0snIHx8XG4gICAgICAgIGVuZFN0YXRlRmlsdGVyID09PSAnQ0FOQ0VMTEVEJztcblxuICAgICAgaWYgKGVuZFN0YXRlRmlsdGVyQXBwbGllZCkge1xuICAgICAgICBjb25zdCBmaWx0ZXJCeUVuZFN0YXRlID0gZXZlbnQuZW5kU3RhdGUgPT09IGVuZFN0YXRlRmlsdGVyO1xuICAgICAgICBhcHBsaWVkRmlsdGVyLnB1c2goZmlsdGVyQnlFbmRTdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIC8qIEZpbHRlciBieSBvbmx5IG5ldyBkZWxpdmVyaWVzICovXG4gICAgICBjb25zdCBjb250YWluc0V2ZW50cyA9IEFycmF5LmlzQXJyYXkoZXZlbnQuZXZlbnRzKSAmJiBldmVudC5ldmVudHMubGVuZ3RoO1xuXG4gICAgICBpZiAoY29udGFpbnNFdmVudHMgJiYgb25seU5ld0RlbGl2ZXJ5RmlsdGVyKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlckJ5TmV3RGVsaXZlcnkgPSBldmVudC5ldmVudHNbMF0uYWN0aW9uID09PSAnRklMRV9UUkFOU0ZFUic7XG4gICAgICAgIGFwcGxpZWRGaWx0ZXIucHVzaChmaWx0ZXJCeU5ld0RlbGl2ZXJ5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFwcGxpZWRGaWx0ZXIuZXZlcnkoZmlsdGVyID0+IGZpbHRlcik7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZGF0YVNvdXJjZSxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGluY2x1ZGVMZXZlbDIsXG4gICAgICBzaG93RGF0ZUZpbHRlcixcbiAgICAgIHNob3dOZXdEZWxpdmVyaWVzRmlsdGVyXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlUGFnZUluZGV4LFxuICAgICAgZW5kU3RhdGVGaWx0ZXIsXG4gICAgICBkYXRlRmlsdGVyLFxuICAgICAgb25seU5ld0RlbGl2ZXJ5RmlsdGVyXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCBmaWx0ZXJlZFNvdXJjZSA9IHRoaXMuZ2V0RmlsdGVyZWRTb3VyY2UoXG4gICAgICBkYXRhU291cmNlLFxuICAgICAgZGF0ZUZpbHRlcixcbiAgICAgIGVuZFN0YXRlRmlsdGVyLFxuICAgICAgb25seU5ld0RlbGl2ZXJ5RmlsdGVyXG4gICAgKTtcbiAgICBjb25zdCBwYWdpbmF0aW9uTWFwID0gZ2V0UGFnaW5hdGlvbk1hcChmaWx0ZXJlZFNvdXJjZSk7XG5cbiAgICBjb25zdCBmaWx0ZXJzID0gKFxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcwLjllbScgfX1cbiAgICAgICAgICB2YWx1ZT17ZW5kU3RhdGVGaWx0ZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGVuZFN0YXRlRmlsdGVyOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgYWN0aXZlUGFnZUluZGV4OiAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFMTFwiPnt0cmFuc2xhdGlvbnNbbG9jYWxlXS5zaG93X2FsbH08L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT0tcIj57dHJhbnNsYXRpb25zW2xvY2FsZV0uc2hvd19vbmx5X3N1Y2Nlc3N9PC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNBTkNFTExFRFwiPlxuICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfb25seV9jYW5jZWxsZWR9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkZBSUxFRFwiPlxuICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnNob3dfb25seV9mYWlsZWR9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICB7c2hvd0RhdGVGaWx0ZXIgJiYgKFxuICAgICAgICAgIDxGaWx0ZXJCdXR0b25UcmF5XG4gICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDIwIH19XG4gICAgICAgICAgICBhY3RpdmVCdXR0b25JZD17dGhpcy5zdGF0ZS5kYXRlRmlsdGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRmlsdGVyQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3Nob3dOZXdEZWxpdmVyaWVzRmlsdGVyICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDEwLCBwYWRkaW5nVG9wOiAyIH19PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgIGlkPVwiZGlyZWN0X2RlbGl2ZXJ5XCJcbiAgICAgICAgICAgICAgbmFtZT1cImRpcmVjdF9kZWxpdmVyeVwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e29ubHlOZXdEZWxpdmVyeUZpbHRlcn1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnMCAxMHB4JyB9fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBvbmx5TmV3RGVsaXZlcnlGaWx0ZXI6IGUudGFyZ2V0LmNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlSW5kZXg6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRpcmVjdF9kZWxpdmVyeVwiPlxuICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uZmlsdGVyX2RpcmVjdF9kZWxpdmVyeX1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgY29uc3QgcGFnZSA9IHBhZ2luYXRpb25NYXBbYWN0aXZlUGFnZUluZGV4XTtcblxuICAgIGNvbnN0IHJlZnJlc2hCdXR0b24gPSB0aGlzLnByb3BzLmhhbmRsZVJlZnJlc2ggJiYgKFxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogMTUsIGZsb2F0OiAncmlnaHQnLCBjdXJzb3I6ICdwb2ludGVyJyB9fT5cbiAgICAgICAgPEZhRnJlc2hcbiAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06ICdzY2FsZSgxLjUpJyB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlUmVmcmVzaH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBpZiAocGFnZSAmJiBwYWdlLmxlbmd0aCAmJiBwYWdpbmF0aW9uTWFwKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgdGV4dEFsaWduOiAnbGVmdCcsIG1hcmdpbkJvdHRvbTogNSB9fT5cbiAgICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtyZWZyZXNoQnV0dG9ufVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1saW5rLXBhcmVudFwiPlxuICAgICAgICAgICAgPHNwYW4+e3RyYW5zbGF0aW9uc1tsb2NhbGVdLnBhZ2V9PC9zcGFuPlxuICAgICAgICAgICAge3BhZ2luYXRpb25NYXAubWFwKChwYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9XG4gICAgICAgICAgICAgICAgaW5kZXggPT0gYWN0aXZlUGFnZUluZGV4XG4gICAgICAgICAgICAgICAgICA/ICdwYWdlLWxpbmsgYWN0aXZlLWxpbmsnXG4gICAgICAgICAgICAgICAgICA6ICdwYWdlLWxpbmsgaW5hY3RpdmUtbGluayc7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17aXNBY3RpdmV9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHRoaXMuaGFuZGxlUGFnZUNsaWNrKGUsIGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIGtleT17J2xpbmstJyArIGluZGV4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwYWdlLm1hcCgobGlzdEl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGxldCBldmVudEdyb3VwID0ge307XG5cbiAgICAgICAgICAgICAgbGlzdEl0ZW0uZXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXZlbnRHcm91cFtldmVudC5hY3Rpb25dKSB7XG4gICAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0gPSB7fTtcbiAgICAgICAgICAgICAgICAgIGV2ZW50R3JvdXBbZXZlbnQuYWN0aW9uXS5zdGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnRHcm91cFtldmVudC5hY3Rpb25dLnN0YXRlcy5wdXNoKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBldmVudEdyb3VwW2V2ZW50LmFjdGlvbl0uZW5kU3RhdGUgPSBldmVudC5zdGF0ZTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9eydqb2JzdGF0dXMtJyArIGxpc3RJdGVtLmNob3VldHRlSm9iSWQgKyAnLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEV2ZW50U3RlcHBlclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlTGV2ZWwyPXtpbmNsdWRlTGV2ZWwyfVxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXsnZXZlbnQtZ3JvdXAtJyArIGxpc3RJdGVtLmNob3VldHRlSm9iSWQgKyAnLScgKyBpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBzPXtldmVudEdyb3VwfVxuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbT17bGlzdEl0ZW19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCB0ZXh0QWxpZ246ICdsZWZ0JywgbWFyZ2luQm90dG9tOiA1IH19PlxuICAgICAgICAgIHtmaWx0ZXJzfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZWVlJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAgfX0+XG4gICAgICAgICAgICAgIHt0cmFuc2xhdGlvbnNbbG9jYWxlXS5ub19zdGF0dXN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTAgfX0+e3JlZnJlc2hCdXR0b259PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZ2V0UGFnaW5hdGlvbk1hcCA9IChzdGF0dXNMaXN0ID0gW10pID0+IHtcbiAgbGV0IHBhZ2luYXRpb25NYXAgPSBbXTtcblxuICBpZiAoc3RhdHVzTGlzdCAmJiBzdGF0dXNMaXN0Lmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwLCBqID0gc3RhdHVzTGlzdC5sZW5ndGg7IGkgPCBqOyBpICs9IDEwKSB7XG4gICAgICBwYWdpbmF0aW9uTWFwLnB1c2goc3RhdHVzTGlzdC5zbGljZShpLCBpICsgMTApKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhZ2luYXRpb25NYXA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFdmVudERldGFpbHM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudERldGFpbHMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1kRXJyb3IgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2Vycm9yJztcbmltcG9ydCBNZERvbmUgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2NoZWNrLWNpcmNsZSc7XG5pbXBvcnQgTWRTY2hlZHVsZSBmcm9tICdyZWFjdC1pY29ucy9saWIvbWQvc2NoZWR1bGUnO1xuaW1wb3J0IEZhQ29nIGZyb20gJ3JlYWN0LWljb25zL2xpYi9mYS9jb2cnO1xuaW1wb3J0IE1kSGVscE91dExpbmUgZnJvbSAncmVhY3QtaWNvbnMvbGliL21kL2hlbHAtb3V0bGluZSc7XG5pbXBvcnQgTWRIb3VyIGZyb20gJ3JlYWN0LWljb25zL2xpYi9tZC9ob3VyZ2xhc3MtZW1wdHknO1xuXG5jbGFzcyBFdmVudFN0YXR1c0ljb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgc3dpdGNoICh0aGlzLnByb3BzLnN0YXRlKSB7XG4gICAgICBjYXNlICdPSyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE1kRG9uZVxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdncmVlbicsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdQRU5ESU5HJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRIb3VyXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ29yYW5nZScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdTVEFSVEVEJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8RmFDb2dcbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAnIzIyNzRiNScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdGQUlMRUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEVycm9yXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdDQU5DRUxMRUQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEVycm9yXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ29yYW5nZScsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdEVVBMSUNBVEUnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZEVycm9yXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlICdJR05PUkVEJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TWRTY2hlZHVsZVxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG5cbiAgICAgIGNhc2UgJ1RJTUVPVVQnOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxNZFNjaGVkdWxlXG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyMiwgbWFyZ2luVG9wOiAtMiB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiA8TWRIZWxwT3V0TGluZSBzdHlsZT17eyBjb2xvcjogJ2dyZXknLCB3aWR0aDogMjQsIGhlaWdodDogMjIgfX0gLz47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTdGF0dXNJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRXZlbnRTdGF0dXNJY29uLmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBY3Rpb25UcmFuc2xhdGlvbnMgZnJvbSAnLi9hY3Rpb25UcmFuc2xhdGlvbnMnO1xuaW1wb3J0IEZhQ2hldnJvbkRvd24gZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tZG93bic7XG5pbXBvcnQgRmFDaGV2cm9uVXAgZnJvbSAncmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tdXAnO1xuaW1wb3J0IENvbnRyb2xsZWRDaG91ZXR0ZUxpbmsgZnJvbSAnLi9Db250cm9sbGVkQ2hvdWV0dGVMaW5rJztcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IEV2ZW50U3RhdHVzSWNvbiBmcm9tICcuL0V2ZW50U3RhdHVzSWNvbic7XG5cbmNsYXNzIEV2ZW50U3RlcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleHBhbmRlZDogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBncm91cHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBsaXN0SXRlbTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH07XG5cbiAgZXZlbnRTdGF0ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdGSUxFX1RSQU5TRkVSJyxcbiAgICAgICdGSUxFX0NMQVNTSUZJQ0FUSU9OJyxcbiAgICAgICdGSUxFX0RFTElWRVJZJyxcbiAgICAgICdJTVBPUlQnLFxuICAgICAgJ1ZBTElEQVRJT05fTEVWRUxfMScsXG4gICAgICAnREFUQVNQQUNFX1RSQU5TRkVSJyxcbiAgICAgICdWQUxJREFUSU9OX0xFVkVMXzInLFxuICAgICAgJ0VYUE9SVCcsXG4gICAgICAvLyAnQlVJTERfR1JBUEgnLFxuICAgICAgJ0VYUE9SVF9ORVRFWCdcbiAgICBdO1xuICB9XG5cbiAgYWRkVW5saXN0ZWRTdGF0ZXMoZ3JvdXBzKSB7XG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5ldmVudFN0YXRlcygpO1xuXG4gICAgbGV0IGdyb3Vwc1dpdGhVbmxpc3RlZCA9IE9iamVjdC5hc3NpZ24oe30sIGdyb3Vwcyk7XG5cbiAgICBsZXQgZmlyc3RTdGF0ZUZvdW5kID0gZmFsc2U7XG5cbiAgICBzdGF0ZXMuZm9yRWFjaChzdGF0ZSA9PiB7XG4gICAgICBpZiAoIWdyb3Vwc1dpdGhVbmxpc3RlZFtzdGF0ZV0pIHtcbiAgICAgICAgZ3JvdXBzV2l0aFVubGlzdGVkW3N0YXRlXSA9IHtcbiAgICAgICAgICBlbmRTdGF0ZTogJ0lHTk9SRUQnLFxuICAgICAgICAgIG1pc3NpbmdCZWZvcmVTdGFydFN0YXJ0OiAhZmlyc3RTdGF0ZUZvdW5kXG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaXJzdFN0YXRlRm91bmQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGZpbmFsR3JvdXBzID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHNXaXRoVW5saXN0ZWQpXG4gICAgICAuc29ydCgoa2V5MSwga2V5MikgPT4gc3RhdGVzLmluZGV4T2Yoa2V5MSkgLSBzdGF0ZXMuaW5kZXhPZihrZXkyKSlcbiAgICAgIC5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGZpbmFsR3JvdXBzW2tleV0gPSBncm91cHNXaXRoVW5saXN0ZWRba2V5XTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBmaW5hbEdyb3VwcztcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBleHBhbmRlZDogIXRoaXMuc3RhdGUuZXhwYW5kZWRcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUNvbWJpbmVkU3BsaXQoZm9ybWF0dGVkR3JvdXBzLCBncm91cHMsIG5hbWUpIHtcbiAgICBjb25zdCBjb21iaW5lZCA9IFtdO1xuICAgIGZvciAobGV0IGkgaW4gZ3JvdXBzKSB7XG4gICAgICBjb25zdCBncm91cCA9IGdyb3Vwc1tpXTtcbiAgICAgIGNvbWJpbmVkW2dyb3VwXSA9IGZvcm1hdHRlZEdyb3Vwc1tncm91cF07XG5cbiAgICAgIGlmIChuYW1lICE9PSBncm91cCkge1xuICAgICAgICBkZWxldGUgZm9ybWF0dGVkR3JvdXBzW2dyb3VwXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9ybWF0dGVkR3JvdXBzW25hbWVdID0gY29tYmluZWQ7XG4gIH1cblxuICBhZ2dyZWdnYXRlRmlsZUV2ZW50cyhkYXRhKSB7XG4gICAgbGV0IGdyb3VwcyA9IHsgLi4uZGF0YSB9O1xuICAgIGxldCBlbmRTdGF0ZSA9IG51bGw7XG4gICAgbGV0IGVycm9yT24gPSBudWxsO1xuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICBpZiAoZ3JvdXAgPT09ICdGSUxFX0NMQVNTSUZJQ0FUSU9OJyB8fCBncm91cCA9PT0gJ0ZJTEVfVFJBTlNGRVInKSB7XG4gICAgICAgIGVuZFN0YXRlID0gZ3JvdXBzW2dyb3VwXS5lbmRTdGF0ZTtcblxuICAgICAgICBpZiAoZW5kU3RhdGUgPT09ICdGQUlMRUQnIHx8IGVuZFN0YXRlID09PSAnRFVQTElDQVRFJykge1xuICAgICAgICAgIGVycm9yT24gPSBncm91cDtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgZ3JvdXBzW2dyb3VwXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChlbmRTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgZ3JvdXBzLkZJTEVfREVMSVZFUlkgPSB7XG4gICAgICAgIGVuZFN0YXRlOiBlcnJvck9uID8gJ0ZBSUxFRCcgOiBlbmRTdGF0ZSxcbiAgICAgICAgZXJyb3JPbixcbiAgICAgICAgbWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQ6IGVuZFN0YXRlID09ICdJR05PUkVEJyAmJiAhZXJyb3JPblxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxuXG4gIGJ1bGxldChmb3JtYXR0ZWRHcm91cHMsIGdyb3VwcywgbG9jYWxlLCBpbmNsdWRlTGV2ZWwyKSB7XG4gICAgY29uc3QgY29sdW1uU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICBoZWlnaHQ6IDQ1XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3Qua2V5cyhmb3JtYXR0ZWRHcm91cHMpLm1hcCgoZ3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICBsZXQgY29sdW1uO1xuICAgICAgbGV0IGV2ZW50ID0gZm9ybWF0dGVkR3JvdXBzW2dyb3VwXTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICAgIGNvbHVtbiA9IE9iamVjdC5rZXlzKGV2ZW50KS5tYXAoKGtleSwgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlckV2ZW50KFxuICAgICAgICAgICAgZXZlbnRba2V5XSxcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGxvY2FsZSxcbiAgICAgICAgICAgIGluY2x1ZGVMZXZlbDJcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbHVtbiA9IHRoaXMucmVuZGVyRXZlbnQoXG4gICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgZ3JvdXBzLFxuICAgICAgICAgIGdyb3VwLFxuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIGluZGV4ID09PSAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgbG9jYWxlLFxuICAgICAgICAgIGluY2x1ZGVMZXZlbDJcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PXsnYnVsbGV0LScgKyBpbmRleH0gc3R5bGU9e2NvbHVtblN0eWxlfT5cbiAgICAgICAgICB7Y29sdW1ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXJFdmVudChcbiAgICBldmVudCxcbiAgICBncm91cHMsXG4gICAgZ3JvdXAsXG4gICAgaW5kZXgsXG4gICAgaXNGaXJzdCxcbiAgICBjb2x1bW5JbmRleCA9IDAsXG4gICAgbG9jYWxlLFxuICAgIGluY2x1ZGVMZXZlbDJcbiAgKSB7XG4gICAgY29uc3QgZ3JvdXBTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnXG4gICAgfTtcblxuICAgIGNvbnN0IGdyb3VwVGV4dCA9IHtcbiAgICAgIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgbWFyZ2luTGVmdDogNVxuICAgIH07XG5cbiAgICBjb25zdCBsaW5rU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgYm9yZGVyQ29sb3I6ICdyZ2IoMTg5LCAxODksIDE4OSknLFxuICAgICAgbWFyZ2luTGVmdDogLTYsXG4gICAgICBib3JkZXJUb3BTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAxLFxuICAgICAgd2lkdGg6IDMwLFxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcbiAgICAgIG1hcmdpbjogOCxcbiAgICAgIHRyYW5zZm9ybTogY29sdW1uSW5kZXggPiAwICYmICd0cmFuc2xhdGVZKC0wLjVlbSkgcm90YXRlKDI1ZGVnKSAnXG4gICAgfTtcblxuICAgIGlmICghQWN0aW9uVHJhbnNsYXRpb25zW2xvY2FsZV0uc3RhdGVzW2V2ZW50LmVuZFN0YXRlXSkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgdG9vbFRpcFRleHQgPSBBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5zdGF0ZXNbZXZlbnQuZW5kU3RhdGVdO1xuXG4gICAgaWYgKGV2ZW50LnN0YXRlcyAmJiBldmVudC5zdGF0ZXNbZ3JvdXBzW2dyb3VwXS5zdGF0ZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgIHRvb2xUaXBUZXh0ICs9ICcgJyArIGV2ZW50LnN0YXRlc1tldmVudC5zdGF0ZXMubGVuZ3RoIC0gMV0uZGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQuZXJyb3JPbikge1xuICAgICAgdG9vbFRpcFRleHQgPSBBY3Rpb25UcmFuc2xhdGlvbnNbbG9jYWxlXS5lcnJvck1lc3NhZ2VbZXZlbnQuZXJyb3JPbl07XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e2dyb3VwU3R5bGV9IGtleT17J2dyb3VwLScgKyBncm91cCArIGluZGV4fT5cbiAgICAgICAgeyFpc0ZpcnN0ICYmIDxkaXYgc3R5bGU9e2xpbmtTdHlsZX0gLz59XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB0aXRsZT17dG9vbFRpcFRleHR9XG4gICAgICAgICAgc3R5bGU9e3sgb3BhY2l0eTogZXZlbnQubWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQgPyAwLjIgOiAxIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RXZlbnRTdGF0dXNJY29uIHN0YXRlPXtldmVudC5lbmRTdGF0ZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uZ3JvdXBUZXh0LFxuICAgICAgICAgICAgb3BhY2l0eTogZXZlbnQubWlzc2luZ0JlZm9yZVN0YXJ0U3RhcnQgPyAwLjIgOiAxXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb250cm9sbGVkQ2hvdWV0dGVMaW5rIGluY2x1ZGVMZXZlbDI9e2luY2x1ZGVMZXZlbDJ9IGV2ZW50cz17ZXZlbnR9PlxuICAgICAgICAgICAge0FjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLnRleHRbZ3JvdXBdfVxuICAgICAgICAgIDwvQ29udHJvbGxlZENob3VldHRlTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0ZXBwZXJzdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgYWxpZ25Db250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgbWFyZ2luVG9wOiAxMFxuICAgIH07XG5cbiAgICBjb25zdCB7IGdyb3VwcywgbGlzdEl0ZW0sIGxvY2FsZSwgaW5jbHVkZUxldmVsMiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGV4cGFuZGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGZvcm1hdHRlZEdyb3VwcyA9IHRoaXMuYWRkVW5saXN0ZWRTdGF0ZXMoZ3JvdXBzKTtcbiAgICBmb3JtYXR0ZWRHcm91cHMgPSB0aGlzLmFnZ3JlZ2dhdGVGaWxlRXZlbnRzKGZvcm1hdHRlZEdyb3Vwcyk7XG4gICAgdGhpcy5jcmVhdGVDb21iaW5lZFNwbGl0KFxuICAgICAgZm9ybWF0dGVkR3JvdXBzLFxuICAgICAgWydFWFBPUlRfTkVURVgnLCAnRVhQT1JUJ10sXG4gICAgICAnRVhQT1JUJ1xuICAgICk7XG4gICAgY29uc3QgYnVsbGV0cyA9IHRoaXMuYnVsbGV0KGZvcm1hdHRlZEdyb3VwcywgZ3JvdXBzLCBsb2NhbGUsIGluY2x1ZGVMZXZlbDIpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXsnZXZlbnQnICsgbGlzdEl0ZW0uY2hvdWV0dGVKb2JJZH1cbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiAnYXV0bycsIHdpZHRoOiAnOTglJywgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVUb2dnbGVWaXNpYmlsaXR5KCl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBtYXJnaW5MZWZ0OiAtMTUsIGFsaWduSXRlbXM6ICdiYXNlbGluZScgfX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgdGl0bGU9e3RyYW5zbGF0aW9uc1tsb2NhbGVdLmR1cmF0aW9uICsgbGlzdEl0ZW0uZHVyYXRpb259XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBmb250U2l6ZTogJzAuOWVtJyxcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICAgICAgICBjb2xvcjogJyNlNTk0MDAnLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IC04LFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogMjBcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xpc3RJdGVtLnN0YXJ0ZWR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2xpc3RJdGVtLnByb3ZpZGVyICYmXG4gICAgICAgICAgICBsaXN0SXRlbS5wcm92aWRlci5uYW1lICYmIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzAuOGVtJywgZm9udFdlaWdodDogNjAwLCBmbGV4OiAxIH19PlxuICAgICAgICAgICAgICAgIHtsaXN0SXRlbS5wcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250U2l6ZTogJzAuOWVtJywgZm9udFdlaWdodDogNjAwLCBmbGV4OiAyIH19PlxuICAgICAgICAgICAge2xpc3RJdGVtLmZpbGVOYW1lIHx8IEFjdGlvblRyYW5zbGF0aW9uc1tsb2NhbGVdLmZpbGVuYW1lLnVuZGVmaW5lZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0ZXBwZXJzdHlsZX0+XG4gICAgICAgICAge2J1bGxldHN9XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogJ2F1dG8nLCBtYXJnaW5SaWdodDogMjAsIG1hcmdpblRvcDogLTUwIH19XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVRvZ2dsZVZpc2liaWxpdHkoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IWV4cGFuZGVkID8gPEZhQ2hldnJvbkRvd24gLz4gOiA8RmFDaGV2cm9uVXAgLz59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7ZXhwYW5kZWQgJiYgKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgcGFkZGluZzogOCxcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMTAsXG4gICAgICAgICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFdlaWdodDogNjAwLCBtYXJnaW5SaWdodDogMTAgfX0+XG4gICAgICAgICAgICAgICAge3RyYW5zbGF0aW9uc1tsb2NhbGVdLnVzZXJ9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLnVzZXJuYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAge2xpc3RJdGVtLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uZmlsZV90eXBlfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtsaXN0SXRlbS50eXBlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBmb250V2VpZ2h0OiA2MDAsIG1hcmdpblJpZ2h0OiAxMCB9fT5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRpb25zW2xvY2FsZV0uc3RhcnRlZH1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB7bGlzdEl0ZW0uZmlyc3RFdmVudH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFN0ZXBwZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FdmVudFN0ZXBwZXIuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBGaWx0ZXJCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBoYW5kbGVDbGljaygpIHtcbiAgICBjb25zdCB7IGhhbmRsZUNsaWNrLCBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoaGFuZGxlQ2xpY2sgJiYgdHlwZW9mIGhhbmRsZUNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBoYW5kbGVDbGljayhpZCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbGFiZWwsIGFjdGl2ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhY3RpdmVTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICcjMjE5NkYzJyxcbiAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgIzE1NTk5ZCdcbiAgICB9O1xuICAgIGNvbnN0IGluYWN0aXZlU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG4gICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkOGQ4ZDgnXG4gICAgfTtcbiAgICBjb25zdCBkZWZhdWx0U3R5bGUgPSB7XG4gICAgICBwYWRkaW5nOiAnMC4yZW0gMC40ZW0nLFxuICAgICAgZm9udFNpemU6ICcwLjllbScsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzUlJyxcbiAgICAgIG1pbldpZHRoOiA0MCxcbiAgICAgIG1hcmdpbkxlZnQ6IDEwXG4gICAgfTtcblxuICAgIGNvbnN0IGJ1dHRvblN0eWxlID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIGRlZmF1bHRTdHlsZSxcbiAgICAgIGFjdGl2ZSA/IGFjdGl2ZVN0eWxlIDogaW5hY3RpdmVTdHlsZVxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBzdHlsZT17YnV0dG9uU3R5bGV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2xpY2soKX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcG9pbnRlckV2ZW50czogJ25vbmUnLCB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GaWx0ZXJCdXR0b24uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbHRlckJ1dHRvbiBmcm9tICcuL0ZpbHRlckJ1dHRvbic7XG5pbXBvcnQgYnV0dG9uQ29uZmlnIGZyb20gJy4vYnV0dG9uQ29uZmlnJztcbmltcG9ydCB0cmFuc2xhdGlvbnMgZnJvbSAnLi9hY3Rpb25UcmFuc2xhdGlvbnMnO1xuXG5jbGFzcyBGaWx0ZXJCdXR0b25UcmF5IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2NhbGUsIGFjdGl2ZUJ1dHRvbklkLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cbiAgICAgICAge2J1dHRvbkNvbmZpZy5maWVsZHMubWFwKGZpZWxkID0+XG4gICAgICAgICAgPEZpbHRlckJ1dHRvblxuICAgICAgICAgICAgYWN0aXZlPXthY3RpdmVCdXR0b25JZCA9PT0gZmllbGQuaWR9XG4gICAgICAgICAgICBpZD17ZmllbGQuaWR9XG4gICAgICAgICAgICBoYW5kbGVDbGljaz17KCkgPT4geyBvbkNoYW5nZShmaWVsZC5pZCkgfX1cbiAgICAgICAgICAgIGtleT17J2ZpbHRlci1idXR0b24tJyArIGZpZWxkLmlkfVxuICAgICAgICAgICAgbGFiZWw9e3RyYW5zbGF0aW9uc1tsb2NhbGVdLmZpbHRlckJ1dHRvbltmaWVsZC5pZF19XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyQnV0dG9uVHJheTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZpbHRlckJ1dHRvblRyYXkuanMiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29sb3IsIGRpbWVuc2lvbiB9IGZyb20gJy4uL3N0eWxlcyc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXJUaW1lbGluZS5jc3MnO1xuXG5jbGFzcyBIZWFkZXJUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaG92ZXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWxpZERheXNPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWxpZEZyb21EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZWZmZWN0aXZlUGVyaW9kczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWRcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZVRvb2xUaXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93VG9vbHRpcDogIXRoaXMuc3RhdGUuc2hvd1Rvb2x0aXBcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGVmZmVjdGl2ZVBlcmlvZHMsIHZhbGlkRGF5c09mZnNldCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRpbWVsaW5lU3R5bGUgPSB7XG4gICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgaGVpZ2h0OiAnMThweCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICB3aWR0aDogZGltZW5zaW9uLnRpbWVMaW5lV2lkdGggKyAnJScsXG4gICAgICBtYXJnaW46ICcxMHB4IGF1dG8nLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIGZvbnRTaXplOiAnMCUnLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9O1xuXG4gICAgbGV0IHRpbWVsaW5lV3JhcHBlciA9IHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBtYXJnaW5Cb3R0b206IDJcbiAgICB9O1xuXG4gICAgbGV0IHRpbWVCbG9jayA9IHtcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lU3VjY2VzcyxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBmb250U2l6ZTogJzAuOHJlbScsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9O1xuXG4gICAgY29uc3QgdGl0bGVUZXh0ID0ge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEwcHgsIDIwcHgpJyxcbiAgICAgIGZvbnRTaXplOiAnMS4yZW0nLFxuICAgICAgY29sb3I6IGVmZmVjdGl2ZVBlcmlvZHMubGVuZ3RoID8gY29sb3IuZWZmZWN0aXZlIDogY29sb3IuZmFpbCxcbiAgICAgIHpJbmRleDogOTlcbiAgICB9O1xuXG4gICAgY29uc3QgdG9vbFRpcFN0eWxlID0ge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAxcycsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICAgIGZvbnRTaXplOiAnMC44ZW0nLFxuICAgICAgY29sb3I6IGNvbG9yLmZvbnQudG9vbHRpcCxcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRvb2x0aXAsXG4gICAgICBwYWRkaW5nOiAxMCxcbiAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICB6SW5kZXg6IDk5XG4gICAgfTtcblxuICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICB0ZXh0U2hhZG93OiAnMHB4IDBweCA1cHggYmxhY2snLFxuICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgIGhlaWdodDogMTgsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcydcbiAgICB9O1xuXG4gICAgbGV0IGhyU3R5bGUgPSB7XG4gICAgICBiYWNrZ3JvdW5kOiAnYmxhY2snLFxuICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgaGVpZ2h0OiAnMThweCcsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIG1hcmdpbkxlZnQ6IDMzICsgdmFsaWREYXlzT2Zmc2V0ICsgJyUnXG4gICAgfTtcblxuICAgIGxldCBob3ZlclRleHQgPSBlZmZlY3RpdmVQZXJpb2RzLmxlbmd0aFxuICAgICAgPyB0aGlzLnByb3BzLmhvdmVyVGV4dFxuICAgICAgOiAnVWd5bGRpZyBsaW5qZS4gTWFuZ2xlciBkYXRhJztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVdyYXBwZXJ9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3RpdGxlVGV4dH1cbiAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5oYW5kbGVUb2dnbGVUb29sVGlwLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZVRvZ2dsZVRvb2xUaXAuYmluZCh0aGlzKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmxpbmV9XG4gICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1Rvb2x0aXAgJiZcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3Rvb2xUaXBTdHlsZX0+IHtob3ZlclRleHR9IDwvZGl2Pn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZWxpbmV9IHN0eWxlPXt0aW1lbGluZVN0eWxlfT5cbiAgICAgICAgICA8ZGl2IGtleT17J3RpbWVsaW5lLWhlYWRlci13cmFwcGVyJyArIHRoaXMucHJvcHMuaW5kZXh9PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17aHJTdHlsZX0gLz5cbiAgICAgICAgICAgIHtlZmZlY3RpdmVQZXJpb2RzLm1hcCgoZWZmZWN0aXZlUGVyaW9kLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgcGVyaW9kQmxvY2sgPSB7IC4uLnRpbWVCbG9jayB9O1xuICAgICAgICAgICAgICBwZXJpb2RCbG9jay53aWR0aCA9XG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gLVxuICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gK1xuICAgICAgICAgICAgICAgICclJztcblxuICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID1cbiAgICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJSc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGVyaW9kQmxvY2subWFyZ2luTGVmdCA9XG4gICAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uIC1cbiAgICAgICAgICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZHNbaW5kZXggLSAxXS50aW1lbGluZUVuZFBvc2l0aW9uICtcbiAgICAgICAgICAgICAgICAgICclJztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGxldCBpdGVtVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZC50bztcblxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA+IDAgJiZcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QuZnJvbS5sb2NhbGVDb21wYXJlKGVmZmVjdGl2ZVBlcmlvZC50bykgIT09IDBcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaXRlbVRleHQgPSBlZmZlY3RpdmVQZXJpb2QuZnJvbSArICcgLSAnICsgZWZmZWN0aXZlUGVyaW9kLnRvO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17J3RpbWVsaW5lLWhlYWRlci1ibG9jaycgKyBpbmRleH0gc3R5bGU9e3BlcmlvZEJsb2NrfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwZXJpb2QtYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW1UZXh0fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge2l0ZW1UZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUaW1lbGluZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbG9yLCBkaW1lbnNpb24gfSBmcm9tICcuLi9zdHlsZXMnO1xuXG5jb25zdCBwZXJpb2QgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBmcm9tOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRvOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRpbWVsaW5lU3RhcnRQb3NpdGlvbjogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lbGluZUVuZFBvc2l0aW9uOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWRcbn0pO1xuXG5jb25zdCB0aW1ldGFibGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBvYmplY3RJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwZXJpb2RzOiBQcm9wVHlwZXMuYXJyYXlPZihwZXJpb2QpLmlzUmVxdWlyZWRcbn0pLmlzUmVxdWlyZWQ7XG5cbmNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0aW1ldGFibGVzOiBQcm9wVHlwZXMuYXJyYXlPZih0aW1ldGFibGUpLmlzUmVxdWlyZWQsXG4gICAgaXNMYXN0OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRGF5c09mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGltZXRhYmxlcywgdmFsaWREYXlzT2Zmc2V0LCBpc0xhc3QgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lQmFja2dyb3VuZCxcbiAgICAgIHdpZHRoOiBkaW1lbnNpb24udGltZUxpbmVXaWR0aCArICclJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9O1xuXG4gICAgY29uc3QgdGltZWxpbmVXcmFwcGVyID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIHBhZGRpbmdCb3R0b206IGlzTGFzdCA/IDAgOiAxMFxuICAgIH07XG5cbiAgICBsZXQgdGltZUJsb2NrID0ge1xuICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVCbG9ja0JhY2tncm91bmQsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgfTtcblxuICAgIGxldCB0ZXh0U3R5bGUgPSB7XG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIG92ZXJmbG93OiAndmlzYmxlJyxcbiAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDVweCBibGFjaycsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgbWFyZ2luOiAnYXV0byAxMHB4JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICBmb250U2l6ZTogJzAuN2VtJyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgIH07XG5cbiAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6ICdibGFjaycsXG4gICAgICB3aWR0aDogJzFweCcsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfTtcblxuICAgIGhyU3R5bGUubWFyZ2luTGVmdCA9IDMzICsgdmFsaWREYXlzT2Zmc2V0ICsgJyUnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lV3JhcHBlcn0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e2hyU3R5bGV9IC8+XG4gICAgICAgICAge3RpbWV0YWJsZXMubWFwKHRpbWV0YWJsZSA9PlxuICAgICAgICAgICAgdGltZXRhYmxlLnBlcmlvZHMubWFwKChwZXJpb2QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGltZXRhYmxlLm9iamVjdElkO1xuICAgICAgICAgICAgICBjb25zdCBob3ZlciA9IGAke3RpdGxlfSBcXG4ocGVyaW9kOiAke3BlcmlvZC5mcm9tfSAtPiAke3BlcmlvZC50b30pYDtcbiAgICAgICAgICAgICAgbGV0IHBlcmlvZEJsb2NrID0geyAuLi50aW1lQmxvY2sgfTtcbiAgICAgICAgICAgICAgcGVyaW9kQmxvY2sud2lkdGggPVxuICAgICAgICAgICAgICAgIHBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC0gcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJztcbiAgICAgICAgICAgICAgcGVyaW9kQmxvY2subWFyZ2luTGVmdCA9IHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJSc7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAga2V5PXsndGltZXRhYmxlLXBlcmlvZC0nICsgaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtwZXJpb2RCbG9ja31cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2hvdmVyfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0U3R5bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoLy9mb250cy5nb29nbGVhcGlzLmNvbS9lYXJseWFjY2Vzcy9ub3Rvc2Fuc2thbm5hZGEuY3NzKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucyBLYW5uYWRhJywgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6ICMxOTE5MTk7XFxufVxcblxcbnAsaDEsaDIsaDMsaDQsaDUsIHNwYW4ge1xcbiAgICBjb2xvcjogIzE5MTkxOTtcXG59XFxuXFxuLl8ycE9aVDZPRXdSMnZfY2k3Mlc0a29COmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4ubVNHS1ZsbWNXRVNieEVIcjdCYXoyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5fMWg5QUctVld4X1U0MFR4VkUwMTU1SyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAzcHg7XFxuICAgIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi5fMWpOLU43eWZTS1loMUtVenJhczRsWiB7XFxuICAgIGNvbG9yOiAjMEQzQzYxO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLl8yMXA1NVZNX2U3NV8yaUJpclcxTWtmIHtcXG4gICAgY29sb3I6ICMyMTk2RjM7XFxufVxcblxcblxcbmEge1xcbiAgICBjb2xvcjogIzIxOTZGMztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmhvdmVyLCBhOmZvY3VzIHtcXG4gICAgY29sb3I6ICMxOTc2RDI7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInBlcmlvZC1ibG9ja1wiOiBcIl8ycE9aVDZPRXdSMnZfY2k3Mlc0a29CXCIsXG5cdFwicGFnZS1saW5rLXBhcmVudFwiOiBcIm1TR0tWbG1jV0VTYnhFSHI3QmF6MlwiLFxuXHRcInBhZ2UtbGlua1wiOiBcIl8xaDlBRy1WV3hfVTQwVHhWRTAxNTVLXCIsXG5cdFwiYWN0aXZlLWxpbmtcIjogXCJfMWpOLU43eWZTS1loMUtVenJhczRsWlwiLFxuXHRcImluYWN0aXZlLWxpbmtcIjogXCJfMjFwNTVWTV9lNzVfMmlCaXJXMU1rZlwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP21vZHVsZXM9dHJ1ZSEuL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLl8ydFUtZjg2Zl80MmcxcFZWUVpYRlhDIHtcXG4gIGJhY2tncm91bmQ6ICNCOTE5MTk7XFxuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgI0I5MTkxOSksIGNvbG9yLXN0b3AoNjYlLCAjQjkxOTE5KSwgY29sb3Itc3RvcCg2NiUsICNmNmY2ZjYpLCBjb2xvci1zdG9wKDEwMCUsICNmNmY2ZjYpKTtcXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjQjkxOTE5IDAlLCAjQjkxOTE5IDY2JSwgI2Y2ZjZmNiA2NiUsICNmNmY2ZjYgMTAwJSk7XFxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsICNCOTE5MTkgMCUsICNCOTE5MTkgNjYlLCAjZjZmNmY2IDY2JSwgI2Y2ZjZmNiAxMDAlKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0I5MTkxOSAwJSwgI0I5MTkxOSA2NiUsICNmNmY2ZjYgNjYlLCAjZjZmNmY2IDEwMCUpO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGNvbG9yLXN0b3AoMCUsICNCOTE5MTkpLCBjb2xvci1zdG9wKDY2JSwgI0I5MTkxOSksIGNvbG9yLXN0b3AoNjYlLCAjZjZmNmY2KSwgY29sb3Itc3RvcCgxMDAlLCAjZjZmNmY2KSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbmV4cG9ydHMubG9jYWxzID0ge1xuXHRcInRpbWVsaW5lXCI6IFwiXzJ0VS1mODZmXzQyZzFwVlZRWlhGWENcIlxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9tb2R1bGVzPXRydWUhLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbnZhcmlhbnQoY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFsaWRhdGVGb3JtYXQoZm9ybWF0KTtcblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKCdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICsgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSkpO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2ZianMvbGliL2ludmFyaWFudC5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9wLXR5cGVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZhQ2hldnJvbkRvd24gPSBmdW5jdGlvbiBGYUNoZXZyb25Eb3duKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTM3LjYgMThsLTE2LjYgMTYuNnEtMC40IDAuNC0xIDAuNHQtMS0wLjRsLTE2LjYtMTYuNnEtMC40LTAuNC0wLjQtMXQwLjQtMWwzLjctMy43cTAuNS0wLjQgMS0wLjR0MSAwLjRsMTEuOSAxMS45IDExLjktMTEuOXEwLjQtMC40IDEtMC40dDEgMC40bDMuNyAzLjdxMC40IDAuNCAwLjQgMXQtMC40IDF6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZhQ2hldnJvbkRvd247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtaWNvbnMvbGliL2ZhL2NoZXZyb24tZG93bi5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZhQ2hldnJvblVwID0gZnVuY3Rpb24gRmFDaGV2cm9uVXAocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMzcuNiAyOS43bC0zLjcgMy43cS0wLjUgMC40LTEgMC40dC0xLTAuNGwtMTEuOS0xMS45LTExLjggMTEuOXEtMC41IDAuNC0xLjEgMC40dC0xLTAuNGwtMy43LTMuN3EtMC40LTAuNC0wLjQtMXQwLjQtMWwxNi42LTE2LjZxMC40LTAuNCAxLTAuNHQxIDAuNGwxNi42IDE2LjZxMC40IDAuNCAwLjQgMXQtMC40IDF6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZhQ2hldnJvblVwO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9mYS9jaGV2cm9uLXVwLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFDb2cgPSBmdW5jdGlvbiBGYUNvZyhwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yNS45IDIwcTAtMi40LTEuNy00dC00LjEtMS43LTQgMS43LTEuNyA0IDEuNyA0IDQgMS43IDQuMS0xLjcgMS43LTR6IG0xMS40LTIuNHY0LjlxMCAwLjMtMC4yIDAuNXQtMC40IDAuM2wtNC4yIDAuNnEtMC40IDEuMy0wLjggMi4xIDAuNyAxLjEgMi4zIDMuMSAwLjMgMC4yIDAuMyAwLjV0LTAuMiAwLjVxLTAuNiAwLjktMi4yIDIuNHQtMi4xIDEuNnEtMC4zIDAtMC42LTAuMmwtMy4xLTIuNHEtMSAwLjUtMiAwLjktMC40IDMtMC43IDQuMS0wLjEgMC42LTAuOCAwLjZoLTQuOXEtMC4zIDAtMC42LTAuMXQtMC4yLTAuNWwtMC43LTQuMXEtMS4xLTAuNC0yLTAuOWwtMy4xIDIuNHEtMC4yIDAuMi0wLjYgMC4yLTAuMyAwLTAuNS0wLjItMi44LTIuNi0zLjctMy44LTAuMi0wLjItMC4yLTAuNSAwLTAuMiAwLjItMC41IDAuMy0wLjUgMS4xLTEuNXQxLjItMS41cS0wLjYtMS4yLTAuOS0yLjNsLTQuMS0wLjZxLTAuMiAwLTAuNC0wLjJ0LTAuMi0wLjZ2LTQuOXEwLTAuMyAwLjItMC41dDAuNC0wLjNsNC4yLTAuN3EwLjMtMSAwLjgtMi0wLjktMS4zLTIuNC0zLjEtMC4yLTAuMy0wLjItMC41IDAtMC4yIDAuMi0wLjUgMC42LTAuOCAyLjItMi40dDIuMS0xLjZxMC4zIDAgMC42IDAuMmwzLjEgMi40cTEtMC41IDItMC45IDAuNC0zIDAuNy00LjEgMC4xLTAuNiAwLjgtMC42aDQuOXEwLjMgMCAwLjYgMC4xdDAuMiAwLjVsMC43IDQuMXExIDAuNCAyIDAuOWwzLjEtMi40cTAuMi0wLjIgMC42LTAuMiAwLjMgMCAwLjUgMC4yIDIuOSAyLjYgMy43IDMuOCAwLjIgMC4yIDAuMiAwLjUgMCAwLjItMC4yIDAuNS0wLjQgMC41LTEuMiAxLjV0LTEuMiAxLjVxMC42IDEuMiAxIDIuMmw0IDAuN3EwLjMgMCAwLjUgMC4ydDAuMiAwLjZ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZhQ29nO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9mYS9jb2cuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYVJlZnJlc2ggPSBmdW5jdGlvbiBGYVJlZnJlc2gocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMzYuNyAyMy42cTAgMC4xIDAgMC4xLTEuNCA2LTYgOS43dC0xMC42IDMuN3EtMy4zIDAtNi40LTEuMnQtNS40LTMuNWwtMi45IDIuOXEtMC40IDAuNC0xIDAuNHQtMS0wLjQtMC40LTF2LTEwcTAtMC42IDAuNC0xdDEtMC40aDEwcTAuNiAwIDEgMC40dDAuNSAxLTAuNSAxbC0zIDNxMS42IDEuNSAzLjYgMi4zdDQuMSAwLjhxMyAwIDUuNi0xLjR0NC4yLTRxMC4yLTAuNCAxLjItMi42IDAuMS0wLjUgMC42LTAuNWg0LjNxMC4zIDAgMC41IDAuMnQwLjIgMC41eiBtMC42LTE3Ljl2MTBxMCAwLjYtMC40IDF0LTEgMC40aC0xMHEtMC42IDAtMS0wLjR0LTAuNS0xIDAuNS0xbDMtMy4xcS0zLjMtMy03LjgtMy0yLjkgMC01LjUgMS40dC00LjIgNHEtMC4yIDAuNC0xLjIgMi42LTAuMiAwLjUtMC42IDAuNWgtNC41cS0wLjMgMC0wLjUtMC4ydC0wLjItMC41di0wLjFxMS41LTYgNi05Ljd0MTAuNy0zLjdxMy4zIDAgNi40IDEuMnQ1LjQgMy41bDMtMi45cTAuNC0wLjQgMS0wLjR0MSAwLjQgMC40IDF6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZhUmVmcmVzaDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvZmEvcmVmcmVzaC5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kQ2hlY2tDaXJjbGUgPSBmdW5jdGlvbiBNZENoZWNrQ2lyY2xlKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTE2LjYgMjguNGwxNS0xNS0yLjMtMi41LTEyLjcgMTIuNy01LjktNS45LTIuMyAyLjN6IG0zLjQtMjVjOS4yIDAgMTYuNiA3LjQgMTYuNiAxNi42cy03LjQgMTYuNi0xNi42IDE2LjYtMTYuNi03LjQtMTYuNi0xNi42IDcuNC0xNi42IDE2LjYtMTYuNnonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWRDaGVja0NpcmNsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvbWQvY2hlY2stY2lyY2xlLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRFcnJvciA9IGZ1bmN0aW9uIE1kRXJyb3IocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMjEuNiAyMS42di0xMGgtMy4ydjEwaDMuMnogbTAgNi44di0zLjRoLTMuMnYzLjRoMy4yeiBtLTEuNi0yNWM5LjIgMCAxNi42IDcuNCAxNi42IDE2LjZzLTcuNCAxNi42LTE2LjYgMTYuNi0xNi42LTcuNC0xNi42LTE2LjYgNy40LTE2LjYgMTYuNi0xNi42eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZEVycm9yO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9lcnJvci5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kSGVscE91dGxpbmUgPSBmdW5jdGlvbiBNZEhlbHBPdXRsaW5lKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIwIDEwYzMuNyAwIDYuNiAzIDYuNiA2LjYgMCA0LjItNSA0LjctNSA4LjRoLTMuMmMwLTUuNCA1LTUgNS04LjQgMC0xLjgtMS42LTMuMi0zLjQtMy4ycy0zLjQgMS40LTMuNCAzLjJoLTMuMmMwLTMuNiAyLjktNi42IDYuNi02LjZ6IG0wIDIzLjRjNy4zIDAgMTMuNC02LjEgMTMuNC0xMy40cy02LjEtMTMuNC0xMy40LTEzLjQtMTMuNCA2LjEtMTMuNCAxMy40IDYuMSAxMy40IDEzLjQgMTMuNHogbTAtMzBjOS4yIDAgMTYuNiA3LjQgMTYuNiAxNi42cy03LjQgMTYuNi0xNi42IDE2LjYtMTYuNi03LjQtMTYuNi0xNi42IDcuNC0xNi42IDE2LjYtMTYuNnogbS0xLjYgMjYuNnYtMy40aDMuMnYzLjRoLTMuMnonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWRIZWxwT3V0bGluZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvbWQvaGVscC1vdXRsaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRIb3VyZ2xhc3NFbXB0eSA9IGZ1bmN0aW9uIE1kSG91cmdsYXNzRW1wdHkocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMjAgMTkuMWw2LjYtNi42di01LjloLTEzLjJ2NS45eiBtNi42IDguNGwtNi42LTYuNi02LjYgNi42djUuOWgxMy4ydi01Ljl6IG0tMTYuNi0yNC4xaDIwdjEwbC02LjYgNi42IDYuNiA2LjZ2MTBoLTIwdi0xMGw2LjYtNi42LTYuNi02LjZ2LTEweicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZEhvdXJnbGFzc0VtcHR5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWljb25zL2xpYi9tZC9ob3VyZ2xhc3MtZW1wdHkuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZFNjaGVkdWxlID0gZnVuY3Rpb24gTWRTY2hlZHVsZShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMC45IDExLjZ2OC44bDcuNSA0LjQtMS4zIDIuMi04LjctNS40di0xMGgyLjV6IG0tMC45IDIxLjhjNy4zIDAgMTMuNC02LjEgMTMuNC0xMy40cy02LjEtMTMuNC0xMy40LTEzLjQtMTMuNCA2LjEtMTMuNCAxMy40IDYuMSAxMy40IDEzLjQgMTMuNHogbTAtMzBjOS4yIDAgMTYuNiA3LjQgMTYuNiAxNi42cy03LjQgMTYuNi0xNi42IDE2LjYtMTYuNi03LjQtMTYuNi0xNi42IDcuNC0xNi42IDE2LjYtMTYuNnonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTWRTY2hlZHVsZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1pY29ucy9saWIvbWQvc2NoZWR1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3N0eWxlLWxvYWRlci9maXhVcmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vRXZlbnREZXRhaWxzLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9FdmVudERldGFpbHMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9FdmVudERldGFpbHMuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0V2ZW50RGV0YWlscy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9IZWFkZXJUaW1lbGluZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bW9kdWxlcz10cnVlIS4vSGVhZGVyVGltZWxpbmUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9tb2R1bGVzPXRydWUhLi9IZWFkZXJUaW1lbGluZS5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuY3NzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9