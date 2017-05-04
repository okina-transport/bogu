import React from 'react'
import { HeaderTimeline, Timeline} from '../components/'
import { formatLineStats, sortLines } from '../utils'
import lineStatsNorland from '../../tests/mock/lineStatsNorland'


const HeaderTimelineExample = props => {

  const list = { ... lineStatsNorland }
  const formattedLines = formatLineStats(list)
  const linesMap = formattedLines.linesMap
  const validDaysOffset = formattedLines.validDaysOffset
  const validFromDate = formattedLines.validFromDate
  const daysValid = formattedLines.daysValid
  const order = sortLines(0, formattedLines, 'all', daysValid)

  return (
    <div style={{overflowY: 'scroll', overflowX: 'hidden', margin: 'auto', width: '100%'}}>
      <h1>HeaderTimeline test</h1>
      {
        order.map( (line, index) => (
          <div style={{padding: 0, marginLeft: 0, marginRight: 0, marginTop: 0, lineHeight: 0}}>
            <HeaderTimeline line={line}
                            hoverText={linesMap[line].lineNames.join(', ')}
                            index={index}
                            key={'HeaderTimeline'+index}
                            validDaysOffset={validDaysOffset}
                            validFromDate={validFromDate}
                            effectivePeriods={linesMap[line].effectivePeriods}/>
            {
              linesMap[line].lines.map( (l, i) => (
                <Timeline
                  key={'timelineItem'+index+'-'+i}
                  timetables={l.timetables}
                  isLast={i === linesMap[line].lines.length-1}
                  validDaysOffset={validDaysOffset}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  )
}

export default HeaderTimelineExample