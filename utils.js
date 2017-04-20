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
  if (daysForward > 127) {
    return 'VALID';
  } else if (daysForward >= 120) {
    return 'SOON_INVALID';
  } else if (daysForward === 0) {
    return 'INVALID';
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
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGJmYTA5N2FhMGFlZTAyM2MwNzNiPzg3YzIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIj8zYzYyIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmaWx0ZXJMaW5lcyIsImxpbmVEYXRhIiwic2VsZWN0ZWRTZWdtZW50IiwiZGF5c1ZhbGlkIiwiaGFzT3duUHJvcGVydHkiLCJsaW5lTnVtYmVycyIsImkiLCJ2YWxpZGl0eSIsImNhdGVnb3J5IiwibnVtRGF5c0F0TGVhc3RWYWxpZCIsImNvbnNvbGUiLCJsb2ciLCJzb3J0TWV0aG9kIiwiaW5kZXgiLCJhc2NlbmRpbmciLCJhIiwiYiIsInNvcnRMaW5lcyIsInNvcnRpbmciLCJvcmRlciIsInNvcnQiLCJyZXZlcnNlIiwiZGF5c0FzYyIsInNsaWNlIiwiZmlsdGVyIiwibGluZSIsImluZGV4T2YiLCJsaW5lTnVtYmVyIiwibWFwIiwiZGF5c0Rlc2MiLCJzb3J0SWNvbiIsImRlZiIsImRvd24iLCJ1cCIsImF6IiwiemEiLCJkYXlzRm9yd2FyZCIsInNlZ21lbnRDb2xvciIsIm1vZGlmaWVyIiwiZ3JlZW4iLCJ0b1N0cmluZyIsInNlZ21lbnROYW1lIiwic2VnbWVudCIsIm51bURheXMiLCJsb2NhbGUiLCJzZWdtZW50TWFwIiwicmVwbGFjZSIsInNlZ21lbnROYW1lMktleSIsInRleHQya2V5IiwiaWR4U3RhcnQiLCJpZHhFbmQiLCJwYXJzZUludCIsInN1YnN0cmluZyIsInZhbGlkUGVyaW9kIiwiZW5kRGF0ZSIsImZyb20iLCJ0byIsIm1vbWVudCIsImFkZCIsImlzQmV0d2VlbiIsInZhbGlkRGF5cyIsImxpbmVzIiwiZGF5cyIsImdldERheXNSYW5nZSIsInN0YXJ0RGF0ZSIsImVuZCIsImlzTW9tZW50IiwiZGlmZiIsIm1pbkRheXMiLCJsaW5lTnVtYmVyMkRheXMiLCJNYXRoIiwibWluIiwic29ydFZhbGlkaXR5IiwiZm9ybWF0TGluZVN0YXRzIiwiZGVmYXVsdE9iamVjdCIsImZvcm1hdHRlZExpbmVzIiwiaW52YWxpZCIsImxpbmVTdGF0cyIsInZhbGlkaXR5Q2F0ZWdvcmllcyIsInZhbGlkIiwic29vbkludmFsaWQiLCJhbGwiLCJjb25jYXQiLCJsaW5lc01hcCIsImZvcm1hdCIsInB1YmxpY0xpbmVzIiwiZm9yRWFjaCIsInB1YmxpY0xpbmUiLCJlZmZlY3RpdmVQZXJpb2RzIiwiZWZmZWN0aXZlUGVyaW9kIiwiZnJvbURhdGUiLCJmcm9tRGlmZiIsInRpbWVsaW5lU3RhcnRQb3NpdGlvbiIsImFicyIsInRpbWVsaW5lRW5kUG9zaXRpb24iLCJ0b0RhdGUiLCJ0b0RpZmYiLCJ2YWxpZGF0aW9uTGV2ZWwiLCJ0aW1ldGFibGVzIiwidGltZXRhYmxlIiwicGVyaW9kcyIsInBlcmlvZCIsInZhbGlkRGF5c09mZnNldCIsInZhbGlkRnJvbURhdGUiLCJlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEsK0M7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7O0FBRU8sSUFBTUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLFFBQUQsRUFBV0MsZUFBWCxFQUE0QkMsU0FBNUIsRUFBMEM7QUFDbkUsTUFBSUYsU0FBU0csY0FBVCxDQUF3QkYsZUFBeEIsQ0FBSixFQUE4QztBQUM1QyxXQUFPRCxTQUFTQyxlQUFULEVBQTBCRyxXQUFqQztBQUNEOztBQUVELE9BQUssSUFBSUMsQ0FBVCxJQUFjTCxTQUFTTSxRQUF2QixFQUFpQztBQUMvQixRQUFNQyxXQUFXUCxTQUFTTSxRQUFULENBQWtCRCxDQUFsQixDQUFqQjtBQUNBLFFBQUlFLFNBQVNDLG1CQUFULEtBQWlDTixTQUFyQyxFQUFnRDtBQUM5QyxhQUFPSyxTQUFTSCxXQUFoQjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDQUssVUFBUUMsR0FBUixDQUFZLHlCQUFaO0FBQ0EsU0FBT1YsU0FBUyxLQUFULEVBQWdCSSxXQUF2QjtBQUNELENBZk07O0FBaUJBLElBQU1PLGFBQWEsU0FBYkEsVUFBYSxHQUFrQztBQUFBLE1BQWhDQyxLQUFnQyx1RUFBeEIsQ0FBd0I7QUFBQSxNQUFyQkMsU0FBcUIsdUVBQVQsSUFBUzs7QUFDMUQsU0FBTyxVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDckIsUUFBSUQsRUFBRUYsS0FBRixNQUFhRyxFQUFFSCxLQUFGLENBQWpCLEVBQTJCO0FBQ3pCLGFBQU8sQ0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJRSxFQUFFRixLQUFGLElBQVlHLEVBQUVILEtBQUYsQ0FBaEIsRUFBMEI7QUFDL0IsYUFBUUMsU0FBRCxHQUFjLENBQUMsQ0FBZixHQUFtQixDQUExQjtBQUNELEtBRk0sTUFFQTtBQUNMLGFBQVFBLFNBQUQsR0FBYyxDQUFkLEdBQWtCLENBQUMsQ0FBMUI7QUFDRDtBQUNGLEdBUkQ7QUFTRCxDQVZNOztBQVlBLElBQU1HLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxPQUFELEVBQVVqQixRQUFWLEVBQW9CQyxlQUFwQixFQUFxQ0MsU0FBckMsRUFBbUQ7QUFDMUUsTUFBTWdCLFFBQVFuQixZQUFZQyxRQUFaLEVBQXNCQyxlQUF0QixFQUF1Q0MsU0FBdkMsQ0FBZDs7QUFFQSxVQUFRZSxPQUFSO0FBQ0U7QUFDRSxhQUFPQyxLQUFQO0FBQ0YsU0FBSyxDQUFMO0FBQ0UsYUFBT0EsTUFBTUMsSUFBTixFQUFQO0FBQ0YsU0FBSyxDQUFMO0FBQ0UsYUFBT0QsTUFBTUMsSUFBTixHQUFhQyxPQUFiLEVBQVA7QUFDRixTQUFLLENBQUw7QUFDRSxVQUFJQyxVQUFVckIsU0FBU0UsU0FBVCxDQUFtQm9CLEtBQW5CLEdBQTJCSCxJQUEzQixDQUFpQyxNQUFLUixVQUFMLENBQWdCLE1BQWhCLEVBQXdCLElBQXhCLENBQWpDLENBQWQ7QUFDQSxhQUFPVSxRQUFRRSxNQUFSLENBQWdCLFVBQUNDLElBQUQ7QUFBQSxlQUFVTixNQUFNTyxPQUFOLENBQWNELEtBQUtFLFVBQW5CLE1BQW1DLENBQUMsQ0FBOUM7QUFBQSxPQUFoQixFQUFpRUMsR0FBakUsQ0FBcUUsVUFBQ0gsSUFBRDtBQUFBLGVBQVVBLEtBQUtFLFVBQWY7QUFBQSxPQUFyRSxDQUFQO0FBQ0YsU0FBSyxDQUFMO0FBQ0UsVUFBSUUsV0FBVzVCLFNBQVNFLFNBQVQsQ0FBbUJvQixLQUFuQixHQUEyQkgsSUFBM0IsQ0FBaUMsTUFBS1IsVUFBTCxDQUFnQixNQUFoQixFQUF3QixLQUF4QixDQUFqQyxDQUFmO0FBQ0EsYUFBT2lCLFNBQVNMLE1BQVQsQ0FBaUIsVUFBQ0MsSUFBRDtBQUFBLGVBQVVOLE1BQU1PLE9BQU4sQ0FBY0QsS0FBS0UsVUFBbkIsTUFBbUMsQ0FBQyxDQUE5QztBQUFBLE9BQWpCLEVBQW1FQyxHQUFuRSxDQUF3RSxVQUFDSCxJQUFEO0FBQUEsZUFBVUEsS0FBS0UsVUFBZjtBQUFBLE9BQXhFLENBQVA7QUFaSjtBQWNELENBakJNOztBQW1CQSxJQUFNRyxXQUFXLFNBQVhBLFFBQVcsQ0FBQ1osT0FBRCxFQUFhO0FBQ25DLE1BQUlhLE1BQU07QUFBQTtBQUFBLE1BQU0sT0FBTSw0QkFBWixFQUF5QyxPQUFNLElBQS9DLEVBQW9ELFFBQU8sSUFBM0QsRUFBZ0UsU0FBUSxXQUF4RTtBQUFvRiwwRUFBTSxHQUFFLDhDQUFSO0FBQXBGLEdBQVY7QUFDQSxNQUFJQyxPQUFPO0FBQUE7QUFBQSxNQUFLLE9BQU0sNEJBQVgsRUFBd0MsT0FBTSxJQUE5QyxFQUFtRCxRQUFPLElBQTFELEVBQStELFNBQVEsV0FBdkU7QUFBbUYsMEVBQU0sR0FBRSxpREFBUjtBQUFuRixHQUFYO0FBQ0EsTUFBSUMsS0FBSztBQUFBO0FBQUEsTUFBSyxPQUFNLDRCQUFYLEVBQXdDLE9BQU0sSUFBOUMsRUFBbUQsUUFBTyxJQUExRCxFQUErRCxTQUFRLFdBQXZFO0FBQW1GLDBFQUFNLEdBQUUsZ0RBQVI7QUFBbkYsR0FBVDtBQUNBLE1BQUlDLEtBQUs7QUFBQTtBQUFBLE1BQUssT0FBTSw0QkFBWCxFQUF3QyxPQUFNLElBQTlDLEVBQW1ELFFBQU8sSUFBMUQsRUFBK0QsU0FBUSxXQUF2RTtBQUFtRjtBQUFBO0FBQUEsUUFBTSxHQUFFLElBQVIsRUFBYSxHQUFFLElBQWYsRUFBb0IsWUFBVyxRQUEvQjtBQUFBO0FBQUE7QUFBbkYsR0FBVDtBQUNBLE1BQUlDLEtBQUs7QUFBQTtBQUFBLE1BQUssT0FBTSw0QkFBWCxFQUF3QyxPQUFNLElBQTlDLEVBQW1ELFFBQU8sSUFBMUQsRUFBK0QsU0FBUSxXQUF2RTtBQUFtRjtBQUFBO0FBQUEsUUFBTSxHQUFFLElBQVIsRUFBYSxHQUFFLElBQWYsRUFBb0IsWUFBVyxRQUEvQjtBQUFBO0FBQUE7QUFBbkYsR0FBVDtBQUNBLFVBQVFqQixPQUFSO0FBQ0U7QUFDQSxTQUFLLENBQUw7QUFDRSxhQUFPYSxHQUFQO0FBQ0YsU0FBSyxDQUFMO0FBQ0UsYUFBTztBQUFBO0FBQUE7QUFBTUcsVUFBTjtBQUFVRjtBQUFWLE9BQVA7QUFDRixTQUFLLENBQUw7QUFDRSxhQUFPO0FBQUE7QUFBQTtBQUFNRyxVQUFOO0FBQVVGO0FBQVYsT0FBUDtBQUNGLFNBQUssQ0FBTDtBQUNFLGFBQU9ELElBQVA7QUFDRixTQUFLLENBQUw7QUFDRSxhQUFPQyxFQUFQO0FBWEo7QUFhRCxDQW5CTTs7QUFxQkEsSUFBTTFCLFdBQVcsU0FBWEEsUUFBVyxDQUFDNkIsV0FBRCxFQUFpQjtBQUN2QyxNQUFJQSxjQUFjLEdBQWxCLEVBQXVCO0FBQ3JCLFdBQU8sT0FBUDtBQUNELEdBRkQsTUFFTyxJQUFJQSxlQUFlLEdBQW5CLEVBQXdCO0FBQzdCLFdBQU8sY0FBUDtBQUNELEdBRk0sTUFFQSxJQUFJQSxnQkFBZ0IsQ0FBcEIsRUFBdUI7QUFDNUIsV0FBTyxTQUFQO0FBQ0Q7QUFDRCxTQUFPLFNBQVA7QUFDRCxDQVRNOztBQVdBLElBQU1DLGVBQWUsU0FBZkEsWUFBZSxDQUFDbEMsU0FBRCxFQUE2QjtBQUFBLE1BQWpCbUMsUUFBaUIsdUVBQU4sQ0FBTTs7QUFDdkQsTUFBSUMsUUFBUSxNQUFNcEMsU0FBTixHQUFrQm1DLFFBQTlCO0FBQ0EsU0FBTyxRQUFRQyxNQUFNQyxRQUFOLENBQWUsRUFBZixDQUFSLEdBQTRCLElBQW5DO0FBQ0QsQ0FITTs7QUFLQSxJQUFNQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRCxFQUFVQyxPQUFWLEVBQW1CQyxNQUFuQixFQUE4QjtBQUN2RCxNQUFJQyxXQUFXRCxNQUFYLEVBQW1CeEMsY0FBbkIsQ0FBa0NzQyxPQUFsQyxLQUE4Q0EsWUFBWSxTQUE5RCxFQUF5RTtBQUN2RSxXQUFPRyxXQUFXRCxNQUFYLEVBQW1CRixPQUFuQixDQUFQO0FBQ0Q7O0FBRUQsU0FBT0csV0FBV0QsTUFBWCxFQUFtQixTQUFuQixFQUE4QkUsT0FBOUIsQ0FBc0MsTUFBdEMsRUFBOENILE9BQTlDLENBQVA7QUFDRCxDQU5NOztBQVFBLElBQU1JLGtCQUFrQixTQUFsQkEsZUFBa0IsQ0FBQ04sV0FBRCxFQUFjRyxNQUFkLEVBQXlCO0FBQ3RELE1BQUksQ0FBQ0ksU0FBU0osTUFBVCxFQUFpQnhDLGNBQWpCLENBQWdDcUMsV0FBaEMsQ0FBTCxFQUFtRDtBQUNqRCxRQUFJUSxXQUFXUixZQUFZZixPQUFaLENBQW9CLElBQXBCLElBQTRCLENBQTNDO0FBQ0EsUUFBSXdCLFNBQVNULFlBQVlmLE9BQVosQ0FBb0IsUUFBcEIsQ0FBYjs7QUFFQSxXQUFPLEVBQUNnQixTQUFTLFNBQVYsRUFBcUJ2QyxXQUFXZ0QsU0FBU1YsWUFBWVcsU0FBWixDQUFzQkgsUUFBdEIsRUFBZ0NDLE1BQWhDLENBQVQsQ0FBaEMsRUFBUDtBQUNEO0FBQ0QsU0FBTyxFQUFDUixTQUFTTSxTQUFTSixNQUFULEVBQWlCSCxXQUFqQixDQUFWLEVBQXlDdEMsV0FBVyxDQUFwRCxFQUFQO0FBQ0QsQ0FSTTs7QUFVUCxJQUFNMEMsYUFBYSxTQUFiQSxVQUFhLENBQUNELE1BQUQsRUFBWTtBQUM3QixVQUFRQSxNQUFSO0FBQ0UsU0FBSyxJQUFMO0FBQ0UsYUFBTztBQUNMLGlCQUFVLHlCQURMO0FBRUwsdUJBQWdCLDhDQUZYO0FBR0wsbUJBQVksd0NBSFA7QUFJTCxlQUFRLGFBSkg7QUFLTCxtQkFBVztBQUxOLE9BQVA7QUFPRjtBQUNBLFNBQUssSUFBTDtBQUNFLGFBQU87QUFDTCxpQkFBVSxhQURMO0FBRUwsdUJBQWdCLG9DQUZYO0FBR0wsbUJBQVksZUFIUDtBQUlMLGVBQVEsV0FKSDtBQUtMLG1CQUFXO0FBTE4sT0FBUDtBQVhKO0FBbUJELENBcEJEOztBQXNCQSxJQUFNSSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0osTUFBRCxFQUFZO0FBQzNCLFVBQVFBLE1BQVI7QUFDRSxTQUFLLElBQUw7QUFDRSxhQUFPO0FBQ0wsdUJBQWdCLEtBRFg7QUFFTCxtQ0FBNEIsT0FGdkI7QUFHTCx3REFBaUQsYUFINUM7QUFJTCxrREFBMkM7QUFKdEMsT0FBUDtBQU1GO0FBQ0EsU0FBSyxJQUFMO0FBQ0UsYUFBTyxFQUFDLGFBQWMsS0FBZjtBQUNMLHVCQUFnQixPQURYO0FBRUwsOENBQXVDLGFBRmxDO0FBR0wseUJBQWtCLFNBSGIsRUFBUDtBQVZKO0FBZUQsQ0FoQkQ7O0FBa0JBLElBQU1TLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQVVDLElBQVYsRUFBZ0JDLEVBQWhCO0FBQUEsU0FBd0IsOENBQUFDLENBQU9ILE9BQVAsRUFBZ0JJLEdBQWhCLENBQW9CLENBQXBCLEVBQXVCLE1BQXZCLEVBQStCQyxTQUEvQixDQUF5Q0osSUFBekMsRUFBK0NDLEVBQS9DLEVBQW1ELE1BQW5ELEVBQTJELElBQTNELENBQUQsR0FBcUVBLEVBQXJFLEdBQTBFRixPQUFqRztBQUFBLENBQXBCOztBQUVBLElBQU1NLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsU0FBV0EsTUFBTWpDLEdBQU4sQ0FBVSxnQkFBUTtBQUFFLFdBQU8sRUFBQ0QsWUFBWUYsS0FBS0UsVUFBbEIsRUFBOEJtQyxNQUFNckMsS0FBS3RCLFNBQXpDLEVBQVA7QUFBNEQsR0FBaEYsQ0FBWDtBQUFBLENBQWxCOztBQUVBLElBQU00RCxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsU0FBRDtBQUFBLE1BQVlDLEdBQVosdUVBQWtCLENBQWxCO0FBQUEsU0FBd0IsOENBQUFSLENBQU9TLFFBQVAsQ0FBZ0JELEdBQWhCLElBQXVCQSxJQUFJRSxJQUFKLENBQVNILFNBQVQsRUFBb0IsTUFBcEIsQ0FBdkIsR0FBcURDLEdBQTdFO0FBQUEsQ0FBckI7O0FBRUEsSUFBTUcsVUFBVSxTQUFWQSxPQUFVLENBQUNDLGVBQUQsRUFBcUI7QUFDbkMsTUFBSVAsT0FBT1EsS0FBS0MsR0FBTCxnQ0FBWUYsZ0JBQWdCekMsR0FBaEIsQ0FBcUI7QUFBQSxXQUFRSCxLQUFLcUMsSUFBYjtBQUFBLEdBQXJCLENBQVosRUFBWDtBQUNBLFNBQU87QUFDTEEsVUFBTUEsSUFERDtBQUVMdkQsY0FBVUEsU0FBU3VELElBQVQ7QUFGTCxHQUFQO0FBSUQsQ0FORDs7QUFRQSxJQUFNVSxlQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFZakUsU0FBU2EsSUFBVCxDQUFlLFVBQUNMLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVELEVBQUUscUJBQUYsSUFBMkJDLEVBQUUscUJBQUYsQ0FBM0IsR0FBc0QsQ0FBQyxDQUF2RCxHQUEyRCxDQUFyRTtBQUFBLEdBQWYsQ0FBWjtBQUFBLENBQXJCOztBQUVPLElBQU15RCxrQkFBa0IsU0FBbEJBLGVBQWtCLFlBQWE7O0FBRTFDLE1BQUk7QUFBQTs7QUFFRixRQUFNQyxnQkFBZ0IsRUFBRXJFLGFBQWEsRUFBZixFQUF0Qjs7QUFFQSxRQUFJc0UsaUJBQWlCO0FBQ25CQyxlQUFTQyxVQUFVQyxrQkFBVixDQUNOdEQsTUFETSxDQUNFLFVBQUNoQixRQUFEO0FBQUEsZUFBY0EsU0FBU0MsbUJBQVQsR0FBK0IsR0FBN0M7QUFBQSxPQURGLEVBQ29ELENBRHBELEtBQzBEaUUsYUFGaEQ7QUFHbkJLLGFBQU9GLFVBQVVDLGtCQUFWLENBQ0p0RCxNQURJLENBQ0ksVUFBQ2hCLFFBQUQ7QUFBQSxlQUFjQSxTQUFTQyxtQkFBVCxJQUFnQyxHQUE5QztBQUFBLE9BREosRUFDdUQsQ0FEdkQsS0FDNkRpRSxhQUpqRDtBQUtuQk0sbUJBQWFILFVBQVVDLGtCQUFWLENBQ1Z0RCxNQURVLENBQ0YsVUFBQ2hCLFFBQUQ7QUFBQSxlQUFlQSxTQUFTQyxtQkFBVCxJQUFnQyxHQUFoQyxJQUF1Q0QsU0FBU0MsbUJBQVQsR0FBK0IsR0FBckY7QUFBQSxPQURFLEVBQ3lGLENBRHpGLEtBQytGaUUsYUFOekY7QUFPbkJuRSxnQkFBVWlFLGFBQWFLLFVBQVVDLGtCQUF2QixDQVBTO0FBUW5CRyxXQUFLUDtBQVJjLEtBQXJCOztBQVdBQyxtQkFBZU0sR0FBZixDQUFtQjVFLFdBQW5CLEdBQWlDLFlBQUc2RSxNQUFILGdDQUFjUCxlQUFlcEUsUUFBZixDQUF3QnFCLEdBQXhCLENBQTRCO0FBQUEsYUFBU2lDLE1BQU14RCxXQUFmO0FBQUEsS0FBNUIsQ0FBZCxFQUFqQzs7QUFFQSxRQUFJOEUsV0FBVyxFQUFmOztBQUVBLFFBQUluQixZQUFZLDhDQUFBUCxDQUFPb0IsVUFBVWIsU0FBakIsRUFBNEIsWUFBNUIsQ0FBaEI7QUFDQSxRQUFJVixVQUFVLDhDQUFBRyxDQUFPTyxTQUFQLEVBQWtCTixHQUFsQixDQUFzQm1CLFVBQVVmLElBQWhDLEVBQXNDLE1BQXRDLENBQWQ7O0FBRUFhLG1CQUFlWCxTQUFmLEdBQTJCQSxVQUFVb0IsTUFBVixDQUFpQixZQUFqQixDQUEzQjtBQUNBVCxtQkFBZWIsSUFBZixHQUFzQmUsVUFBVWYsSUFBaEM7QUFDQWEsbUJBQWVyQixPQUFmLEdBQXlCQSxRQUFROEIsTUFBUixDQUFlLFlBQWYsQ0FBekI7O0FBRUFQLGNBQVVRLFdBQVYsQ0FBc0JDLE9BQXRCLENBQWdDLHNCQUFjOztBQUU1Q0MsaUJBQVdDLGdCQUFYLENBQTRCRixPQUE1QixDQUFxQyxVQUFDRyxlQUFELEVBQXFCOztBQUV4RCxZQUFJQyxXQUFXLDhDQUFBakMsQ0FBT2dDLGdCQUFnQmxDLElBQXZCLEVBQTZCLFlBQTdCLENBQWY7QUFDQSxZQUFJb0MsV0FBVzNCLFVBQVVHLElBQVYsQ0FBZXVCLFFBQWYsRUFBeUIsTUFBekIsRUFBaUMsSUFBakMsQ0FBZjs7QUFFQSxZQUFJQyxXQUFXLENBQWYsRUFBa0I7QUFDaEI7QUFDQUYsMEJBQWdCRyxxQkFBaEIsR0FBd0MsQ0FBeEM7QUFDRCxTQUhELE1BR087QUFDTEgsMEJBQWdCRyxxQkFBaEIsR0FBMEN0QixLQUFLdUIsR0FBTCxDQUFTRixRQUFULElBQXFCaEIsZUFBZWIsSUFBdEMsR0FBK0MsR0FBdkY7QUFDRDs7QUFFRCxZQUFJZ0Msc0JBQXNCLEdBQTFCOztBQUVBLFlBQUlDLFNBQVMsOENBQUF0QyxDQUFPZ0MsZ0JBQWdCakMsRUFBdkIsRUFBMkIsWUFBM0IsQ0FBYjtBQUNBLFlBQUl3QyxTQUFTLDhDQUFBdkMsQ0FBT2tCLGVBQWVyQixPQUF0QixFQUErQixZQUEvQixFQUE2Q2EsSUFBN0MsQ0FBa0QsOENBQUFWLENBQU9zQyxNQUFQLEVBQWVyQyxHQUFmLENBQW1CLENBQW5CLEVBQXNCLE1BQXRCLENBQWxELEVBQWlGLE1BQWpGLEVBQXlGLElBQXpGLENBQWI7O0FBRUEsWUFBSXNDLFNBQVMsQ0FBYixFQUFnQjtBQUNkRixnQ0FBc0IsTUFBT0UsVUFBVXJCLGVBQWViLElBQWYsR0FBb0IsR0FBOUIsQ0FBN0I7QUFDRDs7QUFFRDJCLHdCQUFnQkssbUJBQWhCLEdBQXNDQSxtQkFBdEM7O0FBRUEsWUFBSTFELGNBQWVxRCxnQkFBZ0JLLG1CQUFoQixHQUFzQyxHQUF2QyxHQUE4Q25CLGVBQWViLElBQS9FO0FBQ0EyQix3QkFBZ0JRLGVBQWhCLEdBQWtDMUYsU0FBUzZCLFdBQVQsQ0FBbEM7O0FBRUFtRCxtQkFBV3BGLFNBQVgsR0FBdUJrRCxZQUFZa0MsV0FBV3BGLFNBQVgsSUFBd0I2RCxTQUFwQyxFQUErQzBCLFFBQS9DLEVBQXlESyxNQUF6RCxDQUF2QjtBQUNELE9BM0JEO0FBNEJBUixpQkFBV3BGLFNBQVgsR0FBdUI0RCxhQUFhQyxTQUFiLEVBQXdCdUIsV0FBV3BGLFNBQW5DLENBQXZCOztBQUVBb0YsaUJBQVcxQixLQUFYLENBQWlCeUIsT0FBakIsQ0FBMEIsVUFBQzdELElBQUQsRUFBVTs7QUFFbENBLGFBQUt5RSxVQUFMLENBQWdCWixPQUFoQixDQUF5QixVQUFDYSxTQUFELEVBQWU7QUFDdENBLG9CQUFVQyxPQUFWLENBQWtCZCxPQUFsQixDQUEyQixVQUFDZSxNQUFELEVBQVk7O0FBRXJDLGdCQUFJVixXQUFXM0IsVUFBVUcsSUFBVixDQUFlLDhDQUFBVixDQUFPNEMsT0FBTzlDLElBQWQsRUFBb0IsWUFBcEIsQ0FBZixFQUFrRCxNQUFsRCxFQUEwRCxJQUExRCxDQUFmOztBQUVBLGdCQUFJb0MsV0FBVyxDQUFmLEVBQWtCO0FBQ2hCVSxxQkFBT1QscUJBQVAsR0FBaUN0QixLQUFLdUIsR0FBTCxDQUFTRixRQUFULElBQXFCaEIsZUFBZWIsSUFBdEMsR0FBK0MsR0FBOUU7QUFDRCxhQUZELE1BRU87QUFDTHVDLHFCQUFPVCxxQkFBUCxHQUErQixDQUEvQjtBQUNEOztBQUVELGdCQUFJRSxzQkFBc0IsR0FBMUI7O0FBRUEsZ0JBQUlFLFNBQVMsOENBQUF2QyxDQUFPa0IsZUFBZXJCLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDYSxJQUE3QyxDQUFrRCw4Q0FBQVYsQ0FBTzRDLE9BQU83QyxFQUFkLEVBQWtCLFlBQWxCLEVBQWdDRSxHQUFoQyxDQUFvQyxDQUFwQyxFQUF1QyxNQUF2QyxDQUFsRCxFQUFrRyxNQUFsRyxFQUEwRyxJQUExRyxDQUFiOztBQUVBLGdCQUFJc0MsU0FBUyxDQUFiLEVBQWdCO0FBQ2RGLG9DQUFzQixNQUFPRSxVQUFVckIsZUFBZWIsSUFBZixHQUFvQixHQUE5QixDQUE3QjtBQUNEOztBQUVEdUMsbUJBQU9QLG1CQUFQLEdBQTZCQSxtQkFBN0I7QUFDRCxXQW5CRDtBQW9CRCxTQXJCRDtBQXNCRCxPQXhCRDs7QUEwQkFYLGVBQVNJLFdBQVc1RCxVQUFwQixJQUFrQzRELFVBQWxDO0FBQ0QsS0EzREQ7O0FBNkRBWixtQkFBZVEsUUFBZixHQUEwQkEsUUFBMUI7QUFDQVIsbUJBQWUyQixlQUFmLEdBQWlDLEVBQWpDO0FBQ0EzQixtQkFBZTRCLGFBQWYsR0FBK0IsOENBQUE5QyxDQUFPTyxTQUFQLEVBQWtCTixHQUFsQixDQUFzQixHQUF0QixFQUEyQixNQUEzQixFQUFtQzBCLE1BQW5DLENBQTBDLFlBQTFDLENBQS9CO0FBQ0FULG1CQUFleEUsU0FBZixHQUEyQnlELFVBQVVpQixVQUFVUSxXQUFwQixDQUEzQjtBQUNBVixtQkFBZVAsT0FBZixHQUF5QkEsUUFBUU8sZUFBZXhFLFNBQXZCLENBQXpCOztBQUVBLFdBQU93RSxjQUFQO0FBRUQsR0EvRkQsQ0ErRkUsT0FBTzZCLENBQVAsRUFBVTtBQUNWOUYsWUFBUStGLEtBQVIsQ0FBYyx1QkFBZCxFQUF1Q0QsQ0FBdkM7QUFDRDtBQUNGLENBcEdNLEMiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcIm1vbWVudFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcIm1vbWVudFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZmEwOTdhYTBhZWUwMjNjMDczYiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgZmlsdGVyTGluZXMgPSAobGluZURhdGEsIHNlbGVjdGVkU2VnbWVudCwgZGF5c1ZhbGlkKSA9PiB7XG4gIGlmIChsaW5lRGF0YS5oYXNPd25Qcm9wZXJ0eShzZWxlY3RlZFNlZ21lbnQpKSB7XG4gICAgcmV0dXJuIGxpbmVEYXRhW3NlbGVjdGVkU2VnbWVudF0ubGluZU51bWJlcnNcbiAgfVxuXG4gIGZvciAobGV0IGkgaW4gbGluZURhdGEudmFsaWRpdHkpIHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGxpbmVEYXRhLnZhbGlkaXR5W2ldXG4gICAgaWYgKGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPT09IGRheXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5LmxpbmVOdW1iZXJzXG4gICAgfVxuICB9XG5cbiAgLy8gZmFsbGJhY2sgdG8gYWxsXG4gIGNvbnNvbGUubG9nKFwiZXJyb3IsIHNob3dpbmcgYWxsIGRhdGFcIilcbiAgcmV0dXJuIGxpbmVEYXRhWydhbGwnXS5saW5lTnVtYmVyc1xufVxuXG5leHBvcnQgY29uc3Qgc29ydE1ldGhvZCA9ICggaW5kZXggPSAwLCBhc2NlbmRpbmcgPSB0cnVlKSA9PiB7XG4gIHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgIGlmIChhW2luZGV4XSA9PT0gYltpbmRleF0pIHtcbiAgICAgIHJldHVybiAwXG4gICAgfSBlbHNlIGlmIChhW2luZGV4XSA8ICBiW2luZGV4XSkge1xuICAgICAgcmV0dXJuIChhc2NlbmRpbmcpID8gLTEgOiAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoYXNjZW5kaW5nKSA/IDEgOiAtMVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc29ydExpbmVzID0gKHNvcnRpbmcsIGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZCkgPT4ge1xuICBjb25zdCBvcmRlciA9IGZpbHRlckxpbmVzKGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZClcblxuICBzd2l0Y2ggKHNvcnRpbmcpIHtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG9yZGVyXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIG9yZGVyLnNvcnQoKVxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBvcmRlci5zb3J0KCkucmV2ZXJzZSgpXG4gICAgY2FzZSAzOlxuICAgICAgbGV0IGRheXNBc2MgPSBsaW5lRGF0YS5kYXlzVmFsaWQuc2xpY2UoKS5zb3J0KCB0aGlzLnNvcnRNZXRob2QoJ2RheXMnLCB0cnVlKSApXG4gICAgICByZXR1cm4gZGF5c0FzYy5maWx0ZXIoIChsaW5lKSA9PiBvcmRlci5pbmRleE9mKGxpbmUubGluZU51bWJlcikgIT09IC0xKS5tYXAoKGxpbmUpID0+IGxpbmUubGluZU51bWJlcilcbiAgICBjYXNlIDQ6XG4gICAgICBsZXQgZGF5c0Rlc2MgPSBsaW5lRGF0YS5kYXlzVmFsaWQuc2xpY2UoKS5zb3J0KCB0aGlzLnNvcnRNZXRob2QoJ2RheXMnLCBmYWxzZSkgKVxuICAgICAgcmV0dXJuIGRheXNEZXNjLmZpbHRlciggKGxpbmUpID0+IG9yZGVyLmluZGV4T2YobGluZS5saW5lTnVtYmVyKSAhPT0gLTEgKS5tYXAoIChsaW5lKSA9PiBsaW5lLmxpbmVOdW1iZXIpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRJY29uID0gKHNvcnRpbmcpID0+IHtcbiAgbGV0IGRlZiA9IDxzdmcgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDI0XCI+PHBhdGggZD1cIk0zIDE4aDZ2LTJIM3Yyek0zIDZ2MmgxOFY2SDN6bTAgN2gxMnYtMkgzdjJ6XCIvPjwvc3ZnPlxuICBsZXQgZG93biA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMjRcIj48cGF0aCBkPVwiTTcuNDEgNy44NEwxMiAxMi40Mmw0LjU5LTQuNThMMTggOS4yNWwtNiA2LTYtNnpcIi8+PC9zdmc+XG4gIGxldCB1cCA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMjRcIj48cGF0aCBkPVwiTTcuNDEgMTUuNDFMMTIgMTAuODNsNC41OSA0LjU4TDE4IDE0bC02LTYtNiA2elwiLz48L3N2Zz5cbiAgbGV0IGF6ID0gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAxOFwiPjx0ZXh0IHg9XCIxMlwiIHk9XCIxMlwiIHRleHRBbmNob3I9XCJtaWRkbGVcIj5BWjwvdGV4dD48L3N2Zz5cbiAgbGV0IHphID0gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAxOFwiPjx0ZXh0IHg9XCIxMlwiIHk9XCIxMlwiIHRleHRBbmNob3I9XCJtaWRkbGVcIj5aQTwvdGV4dD48L3N2Zz5cbiAgc3dpdGNoIChzb3J0aW5nKSB7XG4gICAgZGVmYXVsdDpcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gZGVmXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIDxkaXY+e2F6fXtkb3dufTwvZGl2PlxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiA8ZGl2Pnt6YX17dXB9PC9kaXY+XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGRvd25cbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gdXBcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdmFsaWRpdHkgPSAoZGF5c0ZvcndhcmQpID0+IHtcbiAgaWYgKGRheXNGb3J3YXJkID4gMTI3KSB7XG4gICAgcmV0dXJuICdWQUxJRCdcbiAgfSBlbHNlIGlmIChkYXlzRm9yd2FyZCA+PSAxMjApIHtcbiAgICByZXR1cm4gJ1NPT05fSU5WQUxJRCdcbiAgfSBlbHNlIGlmIChkYXlzRm9yd2FyZCA9PT0gMCkge1xuICAgIHJldHVybiAnSU5WQUxJRCdcbiAgfVxuICByZXR1cm4gJ0VYUElSRUQnXG59XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50Q29sb3IgPSAoZGF5c1ZhbGlkLCBtb2RpZmllciA9IDApID0+IHtcbiAgbGV0IGdyZWVuID0gMTIwICsgZGF5c1ZhbGlkICsgbW9kaWZpZXJcbiAgcmV0dXJuICcjRkYnICsgZ3JlZW4udG9TdHJpbmcoMTYpICsnMDAnXG59XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50TmFtZSA9IChzZWdtZW50LCBudW1EYXlzLCBsb2NhbGUpID0+IHtcbiAgaWYgKHNlZ21lbnRNYXAobG9jYWxlKS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50KSAmJiBzZWdtZW50ICE9PSAnZHluYW1pYycpIHtcbiAgICByZXR1cm4gc2VnbWVudE1hcChsb2NhbGUpW3NlZ21lbnRdXG4gIH1cblxuICByZXR1cm4gc2VnbWVudE1hcChsb2NhbGUpWydkeW5hbWljJ10ucmVwbGFjZSgnREFZUycsIG51bURheXMpXG59XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50TmFtZTJLZXkgPSAoc2VnbWVudE5hbWUsIGxvY2FsZSkgPT4ge1xuICBpZiAoIXRleHQya2V5KGxvY2FsZSkuaGFzT3duUHJvcGVydHkoc2VnbWVudE5hbWUpKSB7XG4gICAgbGV0IGlkeFN0YXJ0ID0gc2VnbWVudE5hbWUuaW5kZXhPZignLSAnKSArIDJcbiAgICBsZXQgaWR4RW5kID0gc2VnbWVudE5hbWUuaW5kZXhPZignIGRhZ2VyJylcblxuICAgIHJldHVybiB7c2VnbWVudDogJ2R5bmFtaWMnLCBkYXlzVmFsaWQ6IHBhcnNlSW50KHNlZ21lbnROYW1lLnN1YnN0cmluZyhpZHhTdGFydCwgaWR4RW5kKSl9XG4gIH1cbiAgcmV0dXJuIHtzZWdtZW50OiB0ZXh0MmtleShsb2NhbGUpW3NlZ21lbnROYW1lXSwgZGF5c1ZhbGlkOiAwfVxufVxuXG5jb25zdCBzZWdtZW50TWFwID0gKGxvY2FsZSkgPT4ge1xuICBzd2l0Y2ggKGxvY2FsZSkge1xuICAgIGNhc2UgJ25iJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgICd2YWxpZCcgOiAnTGluamVyIGkgZ3lsZGlnIHBlcmlvZGUnLFxuICAgICAgICAnc29vbkludmFsaWQnIDogJ0xpbmplciBtZWQgZ3lsZGlnaGV0c3BlcmlvZGUgc29tIHNuYXJ0IHV0Z8OlcicsXG4gICAgICAgICdpbnZhbGlkJyA6ICdMaW5qZXIgbWVkIG1hbmdsZW5kZSBneWxkaWdoZXRzcGVyaW9kZScsXG4gICAgICAgICdhbGwnIDogJ0FsbGUgbGluamVyJyxcbiAgICAgICAgJ2R5bmFtaWMnOiAnVXRnw6V0dGUgbGluamVyIC0gREFZUyBkYWdlciBpZ2plbicsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICBjYXNlICdlbic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAndmFsaWQnIDogJ1ZhbGlkIGxpbmVzJyxcbiAgICAgICAgJ3Nvb25JbnZhbGlkJyA6ICdWYWxpZCBsaW5lcyB0aGF0IGFyZSBzb29uIGV4cGlyaW5nJyxcbiAgICAgICAgJ2ludmFsaWQnIDogJ0ludmFsaWQgbGluZXMnLFxuICAgICAgICAnYWxsJyA6ICdBbGwgbGluZXMnLFxuICAgICAgICAnZHluYW1pYyc6ICdFeHBpcmVkIGxpbmVzIC0gREFZUyBkYXlzIGxlZnQnXG4gICAgICB9XG4gIH1cbn1cblxuY29uc3QgdGV4dDJrZXkgPSAobG9jYWxlKSA9PiB7XG4gIHN3aXRjaCAobG9jYWxlKSB7XG4gICAgY2FzZSAnbmInOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0FsbGUgbGluamVyJyA6ICdhbGwnLFxuICAgICAgICAnTGluamVyIGkgZ3lsZGlnIHBlcmlvZGUnIDogJ3ZhbGlkJyxcbiAgICAgICAgJ0xpbmplciBtZWQgZ3lsZGlnaGV0c3BlcmlvZGUgc29tIHNuYXJ0IHV0Z8OlcicgOiAnc29vbkludmFsaWQnLFxuICAgICAgICAnTGluamVyIG1lZCBtYW5nbGVuZGUgZ3lsZGlnaGV0c3BlcmlvZGUnIDogJ2ludmFsaWQnLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgY2FzZSAnZW4nOlxuICAgICAgcmV0dXJuIHsnQWxsIGxpbmVzJyA6ICdhbGwnLFxuICAgICAgICAnVmFsaWQgbGluZXMnIDogJ3ZhbGlkJyxcbiAgICAgICAgJ1ZhbGlkIGxpbmVzIHRoYXQgYXJlIHNvb24gZXhwaXJpbmcnIDogJ3Nvb25JbnZhbGlkJyxcbiAgICAgICAgJ0ludmFsaWQgbGluZXMnIDogJ2ludmFsaWQnLH1cbiAgfVxufVxuXG5jb25zdCB2YWxpZFBlcmlvZCA9IChlbmREYXRlLCBmcm9tLCB0bykgPT4gKG1vbWVudChlbmREYXRlKS5hZGQoMSwgJ2RheXMnKS5pc0JldHdlZW4oZnJvbSwgdG8sICdkYXlzJywgJ1tdJykpID8gdG8gOiBlbmREYXRlXG5cbmNvbnN0IHZhbGlkRGF5cyA9IChsaW5lcykgPT4gbGluZXMubWFwKGxpbmUgPT4geyByZXR1cm4ge2xpbmVOdW1iZXI6IGxpbmUubGluZU51bWJlciwgZGF5czogbGluZS5kYXlzVmFsaWR9IH0pXG5cbmNvbnN0IGdldERheXNSYW5nZSA9IChzdGFydERhdGUsIGVuZCA9IDApID0+IG1vbWVudC5pc01vbWVudChlbmQpID8gZW5kLmRpZmYoc3RhcnREYXRlLCAnZGF5cycpIDogZW5kXG5cbmNvbnN0IG1pbkRheXMgPSAobGluZU51bWJlcjJEYXlzKSA9PiB7XG4gIGxldCBkYXlzID0gTWF0aC5taW4oLi4ubGluZU51bWJlcjJEYXlzLm1hcCggbGluZSA9PiBsaW5lLmRheXMpKVxuICByZXR1cm4ge1xuICAgIGRheXM6IGRheXMsXG4gICAgdmFsaWRpdHk6IHZhbGlkaXR5KGRheXMpXG4gIH1cbn1cblxuY29uc3Qgc29ydFZhbGlkaXR5ID0gdmFsaWRpdHkgPT4gdmFsaWRpdHkuc29ydCggKGEsIGIpID0+IGFbJ251bURheXNBdExlYXN0VmFsaWQnXSA8IGJbJ251bURheXNBdExlYXN0VmFsaWQnXSA/IC0xIDogMSlcblxuZXhwb3J0IGNvbnN0IGZvcm1hdExpbmVTdGF0cyA9IGxpbmVTdGF0cyA9PiB7XG5cbiAgdHJ5IHtcblxuICAgIGNvbnN0IGRlZmF1bHRPYmplY3QgPSB7wqBsaW5lTnVtYmVyczogW10gfVxuXG4gICAgbGV0IGZvcm1hdHRlZExpbmVzID0ge1xuICAgICAgaW52YWxpZDogbGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllc1xuICAgICAgICAuZmlsdGVyKCAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPCAxMjApWzBdIHx8IGRlZmF1bHRPYmplY3QsXG4gICAgICB2YWxpZDogbGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllc1xuICAgICAgICAuZmlsdGVyKCAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPj0gMTI3KVswXSB8fCBkZWZhdWx0T2JqZWN0LFxuICAgICAgc29vbkludmFsaWQ6IGxpbmVTdGF0cy52YWxpZGl0eUNhdGVnb3JpZXNcbiAgICAgICAgLmZpbHRlciggKGNhdGVnb3J5KSA9PiAoY2F0ZWdvcnkubnVtRGF5c0F0TGVhc3RWYWxpZCA+PSAxMjAgJiYgY2F0ZWdvcnkubnVtRGF5c0F0TGVhc3RWYWxpZCA8IDEyNykpWzBdIHx8IGRlZmF1bHRPYmplY3QsXG4gICAgICB2YWxpZGl0eTogc29ydFZhbGlkaXR5KGxpbmVTdGF0cy52YWxpZGl0eUNhdGVnb3JpZXMpLFxuICAgICAgYWxsOiBkZWZhdWx0T2JqZWN0XG4gICAgfVxuXG4gICAgZm9ybWF0dGVkTGluZXMuYWxsLmxpbmVOdW1iZXJzID0gW10uY29uY2F0KC4uLiBmb3JtYXR0ZWRMaW5lcy52YWxpZGl0eS5tYXAobGluZXMgPT4gbGluZXMubGluZU51bWJlcnMgKSApXG5cbiAgICBsZXQgbGluZXNNYXAgPSB7fVxuXG4gICAgbGV0IHN0YXJ0RGF0ZSA9IG1vbWVudChsaW5lU3RhdHMuc3RhcnREYXRlLCAnWVlZWS1NTS1ERCcpXG4gICAgbGV0IGVuZERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5hZGQobGluZVN0YXRzLmRheXMsICdkYXlzJylcblxuICAgIGZvcm1hdHRlZExpbmVzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgIGZvcm1hdHRlZExpbmVzLmRheXMgPSBsaW5lU3RhdHMuZGF5c1xuICAgIGZvcm1hdHRlZExpbmVzLmVuZERhdGUgPSBlbmREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG5cbiAgICBsaW5lU3RhdHMucHVibGljTGluZXMuZm9yRWFjaCAoIHB1YmxpY0xpbmUgPT4ge1xuXG4gICAgICBwdWJsaWNMaW5lLmVmZmVjdGl2ZVBlcmlvZHMuZm9yRWFjaCggKGVmZmVjdGl2ZVBlcmlvZCkgPT4ge1xuXG4gICAgICAgIGxldCBmcm9tRGF0ZSA9IG1vbWVudChlZmZlY3RpdmVQZXJpb2QuZnJvbSwgJ1lZWVktTU0tREQnKVxuICAgICAgICBsZXQgZnJvbURpZmYgPSBzdGFydERhdGUuZGlmZihmcm9tRGF0ZSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgIGlmIChmcm9tRGlmZiA+IDApIHtcbiAgICAgICAgICAvLyBub3cgaXMgYWZ0ZXIgc3RhcnQgZGF0ZSBvZiBlZmZlY3RpdmUgcGVyaW9kXG4gICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID0gKCBNYXRoLmFicyhmcm9tRGlmZikgLyBmb3JtYXR0ZWRMaW5lcy5kYXlzICkgKiAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwXG5cbiAgICAgICAgbGV0IHRvRGF0ZSA9IG1vbWVudChlZmZlY3RpdmVQZXJpb2QudG8sICdZWVlZLU1NLUREJylcbiAgICAgICAgbGV0IHRvRGlmZiA9IG1vbWVudChmb3JtYXR0ZWRMaW5lcy5lbmREYXRlLCAnWVlZWS1NTS1ERCcpLmRpZmYobW9tZW50KHRvRGF0ZSkuYWRkKDEsICdkYXlzJyksICdkYXlzJywgdHJ1ZSlcblxuICAgICAgICBpZiAodG9EaWZmID4gMCkge1xuICAgICAgICAgIHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDAgLSAodG9EaWZmIC8gKGZvcm1hdHRlZExpbmVzLmRheXMvMTAwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uID0gdGltZWxpbmVFbmRQb3NpdGlvblxuXG4gICAgICAgIGxldCBkYXlzRm9yd2FyZCA9IChlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAvIDEwMCkgKiBmb3JtYXR0ZWRMaW5lcy5kYXlzXG4gICAgICAgIGVmZmVjdGl2ZVBlcmlvZC52YWxpZGF0aW9uTGV2ZWwgPSB2YWxpZGl0eShkYXlzRm9yd2FyZClcblxuICAgICAgICBwdWJsaWNMaW5lLmRheXNWYWxpZCA9IHZhbGlkUGVyaW9kKHB1YmxpY0xpbmUuZGF5c1ZhbGlkIHx8IHN0YXJ0RGF0ZSwgZnJvbURhdGUsIHRvRGF0ZSlcbiAgICAgIH0pXG4gICAgICBwdWJsaWNMaW5lLmRheXNWYWxpZCA9IGdldERheXNSYW5nZShzdGFydERhdGUsIHB1YmxpY0xpbmUuZGF5c1ZhbGlkKVxuXG4gICAgICBwdWJsaWNMaW5lLmxpbmVzLmZvckVhY2goIChsaW5lKSA9PiB7XG5cbiAgICAgICAgbGluZS50aW1ldGFibGVzLmZvckVhY2goICh0aW1ldGFibGUpID0+IHtcbiAgICAgICAgICB0aW1ldGFibGUucGVyaW9kcy5mb3JFYWNoKCAocGVyaW9kKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBmcm9tRGlmZiA9IHN0YXJ0RGF0ZS5kaWZmKG1vbWVudChwZXJpb2QuZnJvbSwgJ1lZWVktTU0tREQnKSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgICAgICBpZiAoZnJvbURpZmYgPCAwKSB7XG4gICAgICAgICAgICAgIHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gPSAoIE1hdGguYWJzKGZyb21EaWZmKSAvIGZvcm1hdHRlZExpbmVzLmRheXMgKSAqIDEwMFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDBcblxuICAgICAgICAgICAgbGV0IHRvRGlmZiA9IG1vbWVudChmb3JtYXR0ZWRMaW5lcy5lbmREYXRlLCAnWVlZWS1NTS1ERCcpLmRpZmYobW9tZW50KHBlcmlvZC50bywgJ1lZWVktTU0tREQnKS5hZGQoMSwgJ2RheXMnKSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgICAgICBpZiAodG9EaWZmID4gMCkge1xuICAgICAgICAgICAgICB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwIC0gKHRvRGlmZiAvIChmb3JtYXR0ZWRMaW5lcy5kYXlzLzEwMCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uID0gdGltZWxpbmVFbmRQb3NpdGlvblxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBsaW5lc01hcFtwdWJsaWNMaW5lLmxpbmVOdW1iZXJdID0gcHVibGljTGluZVxuICAgIH0pXG5cbiAgICBmb3JtYXR0ZWRMaW5lcy5saW5lc01hcCA9IGxpbmVzTWFwXG4gICAgZm9ybWF0dGVkTGluZXMudmFsaWREYXlzT2Zmc2V0ID0gMzNcbiAgICBmb3JtYXR0ZWRMaW5lcy52YWxpZEZyb21EYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuYWRkKDEyMCwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgIGZvcm1hdHRlZExpbmVzLmRheXNWYWxpZCA9IHZhbGlkRGF5cyhsaW5lU3RhdHMucHVibGljTGluZXMpXG4gICAgZm9ybWF0dGVkTGluZXMubWluRGF5cyA9IG1pbkRheXMoZm9ybWF0dGVkTGluZXMuZGF5c1ZhbGlkKVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZExpbmVzXG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciBpbiBnZXRMaW5lU3RhdHNcIiwgZSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==