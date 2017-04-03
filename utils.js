(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["moment"], factory);
	else if(typeof exports === 'object')
		exports["bogu"] = factory(require("moment"));
	else
		root["bogu"] = factory(root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLines", function() { return filterLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validity", function() { return validity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentColor", function() { return segmentColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentName", function() { return segmentName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentName2Key", function() { return segmentName2Key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatLineStats", function() { return formatLineStats; });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var filterLines = function filterLines(lineData, selectedSegment, daysValid) {
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

var validity = function validity(daysForward) {
  if (daysForward > 127) {
    return 'VALID';
  } else if (daysForward >= 120) {
    return 'SOON_INVALID';
  } else if (daysForward == 0) {
    return 'INVALID';
  }
  return 'EXPIRED';
};

var segmentColor = function segmentColor(daysValid) {
  var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var green = 120 + daysValid + modifier;
  return '#FF' + green.toString(16) + '00';
};

var segmentName = function segmentName(segment, numDays) {
  if (segmentMap.hasOwnProperty(segment) && segment !== 'dynamic') {
    return segmentMap[segment];
  }

  return segmentMap['dynamic'].replace('DAYS', numDays);
};

var segmentName2Key = function segmentName2Key(segmentName) {
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

var validPeriod = function validPeriod(endDate, from, to) {
  return __WEBPACK_IMPORTED_MODULE_0_moment___default()(endDate).add(1, 'days').isBetween(from, to, 'days', '[]') ? to : endDate;
};

var validDays = function validDays(lines) {
  return lines.map(function (line) {
    return { lineNumber: line.lineNumber, days: line.daysValid };
  });
};

var getDaysRange = function getDaysRange(startDate) {
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return __WEBPACK_IMPORTED_MODULE_0_moment___default.a.isMoment(end) ? end.diff(startDate, 'days') : end;
};

var minDays = function minDays(lineNumber2Days) {
  var days = Math.min.apply(Math, _toConsumableArray(lineNumber2Days.map(function (line) {
    return line.days;
  })));
  return {
    days: days,
    validity: validity(days)
  };
};

var sortValidity = function sortValidity(validity) {
  return validity.sort(function (a, b) {
    return a['numDaysAtLeastValid'] < b['numDaysAtLeastValid'] ? -1 : 1;
  });
};

var formatLineStats = function formatLineStats(lineStats) {

  try {
    var _ref;

    var defaultObject = { lineNumbers: [] };

    var formattedLines = {
      invalid: lineStats.validityCategories.filter(function (category) {
        return category.numDaysAtLeastValid < 120;
      })[0] || defaultObject,
      valid: lineStats.validityCategories.filter(function (category) {
        return category.numDaysAtLeastValid >= 127;
      })[0] || defaultObject,
      soonInvalid: lineStats.validityCategories.filter(function (category) {
        return category.numDaysAtLeastValid >= 120 && category.numDaysAtLeastValid < 127;
      })[0] || defaultObject,
      validity: sortValidity(lineStats.validityCategories),
      all: defaultObject
    };

    formattedLines.all.lineNumbers = (_ref = []).concat.apply(_ref, _toConsumableArray(formattedLines.validity.map(function (lines) {
      return lines.lineNumbers;
    })));

    var linesMap = {};

    var startDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(lineStats.startDate, 'YYYY-MM-DD');
    var endDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(startDate).add(lineStats.days, 'days');

    formattedLines.startDate = startDate.format('YYYY-MM-DD');
    formattedLines.days = lineStats.days;
    formattedLines.endDate = endDate.format('YYYY-MM-DD');

    lineStats.publicLines.forEach(function (publicLine) {

      publicLine.effectivePeriods.forEach(function (effectivePeriod) {

        var fromDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(effectivePeriod.from, 'YYYY-MM-DD');
        var fromDiff = startDate.diff(fromDate, 'days', true);

        if (fromDiff > 0) {
          // now is after start date of effective period
          effectivePeriod.timelineStartPosition = 0;
        } else {
          effectivePeriod.timelineStartPosition = Math.abs(fromDiff) / formattedLines.days * 100;
        }

        var timelineEndPosition = 100;

        var toDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(effectivePeriod.to, 'YYYY-MM-DD');
        var toDiff = __WEBPACK_IMPORTED_MODULE_0_moment___default()(formattedLines.endDate, 'YYYY-MM-DD').diff(__WEBPACK_IMPORTED_MODULE_0_moment___default()(toDate).add(1, 'days'), 'days', true);

        if (toDiff > 0) {
          timelineEndPosition = 100 - toDiff / (formattedLines.days / 100);
        }

        effectivePeriod.timelineEndPosition = timelineEndPosition;

        var daysForward = effectivePeriod.timelineEndPosition / 100 * formattedLines.days;
        effectivePeriod.validationLevel = validity(daysForward);

        publicLine.daysValid = validPeriod(publicLine.daysValid || startDate, fromDate, toDate);
      });
      publicLine.daysValid = getDaysRange(startDate, publicLine.daysValid);

      publicLine.lines.forEach(function (line) {

        line.timetables.forEach(function (timetable) {
          timetable.periods.forEach(function (period) {

            var fromDiff = startDate.diff(__WEBPACK_IMPORTED_MODULE_0_moment___default()(period.from, 'YYYY-MM-DD'), 'days', true);

            if (fromDiff < 0) {
              period.timelineStartPosition = Math.abs(fromDiff) / formattedLines.days * 100;
            } else {
              period.timelineStartPosition = 0;
            }

            var timelineEndPosition = 100;

            var toDiff = __WEBPACK_IMPORTED_MODULE_0_moment___default()(formattedLines.endDate, 'YYYY-MM-DD').diff(__WEBPACK_IMPORTED_MODULE_0_moment___default()(period.to, 'YYYY-MM-DD').add(1, 'days'), 'days', true);

            if (toDiff > 0) {
              timelineEndPosition = 100 - toDiff / (formattedLines.days / 100);
            }

            period.timelineEndPosition = timelineEndPosition;
          });
        });
      });

      linesMap[publicLine.lineNumber] = publicLine;
    });

    formattedLines.linesMap = linesMap;
    formattedLines.validDaysOffset = 33;
    formattedLines.validFromDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(startDate).add(120, 'days').format('YYYY-MM-DD');
    formattedLines.daysValid = validDays(lineStats.publicLines);
    formattedLines.minDays = minDays(formattedLines.daysValid);

    return formattedLines;
  } catch (e) {
    console.error("error in getLineStats", e);
  }
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDgyYzdhYmVjNWViNWJmMTI5MzUzPzZkZmYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbImZpbHRlckxpbmVzIiwibGluZURhdGEiLCJzZWxlY3RlZFNlZ21lbnQiLCJkYXlzVmFsaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImxpbmVOdW1iZXJzIiwiaSIsInZhbGlkaXR5IiwiY2F0ZWdvcnkiLCJudW1EYXlzQXRMZWFzdFZhbGlkIiwiY29uc29sZSIsImxvZyIsImRheXNGb3J3YXJkIiwic2VnbWVudENvbG9yIiwibW9kaWZpZXIiLCJncmVlbiIsInRvU3RyaW5nIiwic2VnbWVudE5hbWUiLCJzZWdtZW50IiwibnVtRGF5cyIsInNlZ21lbnRNYXAiLCJyZXBsYWNlIiwic2VnbWVudE5hbWUyS2V5IiwidGV4dDJrZXkiLCJpZHhTdGFydCIsImluZGV4T2YiLCJpZHhFbmQiLCJwYXJzZUludCIsInN1YnN0cmluZyIsInZhbGlkUGVyaW9kIiwiZW5kRGF0ZSIsImZyb20iLCJ0byIsIm1vbWVudCIsImFkZCIsImlzQmV0d2VlbiIsInZhbGlkRGF5cyIsImxpbmVzIiwibWFwIiwibGluZU51bWJlciIsImxpbmUiLCJkYXlzIiwiZ2V0RGF5c1JhbmdlIiwic3RhcnREYXRlIiwiZW5kIiwiaXNNb21lbnQiLCJkaWZmIiwibWluRGF5cyIsImxpbmVOdW1iZXIyRGF5cyIsIk1hdGgiLCJtaW4iLCJzb3J0VmFsaWRpdHkiLCJzb3J0IiwiYSIsImIiLCJmb3JtYXRMaW5lU3RhdHMiLCJkZWZhdWx0T2JqZWN0IiwiZm9ybWF0dGVkTGluZXMiLCJpbnZhbGlkIiwibGluZVN0YXRzIiwidmFsaWRpdHlDYXRlZ29yaWVzIiwiZmlsdGVyIiwidmFsaWQiLCJzb29uSW52YWxpZCIsImFsbCIsImNvbmNhdCIsImxpbmVzTWFwIiwiZm9ybWF0IiwicHVibGljTGluZXMiLCJmb3JFYWNoIiwicHVibGljTGluZSIsImVmZmVjdGl2ZVBlcmlvZHMiLCJlZmZlY3RpdmVQZXJpb2QiLCJmcm9tRGF0ZSIsImZyb21EaWZmIiwidGltZWxpbmVTdGFydFBvc2l0aW9uIiwiYWJzIiwidGltZWxpbmVFbmRQb3NpdGlvbiIsInRvRGF0ZSIsInRvRGlmZiIsInZhbGlkYXRpb25MZXZlbCIsInRpbWV0YWJsZXMiLCJ0aW1ldGFibGUiLCJwZXJpb2RzIiwicGVyaW9kIiwidmFsaWREYXlzT2Zmc2V0IiwidmFsaWRGcm9tRGF0ZSIsImUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ2hFQSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVPLElBQU1BLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxRQUFELEVBQVdDLGVBQVgsRUFBNEJDLFNBQTVCLEVBQTBDO0FBQ25FLE1BQUlGLFNBQVNHLGNBQVQsQ0FBd0JGLGVBQXhCLENBQUosRUFBOEM7QUFDNUMsV0FB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QkQ7QUFvQkQsU0FyQkQ7QUFzQkQsT0F4QkQ7O0FBMEJBWCxlQUFTSSxXQUFXL0IsVUFBcEIsSUFBa0MrQixVQUFsQztBQUNELEtBM0REOztBQTZEQWIsbUJBQWVTLFFBQWYsR0FBMEJBLFFBQTFCO0FBQ0FULG1CQUFlNEIsZUFBZixHQUFpQyxFQUFqQztBQUNBNUIsbUJBQWU2QixhQUFmLEdBQStCLDhDQUFBckQsQ0FBT1UsU0FBUCxFQUFrQlQsR0FBbEIsQ0FBc0IsR0FBdEIsRUFBMkIsTUFBM0IsRUFBbUNpQyxNQUFuQyxDQUEwQyxZQUExQyxDQUEvQjtBQUNBVixtQkFBZXRELFNBQWYsR0FBMkJpQyxVQUFVdUIsVUFBVVMsV0FBcEIsQ0FBM0I7QUFDQVgsbUJBQWVWLE9BQWYsR0FBeUJBLFFBQVFVLGVBQWV0RCxTQUF2QixDQUF6Qjs7QUFFQSxXQUFPc0QsY0FBUDtBQUVELEdBL0ZELENBK0ZFLE9BQU84QixDQUFQLEVBQVU7QUFDVjdFLFlBQVE4RSxLQUFSLENBQWMsdUJBQWQsRUFBdUNELENBQXZDO0FBQ0Q7QUFDRixDQXBHTSxDIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibW9tZW50XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIm1vbWVudFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeShyZXF1aXJlKFwibW9tZW50XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJib2d1XCJdID0gZmFjdG9yeShyb290W1wibW9tZW50XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgyYzdhYmVjNWViNWJmMTI5MzUzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5leHBvcnQgY29uc3QgZmlsdGVyTGluZXMgPSAobGluZURhdGEsIHNlbGVjdGVkU2VnbWVudCwgZGF5c1ZhbGlkKSA9PiB7XG4gIGlmIChsaW5lRGF0YS5oYXNPd25Qcm9wZXJ0eShzZWxlY3RlZFNlZ21lbnQpKSB7XG4gICAgcmV0dXJuIGxpbmVEYXRhW3NlbGVjdGVkU2VnbWVudF0ubGluZU51bWJlcnNcbiAgfVxuXG4gIGZvciAobGV0IGkgaW4gbGluZURhdGEudmFsaWRpdHkpIHtcbiAgICBsZXQgY2F0ZWdvcnkgPSBsaW5lRGF0YS52YWxpZGl0eVtpXVxuICAgIGlmIChjYXRlZ29yeS5udW1EYXlzQXRMZWFzdFZhbGlkID09IGRheXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5LmxpbmVOdW1iZXJzXG4gICAgfVxuICB9XG5cbiAgLy8gZmFsbGJhY2sgdG8gYWxsXG4gIGNvbnNvbGUubG9nKFwiZXJyb3IsIHNob3dpbmcgYWxsIGRhdGFcIilcbiAgcmV0dXJuIGxpbmVEYXRhWydhbGwnXS5saW5lTnVtYmVyc1xufVxuXG5cbmV4cG9ydCBjb25zdCB2YWxpZGl0eSA9IChkYXlzRm9yd2FyZCkgPT4ge1xuICBpZiAoZGF5c0ZvcndhcmQgPiAxMjcpIHtcbiAgICByZXR1cm4gJ1ZBTElEJ1xuICB9IGVsc2UgaWYgKGRheXNGb3J3YXJkID49IDEyMCkge1xuICAgIHJldHVybiAnU09PTl9JTlZBTElEJ1xuICB9IGVsc2UgaWYgKGRheXNGb3J3YXJkID09IDApIHtcbiAgICByZXR1cm4gJ0lOVkFMSUQnXG4gIH1cbiAgcmV0dXJuICdFWFBJUkVEJ1xufVxuXG5leHBvcnQgY29uc3Qgc2VnbWVudENvbG9yID0gKGRheXNWYWxpZCwgbW9kaWZpZXIgPSAwKSA9PiB7XG4gIGxldCBncmVlbiA9IDEyMCArIGRheXNWYWxpZCArIG1vZGlmaWVyXG4gIHJldHVybiAnI0ZGJyArIGdyZWVuLnRvU3RyaW5nKDE2KSArJzAwJ1xufVxuXG5leHBvcnQgY29uc3Qgc2VnbWVudE5hbWUgPSAoc2VnbWVudCwgbnVtRGF5cykgPT4ge1xuICBpZiAoc2VnbWVudE1hcC5oYXNPd25Qcm9wZXJ0eShzZWdtZW50KSAmJiBzZWdtZW50ICE9PSAnZHluYW1pYycpIHtcbiAgICByZXR1cm4gc2VnbWVudE1hcFtzZWdtZW50XVxuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRNYXBbJ2R5bmFtaWMnXS5yZXBsYWNlKCdEQVlTJywgbnVtRGF5cylcbn1cblxuZXhwb3J0IGNvbnN0IHNlZ21lbnROYW1lMktleSA9IChzZWdtZW50TmFtZSkgPT4ge1xuICBpZiAoIXRleHQya2V5Lmhhc093blByb3BlcnR5KHNlZ21lbnROYW1lKSkge1xuICAgIGxldCBpZHhTdGFydCA9IHNlZ21lbnROYW1lLmluZGV4T2YoJy0gJykgKyAyXG4gICAgbGV0IGlkeEVuZCA9IHNlZ21lbnROYW1lLmluZGV4T2YoJyBkYWdlcicpXG5cbiAgICByZXR1cm4ge3NlZ21lbnQ6ICdkeW5hbWljJywgZGF5c1ZhbGlkOiBwYXJzZUludChzZWdtZW50TmFtZS5zdWJzdHJpbmcoaWR4U3RhcnQsIGlkeEVuZCkpfVxuICB9XG4gIHJldHVybiB7c2VnbWVudDogdGV4dDJrZXlbc2VnbWVudE5hbWVdLCBkYXlzVmFsaWQ6IDB9XG59XG5cbmNvbnN0IHNlZ21lbnRNYXAgPSB7XG4gICd2YWxpZCcgOiAnTGluamVyIGkgZ3lsZGlnIHBlcmlvZGUnLFxuICAnc29vbkludmFsaWQnIDogJ0xpbmplciBtZWQgZ3lsZGlnaGV0c3BlcmlvZGUgc29tIHNuYXJ0IHV0Z8OlcicsXG4gICdpbnZhbGlkJyA6ICdMaW5qZXIgbWVkIG1hbmdsZW5kZSBneWxkaWdoZXRzcGVyaW9kZScsXG4gICdhbGwnIDogJ0FsbGUgbGluamVyJyxcbiAgJ2R5bmFtaWMnOiAnVXRnw6V0dGUgbGluamVyIC0gREFZUyBkYWdlciBpZ2plbidcbn1cblxuY29uc3QgdGV4dDJrZXkgPSB7XG4gICdBbGxlIGxpbmplcicgOiAnYWxsJyxcbiAgJ0xpbmplciBpIGd5bGRpZyBwZXJpb2RlJyA6ICd2YWxpZCcsXG4gICdMaW5qZXIgbWVkIGd5bGRpZ2hldHNwZXJpb2RlIHNvbSBzbmFydCB1dGfDpXInIDogJ3Nvb25JbnZhbGlkJyxcbiAgJ0xpbmplciBtZWQgbWFuZ2xlbmRlIGd5bGRpZ2hldHNwZXJpb2RlJyA6ICdpbnZhbGlkJyxcbn1cblxuLypcbmNvbnN0IHNlZ21lbnRNYXAgPSB7XG4gICd2YWxpZCcgOiAnVmFsaWQgbGluZXMnLFxuICAnc29vbkludmFsaWQnIDogJ1ZhbGlkIGxpbmVzIHRoYXQgYXJlIHNvb24gZXhwaXJpbmcnLFxuICAnaW52YWxpZCcgOiAnSW52YWxpZCBsaW5lcycsXG4gICdhbGwnIDogJ0FsbCBsaW5lcycsXG4gICdkeW5hbWljJzogJ0V4cGlyZWQgbGluZXMgLSBEQVlTIGRheXMgbGVmdCdcbn1cblxuY29uc3QgdGV4dDJrZXkgPSB7XG4gICdBbGwgbGluZXMnIDogJ2FsbCcsXG4gICdWYWxpZCBsaW5lcycgOiAndmFsaWQnLFxuICAnVmFsaWQgbGluZXMgdGhhdCBhcmUgc29vbiBleHBpcmluZycgOiAnc29vbkludmFsaWQnLFxuICAnSW52YWxpZCBsaW5lcycgOiAnaW52YWxpZCcsXG59XG4qL1xuXG5jb25zdCB2YWxpZFBlcmlvZCA9IChlbmREYXRlLCBmcm9tLCB0bykgPT4gKG1vbWVudChlbmREYXRlKS5hZGQoMSwgJ2RheXMnKS5pc0JldHdlZW4oZnJvbSwgdG8sICdkYXlzJywgJ1tdJykpID8gdG8gOiBlbmREYXRlXG5cbmNvbnN0IHZhbGlkRGF5cyA9IChsaW5lcykgPT4gbGluZXMubWFwKGxpbmUgPT4geyByZXR1cm4ge2xpbmVOdW1iZXI6IGxpbmUubGluZU51bWJlciwgZGF5czogbGluZS5kYXlzVmFsaWR9IH0pXG5cbmNvbnN0IGdldERheXNSYW5nZSA9IChzdGFydERhdGUsIGVuZCA9IDApID0+IG1vbWVudC5pc01vbWVudChlbmQpID8gZW5kLmRpZmYoc3RhcnREYXRlLCAnZGF5cycpIDogZW5kXG5cbmNvbnN0IG1pbkRheXMgPSAobGluZU51bWJlcjJEYXlzKSA9PiB7XG4gIGxldCBkYXlzID0gTWF0aC5taW4oLi4ubGluZU51bWJlcjJEYXlzLm1hcCggbGluZSA9PiBsaW5lLmRheXMpKVxuICByZXR1cm4ge1xuICAgIGRheXM6IGRheXMsXG4gICAgdmFsaWRpdHk6IHZhbGlkaXR5KGRheXMpXG4gIH1cbn1cblxuY29uc3Qgc29ydFZhbGlkaXR5ID0gdmFsaWRpdHkgPT4gdmFsaWRpdHkuc29ydCggKGEsIGIpID0+IGFbJ251bURheXNBdExlYXN0VmFsaWQnXSA8IGJbJ251bURheXNBdExlYXN0VmFsaWQnXSA/IC0xIDogMSlcblxuZXhwb3J0IGNvbnN0IGZvcm1hdExpbmVTdGF0cyA9IGxpbmVTdGF0cyA9PiB7XG5cbiAgdHJ5IHtcblxuICAgIGNvbnN0IGRlZmF1bHRPYmplY3QgPSB7wqBsaW5lTnVtYmVyczogW10gfVxuXG4gICAgbGV0IGZvcm1hdHRlZExpbmVzID0ge1xuICAgICAgaW52YWxpZDogbGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllc1xuICAgICAgICAuZmlsdGVyKCAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPCAxMjApWzBdIHx8IGRlZmF1bHRPYmplY3QsXG4gICAgICB2YWxpZDogbGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllc1xuICAgICAgICAuZmlsdGVyKCAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPj0gMTI3KVswXSB8fCBkZWZhdWx0T2JqZWN0LFxuICAgICAgc29vbkludmFsaWQ6IGxpbmVTdGF0cy52YWxpZGl0eUNhdGVnb3JpZXNcbiAgICAgICAgLmZpbHRlciggKGNhdGVnb3J5KSA9PiAoY2F0ZWdvcnkubnVtRGF5c0F0TGVhc3RWYWxpZCA+PSAxMjAgJiYgY2F0ZWdvcnkubnVtRGF5c0F0TGVhc3RWYWxpZCA8IDEyNykpWzBdIHx8IGRlZmF1bHRPYmplY3QsXG4gICAgICB2YWxpZGl0eTogc29ydFZhbGlkaXR5KGxpbmVTdGF0cy52YWxpZGl0eUNhdGVnb3JpZXMpLFxuICAgICAgYWxsOiBkZWZhdWx0T2JqZWN0XG4gICAgfVxuXG4gICAgZm9ybWF0dGVkTGluZXMuYWxsLmxpbmVOdW1iZXJzID0gW10uY29uY2F0KC4uLiBmb3JtYXR0ZWRMaW5lcy52YWxpZGl0eS5tYXAobGluZXMgPT4gbGluZXMubGluZU51bWJlcnMgKSApXG5cbiAgICBsZXQgbGluZXNNYXAgPSB7fVxuXG4gICAgbGV0IHN0YXJ0RGF0ZSA9IG1vbWVudChsaW5lU3RhdHMuc3RhcnREYXRlLCAnWVlZWS1NTS1ERCcpXG4gICAgbGV0IGVuZERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5hZGQobGluZVN0YXRzLmRheXMsICdkYXlzJylcblxuICAgIGZvcm1hdHRlZExpbmVzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgIGZvcm1hdHRlZExpbmVzLmRheXMgPSBsaW5lU3RhdHMuZGF5c1xuICAgIGZvcm1hdHRlZExpbmVzLmVuZERhdGUgPSBlbmREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG5cbiAgICBsaW5lU3RhdHMucHVibGljTGluZXMuZm9yRWFjaCAoIHB1YmxpY0xpbmUgPT4ge1xuXG4gICAgICBwdWJsaWNMaW5lLmVmZmVjdGl2ZVBlcmlvZHMuZm9yRWFjaCggKGVmZmVjdGl2ZVBlcmlvZCkgPT4ge1xuXG4gICAgICAgIGxldCBmcm9tRGF0ZSA9IG1vbWVudChlZmZlY3RpdmVQZXJpb2QuZnJvbSwgJ1lZWVktTU0tREQnKVxuICAgICAgICBsZXQgZnJvbURpZmYgPSBzdGFydERhdGUuZGlmZihmcm9tRGF0ZSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgIGlmIChmcm9tRGlmZiA+IDApIHtcbiAgICAgICAgICAvLyBub3cgaXMgYWZ0ZXIgc3RhcnQgZGF0ZSBvZiBlZmZlY3RpdmUgcGVyaW9kXG4gICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID0gKCBNYXRoLmFicyhmcm9tRGlmZikgLyBmb3JtYXR0ZWRMaW5lcy5kYXlzICkgKiAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwXG5cbiAgICAgICAgbGV0IHRvRGF0ZSA9IG1vbWVudChlZmZlY3RpdmVQZXJpb2QudG8sICdZWVlZLU1NLUREJylcbiAgICAgICAgbGV0IHRvRGlmZiA9IG1vbWVudChmb3JtYXR0ZWRMaW5lcy5lbmREYXRlLCAnWVlZWS1NTS1ERCcpLmRpZmYobW9tZW50KHRvRGF0ZSkuYWRkKDEsICdkYXlzJyksICdkYXlzJywgdHJ1ZSlcblxuICAgICAgICBpZiAodG9EaWZmID4gMCkge1xuICAgICAgICAgIHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDAgLSAodG9EaWZmIC8gKGZvcm1hdHRlZExpbmVzLmRheXMvMTAwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uID0gdGltZWxpbmVFbmRQb3NpdGlvblxuXG4gICAgICAgIGxldCBkYXlzRm9yd2FyZCA9IChlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAvIDEwMCkgKiBmb3JtYXR0ZWRMaW5lcy5kYXlzXG4gICAgICAgIGVmZmVjdGl2ZVBlcmlvZC52YWxpZGF0aW9uTGV2ZWwgPSB2YWxpZGl0eShkYXlzRm9yd2FyZClcblxuICAgICAgICBwdWJsaWNMaW5lLmRheXNWYWxpZCA9IHZhbGlkUGVyaW9kKHB1YmxpY0xpbmUuZGF5c1ZhbGlkIHx8IHN0YXJ0RGF0ZSwgZnJvbURhdGUsIHRvRGF0ZSlcbiAgICAgIH0pXG4gICAgICBwdWJsaWNMaW5lLmRheXNWYWxpZCA9IGdldERheXNSYW5nZShzdGFydERhdGUsIHB1YmxpY0xpbmUuZGF5c1ZhbGlkKVxuXG4gICAgICBwdWJsaWNMaW5lLmxpbmVzLmZvckVhY2goIChsaW5lKSA9PiB7XG5cbiAgICAgICAgbGluZS50aW1ldGFibGVzLmZvckVhY2goICh0aW1ldGFibGUpID0+IHtcbiAgICAgICAgICB0aW1ldGFibGUucGVyaW9kcy5mb3JFYWNoKCAocGVyaW9kKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBmcm9tRGlmZiA9IHN0YXJ0RGF0ZS5kaWZmKG1vbWVudChwZXJpb2QuZnJvbSwgJ1lZWVktTU0tREQnKSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgICAgICBpZiAoZnJvbURpZmYgPCAwKSB7XG4gICAgICAgICAgICAgIHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gPSAoIE1hdGguYWJzKGZyb21EaWZmKSAvIGZvcm1hdHRlZExpbmVzLmRheXMgKSAqIDEwMFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDBcblxuICAgICAgICAgICAgbGV0IHRvRGlmZiA9IG1vbWVudChmb3JtYXR0ZWRMaW5lcy5lbmREYXRlLCAnWVlZWS1NTS1ERCcpLmRpZmYobW9tZW50KHBlcmlvZC50bywgJ1lZWVktTU0tREQnKS5hZGQoMSwgJ2RheXMnKSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgICAgICBpZiAodG9EaWZmID4gMCkge1xuICAgICAgICAgICAgICB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwIC0gKHRvRGlmZiAvIChmb3JtYXR0ZWRMaW5lcy5kYXlzLzEwMCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uID0gdGltZWxpbmVFbmRQb3NpdGlvblxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBsaW5lc01hcFtwdWJsaWNMaW5lLmxpbmVOdW1iZXJdID0gcHVibGljTGluZVxuICAgIH0pXG5cbiAgICBmb3JtYXR0ZWRMaW5lcy5saW5lc01hcCA9IGxpbmVzTWFwXG4gICAgZm9ybWF0dGVkTGluZXMudmFsaWREYXlzT2Zmc2V0ID0gMzNcbiAgICBmb3JtYXR0ZWRMaW5lcy52YWxpZEZyb21EYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuYWRkKDEyMCwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgIGZvcm1hdHRlZExpbmVzLmRheXNWYWxpZCA9IHZhbGlkRGF5cyhsaW5lU3RhdHMucHVibGljTGluZXMpXG4gICAgZm9ybWF0dGVkTGluZXMubWluRGF5cyA9IG1pbkRheXMoZm9ybWF0dGVkTGluZXMuZGF5c1ZhbGlkKVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZExpbmVzXG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciBpbiBnZXRMaW5lU3RhdHNcIiwgZSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==