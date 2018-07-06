import React from 'react'
import dataSource from '../../tests/mock/eventsDatasource'
import EventDetails from '../../src/components/EventDetails'

const EventsExample = props => {

  addChouetteUrl()

  return (
    <div style={{overflowY: 'scroll', overflowX: 'hidden', margin: 'auto', width: '100%'}}>
      <h1>Events</h1>
      <EventDetails
        includeLevel2={true}
        handleRefresh={() => {}}
        dataSource={dataSource}
        locale="nb"
        showDateFilter={true}
        showNewDeliveriesFilter={true}
      />
    </div>
  )
}

const addChouetteUrl = () => {
  // polyfill chouetteBaseUrl for correct behavior in app
  window.config = {
    chouetteBaseUrl: 'https://rutedb-test.rutebanken.org/'
  }
}

export default EventsExample