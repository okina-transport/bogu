import React, { Component, PropTypes } from 'react';
import EventStepper from './EventStepper';
import './EventDetails.css';
const FaFresh = require('react-icons/lib/fa/refresh');
import translations from './translations';
import FilterButtonTray from './FilterButtonTray';
import { getLastValidDate } from './buttonConfig';

class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePageIndex: 0,
      endStateFilter: 'ALL',
      dateFilter: 'LAST_12_HOURS'
    };
  }

  handlePageClick(e, pageIndex) {
    e.preventDefault();
    this.setState({
      activePageIndex: pageIndex
    });
  }

  handleFilterChange(dateFilter) {
    this.setState({
      dateFilter: dateFilter
    });
  }

  render() {
    const { dataSource, locale, includeLevel2, showDateFilter } = this.props;
    const { activePageIndex, endStateFilter, dateFilter } = this.state;

    let filteredPages = null;
    const lastDate = getLastValidDate(dateFilter);

    const filteredByDate = (dataSource || []).filter(event => {
      if (!lastDate) return event;
      return new Date(event.firstEvent) > lastDate;
    });

    if (
      endStateFilter === 'FAILED' ||
      endStateFilter === 'OK' ||
      endStateFilter === 'CANCELLED'
    ) {
      filteredPages = (filteredByDate || [])
        .filter(event => event.endState === endStateFilter);
    }

    let paginationMap = getPaginationMap(filteredPages || filteredByDate);

    const filters = (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <select
          style={{ fontSize: '0.9em' }}
          value={endStateFilter}
          onChange={e => {
            e.preventDefault();
            this.setState({
              endStateFilter: e.target.value,
              activePageIndex: 0
            });
          }}
        >
          <option value="ALL">{translations[locale].show_all}</option>
          <option value="OK">{translations[locale].show_only_success}</option>
          <option value="CANCELLED">
            {translations[locale].show_only_cancelled}
          </option>
          <option value="FAILED">
            {translations[locale].show_only_failed}
          </option>
        </select>
        {showDateFilter &&
          <FilterButtonTray
            locale={locale}
            style={{ marginLeft: 20 }}
            activeButtonId={this.state.dateFilter}
            onChange={this.handleFilterChange.bind(this)}
          />}
      </div>
    );

    const page = paginationMap[activePageIndex];

    const refreshButton =
      this.props.handleRefresh &&
      <div style={{ marginRight: 15, float: 'right', cursor: 'pointer' }}>
        <FaFresh
          style={{ transform: 'scale(1.5)' }}
          onClick={this.props.handleRefresh}
        />
      </div>;

    if (page && page.length && paginationMap) {
      return (
        <div>
          <div style={{ width: '100%', textAlign: 'left', marginBottom: 5 }}>
            {filters}
          </div>
          {refreshButton}
          <div className="page-link-parent">
            <span>{translations[locale].page}</span>
            {paginationMap.map((page, index) => {
              const isActive = index == activePageIndex
                ? 'page-link active-link'
                : 'page-link inactive-link';
              return (
                <span
                  className={isActive}
                  onClick={e => this.handlePageClick(e, index)}
                  key={'link-' + index}
                >
                  {index + 1}
                </span>
              );
            })}
          </div>
          <div>
            {page.map((listItem, index) => {
              let eventGroup = {};

              listItem.events.forEach(event => {
                if (!eventGroup[event.action]) {
                  eventGroup[event.action] = {};
                  eventGroup[event.action].states = [];
                }
                eventGroup[event.action].states.push(event);
                eventGroup[event.action].endState = event.state;
              });

              return (
                <div
                  key={'jobstatus-' + listItem.chouetteJobId + '-' + index}
                  style={{
                    marginBottom: 20,
                    border: '1px solid #eee',
                    padding: 10
                  }}
                >
                  <EventStepper
                    includeLevel2={includeLevel2}
                    locale={locale}
                    key={'event-group-' + listItem.chouetteJobId + '-' + index}
                    groups={eventGroup}
                    listItem={listItem}
                  />
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ width: '100%', textAlign: 'left', marginBottom: 5 }}>
          {filters}
          <div
            style={{
              marginBottom: 20,
              marginTop: 20,
              border: '1px solid #eee',
              padding: 40
            }}
          >
            <div style={{ fontWeight: 600 }}>
              {translations[locale].no_status}
            </div>
            <div style={{ marginLeft: 10 }}>
              {refreshButton}
            </div>
          </div>
        </div>
      );
    }
  }
}

const getPaginationMap = (statusList = []) => {
  let paginationMap = [];

  if (statusList && statusList.length) {
    for (let i = 0, j = statusList.length; i < j; i += 10) {
      paginationMap.push(statusList.slice(i, i + 10));
    }
  }
  return paginationMap;
};

export default EventDetails;
