import moment from 'moment'

export const filterLines = (lineData, selectedSegment, daysValid) => {
  if (lineData.hasOwnProperty(selectedSegment)) {
    return lineData[selectedSegment].lineNumbers
  }

  for (let i in lineData.validity) {
    const category = lineData.validity[i]
    if (category.numDaysAtLeastValid === daysValid) {
      return category.lineNumbers
    }
  }

  // fallback to all
  console.log("error, showing all data")
  return lineData['all'].lineNumbers
}

export const sortLines = (sorting, lineData, selectedSegment, daysValid) => {
  const order = filterLines(lineData, selectedSegment, daysValid)

  switch (sorting) {
    default:
      return order
    case 1:
      return order.sort()
    case 2:
      return order.sort().reverse()
    case 3:
      let daysAsc = lineData.daysValid.slice().sort( this.sortMethod('days', true) )
      return daysAsc.filter( (line) => order.indexOf(line.lineNumber) !== -1).map((line) => line.lineNumber)
    case 4:
      let daysDesc = lineData.daysValid.slice().sort( this.sortMethod('days', false) )
      return daysDesc.filter( (line) => order.indexOf(line.lineNumber) !== -1 ).map( (line) => line.lineNumber)
  }
}

export const sortIcon = (sorting) => {
  let def = <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 24"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/></svg>
  let down = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 24"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/></svg>
  let up = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>
  let az = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18"><text x="12" y="12" textAnchor="middle">AZ</text></svg>
  let za = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18"><text x="12" y="12" textAnchor="middle">ZA</text></svg>
  switch (sorting) {
    default:
    case 0:
      return def
    case 1:
      return <div>{az}{down}</div>
    case 2:
      return <div>{za}{up}</div>
    case 3:
      return down
    case 4:
      return up
  }
}

export const validity = (daysForward) => {
  if (daysForward > 127) {
    return 'VALID'
  } else if (daysForward >= 120) {
    return 'SOON_INVALID'
  } else if (daysForward === 0) {
    return 'INVALID'
  }
  return 'EXPIRED'
}

export const segmentColor = (daysValid, modifier = 0) => {
  let green = 120 + daysValid + modifier
  return '#FF' + green.toString(16) +'00'
}

export const segmentName = (segment, numDays) => {
  if (segmentMap.hasOwnProperty(segment) && segment !== 'dynamic') {
    return segmentMap[segment]
  }

  return segmentMap['dynamic'].replace('DAYS', numDays)
}

export const segmentName2Key = (segmentName) => {
  if (!text2key.hasOwnProperty(segmentName)) {
    let idxStart = segmentName.indexOf('- ') + 2
    let idxEnd = segmentName.indexOf(' dager')

    return {segment: 'dynamic', daysValid: parseInt(segmentName.substring(idxStart, idxEnd))}
  }
  return {segment: text2key[segmentName], daysValid: 0}
}

const segmentMap = {
  'valid' : 'Linjer i gyldig periode',
  'soonInvalid' : 'Linjer med gyldighetsperiode som snart utgår',
  'invalid' : 'Linjer med manglende gyldighetsperiode',
  'all' : 'Alle linjer',
  'dynamic': 'Utgåtte linjer - DAYS dager igjen'
}

const text2key = {
  'Alle linjer' : 'all',
  'Linjer i gyldig periode' : 'valid',
  'Linjer med gyldighetsperiode som snart utgår' : 'soonInvalid',
  'Linjer med manglende gyldighetsperiode' : 'invalid',
}

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

const validPeriod = (endDate, from, to) => (moment(endDate).add(1, 'days').isBetween(from, to, 'days', '[]')) ? to : endDate

const validDays = (lines) => lines.map(line => { return {lineNumber: line.lineNumber, days: line.daysValid} })

const getDaysRange = (startDate, end = 0) => moment.isMoment(end) ? end.diff(startDate, 'days') : end

const minDays = (lineNumber2Days) => {
  let days = Math.min(...lineNumber2Days.map( line => line.days))
  return {
    days: days,
    validity: validity(days)
  }
}

