import React from 'react'

function GradeRow({id, name, grade, onGradeChange, onNameChange}) {

  function handleNameChange(event) {
    onNameChange(id, event.target.value)
  }

  function handleAgeChange(event) {
    onGradeChange(id, event.target.value)
  }

  return (
    <div className="gradeRow">
      <input type="text" value={name} onChange={handleNameChange} className="nameBox" />
      <input type="text" value={grade} onChange={handleAgeChange} className="gradeBox" />
    </div>
  )
}

GradeRow.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  grade: React.PropTypes.number.isRequired,
  onGradeChange: React.PropTypes.func.isRequired,
  onNameChange: React.PropTypes.func.isRequired
}

export default GradeRow
