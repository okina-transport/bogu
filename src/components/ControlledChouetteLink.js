import React from 'react';
import ChouetteLink from './ChouetteLink';

class ControlledChouetteLink extends React.Component {
  render() {
    const { events, includeLevel2 } = this.props;

    let supportedActions = ['IMPORT', 'VALIDATION_LEVEL_1'];

    let choueteActionMap = {
      IMPORT: 'importer',
      VALIDATION_LEVEL_1: 'validator'
    };

    if (includeLevel2) {
      supportedActions.push('VALIDATION_LEVEL_2');
      supportedActions.push('EXPORT');
      supportedActions.push('EXPORT_NETEX');
      choueteActionMap['VALIDATION_LEVEL_2'] = 'validator';
      choueteActionMap['EXPORT'] = 'exporter';
      choueteActionMap['EXPORT_NETEX'] = 'exporter';
    }

    if (events.states && events.states.length) {
      const endState = events.states[events.states.length - 1];
      if (supportedActions.indexOf(endState.action) > -1) {
        return (
          <ChouetteLink
            action={choueteActionMap[endState.action]}
            id={endState.chouetteJobId}
            referential={endState.referential}
          >
            {this.props.children}
          </ChouetteLink>
        );
      }
    }

    return <div> {this.props.children}
      {' '}</div>;
  }
}

export default ControlledChouetteLink;
