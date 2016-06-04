import React from 'react'
import GradeRow from './GradeRow'
import Immutable from 'immutable'

function GradesList({grades, onGradeChange, onNameChange}) {

  const gradesItems = grades.map((gradeRecord, index) => {
    return (
      <GradeRow
        name={gradeRecord.get('name')}
        grade={gradeRecord.get('grade')}
        key={index}
        id={index}
        onGradeChange={onGradeChange}
        onNameChange={onNameChange}/>
    )
  })

  console.log('grade list')
  return (
    <div className="gradesList">
      <h1>GradesList</h1>
      {gradesItems}
    </div>
  )
}

GradesList.propTypes = {
  grades: React.PropTypes.instanceOf(Immutable.List).isRequired,
  onGradeChange: React.PropTypes.func.isRequired,
  onNameChange: React.PropTypes.func.isRequired
}

export default GradesList
