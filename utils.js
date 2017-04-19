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
  var def = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 18 24' },
    React.createElement('path', { d: 'M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z' })
  );
  var down = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 18 24' },
    React.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
  );
  var up = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 18 24' },
    React.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' })
  );
  var az = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '18', viewBox: '0 0 24 18' },
    React.createElement(
      'text',
      { x: '12', y: '12', textAnchor: 'middle' },
      'AZ'
    )
  );
  var za = React.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '18', viewBox: '0 0 24 18' },
    React.createElement(
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
      return React.createElement(
        'div',
        null,
        az,
        down
      );
    case 2:
      return React.createElement(
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

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDZjMmI2MWU3Y2NlYzk4MDk3OWU4PzVmMmQiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbImZpbHRlckxpbmVzIiwibGluZURhdGEiLCJzZWxlY3RlZFNlZ21lbnQiLCJkYXlzVmFsaWQiLCJoYXNPd25Qcm9wZXJ0eSIsImxpbmVOdW1iZXJzIiwiaSIsInZhbGlkaXR5IiwiY2F0ZWdvcnkiLCJudW1EYXlzQXRMZWFzdFZhbGlkIiwiY29uc29sZSIsImxvZyIsInNvcnRMaW5lcyIsInNvcnRpbmciLCJvcmRlciIsInNvcnQiLCJyZXZlcnNlIiwiZGF5c0FzYyIsInNsaWNlIiwic29ydE1ldGhvZCIsImZpbHRlciIsImxpbmUiLCJpbmRleE9mIiwibGluZU51bWJlciIsIm1hcCIsImRheXNEZXNjIiwic29ydEljb24iLCJkZWYiLCJkb3duIiwidXAiLCJheiIsInphIiwiZGF5c0ZvcndhcmQiLCJzZWdtZW50Q29sb3IiLCJtb2RpZmllciIsImdyZWVuIiwidG9TdHJpbmciLCJzZWdtZW50TmFtZSIsInNlZ21lbnQiLCJudW1EYXlzIiwic2VnbWVudE1hcCIsInJlcGxhY2UiLCJzZWdtZW50TmFtZTJLZXkiLCJ0ZXh0MmtleSIsImlkeFN0YXJ0IiwiaWR4RW5kIiwicGFyc2VJbnQiLCJzdWJzdHJpbmciLCJ2YWxpZFBlcmlvZCIsImVuZERhdGUiLCJmcm9tIiwidG8iLCJtb21lbnQiLCJhZGQiLCJpc0JldHdlZW4iLCJ2YWxpZERheXMiLCJsaW5lcyIsImRheXMiLCJnZXREYXlzUmFuZ2UiLCJzdGFydERhdGUiLCJlbmQiLCJpc01vbWVudCIsImRpZmYiLCJtaW5EYXlzIiwibGluZU51bWJlcjJEYXlzIiwiTWF0aCIsIm1pbiIsInNvcnRWYWxpZGl0eSIsImEiLCJiIiwiZm9ybWF0TGluZVN0YXRzIiwiZGVmYXVsdE9iamVjdCIsImZvcm1hdHRlZExpbmVzIiwiaW52YWxpZCIsImxpbmVTdGF0cyIsInZhbGlkaXR5Q2F0ZWdvcmllcyIsInZhbGlkIiwic29vbkludmFsaWQiLCJhbGwiLCJjb25jYXQiLCJsaW5lc01hcCIsImZvcm1hdCIsInB1YmxpY0xpbmVzIiwiZm9yRWFjaCIsInB1YmxpY0xpbmUiLCJlZmZlY3RpdmVQZXJpb2RzIiwiZWZmZWN0aXZlUGVyaW9kIiwiZnJvbURhdGUiLCJmcm9tRGlmZiIsInRpbWVsaW5lU3RhcnRQb3NpdGlvbiIsImFicyIsInRpbWVsaW5lRW5kUG9zaXRpb24iLCJ0b0RhdGUiLCJ0b0RpZmYiLCJ2YWxpZGF0aW9uTGV2ZWwiLCJ0aW1ldGFibGVzIiwidGltZXRhYmxlIiwicGVyaW9kcyIsInBlcmlvZCIsInZhbGlkRGF5c09mZnNldCIsInZhbGlkRnJvbURhdGUiLCJlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDaEVBLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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RUFBNkNhLElBQTdDLENBQWtELDhDQUFBVixDQUFPOEMsT0FBTy9DLEVBQWQsRUFBa0IsWUFBbEIsRUFBZ0NFLEdBQWhDLENBQW9DLENBQXBDLEVBQXVDLE1BQXZDLENBQWxELEVBQWtHLE1BQWxHLEVBQTBHLElBQTFHLENBQWI7O0FBRUEsZ0JBQUl3QyxTQUFTLENBQWIsRUFBZ0I7QUFDZEYsb0NBQXNCLE1BQU9FLFVBQVVyQixlQUFlZixJQUFmLEdBQW9CLEdBQTlCLENBQTdCO0FBQ0Q7O0FBRUR5QyxtQkFBT1AsbUJBQVAsR0FBNkJBLG1CQUE3QjtBQUNELFdBbkJEO0FBb0JELFNBckJEO0FBc0JELE9BeEJEOztBQTBCQVgsZUFBU0ksV0FBVzdELFVBQXBCLElBQWtDNkQsVUFBbEM7QUFDRCxLQTNERDs7QUE2REFaLG1CQUFlUSxRQUFmLEdBQTBCQSxRQUExQjtBQUNBUixtQkFBZTJCLGVBQWYsR0FBaUMsRUFBakM7QUFDQTNCLG1CQUFlNEIsYUFBZixHQUErQiw4Q0FBQWhELENBQU9PLFNBQVAsRUFBa0JOLEdBQWxCLENBQXNCLEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DNEIsTUFBbkMsQ0FBMEMsWUFBMUMsQ0FBL0I7QUFDQVQsbUJBQWVyRSxTQUFmLEdBQTJCb0QsVUFBVW1CLFVBQVVRLFdBQXBCLENBQTNCO0FBQ0FWLG1CQUFlVCxPQUFmLEdBQXlCQSxRQUFRUyxlQUFlckUsU0FBdkIsQ0FBekI7O0FBRUEsV0FBT3FFLGNBQVA7QUFFRCxHQS9GRCxDQStGRSxPQUFPNkIsQ0FBUCxFQUFVO0FBQ1YzRixZQUFRNEYsS0FBUixDQUFjLHVCQUFkLEVBQXVDRCxDQUF2QztBQUNEO0FBQ0YsQ0FwR00sQyIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIm1vbWVudFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJtb21lbnRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYm9ndVwiXSA9IGZhY3RvcnkocmVxdWlyZShcIm1vbWVudFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYm9ndVwiXSA9IGZhY3Rvcnkocm9vdFtcIm1vbWVudFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZjMmI2MWU3Y2NlYzk4MDk3OWU4IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1vbWVudFwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5leHBvcnQgY29uc3QgZmlsdGVyTGluZXMgPSAobGluZURhdGEsIHNlbGVjdGVkU2VnbWVudCwgZGF5c1ZhbGlkKSA9PiB7XG4gIGlmIChsaW5lRGF0YS5oYXNPd25Qcm9wZXJ0eShzZWxlY3RlZFNlZ21lbnQpKSB7XG4gICAgcmV0dXJuIGxpbmVEYXRhW3NlbGVjdGVkU2VnbWVudF0ubGluZU51bWJlcnNcbiAgfVxuXG4gIGZvciAobGV0IGkgaW4gbGluZURhdGEudmFsaWRpdHkpIHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGxpbmVEYXRhLnZhbGlkaXR5W2ldXG4gICAgaWYgKGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPT09IGRheXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5LmxpbmVOdW1iZXJzXG4gICAgfVxuICB9XG5cbiAgLy8gZmFsbGJhY2sgdG8gYWxsXG4gIGNvbnNvbGUubG9nKFwiZXJyb3IsIHNob3dpbmcgYWxsIGRhdGFcIilcbiAgcmV0dXJuIGxpbmVEYXRhWydhbGwnXS5saW5lTnVtYmVyc1xufVxuXG5leHBvcnQgY29uc3Qgc29ydExpbmVzID0gKHNvcnRpbmcsIGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZCkgPT4ge1xuICBjb25zdCBvcmRlciA9IGZpbHRlckxpbmVzKGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZClcblxuICBzd2l0Y2ggKHNvcnRpbmcpIHtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG9yZGVyXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIG9yZGVyLnNvcnQoKVxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBvcmRlci5zb3J0KCkucmV2ZXJzZSgpXG4gICAgY2FzZSAzOlxuICAgICAgbGV0IGRheXNBc2MgPSBsaW5lRGF0YS5kYXlzVmFsaWQuc2xpY2UoKS5zb3J0KCB0aGlzLnNvcnRNZXRob2QoJ2RheXMnLCB0cnVlKSApXG4gICAgICByZXR1cm4gZGF5c0FzYy5maWx0ZXIoIChsaW5lKSA9PiBvcmRlci5pbmRleE9mKGxpbmUubGluZU51bWJlcikgIT09IC0xKS5tYXAoKGxpbmUpID0+IGxpbmUubGluZU51bWJlcilcbiAgICBjYXNlIDQ6XG4gICAgICBsZXQgZGF5c0Rlc2MgPSBsaW5lRGF0YS5kYXlzVmFsaWQuc2xpY2UoKS5zb3J0KCB0aGlzLnNvcnRNZXRob2QoJ2RheXMnLCBmYWxzZSkgKVxuICAgICAgcmV0dXJuIGRheXNEZXNjLmZpbHRlciggKGxpbmUpID0+IG9yZGVyLmluZGV4T2YobGluZS5saW5lTnVtYmVyKSAhPT0gLTEgKS5tYXAoIChsaW5lKSA9PiBsaW5lLmxpbmVOdW1iZXIpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRJY29uID0gKHNvcnRpbmcpID0+IHtcbiAgbGV0IGRlZiA9IDxzdmcgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDI0XCI+PHBhdGggZD1cIk0zIDE4aDZ2LTJIM3Yyek0zIDZ2MmgxOFY2SDN6bTAgN2gxMnYtMkgzdjJ6XCIvPjwvc3ZnPlxuICBsZXQgZG93biA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMjRcIj48cGF0aCBkPVwiTTcuNDEgNy44NEwxMiAxMi40Mmw0LjU5LTQuNThMMTggOS4yNWwtNiA2LTYtNnpcIi8+PC9zdmc+XG4gIGxldCB1cCA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMTggMjRcIj48cGF0aCBkPVwiTTcuNDEgMTUuNDFMMTIgMTAuODNsNC41OSA0LjU4TDE4IDE0bC02LTYtNiA2elwiLz48L3N2Zz5cbiAgbGV0IGF6ID0gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAxOFwiPjx0ZXh0IHg9XCIxMlwiIHk9XCIxMlwiIHRleHRBbmNob3I9XCJtaWRkbGVcIj5BWjwvdGV4dD48L3N2Zz5cbiAgbGV0IHphID0gPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAyNCAxOFwiPjx0ZXh0IHg9XCIxMlwiIHk9XCIxMlwiIHRleHRBbmNob3I9XCJtaWRkbGVcIj5aQTwvdGV4dD48L3N2Zz5cbiAgc3dpdGNoIChzb3J0aW5nKSB7XG4gICAgZGVmYXVsdDpcbiAgICBjYXNlIDA6XG4gICAgICByZXR1cm4gZGVmXG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIDxkaXY+e2F6fXtkb3dufTwvZGl2PlxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiA8ZGl2Pnt6YX17dXB9PC9kaXY+XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGRvd25cbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gdXBcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdmFsaWRpdHkgPSAoZGF5c0ZvcndhcmQpID0+IHtcbiAgaWYgKGRheXNGb3J3YXJkID4gMTI3KSB7XG4gICAgcmV0dXJuICdWQUxJRCdcbiAgfSBlbHNlIGlmIChkYXlzRm9yd2FyZCA+PSAxMjApIHtcbiAgICByZXR1cm4gJ1NPT05fSU5WQUxJRCdcbiAgfSBlbHNlIGlmIChkYXlzRm9yd2FyZCA9PT0gMCkge1xuICAgIHJldHVybiAnSU5WQUxJRCdcbiAgfVxuICByZXR1cm4gJ0VYUElSRUQnXG59XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50Q29sb3IgPSAoZGF5c1ZhbGlkLCBtb2RpZmllciA9IDApID0+IHtcbiAgbGV0IGdyZWVuID0gMTIwICsgZGF5c1ZhbGlkICsgbW9kaWZpZXJcbiAgcmV0dXJuICcjRkYnICsgZ3JlZW4udG9TdHJpbmcoMTYpICsnMDAnXG59XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50TmFtZSA9IChzZWdtZW50LCBudW1EYXlzKSA9PiB7XG4gIGlmIChzZWdtZW50TWFwLmhhc093blByb3BlcnR5KHNlZ21lbnQpICYmIHNlZ21lbnQgIT09ICdkeW5hbWljJykge1xuICAgIHJldHVybiBzZWdtZW50TWFwW3NlZ21lbnRdXG4gIH1cblxuICByZXR1cm4gc2VnbWVudE1hcFsnZHluYW1pYyddLnJlcGxhY2UoJ0RBWVMnLCBudW1EYXlzKVxufVxuXG5leHBvcnQgY29uc3Qgc2VnbWVudE5hbWUyS2V5ID0gKHNlZ21lbnROYW1lKSA9PiB7XG4gIGlmICghdGV4dDJrZXkuaGFzT3duUHJvcGVydHkoc2VnbWVudE5hbWUpKSB7XG4gICAgbGV0IGlkeFN0YXJ0ID0gc2VnbWVudE5hbWUuaW5kZXhPZignLSAnKSArIDJcbiAgICBsZXQgaWR4RW5kID0gc2VnbWVudE5hbWUuaW5kZXhPZignIGRhZ2VyJylcblxuICAgIHJldHVybiB7c2VnbWVudDogJ2R5bmFtaWMnLCBkYXlzVmFsaWQ6IHBhcnNlSW50KHNlZ21lbnROYW1lLnN1YnN0cmluZyhpZHhTdGFydCwgaWR4RW5kKSl9XG4gIH1cbiAgcmV0dXJuIHtzZWdtZW50OiB0ZXh0MmtleVtzZWdtZW50TmFtZV0sIGRheXNWYWxpZDogMH1cbn1cblxuY29uc3Qgc2VnbWVudE1hcCA9IHtcbiAgJ3ZhbGlkJyA6ICdMaW5qZXIgaSBneWxkaWcgcGVyaW9kZScsXG4gICdzb29uSW52YWxpZCcgOiAnTGluamVyIG1lZCBneWxkaWdoZXRzcGVyaW9kZSBzb20gc25hcnQgdXRnw6VyJyxcbiAgJ2ludmFsaWQnIDogJ0xpbmplciBtZWQgbWFuZ2xlbmRlIGd5bGRpZ2hldHNwZXJpb2RlJyxcbiAgJ2FsbCcgOiAnQWxsZSBsaW5qZXInLFxuICAnZHluYW1pYyc6ICdVdGfDpXR0ZSBsaW5qZXIgLSBEQVlTIGRhZ2VyIGlnamVuJ1xufVxuXG5jb25zdCB0ZXh0MmtleSA9IHtcbiAgJ0FsbGUgbGluamVyJyA6ICdhbGwnLFxuICAnTGluamVyIGkgZ3lsZGlnIHBlcmlvZGUnIDogJ3ZhbGlkJyxcbiAgJ0xpbmplciBtZWQgZ3lsZGlnaGV0c3BlcmlvZGUgc29tIHNuYXJ0IHV0Z8OlcicgOiAnc29vbkludmFsaWQnLFxuICAnTGluamVyIG1lZCBtYW5nbGVuZGUgZ3lsZGlnaGV0c3BlcmlvZGUnIDogJ2ludmFsaWQnLFxufVxuXG4vKlxuY29uc3Qgc2VnbWVudE1hcCA9IHtcbiAgJ3ZhbGlkJyA6ICdWYWxpZCBsaW5lcycsXG4gICdzb29uSW52YWxpZCcgOiAnVmFsaWQgbGluZXMgdGhhdCBhcmUgc29vbiBleHBpcmluZycsXG4gICdpbnZhbGlkJyA6ICdJbnZhbGlkIGxpbmVzJyxcbiAgJ2FsbCcgOiAnQWxsIGxpbmVzJyxcbiAgJ2R5bmFtaWMnOiAnRXhwaXJlZCBsaW5lcyAtIERBWVMgZGF5cyBsZWZ0J1xufVxuXG5jb25zdCB0ZXh0MmtleSA9IHtcbiAgJ0FsbCBsaW5lcycgOiAnYWxsJyxcbiAgJ1ZhbGlkIGxpbmVzJyA6ICd2YWxpZCcsXG4gICdWYWxpZCBsaW5lcyB0aGF0IGFyZSBzb29uIGV4cGlyaW5nJyA6ICdzb29uSW52YWxpZCcsXG4gICdJbnZhbGlkIGxpbmVzJyA6ICdpbnZhbGlkJyxcbn1cbiovXG5cbmNvbnN0IHZhbGlkUGVyaW9kID0gKGVuZERhdGUsIGZyb20sIHRvKSA9PiAobW9tZW50KGVuZERhdGUpLmFkZCgxLCAnZGF5cycpLmlzQmV0d2Vlbihmcm9tLCB0bywgJ2RheXMnLCAnW10nKSkgPyB0byA6IGVuZERhdGVcblxuY29uc3QgdmFsaWREYXlzID0gKGxpbmVzKSA9PiBsaW5lcy5tYXAobGluZSA9PiB7IHJldHVybiB7bGluZU51bWJlcjogbGluZS5saW5lTnVtYmVyLCBkYXlzOiBsaW5lLmRheXNWYWxpZH0gfSlcblxuY29uc3QgZ2V0RGF5c1JhbmdlID0gKHN0YXJ0RGF0ZSwgZW5kID0gMCkgPT4gbW9tZW50LmlzTW9tZW50KGVuZCkgPyBlbmQuZGlmZihzdGFydERhdGUsICdkYXlzJykgOiBlbmRcblxuY29uc3QgbWluRGF5cyA9IChsaW5lTnVtYmVyMkRheXMpID0+IHtcbiAgbGV0IGRheXMgPSBNYXRoLm1pbiguLi5saW5lTnVtYmVyMkRheXMubWFwKCBsaW5lID0+IGxpbmUuZGF5cykpXG4gIHJldHVybiB7XG4gICAgZGF5czogZGF5cyxcbiAgICB2YWxpZGl0eTogdmFsaWRpdHkoZGF5cylcbiAgfVxufVxuXG5jb25zdCBzb3J0VmFsaWRpdHkgPSB2YWxpZGl0eSA9PiB2YWxpZGl0eS5zb3J0KCAoYSwgYikgPT4gYVsnbnVtRGF5c0F0TGVhc3RWYWxpZCddIDwgYlsnbnVtRGF5c0F0TGVhc3RWYWxpZCddID8gLTEgOiAxKVxuXG5leHBvcnQgY29uc3QgZm9ybWF0TGluZVN0YXRzID0gbGluZVN0YXRzID0+IHtcblxuICB0cnkge1xuXG4gICAgY29uc3QgZGVmYXVsdE9iamVjdCA9IHvCoGxpbmVOdW1iZXJzOiBbXSB9XG5cbiAgICBsZXQgZm9ybWF0dGVkTGluZXMgPSB7XG4gICAgICBpbnZhbGlkOiBsaW5lU3RhdHMudmFsaWRpdHlDYXRlZ29yaWVzXG4gICAgICAgIC5maWx0ZXIoIChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubnVtRGF5c0F0TGVhc3RWYWxpZCA8IDEyMClbMF0gfHwgZGVmYXVsdE9iamVjdCxcbiAgICAgIHZhbGlkOiBsaW5lU3RhdHMudmFsaWRpdHlDYXRlZ29yaWVzXG4gICAgICAgIC5maWx0ZXIoIChjYXRlZ29yeSkgPT4gY2F0ZWdvcnkubnVtRGF5c0F0TGVhc3RWYWxpZCA+PSAxMjcpWzBdIHx8IGRlZmF1bHRPYmplY3QsXG4gICAgICBzb29uSW52YWxpZDogbGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllc1xuICAgICAgICAuZmlsdGVyKCAoY2F0ZWdvcnkpID0+IChjYXRlZ29yeS5udW1EYXlzQXRMZWFzdFZhbGlkID49IDEyMCAmJiBjYXRlZ29yeS5udW1EYXlzQXRMZWFzdFZhbGlkIDwgMTI3KSlbMF0gfHwgZGVmYXVsdE9iamVjdCxcbiAgICAgIHZhbGlkaXR5OiBzb3J0VmFsaWRpdHkobGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllcyksXG4gICAgICBhbGw6IGRlZmF1bHRPYmplY3RcbiAgICB9XG5cbiAgICBmb3JtYXR0ZWRMaW5lcy5hbGwubGluZU51bWJlcnMgPSBbXS5jb25jYXQoLi4uIGZvcm1hdHRlZExpbmVzLnZhbGlkaXR5Lm1hcChsaW5lcyA9PiBsaW5lcy5saW5lTnVtYmVycyApIClcblxuICAgIGxldCBsaW5lc01hcCA9IHt9XG5cbiAgICBsZXQgc3RhcnREYXRlID0gbW9tZW50KGxpbmVTdGF0cy5zdGFydERhdGUsICdZWVlZLU1NLUREJylcbiAgICBsZXQgZW5kRGF0ZSA9IG1vbWVudChzdGFydERhdGUpLmFkZChsaW5lU3RhdHMuZGF5cywgJ2RheXMnKVxuXG4gICAgZm9ybWF0dGVkTGluZXMuc3RhcnREYXRlID0gc3RhcnREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgZm9ybWF0dGVkTGluZXMuZGF5cyA9IGxpbmVTdGF0cy5kYXlzXG4gICAgZm9ybWF0dGVkTGluZXMuZW5kRGF0ZSA9IGVuZERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJylcblxuICAgIGxpbmVTdGF0cy5wdWJsaWNMaW5lcy5mb3JFYWNoICggcHVibGljTGluZSA9PiB7XG5cbiAgICAgIHB1YmxpY0xpbmUuZWZmZWN0aXZlUGVyaW9kcy5mb3JFYWNoKCAoZWZmZWN0aXZlUGVyaW9kKSA9PiB7XG5cbiAgICAgICAgbGV0IGZyb21EYXRlID0gbW9tZW50KGVmZmVjdGl2ZVBlcmlvZC5mcm9tLCAnWVlZWS1NTS1ERCcpXG4gICAgICAgIGxldCBmcm9tRGlmZiA9IHN0YXJ0RGF0ZS5kaWZmKGZyb21EYXRlLCAnZGF5cycsIHRydWUpXG5cbiAgICAgICAgaWYgKGZyb21EaWZmID4gMCkge1xuICAgICAgICAgIC8vIG5vdyBpcyBhZnRlciBzdGFydCBkYXRlIG9mIGVmZmVjdGl2ZSBwZXJpb2RcbiAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID0gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gPSAoIE1hdGguYWJzKGZyb21EaWZmKSAvIGZvcm1hdHRlZExpbmVzLmRheXMgKSAqIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDBcblxuICAgICAgICBsZXQgdG9EYXRlID0gbW9tZW50KGVmZmVjdGl2ZVBlcmlvZC50bywgJ1lZWVktTU0tREQnKVxuICAgICAgICBsZXQgdG9EaWZmID0gbW9tZW50KGZvcm1hdHRlZExpbmVzLmVuZERhdGUsICdZWVlZLU1NLUREJykuZGlmZihtb21lbnQodG9EYXRlKS5hZGQoMSwgJ2RheXMnKSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgIGlmICh0b0RpZmYgPiAwKSB7XG4gICAgICAgICAgdGltZWxpbmVFbmRQb3NpdGlvbiA9IDEwMCAtICh0b0RpZmYgLyAoZm9ybWF0dGVkTGluZXMuZGF5cy8xMDApKVxuICAgICAgICB9XG5cbiAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gPSB0aW1lbGluZUVuZFBvc2l0aW9uXG5cbiAgICAgICAgbGV0IGRheXNGb3J3YXJkID0gKGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC8gMTAwKSAqIGZvcm1hdHRlZExpbmVzLmRheXNcbiAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnZhbGlkYXRpb25MZXZlbCA9IHZhbGlkaXR5KGRheXNGb3J3YXJkKVxuXG4gICAgICAgIHB1YmxpY0xpbmUuZGF5c1ZhbGlkID0gdmFsaWRQZXJpb2QocHVibGljTGluZS5kYXlzVmFsaWQgfHwgc3RhcnREYXRlLCBmcm9tRGF0ZSwgdG9EYXRlKVxuICAgICAgfSlcbiAgICAgIHB1YmxpY0xpbmUuZGF5c1ZhbGlkID0gZ2V0RGF5c1JhbmdlKHN0YXJ0RGF0ZSwgcHVibGljTGluZS5kYXlzVmFsaWQpXG5cbiAgICAgIHB1YmxpY0xpbmUubGluZXMuZm9yRWFjaCggKGxpbmUpID0+IHtcblxuICAgICAgICBsaW5lLnRpbWV0YWJsZXMuZm9yRWFjaCggKHRpbWV0YWJsZSkgPT4ge1xuICAgICAgICAgIHRpbWV0YWJsZS5wZXJpb2RzLmZvckVhY2goIChwZXJpb2QpID0+IHtcblxuICAgICAgICAgICAgbGV0IGZyb21EaWZmID0gc3RhcnREYXRlLmRpZmYobW9tZW50KHBlcmlvZC5mcm9tLCAnWVlZWS1NTS1ERCcpLCAnZGF5cycsIHRydWUpXG5cbiAgICAgICAgICAgIGlmIChmcm9tRGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9ICggTWF0aC5hYnMoZnJvbURpZmYpIC8gZm9ybWF0dGVkTGluZXMuZGF5cyApICogMTAwXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID0gMFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdGltZWxpbmVFbmRQb3NpdGlvbiA9IDEwMFxuXG4gICAgICAgICAgICBsZXQgdG9EaWZmID0gbW9tZW50KGZvcm1hdHRlZExpbmVzLmVuZERhdGUsICdZWVlZLU1NLUREJykuZGlmZihtb21lbnQocGVyaW9kLnRvLCAnWVlZWS1NTS1ERCcpLmFkZCgxLCAnZGF5cycpLCAnZGF5cycsIHRydWUpXG5cbiAgICAgICAgICAgIGlmICh0b0RpZmYgPiAwKSB7XG4gICAgICAgICAgICAgIHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDAgLSAodG9EaWZmIC8gKGZvcm1hdHRlZExpbmVzLmRheXMvMTAwKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gPSB0aW1lbGluZUVuZFBvc2l0aW9uXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIGxpbmVzTWFwW3B1YmxpY0xpbmUubGluZU51bWJlcl0gPSBwdWJsaWNMaW5lXG4gICAgfSlcblxuICAgIGZvcm1hdHRlZExpbmVzLmxpbmVzTWFwID0gbGluZXNNYXBcbiAgICBmb3JtYXR0ZWRMaW5lcy52YWxpZERheXNPZmZzZXQgPSAzM1xuICAgIGZvcm1hdHRlZExpbmVzLnZhbGlkRnJvbURhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5hZGQoMTIwLCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgZm9ybWF0dGVkTGluZXMuZGF5c1ZhbGlkID0gdmFsaWREYXlzKGxpbmVTdGF0cy5wdWJsaWNMaW5lcylcbiAgICBmb3JtYXR0ZWRMaW5lcy5taW5EYXlzID0gbWluRGF5cyhmb3JtYXR0ZWRMaW5lcy5kYXlzVmFsaWQpXG5cbiAgICByZXR1cm4gZm9ybWF0dGVkTGluZXNcblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcImVycm9yIGluIGdldExpbmVTdGF0c1wiLCBlKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9