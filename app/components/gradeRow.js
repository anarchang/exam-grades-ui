import React, { Component } from 'react'
import Immutable from 'immutable'

class GradeRow extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    if (this._emptyRowName){
      this._emptyRowName.focus()
    }
  }

  render () {
    const {id, gradeRecord, onGradeChange, onNameChange, addError, addEntry, deleteEntry} = this.props

    const validGrade = (grade) => {
      return !isNaN(parseInt(grade))
    }

    const handleNameChange = (event) => {
      onNameChange(id, event.target.value)
    }

    const handleGradeChange = (event) => {
      const newGrade = event.target.value
      onGradeChange(id, event.target.value)

      // Should add an undo functionality here so we don't lose the last good value.
      if (validGrade(newGrade)) {
        addError(id, '')
      } else {
        addError(id, 'Oops. Please enter a number for the grade.')
      }
    }

    const handleBlur = () => {
      // if both values are set, add a new entry and reset the empty row
      if (gradeRecord.name && gradeRecord.grade != -9999 && validGrade(gradeRecord.grade)) {
        addEntry(gradeRecord.name, gradeRecord.grade)
        if (this._emptyRowName) {
          this._emptyRowName.focus()
        }
      }
    }

    const handleDelete = () => {
      console.log('handleDelete')
      if(deleteEntry) {
        deleteEntry(id)
      }
    }

    const grade = gradeRecord.grade === -9999 ? '' : gradeRecord.grade
    const failing = (gradeRecord.grade != -9999 && gradeRecord.grade < 65)
    const invalid = !validGrade(gradeRecord.grade)

    const regularRow = (
      <div className={`gradeRow ${failing ? 'failing' : ''}`}>
        <input type="text" value={gradeRecord.name} onChange={handleNameChange} className="nameBox rowBox valueBox" />
        <input type="text" value={gradeRecord.grade} onChange={handleGradeChange} className={`gradeBox rowBox valueBox ${invalid ? 'invalid' : ''}`} />
        <button className="rowBox deleteBox" onClick={handleDelete}>x</button>
        <div className="rowBox errorBox">{gradeRecord.error}</div>
      </div>
    )

    const emptyGrade = (
      <div className="gradeRow emptyRow">
        <input type="text" value={gradeRecord.name} onChange={handleNameChange} onBlur={handleBlur.bind(this)} className="nameBox rowBox" autoFocus ref={(c) => {
          if (c) {this._emptyRowName = c}
        }}/>
        <input type="text" value={grade} onChange={handleGradeChange} onBlur={handleBlur.bind(this)} className="gradeBox rowBox" />
        <div className="rowBox deleteBox"></div>
        <div className="rowBox errorBox">{gradeRecord.error}</div>
      </div>
    )

    if (addEntry) {
      return emptyGrade
    } else {
      return regularRow
    }
  }

}

GradeRow.propTypes = {
  id: React.PropTypes.number.isRequired,
  gradeRecord: React.PropTypes.instanceOf(Immutable.Record),
  onGradeChange: React.PropTypes.func.isRequired,
  onNameChange: React.PropTypes.func.isRequired,
  addError: React.PropTypes.func.isRequired,
  addEntry: React.PropTypes.func,
  deleteEntry: React.PropTypes.func
}

export default GradeRow
