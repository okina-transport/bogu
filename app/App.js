import React, { Component } from 'react';

import HeaderTimeline from '../src/components/HeaderTimeline';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      json: undefined,
      text: undefined,
      errorText: undefined
    }
  }

  render () {
    let effectivePeriods = [
      {"from": "2016-07-0", "to": "2017-01-30"},
      {"from": "2017-02-01", "to": "2017-02-03"},
      {"from": "2017-04-01", "to": "2017-05-03"},
      ];

    return (
      <div>
        HeaderTimelien test
      <HeaderTimeline hoverText="Hovertext example 2017-12-10" index={0} validDaysOffset={33} effectivePeriods={effectivePeriods} validFromDate="2017-05-18"/>
      </div>
    );
  }
}

export default App;