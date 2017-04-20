import React from 'react'
import { color, dimension } from '../styles'

class Timeline extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

      const { timetables, validDaysOffset, isLast } = this.props

      const timelineStyle = {
        border: '1px solid black',
        borderRadius: 5,
        background: color.timeLineBackground,
        width: dimension.timeLineWidth + '%',
        margin: 'auto',
        display: 'block',
        overflowY: 'auto',
      }

      const timelineWrapper = {
        width: '100%',
        paddingBottom: isLast ? 0 : 10
      }

      let timeBlock = {
        background: color.timeLineBlockBackground,
        width: '100%',
        height: '100%',
        color: color.font.inverse,
        fontWeight: 500
      }

      let textStyle = {
        whiteSpace: 'nowrap',
        overflow: 'visble',
        textShadow: '0px 0px 5px black',
        textOverflow: 'ellipsis',
        display: 'block',
        margin: 'auto 10px',
        lineHeight: '18px',
        color: color.font.inverse,
        fontSize: '0.7em',
        fontWeight: 500
      }

      let hrStyle = {
        transform: 'rotate(90deg) translateY(8px)',
        borderTop: '1px dotted',
        borderColor: color.border,
        marginTop: 9,
        width: 16,
        position: 'absolute'
      }

      hrStyle.marginLeft = (33 + validDaysOffset) * (dimension.timeLineWidth - 1)/100 + '%'

      return (
        <div style={timelineWrapper}>
          <div style={timelineStyle}>
            {
              timetables.map( timetable =>
                timetable.periods.map((period, index) => {
                  const title = timetable.objectId
                  const hover = `${title} \n(period: ${period.from} -> ${period.to})`
                  let periodBlock = {...timeBlock}
                  periodBlock.width = (period.timelineEndPosition - period.timelineStartPosition) + '%'
                  periodBlock.marginLeft = (period.timelineStartPosition + '%')
                  return (
                    <div>
                      <hr style={hrStyle}/>
                      <div key={'timetable-period-'+index} style={periodBlock} title={hover}>
                        <div style={textStyle}>{title}</div>
                      </div>
                    </div>
                  )
                })
              )
            }
          </div>
        </div>
      )
  }
}

export default Timeline
