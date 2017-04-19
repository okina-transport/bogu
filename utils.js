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
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGQ3ODlmYWQ0ODUwODYxOTk3NmM0PzdkY2MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIj8zYzYyIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmaWx0ZXJMaW5lcyIsImxpbmVEYXRhIiwic2VsZWN0ZWRTZWdtZW50IiwiZGF5c1ZhbGlkIiwiaGFzT3duUHJvcGVydHkiLCJsaW5lTnVtYmVycyIsImkiLCJ2YWxpZGl0eSIsImNhdGVnb3J5IiwibnVtRGF5c0F0TGVhc3RWYWxpZCIsImNvbnNvbGUiLCJsb2ciLCJzb3J0TWV0aG9kIiwiaW5kZXgiLCJhc2NlbmRpbmciLCJhIiwiYiIsInNvcnRMaW5lcyIsInNvcnRpbmciLCJvcmRlciIsInNvcnQiLCJyZXZlcnNlIiwiZGF5c0FzYyIsInNsaWNlIiwiZmlsdGVyIiwibGluZSIsImluZGV4T2YiLCJsaW5lTnVtYmVyIiwibWFwIiwiZGF5c0Rlc2MiLCJzb3J0SWNvbiIsImRlZiIsImRvd24iLCJ1cCIsImF6IiwiemEiLCJkYXlzRm9yd2FyZCIsInNlZ21lbnRDb2xvciIsIm1vZGlmaWVyIiwiZ3JlZW4iLCJ0b1N0cmluZyIsInNlZ21lbnROYW1lIiwic2VnbWVudCIsIm51bURheXMiLCJzZWdtZW50TWFwIiwicmVwbGFjZSIsInNlZ21lbnROYW1lMktleSIsInRleHQya2V5IiwiaWR4U3RhcnQiLCJpZHhFbmQiLCJwYXJzZUludCIsInN1YnN0cmluZyIsInZhbGlkUGVyaW9kIiwiZW5kRGF0ZSIsImZyb20iLCJ0byIsIm1vbWVudCIsImFkZCIsImlzQmV0d2VlbiIsInZhbGlkRGF5cyIsImxpbmVzIiwiZGF5cyIsImdldERheXNSYW5nZSIsInN0YXJ0RGF0ZSIsImVuZCIsImlzTW9tZW50IiwiZGlmZiIsIm1pbkRheXMiLCJsaW5lTnVtYmVyMkRheXMiLCJNYXRoIiwibWluIiwic29ydFZhbGlkaXR5IiwiZm9ybWF0TGluZVN0YXRzIiwiZGVmYXVsdE9iamVjdCIsImZvcm1hdHRlZExpbmVzIiwiaW52YWxpZCIsImxpbmVTdGF0cyIsInZhbGlkaXR5Q2F0ZWdvcmllcyIsInZhbGlkIiwic29vbkludmFsaWQiLCJhbGwiLCJjb25jYXQiLCJsaW5lc01hcCIsImZvcm1hdCIsInB1YmxpY0xpbmVzIiwiZm9yRWFjaCIsInB1YmxpY0xpbmUiLCJlZmZlY3RpdmVQZXJpb2RzIiwiZWZmZWN0aXZlUGVyaW9kIiwiZnJvbURhdGUiLCJmcm9tRGlmZiIsInRpbWVsaW5lU3RhcnRQb3NpdGlvbiIsImFicyIsInRpbWVsaW5lRW5kUG9zaXRpb24iLCJ0b0RhdGUiLCJ0b0RpZmYiLCJ2YWxpZGF0aW9uTGV2ZWwiLCJ0aW1ldGFibGVzIiwidGltZXRhYmxlIiwicGVyaW9kcyIsInBlcmlvZCIsInZhbGlkRGF5c09mZnNldCIsInZhbGlkRnJvbURhdGUiLCJlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVy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LEdBQStCLDhDQUFBOUMsQ0FBT08sU0FBUCxFQUFrQk4sR0FBbEIsQ0FBc0IsR0FBdEIsRUFBMkIsTUFBM0IsRUFBbUMwQixNQUFuQyxDQUEwQyxZQUExQyxDQUEvQjtBQUNBVCxtQkFBZXZFLFNBQWYsR0FBMkJ3RCxVQUFVaUIsVUFBVVEsV0FBcEIsQ0FBM0I7QUFDQVYsbUJBQWVQLE9BQWYsR0FBeUJBLFFBQVFPLGVBQWV2RSxTQUF2QixDQUF6Qjs7QUFFQSxXQUFPdUUsY0FBUDtBQUVELEdBL0ZELENBK0ZFLE9BQU82QixDQUFQLEVBQVU7QUFDVjdGLFlBQVE4RixLQUFSLENBQWMsdUJBQWQsRUFBdUNELENBQXZDO0FBQ0Q7QUFDRixDQXBHTSxDIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJtb21lbnRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYm9ndVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibW9tZW50XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJib2d1XCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0sIHJvb3RbXCJtb21lbnRcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDc4OWZhZDQ4NTA4NjE5OTc2YzQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb21lbnRcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IGZpbHRlckxpbmVzID0gKGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZCkgPT4ge1xuICBpZiAobGluZURhdGEuaGFzT3duUHJvcGVydHkoc2VsZWN0ZWRTZWdtZW50KSkge1xuICAgIHJldHVybiBsaW5lRGF0YVtzZWxlY3RlZFNlZ21lbnRdLmxpbmVOdW1iZXJzXG4gIH1cblxuICBmb3IgKGxldCBpIGluIGxpbmVEYXRhLnZhbGlkaXR5KSB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBsaW5lRGF0YS52YWxpZGl0eVtpXVxuICAgIGlmIChjYXRlZ29yeS5udW1EYXlzQXRMZWFzdFZhbGlkID09PSBkYXlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS5saW5lTnVtYmVyc1xuICAgIH1cbiAgfVxuXG4gIC8vIGZhbGxiYWNrIHRvIGFsbFxuICBjb25zb2xlLmxvZyhcImVycm9yLCBzaG93aW5nIGFsbCBkYXRhXCIpXG4gIHJldHVybiBsaW5lRGF0YVsnYWxsJ10ubGluZU51bWJlcnNcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRNZXRob2QgPSAoIGluZGV4ID0gMCwgYXNjZW5kaW5nID0gdHJ1ZSkgPT4ge1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBpZiAoYVtpbmRleF0gPT09IGJbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSBpZiAoYVtpbmRleF0gPCAgYltpbmRleF0pIHtcbiAgICAgIHJldHVybiAoYXNjZW5kaW5nKSA/IC0xIDogMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKGFzY2VuZGluZykgPyAxIDogLTFcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRMaW5lcyA9IChzb3J0aW5nLCBsaW5lRGF0YSwgc2VsZWN0ZWRTZWdtZW50LCBkYXlzVmFsaWQpID0+IHtcbiAgY29uc3Qgb3JkZXIgPSBmaWx0ZXJMaW5lcyhsaW5lRGF0YSwgc2VsZWN0ZWRTZWdtZW50LCBkYXlzVmFsaWQpXG5cbiAgc3dpdGNoIChzb3J0aW5nKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBvcmRlclxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBvcmRlci5zb3J0KClcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gb3JkZXIuc29ydCgpLnJldmVyc2UoKVxuICAgIGNhc2UgMzpcbiAgICAgIGxldCBkYXlzQXNjID0gbGluZURhdGEuZGF5c1ZhbGlkLnNsaWNlKCkuc29ydCggdGhpcy5zb3J0TWV0aG9kKCdkYXlzJywgdHJ1ZSkgKVxuICAgICAgcmV0dXJuIGRheXNBc2MuZmlsdGVyKCAobGluZSkgPT4gb3JkZXIuaW5kZXhPZihsaW5lLmxpbmVOdW1iZXIpICE9PSAtMSkubWFwKChsaW5lKSA9PiBsaW5lLmxpbmVOdW1iZXIpXG4gICAgY2FzZSA0OlxuICAgICAgbGV0IGRheXNEZXNjID0gbGluZURhdGEuZGF5c1ZhbGlkLnNsaWNlKCkuc29ydCggdGhpcy5zb3J0TWV0aG9kKCdkYXlzJywgZmFsc2UpIClcbiAgICAgIHJldHVybiBkYXlzRGVzYy5maWx0ZXIoIChsaW5lKSA9PiBvcmRlci5pbmRleE9mKGxpbmUubGluZU51bWJlcikgIT09IC0xICkubWFwKCAobGluZSkgPT4gbGluZS5saW5lTnVtYmVyKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzb3J0SWNvbiA9IChzb3J0aW5nKSA9PiB7XG4gIGxldCBkZWYgPSA8c3ZnICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxOCAyNFwiPjxwYXRoIGQ9XCJNMyAxOGg2di0ySDN2MnpNMyA2djJoMThWNkgzem0wIDdoMTJ2LTJIM3YyelwiLz48L3N2Zz5cbiAgbGV0IGRvd24gPSA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDI0XCI+PHBhdGggZD1cIk03LjQxIDcuODRMMTIgMTIuNDJsNC41OS00LjU4TDE4IDkuMjVsLTYgNi02LTZ6XCIvPjwvc3ZnPlxuICBsZXQgdXAgPSA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDI0XCI+PHBhdGggZD1cIk03LjQxIDE1LjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNGwtNi02LTYgNnpcIi8+PC9zdmc+XG4gIGxldCBheiA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMThcIj48dGV4dCB4PVwiMTJcIiB5PVwiMTJcIiB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+QVo8L3RleHQ+PC9zdmc+XG4gIGxldCB6YSA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMThcIj48dGV4dCB4PVwiMTJcIiB5PVwiMTJcIiB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+WkE8L3RleHQ+PC9zdmc+XG4gIHN3aXRjaCAoc29ydGluZykge1xuICAgIGRlZmF1bHQ6XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIGRlZlxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiA8ZGl2Pnthen17ZG93bn08L2Rpdj5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gPGRpdj57emF9e3VwfTwvZGl2PlxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBkb3duXG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIHVwXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZhbGlkaXR5ID0gKGRheXNGb3J3YXJkKSA9PiB7XG4gIGlmIChkYXlzRm9yd2FyZCA+IDEyNykge1xuICAgIHJldHVybiAnVkFMSUQnXG4gIH0gZWxzZSBpZiAoZGF5c0ZvcndhcmQgPj0gMTIwKSB7XG4gICAgcmV0dXJuICdTT09OX0lOVkFMSUQnXG4gIH0gZWxzZSBpZiAoZGF5c0ZvcndhcmQgPT09IDApIHtcbiAgICByZXR1cm4gJ0lOVkFMSUQnXG4gIH1cbiAgcmV0dXJuICdFWFBJUkVEJ1xufVxuXG5leHBvcnQgY29uc3Qgc2VnbWVudENvbG9yID0gKGRheXNWYWxpZCwgbW9kaWZpZXIgPSAwKSA9PiB7XG4gIGxldCBncmVlbiA9IDEyMCArIGRheXNWYWxpZCArIG1vZGlmaWVyXG4gIHJldHVybiAnI0ZGJyArIGdyZWVuLnRvU3RyaW5nKDE2KSArJzAwJ1xufVxuXG5leHBvcnQgY29uc3Qgc2VnbWVudE5hbWUgPSAoc2VnbWVudCwgbnVtRGF5cykgPT4ge1xuICBpZiAoc2VnbWVudE1hcC5oYXNPd25Qcm9wZXJ0eShzZWdtZW50KSAmJiBzZWdtZW50ICE9PSAnZHluYW1pYycpIHtcbiAgICByZXR1cm4gc2VnbWVudE1hcFtzZWdtZW50XVxuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRNYXBbJ2R5bmFtaWMnXS5yZXBsYWNlKCdEQVlTJywgbnVtRGF5cylcbn1cblxuZXhwb3J0IGNvbnN0IHNlZ21lbnROYW1lMktleSA9IChzZWdtZW50TmFtZSkgPT4ge1xuICBpZiAoIXRleHQya2V5Lmhhc093blByb3BlcnR5KHNlZ21lbnROYW1lKSkge1xuICAgIGxldCBpZHhTdGFydCA9IHNlZ21lbnROYW1lLmluZGV4T2YoJy0gJykgKyAyXG4gICAgbGV0IGlkeEVuZCA9IHNlZ21lbnROYW1lLmluZGV4T2YoJyBkYWdlcicpXG5cbiAgICByZXR1cm4ge3NlZ21lbnQ6ICdkeW5hbWljJywgZGF5c1ZhbGlkOiBwYXJzZUludChzZWdtZW50TmFtZS5zdWJzdHJpbmcoaWR4U3RhcnQsIGlkeEVuZCkpfVxuICB9XG4gIHJldHVybiB7c2VnbWVudDogdGV4dDJrZXlbc2VnbWVudE5hbWVdLCBkYXlzVmFsaWQ6IDB9XG59XG5cbmNvbnN0IHNlZ21lbnRNYXAgPSB7XG4gICd2YWxpZCcgOiAnTGluamVyIGkgZ3lsZGlnIHBlcmlvZGUnLFxuICAnc29vbkludmFsaWQnIDogJ0xpbmplciBtZWQgZ3lsZGlnaGV0c3BlcmlvZGUgc29tIHNuYXJ0IHV0Z8OlcicsXG4gICdpbnZhbGlkJyA6ICdMaW5qZXIgbWVkIG1hbmdsZW5kZSBneWxkaWdoZXRzcGVyaW9kZScsXG4gICdhbGwnIDogJ0FsbGUgbGluamVyJyxcbiAgJ2R5bmFtaWMnOiAnVXRnw6V0dGUgbGluamVyIC0gREFZUyBkYWdlciBpZ2plbidcbn1cblxuY29uc3QgdGV4dDJrZXkgPSB7XG4gICdBbGxlIGxpbmplcicgOiAnYWxsJyxcbiAgJ0xpbmplciBpIGd5bGRpZyBwZXJpb2RlJyA6ICd2YWxpZCcsXG4gICdMaW5qZXIgbWVkIGd5bGRpZ2hldHNwZXJpb2RlIHNvbSBzbmFydCB1dGfDpXInIDogJ3Nvb25JbnZhbGlkJyxcbiAgJ0xpbmplciBtZWQgbWFuZ2xlbmRlIGd5bGRpZ2hldHNwZXJpb2RlJyA6ICdpbnZhbGlkJyxcbn1cblxuLypcbmNvbnN0IHNlZ21lbnRNYXAgPSB7XG4gICd2YWxpZCcgOiAnVmFsaWQgbGluZXMnLFxuICAnc29vbkludmFsaWQnIDogJ1ZhbGlkIGxpbmVzIHRoYXQgYXJlIHNvb24gZXhwaXJpbmcnLFxuICAnaW52YWxpZCcgOiAnSW52YWxpZCBsaW5lcycsXG4gICdhbGwnIDogJ0FsbCBsaW5lcycsXG4gICdkeW5hbWljJzogJ0V4cGlyZWQgbGluZXMgLSBEQVlTIGRheXMgbGVmdCdcbn1cblxuY29uc3QgdGV4dDJrZXkgPSB7XG4gICdBbGwgbGluZXMnIDogJ2FsbCcsXG4gICdWYWxpZCBsaW5lcycgOiAndmFsaWQnLFxuICAnVmFsaWQgbGluZXMgdGhhdCBhcmUgc29vbiBleHBpcmluZycgOiAnc29vbkludmFsaWQnLFxuICAnSW52YWxpZCBsaW5lcycgOiAnaW52YWxpZCcsXG59XG4qL1xuXG5jb25zdCB2YWxpZFBlcmlvZCA9IChlbmREYXRlLCBmcm9tLCB0bykgPT4gKG1vbWVudChlbmREYXRlKS5hZGQoMSwgJ2RheXMnKS5pc0JldHdlZW4oZnJvbSwgdG8sICdkYXlzJywgJ1tdJykpID8gdG8gOiBlbmREYXRlXG5cbmNvbnN0IHZhbGlkRGF5cyA9IChsaW5lcykgPT4gbGluZXMubWFwKGxpbmUgPT4geyByZXR1cm4ge2xpbmVOdW1iZXI6IGxpbmUubGluZU51bWJlciwgZGF5czogbGluZS5kYXlzVmFsaWR9IH0pXG5cbmNvbnN0IGdldERheXNSYW5nZSA9IChzdGFydERhdGUsIGVuZCA9IDApID0+IG1vbWVudC5pc01vbWVudChlbmQpID8gZW5kLmRpZmYoc3RhcnREYXRlLCAnZGF5cycpIDogZW5kXG5cbmNvbnN0IG1pbkRheXMgPSAobGluZU51bWJlcjJEYXlzKSA9PiB7XG4gIGxldCBkYXlzID0gTWF0aC5taW4oLi4ubGluZU51bWJlcjJEYXlzLm1hcCggbGluZSA9PiBsaW5lLmRheXMpKVxuICByZXR1cm4ge1xuICAgIGRheXM6IGRheXMsXG4gICAgdmFsaWRpdHk6IHZhbGlkaXR5KGRheXMpXG4gIH1cbn1cblxuY29uc3Qgc29ydFZhbGlkaXR5ID0gdmFsaWRpdHkgPT4gdmFsaWRpdHkuc29ydCggKGEsIGIpID0+IGFbJ251bURheXNBdExlYXN0VmFsaWQnXSA8IGJbJ251bURheXNBdExlYXN0VmFsaWQnXSA/IC0xIDogMSlcblxuZXhwb3J0IGNvbnN0IGZvcm1hdExpbmVTdGF0cyA9IGxpbmVTdGF0cyA9PiB7XG5cbiAgdHJ5IHtcblxuICAgIGNvbnN0IGRlZmF1bHRPYmplY3QgPSB7wqBsaW5lTnVtYmVyczogW10gfVxuXG4gICAgbGV0IGZvcm1hdHRlZExpbmVzID0ge1xuICAgICAgaW52YWxpZDogbGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllc1xuICAgICAgICAuZmlsdGVyKCAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPCAxMjApWzBdIHx8IGRlZmF1bHRPYmplY3QsXG4gICAgICB2YWxpZDogbGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllc1xuICAgICAgICAuZmlsdGVyKCAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPj0gMTI3KVswXSB8fCBkZWZhdWx0T2JqZWN0LFxuICAgICAgc29vbkludmFsaWQ6IGxpbmVTdGF0cy52YWxpZGl0eUNhdGVnb3JpZXNcbiAgICAgICAgLmZpbHRlciggKGNhdGVnb3J5KSA9PiAoY2F0ZWdvcnkubnVtRGF5c0F0TGVhc3RWYWxpZCA+PSAxMjAgJiYgY2F0ZWdvcnkubnVtRGF5c0F0TGVhc3RWYWxpZCA8IDEyNykpWzBdIHx8IGRlZmF1bHRPYmplY3QsXG4gICAgICB2YWxpZGl0eTogc29ydFZhbGlkaXR5KGxpbmVTdGF0cy52YWxpZGl0eUNhdGVnb3JpZXMpLFxuICAgICAgYWxsOiBkZWZhdWx0T2JqZWN0XG4gICAgfVxuXG4gICAgZm9ybWF0dGVkTGluZXMuYWxsLmxpbmVOdW1iZXJzID0gW10uY29uY2F0KC4uLiBmb3JtYXR0ZWRMaW5lcy52YWxpZGl0eS5tYXAobGluZXMgPT4gbGluZXMubGluZU51bWJlcnMgKSApXG5cbiAgICBsZXQgbGluZXNNYXAgPSB7fVxuXG4gICAgbGV0IHN0YXJ0RGF0ZSA9IG1vbWVudChsaW5lU3RhdHMuc3RhcnREYXRlLCAnWVlZWS1NTS1ERCcpXG4gICAgbGV0IGVuZERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5hZGQobGluZVN0YXRzLmRheXMsICdkYXlzJylcblxuICAgIGZvcm1hdHRlZExpbmVzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgIGZvcm1hdHRlZExpbmVzLmRheXMgPSBsaW5lU3RhdHMuZGF5c1xuICAgIGZvcm1hdHRlZExpbmVzLmVuZERhdGUgPSBlbmREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG5cbiAgICBsaW5lU3RhdHMucHVibGljTGluZXMuZm9yRWFjaCAoIHB1YmxpY0xpbmUgPT4ge1xuXG4gICAgICBwdWJsaWNMaW5lLmVmZmVjdGl2ZVBlcmlvZHMuZm9yRWFjaCggKGVmZmVjdGl2ZVBlcmlvZCkgPT4ge1xuXG4gICAgICAgIGxldCBmcm9tRGF0ZSA9IG1vbWVudChlZmZlY3RpdmVQZXJpb2QuZnJvbSwgJ1lZWVktTU0tREQnKVxuICAgICAgICBsZXQgZnJvbURpZmYgPSBzdGFydERhdGUuZGlmZihmcm9tRGF0ZSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgIGlmIChmcm9tRGlmZiA+IDApIHtcbiAgICAgICAgICAvLyBub3cgaXMgYWZ0ZXIgc3RhcnQgZGF0ZSBvZiBlZmZlY3RpdmUgcGVyaW9kXG4gICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID0gKCBNYXRoLmFicyhmcm9tRGlmZikgLyBmb3JtYXR0ZWRMaW5lcy5kYXlzICkgKiAxMDBcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwXG5cbiAgICAgICAgbGV0IHRvRGF0ZSA9IG1vbWVudChlZmZlY3RpdmVQZXJpb2QudG8sICdZWVlZLU1NLUREJylcbiAgICAgICAgbGV0IHRvRGlmZiA9IG1vbWVudChmb3JtYXR0ZWRMaW5lcy5lbmREYXRlLCAnWVlZWS1NTS1ERCcpLmRpZmYobW9tZW50KHRvRGF0ZSkuYWRkKDEsICdkYXlzJyksICdkYXlzJywgdHJ1ZSlcblxuICAgICAgICBpZiAodG9EaWZmID4gMCkge1xuICAgICAgICAgIHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDAgLSAodG9EaWZmIC8gKGZvcm1hdHRlZExpbmVzLmRheXMvMTAwKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uID0gdGltZWxpbmVFbmRQb3NpdGlvblxuXG4gICAgICAgIGxldCBkYXlzRm9yd2FyZCA9IChlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiAvIDEwMCkgKiBmb3JtYXR0ZWRMaW5lcy5kYXlzXG4gICAgICAgIGVmZmVjdGl2ZVBlcmlvZC52YWxpZGF0aW9uTGV2ZWwgPSB2YWxpZGl0eShkYXlzRm9yd2FyZClcblxuICAgICAgICBwdWJsaWNMaW5lLmRheXNWYWxpZCA9IHZhbGlkUGVyaW9kKHB1YmxpY0xpbmUuZGF5c1ZhbGlkIHx8IHN0YXJ0RGF0ZSwgZnJvbURhdGUsIHRvRGF0ZSlcbiAgICAgIH0pXG4gICAgICBwdWJsaWNMaW5lLmRheXNWYWxpZCA9IGdldERheXNSYW5nZShzdGFydERhdGUsIHB1YmxpY0xpbmUuZGF5c1ZhbGlkKVxuXG4gICAgICBwdWJsaWNMaW5lLmxpbmVzLmZvckVhY2goIChsaW5lKSA9PiB7XG5cbiAgICAgICAgbGluZS50aW1ldGFibGVzLmZvckVhY2goICh0aW1ldGFibGUpID0+IHtcbiAgICAgICAgICB0aW1ldGFibGUucGVyaW9kcy5mb3JFYWNoKCAocGVyaW9kKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBmcm9tRGlmZiA9IHN0YXJ0RGF0ZS5kaWZmKG1vbWVudChwZXJpb2QuZnJvbSwgJ1lZWVktTU0tREQnKSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgICAgICBpZiAoZnJvbURpZmYgPCAwKSB7XG4gICAgICAgICAgICAgIHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gPSAoIE1hdGguYWJzKGZyb21EaWZmKSAvIGZvcm1hdHRlZExpbmVzLmRheXMgKSAqIDEwMFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9IDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDBcblxuICAgICAgICAgICAgbGV0IHRvRGlmZiA9IG1vbWVudChmb3JtYXR0ZWRMaW5lcy5lbmREYXRlLCAnWVlZWS1NTS1ERCcpLmRpZmYobW9tZW50KHBlcmlvZC50bywgJ1lZWVktTU0tREQnKS5hZGQoMSwgJ2RheXMnKSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgICAgICBpZiAodG9EaWZmID4gMCkge1xuICAgICAgICAgICAgICB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwIC0gKHRvRGlmZiAvIChmb3JtYXR0ZWRMaW5lcy5kYXlzLzEwMCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uID0gdGltZWxpbmVFbmRQb3NpdGlvblxuICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICB9KVxuXG4gICAgICBsaW5lc01hcFtwdWJsaWNMaW5lLmxpbmVOdW1iZXJdID0gcHVibGljTGluZVxuICAgIH0pXG5cbiAgICBmb3JtYXR0ZWRMaW5lcy5saW5lc01hcCA9IGxpbmVzTWFwXG4gICAgZm9ybWF0dGVkTGluZXMudmFsaWREYXlzT2Zmc2V0ID0gMzNcbiAgICBmb3JtYXR0ZWRMaW5lcy52YWxpZEZyb21EYXRlID0gbW9tZW50KHN0YXJ0RGF0ZSkuYWRkKDEyMCwgJ2RheXMnKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxuICAgIGZvcm1hdHRlZExpbmVzLmRheXNWYWxpZCA9IHZhbGlkRGF5cyhsaW5lU3RhdHMucHVibGljTGluZXMpXG4gICAgZm9ybWF0dGVkTGluZXMubWluRGF5cyA9IG1pbkRheXMoZm9ybWF0dGVkTGluZXMuZGF5c1ZhbGlkKVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZExpbmVzXG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJlcnJvciBpbiBnZXRMaW5lU3RhdHNcIiwgZSlcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==