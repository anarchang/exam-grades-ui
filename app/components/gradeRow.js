import React from 'react'
import Immutable from 'immutable'

function GradeRow({id, gradeRecord, onGradeChange, onNameChange, addError, addEntry}) {

  function handleNameChange(event) {
    onNameChange(id, event.target.value)
  }

  function handleGradeChange(event) {
    const newGrade = event.target.value
    onGradeChange(id, event.target.value)

    // Should add an undo functionality here so we don't lose the last good value.
    if (isNaN(parseInt(newGrade))) {
      addError(id, 'Oops. Please enter a number for the grade.')
    } else {
      addError(id, '')
    }
  }

  function handleBlur() {
    // if both values are set, add a new entry and reset the empty row
    if (gradeRecord.name && gradeRecord.grade != -9999) {
      addEntry(gradeRecord.name, gradeRecord.grade)
    }
  }

  const grade = gradeRecord.grade === -9999 ? '' : gradeRecord.grade

  const regularRow = (
    <div className="gradeRow">
      <input type="text" value={gradeRecord.name} onChange={handleNameChange} className="nameBox" />
      <input type="text" value={gradeRecord.grade} onChange={handleGradeChange} className="gradeBox" />
      <p>{gradeRecord.error}</p>
    </div>
  )

  const emptyGrade = (
    <div className="gradeRow">
      <input type="text" value={gradeRecord.name} onChange={handleNameChange} onBlur={handleBlur} className="nameBox" />
      <input type="text" value={grade} onChange={handleGradeChange} onBlur={handleBlur} className="gradeBox" />
      <p>{gradeRecord.error}</p>
    </div>
  )

  if (addEntry) {
    return emptyGrade
  } else {
    return regularRow
  }
}

GradeRow.propTypes = {
  id: React.PropTypes.number.isRequired,
  gradeRecord: React.PropTypes.instanceOf(Immutable.Record),
  onGradeChange: React.PropTypes.func.isRequired,
  onNameChange: React.PropTypes.func.isRequired,
  addError: React.PropTypes.func.isRequired,
  addEntry: React.PropTypes.func
}

export default GradeRow
