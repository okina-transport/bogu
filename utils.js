(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "moment"], factory);
	else if(typeof exports === 'object')
		exports["bogu"] = factory(require("react"), require("moment"));
	else
		root["bogu"] = factory(root["react"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLines", function() { return filterLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortMethod", function() { return sortMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortLines", function() { return sortLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortIcon", function() { return sortIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validity", function() { return validity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentColor", function() { return segmentColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentName", function() { return segmentName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentName2Key", function() { return segmentName2Key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatLineStats", function() { return formatLineStats; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _this = this;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




var filterLines = function filterLines(lineData, selectedSegment, daysValid) {
  if (lineData.hasOwnProperty(selectedSegment)) {
    return lineData[selectedSegment].lineNumbers;
  }

  for (var i in lineData.validity) {
    var category = lineData.validity[i];
    if (category.numDaysAtLeastValid === daysValid) {
      return category.lineNumbers;
    }
  }

  // fallback to all
  console.log("error, showing all data");
  return lineData['all'].lineNumbers;
};

var sortMethod = function sortMethod() {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var ascending = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  return function (a, b) {
    if (a[index] === b[index]) {
      return 0;
    } else if (a[index] < b[index]) {
      return ascending ? -1 : 1;
    } else {
      return ascending ? 1 : -1;
    }
  };
};

var sortLines = function sortLines(sorting, lineData, selectedSegment, daysValid) {
  var order = filterLines(lineData, selectedSegment, daysValid);

  switch (sorting) {
    default:
      return order;
    case 1:
      return order.sort();
    case 2:
      return order.sort().reverse();
    case 3:
      var daysAsc = lineData.daysValid.slice().sort(_this.sortMethod('days', true));
      return daysAsc.filter(function (line) {
        return order.indexOf(line.lineNumber) !== -1;
      }).map(function (line) {
        return line.lineNumber;
      });
    case 4:
      var daysDesc = lineData.daysValid.slice().sort(_this.sortMethod('days', false));
      return daysDesc.filter(function (line) {
        return order.indexOf(line.lineNumber) !== -1;
      }).map(function (line) {
        return line.lineNumber;
      });
  }
};

var sortIcon = function sortIcon(sorting) {
  var def = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 18 24' },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: 'M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z' })
  );
  var down = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 18 24' },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
  );
  var up = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 18 24' },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' })
  );
  var az = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '18', viewBox: '0 0 24 18' },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'text',
      { x: '12', y: '12', textAnchor: 'middle' },
      'AZ'
    )
  );
  var za = __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '18', viewBox: '0 0 24 18' },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'text',
      { x: '12', y: '12', textAnchor: 'middle' },
      'ZA'
    )
  );
  switch (sorting) {
    default:
    case 0:
      return def;
    case 1:
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        az,
        down
      );
    case 2:
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        null,
        za,
        up
      );
    case 3:
      return down;
    case 4:
      return up;
  }
};

var validity = function validity(daysForward) {
  if (daysForward < 0 || daysForward === Infinity) {
    return 'INVALID';
  } else if (daysForward >= 120) {
    return 'VALID';
  }
  return 'EXPIRING';
};

var segmentColor = function segmentColor(daysValid) {
  var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var green = 120 + daysValid + modifier;
  return '#FF' + green.toString(16) + '00';
};

var segmentName = function segmentName(segment, numDays, locale) {
  if (segmentMap(locale).hasOwnProperty(segment) && segment !== 'dynamic') {
    return segmentMap(locale)[segment];
  }

  return segmentMap(locale)['dynamic'].replace('DAYS', numDays);
};

var segmentName2Key = function segmentName2Key(segmentName, locale) {
  if (!text2key(locale).hasOwnProperty(segmentName)) {
    var idxStart = segmentName.indexOf('< ') + 2;
    var idxEnd = segmentName.indexOf(' da');

    return { segment: 'dynamic', daysValid: parseInt(segmentName.substring(idxStart, idxEnd)) };
  }
  return { segment: text2key(locale)[segmentName], daysValid: 0 };
};

