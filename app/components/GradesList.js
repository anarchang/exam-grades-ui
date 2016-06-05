import React from 'react'
import GradeRow from './GradeRow'
import Immutable from 'immutable'

function GradesList({grades, onGradeChange, onNameChange, addError, emptyGrade, addEntry, deleteEntry}) {

  const gradesItems = grades.map((gradeRecord, index) => {
    return (
      <GradeRow
        gradeRecord={gradeRecord}
        key={index}
        id={index}
        onGradeChange={onGradeChange}
        onNameChange={onNameChange}
        addError={addError}
        deleteEntry={deleteEntry}/>
    )
  })

  return (
    <div className="gradesList">
      <h1>Exam Statistics Calculator</h1>
      <div className="gradeTable">
        <div className="gradeRow headerRow">
          <div className="nameBox rowBox">Name</div>
          <div className="gradeBox rowBox">Grade</div>
          <div className="rowBox deleteBox">
          </div>
          <div className="rowBox errorBox"></div>
        </div>
        {gradesItems}
        <GradeRow
          gradeRecord={emptyGrade}
          id= {-1}
          onGradeChange={onGradeChange}
          onNameChange={onNameChange}
          addError={addError}
          addEntry={addEntry}/>
      </div>
    </div>
  )
}

GradesList.propTypes = {
  grades: React.PropTypes.instanceOf(Immutable.List).isRequired,
  onGradeChange: React.PropTypes.func.isRequired,
  onNameChange: React.PropTypes.func.isRequired,
  addError: React.PropTypes.func.isRequired,
  emptyGrade: React.PropTypes.instanceOf(Immutable.Record).isRequired,
  addEntry: React.PropTypes.func.isRequired,
  deleteEntry: React.PropTypes.func.isRequired
}

export default GradesList
