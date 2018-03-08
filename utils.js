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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uPzVjYTYiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDMxNzgxYmQ5YjczMGM3MmU2ZDM0P2RiMTUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIj8zYzYyIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiJdLCJuYW1lcyI6WyJmaWx0ZXJMaW5lcyIsImxpbmVEYXRhIiwic2VsZWN0ZWRTZWdtZW50IiwiZGF5c1ZhbGlkIiwiaGFzT3duUHJvcGVydHkiLCJsaW5lTnVtYmVycyIsImkiLCJ2YWxpZGl0eSIsImNhdGVnb3J5IiwibnVtRGF5c0F0TGVhc3RWYWxpZCIsImNvbnNvbGUiLCJsb2ciLCJzb3J0TWV0aG9kIiwiaW5kZXgiLCJhc2NlbmRpbmciLCJhIiwiYiIsInNvcnRMaW5lcyIsInNvcnRpbmciLCJvcmRlciIsInNvcnQiLCJsb2NhbGVDb21wYXJlIiwibnVtZXJpYyIsInNlbnNpdGl2aXR5IiwiZGF5c0FzYyIsInNsaWNlIiwiZmlsdGVyIiwiaW5kZXhPZiIsImxpbmUiLCJsaW5lTnVtYmVyIiwibWFwIiwiZGF5c0Rlc2MiLCJzb3J0SWNvbiIsImRlZiIsImRvd24iLCJ1cCIsImF6IiwiemEiLCJkYXlzRm9yd2FyZCIsIkluZmluaXR5Iiwic2VnbWVudENvbG9yIiwibW9kaWZpZXIiLCJncmVlbiIsInRvU3RyaW5nIiwic2VnbWVudE5hbWUiLCJzZWdtZW50IiwibnVtRGF5cyIsImxvY2FsZSIsInNlZ21lbnRNYXAiLCJyZXBsYWNlIiwic2VnbWVudE5hbWUyS2V5IiwidGV4dDJrZXkiLCJpZHhTdGFydCIsImlkeEVuZCIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiYWxsIiwidmFsaWQiLCJleHBpcmluZyIsImludmFsaWQiLCJkeW5hbWljIiwidmFsaWRQZXJpb2QiLCJlbmREYXRlIiwiZnJvbSIsInRvIiwiYWRkIiwiaXNCZXR3ZWVuIiwidmFsaWREYXlzIiwibGluZXMiLCJkYXlzIiwiZ2V0RGF5c1JhbmdlIiwic3RhcnREYXRlIiwiZW5kIiwiaXNNb21lbnQiLCJkaWZmIiwibWluRGF5cyIsIk1hdGgiLCJtaW4iLCJsaW5lTnVtYmVyMkRheXMiLCJzb3J0VmFsaWRpdHkiLCJsaW5lU3RhdHMiLCJkZWZhdWx0T2JqZWN0IiwidmFsaWRpdHlDYXRlZ29yaWVzIiwiZmluZCIsIm5hbWUiLCJmb3JtYXRMaW5lU3RhdHMiLCJmb3JtYXR0ZWRMaW5lcyIsImNvbmNhdCIsImxpbmVzTWFwIiwiZm9ybWF0IiwicHVibGljTGluZXMiLCJmb3JFYWNoIiwicHVibGljTGluZSIsImVmZmVjdGl2ZVBlcmlvZHMiLCJmcm9tRGF0ZSIsImVmZmVjdGl2ZVBlcmlvZCIsImZyb21EaWZmIiwidGltZWxpbmVTdGFydFBvc2l0aW9uIiwiYWJzIiwidGltZWxpbmVFbmRQb3NpdGlvbiIsInRvRGF0ZSIsInRvRGlmZiIsIm1heCIsInZhbGlkYXRpb25MZXZlbCIsInRpbWV0YWJsZXMiLCJ0aW1ldGFibGUiLCJwZXJpb2RzIiwicGVyaW9kIiwidmFsaWREYXlzT2Zmc2V0IiwidmFsaWRGcm9tRGF0ZSIsImUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixF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biB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpLCByZXF1aXJlKFwibW9tZW50XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcInJlYWN0XCIsIFwibW9tZW50XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImJvZ3VcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSwgcmVxdWlyZShcIm1vbWVudFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiYm9ndVwiXSA9IGZhY3Rvcnkocm9vdFtcInJlYWN0XCJdLCByb290W1wibW9tZW50XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzlfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzMTc4MWJkOWI3MzBjNzJlNmQzNCIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IGZpbHRlckxpbmVzID0gKGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZCkgPT4ge1xuICBpZiAobGluZURhdGEuaGFzT3duUHJvcGVydHkoc2VsZWN0ZWRTZWdtZW50KSkge1xuICAgIHJldHVybiBsaW5lRGF0YVtzZWxlY3RlZFNlZ21lbnRdLmxpbmVOdW1iZXJzO1xuICB9XG5cbiAgZm9yIChsZXQgaSBpbiBsaW5lRGF0YS52YWxpZGl0eSkge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gbGluZURhdGEudmFsaWRpdHlbaV07XG4gICAgaWYgKGNhdGVnb3J5Lm51bURheXNBdExlYXN0VmFsaWQgPT09IGRheXNWYWxpZCkge1xuICAgICAgcmV0dXJuIGNhdGVnb3J5LmxpbmVOdW1iZXJzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZhbGxiYWNrIHRvIGFsbFxuICBjb25zb2xlLmxvZygnZXJyb3IsIHNob3dpbmcgYWxsIGRhdGEnKTtcbiAgcmV0dXJuIGxpbmVEYXRhWydhbGwnXS5saW5lTnVtYmVycztcbn07XG5cbmV4cG9ydCBjb25zdCBzb3J0TWV0aG9kID0gKGluZGV4ID0gMCwgYXNjZW5kaW5nID0gdHJ1ZSkgPT4ge1xuICByZXR1cm4gZnVuY3Rpb24oYSwgYikge1xuICAgIGlmIChhW2luZGV4XSA9PT0gYltpbmRleF0pIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSBpZiAoYVtpbmRleF0gPCBiW2luZGV4XSkge1xuICAgICAgcmV0dXJuIGFzY2VuZGluZyA/IC0xIDogMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFzY2VuZGluZyA/IDEgOiAtMTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydExpbmVzID0gKHNvcnRpbmcsIGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZCkgPT4ge1xuICBjb25zdCBvcmRlciA9IGZpbHRlckxpbmVzKGxpbmVEYXRhLCBzZWxlY3RlZFNlZ21lbnQsIGRheXNWYWxpZCk7XG5cbiAgc3dpdGNoIChzb3J0aW5nKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBvcmRlcjtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gWy4uLm9yZGVyXS5zb3J0KChhLGIpID0+IHtcbiAgICAgICAgcmV0dXJuIGEubG9jYWxlQ29tcGFyZShiLCAnbmInLCB7XG4gICAgICAgICAgbnVtZXJpYzogdHJ1ZSxcbiAgICAgICAgICBzZW5zaXRpdml0eTogJ2Jhc2UnXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIFsuLi5vcmRlcl0uc29ydCgoYSxiKSA9PiB7XG4gICAgICAgIHJldHVybiBiLmxvY2FsZUNvbXBhcmUoYSwgJ25iJywge1xuICAgICAgICAgIG51bWVyaWM6IHRydWUsXG4gICAgICAgICAgc2Vuc2l0aXZpdHk6ICdiYXNlJ1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIGNhc2UgMzpcbiAgICAgIGxldCBkYXlzQXNjID0gbGluZURhdGEuZGF5c1ZhbGlkLnNsaWNlKCkuc29ydChzb3J0TWV0aG9kKCdkYXlzJywgdHJ1ZSkpO1xuICAgICAgcmV0dXJuIGRheXNBc2NcbiAgICAgICAgLmZpbHRlcihsaW5lID0+IG9yZGVyLmluZGV4T2YobGluZS5saW5lTnVtYmVyKSAhPT0gLTEpXG4gICAgICAgIC5tYXAobGluZSA9PiBsaW5lLmxpbmVOdW1iZXIpO1xuICAgIGNhc2UgNDpcbiAgICAgIGxldCBkYXlzRGVzYyA9IGxpbmVEYXRhLmRheXNWYWxpZC5zbGljZSgpLnNvcnQoc29ydE1ldGhvZCgnZGF5cycsIGZhbHNlKSk7XG4gICAgICByZXR1cm4gZGF5c0Rlc2NcbiAgICAgICAgLmZpbHRlcihsaW5lID0+IG9yZGVyLmluZGV4T2YobGluZS5saW5lTnVtYmVyKSAhPT0gLTEpXG4gICAgICAgIC5tYXAobGluZSA9PiBsaW5lLmxpbmVOdW1iZXIpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc29ydEljb24gPSBzb3J0aW5nID0+IHtcbiAgbGV0IGRlZiA9IChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgaGVpZ2h0PVwiMThcIlxuICAgICAgdmlld0JveD1cIjAgMCAxOCAyNFwiXG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0zIDE4aDZ2LTJIM3Yyek0zIDZ2MmgxOFY2SDN6bTAgN2gxMnYtMkgzdjJ6XCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbiAgbGV0IGRvd24gPSAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjE4XCJcbiAgICAgIGhlaWdodD1cIjE4XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTggMjRcIlxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNy40MSA3Ljg0TDEyIDEyLjQybDQuNTktNC41OEwxOCA5LjI1bC02IDYtNi02elwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG4gIGxldCB1cCA9IChcbiAgICA8c3ZnXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHdpZHRoPVwiMThcIlxuICAgICAgaGVpZ2h0PVwiMThcIlxuICAgICAgdmlld0JveD1cIjAgMCAxOCAyNFwiXG4gICAgPlxuICAgICAgPHBhdGggZD1cIk03LjQxIDE1LjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNGwtNi02LTYgNnpcIiAvPlxuICAgIDwvc3ZnPlxuICApO1xuICBsZXQgYXogPSAoXG4gICAgPHN2Z1xuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjE4XCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMThcIlxuICAgID5cbiAgICAgIDx0ZXh0IHg9XCIxMlwiIHk9XCIxMlwiIHRleHRBbmNob3I9XCJtaWRkbGVcIj5BWjwvdGV4dD5cbiAgICA8L3N2Zz5cbiAgKTtcbiAgbGV0IHphID0gKFxuICAgIDxzdmdcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgd2lkdGg9XCIyNFwiXG4gICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDE4XCJcbiAgICA+XG4gICAgICA8dGV4dCB4PVwiMTJcIiB5PVwiMTJcIiB0ZXh0QW5jaG9yPVwibWlkZGxlXCI+WkE8L3RleHQ+XG4gICAgPC9zdmc+XG4gICk7XG4gIHN3aXRjaCAoc29ydGluZykge1xuICAgIGRlZmF1bHQ6XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIGRlZjtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gPGRpdj57YXp9e2Rvd259PC9kaXY+O1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiA8ZGl2Pnt6YX17dXB9PC9kaXY+O1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBkb3duO1xuICAgIGNhc2UgNDpcbiAgICAgIHJldHVybiB1cDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IHZhbGlkaXR5ID0gZGF5c0ZvcndhcmQgPT4ge1xuICBpZiAoZGF5c0ZvcndhcmQgPCAwIHx8IGRheXNGb3J3YXJkID09PSBJbmZpbml0eSkge1xuICAgIHJldHVybiAnSU5WQUxJRCc7XG4gIH0gZWxzZSBpZiAoZGF5c0ZvcndhcmQgPj0gMTIwKSB7XG4gICAgcmV0dXJuICdWQUxJRCc7XG4gIH1cbiAgcmV0dXJuICdFWFBJUklORyc7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VnbWVudENvbG9yID0gKGRheXNWYWxpZCwgbW9kaWZpZXIgPSAwKSA9PiB7XG4gIGxldCBncmVlbiA9IDEyMCArIGRheXNWYWxpZCArIG1vZGlmaWVyO1xuICByZXR1cm4gJyNGRicgKyBncmVlbi50b1N0cmluZygxNikgKyAnMDAnO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlZ21lbnROYW1lID0gKHNlZ21lbnQsIG51bURheXMsIGxvY2FsZSkgPT4ge1xuICBpZiAoc2VnbWVudE1hcChsb2NhbGUpLmhhc093blByb3BlcnR5KHNlZ21lbnQpICYmIHNlZ21lbnQgIT09ICdkeW5hbWljJykge1xuICAgIHJldHVybiBzZWdtZW50TWFwKGxvY2FsZSlbc2VnbWVudF07XG4gIH1cblxuICByZXR1cm4gc2VnbWVudE1hcChsb2NhbGUpWydkeW5hbWljJ10ucmVwbGFjZSgnREFZUycsIG51bURheXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNlZ21lbnROYW1lMktleSA9IHNlZ21lbnROYW1lID0+IHtcbiAgaWYgKCF0ZXh0MmtleS5oYXNPd25Qcm9wZXJ0eShzZWdtZW50TmFtZSkpIHtcbiAgICBsZXQgaWR4U3RhcnQgPSBzZWdtZW50TmFtZS5pbmRleE9mKCc8ICcpICsgMjtcbiAgICBsZXQgaWR4RW5kID0gc2VnbWVudE5hbWUuaW5kZXhPZignIGRhJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VnbWVudDogJ2R5bmFtaWMnLFxuICAgICAgZGF5c1ZhbGlkOiBwYXJzZUludChzZWdtZW50TmFtZS5zdWJzdHJpbmcoaWR4U3RhcnQsIGlkeEVuZCkpXG4gICAgfTtcbiAgfVxuICByZXR1cm4geyBzZWdtZW50OiB0ZXh0MmtleVtzZWdtZW50TmFtZV0sIGRheXNWYWxpZDogMCB9O1xufTtcblxuY29uc3Qgc2VnbWVudE1hcCA9IGxvY2FsZSA9PiB7XG4gIHN3aXRjaCAobG9jYWxlKSB7XG4gICAgY2FzZSAnbmInOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWxsOiAnQWxsZSBsaW5qZXInLFxuICAgICAgICB2YWxpZDogJ0d5bGRpZ2UgbGluamVyJyxcbiAgICAgICAgZXhwaXJpbmc6ICdVdGfDpWVuZGUgbGluamVyJyxcbiAgICAgICAgaW52YWxpZDogJ1V0Z8OldHRlIGxpbmplcicsXG4gICAgICAgIGR5bmFtaWM6ICdVdGfDpWVuZGUgbGluamVyICg8IERBWVMgZGFnZXIpJ1xuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgIGNhc2UgJ2VuJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFsbDogJ0FsbCBsaW5lcycsXG4gICAgICAgIHZhbGlkOiAnVmFsaWQgbGluZXMnLFxuICAgICAgICBleHBpcmluZzogJ0V4cGlyaW5nIGxpbmVzJyxcbiAgICAgICAgaW52YWxpZDogJ0ludmFsaWQgbGluZXMnLFxuICAgICAgICBkeW5hbWljOiAnRXhwaXJpbmcgbGluZXMgKDwgREFZUyBkYXlzKSdcbiAgICAgIH07XG4gICAgY2FzZSAnZnInOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWxsOiAnVG91dGVzIGxlcyBsaWduZXMnLFxuICAgICAgICB2YWxpZDogJ0xpZ25lcyB2YWxpZGVzJyxcbiAgICAgICAgZXhwaXJpbmc6ICdMaWduZXMgZXhwaXJhbnQnLFxuICAgICAgICBpbnZhbGlkOiAnTGlnbmVzIGludmFsaWRlcycsXG4gICAgICAgIGR5bmFtaWM6ICdMaWduZXMgZXhwaXJhbnQgKDwgREFZUyBqb3VycyknXG4gICAgICB9O1xuICB9XG59O1xuXG5jb25zdCB0ZXh0MmtleSA9IHtcbiAgJ0FsbGUgbGluamVyJzogJ2FsbCcsXG4gICdHeWxkaWdlIGxpbmplcic6ICd2YWxpZCcsXG4gICdVdGfDpWVuZGUgbGluamVyJzogJ2V4cGlyaW5nJyxcbiAgJ1V0Z8OldHRlIGxpbmplcic6ICdpbnZhbGlkJyxcbiAgJ0FsbCBsaW5lcyc6ICdhbGwnLFxuICAnVmFsaWQgbGluZXMnOiAndmFsaWQnLFxuICAnRXhwaXJpbmcgbGluZXMnOiAnZXhwaXJpbmcnLFxuICAnSW52YWxpZCBsaW5lcyc6ICdpbnZhbGlkJyxcbiAgJ1RvdXRlcyBsZXMgbGlnbmVzJzogJ2FsbCcsXG4gICdMaWduZXMgdmFsaWRlcyc6ICd2YWxpZCcsXG4gICdMaWduZXMgZXhwaXJhbnQnOiAnZXhwaXJpbmcnLFxuICAnTGlnbmVzIGludmFsaWRlcyc6ICdpbnZhbGlkJ1xufTtcblxuY29uc3QgdmFsaWRQZXJpb2QgPSAoZW5kRGF0ZSwgZnJvbSwgdG8pID0+XG4gIG1vbWVudChlbmREYXRlKS5hZGQoMSwgJ2RheXMnKS5pc0JldHdlZW4oZnJvbSwgdG8sICdkYXlzJywgJ1tdJylcbiAgICA/IHRvXG4gICAgOiBlbmREYXRlO1xuXG5jb25zdCB2YWxpZERheXMgPSBsaW5lcyA9PlxuICBsaW5lcy5tYXAobGluZSA9PiB7XG4gICAgcmV0dXJuIHsgbGluZU51bWJlcjogbGluZS5saW5lTnVtYmVyLCBkYXlzOiBsaW5lLmRheXNWYWxpZCB9O1xuICB9KTtcblxuY29uc3QgZ2V0RGF5c1JhbmdlID0gKHN0YXJ0RGF0ZSwgZW5kID0gMCkgPT5cbiAgbW9tZW50LmlzTW9tZW50KGVuZCkgPyBlbmQuZGlmZihzdGFydERhdGUsICdkYXlzJykgOiBlbmQ7XG5cbmNvbnN0IG1pbkRheXMgPSBsaW5lTnVtYmVyMkRheXMgPT4ge1xuICBsZXQgZGF5cyA9IE1hdGgubWluKC4uLmxpbmVOdW1iZXIyRGF5cy5tYXAobGluZSA9PiBsaW5lLmRheXMpKTtcbiAgcmV0dXJuIHtcbiAgICBkYXlzOiBkYXlzID09PSBJbmZpbml0eSA/IDAgOiBkYXlzLFxuICAgIHZhbGlkaXR5OiB2YWxpZGl0eShkYXlzKVxuICB9O1xufTtcblxuY29uc3Qgc29ydFZhbGlkaXR5ID0gdmFsaWRpdHkgPT5cbiAgdmFsaWRpdHkuc29ydChcbiAgICAoYSwgYikgPT4gKGFbJ251bURheXNBdExlYXN0VmFsaWQnXSA8IGJbJ251bURheXNBdExlYXN0VmFsaWQnXSA/IC0xIDogMSlcbiAgKTtcblxuY29uc3QgbGluZXMgPSAobGluZVN0YXRzLCB2YWxpZGl0eSwgZGVmYXVsdE9iamVjdCkgPT5cbiAgbGluZVN0YXRzLnZhbGlkaXR5Q2F0ZWdvcmllcy5maW5kKGNhdGVnb3J5ID0+IGNhdGVnb3J5Lm5hbWUgPT09IHZhbGlkaXR5KSB8fCB7XG4gICAgdmFsaWRpdHksXG4gICAgLi4uZGVmYXVsdE9iamVjdFxuICB9O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TGluZVN0YXRzID0gbGluZVN0YXRzID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkZWZhdWx0T2JqZWN0ID0geyBsaW5lTnVtYmVyczogW10gfTtcblxuICAgIGxldCBmb3JtYXR0ZWRMaW5lcyA9IHtcbiAgICAgIGludmFsaWQ6IGxpbmVzKGxpbmVTdGF0cywgJ0lOVkFMSUQnLCBkZWZhdWx0T2JqZWN0KSxcbiAgICAgIHZhbGlkOiBsaW5lcyhsaW5lU3RhdHMsICdWQUxJRCcsIGRlZmF1bHRPYmplY3QpLFxuICAgICAgZXhwaXJpbmc6IGxpbmVzKGxpbmVTdGF0cywgJ0VYUElSSU5HJywgZGVmYXVsdE9iamVjdCksXG4gICAgICB2YWxpZGl0eTogc29ydFZhbGlkaXR5KGxpbmVTdGF0cy52YWxpZGl0eUNhdGVnb3JpZXMpLFxuICAgICAgYWxsOiBkZWZhdWx0T2JqZWN0XG4gICAgfTtcblxuICAgIGZvcm1hdHRlZExpbmVzLmFsbC5saW5lTnVtYmVycyA9IFtdLmNvbmNhdChcbiAgICAgIC4uLmZvcm1hdHRlZExpbmVzLnZhbGlkaXR5Lm1hcChsaW5lcyA9PiBsaW5lcy5saW5lTnVtYmVycylcbiAgICApO1xuXG4gICAgbGV0IGxpbmVzTWFwID0ge307XG5cbiAgICBsZXQgc3RhcnREYXRlID0gbW9tZW50KGxpbmVTdGF0cy5zdGFydERhdGUsICdZWVlZLU1NLUREJyk7XG4gICAgbGV0IGVuZERhdGUgPSBtb21lbnQoc3RhcnREYXRlKS5hZGQobGluZVN0YXRzLmRheXMsICdkYXlzJyk7XG5cbiAgICBmb3JtYXR0ZWRMaW5lcy5zdGFydERhdGUgPSBzdGFydERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgZm9ybWF0dGVkTGluZXMuZGF5cyA9IGxpbmVTdGF0cy5kYXlzO1xuICAgIGZvcm1hdHRlZExpbmVzLmVuZERhdGUgPSBlbmREYXRlLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuXG4gICAgbGluZVN0YXRzLnB1YmxpY0xpbmVzLmZvckVhY2gocHVibGljTGluZSA9PiB7XG4gICAgICBwdWJsaWNMaW5lLmVmZmVjdGl2ZVBlcmlvZHMuZm9yRWFjaChlZmZlY3RpdmVQZXJpb2QgPT4ge1xuICAgICAgICBsZXQgZnJvbURhdGUgPSBtb21lbnQoZWZmZWN0aXZlUGVyaW9kLmZyb20sICdZWVlZLU1NLUREJyk7XG4gICAgICAgIGxldCBmcm9tRGlmZiA9IHN0YXJ0RGF0ZS5kaWZmKGZyb21EYXRlLCAnZGF5cycsIHRydWUpO1xuXG4gICAgICAgIGlmIChmcm9tRGlmZiA+IDApIHtcbiAgICAgICAgICAvLyBub3cgaXMgYWZ0ZXIgc3RhcnQgZGF0ZSBvZiBlZmZlY3RpdmUgcGVyaW9kXG4gICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9XG4gICAgICAgICAgICBNYXRoLmFicyhmcm9tRGlmZikgLyBmb3JtYXR0ZWRMaW5lcy5kYXlzICogMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHRpbWVsaW5lRW5kUG9zaXRpb24gPSAxMDA7XG5cbiAgICAgICAgbGV0IHRvRGF0ZSA9IG1vbWVudChlZmZlY3RpdmVQZXJpb2QudG8sICdZWVlZLU1NLUREJyk7XG4gICAgICAgIGxldCB0b0RpZmYgPSBtb21lbnQoZm9ybWF0dGVkTGluZXMuZW5kRGF0ZSwgJ1lZWVktTU0tREQnKS5kaWZmKFxuICAgICAgICAgIG1vbWVudCh0b0RhdGUpLmFkZCgxLCAnZGF5cycpLFxuICAgICAgICAgICdkYXlzJyxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHRvRGlmZiA+IDApIHtcbiAgICAgICAgICB0aW1lbGluZUVuZFBvc2l0aW9uID0gMTAwIC0gdG9EaWZmIC8gKGZvcm1hdHRlZExpbmVzLmRheXMgLyAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gPSBNYXRoLm1heCh0aW1lbGluZUVuZFBvc2l0aW9uLCAwKTtcblxuICAgICAgICBsZXQgZGF5c0ZvcndhcmQgPVxuICAgICAgICAgIGVmZmVjdGl2ZVBlcmlvZC50aW1lbGluZUVuZFBvc2l0aW9uIC8gMTAwICogZm9ybWF0dGVkTGluZXMuZGF5cztcbiAgICAgICAgZWZmZWN0aXZlUGVyaW9kLnZhbGlkYXRpb25MZXZlbCA9IHZhbGlkaXR5KGRheXNGb3J3YXJkKTtcblxuICAgICAgICBwdWJsaWNMaW5lLmRheXNWYWxpZCA9IHZhbGlkUGVyaW9kKFxuICAgICAgICAgIHB1YmxpY0xpbmUuZGF5c1ZhbGlkIHx8IHN0YXJ0RGF0ZSxcbiAgICAgICAgICBmcm9tRGF0ZSxcbiAgICAgICAgICB0b0RhdGVcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgcHVibGljTGluZS5kYXlzVmFsaWQgPSBnZXREYXlzUmFuZ2Uoc3RhcnREYXRlLCBwdWJsaWNMaW5lLmRheXNWYWxpZCk7XG5cbiAgICAgIHB1YmxpY0xpbmUubGluZXMuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgbGluZS50aW1ldGFibGVzLmZvckVhY2godGltZXRhYmxlID0+IHtcbiAgICAgICAgICB0aW1ldGFibGUucGVyaW9kcy5mb3JFYWNoKHBlcmlvZCA9PiB7XG4gICAgICAgICAgICBsZXQgZnJvbURpZmYgPSBzdGFydERhdGUuZGlmZihcbiAgICAgICAgICAgICAgbW9tZW50KHBlcmlvZC5mcm9tLCAnWVlZWS1NTS1ERCcpLFxuICAgICAgICAgICAgICAnZGF5cycsXG4gICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChmcm9tRGlmZiA8IDApIHtcbiAgICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lU3RhcnRQb3NpdGlvbiA9XG4gICAgICAgICAgICAgICAgTWF0aC5hYnMoZnJvbURpZmYpIC8gZm9ybWF0dGVkTGluZXMuZGF5cyAqIDEwMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBlcmlvZC50aW1lbGluZVN0YXJ0UG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdGltZWxpbmVFbmRQb3NpdGlvbiA9IDEwMDtcblxuICAgICAgICAgICAgbGV0IHRvRGlmZiA9IG1vbWVudChmb3JtYXR0ZWRMaW5lcy5lbmREYXRlLCAnWVlZWS1NTS1ERCcpLmRpZmYoXG4gICAgICAgICAgICAgIG1vbWVudChwZXJpb2QudG8sICdZWVlZLU1NLUREJykuYWRkKDEsICdkYXlzJyksXG4gICAgICAgICAgICAgICdkYXlzJyxcbiAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKHRvRGlmZiA+IDApIHtcbiAgICAgICAgICAgICAgdGltZWxpbmVFbmRQb3NpdGlvbiA9IDEwMCAtIHRvRGlmZiAvIChmb3JtYXR0ZWRMaW5lcy5kYXlzIC8gMTAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGVyaW9kLnRpbWVsaW5lRW5kUG9zaXRpb24gPSBNYXRoLm1heCh0aW1lbGluZUVuZFBvc2l0aW9uLCAwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgbGluZXNNYXBbcHVibGljTGluZS5saW5lTnVtYmVyXSA9IHB1YmxpY0xpbmU7XG4gICAgfSk7XG5cbiAgICBmb3JtYXR0ZWRMaW5lcy5saW5lc01hcCA9IGxpbmVzTWFwO1xuICAgIGZvcm1hdHRlZExpbmVzLnZhbGlkRGF5c09mZnNldCA9IDMzO1xuICAgIGZvcm1hdHRlZExpbmVzLnZhbGlkRnJvbURhdGUgPSBtb21lbnQoc3RhcnREYXRlKVxuICAgICAgLmFkZCgxMjAsICdkYXlzJylcbiAgICAgIC5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICBmb3JtYXR0ZWRMaW5lcy5kYXlzVmFsaWQgPSB2YWxpZERheXMobGluZVN0YXRzLnB1YmxpY0xpbmVzKTtcbiAgICBmb3JtYXR0ZWRMaW5lcy5taW5EYXlzID0gbWluRGF5cyhmb3JtYXR0ZWRMaW5lcy5kYXlzVmFsaWQpO1xuXG4gICAgcmV0dXJuIGZvcm1hdHRlZExpbmVzO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcignZXJyb3IgaW4gZ2V0TGluZVN0YXRzJywgZSk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfOV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==