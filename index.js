(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["bogu"] = factory(require("react"));
	else
		root["bogu"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
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
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__(0);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__(0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2YzJiNjFlN2NjZWM5ODA5NzllOCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiXSwibmFtZXMiOlsiY29sb3JEZWYiLCJibGFjayIsIndoaXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYmlnYmx1ZSIsImRhcmtCbHVlIiwiZGFya0dyZXkiLCJncmV5IiwibGlnaHRHcmV5IiwiZW50dXIiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiY29sb3IiLCJmb250IiwiaW52ZXJzZSIsInRpdGxlIiwiaW5mbzEiLCJpbmZvMiIsImluZm8zIiwid2FybiIsImRpc2FibGVkIiwidG9vbHRpcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJlZmZlY3RpdmUiLCJmYWlsIiwibW9kYWwiLCJiYWNrZHJvcCIsInRhYkFjdGl2ZSIsInRpbWVMaW5lQmFja2dyb3VuZCIsInRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kIiwidGltZUxpbmVCb3JkZXIiLCJ0aW1lTGluZVN1Y2Nlc3MiLCJ0aW1lTGluZUZhaWwiLCJ0YWJsZUhlYWRlciIsInRhYmxlUm93IiwidGFibGVJbmZvIiwidmFsaWQiLCJpbnZhbGlkIiwic29vbkludmFsaWQiLCJleHBpcmVkIiwiaGlnaGxpZ2h0IiwiZGltZW5zaW9uIiwic3R5bGVzIiwiSGVhZGVyVGltZWxpbmUiLCJwcm9wcyIsInN0YXRlIiwic2hvd1Rvb2x0aXAiLCJzZXRTdGF0ZSIsInRpbWVsaW5lU3R5bGUiLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJ3aWR0aCIsIm1hcmdpbiIsImRpc3BsYXkiLCJvdmVyZmxvdyIsImZvbnRTaXplIiwidGltZWxpbmVXcmFwcGVyIiwibWFyZ2luQm90dG9tIiwidGltZUJsb2NrIiwiY3Vyc29yIiwiZm9udFdlaWdodCIsInRleHRBbGlnbiIsImJvcmRlclJpZ2h0IiwidG9vbFRpcFN0eWxlIiwicG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwicGFkZGluZyIsInpJbmRleCIsInRleHRTcGFuU3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwid2hpdGVTcGFjZSIsInRleHRPdmVyZmxvdyIsImVmZmVjdGl2ZVBlcmlvZHMiLCJ2YWxpZERheXNPZmZzZXQiLCJoclN0eWxlIiwidHJhbnNmb3JtIiwiYm9yZGVyVG9wIiwiYm9yZGVyQ29sb3IiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiaG92ZXJUZXh0IiwibGVuZ3RoIiwiaGFuZGxlVG9nZ2xlVG9vbFRpcCIsImJpbmQiLCJsaW5lIiwiaW5kZXgiLCJtYXAiLCJlZmZlY3RpdmVQZXJpb2QiLCJwZXJpb2RCbG9jayIsInRpbWVsaW5lRW5kUG9zaXRpb24iLCJ0aW1lbGluZVN0YXJ0UG9zaXRpb24iLCJpdGVtVGV4dCIsInRvIiwiZnJvbSIsImxvY2FsZUNvbXBhcmUiLCJ2ZXJ0aWNhbEFsaWduIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwidmFsaWRGcm9tRGF0ZSIsImFycmF5IiwiVGltZWxpbmUiLCJ0aW1ldGFibGVzIiwiaXNMYXN0IiwicGVyaW9kcyIsIm92ZXJmbG93WSIsInBhZGRpbmdCb3R0b20iLCJ0ZXh0U3R5bGUiLCJwZXJpb2QiLCJvYmplY3RJZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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RUE3RW9CLDZDQUFBakIsQ0FBTUMsUzs7QUFnRjdCLHlEQUFlUSxRQUFmLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzFfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZjMmI2MWU3Y2NlYzk4MDk3OWU4IiwiXG5jb25zdCBjb2xvckRlZiA9IHtcbiAgYmxhY2s6ICcjMDAwJyxcbiAgd2hpdGU6ICcjRkZGJyxcbiAgcmVkOiAnI0YwMCcsXG4gIGdyZWVuOiAnIzBGMCcsXG4gIGJsdWU6ICcjMDBGJyxcbiAgYmlnYmx1ZTogJyMxMTY5QTcnLFxuICBkYXJrQmx1ZTogJyMwODM0NTMnLFxuICBkYXJrR3JleTogJyMyRjJGMkYnLFxuICBncmV5OiAnI0RERERERCcsXG4gIGxpZ2h0R3JleTogJyNGMkYyRjInLFxuICBlbnR1cjoge1xuICAgIHByaW1hcnk6ICcjMjczQTQ2JywgICAvLyAzOSw1OCw3MFxuICAgIHNlY29uZGFyeTogJyM2QkJEQzInLCAvLzEwNywxODksMTk0LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgZm9udDoge1xuICAgIGludmVyc2U6IGNvbG9yRGVmLndoaXRlLFxuICAgIHRpdGxlOiBjb2xvckRlZi5ibGFjayxcbiAgICBpbmZvMTogY29sb3JEZWYuZW50dXIuc2Vjb25kYXJ5LFxuICAgIGluZm8yOiBjb2xvckRlZi5kYXJrQmx1ZSxcbiAgICBpbmZvMzogY29sb3JEZWYuYmxhY2ssXG4gICAgd2FybjogY29sb3JEZWYucmVkLFxuICAgIGRpc2FibGVkOiBjb2xvckRlZi5ncmV5LFxuXG4gICAgdG9vbHRpcDogY29sb3JEZWYud2hpdGUsXG4gIH0sXG4gIGJhY2tncm91bmQ6IGNvbG9yRGVmLmVudHVyLnByaW1hcnksXG4gIGJvcmRlcjogY29sb3JEZWYuYmxhY2ssXG4gIGVmZmVjdGl2ZTogY29sb3JEZWYuYmxhY2ssXG4gIGZhaWw6IGNvbG9yRGVmLnJlZCxcbiAgbW9kYWw6IGNvbG9yRGVmLndoaXRlLFxuICBiYWNrZHJvcDogJ3JnYmEoMCwgMCwgMCwgMC4zKScsXG4gIHRvb2x0aXA6ICcjMTkxOTE5JyxcbiAgdGFiQWN0aXZlOiBjb2xvckRlZi5lbnR1ci5zZWNvbmRhcnksXG5cbiAgdGltZUxpbmVCYWNrZ3JvdW5kOiAnI0RFRDhEOCcsXG4gIHRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kOiAnIzZEOTJCNicsXG4gIHRpbWVMaW5lQm9yZGVyOiAnI2VlZScsXG4gIHRpbWVMaW5lU3VjY2VzczogJyM1REFFNUQnLFxuICB0aW1lTGluZUZhaWw6ICcjQjkxOTE5JyxcbiAgdGFibGVIZWFkZXI6IGNvbG9yRGVmLmxpZ2h0R3JleSxcbiAgdGFibGVSb3c6ICcjZWJmMmYxJyxcbiAgdGFibGVJbmZvOiAnI2ZmZmZkYicsXG5cbiAgdmFsaWQ6ICcjMzNjMTQ2JyxcbiAgaW52YWxpZDogJyNiMjAwMDAnLFxuICBzb29uSW52YWxpZDogJyMzM2MxNDYnLFxuICBleHBpcmVkOiAnI0ZGQUEwMCcsXG4gIGhpZ2hsaWdodCA6IHtcbiAgICB2YWxpZDogJyM0Y2FmNTAnLFxuICAgIHNvb25JbnZhbGlkOiAnIzRjYWY1MCcsXG4gICAgaW52YWxpZDogJyNjYzAwMDAnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkaW1lbnNpb24gPSB7XG5cbn1cblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHtcbiAgY29sb3I6IGNvbG9yLFxuICBkaW1lbnNpb246IGRpbWVuc2lvbixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdHlsZXMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uL3N0eWxlcydcblxuY2xhc3MgSGVhZGVyVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaG92ZXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWxpZERheXNPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWxpZEZyb21EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZWZmZWN0aXZlUGVyaW9kczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93VG9vbHRpcDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUb2dnbGVUb29sVGlwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1Rvb2x0aXA6ICF0aGlzLnN0YXRlLnNob3dUb29sdGlwXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgICAgY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUZhaWwsXG4gICAgICAgIGhlaWdodDogMTgsXG4gICAgICAgIHdpZHRoOiAnODUlJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgZm9udFNpemU6ICcwJScsXG4gICAgICB9XG5cbiAgICAgIGxldCB0aW1lbGluZVdyYXBwZXIgPSB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMlxuICAgICAgfVxuXG4gICAgICBsZXQgdGltZUJsb2NrID0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZVN1Y2Nlc3MsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBmb250U2l6ZTogJzAuOHJlbScsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvb2xUaXBTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDFzJyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgICAgIGZvbnRTaXplOiAnMC44ZW0nLFxuICAgICAgICBjb2xvcjogY29sb3IuZm9udC50b29sdGlwLFxuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci50b29sdGlwLFxuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgekluZGV4OiA5OSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGV4dFNwYW5TdHlsZSA9IHtcbiAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgaGVpZ2h0OiAxOCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGVmZmVjdGl2ZVBlcmlvZHMsIHZhbGlkRGF5c09mZnNldCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDkwZGVnKSB0cmFuc2xhdGVYKDIwcHgpJyxcbiAgICAgICAgYm9yZGVyVG9wOiAnMXB4IGRvdHRlZCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvci5ib3JkZXIsXG4gICAgICAgIG1hcmdpblRvcDogOSxcbiAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIH1cblxuICAgICAgaHJTdHlsZS5tYXJnaW5MZWZ0ID0gKDMzICsgdmFsaWREYXlzT2Zmc2V0KSArICclJ1xuXG4gICAgICBsZXQgaG92ZXJUZXh0ID0gZWZmZWN0aXZlUGVyaW9kcy5sZW5ndGggPyAgdGhpcy5wcm9wcy5ob3ZlclRleHQgOiAnVWd5bGRpZyBsaW5qZS4gTWFuZ2xlciBkYXRhJ1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVdyYXBwZXJ9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBjdXJzb3I6ICdwb2ludGVyJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEycHgsIDMwcHgpJywgZm9udFNpemU6ICcxLjJlbScsIGNvbG9yOiBlZmZlY3RpdmVQZXJpb2RzLmxlbmd0aCA/IGNvbG9yLmVmZmVjdGl2ZSA6IGNvbG9yLmZhaWx9fVxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMuaGFuZGxlVG9nZ2xlVG9vbFRpcC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZVRvZ2dsZVRvb2xUaXAuYmluZCh0aGlzKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpbmV9XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VG9vbHRpcCAmJiA8ZGl2IHN0eWxlPXt0b29sVGlwU3R5bGV9PiB7aG92ZXJUZXh0fSA8L2Rpdj59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgc3R5bGU9e2hyU3R5bGV9Lz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgICAgPGRpdiBrZXk9eyd0aW1lbGluZS1oZWFkZXItd3JhcHBlcicrdGhpcy5wcm9wcy5pbmRleH0+XG4gICAgICAgICAgICB7IGVmZmVjdGl2ZVBlcmlvZHMubWFwKCAoZWZmZWN0aXZlUGVyaW9kLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHBlcmlvZEJsb2NrID0gey4uLnRpbWVCbG9ja31cbiAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay53aWR0aCA9IChlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAtIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24pICsgJyUnXG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgcGVyaW9kQmxvY2subWFyZ2luTGVmdCA9IChlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICsgJyUnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID0gKGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gLSBlZmZlY3RpdmVQZXJpb2RzW2luZGV4LTFdLnRpbWVsaW5lRW5kUG9zaXRpb24pICsgJyUnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1UZXh0ID0gZWZmZWN0aXZlUGVyaW9kLnRvXG5cbiAgICAgICAgICAgICAgICBpZiAoZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA+IDAgJiYgZWZmZWN0aXZlUGVyaW9kLmZyb20ubG9jYWxlQ29tcGFyZShlZmZlY3RpdmVQZXJpb2QudG8pICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBpdGVtVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZC5mcm9tICsgJyAtICcgKyBlZmZlY3RpdmVQZXJpb2QudG9cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXsndGltZWxpbmUtaGVhZGVyLWJsb2NrJytpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17cGVyaW9kQmxvY2t9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRTcGFuU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmlvZC1ibG9ja1wiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJScsIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX0gdGl0bGU9e2l0ZW1UZXh0fT57aXRlbVRleHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclRpbWVsaW5lXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vc3R5bGVzJ1xuXG5jbGFzcyBUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgICAgY29uc3QgeyB0aW1ldGFibGVzLCB2YWxpZERheXNPZmZzZXQsIGlzTGFzdCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBsZXQgeyBwZXJpb2RzIH0gPSB0aW1ldGFibGVzWzBdXG5cbiAgICAgIGNvbnN0IHRpbWVsaW5lU3R5bGUgPSB7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVCYWNrZ3JvdW5kLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6ICc4NSUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogaXNMYXN0ID8gLTE1IDogJ2F1dG8nXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpbWVsaW5lV3JhcHBlciA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogaXNMYXN0ID8gMCA6IDEwXG4gICAgICB9XG5cbiAgICAgIGxldCB0aW1lQmxvY2sgPSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgICB9XG5cbiAgICAgIGxldCB0ZXh0U3R5bGUgPSB7XG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0byAxMHB4JyxcbiAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgZm9udFNpemU6ICcwLjdlbScsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgICAgfVxuXG4gICAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDkwZGVnKScsXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBkb3R0ZWQnLFxuICAgICAgICBib3JkZXJDb2xvcjogY29sb3IuYm9yZGVyLFxuICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgIG1hcmdpblRvcDogOSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgIH1cblxuICAgICAgaHJTdHlsZS5tYXJnaW5MZWZ0ID0gKDMzICsgdmFsaWREYXlzT2Zmc2V0KSArICclJ1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVdyYXBwZXJ9PlxuICAgICAgICAgIDxociBzdHlsZT17aHJTdHlsZX0vPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwZXJpb2RzLm1hcCggKHBlcmlvZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcGVyaW9kQmxvY2sgPSB7Li4udGltZUJsb2NrfVxuICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLndpZHRoID0gKHBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC0gcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbikgKyAnJSdcbiAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID0gKHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXsndGltZXRhYmxlLXBlcmlvZC0nK2luZGV4fSBzdHlsZT17cGVyaW9kQmxvY2t9IHRpdGxlPXt0aW1ldGFibGVzWzBdLm9iamVjdElkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dFN0eWxlfT57dGltZXRhYmxlc1swXS5vYmplY3RJZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==