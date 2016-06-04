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
    <div className="Statistics">
      <h1>Statistics</h1>
      <p>min: {minString}</p>
      <p>max: {maxString}</p>
      <p>average: {averageString}</p>
    </div>
  )
}

Statistics.propTypes = {
  min: React.PropTypes.number.isRequired,
  max: React.PropTypes.number.isRequired,
  average: React.PropTypes.number.isRequired
}

export default Statistics
