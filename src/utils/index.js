import moment from 'moment';
import React from 'react';

export const filterLines = (lineData, selectedSegment, daysValid) => {
  if (lineData.hasOwnProperty(selectedSegment)) {
    return lineData[selectedSegment].lineNumbers;
  }

  for (let i in lineData.validity) {
    const category = lineData.validity[i];
    if (category.numDaysAtLeastValid === daysValid) {
      return category.lineNumbers;
    }
  }

  // fallback to all
  console.log('error, showing all data');
  return lineData['all'].lineNumbers;
};

export const sortMethod = (index = 0, ascending = true) => {
  return function(a, b) {
    if (a[index] === b[index]) {
      return 0;
    } else if (a[index] < b[index]) {
      return ascending ? -1 : 1;
    } else {
      return ascending ? 1 : -1;
    }
  };
};

export const sortLines = (sorting, lineData, selectedSegment, daysValid) => {
  const order = filterLines(lineData, selectedSegment, daysValid);

  switch (sorting) {
    default:
      return order;
    case 1:
      return [...order].sort((a,b) => {
        return a.localeCompare(b, 'nb', {
          numeric: true,
          sensitivity: 'base'
        });
      });
    case 2:
      return [...order].sort((a,b) => {
        return b.localeCompare(a, 'nb', {
          numeric: true,
          sensitivity: 'base'
        });
      });
    case 3:
      let daysAsc = lineData.daysValid.slice().sort(sortMethod('days', true));
      return daysAsc
        .filter(line => order.indexOf(line.lineNumber) !== -1)
        .map(line => line.lineNumber);
    case 4:
      let daysDesc = lineData.daysValid.slice().sort(sortMethod('days', false));
      return daysDesc
        .filter(line => order.indexOf(line.lineNumber) !== -1)
        .map(line => line.lineNumber);
  }
};

export const sortIcon = sorting => {
  let def = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 24"
    >
      <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
    </svg>
  );
  let down = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 24"
    >
      <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
    </svg>
  );
  let up = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 24"
    >
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </svg>
  );
  let az = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="18"
      viewBox="0 0 24 18"
    >
      <text x="12" y="12" textAnchor="middle">AZ</text>
    </svg>
  );
  let za = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="18"
      viewBox="0 0 24 18"
    >
      <text x="12" y="12" textAnchor="middle">ZA</text>
    </svg>
  );
  switch (sorting) {
    default:
    case 0:
      return def;
    case 1:
      return <div>{az}{down}</div>;
    case 2:
      return <div>{za}{up}</div>;
    case 3:
      return down;
    case 4:
      return up;
  }
};

export const validity = daysForward => {
  if (daysForward < 0 || daysForward === Infinity) {
    return 'INVALID';
  } else if (daysForward >= 120) {
    return 'VALID';
  }
  return 'EXPIRING';
};

export const segmentColor = (daysValid, modifier = 0) => {
  let green = 120 + daysValid + modifier;
  return '#FF' + green.toString(16) + '00';
};

export const segmentName = (segment, numDays, locale) => {
  if (segmentMap(locale).hasOwnProperty(segment) && segment !== 'dynamic') {
    return segmentMap(locale)[segment];
  }

  return segmentMap(locale)['dynamic'].replace('DAYS', numDays);
};

export const segmentName2Key = segmentName => {
  if (!text2key.hasOwnProperty(segmentName)) {
    let idxStart = segmentName.indexOf('< ') + 2;
    let idxEnd = segmentName.indexOf(' da');

    return {
      segment: 'dynamic',
      daysValid: parseInt(segmentName.substring(idxStart, idxEnd))
    };
  }
  return { segment: text2key[segmentName], daysValid: 0 };
};

