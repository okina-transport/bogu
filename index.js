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
  lightGrey: '#F2F2F2'
};

var color = {
  font: {
    inverse: colorDef.white,
    title: colorDef.black,
    info1: colorDef.bigblue,
    info2: colorDef.darkBlue,
    info3: colorDef.black,
    warn: colorDef.red,
    disabled: colorDef.grey,

    tooltip: colorDef.white
  },
  background: colorDef.darkGrey,
  border: colorDef.black,
  effective: colorDef.black,
  fail: colorDef.red,
  modal: colorDef.white,
  backdrop: 'rgba(0, 0, 0, 0.3)',
  tooltip: '#191919',
  tabActive: colorDef.red,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGZjMTQwZDFiYzAwZDVhOTM1NzYyPzgyMDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlclRpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIl0sIm5hbWVzIjpbImNvbG9yRGVmIiwiYmxhY2siLCJ3aGl0ZSIsInJlZCIsImdyZWVuIiwiYmx1ZSIsImJpZ2JsdWUiLCJkYXJrQmx1ZSIsImRhcmtHcmV5IiwiZ3JleSIsImxpZ2h0R3JleSIsImNvbG9yIiwiZm9udCIsImludmVyc2UiLCJ0aXRsZSIsImluZm8xIiwiaW5mbzIiLCJpbmZvMyIsIndhcm4iLCJkaXNhYmxlZCIsInRvb2x0aXAiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiZWZmZWN0aXZlIiwiZmFpbCIsIm1vZGFsIiwiYmFja2Ryb3AiLCJ0YWJBY3RpdmUiLCJ0aW1lTGluZUJhY2tncm91bmQiLCJ0aW1lTGluZUJsb2NrQmFja2dyb3VuZCIsInRpbWVMaW5lQm9yZGVyIiwidGltZUxpbmVTdWNjZXNzIiwidGltZUxpbmVGYWlsIiwidGFibGVIZWFkZXIiLCJ0YWJsZVJvdyIsInRhYmxlSW5mbyIsInZhbGlkIiwiaW52YWxpZCIsInNvb25JbnZhbGlkIiwiZXhwaXJlZCIsImhpZ2hsaWdodCIsImRpbWVuc2lvbiIsInN0eWxlcyIsIkhlYWRlclRpbWVsaW5lIiwicHJvcHMiLCJzdGF0ZSIsInNob3dUb29sdGlwIiwic2V0U3RhdGUiLCJ0aW1lbGluZVN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5Iiwib3ZlcmZsb3ciLCJmb250U2l6ZSIsInRpbWVsaW5lV3JhcHBlciIsIm1hcmdpbkJvdHRvbSIsInRpbWVCbG9jayIsImN1cnNvciIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJib3JkZXJSaWdodCIsInRvb2xUaXBTdHlsZSIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInBhZGRpbmciLCJ6SW5kZXgiLCJ0ZXh0U3BhblN0eWxlIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIndoaXRlU3BhY2UiLCJ0ZXh0T3ZlcmZsb3ciLCJlZmZlY3RpdmVQZXJpb2RzIiwidmFsaWREYXlzT2Zmc2V0IiwiaHJTdHlsZSIsInRyYW5zZm9ybSIsImJvcmRlclRvcCIsImJvcmRlckNvbG9yIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImhvdmVyVGV4dCIsImxlbmd0aCIsImhhbmRsZVRvZ2dsZVRvb2xUaXAiLCJiaW5kIiwibGluZSIsImluZGV4IiwibWFwIiwiZWZmZWN0aXZlUGVyaW9kIiwicGVyaW9kQmxvY2siLCJ0aW1lbGluZUVuZFBvc2l0aW9uIiwidGltZWxpbmVTdGFydFBvc2l0aW9uIiwiaXRlbVRleHQiLCJ0byIsImZyb20iLCJsb2NhbGVDb21wYXJlIiwidmVydGljYWxBbGlnbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm51bWJlciIsInZhbGlkRnJvbURhdGUiLCJhcnJheSIsIlRpbWVsaW5lIiwidGltZXRhYmxlcyIsImlzTGFzdCIsInBlcmlvZHMiLCJvdmVyZmxvd1kiLCJwYWRkaW5nQm90dG9tIiwidGV4dFN0eWxlIiwicGVyaW9kIiwib2JqZWN0SWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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ZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzExMF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmMxNDBkMWJjMDBkNWE5MzU3NjIiLCJcbmNvbnN0IGNvbG9yRGVmID0ge1xuICBibGFjazogJyMwMDAnLFxuICB3aGl0ZTogJyNGRkYnLFxuICByZWQ6ICcjRjAwJyxcbiAgZ3JlZW46ICcjMEYwJyxcbiAgYmx1ZTogJyMwMEYnLFxuICBiaWdibHVlOiAnIzExNjlBNycsXG4gIGRhcmtCbHVlOiAnIzA4MzQ1MycsXG4gIGRhcmtHcmV5OiAnIzJGMkYyRicsXG4gIGdyZXk6ICcjREREREREJyxcbiAgbGlnaHRHcmV5OiAnI0YyRjJGMicsXG59XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgZm9udDoge1xuICAgIGludmVyc2U6IGNvbG9yRGVmLndoaXRlLFxuICAgIHRpdGxlOiBjb2xvckRlZi5ibGFjayxcbiAgICBpbmZvMTogY29sb3JEZWYuYmlnYmx1ZSxcbiAgICBpbmZvMjogY29sb3JEZWYuZGFya0JsdWUsXG4gICAgaW5mbzM6IGNvbG9yRGVmLmJsYWNrLFxuICAgIHdhcm46IGNvbG9yRGVmLnJlZCxcbiAgICBkaXNhYmxlZDogY29sb3JEZWYuZ3JleSxcblxuICAgIHRvb2x0aXA6IGNvbG9yRGVmLndoaXRlLFxuICB9LFxuICBiYWNrZ3JvdW5kOiBjb2xvckRlZi5kYXJrR3JleSxcbiAgYm9yZGVyOiBjb2xvckRlZi5ibGFjayxcbiAgZWZmZWN0aXZlOiBjb2xvckRlZi5ibGFjayxcbiAgZmFpbDogY29sb3JEZWYucmVkLFxuICBtb2RhbDogY29sb3JEZWYud2hpdGUsXG4gIGJhY2tkcm9wOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcbiAgdG9vbHRpcDogJyMxOTE5MTknLFxuICB0YWJBY3RpdmU6IGNvbG9yRGVmLnJlZCxcblxuICB0aW1lTGluZUJhY2tncm91bmQ6ICcjREVEOEQ4JyxcbiAgdGltZUxpbmVCbG9ja0JhY2tncm91bmQ6ICcjNkQ5MkI2JyxcbiAgdGltZUxpbmVCb3JkZXI6ICcjZWVlJyxcbiAgdGltZUxpbmVTdWNjZXNzOiAnIzVEQUU1RCcsXG4gIHRpbWVMaW5lRmFpbDogJyNCOTE5MTknLFxuICB0YWJsZUhlYWRlcjogY29sb3JEZWYubGlnaHRHcmV5LFxuICB0YWJsZVJvdzogJyNlYmYyZjEnLFxuICB0YWJsZUluZm86ICcjZmZmZmRiJyxcblxuICB2YWxpZDogJyMzM2MxNDYnLFxuICBpbnZhbGlkOiAnI2IyMDAwMCcsXG4gIHNvb25JbnZhbGlkOiAnIzMzYzE0NicsXG4gIGV4cGlyZWQ6ICcjRkZBQTAwJyxcbiAgaGlnaGxpZ2h0IDoge1xuICAgIHZhbGlkOiAnIzRjYWY1MCcsXG4gICAgc29vbkludmFsaWQ6ICcjNGNhZjUwJyxcbiAgICBpbnZhbGlkOiAnI2NjMDAwMCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRpbWVuc2lvbiA9IHtcblxufVxuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICBjb2xvcjogY29sb3IsXG4gIGRpbWVuc2lvbjogZGltZW5zaW9uLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlcy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xMTBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb2xvciB9IGZyb20gJy4uL3N0eWxlcydcblxuY2xhc3MgSGVhZGVyVGltZWxpbmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaG92ZXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWxpZERheXNPZmZzZXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICB2YWxpZEZyb21EYXRlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgZWZmZWN0aXZlUGVyaW9kczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93VG9vbHRpcDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVUb2dnbGVUb29sVGlwKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1Rvb2x0aXA6ICF0aGlzLnN0YXRlLnNob3dUb29sdGlwXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgICAgY29uc3QgdGltZWxpbmVTdHlsZSA9IHtcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIGJsYWNrJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZUZhaWwsXG4gICAgICAgIGhlaWdodDogMTgsXG4gICAgICAgIHdpZHRoOiAnODUlJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgZm9udFNpemU6ICcwJScsXG4gICAgICB9XG5cbiAgICAgIGxldCB0aW1lbGluZVdyYXBwZXIgPSB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMlxuICAgICAgfVxuXG4gICAgICBsZXQgdGltZUJsb2NrID0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci50aW1lTGluZVN1Y2Nlc3MsXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBmb250U2l6ZTogJzAuOHJlbScsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBib3JkZXJSaWdodDogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvb2xUaXBTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDFzJyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgICAgIGZvbnRTaXplOiAnMC44ZW0nLFxuICAgICAgICBjb2xvcjogY29sb3IuZm9udC50b29sdGlwLFxuICAgICAgICBiYWNrZ3JvdW5kOiBjb2xvci50b29sdGlwLFxuICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgd2lkdGg6ICdhdXRvJyxcbiAgICAgICAgekluZGV4OiA5OSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGV4dFNwYW5TdHlsZSA9IHtcbiAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgaGVpZ2h0OiAxOCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGVmZmVjdGl2ZVBlcmlvZHMsIHZhbGlkRGF5c09mZnNldCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDkwZGVnKSB0cmFuc2xhdGVYKDIwcHgpJyxcbiAgICAgICAgYm9yZGVyVG9wOiAnMXB4IGRvdHRlZCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiBjb2xvci5ib3JkZXIsXG4gICAgICAgIG1hcmdpblRvcDogOSxcbiAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIH1cblxuICAgICAgaHJTdHlsZS5tYXJnaW5MZWZ0ID0gKDMzICsgdmFsaWREYXlzT2Zmc2V0KSArICclJ1xuXG4gICAgICBsZXQgaG92ZXJUZXh0ID0gZWZmZWN0aXZlUGVyaW9kcy5sZW5ndGggPyAgdGhpcy5wcm9wcy5ob3ZlclRleHQgOiAnVWd5bGRpZyBsaW5qZS4gTWFuZ2xlciBkYXRhJ1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVdyYXBwZXJ9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBjdXJzb3I6ICdwb2ludGVyJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDEycHgsIDMwcHgpJywgZm9udFNpemU6ICcxLjJlbScsIGNvbG9yOiBlZmZlY3RpdmVQZXJpb2RzLmxlbmd0aCA/IGNvbG9yLmVmZmVjdGl2ZSA6IGNvbG9yLmZhaWx9fVxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9e3RoaXMuaGFuZGxlVG9nZ2xlVG9vbFRpcC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmhhbmRsZVRvZ2dsZVRvb2xUaXAuYmluZCh0aGlzKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmxpbmV9XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93VG9vbHRpcCAmJiA8ZGl2IHN0eWxlPXt0b29sVGlwU3R5bGV9PiB7aG92ZXJUZXh0fSA8L2Rpdj59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgc3R5bGU9e2hyU3R5bGV9Lz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgICAgPGRpdiBrZXk9eyd0aW1lbGluZS1oZWFkZXItd3JhcHBlcicrdGhpcy5wcm9wcy5pbmRleH0+XG4gICAgICAgICAgICB7IGVmZmVjdGl2ZVBlcmlvZHMubWFwKCAoZWZmZWN0aXZlUGVyaW9kLCBpbmRleCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IHBlcmlvZEJsb2NrID0gey4uLnRpbWVCbG9ja31cbiAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay53aWR0aCA9IChlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAtIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24pICsgJyUnXG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgcGVyaW9kQmxvY2subWFyZ2luTGVmdCA9IChlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uICsgJyUnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID0gKGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gLSBlZmZlY3RpdmVQZXJpb2RzW2luZGV4LTFdLnRpbWVsaW5lRW5kUG9zaXRpb24pICsgJyUnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1UZXh0ID0gZWZmZWN0aXZlUGVyaW9kLnRvXG5cbiAgICAgICAgICAgICAgICBpZiAoZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA+IDAgJiYgZWZmZWN0aXZlUGVyaW9kLmZyb20ubG9jYWxlQ29tcGFyZShlZmZlY3RpdmVQZXJpb2QudG8pICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBpdGVtVGV4dCA9IGVmZmVjdGl2ZVBlcmlvZC5mcm9tICsgJyAtICcgKyBlZmZlY3RpdmVQZXJpb2QudG9cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXsndGltZWxpbmUtaGVhZGVyLWJsb2NrJytpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17cGVyaW9kQmxvY2t9PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3RleHRTcGFuU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmlvZC1ibG9ja1wiIHN0eWxlPXt7aGVpZ2h0OiAnMTAwJScsIGNvbG9yOiBjb2xvci5mb250LmludmVyc2UsIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX0gdGl0bGU9e2l0ZW1UZXh0fT57aXRlbVRleHR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclRpbWVsaW5lXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9IZWFkZXJUaW1lbGluZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vc3R5bGVzJ1xuXG5jbGFzcyBUaW1lbGluZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgICAgY29uc3QgeyB0aW1ldGFibGVzLCB2YWxpZERheXNPZmZzZXQsIGlzTGFzdCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICBsZXQgeyBwZXJpb2RzIH0gPSB0aW1ldGFibGVzWzBdXG5cbiAgICAgIGNvbnN0IHRpbWVsaW5lU3R5bGUgPSB7XG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibGFjaycsXG4gICAgICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAgICAgYmFja2dyb3VuZDogY29sb3IudGltZUxpbmVCYWNrZ3JvdW5kLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgd2lkdGg6ICc4NSUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogaXNMYXN0ID8gLTE1IDogJ2F1dG8nXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRpbWVsaW5lV3JhcHBlciA9IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogaXNMYXN0ID8gMCA6IDEwXG4gICAgICB9XG5cbiAgICAgIGxldCB0aW1lQmxvY2sgPSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNvbG9yLnRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgICB9XG5cbiAgICAgIGxldCB0ZXh0U3R5bGUgPSB7XG4gICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0byAxMHB4JyxcbiAgICAgICAgY29sb3I6IGNvbG9yLmZvbnQuaW52ZXJzZSxcbiAgICAgICAgZm9udFNpemU6ICcwLjdlbScsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgICAgfVxuXG4gICAgICBsZXQgaHJTdHlsZSA9IHtcbiAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDkwZGVnKScsXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBkb3R0ZWQnLFxuICAgICAgICBib3JkZXJDb2xvcjogY29sb3IuYm9yZGVyLFxuICAgICAgICB3aWR0aDogMTUsXG4gICAgICAgIG1hcmdpblRvcDogOSxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICAgIH1cblxuICAgICAgaHJTdHlsZS5tYXJnaW5MZWZ0ID0gKDMzICsgdmFsaWREYXlzT2Zmc2V0KSArICclJ1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt0aW1lbGluZVdyYXBwZXJ9PlxuICAgICAgICAgIDxociBzdHlsZT17aHJTdHlsZX0vPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3RpbWVsaW5lU3R5bGV9PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwZXJpb2RzLm1hcCggKHBlcmlvZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcGVyaW9kQmxvY2sgPSB7Li4udGltZUJsb2NrfVxuICAgICAgICAgICAgICAgIHBlcmlvZEJsb2NrLndpZHRoID0gKHBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC0gcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbikgKyAnJSdcbiAgICAgICAgICAgICAgICBwZXJpb2RCbG9jay5tYXJnaW5MZWZ0ID0gKHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gKyAnJScpXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXsndGltZXRhYmxlLXBlcmlvZC0nK2luZGV4fSBzdHlsZT17cGVyaW9kQmxvY2t9IHRpdGxlPXt0aW1ldGFibGVzWzBdLm9iamVjdElkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17dGV4dFN0eWxlfT57dGltZXRhYmxlc1swXS5vYmplY3RJZH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PilcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==