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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dimension", function() { return dimension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });

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

var color = {
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
  soonInvalid: '#33c146',
  expired: '#FFAA00',
  highlight: {
    valid: '#4caf50',
    soonInvalid: '#4caf50',
    invalid: '#cc0000'
  }
};

var dimension = {};

var styles = {
  color: color,
  dimension: dimension
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Timeline__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return __WEBPACK_IMPORTED_MODULE_0__Timeline__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeaderTimeline__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTimeline", function() { return __WEBPACK_IMPORTED_MODULE_1__HeaderTimeline__["a"]; });





/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

      var timelineStyle = {
        border: '1px solid black',
        borderRadius: 5,
        background: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].timeLineFail,
        height: 18,
        width: '85%',
        margin: 'auto',
        display: 'block',
        overflow: 'hidden',
        fontSize: '0%'
      };

      var timelineWrapper = {
        width: '100%',
        marginBottom: 2
      };

      var timeBlock = {
        background: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].timeLineSuccess,
        height: 'auto',
        cursor: 'pointer',
        fontWeight: 500,
        fontSize: '0.8rem',
        textAlign: 'center',
        display: 'inline-block',
        borderRight: '1px solid black'
      };

      var toolTipStyle = {
        position: 'relative',
        transition: 'opacity 1s',
        display: 'inline',
        fontSize: '0.8em',
        color: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].font.tooltip,
        background: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].tooltip,
        padding: 10,
        width: 'auto',
        zIndex: 99
      };

      var textSpanStyle = {
        color: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].font.inverse,
        height: 18,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      };

      var _props = this.props,
          effectivePeriods = _props.effectivePeriods,
          validDaysOffset = _props.validDaysOffset;


      var hrStyle = {
        transform: 'rotate(90deg) translateX(20px)',
        borderTop: '1px dotted',
        borderColor: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].border,
        marginTop: 9,
        width: 15,
        position: 'relative'
      };

      hrStyle.marginLeft = 33 + validDaysOffset + '%';

      var hoverText = effectivePeriods.length ? this.props.hoverText : 'Ugyldig linje. Mangler data';

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: timelineWrapper },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: { display: 'inline-block', cursor: 'pointer', transform: 'translate(12px, 30px)', fontSize: '1.2em', color: effectivePeriods.length ? __WEBPACK_IMPORTED_MODULE_1__styles__["color"].effective : __WEBPACK_IMPORTED_MODULE_1__styles__["color"].fail },
            onMouseOver: this.handleToggleToolTip.bind(this),
            onMouseLeave: this.handleToggleToolTip.bind(this)
          },
          this.props.line,
          this.state.showTooltip && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { style: toolTipStyle },
            ' ',
            hoverText,
            ' '
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', { style: hrStyle }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: timelineStyle },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: 'timeline-header-wrapper' + this.props.index },
            effectivePeriods.map(function (effectivePeriod, index) {

              var periodBlock = _extends({}, timeBlock);
              periodBlock.width = effectivePeriod.timelineEndPosition - effectivePeriod.timelineStartPosition + '%';

              if (index == 0) {
                periodBlock.marginLeft = effectivePeriod.timelineStartPosition + '%';
              } else {
                periodBlock.marginLeft = effectivePeriod.timelineStartPosition - effectivePeriods[index - 1].timelineEndPosition + '%';
              }

              var itemText = effectivePeriod.to;

              if (effectivePeriod.timelineStartPosition > 0 && effectivePeriod.from.localeCompare(effectivePeriod.to) !== 0) {
                itemText = effectivePeriod.from + ' - ' + effectivePeriod.to;
              }

              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  key: 'timeline-header-block' + index,
                  style: periodBlock },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: textSpanStyle },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'period-block', style: { height: '100%', color: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].font.inverse, verticalAlign: 'middle' }, title: itemText },
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
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

HeaderTimeline.propTypes = {
  hoverText: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  index: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number.isRequired,
  validDaysOffset: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number.isRequired,
  validFromDate: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  effectivePeriods: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].array.isRequired
};


