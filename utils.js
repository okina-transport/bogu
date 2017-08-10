(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "moment"], factory);
	else if(typeof exports === 'object')
		exports["bogu"] = factory(require("react"), require("moment"));
	else
		root["bogu"] = factory(root["react"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_7__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatLineStats = exports.segmentName2Key = exports.segmentName = exports.segmentColor = exports.validity = exports.sortIcon = exports.sortLines = exports.sortMethod = exports.filterLines = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _moment = __webpack_require__(7);

var _moment2 = _interopRequireDefault(_moment);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var filterLines = exports.filterLines = function filterLines(lineData, selectedSegment, daysValid) {
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

var sortMethod = exports.sortMethod = function sortMethod() {
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

var sortLines = exports.sortLines = function sortLines(sorting, lineData, selectedSegment, daysValid) {
  var order = filterLines(lineData, selectedSegment, daysValid);

  switch (sorting) {
    default:
      return order;
    case 1:
      return [].concat(_toConsumableArray(order)).sort();
    case 2:
      return [].concat(_toConsumableArray(order)).sort().reverse();
    case 3:
      var daysAsc = lineData.daysValid.slice().sort(sortMethod('days', true));
      return daysAsc.filter(function (line) {
        return order.indexOf(line.lineNumber) !== -1;
      }).map(function (line) {
        return line.lineNumber;
      });
    case 4:
      var daysDesc = lineData.daysValid.slice().sort(sortMethod('days', false));
      return daysDesc.filter(function (line) {
        return order.indexOf(line.lineNumber) !== -1;
      }).map(function (line) {
        return line.lineNumber;
      });
  }
};

var sortIcon = exports.sortIcon = function sortIcon(sorting) {
  var def = _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 18 24' },
    _react2.default.createElement('path', { d: 'M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z' })
  );
  var down = _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 18 24' },
    _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
  );
  var up = _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '18', height: '18', viewBox: '0 0 18 24' },
    _react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' })
  );
  var az = _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '18', viewBox: '0 0 24 18' },
    _react2.default.createElement(
      'text',
      { x: '12', y: '12', textAnchor: 'middle' },
      'AZ'
    )
  );
  var za = _react2.default.createElement(
    'svg',
    { xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '18', viewBox: '0 0 24 18' },
    _react2.default.createElement(
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
      return _react2.default.createElement(
        'div',
        null,
        az,
        down
      );
    case 2:
      return _react2.default.createElement(
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

var validity = exports.validity = function validity(daysForward) {
  if (daysForward < 0 || daysForward === Infinity) {
    return 'INVALID';
  } else if (daysForward >= 120) {
    return 'VALID';
  }
  return 'EXPIRING';
};

var segmentColor = exports.segmentColor = function segmentColor(daysValid) {
  var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var green = 120 + daysValid + modifier;
  return '#FF' + green.toString(16) + '00';
};

var segmentName = exports.segmentName = function segmentName(segment, numDays, locale) {
  if (segmentMap(locale).hasOwnProperty(segment) && segment !== 'dynamic') {
    return segmentMap(locale)[segment];
  }

  return segmentMap(locale)['dynamic'].replace('DAYS', numDays);
};

var segmentName2Key = exports.segmentName2Key = function segmentName2Key(segmentName) {
  if (!text2key.hasOwnProperty(segmentName)) {
    var idxStart = segmentName.indexOf('< ') + 2;
    var idxEnd = segmentName.indexOf(' da');

    return { segment: 'dynamic', daysValid: parseInt(segmentName.substring(idxStart, idxEnd)) };
  }
  return { segment: text2key[segmentName], daysValid: 0 };
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

var text2key = {
  'Alle linjer': 'all',
  'Gyldige linjer': 'valid',
  'Utgående linjer': 'expiring',
  'Utgåtte linjer': 'invalid',
  'All lines': 'all',
  'Valid lines': 'valid',
  'Expiring lines': 'expiring',
  'Invalid lines': 'invalid'
};

var validPeriod = function validPeriod(endDate, from, to) {
  return (0, _moment2.default)(endDate).add(1, 'days').isBetween(from, to, 'days', '[]') ? to : endDate;
};

var validDays = function validDays(lines) {
  return lines.map(function (line) {
    return { lineNumber: line.lineNumber, days: line.daysValid };
  });
};

var getDaysRange = function getDaysRange(startDate) {
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return _moment2.default.isMoment(end) ? end.diff(startDate, 'days') : end;
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

var formatLineStats = exports.formatLineStats = function formatLineStats(lineStats) {

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

    var startDate = (0, _moment2.default)(lineStats.startDate, 'YYYY-MM-DD');
    var endDate = (0, _moment2.default)(startDate).add(lineStats.days, 'days');

    formattedLines.startDate = startDate.format('YYYY-MM-DD');
    formattedLines.days = lineStats.days;
    formattedLines.endDate = endDate.format('YYYY-MM-DD');

    lineStats.publicLines.forEach(function (publicLine) {

      publicLine.effectivePeriods.forEach(function (effectivePeriod) {

        var fromDate = (0, _moment2.default)(effectivePeriod.from, 'YYYY-MM-DD');
        var fromDiff = startDate.diff(fromDate, 'days', true);

        if (fromDiff > 0) {
          // now is after start date of effective period
          effectivePeriod.timelineStartPosition = 0;
        } else {
          effectivePeriod.timelineStartPosition = Math.abs(fromDiff) / formattedLines.days * 100;
        }

        var timelineEndPosition = 100;

        var toDate = (0, _moment2.default)(effectivePeriod.to, 'YYYY-MM-DD');
        var toDiff = (0, _moment2.default)(formattedLines.endDate, 'YYYY-MM-DD').diff((0, _moment2.default)(toDate).add(1, 'days'), 'days', true);

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

            var fromDiff = startDate.diff((0, _moment2.default)(period.from, 'YYYY-MM-DD'), 'days', true);

            if (fromDiff < 0) {
              period.timelineStartPosition = Math.abs(fromDiff) / formattedLines.days * 100;
            } else {
              period.timelineStartPosition = 0;
            }

            var timelineEndPosition = 100;

            var toDiff = (0, _moment2.default)(formattedLines.endDate, 'YYYY-MM-DD').diff((0, _moment2.default)(period.to, 'YYYY-MM-DD').add(1, 'days'), 'days', true);

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
    formattedLines.validFromDate = (0, _moment2.default)(startDate).add(120, 'days').format('YYYY-MM-DD');
    formattedLines.daysValid = validDays(lineStats.publicLines);
    formattedLines.minDays = minDays(formattedLines.daysValid);

    return formattedLines;
  } catch (e) {
    console.error("error in getLineStats", e);
  }
};

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDhjMzJiMTMwOWViYjlhYWZhZGZhPzNmMjkiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIj8zYzYyIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiJdLCJuYW1lcyI6WyJmaWx0ZXJMaW5lcyIsImxpbmVEYXRhIiwic2VsZWN0ZWRTZWdtZW50IiwiZGF5c1ZhbGlkIiwiaGFzT3duUHJvcGVydHkiLCJsaW5lTnVtYmVycyIsImkiLCJ2YWxpZGl0eSIsImNhdGVnb3J5IiwibnVtRGF5c0F0TGVhc3RWYWxpZCIsImNvbnNvbGUiLCJsb2ciLCJzb3J0TWV0aG9kIiwiaW5kZXgiLCJhc2NlbmRpbmciLCJhIiwiYiIsInNvcnRMaW5lcyIsInNvcnRpbmciLCJvcmRlciIsInNvcnQiLCJyZXZlcnNlIiwiZGF5c0FzYyIsInNsaWNlIiwiZmlsdGVyIiwibGluZSIsImluZGV4T2YiLCJsaW5lTnVtYmVyIiwibWFwIiwiZGF5c0Rlc2MiLCJzb3J0SWNvbiIsImRlZiIsImRvd24iLCJ1cCIsImF6IiwiemEiLCJkYXlzRm9yd2FyZCIsIkluZmluaXR5Iiwic2VnbWVudENvbG9yIiwibW9kaWZpZXIiLCJncmVlbiIsInRvU3RyaW5nIiwic2VnbWVudE5hbWUiLCJzZWdtZW50IiwibnVtRGF5cyIsImxvY2FsZSIsInNlZ21lbnRNYXAiLCJyZXBsYWNlIiwic2VnbWVudE5hbWUyS2V5IiwidGV4dDJrZXkiLCJpZHhTdGFydCIsImlkeEVuZCIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwidmFsaWRQZXJpb2QiLCJlbmREYXRlIiwiZnJvbSIsInRvIiwiYWRkIiwiaXNCZXR3ZWVuIiwidmFsaWREYXlzIiwibGluZXMiLCJkYXlzIiwiZ2V0RGF5c1JhbmdlIiwic3RhcnREYXRlIiwiZW5kIiwiaXNNb21lbnQiLCJkaWZmIiwibWluRGF5cyIsImxpbmVOdW1iZXIyRGF5cyIsIk1hdGgiLCJtaW4iLCJzb3J0VmFsaWRpdHkiLCJsaW5lU3RhdHMiLCJkZWZhdWx0T2JqZWN0IiwidmFsaWRpdHlDYXRlZ29yaWVzIiwiZmluZCIsIm5hbWUiLCJmb3JtYXRMaW5lU3RhdHMiLCJmb3JtYXR0ZWRMaW5lcyIsImludmFsaWQiLCJ2YWxpZCIsImV4cGlyaW5nIiwiYWxsIiwiY29uY2F0IiwibGluZXNNYXAiLCJmb3JtYXQiLCJwdWJsaWNMaW5lcyIsImZvckVhY2giLCJwdWJsaWNMaW5lIiwiZWZmZWN0aXZlUGVyaW9kcyIsImVmZmVjdGl2ZVBlcmlvZCIsImZyb21EYXRlIiwiZnJvbURpZmYiLCJ0aW1lbGluZVN0YXJ0UG9zaXRpb24iLCJhYnMiLCJ0aW1lbGluZUVuZFBvc2l0aW9uIiwidG9EYXRlIiwidG9EaWZmIiwidmFsaWRhdGlvbkxldmVsIiwidGltZXRhYmxlcyIsInRpbWV0YWJsZSIsInBlcmlvZHMiLCJwZXJpb2QiLCJ2YWxpZERheXNPZmZzZXQiLCJ2YWxpZEZyb21EYXRlIiwiZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FB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QkFBT1AsbUJBQVAsR0FBNkJBLG1CQUE3QjtBQUNELFdBbkJEO0FBb0JELFNBckJEO0FBc0JELE9BeEJEOztBQTBCQVgsZUFBU0ksV0FBVzlELFVBQXBCLElBQWtDOEQsVUFBbEM7QUFDRCxLQTNERDs7QUE2REFWLG1CQUFlTSxRQUFmLEdBQTBCQSxRQUExQjtBQUNBTixtQkFBZXlCLGVBQWYsR0FBaUMsRUFBakM7QUFDQXpCLG1CQUFlMEIsYUFBZixHQUErQixzQkFBT3pDLFNBQVAsRUFBa0JOLEdBQWxCLENBQXNCLEdBQXRCLEVBQTJCLE1BQTNCLEVBQW1DNEIsTUFBbkMsQ0FBMEMsWUFBMUMsQ0FBL0I7QUFDQVAsbUJBQWU1RSxTQUFmLEdBQTJCeUQsVUFBVWEsVUFBVWMsV0FBcEIsQ0FBM0I7QUFDQVIsbUJBQWVYLE9BQWYsR0FBeUJBLFFBQVFXLGVBQWU1RSxTQUF2QixDQUF6Qjs7QUFFQSxXQUFPNEUsY0FBUDtBQUVELEdBNUZELENBNEZFLE9BQU8yQixDQUFQLEVBQVU7QUFDVmhHLFlBQVFpRyxLQUFSLENBQWMsdUJBQWQsRUFBdUNELENBQXZDO0FBQ0Q7QUFDRixDQWpHTSxDOzs7Ozs7O0FDNUpQLCtDIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJtb21lbnRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYm9ndVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibW9tZW50XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJib2d1XCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0sIHJvb3RbXCJtb21lbnRcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhjMzJiMTMwOWViYjlhYWZhZGZhIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGNvbnN0IGZpbHRlckxpbmVzID0gKGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZCkgPT4ge1xuICBpZiAobGluZURhdGEuaGFzT3duUHJvcGVydHkoc2VsZWN0ZWRTZWdtZW50KSkge1xuICAgIHJldHVybiBsaW5lRGF0YVtzZWxlY3RlZFNlZ21lbnRdLmxpbmVOdW1iZXJzXG4gIH1cblxuICBmb3IgKGxldCBpIGluIGxpbmVEYXRhLnZhbGlkaXR5KSB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBsaW5lRGF0YS52YWxpZGl0eVtpXVxuICAgIGlmIChjYXRlZ29yeS5udW1EYXlzQXRMZWFzdFZhbGlkID09PSBkYXlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS5saW5lTnVtYmVyc1xuICAgIH1cbiAgfVxuXG4gIC8vIGZhbGxiYWNrIHRvIGFsbFxuICBjb25zb2xlLmxvZyhcImVycm9yLCBzaG93aW5nIGFsbCBkYXRhXCIpXG4gIHJldHVybiBsaW5lRGF0YVsnYWxsJ10ubGluZU51bWJlcnNcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRNZXRob2QgPSAoIGluZGV4ID0gMCwgYXNjZW5kaW5nID0gdHJ1ZSkgPT4ge1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICBpZiAoYVtpbmRleF0gPT09IGJbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH0gZWxzZSBpZiAoYVtpbmRleF0gPCAgYltpbmRleF0pIHtcbiAgICAgIHJldHVybiAoYXNjZW5kaW5nKSA/IC0xIDogMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKGFzY2VuZGluZykgPyAxIDogLTFcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRMaW5lcyA9IChzb3J0aW5nLCBsaW5lRGF0YSwgc2VsZWN0ZWRTZWdtZW50LCBkYXlzVmFsaWQpID0+IHtcbiAgY29uc3Qgb3JkZXIgPSBmaWx0ZXJMaW5lcyhsaW5lRGF0YSwgc2VsZWN0ZWRTZWdtZW50LCBkYXlzVmFsaWQpXG5cbiAgc3dpdGNoIChzb3J0aW5nKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBvcmRlclxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBbLi4ub3JkZXJdLnNvcnQoKVxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBbLi4ub3JkZXJdLnNvcnQoKS5yZXZlcnNlKClcbiAgICBjYXNlIDM6XG4gICAgICBsZXQgZGF5c0FzYyA9IGxpbmVEYXRhLmRheXNWYWxpZC5zbGljZSgpLnNvcnQoIHNvcnRNZXRob2QoJ2RheXMnLCB0cnVlKSApXG4gICAgICByZXR1cm4gZGF5c0FzYy5maWx0ZXIoIChsaW5lKSA9PiBvcmRlci5pbmRleE9mKGxpbmUubGluZU51bWJlcikgIT09IC0xKS5tYXAoKGxpbmUpID0+IGxpbmUubGluZU51bWJlcilcbiAgICBjYXNlIDQ6XG4gICAgICBsZXQgZGF5c0Rlc2MgPSBsaW5lRGF0YS5kYXlzVmFsaWQuc2xpY2UoKS5zb3J0KCBzb3J0TWV0aG9kKCdkYXlzJywgZmFsc2UpIClcbiAgICAgIHJldHVybiBkYXlzRGVzYy5maWx0ZXIoIChsaW5lKSA9PiBvcmRlci5pbmRleE9mKGxpbmUubGluZU51bWJlcikgIT09IC0xICkubWFwKCAobGluZSkgPT4gbGluZS5saW5lTnVtYmVyKVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBzb3J0SWNvbiA9IChzb3J0aW5nKSA9PiB7XG4gIGxldCBkZWYgPSA8c3ZnICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxOFwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxOCAyNFwiPjxwYXRoIGQ9XCJNMyAxOGg2di0ySDN2MnpNMyA2djJoMThWNkgzem0wIDdoMTJ2LTJIM3YyelwiLz48L3N2Zz5cbiAgbGV0IGRvd24gPSA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDI0XCI+PHBhdGggZD1cIk03LjQxIDcuODRMMTIgMTIuNDJsNC41OS00LjU4TDE4IDkuMjVsLTYgNi02LTZ6XCIvPjwvc3ZnPlxuICBsZXQgdXAgPSA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE4XCIgaGVpZ2h0PVwiMThcIiB2aWV3Qm94PVwiMCAwIDE4IDI0XCI+PHBhdGggZD1cIk03LjQxIDE1LjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNGwtNi02LTYgNnpcIi8+PC9zdmc+XG4gIGxldCBheiA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMThcIj48dGV4dCB4PVwiMTJcIiB5PVwiMTJcIiB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+QVo8L3RleHQ+PC9zdmc+XG4gIGxldCB6YSA9IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIxOFwiIHZpZXdCb3g9XCIwIDAgMjQgMThcIj48dGV4dCB4PVwiMTJcIiB5PVwiMTJcIiB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+WkE8L3RleHQ+PC9zdmc+XG4gIHN3aXRjaCAoc29ydGluZykge1xuICAgIGRlZmF1bHQ6XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIGRlZlxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiA8ZGl2Pnthen17ZG93bn08L2Rpdj5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gPGRpdj57emF9e3VwfTwvZGl2PlxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBkb3duXG4gICAgY2FzZSA0OlxuICAgICAgcmV0dXJuIHVwXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHZhbGlkaXR5ID0gKGRheXNGb3J3YXJkKSA9PiB7XG4gIGlmIChkYXlzRm9yd2FyZCA8IDAgfHwgZGF5c0ZvcndhcmQgPT09IEluZmluaXR5KSB7XG4gICAgcmV0dXJuICdJTlZBTElEJ1xuICB9IGVsc2UgaWYgKGRheXNGb3J3YXJkID49IDEyMCkge1xuICAgIHJldHVybiAnVkFMSUQnXG4gIH1cbiAgcmV0dXJuICdFWFBJUklORydcbn1cblxuZXhwb3J0IGNvbnN0IHNlZ21lbnRDb2xvciA9IChkYXlzVmFsaWQsIG1vZGlmaWVyID0gMCkgPT4ge1xuICBsZXQgZ3JlZW4gPSAxMjAgKyBkYXlzVmFsaWQgKyBtb2RpZmllclxuICByZXR1cm4gJyNGRicgKyBncmVlbi50b1N0cmluZygxNikgKycwMCdcbn1cblxuZXhwb3J0IGNvbnN0IHNlZ21lbnROYW1lID0gKHNlZ21lbnQsIG51bURheXMsIGxvY2FsZSkgPT4ge1xuICBpZiAoc2VnbWVudE1hcChsb2NhbGUpLmhhc093blByb3BlcnR5KHNlZ21lbnQpICYmIHNlZ21lbnQgIT09ICdkeW5hbWljJykge1xuICAgIHJldHVybiBzZWdtZW50TWFwKGxvY2FsZSlbc2VnbWVudF1cbiAgfVxuXG4gIHJldHVybiBzZWdtZW50TWFwKGxvY2FsZSlbJ2R5bmFtaWMnXS5yZXBsYWNlKCdEQVlTJywgbnVtRGF5cylcbn1cblxuZXhwb3J0IGNvbnN0IHNlZ21lbnROYW1lMktleSA9IChzZWdtZW50TmFtZSkgPT4ge1xuICBpZiAoIXRleHQya2V5Lmhhc093blByb3BlcnR5KHNlZ21lbnROYW1lKSkge1xuICAgIGxldCBpZHhTdGFydCA9IHNlZ21lbnROYW1lLmluZGV4T2YoJzwgJykgKyAyXG4gICAgbGV0IGlkeEVuZCA9IHNlZ21lbnROYW1lLmluZGV4T2YoJyBkYScpXG5cbiAgICByZXR1cm4ge3NlZ21lbnQ6ICdkeW5hbWljJywgZGF5c1ZhbGlkOiBwYXJzZUludChzZWdtZW50TmFtZS5zdWJzdHJpbmcoaWR4U3RhcnQsIGlkeEVuZCkpfVxuICB9XG4gIHJldHVybiB7c2VnbWVudDogdGV4dDJrZXlbc2VnbWVudE5hbWVdLCBkYXlzVmFsaWQ6IDB9XG59XG5cbmNvbnN0IHNlZ21lbnRNYXAgPSAobG9jYWxlKSA9PiB7XG4gIHN3aXRjaCAobG9jYWxlKSB7XG4gICAgY2FzZSAnbmInOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ2FsbCcgOiAnQWxsZSBsaW5qZXInLFxuICAgICAgICAndmFsaWQnIDogJ0d5bGRpZ2UgbGluamVyJyxcbiAgICAgICAgJ2V4cGlyaW5nJyA6ICdVdGfDpWVuZGUgbGluamVyJyxcbiAgICAgICAgJ2ludmFsaWQnIDogJ1V0Z8OldHRlIGxpbmplcicsXG4gICAgICAgICdkeW5hbWljJzogJ1V0Z8OlZW5kZSBsaW5qZXIgKDwgREFZUyBkYWdlciknLFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgY2FzZSAnZW4nOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ2FsbCcgOiAnQWxsIGxpbmVzJyxcbiAgICAgICAgJ3ZhbGlkJyA6ICdWYWxpZCBsaW5lcycsXG4gICAgICAgICdleHBpcmluZycgOiAnRXhwaXJpbmcgbGluZXMnLFxuICAgICAgICAnaW52YWxpZCcgOiAnSW52YWxpZCBsaW5lcycsXG4gICAgICAgICdkeW5hbWljJzogJ0V4cGlyaW5nIGxpbmVzICg8IERBWVMgZGF5cyknXG4gICAgICB9XG4gIH1cbn1cblxuY29uc3QgdGV4dDJrZXkgPSB7XG4gICAgJ0FsbGUgbGluamVyJyA6ICdhbGwnLFxuICAgICdHeWxkaWdlIGxpbmplcicgOiAndmFsaWQnLFxuICAgICdVdGfDpWVuZGUgbGluamVyJyA6ICdleHBpcmluZycsXG4gICAgJ1V0Z8OldHRlIGxpbmplcicgOiAnaW52YWxpZCcsXG4gICAgJ0FsbCBsaW5lcycgOiAnYWxsJyxcbiAgICAnVmFsaWQgbGluZXMnIDogJ3ZhbGlkJyxcbiAgICAnRXhwaXJpbmcgbGluZXMnIDogJ2V4cGlyaW5nJyxcbiAgICAnSW52YWxpZCBsaW5lcycgOiAnaW52YWxpZCcsXG59XG5cbmNvbnN0IHZhbGlkUGVyaW9kID0gKGVuZERhdGUsIGZyb20sIHRvKSA9PiAobW9tZW50KGVuZERhdGUpLmFkZCgxLCAnZGF5cycpLmlzQmV0d2Vlbihmcm9tLCB0bywgJ2RheXMnLCAnW10nKSkgPyB0byA6IGVuZERhdGVcblxuY29uc3QgdmFsaWREYXlzID0gKGxpbmVzKSA9PiBsaW5lcy5tYXAobGluZSA9PiB7IHJldHVybiB7bGluZU51bWJlcjogbGluZS5saW5lTnVtYmVyLCBkYXlzOiBsaW5lLmRheXNWYWxpZH0gfSlcblxuY29uc3QgZ2V0RGF5c1JhbmdlID0gKHN0YXJ0RGF0ZSwgZW5kID0gMCkgPT4gbW9tZW50LmlzTW9tZW50KGVuZCkgPyBlbmQuZGlmZihzdGFydERhdGUsICdkYXlzJykgOiBlbmRcblxuY29uc3QgbWluRGF5cyA9IChsaW5lTnVtYmVyMkRheXMpID0+IHtcbiAgbGV0IGRheXMgPSBNYXRoLm1pbiguLi5saW5lTnVtYmVyMkRheXMubWFwKCBsaW5lID0+IGxpbmUuZGF5cykpXG4gIHJldHVybiB7XG4gICAgZGF5czogZGF5cyA9PT0gSW5maW5pdHkgPyAwIDogZGF5cyxcbiAgICB2YWxpZGl0eTogdmFsaWRpdHkoZGF5cylcbiAgfVxufVxuXG5jb25zdCBzb3J0VmFsaWRpdHkgPSB2YWxpZGl0eSA9PiB2YWxpZGl0eS5zb3J0KCAoYSwgYikgPT4gYVsnbnVtRGF5c0F0TGVhc3RWYWxpZCddIDwgYlsnbnVtRGF5c0F0TGVhc3RWYWxpZCddID8gLTEgOiAxKVxuXG5jb25zdCBsaW5lcyA9IChsaW5lU3RhdHMsIHZhbGlkaXR5LCBkZWZhdWx0T2JqZWN0KSA9PlxuICBsaW5lU3RhdHMudmFsaWRpdHlDYXRlZ29yaWVzLmZpbmQoIGNhdGVnb3J5ID0+IGNhdGVnb3J5Lm5hbWUgPT09IHZhbGlkaXR5ICkgfHwge3ZhbGlkaXR5LCAuLi4gZGVmYXVsdE9iamVjdH1cblxuZXhwb3J0IGNvbnN0IGZvcm1hdExpbmVTdGF0cyA9IGxpbmVTdGF0cyA9PiB7XG5cbiAgdHJ5IHtcblxuICAgIGNvbnN0IGRlZmF1bHRPYmplY3QgPSB7wqBsaW5lTnVtYmVyczogW10gfVxuXG4gICAgbGV0IGZvcm1hdHRlZExpbmVzID0ge1xuICAgICAgaW52YWxpZDogbGluZXMobGluZVN0YXRzLCBcIklOVkFMSURcIiwgZGVmYXVsdE9iamVjdCksXG4gICAgICB2YWxpZDogbGluZXMobGluZVN0YXRzLCBcIlZBTElEXCIsIGRlZmF1bHRPYmplY3QpLFxuICAgICAgZXhwaXJpbmc6IGxpbmVzKGxpbmVTdGF0cywgXCJFWFBJUklOR1wiLCBkZWZhdWx0T2JqZWN0KSxcbiAgICAgIHZhbGlkaXR5OiBzb3J0VmFsaWRpdHkobGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllcyksXG4gICAgICBhbGw6IGRlZmF1bHRPYmplY3RcbiAgICB9XG5cbiAgICBmb3JtYXR0ZWRMaW5lcy5hbGwubGluZU51bWJlcnMgPSBbXS5jb25jYXQoLi4uIGZvcm1hdHRlZExpbmVzLnZhbGlkaXR5Lm1hcChsaW5lcyA9PiBsaW5lcy5saW5lTnVtYmVycyApIClcblxuICAgIGxldCBsaW5lc01hcCA9IHt9XG5cbiAgICBsZXQgc3RhcnREYXRlID0gbW9tZW50KGxpbmVTdGF0cy5zdGFydERhdGUsICdZWVlZLU1NLUREJylcbiAgICBsZXQgZW5kRGF0ZSA9IG1vbWVudChzdGFydERhdGUpLmFkZChsaW5lU3RhdHMuZGF5cywgJ2RheXMnKVxuXG4gICAgZm9ybWF0dGVkTGluZXMuc3RhcnREYXRlID0gc3RhcnREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgZm9ybWF0dGVkTGluZXMuZGF5cyA9IGxpbmVTdGF0cy5kYXlzXG4gICAgZm9ybWF0dGVkTGluZXMuZW5kRGF0ZSA9IGVuZERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJylcblxuICAgIGxpbmVTdGF0cy5wdWJsaWNMaW5lcy5mb3JFYWNoICggcHVibGljTGluZSA9PiB7XG5cbiAgICAgIHB1YmxpY0xpbmUuZWZmZWN0aXZlUGVyaW9kcy5mb3JFYWNoKCAoZWZmZWN0aXZlUGVyaW9kKSA9PiB7XG5cbiAgICAgICAgbGV0IGZyb21EYXRlID0gbW9tZW50KGVmZmVjdGl2ZVBlcmlvZC5mcm9tLCAnWVlZWS1NTS1ERCcpXG4gICAgICAgIGxldCBmcm9tRGlmZiA9IHN0YXJ0RGF0ZS5kaWZmKGZyb21EYXRlLCAnZGF5cycsIHRydWUpXG5cbiAgICAgICAgaWYgKGZyb21EaWZmID4gMCkge1xuICAgICAgICAgIC8vIG5vdyBpcyBhZnRlciBzdGFydCBkYXRlIG9mIGVmZmVjdGl2ZSBwZXJpb2RcbiAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID0gMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gPSAoIE1hdGguYWJzKGZyb21EaWZmKSAvIGZvcm1hdHRlZExpbmVzLmRheXMgKSAqIDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDBcblxuICAgICAgICBsZXQgdG9EYXRlID0gbW9tZW50KGVmZmVjdGl2ZVBlcmlvZC50bywgJ1lZWVktTU0tREQnKVxuICAgICAgICBsZXQgdG9EaWZmID0gbW9tZW50KGZvcm1hdHRlZExpbmVzLmVuZERhdGUsICdZWVlZLU1NLUREJykuZGlmZihtb21lbnQodG9EYXRlKS5hZGQoMSwgJ2RheXMnKSwgJ2RheXMnLCB0cnVlKVxuXG4gICAgICAgIGlmICh0b0RpZmYgPiAwKSB7XG4gICAgICAgICAgdGltZWxpbmVFbmRQb3NpdGlvbiA9IDEwMCAtICh0b0RpZmYgLyAoZm9ybWF0dGVkTGluZXMuZGF5cy8xMDApKVxuICAgICAgICB9XG5cbiAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gPSB0aW1lbGluZUVuZFBvc2l0aW9uXG5cbiAgICAgICAgbGV0IGRheXNGb3J3YXJkID0gKGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC8gMTAwKSAqIGZvcm1hdHRlZExpbmVzLmRheXNcbiAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnZhbGlkYXRpb25MZXZlbCA9IHZhbGlkaXR5KGRheXNGb3J3YXJkKVxuXG4gICAgICAgIHB1YmxpY0xpbmUuZGF5c1ZhbGlkID0gdmFsaWRQZXJpb2QocHVibGljTGluZS5kYXlzVmFsaWQgfHwgc3RhcnREYXRlLCBmcm9tRGF0ZSwgdG9EYXRlKVxuICAgICAgfSlcbiAgICAgIHB1YmxpY0xpbmUuZGF5c1ZhbGlkID0gZ2V0RGF5c1JhbmdlKHN0YXJ0RGF0ZSwgcHVibGljTGluZS5kYXlzVmFsaWQpXG5cbiAgICAgIHB1YmxpY0xpbmUubGluZXMuZm9yRWFjaCggKGxpbmUpID0+IHtcblxuICAgICAgICBsaW5lLnRpbWV0YWJsZXMuZm9yRWFjaCggKHRpbWV0YWJsZSkgPT4ge1xuICAgICAgICAgIHRpbWV0YWJsZS5wZXJpb2RzLmZvckVhY2goIChwZXJpb2QpID0+IHtcblxuICAgICAgICAgICAgbGV0IGZyb21EaWZmID0gc3RhcnREYXRlLmRpZmYobW9tZW50KHBlcmlvZC5mcm9tLCAnWVlZWS1NTS1ERCcpLCAnZGF5cycsIHRydWUpXG5cbiAgICAgICAgICAgIGlmIChmcm9tRGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9ICggTWF0aC5hYnMoZnJvbURpZmYpIC8gZm9ybWF0dGVkTGluZXMuZGF5cyApICogMTAwXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID0gMFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdGltZWxpbmVFbmRQb3NpdGlvbiA9IDEwMFxuXG4gICAgICAgICAgICBsZXQgdG9EaWZmID0gbW9tZW50KGZvcm1hdHRlZExpbmVzLmVuZERhdGUsICdZWVlZLU1NLUREJykuZGlmZihtb21lbnQocGVyaW9kLnRvLCAnWVlZWS1NTS1ERCcpLmFkZCgxLCAnZGF5cycpLCAnZGF5cycsIHRydWUpXG5cbiAgICAgICAgICAgIGlmICh0b0RpZmYgPiAwKSB7XG4gICAgICAgICAgICAgIHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDAgLSAodG9EaWZmIC8gKGZvcm1hdHRlZExpbmVzLmRheXMvMTAwKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gPSB0aW1lbGluZUVuZFBvc2l0aW9uXG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIGxpbmVzTWFwW3B1YmxpY0xpbmUubGluZU51bWJlcl0gPSBwdWJsaWNMaW5lXG4gICAgfSlcblxuICAgIGZvcm1hdHRlZExpbmVzLmxpbmVzTWFwID0gbGluZXNNYXBcbiAgICBmb3JtYXR0ZWRMaW5lcy52YWxpZERheXNPZmZzZXQgPSAzM1xuICAgIGZvcm1hdHRlZExpbmVzLnZhbGlkRnJvbURhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5hZGQoMTIwLCAnZGF5cycpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXG4gICAgZm9ybWF0dGVkTGluZXMuZGF5c1ZhbGlkID0gdmFsaWREYXlzKGxpbmVTdGF0cy5wdWJsaWNMaW5lcylcbiAgICBmb3JtYXR0ZWRMaW5lcy5taW5EYXlzID0gbWluRGF5cyhmb3JtYXR0ZWRMaW5lcy5kYXlzVmFsaWQpXG5cbiAgICByZXR1cm4gZm9ybWF0dGVkTGluZXNcblxuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihcImVycm9yIGluIGdldExpbmVTdGF0c1wiLCBlKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==