const segmentMap = locale => {
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

const text2key = {
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

const validPeriod = (endDate, from, to) =>
  moment(endDate).add(1, 'days').isBetween(from, to, 'days', '[]')
    ? to
    : endDate;

const validDays = lines =>
  lines.map(line => {
    return { lineNumber: line.lineNumber, days: line.daysValid };
  });

const getDaysRange = (startDate, end = 0) =>
  moment.isMoment(end) ? end.diff(startDate, 'days') : end;

const minDays = lineNumber2Days => {
  let days = Math.min(...lineNumber2Days.map(line => line.days));
  return {
    days: days === Infinity ? 0 : days,
    validity: validity(days)
  };
};

const sortValidity = validity =>
  validity.sort(
    (a, b) => (a['numDaysAtLeastValid'] < b['numDaysAtLeastValid'] ? -1 : 1)
  );

const lines = (lineStats, validity, defaultObject) =>
  lineStats.validityCategories.find(category => category.name === validity) || {
    validity,
    ...defaultObject
  };

export const formatLineStats = lineStats => {
  try {
    const defaultObject = { lineNumbers: [] };

    let formattedLines = {
      invalid: lines(lineStats, 'INVALID', defaultObject),
      valid: lines(lineStats, 'VALID', defaultObject),
      expiring: lines(lineStats, 'EXPIRING', defaultObject),
      validity: sortValidity(lineStats.validityCategories),
      all: defaultObject
    };

    formattedLines.all.lineNumbers = [].concat(
      ...formattedLines.validity.map(lines => lines.lineNumbers)
    );

    let linesMap = {};

    let startDate = moment(lineStats.startDate, 'YYYY-MM-DD');
    let endDate = moment(startDate).add(lineStats.days, 'days');

    formattedLines.startDate = startDate.format('YYYY-MM-DD');
    formattedLines.days = lineStats.days;
    formattedLines.endDate = endDate.format('YYYY-MM-DD');

    lineStats.publicLines.forEach(publicLine => {
      publicLine.effectivePeriods.forEach(effectivePeriod => {
        let fromDate = moment(effectivePeriod.from, 'YYYY-MM-DD');
        let fromDiff = startDate.diff(fromDate, 'days', true);

        if (fromDiff > 0) {
          // now is after start date of effective period
          effectivePeriod.timelineStartPosition = 0;
        } else {
          effectivePeriod.timelineStartPosition =
            Math.abs(fromDiff) / formattedLines.days * 100;
        }

        let timelineEndPosition = 100;

        let toDate = moment(effectivePeriod.to, 'YYYY-MM-DD');
        let toDiff = moment(formattedLines.endDate, 'YYYY-MM-DD').diff(
          moment(toDate).add(1, 'days'),
          'days',
          true
        );

        if (toDiff > 0) {
          timelineEndPosition = 100 - toDiff / (formattedLines.days / 100);
        }

        effectivePeriod.timelineEndPosition = Math.max(timelineEndPosition, 0);

        let daysForward =
          effectivePeriod.timelineEndPosition / 100 * formattedLines.days;
        effectivePeriod.validationLevel = validity(daysForward);

        publicLine.daysValid = validPeriod(
          publicLine.daysValid || startDate,
          fromDate,
          toDate
        );
      });
      publicLine.daysValid = getDaysRange(startDate, publicLine.daysValid);

      publicLine.lines.forEach(line => {
        line.timetables.forEach(timetable => {
          timetable.periods.forEach(period => {
            let fromDiff = startDate.diff(
              moment(period.from, 'YYYY-MM-DD'),
              'days',
              true
            );

            if (fromDiff < 0) {
              period.timelineStartPosition =
                Math.abs(fromDiff) / formattedLines.days * 100;
            } else {
              period.timelineStartPosition = 0;
            }

            let timelineEndPosition = 100;

            let toDiff = moment(formattedLines.endDate, 'YYYY-MM-DD').diff(
              moment(period.to, 'YYYY-MM-DD').add(1, 'days'),
              'days',
              true
            );

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
    formattedLines.validFromDate = moment(startDate)
      .add(120, 'days')
      .format('YYYY-MM-DD');
    formattedLines.daysValid = validDays(lineStats.publicLines);
    formattedLines.minDays = minDays(formattedLines.daysValid);

    return formattedLines;
  } catch (e) {
    console.error('error in getLineStats', e);
  }
};
