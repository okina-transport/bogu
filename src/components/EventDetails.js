import React, { Component, PropTypes } from 'react'
import EventStepper from './EventStepper'
require('./EventDetails.css')
const FaFresh = require('react-icons/lib/fa/refresh')
import translations from './translations'

class EventDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activePageIndex: 0
    }
  }

  handlePageClick (e, pageIndex) {
    e.preventDefault()
    this.setState({
      activePageIndex: pageIndex
    })
  }

  render() {

    const { paginationMap, locale } = this.props
    const { activePageIndex } = this.state
    const page = paginationMap[activePageIndex]

    const refreshButton = this.props.handleRefresh ? (
      <div style={{marginRight: 15, float: 'right', cursor: 'pointer'}}><FaFresh style={{transform: 'scale(1.5)'}} onClick={this.props.handleRefresh}/></div>
    ) : null

    if (page && page.length && paginationMap) {

      return (
        <div>
          { refreshButton}
          <div className="page-link-parent">
            <span>{translations[locale].page}</span>
            {paginationMap.map ( (page, index) => {
              const isActive = (index == activePageIndex) ? 'page-link active-link' : 'page-link inactive-link'
              return <span className={isActive} onClick={(e) => this.handlePageClick(e, index)} key={"link-" + index}>{index+1}</span>
            })}
          </div>
          <div>

            { page.map ( (listItem, index) => {

              let eventGroup = {}

              listItem.events.forEach( event => {

                if (!eventGroup[event.action]) {
                  eventGroup[event.action] = {}
                  eventGroup[event.action].states = []
                }
                eventGroup[event.action].states.push(event)
                eventGroup[event.action].endState = event.state
              })

              return (
                <div style={{marginBottom: 20, border: '1px solid #eee', padding: 10}} key={"jobstatus-" + listItem.chouetteJobId + '-' + index}>
                  <EventStepper locale={locale} key={"event-group-" + listItem.chouetteJobId + '-' + index} groups={eventGroup} listItem={listItem}/>
                </div>
              )
            }) }
          </div>
        </div>
      )

    } else {
      return (
        <div style={{marginBottom: 20, border: '1px solid #eee', padding: 10}}>
          <div style={{fontWeight: 600}}>{translations[locale].no_status}</div>
        </div>
      )
    }
  }
}

export default EventDetails
