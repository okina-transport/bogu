import React, { Component } from 'react'
import HeaderTimeLineExample from './Examples/HeaderTimeline'
import EventsExample from './Examples/EventsExample'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      activeExampleIndex: 0
    }
  }

  render () {

    const { activeExampleIndex } = this.state

    const buttonStyle = {
      padding: 10,
      marginLeft: 10,
      color: '#000',
      borderRadius: 10,
      border: '1px solid #000',
      cursor: 'pointer',
      height: 14
    }

    const activeButtonStyle = {
      background: '#0096ff',
      color: '#fff'
    }

    return (
      <div>
        <div style={{width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
          <div
            style={activeExampleIndex === 0 ? { ... buttonStyle, ...activeButtonStyle } : buttonStyle}
            onClick={() => this.setState({activeExampleIndex: 0})}
          >
            Timeline
          </div>
          <div
            style={activeExampleIndex === 1 ? { ... buttonStyle, ...activeButtonStyle } : buttonStyle}
            onClick={() => this.setState({activeExampleIndex: 1})}
          >
            Events
          </div>
        </div>
        { activeExampleIndex === 0
          ? <HeaderTimeLineExample/>
          : null
        }
        { activeExampleIndex === 1
          ? <EventsExample/>
          : null
        }
      </div>
    )
  }
}

export default App