(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "moment"], factory);
	else if(typeof exports === 'object')
		exports["bogu"] = factory(require("react"), require("moment"));
	else
		root["bogu"] = factory(root["react"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_9__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatLineStats = exports.segmentName2Key = exports.segmentName = exports.segmentColor = exports.validity = exports.sortIcon = exports.sortLines = exports.sortMethod = exports.filterLines = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _moment = __webpack_require__(9);

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
      return [].concat(_toConsumableArray(order)).sort(function (a, b) {
        return a.localeCompare(b, 'nb', {
          numeric: true,
          sensitivity: 'base'
        });
      });
    case 2:
      return [].concat(_toConsumableArray(order)).sort(function (a, b) {
        return b.localeCompare(a, 'nb', {
          numeric: true,
          sensitivity: 'base'
        });
      });
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
    case 'fr':
      return {
        all: 'Toutes les lignes',
        valid: 'Lignes valides',
        expiring: 'Lignes expirant',
        invalid: 'Lignes invalides',
        dynamic: 'Lignes expirant (< DAYS jours)'
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
  'Invalid lines': 'invalid',
  'Toutes les lignes': 'all',
  'Lignes valides': 'valid',
  'Lignes expirant': 'expiring',
  'Lignes invalides': 'invalid'
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

/***/ 9:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIGE5NGY5ZmQ1YjMwODhiZTFlYzNmP2IwNmUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIj8zYzYyIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiJdLCJuYW1lcyI6WyJmaWx0ZXJMaW5lcyIsImxpbmVEYXRhIiwic2VsZWN0ZWRTZWdtZW50IiwiZGF5c1ZhbGlkIiwiaGFzT3duUHJvcGVydHkiLCJsaW5lTnVtYmVycyIsImkiLCJ2YWxpZGl0eSIsImNhdGVnb3J5IiwibnVtRGF5c0F0TGVhc3RWYWxpZCIsImNvbnNvbGUiLCJsb2ciLCJzb3J0TWV0aG9kIiwiaW5kZXgiLCJhc2NlbmRpbmciLCJhIiwiYiIsInNvcnRMaW5lcyIsInNvcnRpbmciLCJvcmRlciIsInNvcnQiLCJsb2NhbGVDb21wYXJlIiwibnVtZXJpYyIsInNlbnNpdGl2aXR5IiwiZGF5c0FzYyIsInNsaWNlIiwiZmlsdGVyIiwiaW5kZXhPZiIsImxpbmUiLCJsaW5lTnVtYmVyIiwibWFwIiwiZGF5c0Rlc2MiLCJzb3J0SWNvbiIsImRlZiIsImRvd24iLCJ1cCIsImF6IiwiemEiLCJkYXlzRm9yd2FyZCIsIkluZmluaXR5Iiwic2VnbWVudENvbG9yIiwibW9kaWZpZXIiLCJncmVlbiIsInRvU3RyaW5nIiwic2VnbWVudE5hbWUiLCJzZWdtZW50IiwibnVtRGF5cyIsImxvY2FsZSIsInNlZ21lbnRNYXAiLCJyZXBsYWNlIiwic2VnbWVudE5hbWUyS2V5IiwidGV4dDJrZXkiLCJpZHhTdGFydCIsImlkeEVuZCIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiYWxsIiwidmFsaWQiLCJleHBpcmluZyIsImludmFsaWQiLCJkeW5hbWljIiwidmFsaWRQZXJpb2QiLCJlbmREYXRlIiwiZnJvbSIsInRvIiwiYWRkIiwiaXNCZXR3ZWVuIiwidmFsaWREYXlzIiwibGluZXMiLCJkYXlzIiwiZ2V0RGF5c1JhbmdlIiwic3RhcnREYXRlIiwiZW5kIiwiaXNNb21lbnQiLCJkaWZmIiwibWluRGF5cyIsIk1hdGgiLCJtaW4iLCJsaW5lTnVtYmVyMkRheXMiLCJzb3J0VmFsaWRpdHkiLCJsaW5lU3RhdHMiLCJkZWZhdWx0T2JqZWN0IiwidmFsaWRpdHlDYXRlZ29yaWVzIiwiZmluZCIsIm5hbWUiLCJmb3JtYXRMaW5lU3RhdHMiLCJmb3JtYXR0ZWRMaW5lcyIsImNvbmNhdCIsImxpbmVzTWFwIiwiZm9ybWF0IiwicHVibGljTGluZXMiLCJmb3JFYWNoIiwicHVibGljTGluZSIsImVmZmVjdGl2ZVBlcmlvZHMiLCJmcm9tRGF0ZSIsImVmZmVjdGl2ZVBlcmlvZCIsImZyb21EaWZmIiwidGltZWxpbmVTdGFydFBvc2l0aW9uIiwiYWJzIiwidGltZWxpbmVFbmRQb3NpdGlvbiIsInRvRGF0ZSIsInRvRGlmZiIsIm1heCIsInZhbGlkYXRpb25MZXZlbCIsInRpbWV0YWJsZXMiLCJ0aW1ldGFibGUiLCJwZXJpb2RzIiwicGVyaW9kIiwidmFsaWREYXlzT2Zmc2V0IiwidmFsaWRGcm9tRGF0ZSIsImUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixF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QixPQUF0QixFQUErQixZQUEvQixFQUE2Q1ksSUFBN0MsQ0FDWCxzQkFBT2lDLE9BQU8zQyxFQUFkLEVBQWtCLFlBQWxCLEVBQWdDQyxHQUFoQyxDQUFvQyxDQUFwQyxFQUF1QyxNQUF2QyxDQURXLEVBRVgsTUFGVyxFQUdYLElBSFcsQ0FBYjs7QUFNQSxnQkFBSW9DLFNBQVMsQ0FBYixFQUFnQjtBQUNkRixvQ0FBc0IsTUFBTUUsVUFBVWYsZUFBZWpCLElBQWYsR0FBc0IsR0FBaEMsQ0FBNUI7QUFDRDs7QUFFRHNDLG1CQUFPUixtQkFBUCxHQUE2QnZCLEtBQUswQixHQUFMLENBQVNILG1CQUFULEVBQThCLENBQTlCLENBQTdCO0FBQ0QsV0EzQkQ7QUE0QkQsU0E3QkQ7QUE4QkQsT0EvQkQ7O0FBaUNBWCxlQUFTSSxXQUFXL0QsVUFBcEIsSUFBa0MrRCxVQUFsQztBQUNELEtBMUVEOztBQTRFQU4sbUJBQWVFLFFBQWYsR0FBMEJBLFFBQTFCO0FBQ0FGLG1CQUFlc0IsZUFBZixHQUFpQyxFQUFqQztBQUNBdEIsbUJBQWV1QixhQUFmLEdBQStCLHNCQUFPdEMsU0FBUCxFQUM1Qk4sR0FENEIsQ0FDeEIsR0FEd0IsRUFDbkIsTUFEbUIsRUFFNUJ3QixNQUY0QixDQUVyQixZQUZxQixDQUEvQjtBQUdBSCxtQkFBZW5GLFNBQWYsR0FBMkJnRSxVQUFVYSxVQUFVVSxXQUFwQixDQUEzQjtBQUNBSixtQkFBZVgsT0FBZixHQUF5QkEsUUFBUVcsZUFBZW5GLFNBQXZCLENBQXpCOztBQUVBLFdBQU9tRixjQUFQO0FBQ0QsR0E3R0QsQ0E2R0UsT0FBT3dCLENBQVAsRUFBVTtBQUNWcEcsWUFBUXFHLEtBQVIsQ0FBYyx1QkFBZCxFQUF1Q0QsQ0FBdkM7QUFDRDtBQUNGLENBakhNLEM7Ozs7Ozs7QUMvT1AsK0MiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJyZWFjdFwiLCBcIm1vbWVudFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJib2d1XCJdID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIiksIHJlcXVpcmUoXCJtb21lbnRcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImJvZ3VcIl0gPSBmYWN0b3J5KHJvb3RbXCJyZWFjdFwiXSwgcm9vdFtcIm1vbWVudFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV85X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTk0ZjlmZDViMzA4OGJlMWVjM2YiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBmaWx0ZXJMaW5lcyA9IChsaW5lRGF0YSwgc2VsZWN0ZWRTZWdtZW50LCBkYXlzVmFsaWQpID0+IHtcbiAgaWYgKGxpbmVEYXRhLmhhc093blByb3BlcnR5KHNlbGVjdGVkU2VnbWVudCkpIHtcbiAgICByZXR1cm4gbGluZURhdGFbc2VsZWN0ZWRTZWdtZW50XS5saW5lTnVtYmVycztcbiAgfVxuXG4gIGZvciAobGV0IGkgaW4gbGluZURhdGEudmFsaWRpdHkpIHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGxpbmVEYXRhLnZhbGlkaXR5W2ldO1xuICAgIGlmIChjYXRlZ29yeS5udW1EYXlzQXRMZWFzdFZhbGlkID09PSBkYXlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBjYXRlZ29yeS5saW5lTnVtYmVycztcbiAgICB9XG4gIH1cblxuICAvLyBmYWxsYmFjayB0byBhbGxcbiAgY29uc29sZS5sb2coJ2Vycm9yLCBzaG93aW5nIGFsbCBkYXRhJyk7XG4gIHJldHVybiBsaW5lRGF0YVsnYWxsJ10ubGluZU51bWJlcnM7XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydE1ldGhvZCA9IChpbmRleCA9IDAsIGFzY2VuZGluZyA9IHRydWUpID0+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGEsIGIpIHtcbiAgICBpZiAoYVtpbmRleF0gPT09IGJbaW5kZXhdKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2UgaWYgKGFbaW5kZXhdIDwgYltpbmRleF0pIHtcbiAgICAgIHJldHVybiBhc2NlbmRpbmcgPyAtMSA6IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhc2NlbmRpbmcgPyAxIDogLTE7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNvcnRMaW5lcyA9IChzb3J0aW5nLCBsaW5lRGF0YSwgc2VsZWN0ZWRTZWdtZW50LCBkYXlzVmFsaWQpID0+IHtcbiAgY29uc3Qgb3JkZXIgPSBmaWx0ZXJMaW5lcyhsaW5lRGF0YSwgc2VsZWN0ZWRTZWdtZW50LCBkYXlzVmFsaWQpO1xuXG4gIHN3aXRjaCAoc29ydGluZykge1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gb3JkZXI7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFsuLi5vcmRlcl0uc29ydCgoYSxiKSA9PiB7XG4gICAgICAgIHJldHVybiBhLmxvY2FsZUNvbXBhcmUoYiwgJ25iJywge1xuICAgICAgICAgIG51bWVyaWM6IHRydWUsXG4gICAgICAgICAgc2Vuc2l0aXZpdHk6ICdiYXNlJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBbLi4ub3JkZXJdLnNvcnQoKGEsYikgPT4ge1xuICAgICAgICByZXR1cm4gYi5sb2NhbGVDb21wYXJlKGEsICduYicsIHtcbiAgICAgICAgICBudW1lcmljOiB0cnVlLFxuICAgICAgICAgIHNlbnNpdGl2aXR5OiAnYmFzZSdcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICBjYXNlIDM6XG4gICAgICBsZXQgZGF5c0FzYyA9IGxpbmVEYXRhLmRheXNWYWxpZC5zbGljZSgpLnNvcnQoc29ydE1ldGhvZCgnZGF5cycsIHRydWUpKTtcbiAgICAgIHJldHVybiBkYXlzQXNjXG4gICAgICAgIC5maWx0ZXIobGluZSA9PiBvcmRlci5pbmRleE9mKGxpbmUubGluZU51bWJlcikgIT09IC0xKVxuICAgICAgICAubWFwKGxpbmUgPT4gbGluZS5saW5lTnVtYmVyKTtcbiAgICBjYXNlIDQ6XG4gICAgICBsZXQgZGF5c0Rlc2MgPSBsaW5lRGF0YS5kYXlzVmFsaWQuc2xpY2UoKS5zb3J0KHNvcnRNZXRob2QoJ2RheXMnLCBmYWxzZSkpO1xuICAgICAgcmV0dXJuIGRheXNEZXNjXG4gICAgICAgIC5maWx0ZXIobGluZSA9PiBvcmRlci5pbmRleE9mKGxpbmUubGluZU51bWJlcikgIT09IC0xKVxuICAgICAgICAubWFwKGxpbmUgPT4gbGluZS5saW5lTnVtYmVyKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHNvcnRJY29uID0gc29ydGluZyA9PiB7XG4gIGxldCBkZWYgPSAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjE4XCJcbiAgICAgIGhlaWdodD1cIjE4XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTggMjRcIlxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMyAxOGg2di0ySDN2MnpNMyA2djJoMThWNkgzem0wIDdoMTJ2LTJIM3YyelwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG4gIGxldCBkb3duID0gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIxOFwiXG4gICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDE4IDI0XCJcbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTcuNDEgNy44NEwxMiAxMi40Mmw0LjU5LTQuNThMMTggOS4yNWwtNiA2LTYtNnpcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xuICBsZXQgdXAgPSAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjE4XCJcbiAgICAgIGhlaWdodD1cIjE4XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTggMjRcIlxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNy40MSAxNS40MUwxMiAxMC44M2w0LjU5IDQuNThMMTggMTRsLTYtNi02IDZ6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbiAgbGV0IGF6ID0gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDE4XCJcbiAgICA+XG4gICAgICA8dGV4dCB4PVwiMTJcIiB5PVwiMTJcIiB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+QVo8L3RleHQ+XG4gICAgPC9zdmc+XG4gICk7XG4gIGxldCB6YSA9IChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMThcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAxOFwiXG4gICAgPlxuICAgICAgPHRleHQgeD1cIjEyXCIgeT1cIjEyXCIgdGV4dEFuY2hvcj1cIm1pZGRsZVwiPlpBPC90ZXh0PlxuICAgIDwvc3ZnPlxuICApO1xuICBzd2l0Y2ggKHNvcnRpbmcpIHtcbiAgICBkZWZhdWx0OlxuICAgIGNhc2UgMDpcbiAgICAgIHJldHVybiBkZWY7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIDxkaXY+e2F6fXtkb3dufTwvZGl2PjtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gPGRpdj57emF9e3VwfTwvZGl2PjtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gZG93bjtcbiAgICBjYXNlIDQ6XG4gICAgICByZXR1cm4gdXA7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB2YWxpZGl0eSA9IGRheXNGb3J3YXJkID0+IHtcbiAgaWYgKGRheXNGb3J3YXJkIDwgMCB8fCBkYXlzRm9yd2FyZCA9PT0gSW5maW5pdHkpIHtcbiAgICByZXR1cm4gJ0lOVkFMSUQnO1xuICB9IGVsc2UgaWYgKGRheXNGb3J3YXJkID49IDEyMCkge1xuICAgIHJldHVybiAnVkFMSUQnO1xuICB9XG4gIHJldHVybiAnRVhQSVJJTkcnO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlZ21lbnRDb2xvciA9IChkYXlzVmFsaWQsIG1vZGlmaWVyID0gMCkgPT4ge1xuICBsZXQgZ3JlZW4gPSAxMjAgKyBkYXlzVmFsaWQgKyBtb2RpZmllcjtcbiAgcmV0dXJuICcjRkYnICsgZ3JlZW4udG9TdHJpbmcoMTYpICsgJzAwJztcbn07XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50TmFtZSA9IChzZWdtZW50LCBudW1EYXlzLCBsb2NhbGUpID0+IHtcbiAgaWYgKHNlZ21lbnRNYXAobG9jYWxlKS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50KSAmJiBzZWdtZW50ICE9PSAnZHluYW1pYycpIHtcbiAgICByZXR1cm4gc2VnbWVudE1hcChsb2NhbGUpW3NlZ21lbnRdO1xuICB9XG5cbiAgcmV0dXJuIHNlZ21lbnRNYXAobG9jYWxlKVsnZHluYW1pYyddLnJlcGxhY2UoJ0RBWVMnLCBudW1EYXlzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZWdtZW50TmFtZTJLZXkgPSBzZWdtZW50TmFtZSA9PiB7XG4gIGlmICghdGV4dDJrZXkuaGFzT3duUHJvcGVydHkoc2VnbWVudE5hbWUpKSB7XG4gICAgbGV0IGlkeFN0YXJ0ID0gc2VnbWVudE5hbWUuaW5kZXhPZignPCAnKSArIDI7XG4gICAgbGV0IGlkeEVuZCA9IHNlZ21lbnROYW1lLmluZGV4T2YoJyBkYScpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlZ21lbnQ6ICdkeW5hbWljJyxcbiAgICAgIGRheXNWYWxpZDogcGFyc2VJbnQoc2VnbWVudE5hbWUuc3Vic3RyaW5nKGlkeFN0YXJ0LCBpZHhFbmQpKVxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHsgc2VnbWVudDogdGV4dDJrZXlbc2VnbWVudE5hbWVdLCBkYXlzVmFsaWQ6IDAgfTtcbn07XG5cbmNvbnN0IHNlZ21lbnRNYXAgPSBsb2NhbGUgPT4ge1xuICBzd2l0Y2ggKGxvY2FsZSkge1xuICAgIGNhc2UgJ25iJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFsbDogJ0FsbGUgbGluamVyJyxcbiAgICAgICAgdmFsaWQ6ICdHeWxkaWdlIGxpbmplcicsXG4gICAgICAgIGV4cGlyaW5nOiAnVXRnw6VlbmRlIGxpbmplcicsXG4gICAgICAgIGludmFsaWQ6ICdVdGfDpXR0ZSBsaW5qZXInLFxuICAgICAgICBkeW5hbWljOiAnVXRnw6VlbmRlIGxpbmplciAoPCBEQVlTIGRhZ2VyKSdcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICBjYXNlICdlbic6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhbGw6ICdBbGwgbGluZXMnLFxuICAgICAgICB2YWxpZDogJ1ZhbGlkIGxpbmVzJyxcbiAgICAgICAgZXhwaXJpbmc6ICdFeHBpcmluZyBsaW5lcycsXG4gICAgICAgIGludmFsaWQ6ICdJbnZhbGlkIGxpbmVzJyxcbiAgICAgICAgZHluYW1pYzogJ0V4cGlyaW5nIGxpbmVzICg8IERBWVMgZGF5cyknXG4gICAgICB9O1xuICAgIGNhc2UgJ2ZyJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFsbDogJ1RvdXRlcyBsZXMgbGlnbmVzJyxcbiAgICAgICAgdmFsaWQ6ICdMaWduZXMgdmFsaWRlcycsXG4gICAgICAgIGV4cGlyaW5nOiAnTGlnbmVzIGV4cGlyYW50JyxcbiAgICAgICAgaW52YWxpZDogJ0xpZ25lcyBpbnZhbGlkZXMnLFxuICAgICAgICBkeW5hbWljOiAnTElnbmVzIGV4cGlyYW50IGRhbnMgKDwgREFZUyBqb3VycyknXG4gICAgICB9O1xuICB9XG59O1xuXG5jb25zdCB0ZXh0MmtleSA9IHtcbiAgJ0FsbGUgbGluamVyJzogJ2FsbCcsXG4gICdHeWxkaWdlIGxpbmplcic6ICd2YWxpZCcsXG4gICdVdGfDpWVuZGUgbGluamVyJzogJ2V4cGlyaW5nJyxcbiAgJ1V0Z8OldHRlIGxpbmplcic6ICdpbnZhbGlkJyxcbiAgJ0FsbCBsaW5lcyc6ICdhbGwnLFxuICAnVmFsaWQgbGluZXMnOiAndmFsaWQnLFxuICAnRXhwaXJpbmcgbGluZXMnOiAnZXhwaXJpbmcnLFxuICAnSW52YWxpZCBsaW5lcyc6ICdpbnZhbGlkJ1xufTtcblxuY29uc3QgdmFsaWRQZXJpb2QgPSAoZW5kRGF0ZSwgZnJvbSwgdG8pID0+XG4gIG1vbWVudChlbmREYXRlKS5hZGQoMSwgJ2RheXMnKS5pc0JldHdlZW4oZnJvbSwgdG8sICdkYXlzJywgJ1tdJylcbiAgICA/IHRvXG4gICAgOiBlbmREYXRlO1xuXG5jb25zdCB2YWxpZERheXMgPSBsaW5lcyA9PlxuICBsaW5lcy5tYXAobGluZSA9PiB7XG4gICAgcmV0dXJuIHsgbGluZU51bWJlcjogbGluZS5saW5lTnVtYmVyLCBkYXlzOiBsaW5lLmRheXNWYWxpZCB9O1xuICB9KTtcblxuY29uc3QgZ2V0RGF5c1JhbmdlID0gKHN0YXJ0RGF0ZSwgZW5kID0gMCkgPT5cbiAgbW9tZW50LmlzTW9tZW50KGVuZCkgPyBlbmQuZGlmZihzdGFydERhdGUsICdkYXlzJykgOiBlbmQ7XG5cbmNvbnN0IG1pbkRheXMgPSBsaW5lTnVtYmVyMkRheXMgPT4ge1xuICBsZXQgZGF5cyA9IE1hdGgubWluKC4uLmxpbmVOdW1iZXIyRGF5cy5tYXAobGluZSA9PiBsaW5lLmRheXMpKTtcbiAgcmV0dXJuIHtcbiAgICBkYXlzOiBkYXlzID09PSBJbmZpbml0eSA/IDAgOiBkYXlzLFxuICAgIHZhbGlkaXR5OiB2YWxpZGl0eShkYXlzKVxuICB9O1xufTtcblxuY29uc3Qgc29ydFZhbGlkaXR5ID0gdmFsaWRpdHkgPT5cbiAgdmFsaWRpdHkuc29ydChcbiAgICAoYSwgYikgPT4gKGFbJ251bURheXNBdExlYXN0VmFsaWQnXSA8IGJbJ251bURheXNBdExlYXN0VmFsaWQnXSA/IC0xIDogMSlcbiAgKTtcblxuY29uc3QgbGluZXMgPSAobGluZVN0YXRzLCB2YWxpZGl0eSwgZGVmYXVsdE9iamVjdCkgPT5cbiAgbGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5Lm5hbWUgPT09IHZhbGlkaXR5KSB8fCB7XG4gICAgdmFsaWRpdHksXG4gICAgLi4uZGVmYXVsdE9iamVjdFxuICB9O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TGluZVN0YXRzID0gbGluZVN0YXRzID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkZWZhdWx0T2JqZWN0ID0geyBsaW5lTnVtYmVyczogW10gfTtcblxuICAgIGxldCBmb3JtYXR0ZWRMaW5lcyA9IHtcbiAgICAgIGludmFsaWQ6IGxpbmVzKGxpbmVTdGF0cywgJ0lOVkFMSUQnLCBkZWZhdWx0T2JqZWN0KSxcbiAgICAgIHZhbGlkOiBsaW5lcyhsaW5lU3RhdHMsICdWQUxJRCcsIGRlZmF1bHRPYmplY3QpLFxuICAgICAgZXhwaXJpbmc6IGxpbmVzKGxpbmVTdGF0cywgJ0VYUElSSU5HJywgZGVmYXVsdE9iamVjdCksXG4gICAgICB2YWxpZGl0eTogc29ydFZhbGlkaXR5KGxpbmVTdGF0cy52YWxpZGl0eUNhdGVnb3JpZXMpLFxuICAgICAgYWxsOiBkZWZhdWx0T2JqZWN0XG4gICAgfTtcblxuICAgIGZvcm1hdHRlZExpbmVzLmFsbC5saW5lTnVtYmVycyA9IFtdLmNvbmNhdChcbiAgICAgIC4uLmZvcm1hdHRlZExpbmVzLnZhbGlkaXR5Lm1hcChsaW5lcyA9PiBsaW5lcy5saW5lTnVtYmVycylcbiAgICApO1xuXG4gICAgbGV0IGxpbmVzTWFwID0ge307XG5cbiAgICBsZXQgc3RhcnREYXRlID0gbW9tZW50KGxpbmVTdGF0cy5zdGFydERhdGUsICdZWVlZLU1NLUREJyk7XG4gICAgbGV0IGVuZERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5hZGQobGluZVN0YXRzLmRheXMsICdkYXlzJyk7XG5cbiAgICBmb3JtYXR0ZWRMaW5lcy5zdGFydERhdGUgPSBzdGFydERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgZm9ybWF0dGVkTGluZXMuZGF5cyA9IGxpbmVTdGF0cy5kYXlzO1xuICAgIGZvcm1hdHRlZExpbmVzLmVuZERhdGUgPSBlbmREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuXG4gICAgbGluZVN0YXRzLnB1YmxpY0xpbmVzLmZvckVhY2gocHVibGljTGluZSA9PiB7XG4gICAgICBwdWJsaWNMaW5lLmVmZmVjdGl2ZVBlcmlvZHMuZm9yRWFjaChlZmZlY3RpdmVQZXJpb2QgPT4ge1xuICAgICAgICBsZXQgZnJvbURhdGUgPSBtb21lbnQoZWZmZWN0aXZlUGVyaW9kLmZyb20sICdZWVlZLU1NLUREJyk7XG4gICAgICAgIGxldCBmcm9tRGlmZiA9IHN0YXJ0RGF0ZS5kaWZmKGZyb21EYXRlLCAnZGF5cycsIHRydWUpO1xuXG4gICAgICAgIGlmIChmcm9tRGlmZiA+IDApIHtcbiAgICAgICAgICAvLyBub3cgaXMgYWZ0ZXIgc3RhcnQgZGF0ZSBvZiBlZmZlY3RpdmUgcGVyaW9kXG4gICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9XG4gICAgICAgICAgICBNYXRoLmFicyhmcm9tRGlmZikgLyBmb3JtYXR0ZWRMaW5lcy5kYXlzICogMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDA7XG5cbiAgICAgICAgbGV0IHRvRGF0ZSA9IG1vbWVudChlZmZlY3RpdmVQZXJpb2QudG8sICdZWVlZLU1NLUREJyk7XG4gICAgICAgIGxldCB0b0RpZmYgPSBtb21lbnQoZm9ybWF0dGVkTGluZXMuZW5kRGF0ZSwgJ1lZWVktTU0tREQnKS5kaWZmKFxuICAgICAgICAgIG1vbWVudCh0b0RhdGUpLmFkZCgxLCAnZGF5cycpLFxuICAgICAgICAgICdkYXlzJyxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRvRGlmZiA+IDApIHtcbiAgICAgICAgICB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwIC0gdG9EaWZmIC8gKGZvcm1hdHRlZExpbmVzLmRheXMgLyAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gPSBNYXRoLm1heCh0aW1lbGluZUVuZFBvc2l0aW9uLCAwKTtcblxuICAgICAgICBsZXQgZGF5c0ZvcndhcmQgPVxuICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC8gMTAwICogZm9ybWF0dGVkTGluZXMuZGF5cztcbiAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnZhbGlkYXRpb25MZXZlbCA9IHZhbGlkaXR5KGRheXNGb3J3YXJkKTtcblxuICAgICAgICBwdWJsaWNMaW5lLmRheXNWYWxpZCA9IHZhbGlkUGVyaW9kKFxuICAgICAgICAgIHB1YmxpY0xpbmUuZGF5c1ZhbGlkIHx8IHN0YXJ0RGF0ZSxcbiAgICAgICAgICBmcm9tRGF0ZSxcbiAgICAgICAgICB0b0RhdGVcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgcHVibGljTGluZS5kYXlzVmFsaWQgPSBnZXREYXlzUmFuZ2Uoc3RhcnREYXRlLCBwdWJsaWNMaW5lLmRheXNWYWxpZCk7XG5cbiAgICAgIHB1YmxpY0xpbmUubGluZXMuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgbGluZS50aW1ldGFibGVzLmZvckVhY2godGltZXRhYmxlID0+IHtcbiAgICAgICAgICB0aW1ldGFibGUucGVyaW9kcy5mb3JFYWNoKHBlcmlvZCA9PiB7XG4gICAgICAgICAgICBsZXQgZnJvbURpZmYgPSBzdGFydERhdGUuZGlmZihcbiAgICAgICAgICAgICAgbW9tZW50KHBlcmlvZC5mcm9tLCAnWVlZWS1NTS1ERCcpLFxuICAgICAgICAgICAgICAnZGF5cycsXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChmcm9tRGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9XG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoZnJvbURpZmYpIC8gZm9ybWF0dGVkTGluZXMuZGF5cyAqIDEwMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdGltZWxpbmVFbmRQb3NpdGlvbiA9IDEwMDtcblxuICAgICAgICAgICAgbGV0IHRvRGlmZiA9IG1vbWVudChmb3JtYXR0ZWRMaW5lcy5lbmREYXRlLCAnWVlZWS1NTS1ERCcpLmRpZmYoXG4gICAgICAgICAgICAgIG1vbWVudChwZXJpb2QudG8sICdZWVlZLU1NLUREJykuYWRkKDEsICdkYXlzJyksXG4gICAgICAgICAgICAgICdkYXlzJyxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKHRvRGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgdGltZWxpbmVFbmRQb3NpdGlvbiA9IDEwMCAtIHRvRGlmZiAvIChmb3JtYXR0ZWRMaW5lcy5kYXlzIC8gMTAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gPSBNYXRoLm1heCh0aW1lbGluZUVuZFBvc2l0aW9uLCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgbGluZXNNYXBbcHVibGljTGluZS5saW5lTnVtYmVyXSA9IHB1YmxpY0xpbmU7XG4gICAgfSk7XG5cbiAgICBmb3JtYXR0ZWRMaW5lcy5saW5lc01hcCA9IGxpbmVzTWFwO1xuICAgIGZvcm1hdHRlZExpbmVzLnZhbGlkRGF5c09mZnNldCA9IDMzO1xuICAgIGZvcm1hdHRlZExpbmVzLnZhbGlkRnJvbURhdGUgPSBtb21lbnQoc3RhcnREYXRlKVxuICAgICAgLmFkZCgxMjAsICdkYXlzJylcbiAgICAgIC5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICBmb3JtYXR0ZWRMaW5lcy5kYXlzVmFsaWQgPSB2YWxpZERheXMobGluZVN0YXRzLnB1YmxpY0xpbmVzKTtcbiAgICBmb3JtYXR0ZWRMaW5lcy5taW5EYXlzID0gbWluRGF5cyhmb3JtYXR0ZWRMaW5lcy5kYXlzVmFsaWQpO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZExpbmVzO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignZXJyb3IgaW4gZ2V0TGluZVN0YXRzJywgZSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==