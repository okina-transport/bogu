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

var dimension = {
  timeLineWidth: 85
};

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
        height: '18px',
        lineHeight: '18px',
        width: __WEBPACK_IMPORTED_MODULE_1__styles__["dimension"].timeLineWidth + '%',
        margin: '10px auto',
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

      var textStyle = {
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
        transform: 'rotate(90deg) translateY(7.5px)',
        borderTop: '1px dotted',
        borderColor: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].border,
        marginTop: 9,
        width: 15,
        position: 'absolute'
      };

      hrStyle.marginLeft = (33 + validDaysOffset) * (__WEBPACK_IMPORTED_MODULE_1__styles__["dimension"].timeLineWidth - 1) / 100 + '%';

      var hoverText = effectivePeriods.length ? this.props.hoverText : 'Ugyldig linje. Mangler data';

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: timelineWrapper },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            style: { display: 'inline-block', cursor: 'pointer', transform: 'translate(10px, 20px)', fontSize: '1.2em', color: effectivePeriods.length ? __WEBPACK_IMPORTED_MODULE_1__styles__["color"].effective : __WEBPACK_IMPORTED_MODULE_1__styles__["color"].fail },
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: timelineStyle },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: 'timeline-header-wrapper' + this.props.index },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', { style: hrStyle }),
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

              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                  key: 'timeline-header-block' + index,
                  style: periodBlock },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: textStyle },
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


      var timelineStyle = {
        border: '1px solid black',
        borderRadius: 5,
        background: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].timeLineBackground,
        width: __WEBPACK_IMPORTED_MODULE_1__styles__["dimension"].timeLineWidth + '%',
        margin: 'auto',
        display: 'block',
        overflowY: 'auto'
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
        overflow: 'visble',
        textShadow: '0px 0px 5px black',
        textOverflow: 'ellipsis',
        display: 'block',
        margin: 'auto 10px',
        lineHeight: '18px',
        color: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].font.inverse,
        fontSize: '0.7em',
        fontWeight: 500
      };

      var hrStyle = {
        transform: 'rotate(90deg) translateY(7.5px)',
        borderTop: '1px dotted',
        borderColor: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].border,
        marginTop: 9,
        width: 15,
        position: 'absolute'
      };

      hrStyle.marginLeft = (33 + validDaysOffset) * (__WEBPACK_IMPORTED_MODULE_1__styles__["dimension"].timeLineWidth - 1) / 100 + '%';

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: timelineWrapper },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: timelineStyle },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', { style: hrStyle }),
          timetables.map(function (timetable) {
            return timetable.periods.map(function (period, index) {
              var title = timetable.objectId;
              var hover = title + ' \n(period: ' + period.from + ' -> ' + period.to + ')';
              var periodBlock = _extends({}, timeBlock);
              periodBlock.width = period.timelineEndPosition - period.timelineStartPosition + '%';
              periodBlock.marginLeft = period.timelineStartPosition + '%';
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { key: 'timetable-period-' + index, style: periodBlock, title: hover },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { style: textStyle },
                  title
                )
              );
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZmNiYjc5MzM0Y2EzMDdmOGZkMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiXSwibmFtZXMiOlsiY29sb3JEZWYiLCJibGFjayIsIndoaXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYmlnYmx1ZSIsImRhcmtCbHVlIiwiZGFya0dyZXkiLCJncmV5IiwibGlnaHRHcmV5IiwiZW50dXIiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiY29sb3IiLCJmb250IiwiaW52ZXJzZSIsInRpdGxlIiwiaW5mbzEiLCJpbmZvMiIsImluZm8zIiwid2FybiIsImRpc2FibGVkIiwidG9vbHRpcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJlZmZlY3RpdmUiLCJmYWlsIiwibW9kYWwiLCJiYWNrZHJvcCIsInRhYkFjdGl2ZSIsInRpbWVMaW5lQmFja2dyb3VuZCIsInRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kIiwidGltZUxpbmVCb3JkZXIiLCJ0aW1lTGluZVN1Y2Nlc3MiLCJ0aW1lTGluZUZhaWwiLCJ0YWJsZUhlYWRlciIsInRhYmxlUm93IiwidGFibGVJbmZvIiwidmFsaWQiLCJpbnZhbGlkIiwic29vbkludmFsaWQiLCJleHBpcmVkIiwiaGlnaGxpZ2h0IiwiZGltZW5zaW9uIiwidGltZUxpbmVXaWR0aCIsInN0eWxlcyIsIkhlYWRlclRpbWVsaW5lIiwicHJvcHMiLCJzdGF0ZSIsInNob3dUb29sdGlwIiwic2V0U3RhdGUiLCJ0aW1lbGluZVN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibGluZUhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwiZGlzcGxheSIsIm92ZXJmbG93IiwiZm9udFNpemUiLCJ0aW1lbGluZVdyYXBwZXIiLCJtYXJnaW5Cb3R0b20iLCJ0aW1lQmxvY2siLCJjdXJzb3IiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwiYm9yZGVyUmlnaHQiLCJ0b29sVGlwU3R5bGUiLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJwYWRkaW5nIiwiekluZGV4IiwidGV4dFN0eWxlIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIndoaXRlU3BhY2UiLCJ0ZXh0T3ZlcmZsb3ciLCJlZmZlY3RpdmVQZXJpb2RzIiwidmFsaWREYXlzT2Zmc2V0IiwiaHJTdHlsZSIsInRyYW5zZm9ybSIsImJvcmRlclRvcCIsImJvcmRlckNvbG9yIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImhvdmVyVGV4dCIsImxlbmd0aCIsImhhbmRsZVRvZ2dsZVRvb2xUaXAiLCJiaW5kIiwibGluZSIsImluZGV4IiwibWFwIiwiZWZmZWN0aXZlUGVyaW9kIiwicGVyaW9kQmxvY2siLCJ0aW1lbGluZUVuZFBvc2l0aW9uIiwidGltZWxpbmVTdGFydFBvc2l0aW9uIiwiaXRlbVRleHQiLCJ0byIsImZyb20iLCJsb2NhbGVDb21wYXJlIiwidmVydGljYWxBbGlnbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsInZhbGlkRnJvbURhdGUiLCJhcnJheSIsIlRpbWVsaW5lIiwidGltZXRhYmxlcyIsImlzTGFzdCIsIm92ZXJmbG93WSIsInBhZGRpbmdCb3R0b20iLCJ0ZXh0U2hhZG93IiwidGltZXRhYmxlIiwicGVyaW9kcyIsInBlcmlvZCIsIm9iamVjdElkIiwiaG92ZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENB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LEdBQXFCZ0UsT0FBT3hCLG1CQUFQLEdBQTZCd0IsT0FBT3ZCLHFCQUFyQyxHQUE4RCxHQUFsRjtBQUNBRiwwQkFBWVQsVUFBWixHQUEwQmtDLE9BQU92QixxQkFBUCxHQUErQixHQUF6RDtBQUNBLHFCQUNFO0FBQUE7QUFBQSxrQkFBSyxLQUFLLHNCQUFvQkwsS0FBOUIsRUFBcUMsT0FBT0csV0FBNUMsRUFBeUQsT0FBTzJCLEtBQWhFO0FBQ0U7QUFBQTtBQUFBLG9CQUFLLE9BQU9qRCxTQUFaO0FBQXdCeEQ7QUFBeEI7QUFERixlQURGO0FBSUQsYUFWRCxDQURjO0FBQUEsV0FBaEI7QUFISjtBQURGLE9BREY7QUFzQkg7Ozs7RUEvRW9CLDZDQUFBc0YsQ0FBTUMsUzs7QUFrRjdCLHlEQUFlUSxRQUFmLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNmY2JiNzkzMzRjYTMwN2Y4ZmQwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJcbmNvbnN0IGNvbG9yRGVmID0ge1xuICBibGFjazogJyMwMDAnLFxuICB3aGl0ZTogJyNGRkYnLFxuICByZWQ6ICcjRjAwJyxcbiAgZ3JlZW46ICcjMEYwJyxcbiAgYmx1ZTogJyMwMEYnLFxuICBiaWdibHVlOiAnIzExNjlBNycsXG4gIGRhcmtCbHVlOiAnIzA4MzQ1MycsXG4gIGRhcmtHcmV5OiAnIzJGMkYyRicsXG4gIGdyZXk6ICcjREREREREJyxcbiAgbGlnaHRHcmV5OiAnI0YyRjJGMicsXG4gIGVudHVyOiB7XG4gICAgcHJpbWFyeTogJyMyNzNBNDYnLCAgIC8vIDM5LDU4LDcwXG4gICAgc2Vjb25kYXJ5OiAnIzZCQkRDMicsIC8vMTA3LDE4OSwxOTQsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbG9yID0ge1xuICBmb250OiB7XG4gICAgaW52ZXJzZTogY29sb3JEZWYud2hpdGUsXG4gICAgdGl0bGU6IGNvbG9yRGVmLmJsYWNrLFxuICAgIGluZm8xOiBjb2xvckRlZi5lbnR1ci5zZWNvbmRhcnksXG4gICAgaW5mbzI6IGNvbG9yRGVmLmRhcmtCbHVlLFxuICAgIGluZm8zOiBjb2xvckRlZi5ibGFjayxcbiAgICB3YXJuOiBjb2xvckRlZi5yZWQsXG4gICAgZGlzYWJsZWQ6IGNvbG9yRGVmLmdyZXksXG5cbiAgICB0b29sdGlwOiBjb2xvckRlZi53aGl0ZSxcbiAgfSxcbiAgYmFja2dyb3VuZDogY29sb3JEZWYuZW50dXIucHJpbWFyeSxcbiAgYm9yZGVyOiBjb2xvckRlZi5ibGFjayxcbiAgZWZmZWN0aXZlOiBjb2xvckRlZi5ibGFjayxcbiAgZmFpbDogY29sb3JEZWYucmVkLFxuICBtb2RhbDogY29sb3JEZWYud2hpdGUsXG4gIGJhY2tkcm9wOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcbiAgdG9vbHRpcDogJyMxOTE5MTknLFxuICB0YWJBY3RpdmU6IGNvbG9yRGVmLmVudHVyLnNlY29uZGFyeSxcblxuICB0aW1lTGluZUJhY2tncm91bmQ6ICcjREVEOEQ4JyxcbiAgdGltZUxpbmVCbG9ja0JhY2tncm91bmQ6ICcjNkQ5MkI2JyxcbiAgdGltZUxpbmVCb3JkZXI6ICcjZWVlJyxcbiAgdGltZUxpbmVTdWNjZXNzOiAnIzVEQUU1RCcsXG4gIHRpbWVMaW5lRmFpbDogJyNCOTE5MTknLFxuICB0YWJsZUhlYWRlcjogY29sb3JEZWYubGlnaHRHcmV5LFxuICB0YWJsZVJvdzogJyNlYmYyZjEnLFxuICB0YWJsZUluZm86ICcjZmZmZmRiJyxcblxuICB2YWxpZDogJyMzM2MxNDYnLFxuICBpbnZhbGlkOiAnI2IyMDAwMCcsXG4gIHNvb25JbnZhbGlkOiAnIzMzYzE0NicsXG4gIGV4cGlyZWQ6ICcjRkZBQTAwJyxcbiAgaGlnaGxpZ2h0IDoge1xuICAgIHZhbGlkOiAnIzRjYWY1MCcsXG4gICAgc29vbkludmFsaWQ6ICcjNGNhZjUwJyxcbiAgICBpbnZhbGlkOiAnI2NjMDAwMCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRpbWVuc2lvbiA9IHtcbiAgdGltZUxpbmVXaWR0aDogODUsXG59XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB7XG4gIGNvbG9yOiBjb2xvcixcbiAgZGltZW5zaW9uOiBkaW1lbnNpb24sXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3R5bGVzL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29sb3IsIGRpbWVuc2lvbiB9IGZyb20gJy4uL3N0eWxlcydcblxuY2xhc3MgSGVhZGVyVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaG92ZXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWxpZERheXNPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWxpZEZyb21EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZWZmZWN0aXZlUGVyaW9kczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93VG9vbHRpcDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUb2dnbGVUb29sVGlwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1Rvb2x0aXA6ICF0aGlzLnN0YXRlLnNob3dUb29sdGlwXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgICAgY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUZhaWwsXG4gICAgICAgIGhlaWdodDogJzE4cHgnLFxuICAgICAgICBsaW5lSGVpZ2h0OiAnMThweCcsXG4gICAgICAgIHdpZHRoOiBkaW1lbnNpb24udGltZUxpbmVXaWR0aCArICclJyxcbiAgICAgICAgbWFyZ2luOiAnMTBweCBhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBmb250U2l6ZTogJzAlJyxcbiAgICAgIH1cblxuICAgICAgbGV0IHRpbWVsaW5lV3JhcHBlciA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyXG4gICAgICB9XG5cbiAgICAgIGxldCB0aW1lQmxvY2sgPSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lU3VjY2VzcyxcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGZvbnRTaXplOiAnMC44cmVtJyxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9vbFRpcFN0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMXMnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lJyxcbiAgICAgICAgZm9udFNpemU6ICcwLjhlbScsXG4gICAgICAgIGNvbG9yOiBjb2xvci5mb250LnRvb2x0aXAsXG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRvb2x0aXAsXG4gICAgICAgIHBhZGRpbmc6IDEwLFxuICAgICAgICB3aWR0aDogJ2F1dG8nLFxuICAgICAgICB6SW5kZXg6IDk5LFxuICAgICAgfVxuXG4gICAgICBjb25zdCB0ZXh0U3R5bGUgPSB7XG4gICAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICAgIGhlaWdodDogMTgsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBlZmZlY3RpdmVQZXJpb2RzLCB2YWxpZERheXNPZmZzZXQgfSA9IHRoaXMucHJvcHNcblxuICAgICAgbGV0IGhyU3R5bGUgPSB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWSg3LjVweCknLFxuICAgICAgICBib3JkZXJUb3A6ICcxcHggZG90dGVkJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLmJvcmRlcixcbiAgICAgICAgbWFyZ2luVG9wOiA5LFxuICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgfVxuXG4gICAgICBoclN0eWxlLm1hcmdpbkxlZnQgPSAoMzMgKyB2YWxpZERheXNPZmZzZXQpICogKGRpbWVuc2lvbi50aW1lTGluZVdpZHRoIC0gMSkvMTAwICsgJyUnXG5cbiAgICAgIGxldCBob3ZlclRleHQgPSBlZmZlY3RpdmVQZXJpb2RzLmxlbmd0aCA/ICB0aGlzLnByb3BzLmhvdmVyVGV4dCA6ICdVZ3lsZGlnIGxpbmplLiBNYW5nbGVyIGRhdGEnXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lV3JhcHBlcn0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogJ2lubGluZS1ibG9jaycsIGN1cnNvcjogJ3BvaW50ZXInLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMTBweCwgMjBweCknLCBmb250U2l6ZTogJzEuMmVtJywgY29sb3I6IGVmZmVjdGl2ZVBlcmlvZHMubGVuZ3RoID8gY29sb3IuZWZmZWN0aXZlIDogY29sb3IuZmFpbH19XG4gICAgICAgICAgICBvbk1vdXNlT3Zlcj17dGhpcy5oYW5kbGVUb2dnbGVUb29sVGlwLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlVG9nZ2xlVG9vbFRpcC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMucHJvcHMubGluZX1cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dUb29sdGlwICYmIDxkaXYgc3R5bGU9e3Rvb2xUaXBTdHlsZX0+IHtob3ZlclRleHR9IDwvZGl2Pn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgICAgPGRpdiBrZXk9eyd0aW1lbGluZS1oZWFkZXItd3JhcHBlcicrdGhpcy5wcm9wcy5pbmRleH0+XG4gICAgICAgICAgICA8aHIgc3R5bGU9e2hyU3R5bGV9Lz5cbiAgICAgICAgICAgIHsgZWZmZWN0aXZlUGVyaW9kcy5tYXAoIChlZmZlY3RpdmVQZXJpb2QsIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsZXQgcGVyaW9kQmxvY2sgPSB7Li4udGltZUJsb2NrfVxuICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLndpZHRoID0gKGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC0gZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbikgKyAnJSdcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgcGVyaW9kQmxvY2subWFyZ2luTGVmdCA9IChlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICsgJyUnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID0gKGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gLSBlZmZlY3RpdmVQZXJpb2RzW2luZGV4LTFdLnRpbWVsaW5lRW5kUG9zaXRpb24pICsgJyUnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1UZXh0ID0gZWZmZWN0aXZlUGVyaW9kLnRvXG5cbiAgICAgICAgICAgICAgICBpZiAoZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA+IDAgJiYgZWZmZWN0aXZlUGVyaW9kLmZyb20ubG9jYWxlQ29tcGFyZShlZmZlY3RpdmVQZXJpb2QudG8pICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBpdGVtVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZC5mcm9tICsgJyAtICcgKyBlZmZlY3RpdmVQZXJpb2QudG9cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXsndGltZWxpbmUtaGVhZGVyLWJsb2NrJytpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17cGVyaW9kQmxvY2t9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVyaW9kLWJsb2NrXCIgc3R5bGU9e3toZWlnaHQ6ICcxMDAlJywgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSwgdmVydGljYWxBbGlnbjogJ21pZGRsZSd9fSB0aXRsZT17aXRlbVRleHR9PntpdGVtVGV4dH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyVGltZWxpbmVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29sb3IsIGRpbWVuc2lvbiB9IGZyb20gJy4uL3N0eWxlcydcblxuY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICAgIGNvbnN0IHsgdGltZXRhYmxlcywgdmFsaWREYXlzT2Zmc2V0LCBpc0xhc3QgfSA9IHRoaXMucHJvcHNcblxuICAgICAgY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUJhY2tncm91bmQsXG4gICAgICAgIHdpZHRoOiBkaW1lbnNpb24udGltZUxpbmVXaWR0aCArICclJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgfVxuXG4gICAgICBjb25zdCB0aW1lbGluZVdyYXBwZXIgPSB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGlzTGFzdCA/IDAgOiAxMFxuICAgICAgfVxuXG4gICAgICBsZXQgdGltZUJsb2NrID0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUJsb2NrQmFja2dyb3VuZCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgICAgfVxuXG4gICAgICBsZXQgdGV4dFN0eWxlID0ge1xuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgb3ZlcmZsb3c6ICd2aXNibGUnLFxuICAgICAgICB0ZXh0U2hhZG93OiAnMHB4IDBweCA1cHggYmxhY2snLFxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8gMTBweCcsXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgZm9udFNpemU6ICcwLjdlbScsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgICAgfVxuXG4gICAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKDcuNXB4KScsXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBkb3R0ZWQnLFxuICAgICAgICBib3JkZXJDb2xvcjogY29sb3IuYm9yZGVyLFxuICAgICAgICBtYXJnaW5Ub3A6IDksXG4gICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgIH1cblxuICAgICAgaHJTdHlsZS5tYXJnaW5MZWZ0ID0gKDMzICsgdmFsaWREYXlzT2Zmc2V0KSAqIChkaW1lbnNpb24udGltZUxpbmVXaWR0aCAtIDEpLzEwMCArICclJ1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVdyYXBwZXJ9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgICAgPGhyIHN0eWxlPXtoclN0eWxlfS8+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRpbWV0YWJsZXMubWFwKCB0aW1ldGFibGUgPT5cbiAgICAgICAgICAgICAgICB0aW1ldGFibGUucGVyaW9kcy5tYXAoKHBlcmlvZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gdGltZXRhYmxlLm9iamVjdElkXG4gICAgICAgICAgICAgICAgICBjb25zdCBob3ZlciA9IGAke3RpdGxlfSBcXG4ocGVyaW9kOiAke3BlcmlvZC5mcm9tfSAtPiAke3BlcmlvZC50b30pYFxuICAgICAgICAgICAgICAgICAgbGV0IHBlcmlvZEJsb2NrID0gey4uLnRpbWVCbG9ja31cbiAgICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLndpZHRoID0gKHBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC0gcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbikgKyAnJSdcbiAgICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPSAocGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJylcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXsndGltZXRhYmxlLXBlcmlvZC0nK2luZGV4fSBzdHlsZT17cGVyaW9kQmxvY2t9IHRpdGxlPXtob3Zlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dFN0eWxlfT57dGl0bGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=