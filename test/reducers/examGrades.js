import chai, { expect } from 'chai'
import examGrades, { gradeRecord, stateRecord, NOGRADE } from '../../app/reducers/examGrades'
import { addGrade, updateName, updateGrade, addError, resetEmptyGrade, deleteEntry } from '../../app/actions'
import chaiImmutable from 'chai-immutable'
import { List } from 'immutable'

chai.use(chaiImmutable)

describe("ExamGrades Reducer", () => {
  const state = new stateRecord({
    grades: List([
      new gradeRecord()
    ])
  })

  it("Add Entry", () => {
    const name = 'name'
    const grade = 89
    const action = addGrade(name, grade)
    const newState = examGrades(state, action)

    expect(newState.getIn(['grades', 1, 'name'])).to.equal(name)
    expect(newState.getIn(['grades', 1, 'grade'])).to.equal(grade)
  })

  it("Update Name", () => {
    const id = 0
    const name = 'name'
    const action = updateName(id, name)
    const newState = examGrades(state, action)

    expect(newState.getIn(['grades', id, 'name'])).to.equal(name)
  })

  it("Update Name in Empty Grade", () => {
    const id = -1
    const name = 'name'
    const action = updateName(id, name)
    const newState = examGrades(state, action)

    expect(newState.getIn(['emptyGrade', 'name'])).to.equal(name)
  })

  it("Update Grade", () => {
    const id = 0
    const grade = 89
    const action = updateGrade(id, grade)
    const newState = examGrades(state, action)

    expect(newState.getIn(['grades', id, 'grade'])).to.equal(grade)
  })

  it("Update Grade in Empty Grade", () => {
    const id = -1
    const grade = 89
    const action = updateGrade(id, grade)
    const newState = examGrades(state, action)

    expect(newState.getIn(['emptyGrade', 'grade'])).to.equal(grade)
  })

  it("Add Error", () => {
    const id = 0
    const error = 'error'
    const action = addError(id, error)
    const newState = examGrades(state, action)

    expect(newState.getIn(['grades', id, 'error'])).to.equal(error)
  })

  it("Add Error", () => {
    const id = -1
    const error = 'error'
    const action = addError(id, error)
    const newState = examGrades(state, action)

    expect(newState.getIn(['emptyGrade', 'error'])).to.equal(error)
  })

  it("Reset Empty Grade", () => {
    const stateWithNewGrade = state.set('emptyGrade', new gradeRecord({name: 'name', grade: 78, error: 'error'}))
    const action = resetEmptyGrade()
    const newState = examGrades(stateWithNewGrade, action)

    expect(newState.getIn(['emptyGrade', 'name'])).to.equal('')
    expect(newState.getIn(['emptyGrade', 'grade'])).to.equal(NOGRADE)
    expect(newState.getIn(['emptyGrade', 'error'])).to.equal('')
  })

  it("Delete Entry", () => {
    const id = 0
    const stateWithGrade = state.setIn(['grades', id], new gradeRecord())
    const action = deleteEntry(id)
    const newState = examGrades(stateWithGrade, action)

    expect(newState.get('grades')).have.size(0)
  })
})
