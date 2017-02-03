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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYqIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYzE0MGQxYmMwMGQ1YTkzNTc2Mj84MjA0KiIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LmpzPzRmNzIiXSwibmFtZXMiOlsiY29sb3JEZWYiLCJibGFjayIsIndoaXRlIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYmlnYmx1ZSIsImRhcmtCbHVlIiwiZGFya0dyZXkiLCJncmV5IiwibGlnaHRHcmV5IiwiY29sb3IiLCJmb250IiwiaW52ZXJzZSIsInRpdGxlIiwiaW5mbzEiLCJpbmZvMiIsImluZm8zIiwid2FybiIsImRpc2FibGVkIiwidG9vbHRpcCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJlZmZlY3RpdmUiLCJmYWlsIiwibW9kYWwiLCJiYWNrZHJvcCIsInRhYkFjdGl2ZSIsInRpbWVMaW5lQmFja2dyb3VuZCIsInRpbWVMaW5lQmxvY2tCYWNrZ3JvdW5kIiwidGltZUxpbmVCb3JkZXIiLCJ0aW1lTGluZVN1Y2Nlc3MiLCJ0aW1lTGluZUZhaWwiLCJ0YWJsZUhlYWRlciIsInRhYmxlUm93IiwidGFibGVJbmZvIiwidmFsaWQiLCJpbnZhbGlkIiwic29vbkludmFsaWQiLCJleHBpcmVkIiwiaGlnaGxpZ2h0IiwiZGltZW5zaW9uIiwic3R5bGVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0RBLElBQU1BLFdBQVc7QUFDZkMsU0FBTyxNQURRO0FBRWZDLFNBQU8sTUFGUTtBQUdmQyxPQUFLLE1BSFU7QUFJZkMsU0FBTyxNQUpRO0FBS2ZDLFFBQU0sTUFMUztBQU1mQyxXQUFTLFNBTk07QUFPZkMsWUFBVSxTQVBLO0FBUWZDLFlBQVUsU0FSSztBQVNmQyxRQUFNLFNBVFM7QUFVZkMsYUFBVztBQVZJLENBQWpCOztBQWFPLElBQU1DLFFBQVE7QUFDbkJDLFFBQU07QUFDSkMsYUFBU2IsU0FBU0UsS0FEZDtBQUVKWSxXQUFPZCxTQUFTQyxLQUZaO0FBR0pjLFdBQU9mLFNBQVNNLE9BSFo7QUFJSlUsV0FBT2hCLFNBQVNPLFFBSlo7QUFLSlUsV0FBT2pCLFNBQVNDLEtBTFo7QUFNSmlCLFVBQU1sQixTQUFTRyxHQU5YO0FBT0pnQixjQUFVbkIsU0FBU1MsSUFQZjs7QUFTSlcsYUFBU3BCLFNBQVNFO0FBVGQsR0FEYTtBQVluQm1CLGNBQVlyQixTQUFTUSxRQVpGO0FBYW5CYyxVQUFRdEIsU0FBU0MsS0FiRTtBQWNuQnNCLGFBQVd2QixTQUFTQyxLQWREO0FBZW5CdUIsUUFBTXhCLFNBQVNHLEdBZkk7QUFnQm5Cc0IsU0FBT3pCLFNBQVNFLEtBaEJHO0FBaUJuQndCLFlBQVUsb0JBakJTO0FBa0JuQk4sV0FBUyxTQWxCVTtBQW1CbkJPLGFBQVczQixTQUFTRyxHQW5CRDs7QUFxQm5CeUIsc0JBQW9CLFNBckJEO0FBc0JuQkMsMkJBQXlCLFNBdEJOO0FBdUJuQkMsa0JBQWdCLE1BdkJHO0FBd0JuQkMsbUJBQWlCLFNBeEJFO0FBeUJuQkMsZ0JBQWMsU0F6Qks7QUEwQm5CQyxlQUFhakMsU0FBU1UsU0ExQkg7QUEyQm5Cd0IsWUFBVSxTQTNCUztBQTRCbkJDLGFBQVcsU0E1QlE7O0FBOEJuQkMsU0FBTyxTQTlCWTtBQStCbkJDLFdBQVMsU0EvQlU7QUFnQ25CQyxlQUFhLFNBaENNO0FBaUNuQkMsV0FBUyxTQWpDVTtBQWtDbkJDLGFBQVk7QUFDVkosV0FBTyxTQURHO0FBRVZFLGlCQUFhLFNBRkg7QUFHVkQsYUFBUztBQUhDO0FBbENPLENBQWQ7O0FBeUNBLElBQU1JLFlBQVksRUFBbEI7O0FBSUEsSUFBTUMsU0FBUztBQUNwQi9CLFNBQU9BLEtBRGE7QUFFcEI4QixhQUFXQTtBQUZTLENBQWYsQyIsImZpbGUiOiJzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmMxNDBkMWJjMDBkNWE5MzU3NjIiLCJcbmNvbnN0IGNvbG9yRGVmID0ge1xuICBibGFjazogJyMwMDAnLFxuICB3aGl0ZTogJyNGRkYnLFxuICByZWQ6ICcjRjAwJyxcbiAgZ3JlZW46ICcjMEYwJyxcbiAgYmx1ZTogJyMwMEYnLFxuICBiaWdibHVlOiAnIzExNjlBNycsXG4gIGRhcmtCbHVlOiAnIzA4MzQ1MycsXG4gIGRhcmtHcmV5OiAnIzJGMkYyRicsXG4gIGdyZXk6ICcjREREREREJyxcbiAgbGlnaHRHcmV5OiAnI0YyRjJGMicsXG59XG5cbmV4cG9ydCBjb25zdCBjb2xvciA9IHtcbiAgZm9udDoge1xuICAgIGludmVyc2U6IGNvbG9yRGVmLndoaXRlLFxuICAgIHRpdGxlOiBjb2xvckRlZi5ibGFjayxcbiAgICBpbmZvMTogY29sb3JEZWYuYmlnYmx1ZSxcbiAgICBpbmZvMjogY29sb3JEZWYuZGFya0JsdWUsXG4gICAgaW5mbzM6IGNvbG9yRGVmLmJsYWNrLFxuICAgIHdhcm46IGNvbG9yRGVmLnJlZCxcbiAgICBkaXNhYmxlZDogY29sb3JEZWYuZ3JleSxcblxuICAgIHRvb2x0aXA6IGNvbG9yRGVmLndoaXRlLFxuICB9LFxuICBiYWNrZ3JvdW5kOiBjb2xvckRlZi5kYXJrR3JleSxcbiAgYm9yZGVyOiBjb2xvckRlZi5ibGFjayxcbiAgZWZmZWN0aXZlOiBjb2xvckRlZi5ibGFjayxcbiAgZmFpbDogY29sb3JEZWYucmVkLFxuICBtb2RhbDogY29sb3JEZWYud2hpdGUsXG4gIGJhY2tkcm9wOiAncmdiYSgwLCAwLCAwLCAwLjMpJyxcbiAgdG9vbHRpcDogJyMxOTE5MTknLFxuICB0YWJBY3RpdmU6IGNvbG9yRGVmLnJlZCxcblxuICB0aW1lTGluZUJhY2tncm91bmQ6ICcjREVEOEQ4JyxcbiAgdGltZUxpbmVCbG9ja0JhY2tncm91bmQ6ICcjNkQ5MkI2JyxcbiAgdGltZUxpbmVCb3JkZXI6ICcjZWVlJyxcbiAgdGltZUxpbmVTdWNjZXNzOiAnIzVEQUU1RCcsXG4gIHRpbWVMaW5lRmFpbDogJyNCOTE5MTknLFxuICB0YWJsZUhlYWRlcjogY29sb3JEZWYubGlnaHRHcmV5LFxuICB0YWJsZVJvdzogJyNlYmYyZjEnLFxuICB0YWJsZUluZm86ICcjZmZmZmRiJyxcblxuICB2YWxpZDogJyMzM2MxNDYnLFxuICBpbnZhbGlkOiAnI2IyMDAwMCcsXG4gIHNvb25JbnZhbGlkOiAnIzMzYzE0NicsXG4gIGV4cGlyZWQ6ICcjRkZBQTAwJyxcbiAgaGlnaGxpZ2h0IDoge1xuICAgIHZhbGlkOiAnIzRjYWY1MCcsXG4gICAgc29vbkludmFsaWQ6ICcjNGNhZjUwJyxcbiAgICBpbnZhbGlkOiAnI2NjMDAwMCcsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRpbWVuc2lvbiA9IHtcblxufVxuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICBjb2xvcjogY29sb3IsXG4gIGRpbWVuc2lvbjogZGltZW5zaW9uLFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0eWxlcy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=