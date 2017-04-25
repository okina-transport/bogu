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
  if (daysForward === Infinity || daysForward === 0) {
    return 'INVALID';
  } else if (daysForward > 127) {
    return 'VALID';
  } else if (daysForward >= 120) {
    return 'SOON_INVALID';
  }
  return 'EXPIRED';
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
    var idxStart = segmentName.indexOf('- ') + 2;
    var idxEnd = segmentName.indexOf(' dager');

    return { segment: 'dynamic', daysValid: parseInt(segmentName.substring(idxStart, idxEnd)) };
  }
  return { segment: text2key(locale)[segmentName], daysValid: 0 };
};

var segmentMap = function segmentMap(locale) {
  switch (locale) {
    case 'nb':
      return {
        'valid': 'Linjer i gyldig periode',
        'soonInvalid': 'Linjer med gyldighetsperiode som snart utgår',
        'invalid': 'Linjer med manglende gyldighetsperiode',
        'all': 'Alle linjer',
        'dynamic': 'Utgåtte linjer - DAYS dager igjen'
      };
    default:
    case 'en':
      return {
        'valid': 'Valid lines',
        'soonInvalid': 'Valid lines that are soon expiring',
        'invalid': 'Invalid lines',
        'all': 'All lines',
        'dynamic': 'Expired lines - DAYS days left'
      };
  }
};

