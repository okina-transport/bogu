import React from 'react'
import paginationMap from '../../tests/mock/paginationMap'
import EventDetails from '../../src/components/EventDetails'

const EventsExample = props => {

  addChouetteUrl()

  return (
    <div style={{overflowY: 'scroll', overflowX: 'hidden', margin: 'auto', width: '100%'}}>
      <h1>Events</h1>
      <EventDetails paginationMap={paginationMap} locale="nb"/>
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