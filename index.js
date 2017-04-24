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
        display: 'inline-block'
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
        transform: 'rotate(90deg) translateY(8px)',
        borderTop: '1px dotted',
        borderColor: __WEBPACK_IMPORTED_MODULE_1__styles__["color"].border,
        marginTop: 9,
        width: 16,
        position: 'absolute'
      };

      hrStyle.marginLeft = (33 + validDaysOffset) * (__WEBPACK_IMPORTED_MODULE_1__styles__["dimension"].timeLineWidth - 1) / 100 + '%';

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: timelineWrapper },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { style: timelineStyle },
          timetables.map(function (timetable) {
            return timetable.periods.map(function (period, index) {
              var title = timetable.objectId;
              var hover = title + ' \n(period: ' + period.from + ' -> ' + period.to + ')';
              var periodBlock = _extends({}, timeBlock);
              periodBlock.width = period.timelineEndPosition - period.timelineStartPosition + '%';
              periodBlock.marginLeft = period.timelineStartPosition + '%';
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', { style: hrStyle }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { key: 'timetable-period-' + index, style: periodBlock, title: hover },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMzk3MDZlZDlhZmQ5MmI3ZGJiNSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiXSwibmFtZXMiOlsiY29sb3JEZWYiLCJibGFjayIsIndoaXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYmlnYmx1ZSIsImRhcmtCbHVlIiwiZGFya0dyZXkiLCJncmV5IiwibGlnaHRHcmV5IiwiZW50dXIiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiY29sb3IiLCJmb250IiwiaW52ZXJzZSIsInRpdGxlIiwiaW5mbzEiLCJpbmZvMiIsImluZm8zIiwid2FybiIsImRpc2FibGVkIiwidG9vbHRpcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJlZmZlY3RpdmUiLCJmYWlsIiwibW9kYWwiLCJiYWNrZHJvcCIsInRhYkFjdGl2ZSIsInRpbWVMaW5lQmFja2dyb3VuZCIsInRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kIiwidGltZUxpbmVCb3JkZXIiLCJ0aW1lTGluZVN1Y2Nlc3MiLCJ0aW1lTGluZUZhaWwiLCJ0YWJsZUhlYWRlciIsInRhYmxlUm93IiwidGFibGVJbmZvIiwidmFsaWQiLCJpbnZhbGlkIiwic29vbkludmFsaWQiLCJleHBpcmVkIiwiaGlnaGxpZ2h0IiwiZGltZW5zaW9uIiwidGltZUxpbmVXaWR0aCIsInN0eWxlcyIsIkhlYWRlclRpbWVsaW5lIiwicHJvcHMiLCJzdGF0ZSIsInNob3dUb29sdGlwIiwic2V0U3RhdGUiLCJ0aW1lbGluZVN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwibGluZUhlaWdodCIsIndpZHRoIiwibWFyZ2luIiwiZGlzcGxheSIsIm92ZXJmbG93IiwiZm9udFNpemUiLCJ0aW1lbGluZVdyYXBwZXIiLCJtYXJnaW5Cb3R0b20iLCJ0aW1lQmxvY2siLCJjdXJzb3IiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwidG9vbFRpcFN0eWxlIiwicG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwicGFkZGluZyIsInpJbmRleCIsInRleHRTdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ3aGl0ZVNwYWNlIiwidGV4dE92ZXJmbG93IiwiZWZmZWN0aXZlUGVyaW9kcyIsInZhbGlkRGF5c09mZnNldCIsImhyU3R5bGUiLCJ0cmFuc2Zvcm0iLCJib3JkZXJUb3AiLCJib3JkZXJDb2xvciIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJob3ZlclRleHQiLCJsZW5ndGgiLCJoYW5kbGVUb2dnbGVUb29sVGlwIiwiYmluZCIsImxpbmUiLCJpbmRleCIsIm1hcCIsImVmZmVjdGl2ZVBlcmlvZCIsInBlcmlvZEJsb2NrIiwidGltZWxpbmVFbmRQb3NpdGlvbiIsInRpbWVsaW5lU3RhcnRQb3NpdGlvbiIsIml0ZW1UZXh0IiwidG8iLCJmcm9tIiwibG9jYWxlQ29tcGFyZSIsInZlcnRpY2FsQWxpZ24iLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJ2YWxpZEZyb21EYXRlIiwiYXJyYXkiLCJUaW1lbGluZSIsInRpbWV0YWJsZXMiLCJpc0xhc3QiLCJvdmVyZmxvd1kiLCJwYWRkaW5nQm90dG9tIiwidGV4dFNoYWRvdyIsInRpbWV0YWJsZSIsInBlcmlvZHMiLCJwZXJpb2QiLCJvYmplY3RJZCIsImhvdmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZB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R0FBOEQsR0FBbEY7QUFDQUYsMEJBQVlULFVBQVosR0FBMEJrQyxPQUFPdkIscUJBQVAsR0FBK0IsR0FBekQ7QUFDQSxxQkFDRTtBQUFBO0FBQUE7QUFDRSxvRkFBSSxPQUFPaEIsT0FBWCxHQURGO0FBRUU7QUFBQTtBQUFBLG9CQUFLLEtBQUssc0JBQW9CVyxLQUE5QixFQUFxQyxPQUFPRyxXQUE1QyxFQUF5RCxPQUFPMkIsS0FBaEU7QUFDRTtBQUFBO0FBQUEsc0JBQUssT0FBT2pELFNBQVo7QUFBd0J2RDtBQUF4QjtBQURGO0FBRkYsZUFERjtBQVFELGFBZEQsQ0FEYztBQUFBLFdBQWhCO0FBRko7QUFERixPQURGO0FBeUJIOzs7O0VBbEZvQiw2Q0FBQXFGLENBQU1DLFM7O0FBcUY3Qix5REFBZVEsUUFBZixFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYm9ndVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJib2d1XCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMzk3MDZlZDlhZmQ5MmI3ZGJiNSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiXG5jb25zdCBjb2xvckRlZiA9IHtcbiAgYmxhY2s6ICcjMDAwJyxcbiAgd2hpdGU6ICcjRkZGJyxcbiAgcmVkOiAnI0YwMCcsXG4gIGdyZWVuOiAnIzBGMCcsXG4gIGJsdWU6ICcjMDBGJyxcbiAgYmlnYmx1ZTogJyMxMTY5QTcnLFxuICBkYXJrQmx1ZTogJyMwODM0NTMnLFxuICBkYXJrR3JleTogJyMyRjJGMkYnLFxuICBncmV5OiAnI0RERERERCcsXG4gIGxpZ2h0R3JleTogJyNGMkYyRjInLFxuICBlbnR1cjoge1xuICAgIHByaW1hcnk6ICcjMjczQTQ2JywgICAvLyAzOSw1OCw3MFxuICAgIHNlY29uZGFyeTogJyM2QkJEQzInLCAvLzEwNywxODksMTk0LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgZm9udDoge1xuICAgIGludmVyc2U6IGNvbG9yRGVmLndoaXRlLFxuICAgIHRpdGxlOiBjb2xvckRlZi5ibGFjayxcbiAgICBpbmZvMTogY29sb3JEZWYuZW50dXIuc2Vjb25kYXJ5LFxuICAgIGluZm8yOiBjb2xvckRlZi5kYXJrQmx1ZSxcbiAgICBpbmZvMzogY29sb3JEZWYuYmxhY2ssXG4gICAgd2FybjogY29sb3JEZWYucmVkLFxuICAgIGRpc2FibGVkOiBjb2xvckRlZi5ncmV5LFxuXG4gICAgdG9vbHRpcDogY29sb3JEZWYud2hpdGUsXG4gIH0sXG4gIGJhY2tncm91bmQ6IGNvbG9yRGVmLmVudHVyLnByaW1hcnksXG4gIGJvcmRlcjogY29sb3JEZWYuYmxhY2ssXG4gIGVmZmVjdGl2ZTogY29sb3JEZWYuYmxhY2ssXG4gIGZhaWw6IGNvbG9yRGVmLnJlZCxcbiAgbW9kYWw6IGNvbG9yRGVmLndoaXRlLFxuICBiYWNrZHJvcDogJ3JnYmEoMCwgMCwgMCwgMC4zKScsXG4gIHRvb2x0aXA6ICcjMTkxOTE5JyxcbiAgdGFiQWN0aXZlOiBjb2xvckRlZi5lbnR1ci5zZWNvbmRhcnksXG5cbiAgdGltZUxpbmVCYWNrZ3JvdW5kOiAnI0RFRDhEOCcsXG4gIHRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kOiAnIzZEOTJCNicsXG4gIHRpbWVMaW5lQm9yZGVyOiAnI2VlZScsXG4gIHRpbWVMaW5lU3VjY2VzczogJyM1REFFNUQnLFxuICB0aW1lTGluZUZhaWw6ICcjQjkxOTE5JyxcbiAgdGFibGVIZWFkZXI6IGNvbG9yRGVmLmxpZ2h0R3JleSxcbiAgdGFibGVSb3c6ICcjZWJmMmYxJyxcbiAgdGFibGVJbmZvOiAnI2ZmZmZkYicsXG5cbiAgdmFsaWQ6ICcjMzNjMTQ2JyxcbiAgaW52YWxpZDogJyNiMjAwMDAnLFxuICBzb29uSW52YWxpZDogJyMzM2MxNDYnLFxuICBleHBpcmVkOiAnI0ZGQUEwMCcsXG4gIGhpZ2hsaWdodCA6IHtcbiAgICB2YWxpZDogJyM0Y2FmNTAnLFxuICAgIHNvb25JbnZhbGlkOiAnIzRjYWY1MCcsXG4gICAgaW52YWxpZDogJyNjYzAwMDAnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkaW1lbnNpb24gPSB7XG4gIHRpbWVMaW5lV2lkdGg6IDg1LFxufVxuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICBjb2xvcjogY29sb3IsXG4gIGRpbWVuc2lvbjogZGltZW5zaW9uLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlcy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbG9yLCBkaW1lbnNpb24gfSBmcm9tICcuLi9zdHlsZXMnXG5cbmNsYXNzIEhlYWRlclRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhvdmVyVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdmFsaWREYXlzT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdmFsaWRGcm9tRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGVmZmVjdGl2ZVBlcmlvZHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVG9nZ2xlVG9vbFRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICAgIGNvbnN0IHRpbWVsaW5lU3R5bGUgPSB7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVGYWlsLFxuICAgICAgICBoZWlnaHQ6ICcxOHB4JyxcbiAgICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgICB3aWR0aDogZGltZW5zaW9uLnRpbWVMaW5lV2lkdGggKyAnJScsXG4gICAgICAgIG1hcmdpbjogJzEwcHggYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgZm9udFNpemU6ICcwJScsXG4gICAgICB9XG5cbiAgICAgIGxldCB0aW1lbGluZVdyYXBwZXIgPSB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMlxuICAgICAgfVxuXG4gICAgICBsZXQgdGltZUJsb2NrID0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZVN1Y2Nlc3MsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBmb250U2l6ZTogJzAuOHJlbScsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgfVxuXG4gICAgICBjb25zdCB0b29sVGlwU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAxcycsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgICBmb250U2l6ZTogJzAuOGVtJyxcbiAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQudG9vbHRpcCxcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3IudG9vbHRpcCxcbiAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIHpJbmRleDogOTksXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRleHRTdHlsZSA9IHtcbiAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcbiAgICAgICAgaGVpZ2h0OiAxOCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGVmZmVjdGl2ZVBlcmlvZHMsIHZhbGlkRGF5c09mZnNldCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDkwZGVnKSB0cmFuc2xhdGVZKDcuNXB4KScsXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBkb3R0ZWQnLFxuICAgICAgICBib3JkZXJDb2xvcjogY29sb3IuYm9yZGVyLFxuICAgICAgICBtYXJnaW5Ub3A6IDksXG4gICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB9XG5cbiAgICAgIGhyU3R5bGUubWFyZ2luTGVmdCA9ICgzMyArIHZhbGlkRGF5c09mZnNldCkgKiAoZGltZW5zaW9uLnRpbWVMaW5lV2lkdGggLSAxKS8xMDAgKyAnJSdcblxuICAgICAgbGV0IGhvdmVyVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZHMubGVuZ3RoID8gIHRoaXMucHJvcHMuaG92ZXJUZXh0IDogJ1VneWxkaWcgbGluamUuIE1hbmdsZXIgZGF0YSdcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVXcmFwcGVyfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgY3Vyc29yOiAncG9pbnRlcicsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxMHB4LCAyMHB4KScsIGZvbnRTaXplOiAnMS4yZW0nLCBjb2xvcjogZWZmZWN0aXZlUGVyaW9kcy5sZW5ndGggPyBjb2xvci5lZmZlY3RpdmUgOiBjb2xvci5mYWlsfX1cbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLmhhbmRsZVRvZ2dsZVRvb2xUaXAuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVUb2dnbGVUb29sVGlwLmJpbmQodGhpcyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5saW5lfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1Rvb2x0aXAgJiYgPGRpdiBzdHlsZT17dG9vbFRpcFN0eWxlfT4ge2hvdmVyVGV4dH0gPC9kaXY+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVTdHlsZX0+XG4gICAgICAgICAgICA8ZGl2IGtleT17J3RpbWVsaW5lLWhlYWRlci13cmFwcGVyJyt0aGlzLnByb3BzLmluZGV4fT5cbiAgICAgICAgICAgIDxociBzdHlsZT17aHJTdHlsZX0vPlxuICAgICAgICAgICAgeyBlZmZlY3RpdmVQZXJpb2RzLm1hcCggKGVmZmVjdGl2ZVBlcmlvZCwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBwZXJpb2RCbG9jayA9IHsuLi50aW1lQmxvY2t9XG4gICAgICAgICAgICAgICAgcGVyaW9kQmxvY2sud2lkdGggPSAoZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gLSBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uKSArICclJ1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID0gKGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJScpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPSAoZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiAtIGVmZmVjdGl2ZVBlcmlvZHNbaW5kZXgtMV0udGltZWxpbmVFbmRQb3NpdGlvbikgKyAnJSdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgaXRlbVRleHQgPSBlZmZlY3RpdmVQZXJpb2QudG9cblxuICAgICAgICAgICAgICAgIGlmIChlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID4gMCAmJiBlZmZlY3RpdmVQZXJpb2QuZnJvbS5sb2NhbGVDb21wYXJlKGVmZmVjdGl2ZVBlcmlvZC50bykgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGl0ZW1UZXh0ID0gZWZmZWN0aXZlUGVyaW9kLmZyb20gKyAnIC0gJyArIGVmZmVjdGl2ZVBlcmlvZC50b1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9eyd0aW1lbGluZS1oZWFkZXItYmxvY2snK2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtwZXJpb2RCbG9ja30+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dFN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJpb2QtYmxvY2tcIiBzdHlsZT17e2hlaWdodDogJzEwMCUnLCBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ319IHRpdGxlPXtpdGVtVGV4dH0+e2l0ZW1UZXh0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUaW1lbGluZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb2xvciwgZGltZW5zaW9uIH0gZnJvbSAnLi4vc3R5bGVzJ1xuXG5jbGFzcyBUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgICAgY29uc3QgeyB0aW1ldGFibGVzLCB2YWxpZERheXNPZmZzZXQsIGlzTGFzdCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBjb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lQmFja2dyb3VuZCxcbiAgICAgICAgd2lkdGg6IGRpbWVuc2lvbi50aW1lTGluZVdpZHRoICsgJyUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpbWVsaW5lV3JhcHBlciA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogaXNMYXN0ID8gMCA6IDEwXG4gICAgICB9XG5cbiAgICAgIGxldCB0aW1lQmxvY2sgPSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgICB9XG5cbiAgICAgIGxldCB0ZXh0U3R5bGUgPSB7XG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICBvdmVyZmxvdzogJ3Zpc2JsZScsXG4gICAgICAgIHRleHRTaGFkb3c6ICcwcHggMHB4IDVweCBibGFjaycsXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0byAxMHB4JyxcbiAgICAgICAgbGluZUhlaWdodDogJzE4cHgnLFxuICAgICAgICBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLFxuICAgICAgICBmb250U2l6ZTogJzAuN2VtJyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgICB9XG5cbiAgICAgIGxldCBoclN0eWxlID0ge1xuICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZVkoOHB4KScsXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBkb3R0ZWQnLFxuICAgICAgICBib3JkZXJDb2xvcjogY29sb3IuYm9yZGVyLFxuICAgICAgICBtYXJnaW5Ub3A6IDksXG4gICAgICAgIHdpZHRoOiAxNixcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgIH1cblxuICAgICAgaHJTdHlsZS5tYXJnaW5MZWZ0ID0gKDMzICsgdmFsaWREYXlzT2Zmc2V0KSAqIChkaW1lbnNpb24udGltZUxpbmVXaWR0aCAtIDEpLzEwMCArICclJ1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVdyYXBwZXJ9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aW1ldGFibGVzLm1hcCggdGltZXRhYmxlID0+XG4gICAgICAgICAgICAgICAgdGltZXRhYmxlLnBlcmlvZHMubWFwKChwZXJpb2QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRpbWV0YWJsZS5vYmplY3RJZFxuICAgICAgICAgICAgICAgICAgY29uc3QgaG92ZXIgPSBgJHt0aXRsZX0gXFxuKHBlcmlvZDogJHtwZXJpb2QuZnJvbX0gLT4gJHtwZXJpb2QudG99KWBcbiAgICAgICAgICAgICAgICAgIGxldCBwZXJpb2RCbG9jayA9IHsuLi50aW1lQmxvY2t9XG4gICAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay53aWR0aCA9IChwZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAtIHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24pICsgJyUnXG4gICAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID0gKHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJScpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxociBzdHlsZT17aHJTdHlsZX0vPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXsndGltZXRhYmxlLXBlcmlvZC0nK2luZGV4fSBzdHlsZT17cGVyaW9kQmxvY2t9IHRpdGxlPXtob3Zlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0U3R5bGV9Pnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiXSwic291cmNlUm9vdCI6IiJ9