/* harmony default export */ __webpack_exports__["a"] = (HeaderTimeline);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__(1);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Timeline = function (_React$Component) {
  _inherits(Timeline, _React$Component);

  function Timeline(props) {
    _classCallCheck(this, Timeline);

    return _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call(this, props));
  }

  _createClass(Timeline, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          timetables = _props.timetables,
          validDaysOffset = _props.validDaysOffset,
          isLast = _props.isLast;
      var periods = timetables[0].periods;


      var timelineStyle = {
        border: '1px solid black',
        borderRadius: 5,
        background: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].timeLineBackground,
        height: '100%',
        width: '85%',
        margin: 'auto',
        display: 'block',
        overflowY: 'auto',
        marginBottom: isLast ? -15 : 'auto'
      };

      var timelineWrapper = {
        width: '100%',
        paddingBottom: isLast ? 0 : 10
      };

      var timeBlock = {
        background: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].timeLineBlockBackground,
        width: '100%',
        height: '100%',
        color: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].font.inverse,
        fontWeight: 500
      };

      var textStyle = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'block',
        margin: 'auto 10px',
        color: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].font.inverse,
        fontSize: '0.7em',
        fontWeight: 500
      };

      var hrStyle = {
        transform: 'rotate(90deg)',
        borderTop: '1px dotted',
        borderColor: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].border,
        width: 15,
        marginTop: 9,
        position: 'absolute'
      };

      hrStyle.marginLeft = 33 + validDaysOffset + '%';

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: timelineWrapper },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', { style: hrStyle }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: timelineStyle },
          periods.map(function (period, index) {
            var periodBlock = _extends({}, timeBlock);
            periodBlock.width = period.timelineEndPosition - period.timelineStartPosition + '%';
            periodBlock.marginLeft = period.timelineStartPosition + '%';
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { key: 'timetable-period-' + index, style: periodBlock, title: timetables[0].objectId },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { style: textStyle },
                timetables[0].objectId
              )
            );
          })
        )
      );
    }
  }]);

  return Timeline;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Timeline);

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkMTJkNTA1ZTI1N2EzMjE0MGE4MSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiXSwibmFtZXMiOlsiY29sb3JEZWYiLCJibGFjayIsIndoaXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYmlnYmx1ZSIsImRhcmtCbHVlIiwiZGFya0dyZXkiLCJncmV5IiwibGlnaHRHcmV5IiwiZW50dXIiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiY29sb3IiLCJmb250IiwiaW52ZXJzZSIsInRpdGxlIiwiaW5mbzEiLCJpbmZvMiIsImluZm8zIiwid2FybiIsImRpc2FibGVkIiwidG9vbHRpcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJlZmZlY3RpdmUiLCJmYWlsIiwibW9kYWwiLCJiYWNrZHJvcCIsInRhYkFjdGl2ZSIsInRpbWVMaW5lQmFja2dyb3VuZCIsInRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kIiwidGltZUxpbmVCb3JkZXIiLCJ0aW1lTGluZVN1Y2Nlc3MiLCJ0aW1lTGluZUZhaWwiLCJ0YWJsZUhlYWRlciIsInRhYmxlUm93IiwidGFibGVJbmZvIiwidmFsaWQiLCJpbnZhbGlkIiwic29vbkludmFsaWQiLCJleHBpcmVkIiwiaGlnaGxpZ2h0IiwiZGltZW5zaW9uIiwic3R5bGVzIiwiSGVhZGVyVGltZWxpbmUiLCJwcm9wcyIsInN0YXRlIiwic2hvd1Rvb2x0aXAiLCJzZXRTdGF0ZSIsInRpbWVsaW5lU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsImRpc3BsYXkiLCJvdmVyZmxvdyIsImZvbnRTaXplIiwidGltZWxpbmVXcmFwcGVyIiwibWFyZ2luQm90dG9tIiwidGltZUJsb2NrIiwiY3Vyc29yIiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsImJvcmRlclJpZ2h0IiwidG9vbFRpcFN0eWxlIiwicG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwicGFkZGluZyIsInpJbmRleCIsInRleHRTcGFuU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwid2hpdGVTcGFjZSIsInRleHRPdmVyZmxvdyIsImVmZmVjdGl2ZVBlcmlvZHMiLCJ2YWxpZERheXNPZmZzZXQiLCJoclN0eWxlIiwidHJhbnNmb3JtIiwiYm9yZGVyVG9wIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiaG92ZXJUZXh0IiwibGVuZ3RoIiwiaGFuZGxlVG9nZ2xlVG9vbFRpcCIsImJpbmQiLCJsaW5lIiwiaW5kZXgiLCJtYXAiLCJlZmZlY3RpdmVQZXJpb2QiLCJwZXJpb2RCbG9jayIsInRpbWVsaW5lRW5kUG9zaXRpb24iLCJ0aW1lbGluZVN0YXJ0UG9zaXRpb24iLCJpdGVtVGV4dCIsInRvIiwiZnJvbSIsImxvY2FsZUNvbXBhcmUiLCJ2ZXJ0aWNhbEFsaWduIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwidmFsaWRGcm9tRGF0ZSIsImFycmF5IiwiVGltZWxpbmUiLCJ0aW1ldGFibGVzIiwiaXNMYXN0IiwicGVyaW9kcyIsIm92ZXJmbG93WSIsInBhZGRpbmdCb3R0b20iLCJ0ZXh0U3R5bGUiLCJwZXJpb2QiLCJvYmplY3RJZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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RUE3RW9CLDZDQUFBakIsQ0FBTUMsUzs7QUFnRjdCLHlEQUFlUSxRQUFmLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQxMmQ1MDVlMjU3YTMyMTQwYTgxIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcbmNvbnN0IGNvbG9yRGVmID0ge1xuICBibGFjazogJyMwMDAnLFxuICB3aGl0ZTogJyNGRkYnLFxuICByZWQ6ICcjRjAwJyxcbiAgZ3JlZW46ICcjMEYwJyxcbiAgYmx1ZTogJyMwMEYnLFxuICBiaWdibHVlOiAnIzExNjlBNycsXG4gIGRhcmtCbHVlOiAnIzA4MzQ1MycsXG4gIGRhcmtHcmV5OiAnIzJGMkYyRicsXG4gIGdyZXk6ICcjREREREREJyxcbiAgbGlnaHRHcmV5OiAnI0YyRjJGMicsXG4gIGVudHVyOiB7XG4gICAgcHJpbWFyeTogJyMyNzNBNDYnLCAgIC8vIDM5LDU4LDcwXG4gICAgc2Vjb25kYXJ5OiAnIzZCQkRDMicsIC8vMTA3LDE4OSwxOTQsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbG9yID0ge1xuICBmb250OiB7XG4gICAgaW52ZXJzZTogY29sb3JEZWYud2hpdGUsXG4gICAgdGl0bGU6IGNvbG9yRGVmLmJsYWNrLFxuICAgIGluZm8xOiBjb2xvckRlZi5lbnR1ci5zZWNvbmRhcnksXG4gICAgaW5mbzI6IGNvbG9yRGVmLmRhcmtCbHVlLFxuICAgIGluZm8zOiBjb2xvckRlZi5ibGFjayxcbiAgICB3YXJuOiBjb2xvckRlZi5yZWQsXG4gICAgZGlzYWJsZWQ6IGNvbG9yRGVmLmdyZXksXG5cbiAgICB0b29sdGlwOiBjb2xvckRlZi53aGl0ZSxcbiAgfSxcbiAgYmFja2dyb3VuZDogY29sb3JEZWYuZW50dXIucHJpbWFyeSxcbiAgYm9yZGVyOiBjb2xvckRlZi5ibGFjayxcbiAgZWZmZWN0aXZlOiBjb2xvckRlZi5ibGFjayxcbiAgZmFpbDogY29sb3JEZWYucmVkLFxuICBtb2RhbDogY29sb3JEZWYud2hpdGUsXG4gIGJhY2tkcm9wOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcbiAgdG9vbHRpcDogJyMxOTE5MTknLFxuICB0YWJBY3RpdmU6IGNvbG9yRGVmLmVudHVyLnNlY29uZGFyeSxcblxuICB0aW1lTGluZUJhY2tncm91bmQ6ICcjREVEOEQ4JyxcbiAgdGltZUxpbmVCbG9ja0JhY2tncm91bmQ6ICcjNkQ5MkI2JyxcbiAgdGltZUxpbmVCb3JkZXI6ICcjZWVlJyxcbiAgdGltZUxpbmVTdWNjZXNzOiAnIzVEQUU1RCcsXG4gIHRpbWVMaW5lRmFpbDogJyNCOTE5MTknLFxuICB0YWJsZUhlYWRlcjogY29sb3JEZWYubGlnaHRHcmV5LFxuICB0YWJsZVJvdzogJyNlYmYyZjEnLFxuICB0YWJsZUluZm86ICcjZmZmZmRiJyxcblxuICB2YWxpZDogJyMzM2MxNDYnLFxuICBpbnZhbGlkOiAnI2IyMDAwMCcsXG4gIHNvb25JbnZhbGlkOiAnIzMzYzE0NicsXG4gIGV4cGlyZWQ6ICcjRkZBQTAwJyxcbiAgaGlnaGxpZ2h0IDoge1xuICAgIHZhbGlkOiAnIzRjYWY1MCcsXG4gICAgc29vbkludmFsaWQ6ICcjNGNhZjUwJyxcbiAgICBpbnZhbGlkOiAnI2NjMDAwMCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRpbWVuc2lvbiA9IHtcblxufVxuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICBjb2xvcjogY29sb3IsXG4gIGRpbWVuc2lvbjogZGltZW5zaW9uLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlcy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vc3R5bGVzJ1xuXG5jbGFzcyBIZWFkZXJUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBob3ZlclRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRGF5c09mZnNldDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRnJvbURhdGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBlZmZlY3RpdmVQZXJpb2RzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dUb29sdGlwOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZVRvb2xUaXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93VG9vbHRpcDogIXRoaXMuc3RhdGUuc2hvd1Rvb2x0aXBcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgICBjb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lRmFpbCxcbiAgICAgICAgaGVpZ2h0OiAxOCxcbiAgICAgICAgd2lkdGg6ICc4NSUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBmb250U2l6ZTogJzAlJyxcbiAgICAgIH1cblxuICAgICAgbGV0IHRpbWVsaW5lV3JhcHBlciA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyXG4gICAgICB9XG5cbiAgICAgIGxldCB0aW1lQmxvY2sgPSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lU3VjY2VzcyxcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGZvbnRTaXplOiAnMC44cmVtJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9vbFRpcFN0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMXMnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICAgICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgICAgIGNvbG9yOiBjb2xvci5mb250LnRvb2x0aXAsXG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRvb2x0aXAsXG4gICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICB6SW5kZXg6IDk5LFxuICAgICAgfVxuXG4gICAgICBjb25zdCB0ZXh0U3BhblN0eWxlID0ge1xuICAgICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgICBoZWlnaHQ6IDE4LFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgZWZmZWN0aXZlUGVyaW9kcywgdmFsaWREYXlzT2Zmc2V0IH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGxldCBoclN0eWxlID0ge1xuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVgoMjBweCknLFxuICAgICAgICBib3JkZXJUb3A6ICcxcHggZG90dGVkJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLmJvcmRlcixcbiAgICAgICAgbWFyZ2luVG9wOiA5LFxuICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgfVxuXG4gICAgICBoclN0eWxlLm1hcmdpbkxlZnQgPSAoMzMgKyB2YWxpZERheXNPZmZzZXQpICsgJyUnXG5cbiAgICAgIGxldCBob3ZlclRleHQgPSBlZmZlY3RpdmVQZXJpb2RzLmxlbmd0aCA/ICB0aGlzLnByb3BzLmhvdmVyVGV4dCA6ICdVZ3lsZGlnIGxpbmplLiBNYW5nbGVyIGRhdGEnXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lV3JhcHBlcn0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jaycsIGN1cnNvcjogJ3BvaW50ZXInLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTJweCwgMzBweCknLCBmb250U2l6ZTogJzEuMmVtJywgY29sb3I6IGVmZmVjdGl2ZVBlcmlvZHMubGVuZ3RoID8gY29sb3IuZWZmZWN0aXZlIDogY29sb3IuZmFpbH19XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5oYW5kbGVUb2dnbGVUb29sVGlwLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlVG9nZ2xlVG9vbFRpcC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubGluZX1cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dUb29sdGlwICYmIDxkaXYgc3R5bGU9e3Rvb2xUaXBTdHlsZX0+IHtob3ZlclRleHR9IDwvZGl2Pn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociBzdHlsZT17aHJTdHlsZX0vPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVTdHlsZX0+XG4gICAgICAgICAgICA8ZGl2IGtleT17J3RpbWVsaW5lLWhlYWRlci13cmFwcGVyJyt0aGlzLnByb3BzLmluZGV4fT5cbiAgICAgICAgICAgIHsgZWZmZWN0aXZlUGVyaW9kcy5tYXAoIChlZmZlY3RpdmVQZXJpb2QsIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcGVyaW9kQmxvY2sgPSB7Li4udGltZUJsb2NrfVxuICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLndpZHRoID0gKGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC0gZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbikgKyAnJSdcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID0gKGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJScpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPSAoZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiAtIGVmZmVjdGl2ZVBlcmlvZHNbaW5kZXgtMV0udGltZWxpbmVFbmRQb3NpdGlvbikgKyAnJSdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgaXRlbVRleHQgPSBlZmZlY3RpdmVQZXJpb2QudG9cblxuICAgICAgICAgICAgICAgIGlmIChlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID4gMCAmJiBlZmZlY3RpdmVQZXJpb2QuZnJvbS5sb2NhbGVDb21wYXJlKGVmZmVjdGl2ZVBlcmlvZC50bykgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGl0ZW1UZXh0ID0gZWZmZWN0aXZlUGVyaW9kLmZyb20gKyAnIC0gJyArIGVmZmVjdGl2ZVBlcmlvZC50b1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9eyd0aW1lbGluZS1oZWFkZXItYmxvY2snK2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtwZXJpb2RCbG9ja30+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dFNwYW5TdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyaW9kLWJsb2NrXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSwgdmVydGljYWxBbGlnbjogJ21pZGRsZSd9fSB0aXRsZT17aXRlbVRleHR9PntpdGVtVGV4dH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyVGltZWxpbmVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi9zdHlsZXMnXG5cbmNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuXG4gICAgICBjb25zdCB7IHRpbWV0YWJsZXMsIHZhbGlkRGF5c09mZnNldCwgaXNMYXN0IH0gPSB0aGlzLnByb3BzXG5cbiAgICAgIGxldCB7IHBlcmlvZHMgfSA9IHRpbWV0YWJsZXNbMF1cblxuICAgICAgY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUJhY2tncm91bmQsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzg1JScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiBpc0xhc3QgPyAtMTUgOiAnYXV0bydcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGltZWxpbmVXcmFwcGVyID0ge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBwYWRkaW5nQm90dG9tOiBpc0xhc3QgPyAwIDogMTBcbiAgICAgIH1cblxuICAgICAgbGV0IHRpbWVCbG9jayA9IHtcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVCbG9ja0JhY2tncm91bmQsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICAgIH1cblxuICAgICAgbGV0IHRleHRTdHlsZSA9IHtcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXJnaW46ICdhdXRvIDEwcHgnLFxuICAgICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgICBmb250U2l6ZTogJzAuN2VtJyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgICB9XG5cbiAgICAgIGxldCBoclN0eWxlID0ge1xuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoOTBkZWcpJyxcbiAgICAgICAgYm9yZGVyVG9wOiAnMXB4IGRvdHRlZCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvci5ib3JkZXIsXG4gICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgbWFyZ2luVG9wOiA5LFxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICAgICAgfVxuXG4gICAgICBoclN0eWxlLm1hcmdpbkxlZnQgPSAoMzMgKyB2YWxpZERheXNPZmZzZXQpICsgJyUnXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lV3JhcHBlcn0+XG4gICAgICAgICAgPGhyIHN0eWxlPXtoclN0eWxlfS8+XG4gICAgICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVTdHlsZX0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBlcmlvZHMubWFwKCAocGVyaW9kLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwZXJpb2RCbG9jayA9IHsuLi50aW1lQmxvY2t9XG4gICAgICAgICAgICAgICAgcGVyaW9kQmxvY2sud2lkdGggPSAocGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gLSBwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uKSArICclJ1xuICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPSAocGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJylcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9eyd0aW1ldGFibGUtcGVyaW9kLScraW5kZXh9IHN0eWxlPXtwZXJpb2RCbG9ja30gdGl0bGU9e3RpbWV0YWJsZXNbMF0ub2JqZWN0SWR9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0U3R5bGV9Pnt0aW1ldGFibGVzWzBdLm9iamVjdElkfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiXSwic291cmNlUm9vdCI6IiJ9