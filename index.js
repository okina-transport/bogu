(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["bogu"] = factory(require("react"));
	else
		root["bogu"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_110__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 117);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
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

/***/ 110:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_110__;

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Timeline__ = __webpack_require__(113);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return __WEBPACK_IMPORTED_MODULE_0__Timeline__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeaderTimeline__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTimeline", function() { return __WEBPACK_IMPORTED_MODULE_1__HeaderTimeline__["a"]; });





/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(110);
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


/* harmony default export */ __webpack_exports__["a"] = HeaderTimeline;

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(110);
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

/* harmony default export */ __webpack_exports__["a"] = Timeline;

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(111);


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDYxOWExNTU5NGE2MGY2OGIyNjg5PzQ5YTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIl0sIm5hbWVzIjpbImNvbG9yRGVmIiwiYmxhY2siLCJ3aGl0ZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImJpZ2JsdWUiLCJkYXJrQmx1ZSIsImRhcmtHcmV5IiwiZ3JleSIsImxpZ2h0R3JleSIsImVudHVyIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImNvbG9yIiwiZm9udCIsImludmVyc2UiLCJ0aXRsZSIsImluZm8xIiwiaW5mbzIiLCJpbmZvMyIsIndhcm4iLCJkaXNhYmxlZCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiZWZmZWN0aXZlIiwiZmFpbCIsIm1vZGFsIiwiYmFja2Ryb3AiLCJ0YWJBY3RpdmUiLCJ0aW1lTGluZUJhY2tncm91bmQiLCJ0aW1lTGluZUJsb2NrQmFja2dyb3VuZCIsInRpbWVMaW5lQm9yZGVyIiwidGltZUxpbmVTdWNjZXNzIiwidGltZUxpbmVGYWlsIiwidGFibGVIZWFkZXIiLCJ0YWJsZVJvdyIsInRhYmxlSW5mbyIsInZhbGlkIiwiaW52YWxpZCIsInNvb25JbnZhbGlkIiwiZXhwaXJlZCIsImhpZ2hsaWdodCIsImRpbWVuc2lvbiIsInN0eWxlcyIsIkhlYWRlclRpbWVsaW5lIiwicHJvcHMiLCJzdGF0ZSIsInNob3dUb29sdGlwIiwic2V0U3RhdGUiLCJ0aW1lbGluZVN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJmb250U2l6ZSIsInRpbWVsaW5lV3JhcHBlciIsIm1hcmdpbkJvdHRvbSIsInRpbWVCbG9jayIsImN1cnNvciIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJib3JkZXJSaWdodCIsInRvb2xUaXBTdHlsZSIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInBhZGRpbmciLCJ6SW5kZXgiLCJ0ZXh0U3BhblN0eWxlIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIndoaXRlU3BhY2UiLCJ0ZXh0T3ZlcmZsb3ciLCJlZmZlY3RpdmVQZXJpb2RzIiwidmFsaWREYXlzT2Zmc2V0IiwiaHJTdHlsZSIsInRyYW5zZm9ybSIsImJvcmRlclRvcCIsImJvcmRlckNvbG9yIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImhvdmVyVGV4dCIsImxlbmd0aCIsImhhbmRsZVRvZ2dsZVRvb2xUaXAiLCJiaW5kIiwibGluZSIsImluZGV4IiwibWFwIiwiZWZmZWN0aXZlUGVyaW9kIiwicGVyaW9kQmxvY2siLCJ0aW1lbGluZUVuZFBvc2l0aW9uIiwidGltZWxpbmVTdGFydFBvc2l0aW9uIiwiaXRlbVRleHQiLCJ0byIsImZyb20iLCJsb2NhbGVDb21wYXJlIiwidmVydGljYWxBbGlnbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsInZhbGlkRnJvbURhdGUiLCJhcnJheSIsIlRpbWVsaW5lIiwidGltZXRhYmxlcyIsImlzTGFzdCIsInBlcmlvZHMiLCJvdmVyZmxvd1kiLCJwYWRkaW5nQm90dG9tIiwidGV4dFN0eWxlIiwicGVyaW9kIiwib2JqZWN0SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVB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O0FBa0JIOzs7O0VBN0VvQiw2Q0FBQWpCLENBQU1DLFM7O0FBZ0Y3Qix3REFBZVEsUUFBZixDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYm9ndVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJib2d1XCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMTBfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMTcpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDYxOWExNTU5NGE2MGY2OGIyNjg5IiwiXG5jb25zdCBjb2xvckRlZiA9IHtcbiAgYmxhY2s6ICcjMDAwJyxcbiAgd2hpdGU6ICcjRkZGJyxcbiAgcmVkOiAnI0YwMCcsXG4gIGdyZWVuOiAnIzBGMCcsXG4gIGJsdWU6ICcjMDBGJyxcbiAgYmlnYmx1ZTogJyMxMTY5QTcnLFxuICBkYXJrQmx1ZTogJyMwODM0NTMnLFxuICBkYXJrR3JleTogJyMyRjJGMkYnLFxuICBncmV5OiAnI0RERERERCcsXG4gIGxpZ2h0R3JleTogJyNGMkYyRjInLFxuICBlbnR1cjoge1xuICAgIHByaW1hcnk6ICcjMjczQTQ2JywgICAvLyAzOSw1OCw3MFxuICAgIHNlY29uZGFyeTogJyM2QkJEQzInLCAvLzEwNywxODksMTk0LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgZm9udDoge1xuICAgIGludmVyc2U6IGNvbG9yRGVmLndoaXRlLFxuICAgIHRpdGxlOiBjb2xvckRlZi5ibGFjayxcbiAgICBpbmZvMTogY29sb3JEZWYuZW50dXIuc2Vjb25kYXJ5LFxuICAgIGluZm8yOiBjb2xvckRlZi5kYXJrQmx1ZSxcbiAgICBpbmZvMzogY29sb3JEZWYuYmxhY2ssXG4gICAgd2FybjogY29sb3JEZWYucmVkLFxuICAgIGRpc2FibGVkOiBjb2xvckRlZi5ncmV5LFxuXG4gICAgdG9vbHRpcDogY29sb3JEZWYud2hpdGUsXG4gIH0sXG4gIGJhY2tncm91bmQ6IGNvbG9yRGVmLmVudHVyLnByaW1hcnksXG4gIGJvcmRlcjogY29sb3JEZWYuYmxhY2ssXG4gIGVmZmVjdGl2ZTogY29sb3JEZWYuYmxhY2ssXG4gIGZhaWw6IGNvbG9yRGVmLnJlZCxcbiAgbW9kYWw6IGNvbG9yRGVmLndoaXRlLFxuICBiYWNrZHJvcDogJ3JnYmEoMCwgMCwgMCwgMC4zKScsXG4gIHRvb2x0aXA6ICcjMTkxOTE5JyxcbiAgdGFiQWN0aXZlOiBjb2xvckRlZi5lbnR1ci5zZWNvbmRhcnksXG5cbiAgdGltZUxpbmVCYWNrZ3JvdW5kOiAnI0RFRDhEOCcsXG4gIHRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kOiAnIzZEOTJCNicsXG4gIHRpbWVMaW5lQm9yZGVyOiAnI2VlZScsXG4gIHRpbWVMaW5lU3VjY2VzczogJyM1REFFNUQnLFxuICB0aW1lTGluZUZhaWw6ICcjQjkxOTE5JyxcbiAgdGFibGVIZWFkZXI6IGNvbG9yRGVmLmxpZ2h0R3JleSxcbiAgdGFibGVSb3c6ICcjZWJmMmYxJyxcbiAgdGFibGVJbmZvOiAnI2ZmZmZkYicsXG5cbiAgdmFsaWQ6ICcjMzNjMTQ2JyxcbiAgaW52YWxpZDogJyNiMjAwMDAnLFxuICBzb29uSW52YWxpZDogJyMzM2MxNDYnLFxuICBleHBpcmVkOiAnI0ZGQUEwMCcsXG4gIGhpZ2hsaWdodCA6IHtcbiAgICB2YWxpZDogJyM0Y2FmNTAnLFxuICAgIHNvb25JbnZhbGlkOiAnIzRjYWY1MCcsXG4gICAgaW52YWxpZDogJyNjYzAwMDAnLFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkaW1lbnNpb24gPSB7XG5cbn1cblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHtcbiAgY29sb3I6IGNvbG9yLFxuICBkaW1lbnNpb246IGRpbWVuc2lvbixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdHlsZXMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMTEwX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29sb3IgfSBmcm9tICcuLi9zdHlsZXMnXG5cbmNsYXNzIEhlYWRlclRpbWVsaW5lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGhvdmVyVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdmFsaWREYXlzT2Zmc2V0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgdmFsaWRGcm9tRGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGVmZmVjdGl2ZVBlcmlvZHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd1Rvb2x0aXA6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlVG9nZ2xlVG9vbFRpcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dUb29sdGlwOiAhdGhpcy5zdGF0ZS5zaG93VG9vbHRpcFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICAgIGNvbnN0IHRpbWVsaW5lU3R5bGUgPSB7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVGYWlsLFxuICAgICAgICBoZWlnaHQ6IDE4LFxuICAgICAgICB3aWR0aDogJzg1JScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGZvbnRTaXplOiAnMCUnLFxuICAgICAgfVxuXG4gICAgICBsZXQgdGltZWxpbmVXcmFwcGVyID0ge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDJcbiAgICAgIH1cblxuICAgICAgbGV0IHRpbWVCbG9jayA9IHtcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVTdWNjZXNzLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgZm9udFNpemU6ICcwLjhyZW0nLFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgfVxuXG4gICAgICBjb25zdCB0b29sVGlwU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAxcycsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxuICAgICAgICBmb250U2l6ZTogJzAuOGVtJyxcbiAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQudG9vbHRpcCxcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3IudG9vbHRpcCxcbiAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICAgIHpJbmRleDogOTksXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRleHRTcGFuU3R5bGUgPSB7XG4gICAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICAgIGhlaWdodDogMTgsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBlZmZlY3RpdmVQZXJpb2RzLCB2YWxpZERheXNPZmZzZXQgfSA9IHRoaXMucHJvcHNcblxuICAgICAgbGV0IGhyU3R5bGUgPSB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg5MGRlZykgdHJhbnNsYXRlWCgyMHB4KScsXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBkb3R0ZWQnLFxuICAgICAgICBib3JkZXJDb2xvcjogY29sb3IuYm9yZGVyLFxuICAgICAgICBtYXJnaW5Ub3A6IDksXG4gICAgICAgIHdpZHRoOiAxNSxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB9XG5cbiAgICAgIGhyU3R5bGUubWFyZ2luTGVmdCA9ICgzMyArIHZhbGlkRGF5c09mZnNldCkgKyAnJSdcblxuICAgICAgbGV0IGhvdmVyVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZHMubGVuZ3RoID8gIHRoaXMucHJvcHMuaG92ZXJUZXh0IDogJ1VneWxkaWcgbGluamUuIE1hbmdsZXIgZGF0YSdcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVXcmFwcGVyfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgY3Vyc29yOiAncG9pbnRlcicsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxMnB4LCAzMHB4KScsIGZvbnRTaXplOiAnMS4yZW0nLCBjb2xvcjogZWZmZWN0aXZlUGVyaW9kcy5sZW5ndGggPyBjb2xvci5lZmZlY3RpdmUgOiBjb2xvci5mYWlsfX1cbiAgICAgICAgICAgIG9uTW91c2VPdmVyPXt0aGlzLmhhbmRsZVRvZ2dsZVRvb2xUaXAuYmluZCh0aGlzKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVUb2dnbGVUb29sVGlwLmJpbmQodGhpcyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5saW5lfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUuc2hvd1Rvb2x0aXAgJiYgPGRpdiBzdHlsZT17dG9vbFRpcFN0eWxlfT4ge2hvdmVyVGV4dH0gPC9kaXY+fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyIHN0eWxlPXtoclN0eWxlfS8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVN0eWxlfT5cbiAgICAgICAgICAgIDxkaXYga2V5PXsndGltZWxpbmUtaGVhZGVyLXdyYXBwZXInK3RoaXMucHJvcHMuaW5kZXh9PlxuICAgICAgICAgICAgeyBlZmZlY3RpdmVQZXJpb2RzLm1hcCggKGVmZmVjdGl2ZVBlcmlvZCwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgICAgIGxldCBwZXJpb2RCbG9jayA9IHsuLi50aW1lQmxvY2t9XG4gICAgICAgICAgICAgICAgcGVyaW9kQmxvY2sud2lkdGggPSAoZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gLSBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uKSArICclJ1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLm1hcmdpbkxlZnQgPSAoZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiArICclJylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcGVyaW9kQmxvY2subWFyZ2luTGVmdCA9IChlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uIC0gZWZmZWN0aXZlUGVyaW9kc1tpbmRleC0xXS50aW1lbGluZUVuZFBvc2l0aW9uKSArICclJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBpdGVtVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZC50b1xuXG4gICAgICAgICAgICAgICAgaWYgKGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gPiAwICYmIGVmZmVjdGl2ZVBlcmlvZC5mcm9tLmxvY2FsZUNvbXBhcmUoZWZmZWN0aXZlUGVyaW9kLnRvKSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgaXRlbVRleHQgPSBlZmZlY3RpdmVQZXJpb2QuZnJvbSArICcgLSAnICsgZWZmZWN0aXZlUGVyaW9kLnRvXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGtleT17J3RpbWVsaW5lLWhlYWRlci1ibG9jaycraW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3BlcmlvZEJsb2NrfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt0ZXh0U3BhblN0eWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJpb2QtYmxvY2tcIiBzdHlsZT17e2hlaWdodDogJzEwMCUnLCBjb2xvcjogY29sb3IuZm9udC5pbnZlcnNlLCB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ319IHRpdGxlPXtpdGVtVGV4dH0+e2l0ZW1UZXh0fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUaW1lbGluZVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSGVhZGVyVGltZWxpbmUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uL3N0eWxlcydcblxuY2xhc3MgVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICByZW5kZXIoKSB7XG5cbiAgICAgIGNvbnN0IHsgdGltZXRhYmxlcywgdmFsaWREYXlzT2Zmc2V0LCBpc0xhc3QgfSA9IHRoaXMucHJvcHNcblxuICAgICAgbGV0IHsgcGVyaW9kcyB9ID0gdGltZXRhYmxlc1swXVxuXG4gICAgICBjb25zdCB0aW1lbGluZVN0eWxlID0ge1xuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmxhY2snLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDUsXG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lQmFja2dyb3VuZCxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIHdpZHRoOiAnODUlJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93WTogJ2F1dG8nLFxuICAgICAgICBtYXJnaW5Cb3R0b206IGlzTGFzdCA/IC0xNSA6ICdhdXRvJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0aW1lbGluZVdyYXBwZXIgPSB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGlzTGFzdCA/IDAgOiAxMFxuICAgICAgfVxuXG4gICAgICBsZXQgdGltZUJsb2NrID0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUJsb2NrQmFja2dyb3VuZCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgICAgfVxuXG4gICAgICBsZXQgdGV4dFN0eWxlID0ge1xuICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8gMTBweCcsXG4gICAgICAgIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsXG4gICAgICAgIGZvbnRTaXplOiAnMC43ZW0nLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDBcbiAgICAgIH1cblxuICAgICAgbGV0IGhyU3R5bGUgPSB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg5MGRlZyknLFxuICAgICAgICBib3JkZXJUb3A6ICcxcHggZG90dGVkJyxcbiAgICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLmJvcmRlcixcbiAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICBtYXJnaW5Ub3A6IDksXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgICB9XG5cbiAgICAgIGhyU3R5bGUubWFyZ2luTGVmdCA9ICgzMyArIHZhbGlkRGF5c09mZnNldCkgKyAnJSdcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17dGltZWxpbmVXcmFwcGVyfT5cbiAgICAgICAgICA8aHIgc3R5bGU9e2hyU3R5bGV9Lz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVN0eWxlfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGVyaW9kcy5tYXAoIChwZXJpb2QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHBlcmlvZEJsb2NrID0gey4uLnRpbWVCbG9ja31cbiAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay53aWR0aCA9IChwZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAtIHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24pICsgJyUnXG4gICAgICAgICAgICAgICAgcGVyaW9kQmxvY2subWFyZ2luTGVmdCA9IChwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICsgJyUnKVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17J3RpbWV0YWJsZS1wZXJpb2QtJytpbmRleH0gc3R5bGU9e3BlcmlvZEJsb2NrfSB0aXRsZT17dGltZXRhYmxlc1swXS5vYmplY3RJZH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRTdHlsZX0+e3RpbWV0YWJsZXNbMF0ub2JqZWN0SWR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj4pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=