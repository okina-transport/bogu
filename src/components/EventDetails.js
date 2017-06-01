import React, { Component, PropTypes } from 'react'
import EventStepper from './EventStepper'
require('./EventDetails.css')
const FaFresh = require('react-icons/lib/fa/refresh')
import translations from './translations'

class EventDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activePageIndex: 0,
      endStateFilter: "ALL",
    }
  }

  handlePageClick (e, pageIndex) {
    e.preventDefault()
    this.setState({
      activePageIndex: pageIndex
    })
  }

  render() {

    const { dataSource, locale, includeLevel2 } = this.props
    const { activePageIndex, endStateFilter } = this.state

    let filteredPages = null

    if (endStateFilter === "FAILED" || endStateFilter === "OK") {
      filteredPages = dataSource.filter( event => event.endState === endStateFilter )
    }

    let paginationMap = getPaginationMap(filteredPages || dataSource)

    const page = paginationMap[activePageIndex]

    const refreshButton = this.props.handleRefresh ? (
      <div style={{marginRight: 15, float: 'right', cursor: 'pointer'}}><FaFresh style={{transform: 'scale(1.5)'}} onClick={this.props.handleRefresh}/></div>
    ) : null

    if (page && page.length && paginationMap) {

      return (
        <div>
          <div style={{width: '100%', textAlign: 'left', marginBottom: 5}}>
            <select onChange={ e => { this.setState({endStateFilter: e.target.value, activePageIndex: 0}) }}>
              <option value="ALL">{translations[locale].show_all}</option>
              <option value="OK">{translations[locale].show_only_success}</option>
              <option value="FAILED">{translations[locale].show_only_failed}</option>
            </select>
          </div>
          { refreshButton}
          <div className="page-link-parent">
            <span>{translations[locale].page}</span>
            { paginationMap.map ( (page, index) => {
              const isActive = (index == activePageIndex) ? 'page-link active-link' : 'page-link inactive-link'
              return (
                <span
                  className={isActive}
                  onClick={(e) => this.handlePageClick(e, index)}
                  key={"link-" + index}>
                  { index+1 }
                  </span>
              )
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
                <div key={"jobstatus-" + listItem.chouetteJobId + '-' + index} style={{marginBottom: 20, border: '1px solid #eee', padding: 10}}>
                  <EventStepper includeLevel2={includeLevel2} locale={locale} key={"event-group-" + listItem.chouetteJobId + '-' + index} groups={eventGroup} listItem={listItem}/>
                </div>
              )
            }) }
          </div>
        </div>
      )

    } else {
      return (
      <div style={{width: '100%', textAlign: 'left', marginBottom: 5}}>
        <select onChange={ e => { this.setState({endStateFilter: e.target.value, activePageIndex: 0}) }}>
          <option value="ALL">{translations[locale].show_all}</option>
          <option value="OK">{translations[locale].show_only_success}</option>
          <option value="FAILED">{translations[locale].show_only_failed}</option>
        </select>
        <div style={{marginBottom: 20, marginTop: 20, border: '1px solid #eee', padding: 10}}>
          <div style={{fontWeight: 600}}>{translations[locale].no_status}</div>
        </div>
      </div>
      )
    }
  }
}

const getPaginationMap = (statusList = []) => {
  let paginationMap = []

  if (statusList && statusList.length) {
    for (let i = 0, j = statusList.length; i < j; i+=10) {
      paginationMap.push(statusList.slice(i,i+10))
    }
  }
  return paginationMap
}

export default EventDetails
