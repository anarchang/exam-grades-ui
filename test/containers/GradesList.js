import chai, { expect } from 'chai'
import { mapStateToProps, mapDispatchToProps } from '../../app/containers/GradesList'
import examGrades, { gradeRecord, stateRecord } from '../../app/reducers/examGrades'
import { addGrade, updateGrade, updateName, addError, resetEmptyGrade, deleteEntry } from '../../app/actions'
import { List, Map } from 'immutable'
import sinon from 'sinon'

describe("GradesList Container", () => {
  const state = new Map({
    examGrades: new stateRecord({
      grades: List([
        new gradeRecord()
      ])
    })
  })

  const props = mapStateToProps(state)


  it("Extract grades", () => {
    expect(props.grades).to.equal(state.getIn(['examGrades', 'grades']))
  })

  it("Extract emptyGrade", () => {
    expect(props.emptyGrade).to.equal(state.getIn(['examGrades', 'emptyGrade']))
  })

  it("onGradeChanged dispatch", () => {
    const id = 0
    const grade = 89
    const dispatch = sinon.spy()
    const methods = mapDispatchToProps(dispatch)
    const action = updateGrade(id, grade)

    methods.onGradeChange(id, grade)

    expect(dispatch.calledWith(action)).to.be.true
  })

  it("onNameChange dispatch", () => {
    const id = 0
    const name = 'name'
    const dispatch = sinon.spy()
    const methods = mapDispatchToProps(dispatch)
    const action = updateName(id, name)

    methods.onNameChange(id, name)

    expect(dispatch.calledWith(action)).to.be.true
  })

  it("addEntry dispatch", () => {
    const name = 'name'
    const grade = 78
    const dispatch = sinon.spy()
    const methods = mapDispatchToProps(dispatch)
    const action = addGrade(name, grade)

    methods.addEntry(name, grade)

    expect(dispatch.calledWith(action)).to.be.true
    expect(dispatch.calledWith(resetEmptyGrade())).to.be.true
  })

  it("addError dispatch", () => {
    const id = 0
    const error = 'error'
    const dispatch = sinon.spy()
    const methods = mapDispatchToProps(dispatch)
    const action = addError(id, error)

    methods.addError(id, error)

    expect(dispatch.calledWith(action)).to.be.true
  })

  it("deleteEntry dispatch", () => {
    const id = 0
    const dispatch = sinon.spy()
    const methods = mapDispatchToProps(dispatch)
    const action = deleteEntry(id)

    methods.deleteEntry(id)

    expect(dispatch.calledWith(action)).to.be.true
  })
})
