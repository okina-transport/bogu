// @flow
import React, { PropTypes } from 'react'
import { color, dimension } from '../styles'

const period = PropTypes.shape({
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  timelineStartPosition: PropTypes.number.isRequired,
  timelineEndPosition: PropTypes.number.isRequired,
})

const timetable = PropTypes.shape({
  objectId: PropTypes.string.isRequired,
  periods: PropTypes.arrayOf(period).isRequired,
}).isRequired

class Timeline extends React.Component {

  static propTypes = {
    timetables: PropTypes.arrayOf(timetable).isRequired,
    isLast: PropTypes.bool.isRequired,
    validDaysOffset: PropTypes.number.isRequired,
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
        position: 'relative',
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
        background: 'black',
        width: '1px',
        height: '100%',
        position: 'absolute',
        marginLeft: 0,
      }

      hrStyle.marginLeft = (33 + validDaysOffset) + '%'

      return (
        <div style={timelineWrapper}>
          <div style={timelineStyle}>
            <div style={hrStyle}/>
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
