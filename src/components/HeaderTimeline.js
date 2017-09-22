import React, { PropTypes } from 'react';
import { color, dimension } from '../styles';

import styles from './HeaderTimeline.css';

class HeaderTimeline extends React.Component {
  static propTypes = {
    hoverText: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    validDaysOffset: PropTypes.number.isRequired,
    validFromDate: PropTypes.string.isRequired,
    effectivePeriods: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false
    };
  }

  handleToggleToolTip() {
    this.setState({
      showTooltip: !this.state.showTooltip
    });
  }

  render() {
    const { effectivePeriods, validDaysOffset } = this.props;

    const timelineStyle = {
      border: '1px solid black',
      borderRadius: 5,
      height: '18px',
      lineHeight: '18px',
      width: dimension.timeLineWidth + '%',
      margin: '10px auto',
      display: 'block',
      overflow: 'hidden',
      fontSize: '0%',
      position: 'relative'
    };

    let timelineWrapper = {
      width: '100%',
      marginBottom: 2
    };

    let timeBlock = {
      background: color.timeLineSuccess,
      height: 'auto',
      cursor: 'pointer',
      fontWeight: 500,
      fontSize: '0.8rem',
      textAlign: 'center',
      display: 'inline-block'
    };

    const titleText = {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
      transform: 'translate(10px, 20px)',
      fontSize: '1.2em',
      color: effectivePeriods.length ? color.effective : color.fail,
      zIndex: 99
    };

    const toolTipStyle = {
      position: 'relative',
      transition: 'opacity 1s',
      display: 'inline',
      fontSize: '0.8em',
      color: color.font.tooltip,
      background: color.tooltip,
      padding: 10,
      width: 'auto',
      zIndex: 99
    };

    const textStyle = {
      color: color.font.inverse,
      textShadow: '0px 0px 5px black',
      fontSize: '12px',
      height: 18,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    };

    let hrStyle = {
      background: 'black',
      width: '1px',
      height: '18px',
      position: 'absolute',
      marginLeft: 33 + validDaysOffset + '%'
    };

    let hoverText = effectivePeriods.length
      ? this.props.hoverText
      : 'Ugyldig linje. Mangler data';

    return (
      <div style={timelineWrapper}>
        <div
          style={titleText}
          onMouseOver={this.handleToggleToolTip.bind(this)}
          onMouseLeave={this.handleToggleToolTip.bind(this)}
        >
          {this.props.line}
          {this.state.showTooltip &&
            <div style={toolTipStyle}> {hoverText} </div>}
        </div>
        <div className={styles.timeline} style={timelineStyle}>
          <div key={'timeline-header-wrapper' + this.props.index}>
            <div style={hrStyle} />
            {effectivePeriods.map((effectivePeriod, index) => {
              let periodBlock = { ...timeBlock };
              periodBlock.width =
                effectivePeriod.timelineEndPosition -
                effectivePeriod.timelineStartPosition +
                '%';

              if (index === 0) {
                periodBlock.marginLeft =
                  effectivePeriod.timelineStartPosition + '%';
              } else {
                periodBlock.marginLeft =
                  effectivePeriod.timelineStartPosition -
                  effectivePeriods[index - 1].timelineEndPosition +
                  '%';
              }

              let itemText = effectivePeriod.to;

              if (
                effectivePeriod.timelineStartPosition > 0 &&
                effectivePeriod.from.localeCompare(effectivePeriod.to) !== 0
              ) {
                itemText = effectivePeriod.from + ' - ' + effectivePeriod.to;
              }

              return (
                <div key={'timeline-header-block' + index} style={periodBlock}>
                  <div style={textStyle}>
                    <div
                      className="period-block"
                      style={{
                        height: '100%',
                        color: color.font.inverse,
                        verticalAlign: 'middle'
                      }}
                      title={itemText}
                    >
                      {itemText}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderTimeline;