const sortValidity = validity => validity.sort( (a, b) => a['numDaysAtLeastValid'] < b['numDaysAtLeastValid'] ? -1 : 1)

export const formatLineStats = lineStats => {

  try {

    const defaultObject = { lineNumbers: [] }

    let formattedLines = {
      invalid: lineStats.validityCategories
        .filter( (category) => category.numDaysAtLeastValid < 120)[0] || defaultObject,
      valid: lineStats.validityCategories
        .filter( (category) => category.numDaysAtLeastValid >= 127)[0] || defaultObject,
      soonInvalid: lineStats.validityCategories
        .filter( (category) => (category.numDaysAtLeastValid >= 120 && category.numDaysAtLeastValid < 127))[0] || defaultObject,
      validity: sortValidity(lineStats.validityCategories),
      all: defaultObject
    }

    formattedLines.all.lineNumbers = [].concat(... formattedLines.validity.map(lines => lines.lineNumbers ) )

    let linesMap = {}

    let startDate = moment(lineStats.startDate, 'YYYY-MM-DD')
    let endDate = moment(startDate).add(lineStats.days, 'days')

    formattedLines.startDate = startDate.format('YYYY-MM-DD')
    formattedLines.days = lineStats.days
    formattedLines.endDate = endDate.format('YYYY-MM-DD')

    lineStats.publicLines.forEach ( publicLine => {

      publicLine.effectivePeriods.forEach( (effectivePeriod) => {

        let fromDate = moment(effectivePeriod.from, 'YYYY-MM-DD')
        let fromDiff = startDate.diff(fromDate, 'days', true)

        if (fromDiff > 0) {
          // now is after start date of effective period
          effectivePeriod.timelineStartPosition = 0
        } else {
          effectivePeriod.timelineStartPosition = ( Math.abs(fromDiff) / formattedLines.days ) * 100
        }

        let timelineEndPosition = 100

        let toDate = moment(effectivePeriod.to, 'YYYY-MM-DD')
        let toDiff = moment(formattedLines.endDate, 'YYYY-MM-DD').diff(moment(toDate).add(1, 'days'), 'days', true)

        if (toDiff > 0) {
          timelineEndPosition = 100 - (toDiff / (formattedLines.days/100))
        }

        effectivePeriod.timelineEndPosition = timelineEndPosition

        let daysForward = (effectivePeriod.timelineEndPosition / 100) * formattedLines.days
        effectivePeriod.validationLevel = validity(daysForward)

        publicLine.daysValid = validPeriod(publicLine.daysValid || startDate, fromDate, toDate)
      })
      publicLine.daysValid = getDaysRange(startDate, publicLine.daysValid)

      publicLine.lines.forEach( (line) => {

        line.timetables.forEach( (timetable) => {
          timetable.periods.forEach( (period) => {

            let fromDiff = startDate.diff(moment(period.from, 'YYYY-MM-DD'), 'days', true)

            if (fromDiff < 0) {
              period.timelineStartPosition = ( Math.abs(fromDiff) / formattedLines.days ) * 100
            } else {
              period.timelineStartPosition = 0
            }

            let timelineEndPosition = 100

            let toDiff = moment(formattedLines.endDate, 'YYYY-MM-DD').diff(moment(period.to, 'YYYY-MM-DD').add(1, 'days'), 'days', true)

            if (toDiff > 0) {
              timelineEndPosition = 100 - (toDiff / (formattedLines.days/100))
            }

            period.timelineEndPosition = timelineEndPosition
          })
        })
      })

      linesMap[publicLine.lineNumber] = publicLine
    })

    formattedLines.linesMap = linesMap
    formattedLines.validDaysOffset = 33
    formattedLines.validFromDate = moment(startDate).add(120, 'days').format('YYYY-MM-DD')
    formattedLines.daysValid = validDays(lineStats.publicLines)
    formattedLines.minDays = minDays(formattedLines.daysValid)

    return formattedLines

  } catch (e) {
    console.error("error in getLineStats", e)
  }
}
