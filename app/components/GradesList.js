import React from 'react'
import GradeRow from './GradeRow'
import Immutable from 'immutable'

function GradesList({grades, onGradeChange, onNameChange, addError, emptyGrade, addEntry}) {

  const gradesItems = grades.map((gradeRecord, index) => {
    return (
      <GradeRow
        gradeRecord={gradeRecord}
        key={index}
        id={index}
        onGradeChange={onGradeChange}
        onNameChange={onNameChange}
        addError={addError}/>
    )
  })

  console.log('grade list')
  return (
    <div className="gradesList">
      <h1>GradesList</h1>
      {gradesItems}
      <GradeRow
        gradeRecord={emptyGrade}
        id= {-1}
        onGradeChange={onGradeChange}
        onNameChange={onNameChange}
        addError={addError}
        addEntry={addEntry}/>
    </div>
  )
}

GradesList.propTypes = {
  grades: React.PropTypes.instanceOf(Immutable.List).isRequired,
  onGradeChange: React.PropTypes.func.isRequired,
  onNameChange: React.PropTypes.func.isRequired,
  addError: React.PropTypes.func.isRequired,
  emptyGrade: React.PropTypes.instanceOf(Immutable.Record).isRequired,
  addEntry: React.PropTypes.func.isRequired
}

export default GradesList