var segmentMap = function segmentMap(locale) {
  switch (locale) {
    case 'nb':
      return {
        'all': 'Alle linjer',
        'valid': 'Gyldige linjer',
        'expiring': 'Utgående linjer',
        'invalid': 'Utgåtte linjer',
        'dynamic': 'Utgående linjer (< DAYS dager)'
      };
    default:
    case 'en':
      return {
        'all': 'All lines',
        'valid': 'Valid lines',
        'expiring': 'Expiring lines',
        'invalid': 'Invalid lines',
        'dynamic': 'Expiring lines (< DAYS days)'
      };
  }
};

var text2key = function text2key(locale) {
  switch (locale) {
    case 'nb':
      return {
        'Alle linjer': 'all',
        'Gyldige linjer': 'valid',
        'Utgående linjer': 'expiring',
        'Utgåtte linjer': 'invalid'
      };
    default:
    case 'en':
      return {
        'All lines': 'all',
        'Valid lines': 'valid',
        'Expiring lines': 'expiring',
        'Invalid lines': 'invalid'
      };
  }
};

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
    days: days === Infinity ? 0 : days,
    validity: validity(days)
  };
};

var sortValidity = function sortValidity(validity) {
  return validity.sort(function (a, b) {
    return a['numDaysAtLeastValid'] < b['numDaysAtLeastValid'] ? -1 : 1;
  });
};

var lines = function lines(lineStats, validity, defaultObject) {
  return lineStats.validityCategories.find(function (category) {
    return category.name === validity;
  }) || _extends({ validity: validity }, defaultObject);
};