var text2key = function text2key(locale) {
  switch (locale) {
    case 'nb':
      return {
        'Alle linjer': 'all',
        'Linjer i gyldig periode': 'valid',
        'Linjer med gyldighetsperiode som snart utgår': 'soonInvalid',
        'Linjer med manglende gyldighetsperiode': 'invalid'
      };
    default:
    case 'en':
      return { 'All lines': 'all',
        'Valid lines': 'valid',
        'Valid lines that are soon expiring': 'soonInvalid',
        'Invalid lines': 'invalid' };
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
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGNjNzhhNDVmNjc5NTg1M2FmOWM4PzEyY2YiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIj8zYzYyIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmaWx0ZXJMaW5lcyIsImxpbmVEYXRhIiwic2VsZWN0ZWRTZWdtZW50IiwiZGF5c1ZhbGlkIiwiaGFzT3duUHJvcGVydHkiLCJsaW5lTnVtYmVycyIsImkiLCJ2YWxpZGl0eSIsImNhdGVnb3J5IiwibnVtRGF5c0F0TGVhc3RWYWxpZCIsImNvbnNvbGUiLCJsb2ciLCJzb3J0TWV0aG9kIiwiaW5kZXgiLCJhc2NlbmRpbmciLCJhIiwiYiIsInNvcnRMaW5lcyIsInNvcnRpbmciLCJvcmRlciIsInNvcnQiLCJyZXZlcnNlIiwiZGF5c0FzYyIsInNsaWNlIiwiZmlsdGVyIiwibGluZSIsImluZGV4T2YiLCJsaW5lTnVtYmVyIiwibWFwIiwiZGF5c0Rlc2MiLCJzb3J0SWNvbiIsImRlZiIsImRvd24iLCJ1cCIsImF6IiwiemEiLCJkYXlzRm9yd2FyZCIsIkluZmluaXR5Iiwic2VnbWVudENvbG9yIiwibW9kaWZpZXIiLCJncmVlbiIsInRvU3RyaW5nIiwic2VnbWVudE5hbWUiLCJzZWdtZW50IiwibnVtRGF5cyIsImxvY2FsZSIsInNlZ21lbnRNYXAiLCJyZXBsYWNlIiwic2VnbWVudE5hbWUyS2V5IiwidGV4dDJrZXkiLCJpZHhTdGFydCIsImlkeEVuZCIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwidmFsaWRQZXJpb2QiLCJlbmREYXRlIiwiZnJvbSIsInRvIiwibW9tZW50IiwiYWRkIiwiaXNCZXR3ZWVuIiwidmFsaWREYXlzIiwibGluZXMiLCJkYXlzIiwiZ2V0RGF5c1JhbmdlIiwic3RhcnREYXRlIiwiZW5kIiwiaXNNb21lbnQiLCJkaWZmIiwibWluRGF5cyIsImxpbmVOdW1iZXIyRGF5cyIsIk1hdGgiLCJtaW4iLCJzb3J0VmFsaWRpdHkiLCJmb3JtYXRMaW5lU3RhdHMiLCJkZWZhdWx0T2JqZWN0IiwiZm9ybWF0dGVkTGluZXMiLCJpbnZhbGlkIiwibGluZVN0YXRzIiwidmFsaWRpdHlDYXRlZ29yaWVzIiwidmFsaWQiLCJzb29uSW52YWxpZCIsImFsbCIsImNvbmNhdCIsImxpbmVzTWFwIiwiZm9ybWF0IiwicHVibGljTGluZXMiLCJmb3JFYWNoIiwicHVibGljTGluZSIsImVmZmVjdGl2ZVBlcmlvZHMiLCJlZmZlY3RpdmVQZXJpb2QiLCJmcm9tRGF0ZSIsImZyb21EaWZmIiwidGltZWxpbmVTdGFydFBvc2l0aW9uIiwiYWJzIiwidGltZWxpbmVFbmRQb3NpdGlvbiIsInRvRGF0ZSIsInRvRGlmZiIsInZhbGlkYXRpb25MZXZlbCIsInRpbWV0YWJsZXMiLCJ0aW1ldGFibGUiLCJwZXJpb2RzIiwicGVyaW9kIiwidmFsaWREYXlzT2Zmc2V0IiwidmFsaWRGcm9tRGF0ZSIsImUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJtb21lbnRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYm9ndVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibW9tZW50XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJib2d1XCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0sIHJvb3RbXCJtb21lbnRcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2M3OGE0NWY2Nzk1ODUzYWY5YzgiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb21lbnRcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IGZpbHRlckxpbmVzID0gKGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZCkgPT4ge1xuICBpZiAobGluZURhdGEuaGFzT3duUHJvcGVydHkoc2VsZWN0ZWRTZWdtZW50KSkge1xuICAgIHJldHVybiBsaW5lRGF0YVtzZWxlY3RlZFNlZ21lbnRdLmxpbmVOdW1iZXJzXG4gIH1cblxuICBmb3IgKGxldCBpIGluIGxpbmVEYXRhLnZhbGlkaXR5KSB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBsaW5lRGF0YS52YWxpZGl0eVtpXVxuICAgIGlmIChjYXRlZ29yeS5udW1EYXlzQXRMZWFzdFZhbGlkID09PSBkYXlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS5saW5lTnVtYmVyc1xuICAgIH1cbiAgfVxuXG4gIC8vIGZhbGxiYWNrIHRvIGFsbFxuICBjb25zb2xlLmxvZyhcImVycm9yLCBzaG93aW5nIGFsbCBkYXRhXCIpXG4gIHJldHVybiBsaW5lRGF0YVsnYWxsJ10ubGluZU51bWJlcnNcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRNZXRob2QgPSAoIGluZGV4ID0gMCwgYXNjZW5kaW5nID0gdHJ1ZSkgPT4ge1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBpZiAoYVtpbmRleF0gPT09IGJbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSBpZiAoYVtpbmRleF0gPCAgYltpbmRleF0pIHtcbiAgICAgIHJldHVybiAoYXNjZW5kaW5nKSA/IC0xIDogMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKGFzY2VuZGluZykgPyAxIDogLTFcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRMaW5lcyA9IChzb3J0aW5nLCBsaW5lRGF0YSwgc2VsZWN0ZWRTZWdtZW50LCBkYXlzVmFsaWQpID0+IHtcbiAgY29uc3Qgb3JkZXIgPSBmaWx0ZXJMaW5lcyhsaW5lRGF0YSwgc2VsZWN0ZWRTZWdtZW50LCBkYXlzVmFsaWQpXG5cbiAgc3dpdGNoIChzb3J0aW5nKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBvcmRlclxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBvcmRlci5zb3J0KClcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gb3JkZXIuc29ydCgpLnJldmVyc2UoKVxuICAgIGNhc2UgMzpcbiAgICAgIGxldCBkYXlzQXNjID0gbGluZURhdGEuZGF5c1ZhbGlkLnNsaWNlKCkuc29ydCggdGhpcy5zb3J0TWV0aG9kKCdkYXlzJywgdHJ1ZSkgKVxuICAgICAgcmV0dXJuIGRheXNBc2MuZmlsdGVyKCAobGluZSkgPT4gb3JkZXIuaW5kZXhPZihsaW5lLmxpbmVOdW1iZXIpICE9PSAtMSkubWFwKChsaW5lKSA9PiBsaW5lLmxpbmVOdW1iZXIpXG4gICAgY2FzZSA0OlxuICAgICAgbGV0IGRheXNEZXNjID0gbGluZURhdGEuZGF5c1ZhbGlkLnNsaWNlKCkuc29ydCggdGhpcy5zb3J0TWV0aG9kKCdkYXlzJywgZmFsc2UpIClcbiAgICAgIHJldHVybiBkYXlzRGVzYy5maWx0ZXIoIChsaW5lKSA9PiBvcmRlci5pbmRleE9mKGxpbmUubGluZU51bWJlcikgIT09IC0xICkubWFwKCAobGluZSkgPT4gbGluZS5saW5lTnVtYmVyKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzb3J0SWNvbiA9IChzb3J0aW5nKSA9PiB7XG4gIGxldCBkZWYgPSA8c3ZnICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxOCAyNFwiPjxwYXRoIGQ9XCJNMyAxOGg2di0ySDN2MnpNMyA2djJoMThWNkgzem0wIDdoMTJ2LTJIM3YyelwiLz48L3N2Zz5cbiAgbGV0IGRvd24gPSA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDI0XCI+PHBhdGggZD1cIk03LjQxIDcuODRMMTIgMTIuNDJsNC41OS00LjU4TDE4IDkuMjVsLTYgNi02LTZ6XCIvPjwvc3ZnPlxuICBsZXQgdXAgPSA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDI0XCI+PHBhdGggZD1cIk03LjQxIDE1LjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNGwtNi02LTYgNnpcIi8+PC9zdmc+XG4gIGxldCBheiA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMThcIj48dGV4dCB4PVwiMTJcIiB5PVwiMTJcIiB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+QVo8L3RleHQ+PC9zdmc+XG4gIGxldCB6YSA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMThcIj48dGV4dCB4PVwiMTJcIiB5PVwiMTJcIiB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+WkE8L3RleHQ+PC9zdmc+XG4gIHN3aXRjaCAoc29ydGluZykge1xuICAgIGRlZmF1bHQ6XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIGRlZlxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiA8ZGl2Pnthen17ZG93bn08L2Rpdj5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gPGRpdj57emF9e3VwfTwvZGl2PlxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBkb3duXG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIHVwXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZhbGlkaXR5ID0gKGRheXNGb3J3YXJkKSA9PiB7XG4gIGlmIChkYXlzRm9yd2FyZCA9PT0gSW5maW5pdHkgfHzCoGRheXNGb3J3YXJkID09PSAwKSB7XG4gICAgcmV0dXJuICdJTlZBTElEJ1xuICB9IGVsc2UgaWYgKGRheXNGb3J3YXJkID4gMTI3KSB7XG4gICAgcmV0dXJuICdWQUxJRCdcbiAgfSBlbHNlIGlmIChkYXlzRm9yd2FyZCA+PSAxMjApIHtcbiAgICByZXR1cm4gJ1NPT05fSU5WQUxJRCdcbiAgfVxuICByZXR1cm4gJ0VYUElSRUQnXG59XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50Q29sb3IgPSAoZGF5c1ZhbGlkLCBtb2RpZmllciA9IDApID0+IHtcbiAgbGV0IGdyZWVuID0gMTIwICsgZGF5c1ZhbGlkICsgbW9kaWZpZXJcbiAgcmV0dXJuICcjRkYnICsgZ3JlZW4udG9TdHJpbmcoMTYpICsnMDAnXG59XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50TmFtZSA9IChzZWdtZW50LCBudW1EYXlzLCBsb2NhbGUpID0+IHtcbiAgaWYgKHNlZ21lbnRNYXAobG9jYWxlKS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50KSAmJiBzZWdtZW50ICE9PSAnZHluYW1pYycpIHtcbiAgICByZXR1cm4gc2VnbWVudE1hcChsb2NhbGUpW3NlZ21lbnRdXG4gIH1cblxuICByZXR1cm4gc2VnbWVudE1hcChsb2NhbGUpWydkeW5hbWljJ10ucmVwbGFjZSgnREFZUycsIG51bURheXMpXG59XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50TmFtZTJLZXkgPSAoc2VnbWVudE5hbWUsIGxvY2FsZSkgPT4ge1xuICBpZiAoIXRleHQya2V5KGxvY2FsZSkuaGFzT3duUHJvcGVydHkoc2VnbWVudE5hbWUpKSB7XG4gICAgbGV0IGlkeFN0YXJ0ID0gc2VnbWVudE5hbWUuaW5kZXhPZignLSAnKSArIDJcbiAgICBsZXQgaWR4RW5kID0gc2VnbWVudE5hbWUuaW5kZXhPZignIGRhZ2VyJylcblxuICAgIHJldHVybiB7c2VnbWVudDogJ2R5bmFtaWMnLCBkYXlzVmFsaWQ6IHBhcnNlSW50KHNlZ21lbnROYW1lLnN1YnN0cmluZyhpZHhTdGFydCwgaWR4RW5kKSl9XG4gIH1cbiAgcmV0dXJuIHtzZWdtZW50OiB0ZXh0MmtleShsb2NhbGUpW3NlZ21lbnROYW1lXSwgZGF5c1ZhbGlkOiAwfVxufVxuXG5jb25zdCBzZWdtZW50TWFwID0gKGxvY2FsZSkgPT4ge1xuICBzd2l0Y2ggKGxvY2FsZSkge1xuICAgIGNhc2UgJ25iJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2YWxpZCcgOiAnTGluamVyIGkgZ3lsZGlnIHBlcmlvZGUnLFxuICAgICAgICAnc29vbkludmFsaWQnIDogJ0xpbmplciBtZWQgZ3lsZGlnaGV0c3BlcmlvZGUgc29tIHNuYXJ0IHV0Z8OlcicsXG4gICAgICAgICdpbnZhbGlkJyA6ICdMaW5qZXIgbWVkIG1hbmdsZW5kZSBneWxkaWdoZXRzcGVyaW9kZScsXG4gICAgICAgICdhbGwnIDogJ0FsbGUgbGluamVyJyxcbiAgICAgICAgJ2R5bmFtaWMnOiAnVXRnw6V0dGUgbGluamVyIC0gREFZUyBkYWdlciBpZ2plbicsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICBjYXNlICdlbic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndmFsaWQnIDogJ1ZhbGlkIGxpbmVzJyxcbiAgICAgICAgJ3Nvb25JbnZhbGlkJyA6ICdWYWxpZCBsaW5lcyB0aGF0IGFyZSBzb29uIGV4cGlyaW5nJyxcbiAgICAgICAgJ2ludmFsaWQnIDogJ0ludmFsaWQgbGluZXMnLFxuICAgICAgICAnYWxsJyA6ICdBbGwgbGluZXMnLFxuICAgICAgICAnZHluYW1pYyc6ICdFeHBpcmVkIGxpbmVzIC0gREFZUyBkYXlzIGxlZnQnXG4gICAgICB9XG4gIH1cbn1cblxuY29uc3QgdGV4dDJrZXkgPSAobG9jYWxlKSA9PiB7XG4gIHN3aXRjaCAobG9jYWxlKSB7XG4gICAgY2FzZSAnbmInOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0FsbGUgbGluamVyJyA6ICdhbGwnLFxuICAgICAgICAnTGluamVyIGkgZ3lsZGlnIHBlcmlvZGUnIDogJ3ZhbGlkJyxcbiAgICAgICAgJ0xpbmplciBtZWQgZ3lsZGlnaGV0c3BlcmlvZGUgc29tIHNuYXJ0IHV0Z8OlcicgOiAnc29vbkludmFsaWQnLFxuICAgICAgICAnTGluamVyIG1lZCBtYW5nbGVuZGUgZ3lsZGlnaGV0c3BlcmlvZGUnIDogJ2ludmFsaWQnLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgY2FzZSAnZW4nOlxuICAgICAgcmV0dXJuIHsnQWxsIGxpbmVzJyA6ICdhbGwnLFxuICAgICAgICAnVmFsaWQgbGluZXMnIDogJ3ZhbGlkJyxcbiAgICAgICAgJ1ZhbGlkIGxpbmVzIHRoYXQgYXJlIHNvb24gZXhwaXJpbmcnIDogJ3Nvb25JbnZhbGlkJyxcbiAgICAgICAgJ0ludmFsaWQgbGluZXMnIDogJ2ludmFsaWQnLH1cbiAgfVxufVxuXG5jb25zdCB2YWxpZFBlcmlvZCA9IChlbmREYXRlLCBmcm9tLCB0bykgPT4gKG1vbWVudChlbmREYXRlKS5hZGQoMSwgJ2RheXMnKS5pc0JldHdlZW4oZnJvbSwgdG8sICdkYXlzJywgJ1tdJykpID8gdG8gOiBlbmREYXRlXG5cbmNvbnN0IHZhbGlkRGF5cyA9IChsaW5lcykgPT4gbGluZXMubWFwKGxpbmUgPT4geyByZXR1cm4ge2xpbmVOdW1iZXI6IGxpbmUubGluZU51bWJlciwgZGF5czogbGluZS5kYXlzVmFsaWR9IH0pXG5cbmNvbnN0IGdldERheXNSYW5nZSA9IChzdGFydERhdGUsIGVuZCA9IDApID0+IG1vbWVudC5pc01vbWVudChlbmQpID8gZW5kLmRpZmYoc3RhcnREYXRlLCAnZGF5cycpIDogZW5kXG5cbmNvbnN0IG1pbkRheXMgPSAobGluZU51bWJlcjJEYXlzKSA9PiB7XG4gIGxldCBkYXlzID0gTWF0aC5taW4oLi4ubGluZU51bWJlcjJEYXlzLm1hcCggbGluZSA9PiBsaW5lLmRheXMpKVxuICByZXR1cm4ge1xuICAgIGRheXM6IGRheXMgPT09IEluZmluaXR5ID8gMCA6IGRheXMsXG4gICAgdmFsaWRpdHk6IHZhbGlkaXR5KGRheXMpXG4gIH1cbn1cblxuY29uc3Qgc29ydFZhbGlkaXR5ID0gdmFsaWRpdHkgPT4gdmFsaWRpdHkuc29ydCggKGEsIGIpID0+IGFbJ251bURheXNBdExlYXN0VmFsaWQnXSA8IGJbJ251bURheXNBdExlYXN0VmFsaWQnXSA/IC0xIDogMSlcblxuZXhwb3J0IGNvbnN0IGZvcm1hdExpbmVTdGF0cyA9IGxpbmVTdGF0cyA9PiB7XG5cbiAgdHJ5IHtcblxuICAgIGNvbnN0IGRlZmF1bHRPYmplY3QgPSB7wqBsaW5lTnVtYmVyczogW10gfVxuXG4gICAgbGV0IGZvcm1hdHRlZExpbmVzID0ge1xuICAgICAgaW52YWxpZDogbGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllc1xuICAgICAgICAuZmlsdGVyKCAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPCAxMjApWzBdIHx8IGRlZmF1bHRPYmplY3QsXG4gICAgICB2YWxpZDogbGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllc1xuICAgICAgICAuZmlsdGVyKCAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPj0gMTI3KVswXSB8fCBkZWZhdWx0T2JqZWN0LFxuICAgICAgc29vbkludmFsaWQ6IGxpbmVTdGF0cy52YWxpZGl0eUNhdGVnb3JpZXNcbiAgICAgICAgLmZpbHRlciggKGNhdGVnb3J5KSA9PiAoY2F0ZWdvcnkubnVtRGF5c0F0TGVhc3RWYWxpZCA+PSAxMjAgJiYgY2F0ZWdvcnkubnVtRGF5c0F0TGVhc3RWYWxpZCA8IDEyNykpWzBdIHx8IGRlZmF1bHRPYmplY3QsXG4gICAgICB2YWxpZGl0eTogc29ydFZhbGlkaXR5KGxpbmVTdGF0cy52YWxpZGl0eUNhdGVnb3JpZXMpLFxuICAgICAgYWxsOiBkZWZhdWx0T2JqZWN0XG4gICAgfVxuXG4gICAgZm9ybWF0dGVkTGluZXMuYWxsLmxpbmVOdW1iZXJzID0gW10uY29uY2F0KC4uLiBmb3JtYXR0ZWRMaW5lcy52YWxpZGl0eS5tYXAobGluZXMgPT4gbGluZXMubGluZU51bWJlcnMgKSApXG5cbiAgICBsZXQgbGluZXNNYXAgPSB7fVxuXG4gICAgbGV0IHN0YXJ0RGF0ZSA9IG1vbWVudChsaW5lU3RhdHMuc3RhcnREYXRlLCAnWVlZWS1NTS1ERCcpXG4gICAgbGV0IGVuZERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5hZGQobGluZVN0YXRzLmRheXMsICdkYXlzJylcblxuICAgIGZvcm1hdHRlZExpbmVzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgIGZvcm1hdHRlZExpbmVzLmRheXMgPSBsaW5lU3RhdHMuZGF5c1xuICAgIGZvcm1hdHRlZExpbmVzLmVuZERhdGUgPSBlbmREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG5cbiAgICBsaW5lU3RhdHMucHVibGljTGluZXMuZm9yRWFjaCAoIHB1YmxpY0xpbmUgPT4ge1xuXG4gICAgICBwdWJsaWNMaW5lLmVmZmVjdGl2ZVBlcmlvZHMuZm9yRWFjaCggKGVmZmVjdGl2ZVBlcmlvZCkgPT4ge1xuXG4gICAgICAgIGxldCBmcm9tRGF0ZSA9IG1vbWVudChlZmZlY3RpdmVQZXJpb2QuZnJvbSwgJ1lZWVktTU0tREQnKVxuICAgICAgICBsZXQgZnJvbURpZmYgPSBzdGFydERhdGUuZGlmZihmcm9tRGF0ZSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgIGlmIChmcm9tRGlmZiA+IDApIHtcbiAgICAgICAgICAvLyBub3cgaXMgYWZ0ZXIgc3RhcnQgZGF0ZSBvZiBlZmZlY3RpdmUgcGVyaW9kXG4gICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID0gKCBNYXRoLmFicyhmcm9tRGlmZikgLyBmb3JtYXR0ZWRMaW5lcy5kYXlzICkgKiAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwXG5cbiAgICAgICAgbGV0IHRvRGF0ZSA9IG1vbWVudChlZmZlY3RpdmVQZXJpb2QudG8sICdZWVlZLU1NLUREJylcbiAgICAgICAgbGV0IHRvRGlmZiA9IG1vbWVudChmb3JtYXR0ZWRMaW5lcy5lbmREYXRlLCAnWVlZWS1NTS1ERCcpLmRpZmYobW9tZW50KHRvRGF0ZSkuYWRkKDEsICdkYXlzJyksICdkYXlzJywgdHJ1ZSlcblxuICAgICAgICBpZiAodG9EaWZmID4gMCkge1xuICAgICAgICAgIHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDAgLSAodG9EaWZmIC8gKGZvcm1hdHRlZExpbmVzLmRheXMvMTAwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uID0gdGltZWxpbmVFbmRQb3NpdGlvblxuXG4gICAgICAgIGxldCBkYXlzRm9yd2FyZCA9IChlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAvIDEwMCkgKiBmb3JtYXR0ZWRMaW5lcy5kYXlzXG4gICAgICAgIGVmZmVjdGl2ZVBlcmlvZC52YWxpZGF0aW9uTGV2ZWwgPSB2YWxpZGl0eShkYXlzRm9yd2FyZClcblxuICAgICAgICBwdWJsaWNMaW5lLmRheXNWYWxpZCA9IHZhbGlkUGVyaW9kKHB1YmxpY0xpbmUuZGF5c1ZhbGlkIHx8IHN0YXJ0RGF0ZSwgZnJvbURhdGUsIHRvRGF0ZSlcbiAgICAgIH0pXG4gICAgICBwdWJsaWNMaW5lLmRheXNWYWxpZCA9IGdldERheXNSYW5nZShzdGFydERhdGUsIHB1YmxpY0xpbmUuZGF5c1ZhbGlkKVxuXG4gICAgICBwdWJsaWNMaW5lLmxpbmVzLmZvckVhY2goIChsaW5lKSA9PiB7XG5cbiAgICAgICAgbGluZS50aW1ldGFibGVzLmZvckVhY2goICh0aW1ldGFibGUpID0+IHtcbiAgICAgICAgICB0aW1ldGFibGUucGVyaW9kcy5mb3JFYWNoKCAocGVyaW9kKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBmcm9tRGlmZiA9IHN0YXJ0RGF0ZS5kaWZmKG1vbWVudChwZXJpb2QuZnJvbSwgJ1lZWVktTU0tREQnKSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgICAgICBpZiAoZnJvbURpZmYgPCAwKSB7XG4gICAgICAgICAgICAgIHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gPSAoIE1hdGguYWJzKGZyb21EaWZmKSAvIGZvcm1hdHRlZExpbmVzLmRheXMgKSAqIDEwMFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDBcblxuICAgICAgICAgICAgbGV0IHRvRGlmZiA9IG1vbWVudChmb3JtYXR0ZWRMaW5lcy5lbmREYXRlLCAnWVlZWS1NTS1ERCcpLmRpZmYobW9tZW50KHBlcmlvZC50bywgJ1lZWVktTU0tREQnKS5hZGQoMSwgJ2RheXMnKSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgICAgICBpZiAodG9EaWZmID4gMCkge1xuICAgICAgICAgICAgICB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwIC0gKHRvRGlmZiAvIChmb3JtYXR0ZWRMaW5lcy5kYXlzLzEwMCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uID0gdGltZWxpbmVFbmRQb3NpdGlvblxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBsaW5lc01hcFtwdWJsaWNMaW5lLmxpbmVOdW1iZXJdID0gcHVibGljTGluZVxuICAgIH0pXG5cbiAgICBmb3JtYXR0ZWRMaW5lcy5saW5lc01hcCA9IGxpbmVzTWFwXG4gICAgZm9ybWF0dGVkTGluZXMudmFsaWREYXlzT2Zmc2V0ID0gMzNcbiAgICBmb3JtYXR0ZWRMaW5lcy52YWxpZEZyb21EYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuYWRkKDEyMCwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgIGZvcm1hdHRlZExpbmVzLmRheXNWYWxpZCA9IHZhbGlkRGF5cyhsaW5lU3RhdHMucHVibGljTGluZXMpXG4gICAgZm9ybWF0dGVkTGluZXMubWluRGF5cyA9IG1pbkRheXMoZm9ybWF0dGVkTGluZXMuZGF5c1ZhbGlkKVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZExpbmVzXG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciBpbiBnZXRMaW5lU3RhdHNcIiwgZSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==