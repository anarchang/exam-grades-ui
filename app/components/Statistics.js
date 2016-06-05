import React from 'react'

function Statistics({min, max, average}) {

  function statToString(stat) {
    if (isFinite(stat) && !isNaN(stat) ) {
      return stat
    } else {
      return ''
    }

  }

  const minString = statToString(min)
  const maxString = statToString(max)
  const averageString = statToString(average)

  return (
    <div className="statistics">
      <div className="stat">
        <div className="label">min: </div>
        <div className="value">{minString}</div>
        <div className="errorBox"></div>
      </div>
      <div className="stat">
        <div className="label">max: </div>
        <div className="value">{maxString}</div>
        <div className="errorBox"></div>
      </div>
      <div className="stat">
        <div className="label">average:</div>
        <div className="value">{averageString}</div>
        <div className="errorBox"></div>
      </div>
    </div>
  )
}

Statistics.propTypes = {
  min: React.PropTypes.number.isRequired,
  max: React.PropTypes.number.isRequired,
  average: React.PropTypes.number.isRequired
}

export default Statistics