var formatLineStats = function formatLineStats(lineStats) {

  try {
    var _ref;

    var defaultObject = { lineNumbers: [] };

    var formattedLines = {
      invalid: lines(lineStats, "INVALID", defaultObject),
      valid: lines(lineStats, "VALID", defaultObject),
      expiring: lines(lineStats, "EXPIRING", defaultObject),
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
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDRjZDMyZTQ5MGMxZTRiNDYwY2Y3P2JmMzciLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIj8zYzYyIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmaWx0ZXJMaW5lcyIsImxpbmVEYXRhIiwic2VsZWN0ZWRTZWdtZW50IiwiZGF5c1ZhbGlkIiwiaGFzT3duUHJvcGVydHkiLCJsaW5lTnVtYmVycyIsImkiLCJ2YWxpZGl0eSIsImNhdGVnb3J5IiwibnVtRGF5c0F0TGVhc3RWYWxpZCIsImNvbnNvbGUiLCJsb2ciLCJzb3J0TWV0aG9kIiwiaW5kZXgiLCJhc2NlbmRpbmciLCJhIiwiYiIsInNvcnRMaW5lcyIsInNvcnRpbmciLCJvcmRlciIsInNvcnQiLCJyZXZlcnNlIiwiZGF5c0FzYyIsInNsaWNlIiwiZmlsdGVyIiwibGluZSIsImluZGV4T2YiLCJsaW5lTnVtYmVyIiwibWFwIiwiZGF5c0Rlc2MiLCJzb3J0SWNvbiIsImRlZiIsImRvd24iLCJ1cCIsImF6IiwiemEiLCJkYXlzRm9yd2FyZCIsIkluZmluaXR5Iiwic2VnbWVudENvbG9yIiwibW9kaWZpZXIiLCJncmVlbiIsInRvU3RyaW5nIiwic2VnbWVudE5hbWUiLCJzZWdtZW50IiwibnVtRGF5cyIsImxvY2FsZSIsInNlZ21lbnRNYXAiLCJyZXBsYWNlIiwic2VnbWVudE5hbWUyS2V5IiwidGV4dDJrZXkiLCJpZHhTdGFydCIsImlkeEVuZCIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwidmFsaWRQZXJpb2QiLCJlbmREYXRlIiwiZnJvbSIsInRvIiwibW9tZW50IiwiYWRkIiwiaXNCZXR3ZWVuIiwidmFsaWREYXlzIiwibGluZXMiLCJkYXlzIiwiZ2V0RGF5c1JhbmdlIiwic3RhcnREYXRlIiwiZW5kIiwiaXNNb21lbnQiLCJkaWZmIiwibWluRGF5cyIsImxpbmVOdW1iZXIyRGF5cyIsIk1hdGgiLCJtaW4iLCJzb3J0VmFsaWRpdHkiLCJsaW5lU3RhdHMiLCJkZWZhdWx0T2JqZWN0IiwidmFsaWRpdHlDYXRlZ29yaWVzIiwiZmluZCIsIm5hbWUiLCJmb3JtYXRMaW5lU3RhdHMiLCJmb3JtYXR0ZWRMaW5lcyIsImludmFsaWQiLCJ2YWxpZCIsImV4cGlyaW5nIiwiYWxsIiwiY29uY2F0IiwibGluZXNNYXAiLCJmb3JtYXQiLCJwdWJsaWNMaW5lcyIsImZvckVhY2giLCJwdWJsaWNMaW5lIiwiZWZmZWN0aXZlUGVyaW9kcyIsImVmZmVjdGl2ZVBlcmlvZCIsImZyb21EYXRlIiwiZnJvbURpZmYiLCJ0aW1lbGluZVN0YXJ0UG9zaXRpb24iLCJhYnMiLCJ0aW1lbGluZUVuZFBvc2l0aW9uIiwidG9EYXRlIiwidG9EaWZmIiwidmFsaWRhdGlvbkxldmVsIiwidGltZXRhYmxlcyIsInRpbWV0YWJsZSIsInBlcmlvZHMiLCJwZXJpb2QiLCJ2YWxpZERheXNPZmZzZXQiLCJ2YWxpZEZyb21EYXRlIiwiZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNB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ZXpCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDYSxJQUE3QyxDQUFrRCw4Q0FBQVYsQ0FBTzhDLE9BQU8vQyxFQUFkLEVBQWtCLFlBQWxCLEVBQWdDRSxHQUFoQyxDQUFvQyxDQUFwQyxFQUF1QyxNQUF2QyxDQUFsRCxFQUFrRyxNQUFsRyxFQUEwRyxJQUExRyxDQUFiOztBQUVBLGdCQUFJd0MsU0FBUyxDQUFiLEVBQWdCO0FBQ2RGLG9DQUFzQixNQUFPRSxVQUFVbkIsZUFBZWpCLElBQWYsR0FBb0IsR0FBOUIsQ0FBN0I7QUFDRDs7QUFFRHlDLG1CQUFPUCxtQkFBUCxHQUE2QkEsbUJBQTdCO0FBQ0QsV0FuQkQ7QUFvQkQsU0FyQkQ7QUFzQkQsT0F4QkQ7O0FBMEJBWCxlQUFTSSxXQUFXL0QsVUFBcEIsSUFBa0MrRCxVQUFsQztBQUNELEtBM0REOztBQTZEQVYsbUJBQWVNLFFBQWYsR0FBMEJBLFFBQTFCO0FBQ0FOLG1CQUFleUIsZUFBZixHQUFpQyxFQUFqQztBQUNBekIsbUJBQWUwQixhQUFmLEdBQStCLDhDQUFBaEQsQ0FBT08sU0FBUCxFQUFrQk4sR0FBbEIsQ0FBc0IsR0FBdEIsRUFBMkIsTUFBM0IsRUFBbUM0QixNQUFuQyxDQUEwQyxZQUExQyxDQUEvQjtBQUNBUCxtQkFBZTdFLFNBQWYsR0FBMkIwRCxVQUFVYSxVQUFVYyxXQUFwQixDQUEzQjtBQUNBUixtQkFBZVgsT0FBZixHQUF5QkEsUUFBUVcsZUFBZTdFLFNBQXZCLENBQXpCOztBQUVBLFdBQU82RSxjQUFQO0FBRUQsR0E1RkQsQ0E0RkUsT0FBTzJCLENBQVAsRUFBVTtBQUNWakcsWUFBUWtHLEtBQVIsQ0FBYyx1QkFBZCxFQUF1Q0QsQ0FBdkM7QUFDRDtBQUNGLENBakdNLEMiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcIm1vbWVudFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcIm1vbWVudFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0Y2QzMmU0OTBjMWU0YjQ2MGNmNyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgZmlsdGVyTGluZXMgPSAobGluZURhdGEsIHNlbGVjdGVkU2VnbWVudCwgZGF5c1ZhbGlkKSA9PiB7XG4gIGlmIChsaW5lRGF0YS5oYXNPd25Qcm9wZXJ0eShzZWxlY3RlZFNlZ21lbnQpKSB7XG4gICAgcmV0dXJuIGxpbmVEYXRhW3NlbGVjdGVkU2VnbWVudF0ubGluZU51bWJlcnNcbiAgfVxuXG4gIGZvciAobGV0IGkgaW4gbGluZURhdGEudmFsaWRpdHkpIHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGxpbmVEYXRhLnZhbGlkaXR5W2ldXG4gICAgaWYgKGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPT09IGRheXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5LmxpbmVOdW1iZXJzXG4gICAgfVxuICB9XG5cbiAgLy8gZmFsbGJhY2sgdG8gYWxsXG4gIGNvbnNvbGUubG9nKFwiZXJyb3IsIHNob3dpbmcgYWxsIGRhdGFcIilcbiAgcmV0dXJuIGxpbmVEYXRhWydhbGwnXS5saW5lTnVtYmVyc1xufVxuXG5leHBvcnQgY29uc3Qgc29ydE1ldGhvZCA9ICggaW5kZXggPSAwLCBhc2NlbmRpbmcgPSB0cnVlKSA9PiB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgIGlmIChhW2luZGV4XSA9PT0gYltpbmRleF0pIHtcbiAgICAgIHJldHVybiAwXG4gICAgfSBlbHNlIGlmIChhW2luZGV4XSA8ICBiW2luZGV4XSkge1xuICAgICAgcmV0dXJuIChhc2NlbmRpbmcpID8gLTEgOiAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoYXNjZW5kaW5nKSA/IDEgOiAtMVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc29ydExpbmVzID0gKHNvcnRpbmcsIGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZCkgPT4ge1xuICBjb25zdCBvcmRlciA9IGZpbHRlckxpbmVzKGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZClcblxuICBzd2l0Y2ggKHNvcnRpbmcpIHtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG9yZGVyXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIG9yZGVyLnNvcnQoKVxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBvcmRlci5zb3J0KCkucmV2ZXJzZSgpXG4gICAgY2FzZSAzOlxuICAgICAgbGV0IGRheXNBc2MgPSBsaW5lRGF0YS5kYXlzVmFsaWQuc2xpY2UoKS5zb3J0KCB0aGlzLnNvcnRNZXRob2QoJ2RheXMnLCB0cnVlKSApXG4gICAgICByZXR1cm4gZGF5c0FzYy5maWx0ZXIoIChsaW5lKSA9PiBvcmRlci5pbmRleE9mKGxpbmUubGluZU51bWJlcikgIT09IC0xKS5tYXAoKGxpbmUpID0+IGxpbmUubGluZU51bWJlcilcbiAgICBjYXNlIDQ6XG4gICAgICBsZXQgZGF5c0Rlc2MgPSBsaW5lRGF0YS5kYXlzVmFsaWQuc2xpY2UoKS5zb3J0KCB0aGlzLnNvcnRNZXRob2QoJ2RheXMnLCBmYWxzZSkgKVxuICAgICAgcmV0dXJuIGRheXNEZXNjLmZpbHRlciggKGxpbmUpID0+IG9yZGVyLmluZGV4T2YobGluZS5saW5lTnVtYmVyKSAhPT0gLTEgKS5tYXAoIChsaW5lKSA9PiBsaW5lLmxpbmVOdW1iZXIpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRJY29uID0gKHNvcnRpbmcpID0+IHtcbiAgbGV0IGRlZiA9IDxzdmcgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDI0XCI+PHBhdGggZD1cIk0zIDE4aDZ2LTJIM3Yyek0zIDZ2MmgxOFY2SDN6bTAgN2gxMnYtMkgzdjJ6XCIvPjwvc3ZnPlxuICBsZXQgZG93biA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMjRcIj48cGF0aCBkPVwiTTcuNDEgNy44NEwxMiAxMi40Mmw0LjU5LTQuNThMMTggOS4yNWwtNiA2LTYtNnpcIi8+PC9zdmc+XG4gIGxldCB1cCA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMjRcIj48cGF0aCBkPVwiTTcuNDEgMTUuNDFMMTIgMTAuODNsNC41OSA0LjU4TDE4IDE0bC02LTYtNiA2elwiLz48L3N2Zz5cbiAgbGV0IGF6ID0gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAxOFwiPjx0ZXh0IHg9XCIxMlwiIHk9XCIxMlwiIHRleHRBbmNob3I9XCJtaWRkbGVcIj5BWjwvdGV4dD48L3N2Zz5cbiAgbGV0IHphID0gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAxOFwiPjx0ZXh0IHg9XCIxMlwiIHk9XCIxMlwiIHRleHRBbmNob3I9XCJtaWRkbGVcIj5aQTwvdGV4dD48L3N2Zz5cbiAgc3dpdGNoIChzb3J0aW5nKSB7XG4gICAgZGVmYXVsdDpcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gZGVmXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIDxkaXY+e2F6fXtkb3dufTwvZGl2PlxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiA8ZGl2Pnt6YX17dXB9PC9kaXY+XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGRvd25cbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gdXBcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdmFsaWRpdHkgPSAoZGF5c0ZvcndhcmQpID0+IHtcbiAgaWYgKGRheXNGb3J3YXJkIDwgMCB8fCBkYXlzRm9yd2FyZCA9PT0gSW5maW5pdHkpIHtcbiAgICByZXR1cm4gJ0lOVkFMSUQnXG4gIH0gZWxzZSBpZiAoZGF5c0ZvcndhcmQgPj0gMTIwKSB7XG4gICAgcmV0dXJuICdWQUxJRCdcbiAgfVxuICByZXR1cm4gJ0VYUElSSU5HJ1xufVxuXG5leHBvcnQgY29uc3Qgc2VnbWVudENvbG9yID0gKGRheXNWYWxpZCwgbW9kaWZpZXIgPSAwKSA9PiB7XG4gIGxldCBncmVlbiA9IDEyMCArIGRheXNWYWxpZCArIG1vZGlmaWVyXG4gIHJldHVybiAnI0ZGJyArIGdyZWVuLnRvU3RyaW5nKDE2KSArJzAwJ1xufVxuXG5leHBvcnQgY29uc3Qgc2VnbWVudE5hbWUgPSAoc2VnbWVudCwgbnVtRGF5cywgbG9jYWxlKSA9PiB7XG4gIGlmIChzZWdtZW50TWFwKGxvY2FsZSkuaGFzT3duUHJvcGVydHkoc2VnbWVudCkgJiYgc2VnbWVudCAhPT0gJ2R5bmFtaWMnKSB7XG4gICAgcmV0dXJuIHNlZ21lbnRNYXAobG9jYWxlKVtzZWdtZW50XVxuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRNYXAobG9jYWxlKVsnZHluYW1pYyddLnJlcGxhY2UoJ0RBWVMnLCBudW1EYXlzKVxufVxuXG5leHBvcnQgY29uc3Qgc2VnbWVudE5hbWUyS2V5ID0gKHNlZ21lbnROYW1lLCBsb2NhbGUpID0+IHtcbiAgaWYgKCF0ZXh0MmtleShsb2NhbGUpLmhhc093blByb3BlcnR5KHNlZ21lbnROYW1lKSkge1xuICAgIGxldCBpZHhTdGFydCA9IHNlZ21lbnROYW1lLmluZGV4T2YoJzwgJykgKyAyXG4gICAgbGV0IGlkeEVuZCA9IHNlZ21lbnROYW1lLmluZGV4T2YoJyBkYScpXG5cbiAgICByZXR1cm4ge3NlZ21lbnQ6ICdkeW5hbWljJywgZGF5c1ZhbGlkOiBwYXJzZUludChzZWdtZW50TmFtZS5zdWJzdHJpbmcoaWR4U3RhcnQsIGlkeEVuZCkpfVxuICB9XG4gIHJldHVybiB7c2VnbWVudDogdGV4dDJrZXkobG9jYWxlKVtzZWdtZW50TmFtZV0sIGRheXNWYWxpZDogMH1cbn1cblxuY29uc3Qgc2VnbWVudE1hcCA9IChsb2NhbGUpID0+IHtcbiAgc3dpdGNoIChsb2NhbGUpIHtcbiAgICBjYXNlICduYic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnYWxsJyA6ICdBbGxlIGxpbmplcicsXG4gICAgICAgICd2YWxpZCcgOiAnR3lsZGlnZSBsaW5qZXInLFxuICAgICAgICAnZXhwaXJpbmcnIDogJ1V0Z8OlZW5kZSBsaW5qZXInLFxuICAgICAgICAnaW52YWxpZCcgOiAnVXRnw6V0dGUgbGluamVyJyxcbiAgICAgICAgJ2R5bmFtaWMnOiAnVXRnw6VlbmRlIGxpbmplciAoPCBEQVlTIGRhZ2VyKScsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICBjYXNlICdlbic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnYWxsJyA6ICdBbGwgbGluZXMnLFxuICAgICAgICAndmFsaWQnIDogJ1ZhbGlkIGxpbmVzJyxcbiAgICAgICAgJ2V4cGlyaW5nJyA6ICdFeHBpcmluZyBsaW5lcycsXG4gICAgICAgICdpbnZhbGlkJyA6ICdJbnZhbGlkIGxpbmVzJyxcbiAgICAgICAgJ2R5bmFtaWMnOiAnRXhwaXJpbmcgbGluZXMgKDwgREFZUyBkYXlzKSdcbiAgICAgIH1cbiAgfVxufVxuXG5jb25zdCB0ZXh0MmtleSA9IChsb2NhbGUpID0+IHtcbiAgc3dpdGNoIChsb2NhbGUpIHtcbiAgICBjYXNlICduYic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAnQWxsZSBsaW5qZXInIDogJ2FsbCcsXG4gICAgICAgICdHeWxkaWdlIGxpbmplcicgOiAndmFsaWQnLFxuICAgICAgICAnVXRnw6VlbmRlIGxpbmplcicgOiAnZXhwaXJpbmcnLFxuICAgICAgICAnVXRnw6V0dGUgbGluamVyJyA6ICdpbnZhbGlkJyxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgIGNhc2UgJ2VuJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdBbGwgbGluZXMnIDogJ2FsbCcsXG4gICAgICAgICdWYWxpZCBsaW5lcycgOiAndmFsaWQnLFxuICAgICAgICAnRXhwaXJpbmcgbGluZXMnIDogJ2V4cGlyaW5nJyxcbiAgICAgICAgJ0ludmFsaWQgbGluZXMnIDogJ2ludmFsaWQnLFxuICAgICAgfVxuICB9XG59XG5cbmNvbnN0IHZhbGlkUGVyaW9kID0gKGVuZERhdGUsIGZyb20sIHRvKSA9PiAobW9tZW50KGVuZERhdGUpLmFkZCgxLCAnZGF5cycpLmlzQmV0d2Vlbihmcm9tLCB0bywgJ2RheXMnLCAnW10nKSkgPyB0byA6IGVuZERhdGVcblxuY29uc3QgdmFsaWREYXlzID0gKGxpbmVzKSA9PiBsaW5lcy5tYXAobGluZSA9PiB7IHJldHVybiB7bGluZU51bWJlcjogbGluZS5saW5lTnVtYmVyLCBkYXlzOiBsaW5lLmRheXNWYWxpZH0gfSlcblxuY29uc3QgZ2V0RGF5c1JhbmdlID0gKHN0YXJ0RGF0ZSwgZW5kID0gMCkgPT4gbW9tZW50LmlzTW9tZW50KGVuZCkgPyBlbmQuZGlmZihzdGFydERhdGUsICdkYXlzJykgOiBlbmRcblxuY29uc3QgbWluRGF5cyA9IChsaW5lTnVtYmVyMkRheXMpID0+IHtcbiAgbGV0IGRheXMgPSBNYXRoLm1pbiguLi5saW5lTnVtYmVyMkRheXMubWFwKCBsaW5lID0+IGxpbmUuZGF5cykpXG4gIHJldHVybiB7XG4gICAgZGF5czogZGF5cyA9PT0gSW5maW5pdHkgPyAwIDogZGF5cyxcbiAgICB2YWxpZGl0eTogdmFsaWRpdHkoZGF5cylcbiAgfVxufVxuXG5jb25zdCBzb3J0VmFsaWRpdHkgPSB2YWxpZGl0eSA9PiB2YWxpZGl0eS5zb3J0KCAoYSwgYikgPT4gYVsnbnVtRGF5c0F0TGVhc3RWYWxpZCddIDwgYlsnbnVtRGF5c0F0TGVhc3RWYWxpZCddID8gLTEgOiAxKVxuXG5jb25zdCBsaW5lcyA9IChsaW5lU3RhdHMsIHZhbGlkaXR5LCBkZWZhdWx0T2JqZWN0KSA9PlxuICBsaW5lU3RhdHMudmFsaWRpdHlDYXRlZ29yaWVzLmZpbmQoIGNhdGVnb3J5ID0+IGNhdGVnb3J5Lm5hbWUgPT09IHZhbGlkaXR5ICkgfHwge3ZhbGlkaXR5LCAuLi4gZGVmYXVsdE9iamVjdH1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdExpbmVTdGF0cyA9IGxpbmVTdGF0cyA9PiB7XG5cbiAgdHJ5IHtcblxuICAgIGNvbnN0IGRlZmF1bHRPYmplY3QgPSB7wqBsaW5lTnVtYmVyczogW10gfVxuXG4gICAgbGV0IGZvcm1hdHRlZExpbmVzID0ge1xuICAgICAgaW52YWxpZDogbGluZXMobGluZVN0YXRzLCBcIklOVkFMSURcIiwgZGVmYXVsdE9iamVjdCksXG4gICAgICB2YWxpZDogbGluZXMobGluZVN0YXRzLCBcIlZBTElEXCIsIGRlZmF1bHRPYmplY3QpLFxuICAgICAgZXhwaXJpbmc6IGxpbmVzKGxpbmVTdGF0cywgXCJFWFBJUklOR1wiLCBkZWZhdWx0T2JqZWN0KSxcbiAgICAgIHZhbGlkaXR5OiBzb3J0VmFsaWRpdHkobGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllcyksXG4gICAgICBhbGw6IGRlZmF1bHRPYmplY3RcbiAgICB9XG5cbiAgICBmb3JtYXR0ZWRMaW5lcy5hbGwubGluZU51bWJlcnMgPSBbXS5jb25jYXQoLi4uIGZvcm1hdHRlZExpbmVzLnZhbGlkaXR5Lm1hcChsaW5lcyA9PiBsaW5lcy5saW5lTnVtYmVycyApIClcblxuICAgIGxldCBsaW5lc01hcCA9IHt9XG5cbiAgICBsZXQgc3RhcnREYXRlID0gbW9tZW50KGxpbmVTdGF0cy5zdGFydERhdGUsICdZWVlZLU1NLUREJylcbiAgICBsZXQgZW5kRGF0ZSA9IG1vbWVudChzdGFydERhdGUpLmFkZChsaW5lU3RhdHMuZGF5cywgJ2RheXMnKVxuXG4gICAgZm9ybWF0dGVkTGluZXMuc3RhcnREYXRlID0gc3RhcnREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgZm9ybWF0dGVkTGluZXMuZGF5cyA9IGxpbmVTdGF0cy5kYXlzXG4gICAgZm9ybWF0dGVkTGluZXMuZW5kRGF0ZSA9IGVuZERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJylcblxuICAgIGxpbmVTdGF0cy5wdWJsaWNMaW5lcy5mb3JFYWNoICggcHVibGljTGluZSA9PiB7XG5cbiAgICAgIHB1YmxpY0xpbmUuZWZmZWN0aXZlUGVyaW9kcy5mb3JFYWNoKCAoZWZmZWN0aXZlUGVyaW9kKSA9PiB7XG5cbiAgICAgICAgbGV0IGZyb21EYXRlID0gbW9tZW50KGVmZmVjdGl2ZVBlcmlvZC5mcm9tLCAnWVlZWS1NTS1ERCcpXG4gICAgICAgIGxldCBmcm9tRGlmZiA9IHN0YXJ0RGF0ZS5kaWZmKGZyb21EYXRlLCAnZGF5cycsIHRydWUpXG5cbiAgICAgICAgaWYgKGZyb21EaWZmID4gMCkge1xuICAgICAgICAgIC8vIG5vdyBpcyBhZnRlciBzdGFydCBkYXRlIG9mIGVmZmVjdGl2ZSBwZXJpb2RcbiAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID0gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gPSAoIE1hdGguYWJzKGZyb21EaWZmKSAvIGZvcm1hdHRlZExpbmVzLmRheXMgKSAqIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDBcblxuICAgICAgICBsZXQgdG9EYXRlID0gbW9tZW50KGVmZmVjdGl2ZVBlcmlvZC50bywgJ1lZWVktTU0tREQnKVxuICAgICAgICBsZXQgdG9EaWZmID0gbW9tZW50KGZvcm1hdHRlZExpbmVzLmVuZERhdGUsICdZWVlZLU1NLUREJykuZGlmZihtb21lbnQodG9EYXRlKS5hZGQoMSwgJ2RheXMnKSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgIGlmICh0b0RpZmYgPiAwKSB7XG4gICAgICAgICAgdGltZWxpbmVFbmRQb3NpdGlvbiA9IDEwMCAtICh0b0RpZmYgLyAoZm9ybWF0dGVkTGluZXMuZGF5cy8xMDApKVxuICAgICAgICB9XG5cbiAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gPSB0aW1lbGluZUVuZFBvc2l0aW9uXG5cbiAgICAgICAgbGV0IGRheXNGb3J3YXJkID0gKGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC8gMTAwKSAqIGZvcm1hdHRlZExpbmVzLmRheXNcbiAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnZhbGlkYXRpb25MZXZlbCA9IHZhbGlkaXR5KGRheXNGb3J3YXJkKVxuXG4gICAgICAgIHB1YmxpY0xpbmUuZGF5c1ZhbGlkID0gdmFsaWRQZXJpb2QocHVibGljTGluZS5kYXlzVmFsaWQgfHwgc3RhcnREYXRlLCBmcm9tRGF0ZSwgdG9EYXRlKVxuICAgICAgfSlcbiAgICAgIHB1YmxpY0xpbmUuZGF5c1ZhbGlkID0gZ2V0RGF5c1JhbmdlKHN0YXJ0RGF0ZSwgcHVibGljTGluZS5kYXlzVmFsaWQpXG5cbiAgICAgIHB1YmxpY0xpbmUubGluZXMuZm9yRWFjaCggKGxpbmUpID0+IHtcblxuICAgICAgICBsaW5lLnRpbWV0YWJsZXMuZm9yRWFjaCggKHRpbWV0YWJsZSkgPT4ge1xuICAgICAgICAgIHRpbWV0YWJsZS5wZXJpb2RzLmZvckVhY2goIChwZXJpb2QpID0+IHtcblxuICAgICAgICAgICAgbGV0IGZyb21EaWZmID0gc3RhcnREYXRlLmRpZmYobW9tZW50KHBlcmlvZC5mcm9tLCAnWVlZWS1NTS1ERCcpLCAnZGF5cycsIHRydWUpXG5cbiAgICAgICAgICAgIGlmIChmcm9tRGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9ICggTWF0aC5hYnMoZnJvbURpZmYpIC8gZm9ybWF0dGVkTGluZXMuZGF5cyApICogMTAwXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID0gMFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdGltZWxpbmVFbmRQb3NpdGlvbiA9IDEwMFxuXG4gICAgICAgICAgICBsZXQgdG9EaWZmID0gbW9tZW50KGZvcm1hdHRlZExpbmVzLmVuZERhdGUsICdZWVlZLU1NLUREJykuZGlmZihtb21lbnQocGVyaW9kLnRvLCAnWVlZWS1NTS1ERCcpLmFkZCgxLCAnZGF5cycpLCAnZGF5cycsIHRydWUpXG5cbiAgICAgICAgICAgIGlmICh0b0RpZmYgPiAwKSB7XG4gICAgICAgICAgICAgIHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDAgLSAodG9EaWZmIC8gKGZvcm1hdHRlZExpbmVzLmRheXMvMTAwKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gPSB0aW1lbGluZUVuZFBvc2l0aW9uXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIGxpbmVzTWFwW3B1YmxpY0xpbmUubGluZU51bWJlcl0gPSBwdWJsaWNMaW5lXG4gICAgfSlcblxuICAgIGZvcm1hdHRlZExpbmVzLmxpbmVzTWFwID0gbGluZXNNYXBcbiAgICBmb3JtYXR0ZWRMaW5lcy52YWxpZERheXNPZmZzZXQgPSAzM1xuICAgIGZvcm1hdHRlZExpbmVzLnZhbGlkRnJvbURhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5hZGQoMTIwLCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgZm9ybWF0dGVkTGluZXMuZGF5c1ZhbGlkID0gdmFsaWREYXlzKGxpbmVTdGF0cy5wdWJsaWNMaW5lcylcbiAgICBmb3JtYXR0ZWRMaW5lcy5taW5EYXlzID0gbWluRGF5cyhmb3JtYXR0ZWRMaW5lcy5kYXlzVmFsaWQpXG5cbiAgICByZXR1cm4gZm9ybWF0dGVkTGluZXNcblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcImVycm9yIGluIGdldExpbmVTdGF0c1wiLCBlKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9