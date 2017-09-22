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
  console.log('error, showing all data');
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
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '18',
      height: '18',
      viewBox: '0 0 18 24'
    },
    _react2.default.createElement('path', { d: 'M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z' })
  );
  var down = _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '18',
      height: '18',
      viewBox: '0 0 18 24'
    },
    _react2.default.createElement('path', { d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
  );
  var up = _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '18',
      height: '18',
      viewBox: '0 0 18 24'
    },
    _react2.default.createElement('path', { d: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z' })
  );
  var az = _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '18',
      viewBox: '0 0 24 18'
    },
    _react2.default.createElement(
      'text',
      { x: '12', y: '12', textAnchor: 'middle' },
      'AZ'
    )
  );
  var za = _react2.default.createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '24',
      height: '18',
      viewBox: '0 0 24 18'
    },
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

    return {
      segment: 'dynamic',
      daysValid: parseInt(segmentName.substring(idxStart, idxEnd))
    };
  }
  return { segment: text2key[segmentName], daysValid: 0 };
};

var segmentMap = function segmentMap(locale) {
  switch (locale) {
    case 'nb':
      return {
        all: 'Alle linjer',
        valid: 'Gyldige linjer',
        expiring: 'Utgående linjer',
        invalid: 'Utgåtte linjer',
        dynamic: 'Utgående linjer (< DAYS dager)'
      };
    default:
    case 'en':
      return {
        all: 'All lines',
        valid: 'Valid lines',
        expiring: 'Expiring lines',
        invalid: 'Invalid lines',
        dynamic: 'Expiring lines (< DAYS days)'
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
  }) || _extends({
    validity: validity
  }, defaultObject);
};

