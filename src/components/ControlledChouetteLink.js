import React from 'react';
import ChouetteLink from './ChouetteLink';

const ControlledChouetteLink = ({ events, includeLevel2, children }) => {
  let supportedActions = ['IMPORT', 'VALIDATION_LEVEL_1'];

  let chouetteMap = {
    IMPORT: 'importer',
    VALIDATION_LEVEL_1: 'validator'
  };

  if (includeLevel2) {
    supportedActions.push('VALIDATION_LEVEL_2');
    supportedActions.push('EXPORT');
    supportedActions.push('EXPORT_NETEX');
    chouetteMap['VALIDATION_LEVEL_2'] = 'validator';
    chouetteMap['EXPORT'] = 'exporter';
    chouetteMap['EXPORT_NETEX'] = 'exporter';
  }

  if (events.states && events.states.length) {
    const endState = events.states[events.states.length - 1];
    if (supportedActions.indexOf(endState.action) > -1 && endState.chouetteJobId) {
      return (
        <ChouetteLink
          action={chouetteMap[endState.action]}
          id={endState.chouetteJobId}
          referential={endState.referential}
        >
          {children}
        </ChouetteLink>
      );
    }
  }

  return <div> {children} </div>;
};

export default ControlledChouetteLink;
