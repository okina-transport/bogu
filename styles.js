(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bogu"] = factory();
	else
		root["bogu"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMzk3MDZlZDlhZmQ5MmI3ZGJiNT8yYmY1KiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmpzPzRmNzIiXSwibmFtZXMiOlsiY29sb3JEZWYiLCJibGFjayIsIndoaXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYmlnYmx1ZSIsImRhcmtCbHVlIiwiZGFya0dyZXkiLCJncmV5IiwibGlnaHRHcmV5IiwiZW50dXIiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiY29sb3IiLCJmb250IiwiaW52ZXJzZSIsInRpdGxlIiwiaW5mbzEiLCJpbmZvMiIsImluZm8zIiwid2FybiIsImRpc2FibGVkIiwidG9vbHRpcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJlZmZlY3RpdmUiLCJmYWlsIiwibW9kYWwiLCJiYWNrZHJvcCIsInRhYkFjdGl2ZSIsInRpbWVMaW5lQmFja2dyb3VuZCIsInRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kIiwidGltZUxpbmVCb3JkZXIiLCJ0aW1lTGluZVN1Y2Nlc3MiLCJ0aW1lTGluZUZhaWwiLCJ0YWJsZUhlYWRlciIsInRhYmxlUm93IiwidGFibGVJbmZvIiwidmFsaWQiLCJpbnZhbGlkIiwic29vbkludmFsaWQiLCJleHBpcmVkIiwiaGlnaGxpZ2h0IiwiZGltZW5zaW9uIiwidGltZUxpbmVXaWR0aCIsInN0eWxlcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvREEsSUFBTUEsV0FBVztBQUNmQyxTQUFPLE1BRFE7QUFFZkMsU0FBTyxNQUZRO0FBR2ZDLE9BQUssTUFIVTtBQUlmQyxTQUFPLE1BSlE7QUFLZkMsUUFBTSxNQUxTO0FBTWZDLFdBQVMsU0FOTTtBQU9mQyxZQUFVLFNBUEs7QUFRZkMsWUFBVSxTQVJLO0FBU2ZDLFFBQU0sU0FUUztBQVVmQyxhQUFXLFNBVkk7QUFXZkMsU0FBTztBQUNMQyxhQUFTLFNBREosRUFDaUI7QUFDdEJDLGVBQVcsU0FGTjtBQVhRLENBQWpCOztBQWlCTyxJQUFNQyxRQUFRO0FBQ25CQyxRQUFNO0FBQ0pDLGFBQVNoQixTQUFTRSxLQURkO0FBRUplLFdBQU9qQixTQUFTQyxLQUZaO0FBR0ppQixXQUFPbEIsU0FBU1csS0FBVCxDQUFlRSxTQUhsQjtBQUlKTSxXQUFPbkIsU0FBU08sUUFKWjtBQUtKYSxXQUFPcEIsU0FBU0MsS0FMWjtBQU1Kb0IsVUFBTXJCLFNBQVNHLEdBTlg7QUFPSm1CLGNBQVV0QixTQUFTUyxJQVBmOztBQVNKYyxhQUFTdkIsU0FBU0U7QUFUZCxHQURhO0FBWW5Cc0IsY0FBWXhCLFNBQVNXLEtBQVQsQ0FBZUMsT0FaUjtBQWFuQmEsVUFBUXpCLFNBQVNDLEtBYkU7QUFjbkJ5QixhQUFXMUIsU0FBU0MsS0FkRDtBQWVuQjBCLFFBQU0zQixTQUFTRyxHQWZJO0FBZ0JuQnlCLFNBQU81QixTQUFTRSxLQWhCRztBQWlCbkIyQixZQUFVLG9CQWpCUztBQWtCbkJOLFdBQVMsU0FsQlU7QUFtQm5CTyxhQUFXOUIsU0FBU1csS0FBVCxDQUFlRSxTQW5CUDs7QUFxQm5Ca0Isc0JBQW9CLFNBckJEO0FBc0JuQkMsMkJBQXlCLFNBdEJOO0FBdUJuQkMsa0JBQWdCLE1BdkJHO0FBd0JuQkMsbUJBQWlCLFNBeEJFO0FBeUJuQkMsZ0JBQWMsU0F6Qks7QUEwQm5CQyxlQUFhcEMsU0FBU1UsU0ExQkg7QUEyQm5CMkIsWUFBVSxTQTNCUztBQTRCbkJDLGFBQVcsU0E1QlE7O0FBOEJuQkMsU0FBTyxTQTlCWTtBQStCbkJDLFdBQVMsU0EvQlU7QUFnQ25CQyxlQUFhLFNBaENNO0FBaUNuQkMsV0FBUyxTQWpDVTtBQWtDbkJDLGFBQVk7QUFDVkosV0FBTyxTQURHO0FBRVZFLGlCQUFhLFNBRkg7QUFHVkQsYUFBUztBQUhDO0FBbENPLENBQWQ7O0FBeUNBLElBQU1JLFlBQVk7QUFDdkJDLGlCQUFlO0FBRFEsQ0FBbEI7O0FBSUEsSUFBTUMsU0FBUztBQUNwQmhDLFNBQU9BLEtBRGE7QUFFcEI4QixhQUFXQTtBQUZTLENBQWYsQyIsImZpbGUiOiJzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMzk3MDZlZDlhZmQ5MmI3ZGJiNSIsIlxuY29uc3QgY29sb3JEZWYgPSB7XG4gIGJsYWNrOiAnIzAwMCcsXG4gIHdoaXRlOiAnI0ZGRicsXG4gIHJlZDogJyNGMDAnLFxuICBncmVlbjogJyMwRjAnLFxuICBibHVlOiAnIzAwRicsXG4gIGJpZ2JsdWU6ICcjMTE2OUE3JyxcbiAgZGFya0JsdWU6ICcjMDgzNDUzJyxcbiAgZGFya0dyZXk6ICcjMkYyRjJGJyxcbiAgZ3JleTogJyNEREREREQnLFxuICBsaWdodEdyZXk6ICcjRjJGMkYyJyxcbiAgZW50dXI6IHtcbiAgICBwcmltYXJ5OiAnIzI3M0E0NicsICAgLy8gMzksNTgsNzBcbiAgICBzZWNvbmRhcnk6ICcjNkJCREMyJywgLy8xMDcsMTg5LDE5NCxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY29sb3IgPSB7XG4gIGZvbnQ6IHtcbiAgICBpbnZlcnNlOiBjb2xvckRlZi53aGl0ZSxcbiAgICB0aXRsZTogY29sb3JEZWYuYmxhY2ssXG4gICAgaW5mbzE6IGNvbG9yRGVmLmVudHVyLnNlY29uZGFyeSxcbiAgICBpbmZvMjogY29sb3JEZWYuZGFya0JsdWUsXG4gICAgaW5mbzM6IGNvbG9yRGVmLmJsYWNrLFxuICAgIHdhcm46IGNvbG9yRGVmLnJlZCxcbiAgICBkaXNhYmxlZDogY29sb3JEZWYuZ3JleSxcblxuICAgIHRvb2x0aXA6IGNvbG9yRGVmLndoaXRlLFxuICB9LFxuICBiYWNrZ3JvdW5kOiBjb2xvckRlZi5lbnR1ci5wcmltYXJ5LFxuICBib3JkZXI6IGNvbG9yRGVmLmJsYWNrLFxuICBlZmZlY3RpdmU6IGNvbG9yRGVmLmJsYWNrLFxuICBmYWlsOiBjb2xvckRlZi5yZWQsXG4gIG1vZGFsOiBjb2xvckRlZi53aGl0ZSxcbiAgYmFja2Ryb3A6ICdyZ2JhKDAsIDAsIDAsIDAuMyknLFxuICB0b29sdGlwOiAnIzE5MTkxOScsXG4gIHRhYkFjdGl2ZTogY29sb3JEZWYuZW50dXIuc2Vjb25kYXJ5LFxuXG4gIHRpbWVMaW5lQmFja2dyb3VuZDogJyNERUQ4RDgnLFxuICB0aW1lTGluZUJsb2NrQmFja2dyb3VuZDogJyM2RDkyQjYnLFxuICB0aW1lTGluZUJvcmRlcjogJyNlZWUnLFxuICB0aW1lTGluZVN1Y2Nlc3M6ICcjNURBRTVEJyxcbiAgdGltZUxpbmVGYWlsOiAnI0I5MTkxOScsXG4gIHRhYmxlSGVhZGVyOiBjb2xvckRlZi5saWdodEdyZXksXG4gIHRhYmxlUm93OiAnI2ViZjJmMScsXG4gIHRhYmxlSW5mbzogJyNmZmZmZGInLFxuXG4gIHZhbGlkOiAnIzMzYzE0NicsXG4gIGludmFsaWQ6ICcjYjIwMDAwJyxcbiAgc29vbkludmFsaWQ6ICcjMzNjMTQ2JyxcbiAgZXhwaXJlZDogJyNGRkFBMDAnLFxuICBoaWdobGlnaHQgOiB7XG4gICAgdmFsaWQ6ICcjNGNhZjUwJyxcbiAgICBzb29uSW52YWxpZDogJyM0Y2FmNTAnLFxuICAgIGludmFsaWQ6ICcjY2MwMDAwJyxcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGltZW5zaW9uID0ge1xuICB0aW1lTGluZVdpZHRoOiA4NSxcbn1cblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHtcbiAgY29sb3I6IGNvbG9yLFxuICBkaW1lbnNpb246IGRpbWVuc2lvbixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdHlsZXMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9