var formatLineStats = exports.formatLineStats = function formatLineStats(lineStats) {
  try {
    var _ref;

    var defaultObject = { lineNumbers: [] };

    var formattedLines = {
      invalid: lines(lineStats, 'INVALID', defaultObject),
      valid: lines(lineStats, 'VALID', defaultObject),
      expiring: lines(lineStats, 'EXPIRING', defaultObject),
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

        effectivePeriod.timelineEndPosition = Math.max(timelineEndPosition, 0);

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

            period.timelineEndPosition = Math.max(timelineEndPosition, 0);
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
    console.error('error in getLineStats', e);
  }
};

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDRiZjQxN2E2NGMwZTlhNzcxZGFhPzhlM2MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIj8zYzYyIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiJdLCJuYW1lcyI6WyJmaWx0ZXJMaW5lcyIsImxpbmVEYXRhIiwic2VsZWN0ZWRTZWdtZW50IiwiZGF5c1ZhbGlkIiwiaGFzT3duUHJvcGVydHkiLCJsaW5lTnVtYmVycyIsImkiLCJ2YWxpZGl0eSIsImNhdGVnb3J5IiwibnVtRGF5c0F0TGVhc3RWYWxpZCIsImNvbnNvbGUiLCJsb2ciLCJzb3J0TWV0aG9kIiwiaW5kZXgiLCJhc2NlbmRpbmciLCJhIiwiYiIsInNvcnRMaW5lcyIsInNvcnRpbmciLCJvcmRlciIsInNvcnQiLCJyZXZlcnNlIiwiZGF5c0FzYyIsInNsaWNlIiwiZmlsdGVyIiwiaW5kZXhPZiIsImxpbmUiLCJsaW5lTnVtYmVyIiwibWFwIiwiZGF5c0Rlc2MiLCJzb3J0SWNvbiIsImRlZiIsImRvd24iLCJ1cCIsImF6IiwiemEiLCJkYXlzRm9yd2FyZCIsIkluZmluaXR5Iiwic2VnbWVudENvbG9yIiwibW9kaWZpZXIiLCJncmVlbiIsInRvU3RyaW5nIiwic2VnbWVudE5hbWUiLCJzZWdtZW50IiwibnVtRGF5cyIsImxvY2FsZSIsInNlZ21lbnRNYXAiLCJyZXBsYWNlIiwic2VnbWVudE5hbWUyS2V5IiwidGV4dDJrZXkiLCJpZHhTdGFydCIsImlkeEVuZCIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiYWxsIiwidmFsaWQiLCJleHBpcmluZyIsImludmFsaWQiLCJkeW5hbWljIiwidmFsaWRQZXJpb2QiLCJlbmREYXRlIiwiZnJvbSIsInRvIiwiYWRkIiwiaXNCZXR3ZWVuIiwidmFsaWREYXlzIiwibGluZXMiLCJkYXlzIiwiZ2V0RGF5c1JhbmdlIiwic3RhcnREYXRlIiwiZW5kIiwiaXNNb21lbnQiLCJkaWZmIiwibWluRGF5cyIsIk1hdGgiLCJtaW4iLCJsaW5lTnVtYmVyMkRheXMiLCJzb3J0VmFsaWRpdHkiLCJsaW5lU3RhdHMiLCJkZWZhdWx0T2JqZWN0IiwidmFsaWRpdHlDYXRlZ29yaWVzIiwiZmluZCIsIm5hbWUiLCJmb3JtYXRMaW5lU3RhdHMiLCJmb3JtYXR0ZWRMaW5lcyIsImNvbmNhdCIsImxpbmVzTWFwIiwiZm9ybWF0IiwicHVibGljTGluZXMiLCJmb3JFYWNoIiwicHVibGljTGluZSIsImVmZmVjdGl2ZVBlcmlvZHMiLCJmcm9tRGF0ZSIsImVmZmVjdGl2ZVBlcmlvZCIsImZyb21EaWZmIiwidGltZWxpbmVTdGFydFBvc2l0aW9uIiwiYWJzIiwidGltZWxpbmVFbmRQb3NpdGlvbiIsInRvRGF0ZSIsInRvRGlmZiIsIm1heCIsInZhbGlkYXRpb25MZXZlbCIsInRpbWV0YWJsZXMiLCJ0aW1ldGFibGUiLCJwZXJpb2RzIiwicGVyaW9kIiwidmFsaWREYXlzT2Zmc2V0IiwidmFsaWRGcm9tRGF0ZSIsImUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FB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ZXNCLGVBQWYsR0FBaUMsRUFBakM7QUFDQXRCLG1CQUFldUIsYUFBZixHQUErQixzQkFBT3RDLFNBQVAsRUFDNUJOLEdBRDRCLENBQ3hCLEdBRHdCLEVBQ25CLE1BRG1CLEVBRTVCd0IsTUFGNEIsQ0FFckIsWUFGcUIsQ0FBL0I7QUFHQUgsbUJBQWVqRixTQUFmLEdBQTJCOEQsVUFBVWEsVUFBVVUsV0FBcEIsQ0FBM0I7QUFDQUosbUJBQWVYLE9BQWYsR0FBeUJBLFFBQVFXLGVBQWVqRixTQUF2QixDQUF6Qjs7QUFFQSxXQUFPaUYsY0FBUDtBQUNELEdBN0dELENBNkdFLE9BQU93QixDQUFQLEVBQVU7QUFDVmxHLFlBQVFtRyxLQUFSLENBQWMsdUJBQWQsRUFBdUNELENBQXZDO0FBQ0Q7QUFDRixDQWpITSxDOzs7Ozs7O0FDN05QLCtDIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIiwgXCJtb21lbnRcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYm9ndVwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibW9tZW50XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJib2d1XCJdID0gZmFjdG9yeShyb290W1wicmVhY3RcIl0sIHJvb3RbXCJtb21lbnRcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfN19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDRiZjQxN2E2NGMwZTlhNzcxZGFhIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgZmlsdGVyTGluZXMgPSAobGluZURhdGEsIHNlbGVjdGVkU2VnbWVudCwgZGF5c1ZhbGlkKSA9PiB7XG4gIGlmIChsaW5lRGF0YS5oYXNPd25Qcm9wZXJ0eShzZWxlY3RlZFNlZ21lbnQpKSB7XG4gICAgcmV0dXJuIGxpbmVEYXRhW3NlbGVjdGVkU2VnbWVudF0ubGluZU51bWJlcnM7XG4gIH1cblxuICBmb3IgKGxldCBpIGluIGxpbmVEYXRhLnZhbGlkaXR5KSB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBsaW5lRGF0YS52YWxpZGl0eVtpXTtcbiAgICBpZiAoY2F0ZWdvcnkubnVtRGF5c0F0TGVhc3RWYWxpZCA9PT0gZGF5c1ZhbGlkKSB7XG4gICAgICByZXR1cm4gY2F0ZWdvcnkubGluZU51bWJlcnM7XG4gICAgfVxuICB9XG5cbiAgLy8gZmFsbGJhY2sgdG8gYWxsXG4gIGNvbnNvbGUubG9nKCdlcnJvciwgc2hvd2luZyBhbGwgZGF0YScpO1xuICByZXR1cm4gbGluZURhdGFbJ2FsbCddLmxpbmVOdW1iZXJzO1xufTtcblxuZXhwb3J0IGNvbnN0IHNvcnRNZXRob2QgPSAoaW5kZXggPSAwLCBhc2NlbmRpbmcgPSB0cnVlKSA9PiB7XG4gIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgaWYgKGFbaW5kZXhdID09PSBiW2luZGV4XSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIGlmIChhW2luZGV4XSA8IGJbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gYXNjZW5kaW5nID8gLTEgOiAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXNjZW5kaW5nID8gMSA6IC0xO1xuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0TGluZXMgPSAoc29ydGluZywgbGluZURhdGEsIHNlbGVjdGVkU2VnbWVudCwgZGF5c1ZhbGlkKSA9PiB7XG4gIGNvbnN0IG9yZGVyID0gZmlsdGVyTGluZXMobGluZURhdGEsIHNlbGVjdGVkU2VnbWVudCwgZGF5c1ZhbGlkKTtcblxuICBzd2l0Y2ggKHNvcnRpbmcpIHtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG9yZGVyO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBbLi4ub3JkZXJdLnNvcnQoKTtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gWy4uLm9yZGVyXS5zb3J0KCkucmV2ZXJzZSgpO1xuICAgIGNhc2UgMzpcbiAgICAgIGxldCBkYXlzQXNjID0gbGluZURhdGEuZGF5c1ZhbGlkLnNsaWNlKCkuc29ydChzb3J0TWV0aG9kKCdkYXlzJywgdHJ1ZSkpO1xuICAgICAgcmV0dXJuIGRheXNBc2NcbiAgICAgICAgLmZpbHRlcihsaW5lID0+IG9yZGVyLmluZGV4T2YobGluZS5saW5lTnVtYmVyKSAhPT0gLTEpXG4gICAgICAgIC5tYXAobGluZSA9PiBsaW5lLmxpbmVOdW1iZXIpO1xuICAgIGNhc2UgNDpcbiAgICAgIGxldCBkYXlzRGVzYyA9IGxpbmVEYXRhLmRheXNWYWxpZC5zbGljZSgpLnNvcnQoc29ydE1ldGhvZCgnZGF5cycsIGZhbHNlKSk7XG4gICAgICByZXR1cm4gZGF5c0Rlc2NcbiAgICAgICAgLmZpbHRlcihsaW5lID0+IG9yZGVyLmluZGV4T2YobGluZS5saW5lTnVtYmVyKSAhPT0gLTEpXG4gICAgICAgIC5tYXAobGluZSA9PiBsaW5lLmxpbmVOdW1iZXIpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydEljb24gPSBzb3J0aW5nID0+IHtcbiAgbGV0IGRlZiA9IChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgaGVpZ2h0PVwiMThcIlxuICAgICAgdmlld0JveD1cIjAgMCAxOCAyNFwiXG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0zIDE4aDZ2LTJIM3Yyek0zIDZ2MmgxOFY2SDN6bTAgN2gxMnYtMkgzdjJ6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbiAgbGV0IGRvd24gPSAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjE4XCJcbiAgICAgIGhlaWdodD1cIjE4XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTggMjRcIlxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNy40MSA3Ljg0TDEyIDEyLjQybDQuNTktNC41OEwxOCA5LjI1bC02IDYtNi02elwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG4gIGxldCB1cCA9IChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgaGVpZ2h0PVwiMThcIlxuICAgICAgdmlld0JveD1cIjAgMCAxOCAyNFwiXG4gICAgPlxuICAgICAgPHBhdGggZD1cIk03LjQxIDE1LjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNGwtNi02LTYgNnpcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xuICBsZXQgYXogPSAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjE4XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMThcIlxuICAgID5cbiAgICAgIDx0ZXh0IHg9XCIxMlwiIHk9XCIxMlwiIHRleHRBbmNob3I9XCJtaWRkbGVcIj5BWjwvdGV4dD5cbiAgICA8L3N2Zz5cbiAgKTtcbiAgbGV0IHphID0gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDE4XCJcbiAgICA+XG4gICAgICA8dGV4dCB4PVwiMTJcIiB5PVwiMTJcIiB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+WkE8L3RleHQ+XG4gICAgPC9zdmc+XG4gICk7XG4gIHN3aXRjaCAoc29ydGluZykge1xuICAgIGRlZmF1bHQ6XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIGRlZjtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gPGRpdj57YXp9e2Rvd259PC9kaXY+O1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiA8ZGl2Pnt6YX17dXB9PC9kaXY+O1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBkb3duO1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiB1cDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkaXR5ID0gZGF5c0ZvcndhcmQgPT4ge1xuICBpZiAoZGF5c0ZvcndhcmQgPCAwIHx8IGRheXNGb3J3YXJkID09PSBJbmZpbml0eSkge1xuICAgIHJldHVybiAnSU5WQUxJRCc7XG4gIH0gZWxzZSBpZiAoZGF5c0ZvcndhcmQgPj0gMTIwKSB7XG4gICAgcmV0dXJuICdWQUxJRCc7XG4gIH1cbiAgcmV0dXJuICdFWFBJUklORyc7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VnbWVudENvbG9yID0gKGRheXNWYWxpZCwgbW9kaWZpZXIgPSAwKSA9PiB7XG4gIGxldCBncmVlbiA9IDEyMCArIGRheXNWYWxpZCArIG1vZGlmaWVyO1xuICByZXR1cm4gJyNGRicgKyBncmVlbi50b1N0cmluZygxNikgKyAnMDAnO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlZ21lbnROYW1lID0gKHNlZ21lbnQsIG51bURheXMsIGxvY2FsZSkgPT4ge1xuICBpZiAoc2VnbWVudE1hcChsb2NhbGUpLmhhc093blByb3BlcnR5KHNlZ21lbnQpICYmIHNlZ21lbnQgIT09ICdkeW5hbWljJykge1xuICAgIHJldHVybiBzZWdtZW50TWFwKGxvY2FsZSlbc2VnbWVudF07XG4gIH1cblxuICByZXR1cm4gc2VnbWVudE1hcChsb2NhbGUpWydkeW5hbWljJ10ucmVwbGFjZSgnREFZUycsIG51bURheXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlZ21lbnROYW1lMktleSA9IHNlZ21lbnROYW1lID0+IHtcbiAgaWYgKCF0ZXh0MmtleS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50TmFtZSkpIHtcbiAgICBsZXQgaWR4U3RhcnQgPSBzZWdtZW50TmFtZS5pbmRleE9mKCc8ICcpICsgMjtcbiAgICBsZXQgaWR4RW5kID0gc2VnbWVudE5hbWUuaW5kZXhPZignIGRhJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VnbWVudDogJ2R5bmFtaWMnLFxuICAgICAgZGF5c1ZhbGlkOiBwYXJzZUludChzZWdtZW50TmFtZS5zdWJzdHJpbmcoaWR4U3RhcnQsIGlkeEVuZCkpXG4gICAgfTtcbiAgfVxuICByZXR1cm4geyBzZWdtZW50OiB0ZXh0MmtleVtzZWdtZW50TmFtZV0sIGRheXNWYWxpZDogMCB9O1xufTtcblxuY29uc3Qgc2VnbWVudE1hcCA9IGxvY2FsZSA9PiB7XG4gIHN3aXRjaCAobG9jYWxlKSB7XG4gICAgY2FzZSAnbmInOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWxsOiAnQWxsZSBsaW5qZXInLFxuICAgICAgICB2YWxpZDogJ0d5bGRpZ2UgbGluamVyJyxcbiAgICAgICAgZXhwaXJpbmc6ICdVdGfDpWVuZGUgbGluamVyJyxcbiAgICAgICAgaW52YWxpZDogJ1V0Z8OldHRlIGxpbmplcicsXG4gICAgICAgIGR5bmFtaWM6ICdVdGfDpWVuZGUgbGluamVyICg8IERBWVMgZGFnZXIpJ1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgIGNhc2UgJ2VuJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFsbDogJ0FsbCBsaW5lcycsXG4gICAgICAgIHZhbGlkOiAnVmFsaWQgbGluZXMnLFxuICAgICAgICBleHBpcmluZzogJ0V4cGlyaW5nIGxpbmVzJyxcbiAgICAgICAgaW52YWxpZDogJ0ludmFsaWQgbGluZXMnLFxuICAgICAgICBkeW5hbWljOiAnRXhwaXJpbmcgbGluZXMgKDwgREFZUyBkYXlzKSdcbiAgICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IHRleHQya2V5ID0ge1xuICAnQWxsZSBsaW5qZXInOiAnYWxsJyxcbiAgJ0d5bGRpZ2UgbGluamVyJzogJ3ZhbGlkJyxcbiAgJ1V0Z8OlZW5kZSBsaW5qZXInOiAnZXhwaXJpbmcnLFxuICAnVXRnw6V0dGUgbGluamVyJzogJ2ludmFsaWQnLFxuICAnQWxsIGxpbmVzJzogJ2FsbCcsXG4gICdWYWxpZCBsaW5lcyc6ICd2YWxpZCcsXG4gICdFeHBpcmluZyBsaW5lcyc6ICdleHBpcmluZycsXG4gICdJbnZhbGlkIGxpbmVzJzogJ2ludmFsaWQnXG59O1xuXG5jb25zdCB2YWxpZFBlcmlvZCA9IChlbmREYXRlLCBmcm9tLCB0bykgPT5cbiAgbW9tZW50KGVuZERhdGUpLmFkZCgxLCAnZGF5cycpLmlzQmV0d2Vlbihmcm9tLCB0bywgJ2RheXMnLCAnW10nKVxuICAgID8gdG9cbiAgICA6IGVuZERhdGU7XG5cbmNvbnN0IHZhbGlkRGF5cyA9IGxpbmVzID0+XG4gIGxpbmVzLm1hcChsaW5lID0+IHtcbiAgICByZXR1cm4geyBsaW5lTnVtYmVyOiBsaW5lLmxpbmVOdW1iZXIsIGRheXM6IGxpbmUuZGF5c1ZhbGlkIH07XG4gIH0pO1xuXG5jb25zdCBnZXREYXlzUmFuZ2UgPSAoc3RhcnREYXRlLCBlbmQgPSAwKSA9PlxuICBtb21lbnQuaXNNb21lbnQoZW5kKSA/IGVuZC5kaWZmKHN0YXJ0RGF0ZSwgJ2RheXMnKSA6IGVuZDtcblxuY29uc3QgbWluRGF5cyA9IGxpbmVOdW1iZXIyRGF5cyA9PiB7XG4gIGxldCBkYXlzID0gTWF0aC5taW4oLi4ubGluZU51bWJlcjJEYXlzLm1hcChsaW5lID0+IGxpbmUuZGF5cykpO1xuICByZXR1cm4ge1xuICAgIGRheXM6IGRheXMgPT09IEluZmluaXR5ID8gMCA6IGRheXMsXG4gICAgdmFsaWRpdHk6IHZhbGlkaXR5KGRheXMpXG4gIH07XG59O1xuXG5jb25zdCBzb3J0VmFsaWRpdHkgPSB2YWxpZGl0eSA9PlxuICB2YWxpZGl0eS5zb3J0KFxuICAgIChhLCBiKSA9PiAoYVsnbnVtRGF5c0F0TGVhc3RWYWxpZCddIDwgYlsnbnVtRGF5c0F0TGVhc3RWYWxpZCddID8gLTEgOiAxKVxuICApO1xuXG5jb25zdCBsaW5lcyA9IChsaW5lU3RhdHMsIHZhbGlkaXR5LCBkZWZhdWx0T2JqZWN0KSA9PlxuICBsaW5lU3RhdHMudmFsaWRpdHlDYXRlZ29yaWVzLmZpbmQoY2F0ZWdvcnkgPT4gY2F0ZWdvcnkubmFtZSA9PT0gdmFsaWRpdHkpIHx8IHtcbiAgICB2YWxpZGl0eSxcbiAgICAuLi5kZWZhdWx0T2JqZWN0XG4gIH07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRMaW5lU3RhdHMgPSBsaW5lU3RhdHMgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRlZmF1bHRPYmplY3QgPSB7IGxpbmVOdW1iZXJzOiBbXSB9O1xuXG4gICAgbGV0IGZvcm1hdHRlZExpbmVzID0ge1xuICAgICAgaW52YWxpZDogbGluZXMobGluZVN0YXRzLCAnSU5WQUxJRCcsIGRlZmF1bHRPYmplY3QpLFxuICAgICAgdmFsaWQ6IGxpbmVzKGxpbmVTdGF0cywgJ1ZBTElEJywgZGVmYXVsdE9iamVjdCksXG4gICAgICBleHBpcmluZzogbGluZXMobGluZVN0YXRzLCAnRVhQSVJJTkcnLCBkZWZhdWx0T2JqZWN0KSxcbiAgICAgIHZhbGlkaXR5OiBzb3J0VmFsaWRpdHkobGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllcyksXG4gICAgICBhbGw6IGRlZmF1bHRPYmplY3RcbiAgICB9O1xuXG4gICAgZm9ybWF0dGVkTGluZXMuYWxsLmxpbmVOdW1iZXJzID0gW10uY29uY2F0KFxuICAgICAgLi4uZm9ybWF0dGVkTGluZXMudmFsaWRpdHkubWFwKGxpbmVzID0+IGxpbmVzLmxpbmVOdW1iZXJzKVxuICAgICk7XG5cbiAgICBsZXQgbGluZXNNYXAgPSB7fTtcblxuICAgIGxldCBzdGFydERhdGUgPSBtb21lbnQobGluZVN0YXRzLnN0YXJ0RGF0ZSwgJ1lZWVktTU0tREQnKTtcbiAgICBsZXQgZW5kRGF0ZSA9IG1vbWVudChzdGFydERhdGUpLmFkZChsaW5lU3RhdHMuZGF5cywgJ2RheXMnKTtcblxuICAgIGZvcm1hdHRlZExpbmVzLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICBmb3JtYXR0ZWRMaW5lcy5kYXlzID0gbGluZVN0YXRzLmRheXM7XG4gICAgZm9ybWF0dGVkTGluZXMuZW5kRGF0ZSA9IGVuZERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG5cbiAgICBsaW5lU3RhdHMucHVibGljTGluZXMuZm9yRWFjaChwdWJsaWNMaW5lID0+IHtcbiAgICAgIHB1YmxpY0xpbmUuZWZmZWN0aXZlUGVyaW9kcy5mb3JFYWNoKGVmZmVjdGl2ZVBlcmlvZCA9PiB7XG4gICAgICAgIGxldCBmcm9tRGF0ZSA9IG1vbWVudChlZmZlY3RpdmVQZXJpb2QuZnJvbSwgJ1lZWVktTU0tREQnKTtcbiAgICAgICAgbGV0IGZyb21EaWZmID0gc3RhcnREYXRlLmRpZmYoZnJvbURhdGUsICdkYXlzJywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGZyb21EaWZmID4gMCkge1xuICAgICAgICAgIC8vIG5vdyBpcyBhZnRlciBzdGFydCBkYXRlIG9mIGVmZmVjdGl2ZSBwZXJpb2RcbiAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID1cbiAgICAgICAgICAgIE1hdGguYWJzKGZyb21EaWZmKSAvIGZvcm1hdHRlZExpbmVzLmRheXMgKiAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgdGltZWxpbmVFbmRQb3NpdGlvbiA9IDEwMDtcblxuICAgICAgICBsZXQgdG9EYXRlID0gbW9tZW50KGVmZmVjdGl2ZVBlcmlvZC50bywgJ1lZWVktTU0tREQnKTtcbiAgICAgICAgbGV0IHRvRGlmZiA9IG1vbWVudChmb3JtYXR0ZWRMaW5lcy5lbmREYXRlLCAnWVlZWS1NTS1ERCcpLmRpZmYoXG4gICAgICAgICAgbW9tZW50KHRvRGF0ZSkuYWRkKDEsICdkYXlzJyksXG4gICAgICAgICAgJ2RheXMnLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAodG9EaWZmID4gMCkge1xuICAgICAgICAgIHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDAgLSB0b0RpZmYgLyAoZm9ybWF0dGVkTGluZXMuZGF5cyAvIDEwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBlZmZlY3RpdmVQZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiA9IE1hdGgubWF4KHRpbWVsaW5lRW5kUG9zaXRpb24sIDApO1xuXG4gICAgICAgIGxldCBkYXlzRm9yd2FyZCA9XG4gICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gLyAxMDAgKiBmb3JtYXR0ZWRMaW5lcy5kYXlzO1xuICAgICAgICBlZmZlY3RpdmVQZXJpb2QudmFsaWRhdGlvbkxldmVsID0gdmFsaWRpdHkoZGF5c0ZvcndhcmQpO1xuXG4gICAgICAgIHB1YmxpY0xpbmUuZGF5c1ZhbGlkID0gdmFsaWRQZXJpb2QoXG4gICAgICAgICAgcHVibGljTGluZS5kYXlzVmFsaWQgfHwgc3RhcnREYXRlLFxuICAgICAgICAgIGZyb21EYXRlLFxuICAgICAgICAgIHRvRGF0ZVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICBwdWJsaWNMaW5lLmRheXNWYWxpZCA9IGdldERheXNSYW5nZShzdGFydERhdGUsIHB1YmxpY0xpbmUuZGF5c1ZhbGlkKTtcblxuICAgICAgcHVibGljTGluZS5saW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICBsaW5lLnRpbWV0YWJsZXMuZm9yRWFjaCh0aW1ldGFibGUgPT4ge1xuICAgICAgICAgIHRpbWV0YWJsZS5wZXJpb2RzLmZvckVhY2gocGVyaW9kID0+IHtcbiAgICAgICAgICAgIGxldCBmcm9tRGlmZiA9IHN0YXJ0RGF0ZS5kaWZmKFxuICAgICAgICAgICAgICBtb21lbnQocGVyaW9kLmZyb20sICdZWVlZLU1NLUREJyksXG4gICAgICAgICAgICAgICdkYXlzJyxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKGZyb21EaWZmIDwgMCkge1xuICAgICAgICAgICAgICBwZXJpb2QudGltZWxpbmVTdGFydFBvc2l0aW9uID1cbiAgICAgICAgICAgICAgICBNYXRoLmFicyhmcm9tRGlmZikgLyBmb3JtYXR0ZWRMaW5lcy5kYXlzICogMTAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwO1xuXG4gICAgICAgICAgICBsZXQgdG9EaWZmID0gbW9tZW50KGZvcm1hdHRlZExpbmVzLmVuZERhdGUsICdZWVlZLU1NLUREJykuZGlmZihcbiAgICAgICAgICAgICAgbW9tZW50KHBlcmlvZC50bywgJ1lZWVktTU0tREQnKS5hZGQoMSwgJ2RheXMnKSxcbiAgICAgICAgICAgICAgJ2RheXMnLFxuICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAodG9EaWZmID4gMCkge1xuICAgICAgICAgICAgICB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwIC0gdG9EaWZmIC8gKGZvcm1hdHRlZExpbmVzLmRheXMgLyAxMDApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwZXJpb2QudGltZWxpbmVFbmRQb3NpdGlvbiA9IE1hdGgubWF4KHRpbWVsaW5lRW5kUG9zaXRpb24sIDApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBsaW5lc01hcFtwdWJsaWNMaW5lLmxpbmVOdW1iZXJdID0gcHVibGljTGluZTtcbiAgICB9KTtcblxuICAgIGZvcm1hdHRlZExpbmVzLmxpbmVzTWFwID0gbGluZXNNYXA7XG4gICAgZm9ybWF0dGVkTGluZXMudmFsaWREYXlzT2Zmc2V0ID0gMzM7XG4gICAgZm9ybWF0dGVkTGluZXMudmFsaWRGcm9tRGF0ZSA9IG1vbWVudChzdGFydERhdGUpXG4gICAgICAuYWRkKDEyMCwgJ2RheXMnKVxuICAgICAgLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgIGZvcm1hdHRlZExpbmVzLmRheXNWYWxpZCA9IHZhbGlkRGF5cyhsaW5lU3RhdHMucHVibGljTGluZXMpO1xuICAgIGZvcm1hdHRlZExpbmVzLm1pbkRheXMgPSBtaW5EYXlzKGZvcm1hdHRlZExpbmVzLmRheXNWYWxpZCk7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkTGluZXM7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKCdlcnJvciBpbiBnZXRMaW5lU3RhdHMnLCBlKTtcbiAgfVxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlscy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV83X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtb21lbnRcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9