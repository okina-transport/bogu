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
/******/ 	return __webpack_require__(__webpack_require__.s = 96);
/******/ })
/************************************************************************/
/******/ ({

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var filterLines = exports.filterLines = function filterLines(lineData, selectedSegment, daysValid) {
  if (lineData.hasOwnProperty(selectedSegment)) {
    return lineData[selectedSegment].lineNumbers;
  }

  for (var i in lineData.validity) {
    var category = lineData.validity[i];
    if (category.numDaysAtLeastValid == daysValid) {
      return category.lineNumbers;
    }
  }

  // fallback to all
  console.log("error, showing all data");
  return lineData['all'].lineNumbers;
};

var validity = exports.validity = function validity(daysForward) {
  if (daysForward > 127) {
    return 'VALID';
  } else if (daysForward >= 120) {
    return 'SOON_INVALID';
  } else if (daysForward == 0) {
    return 'INVALID';
  }
  return 'EXPIRED';
};

var segmentColor = exports.segmentColor = function segmentColor(daysValid) {
  var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var green = 120 + daysValid + modifier;
  return '#FF' + green.toString(16) + '00';
};

var segmentName = exports.segmentName = function segmentName(segment, numDays) {
  if (segmentMap.hasOwnProperty(segment) && segment !== 'dynamic') {
    return segmentMap[segment];
  }

  return segmentMap['dynamic'].replace('DAYS', numDays);
};

var segmentName2Key = exports.segmentName2Key = function segmentName2Key(segmentName) {
  if (!text2key.hasOwnProperty(segmentName)) {
    var idxStart = segmentName.indexOf('- ') + 2;
    var idxEnd = segmentName.indexOf(' dager');

    return { segment: 'dynamic', daysValid: parseInt(segmentName.substring(idxStart, idxEnd)) };
  }
  return { segment: text2key[segmentName], daysValid: 0 };
};

var segmentMap = {
  'valid': 'Linjer i gyldig periode',
  'soonInvalid': 'Linjer med gyldighetsperiode som snart utgår',
  'invalid': 'Linjer med manglende gyldighetsperiode',
  'all': 'Alle linjer',
  'dynamic': 'Utgåtte linjer - DAYS dager igjen'
};

var text2key = {
  'Alle linjer': 'all',
  'Linjer i gyldig periode': 'valid',
  'Linjer med gyldighetsperiode som snart utgår': 'soonInvalid',
  'Linjer med manglende gyldighetsperiode': 'invalid'
};

/*
const segmentMap = {
  'valid' : 'Valid lines',
  'soonInvalid' : 'Valid lines that are soon expiring',
  'invalid' : 'Invalid lines',
  'all' : 'All lines',
  'dynamic': 'Expired lines - DAYS days left'
}

const text2key = {
  'All lines' : 'all',
  'Valid lines' : 'valid',
  'Valid lines that are soon expiring' : 'soonInvalid',
  'Invalid lines' : 'invalid',
}
*/

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDZhODMwOWFhMmIwNDY2MzRjNDFiPzczNTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbImZpbHRlckxpbmVzIiwibGluZURhdGEiLCJzZWxlY3RlZFNlZ21lbnQiLCJkYXlzVmFsaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImxpbmVOdW1iZXJzIiwiaSIsInZhbGlkaXR5IiwiY2F0ZWdvcnkiLCJudW1EYXlzQXRMZWFzdFZhbGlkIiwiY29uc29sZSIsImxvZyIsImRheXNGb3J3YXJkIiwic2VnbWVudENvbG9yIiwibW9kaWZpZXIiLCJncmVlbiIsInRvU3RyaW5nIiwic2VnbWVudE5hbWUiLCJzZWdtZW50IiwibnVtRGF5cyIsInNlZ21lbnRNYXAiLCJyZXBsYWNlIiwic2VnbWVudE5hbWUyS2V5IiwidGV4dDJrZXkiLCJpZHhTdGFydCIsImluZGV4T2YiLCJpZHhFbmQiLCJwYXJzZUludCIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9ETyxJQUFNQSxvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBV0MsZUFBWCxFQUE0QkMsU0FBNUIsRUFBMEM7QUFDbkUsTUFBSUYsU0FBU0csY0FBVCxDQUF3QkYsZUFBeEIsQ0FBSixFQUE4QztBQUM1QyxXQUFPRCxTQUFTQyxlQUFULEVBQTBCRyxXQUFqQztBQUNEOztBQUVELE9BQUssSUFBSUMsQ0FBVCxJQUFjTCxTQUFTTSxRQUF2QixFQUFpQztBQUMvQixRQUFJQyxXQUFXUCxTQUFTTSxRQUFULENBQWtCRCxDQUFsQixDQUFmO0FBQ0EsUUFBSUUsU0FBU0MsbUJBQVQsSUFBZ0NOLFNBQXBDLEVBQStDO0FBQzdDLGFBQU9LLFNBQVNILFdBQWhCO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBSyxVQUFRQyxHQUFSLENBQVkseUJBQVo7QUFDQSxTQUFPVixTQUFTLEtBQVQsRUFBZ0JJLFdBQXZCO0FBQ0QsQ0FmTTs7QUFrQkEsSUFBTUUsOEJBQVcsU0FBWEEsUUFBVyxDQUFDSyxXQUFELEVBQWlCO0FBQ3ZDLE1BQUlBLGNBQWMsR0FBbEIsRUFBdUI7QUFDckIsV0FBTyxPQUFQO0FBQ0QsR0FGRCxNQUVPLElBQUlBLGVBQWUsR0FBbkIsRUFBd0I7QUFDN0IsV0FBTyxjQUFQO0FBQ0QsR0FGTSxNQUVBLElBQUlBLGVBQWUsQ0FBbkIsRUFBc0I7QUFDM0IsV0FBTyxTQUFQO0FBQ0Q7QUFDRCxTQUFPLFNBQVA7QUFDRCxDQVRNOztBQVdBLElBQU1DLHNDQUFlLFNBQWZBLFlBQWUsQ0FBQ1YsU0FBRCxFQUE2QjtBQUFBLE1BQWpCVyxRQUFpQix1RUFBTixDQUFNOztBQUN2RCxNQUFJQyxRQUFRLE1BQU1aLFNBQU4sR0FBa0JXLFFBQTlCO0FBQ0EsU0FBTyxRQUFRQyxNQUFNQyxRQUFOLENBQWUsRUFBZixDQUFSLEdBQTRCLElBQW5DO0FBQ0QsQ0FITTs7QUFLQSxJQUFNQyxvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBVUMsT0FBVixFQUFzQjtBQUMvQyxNQUFJQyxXQUFXaEIsY0FBWCxDQUEwQmMsT0FBMUIsS0FBc0NBLFlBQVksU0FBdEQsRUFBaUU7QUFDL0QsV0FBT0UsV0FBV0YsT0FBWCxDQUFQO0FBQ0Q7O0FBRUQsU0FBT0UsV0FBVyxTQUFYLEVBQXNCQyxPQUF0QixDQUE4QixNQUE5QixFQUFzQ0YsT0FBdEMsQ0FBUDtBQUNELENBTk07O0FBUUEsSUFBTUcsNENBQWtCLFNBQWxCQSxlQUFrQixDQUFDTCxXQUFELEVBQWlCO0FBQzlDLE1BQUksQ0FBQ00sU0FBU25CLGNBQVQsQ0FBd0JhLFdBQXhCLENBQUwsRUFBMkM7QUFDekMsUUFBSU8sV0FBV1AsWUFBWVEsT0FBWixDQUFvQixJQUFwQixJQUE0QixDQUEzQztBQUNBLFFBQUlDLFNBQVNULFlBQVlRLE9BQVosQ0FBb0IsUUFBcEIsQ0FBYjs7QUFFQSxXQUFPLEVBQUNQLFNBQVMsU0FBVixFQUFxQmYsV0FBV3dCLFNBQVNWLFlBQVlXLFNBQVosQ0FBc0JKLFFBQXRCLEVBQWdDRSxNQUFoQyxDQUFULENBQWhDLEVBQVA7QUFDRDtBQUNELFNBQU8sRUFBQ1IsU0FBU0ssU0FBU04sV0FBVCxDQUFWLEVBQWlDZCxXQUFXLENBQTVDLEVBQVA7QUFDRCxDQVJNOztBQVVQLElBQU1pQixhQUFhO0FBQ2pCLFdBQVUseUJBRE87QUFFakIsaUJBQWdCLDhDQUZDO0FBR2pCLGFBQVksd0NBSEs7QUFJakIsU0FBUSxhQUpTO0FBS2pCLGFBQVc7QUFMTSxDQUFuQjs7QUFRQSxJQUFNRyxXQUFXO0FBQ2YsaUJBQWdCLEtBREQ7QUFFZiw2QkFBNEIsT0FGYjtBQUdmLGtEQUFpRCxhQUhsQztBQUlmLDRDQUEyQztBQUo1QixDQUFqQjs7QUFPQSIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJvZ3VcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYm9ndVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA5Nik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNmE4MzA5YWEyYjA0NjYzNGM0MWIiLCJcbmV4cG9ydCBjb25zdCBmaWx0ZXJMaW5lcyA9IChsaW5lRGF0YSwgc2VsZWN0ZWRTZWdtZW50LCBkYXlzVmFsaWQpID0+IHtcbiAgaWYgKGxpbmVEYXRhLmhhc093blByb3BlcnR5KHNlbGVjdGVkU2VnbWVudCkpIHtcbiAgICByZXR1cm4gbGluZURhdGFbc2VsZWN0ZWRTZWdtZW50XS5saW5lTnVtYmVyc1xuICB9XG5cbiAgZm9yIChsZXQgaSBpbiBsaW5lRGF0YS52YWxpZGl0eSkge1xuICAgIGxldCBjYXRlZ29yeSA9IGxpbmVEYXRhLnZhbGlkaXR5W2ldXG4gICAgaWYgKGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPT0gZGF5c1ZhbGlkKSB7XG4gICAgICByZXR1cm4gY2F0ZWdvcnkubGluZU51bWJlcnNcbiAgICB9XG4gIH1cblxuICAvLyBmYWxsYmFjayB0byBhbGxcbiAgY29uc29sZS5sb2coXCJlcnJvciwgc2hvd2luZyBhbGwgZGF0YVwiKVxuICByZXR1cm4gbGluZURhdGFbJ2FsbCddLmxpbmVOdW1iZXJzXG59XG5cblxuZXhwb3J0IGNvbnN0IHZhbGlkaXR5ID0gKGRheXNGb3J3YXJkKSA9PiB7XG4gIGlmIChkYXlzRm9yd2FyZCA+IDEyNykge1xuICAgIHJldHVybiAnVkFMSUQnXG4gIH0gZWxzZSBpZiAoZGF5c0ZvcndhcmQgPj0gMTIwKSB7XG4gICAgcmV0dXJuICdTT09OX0lOVkFMSUQnXG4gIH0gZWxzZSBpZiAoZGF5c0ZvcndhcmQgPT0gMCkge1xuICAgIHJldHVybiAnSU5WQUxJRCdcbiAgfVxuICByZXR1cm4gJ0VYUElSRUQnXG59XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50Q29sb3IgPSAoZGF5c1ZhbGlkLCBtb2RpZmllciA9IDApID0+IHtcbiAgbGV0IGdyZWVuID0gMTIwICsgZGF5c1ZhbGlkICsgbW9kaWZpZXJcbiAgcmV0dXJuICcjRkYnICsgZ3JlZW4udG9TdHJpbmcoMTYpICsnMDAnXG59XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50TmFtZSA9IChzZWdtZW50LCBudW1EYXlzKSA9PiB7XG4gIGlmIChzZWdtZW50TWFwLmhhc093blByb3BlcnR5KHNlZ21lbnQpICYmIHNlZ21lbnQgIT09ICdkeW5hbWljJykge1xuICAgIHJldHVybiBzZWdtZW50TWFwW3NlZ21lbnRdXG4gIH1cblxuICByZXR1cm4gc2VnbWVudE1hcFsnZHluYW1pYyddLnJlcGxhY2UoJ0RBWVMnLCBudW1EYXlzKVxufVxuXG5leHBvcnQgY29uc3Qgc2VnbWVudE5hbWUyS2V5ID0gKHNlZ21lbnROYW1lKSA9PiB7XG4gIGlmICghdGV4dDJrZXkuaGFzT3duUHJvcGVydHkoc2VnbWVudE5hbWUpKSB7XG4gICAgbGV0IGlkeFN0YXJ0ID0gc2VnbWVudE5hbWUuaW5kZXhPZignLSAnKSArIDJcbiAgICBsZXQgaWR4RW5kID0gc2VnbWVudE5hbWUuaW5kZXhPZignIGRhZ2VyJylcblxuICAgIHJldHVybiB7c2VnbWVudDogJ2R5bmFtaWMnLCBkYXlzVmFsaWQ6IHBhcnNlSW50KHNlZ21lbnROYW1lLnN1YnN0cmluZyhpZHhTdGFydCwgaWR4RW5kKSl9XG4gIH1cbiAgcmV0dXJuIHtzZWdtZW50OiB0ZXh0MmtleVtzZWdtZW50TmFtZV0sIGRheXNWYWxpZDogMH1cbn1cblxuY29uc3Qgc2VnbWVudE1hcCA9IHtcbiAgJ3ZhbGlkJyA6ICdMaW5qZXIgaSBneWxkaWcgcGVyaW9kZScsXG4gICdzb29uSW52YWxpZCcgOiAnTGluamVyIG1lZCBneWxkaWdoZXRzcGVyaW9kZSBzb20gc25hcnQgdXRnw6VyJyxcbiAgJ2ludmFsaWQnIDogJ0xpbmplciBtZWQgbWFuZ2xlbmRlIGd5bGRpZ2hldHNwZXJpb2RlJyxcbiAgJ2FsbCcgOiAnQWxsZSBsaW5qZXInLFxuICAnZHluYW1pYyc6ICdVdGfDpXR0ZSBsaW5qZXIgLSBEQVlTIGRhZ2VyIGlnamVuJ1xufVxuXG5jb25zdCB0ZXh0MmtleSA9IHtcbiAgJ0FsbGUgbGluamVyJyA6ICdhbGwnLFxuICAnTGluamVyIGkgZ3lsZGlnIHBlcmlvZGUnIDogJ3ZhbGlkJyxcbiAgJ0xpbmplciBtZWQgZ3lsZGlnaGV0c3BlcmlvZGUgc29tIHNuYXJ0IHV0Z8OlcicgOiAnc29vbkludmFsaWQnLFxuICAnTGluamVyIG1lZCBtYW5nbGVuZGUgZ3lsZGlnaGV0c3BlcmlvZGUnIDogJ2ludmFsaWQnLFxufVxuXG4vKlxuY29uc3Qgc2VnbWVudE1hcCA9IHtcbiAgJ3ZhbGlkJyA6ICdWYWxpZCBsaW5lcycsXG4gICdzb29uSW52YWxpZCcgOiAnVmFsaWQgbGluZXMgdGhhdCBhcmUgc29vbiBleHBpcmluZycsXG4gICdpbnZhbGlkJyA6ICdJbnZhbGlkIGxpbmVzJyxcbiAgJ2FsbCcgOiAnQWxsIGxpbmVzJyxcbiAgJ2R5bmFtaWMnOiAnRXhwaXJlZCBsaW5lcyAtIERBWVMgZGF5cyBsZWZ0J1xufVxuXG5jb25zdCB0ZXh0MmtleSA9IHtcbiAgJ0FsbCBsaW5lcycgOiAnYWxsJyxcbiAgJ1ZhbGlkIGxpbmVzJyA6ICd2YWxpZCcsXG4gICdWYWxpZCBsaW5lcyB0aGF0IGFyZSBzb29uIGV4cGlyaW5nJyA6ICdzb29uSW52YWxpZCcsXG4gICdJbnZhbGlkIGxpbmVzJyA6ICdpbnZhbGlkJyxcbn1cbiovXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==