import React, { PropTypes } from 'react';
import ActionTranslations from './actionTranslations';
import FaChevronDown from 'react-icons/lib/fa/chevron-down';
import FaChevronUp from 'react-icons/lib/fa/chevron-up';
import ControlledChouetteLink from './ControlledChouetteLink';
import translations from './translations';
import EventStatusIcon from './EventStatusIcon';

class EventStepper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  static propTypes = {
    groups: PropTypes.object.isRequired,
    listItem: PropTypes.object.isRequired
  };

  eventStates() {
    return [
      'FILE_TRANSFER',
      'FILE_CLASSIFICATION',
      'FILE_DELIVERY',
      'IMPORT',
      'VALIDATION_LEVEL_1',
      'DATASPACE_TRANSFER',
      'VALIDATION_LEVEL_2',
      'EXPORT',
      // 'BUILD_GRAPH',
      'EXPORT_NETEX'
    ];
  }

  addUnlistedStates(groups) {
    const states = this.eventStates();

    let groupsWithUnlisted = Object.assign({}, groups);

    let firstStateFound = false;

    states.forEach(state => {
      if (!groupsWithUnlisted[state]) {
        groupsWithUnlisted[state] = {
          endState: 'IGNORED',
          missingBeforeStartStart: !firstStateFound
        };
      } else {
        firstStateFound = true;
      }
    });

    let finalGroups = {};

    Object.keys(groupsWithUnlisted)
      .sort((key1, key2) => states.indexOf(key1) - states.indexOf(key2))
      .forEach(key => {
        finalGroups[key] = groupsWithUnlisted[key];
      });
    return finalGroups;
  }

  handleToggleVisibility() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  createCombinedSplit(formattedGroups, groups, name) {
    const combined = [];
    for (let i in groups) {
      const group = groups[i];
      combined[group] = formattedGroups[group];

      if (name !== group) {
        delete formattedGroups[group];
      }
    }
    formattedGroups[name] = combined;
  }

  aggreggateFileEvents(data) {
    let groups = { ...data };
    let endState = null;
    let errorOn = null;
    Object.keys(groups).forEach(group => {
      if (group === 'FILE_CLASSIFICATION' || group === 'FILE_TRANSFER') {
        endState = groups[group].endState;

        if (endState === 'FAILED' || endState === 'DUPLICATE') {
          errorOn = group;
        }
        delete groups[group];
      }
    });

    if (endState !== null) {
      groups.FILE_DELIVERY = {
        endState: errorOn ? 'FAILED' : endState,
        errorOn,
        missingBeforeStartStart: endState == 'IGNORED' && !errorOn
      };
    }
    return groups;
  }

  bullet(formattedGroups, groups, locale, includeLevel2) {
    const columnStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: 45
    };

    return Object.keys(formattedGroups).map((group, index) => {
      let column;
      let event = formattedGroups[group];

      if (Array.isArray(event)) {
        column = Object.keys(event).map((key, i) => {
          return this.renderEvent(
            event[key],
            event,
            key,
            i,
            false,
            i,
            locale,
            includeLevel2
          );
        });
      } else {
        column = this.renderEvent(
          event,
          groups,
          group,
          index,
          index === 0,
          0,
          locale,
          includeLevel2
        );
      }
      return (
        <div key={'bullet-' + index} style={columnStyle}>
          {column}
        </div>
      );
    });
  }

  renderEvent(
    event,
    groups,
    group,
    index,
    isFirst,
    columnIndex = 0,
    locale,
    includeLevel2
  ) {
    const groupStyle = {
      display: 'flex',
      flexDirection: 'row'
    };

    const groupText = {
      fontSize: '0.9em',
      marginLeft: 5
    };

    const linkStyle = {
      display: 'block',
      borderColor: 'rgb(189, 189, 189)',
      marginLeft: -6,
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      width: 30,
      borderRadius: 30,
      margin: 8,
      transform: columnIndex > 0 && 'translateY(-0.5em) rotate(25deg) '
    };

    if (!ActionTranslations[locale].states[event.endState]) return null;

    let toolTipText = ActionTranslations[locale].states[event.endState];

    if (event.states && event.states[groups[group].states.length - 1]) {
      toolTipText += ' ' + event.states[event.states.length - 1].date;
    }

    if (event.errorOn) {
      toolTipText = ActionTranslations[locale].errorMessage[event.errorOn];
    }

    return (
      <div style={groupStyle} key={'group-' + group + index}>
        {!isFirst && <div style={linkStyle} />}
        <div
          title={toolTipText}
          style={{ opacity: event.missingBeforeStartStart ? 0.2 : 1 }}
        >
          <EventStatusIcon state={event.endState} />
        </div>
        <div
          style={{
            ...groupText,
            opacity: event.missingBeforeStartStart ? 0.2 : 1
          }}
        >
          <ControlledChouetteLink includeLevel2={includeLevel2} events={event}>
            {ActionTranslations[locale].text[group]}
          </ControlledChouetteLink>
        </div>
      </div>
    );
  }

  render() {
    const stepperstyle = {
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    };

    const { groups, listItem, locale, includeLevel2 } = this.props;
    const { expanded } = this.state;

    let formattedGroups = this.addUnlistedStates(groups);
    formattedGroups = this.aggreggateFileEvents(formattedGroups);
    this.createCombinedSplit(
      formattedGroups,
      ['EXPORT_NETEX', 'EXPORT'],
      'EXPORT'
    );
    const bullets = this.bullet(formattedGroups, groups, locale, includeLevel2);

    return (
      <div
        key={'event' + listItem.chouetteJobId}
        style={{ margin: 'auto', width: '98%', cursor: 'pointer' }}
        onClick={() => this.handleToggleVisibility()}
      >
        <div style={{ display: 'flex', marginLeft: -15 }}>
          <div
            title={translations[locale].duration + listItem.duration}
            style={{
              fontSize: '0.9em',
              fontWeight: 600,
              color: '#e59400',
              marginTop: -8,
              marginRight: 20
            }}
          >
            {listItem.started}
          </div>
          {listItem.provider &&
            listItem.provider.name && (
              <div style={{ fontSize: '0.8em', fontWeight: 600, flex: 1 }}>
                {listItem.provider.name}
              </div>
            )}
          <div style={{ fontSize: '0.9em', fontWeight: 600, flex: 2 }}>
            {listItem.fileName || ActionTranslations[locale].filename.undefined}
          </div>
        </div>
        <div style={stepperstyle}>
          {bullets}
          <div
            style={{ marginLeft: 'auto', marginRight: 20, marginTop: -50 }}
            onClick={() => this.handleToggleVisibility()}
          >
            {!expanded ? <FaChevronDown /> : <FaChevronUp />}
          </div>
        </div>
        {expanded && (
          <div
            style={{
              display: 'flex',
              padding: 8,
              flexDirection: 'column',
              marginTop: 10,
              cursor: 'default'
            }}
            onClick={event => event.stopPropagation()}
          >
            <div>
              <span style={{ fontWeight: 600, marginRight: 10 }}>
                {translations[locale].started}
              </span>
              {listItem.firstEvent}
            </div>
            <div>
              <span style={{ fontWeight: 600, marginRight: 10 }}>
                {translations[locale].ended}
              </span>
              {listItem.lastEvent}
            </div>
            <div>
              <span style={{ fontWeight: 600, marginRight: 10 }}>
                {translations[locale].duration}
              </span>
              {listItem.duration}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EventStepper;
