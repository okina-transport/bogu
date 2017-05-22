// @flow
import React, { PropTypes } from 'react'
import ActionTranslations from './actionTranslations'
import FaChevronDown from 'react-icons/lib/fa/chevron-down'
import FaChevronUp from 'react-icons/lib/fa/chevron-up'
import MdError from 'react-icons/lib/md/error'
import MdDone from 'react-icons/lib/md/check-circle'
import MdSchedule from 'react-icons/lib/md/schedule'
import FaCog from 'react-icons/lib/fa/cog'
import MdHelpOutLine from 'react-icons/lib/md/help-outline'
import MdHour from 'react-icons/lib/md/hourglass-empty'
import ControlledChouetteLink from './ControlledChouetteLink'
import translations from './translations'

class EventStepper extends React.Component {

  state = {
    expanded: false
  }

  static propTypes = {
    groups: PropTypes.object.isRequired,
    listItem: PropTypes.object.isRequired
  }

  getIconByState(state: String) {
    switch (state) {
      case "OK": return <MdDone style={{color: 'green', width: 24, height: 22, marginTop: -2}}/>
      case "PENDING": return <MdHour style={{color: 'orange', width: 24, height: 22, marginTop: -2}}/>
      case "STARTED": return <FaCog style={{color: '#2274b5', width: 24, height: 22, marginTop: -2}}/>
      case "FAILED": return <MdError style={{color: 'red', width: 24, height: 22, marginTop: -2}}/>
      case "DUPLICATE": return <MdError style={{color: 'red', width: 24, height: 22, marginTop: -2}}/>
      case "IGNORED": return <MdSchedule style={{color: 'black', width: 24, height: 22, marginTop: -2}}/>
    }
    return <MdHelpOutLine style={{color: 'grey', width: 24, height: 22}}/>
  }

  eventStates() {
    return [
      "FILE_TRANSFER",
      "FILE_CLASSIFICATION",
      "IMPORT",
      "VALIDATION_LEVEL_1",
      "DATASPACE_TRANSFER",
      "VALIDATION_LEVEL_2",
      "EXPORT",
      "BUILD_GRAPH",
      "EXPORT_NETEX"
    ]
  }

  addUnlistedStates(groups: Object) {

    const states = this.eventStates()

    let groupsWithUnlisted = Object.assign({}, groups)

    let firstStateFound = false

    states.forEach( state => {
      if (!groupsWithUnlisted[state]) {
        groupsWithUnlisted[state] = {
          endState: "IGNORED",
          missingBeforeStartStart: !firstStateFound
        }
      } else {
        firstStateFound = true
      }
    })

    let finalGroups = {}

    Object.keys(groupsWithUnlisted)
      .sort( (key1, key2) => states.indexOf(key1) - states.indexOf(key2) )
      .forEach( key  => {
        finalGroups[key] = groupsWithUnlisted[key]
      })
    return finalGroups
  }

  handleToggleVisibility () {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  combine(formattedGroups: Object, groups: Array<string>, name: string) {
    const combined = {}
    for (let i = 0; i < groups.length; i++) {
      const group = groups[i]
      combined[group] = formattedGroups[group]

      if (name !== group) {
        delete formattedGroups[group]
      }
    }
    formattedGroups[name] = combined
  }

  bullet(formattedGroups: Object, groups: Object, locale: string, includeLevel2: bool) {
    const columnStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 45,
    }

    return Object.keys(formattedGroups).map((group, index) => {
        let column;
        let event = formattedGroups[group]
        if (event instanceof Array) {
          column = Object.keys(event).map((key, i) => {
            return this.renderEvent(event[key], event, key, i, false, i, locale, includeLevel2)
          })
        } else {
          column = this.renderEvent(event, groups, group, index, index === 0, 0, locale, includeLevel2)
        }
        return <div key={'bullet-' +index} style={columnStyle}>{column}</div>
      }
    )
  }

  renderEvent(event: Object, groups: Object, group: string, index: number, isFirst: bool, columnIndex: number = 0, locale: string, includeLevel2: bool) {
    const groupStyle = {
      display: "flex",
      flexDirection: "row",
    }

    const groupText = {
      fontSize: '0.9em',
      marginLeft: 5,
    }

    const linkStyle = {
      display: "block",
      borderColor: "rgb(189, 189, 189)",
      marginLeft: -6,
      borderTopStyle: "solid",
      borderTopWidth: 1,
      width: 30,
      margin: 8,
      transform: columnIndex > 0 && 'translateY(-0.5em) rotate(25deg) ',
    }

    if (group === "FILE_CLASSIFICATION") return null

    if (!ActionTranslations[locale].states[event.endState]) return null

    let toolTipText = ActionTranslations[locale].states[event.endState]

    if (event.states && event.states[groups[group].states.length-1]) {
      toolTipText += ' ' + event.states[event.states.length-1].date
    }

    return (
      <div style={groupStyle} key={"group-" + group + index}>
        { !isFirst && <div style={linkStyle}/> }
        <div title={toolTipText} style={{opacity: event.missingBeforeStartStart ? 0.2 : 1}}>
          { this.getIconByState(event.endState) }
        </div>
        <div style={{...groupText, opacity: event.missingBeforeStartStart ? 0.2 : 1}}>
          <ControlledChouetteLink includeLevel2={includeLevel2} events={event}> { ActionTranslations[locale].text[group] } </ControlledChouetteLink>
        </div>
      </div>
    )
  }

  render() {

    const stepperstyle = {
      display: "flex",
      flexDirection: "row",
      alignContent : "center",
      alignItems: "center",
      justifyContent : "center",
      marginTop: 10
    }

    const { groups, listItem, locale, includeLevel2 } = this.props
    const { expanded } = this.state

    const formattedGroups = this.addUnlistedStates(groups)
    this.combine(formattedGroups, ['EXPORT', 'EXPORT_NETEX'], 'EXPORT')
    const bullets = this.bullet(formattedGroups, groups, locale, includeLevel2)

    return (
      <div key={"event" + listItem.chouetteJobId} style={{margin: 'auto', width: '98%', cursor: 'pointer'}} onClick={() => this.handleToggleVisibility()}>
        <div style={{display: 'flex', marginLeft: -15}}>
          <div title={translations[locale].duration + listItem.duration} style={{fontSize: '0.9em', fontWeight: 600, color: '#e59400', marginTop: -8, marginRight: 20}}>{listItem.started}</div>
          { listItem.provider && listItem.provider.name ?
            <div style={{fontSize: '0.8em', fontWeight: 600, flex: 1}}>{listItem.provider.name}</div>
            : null
          }
          <div style={{fontSize: '0.9em', fontWeight: 600, flex: 2}}>{listItem.fileName || ActionTranslations[locale].filename.undefined}</div>
        </div>
        <div style={stepperstyle}>
          { bullets }
          <div style={{marginLeft: 'auto', marginRight: 20, marginTop: -50}} onClick={() => this.handleToggleVisibility()}>
            { !expanded ? <FaChevronDown/> : <FaChevronUp/> }
          </div>
        </div>
        { expanded
          ?
            <div style={{display: 'flex', padding: 8, flexDirection: 'column', lineHeight: '25px', marginTop: 10, cursor: 'default', border: '1px solid #9E9E9E'}} onClick={event => event.stopPropagation()}>
              <div>{translations[locale].started} {listItem.firstEvent}</div>
              <div>{translations[locale].ended}  {listItem.lastEvent}</div>
              <div>{translations[locale].duration}  {listItem.duration}</div>
            </div>
          : null
        }
      </div>
    )
  }

}

export default EventStepper
