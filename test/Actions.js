import { expect } from 'chai'
import { addGrade, updateName, updateGrade, addError, resetEmptyGrade, deleteEntry } from '../app/actions'

describe("Actions", () => {
  it("addGrade", () => {
    const name = "name"
    const grade = 89
    const action = addGrade(name, grade)

    expect(action.type).to.equal('ADD_ENTRY')
    expect(action.name).to.equal(name)
    expect(action.grade).to.equal(grade)
  })

  it("updateName", () => {
    const id = 1
    const name = 'name'
    const action = updateName(id, name)

    expect(action.type).to.equal('UPDATE_NAME')
    expect(action.id).to.equal(id)
    expect(action.name).to.equal(name)
  })

  it("updateGrade", () => {
    const id = 1
    const grade = 89
    const action = updateGrade(id, grade)

    expect(action.type).to.equal('UPDATE_GRADE')
    expect(action.id).to.equal(id)
    expect(action.grade).to.equal(grade)
  })

  it("addError", () => {
    const id = 1
    const error = 'error'
    const action = addError(id, error)

    expect(action.type).to.equal('ADD_ERROR')
    expect(action.id).to.equal(id)
    expect(action.error).to.equal(error)
  })

  it("resetEmptyGrade", () => {
    const action = resetEmptyGrade()

    expect(action.type).to.equal('RESET_EMPTY_GRADE')
  })

  it("deleteEntry", () => {
    const id = 1
    const action = deleteEntry(id)

    expect(action.type).to.equal('DELETE_ENTRY')
    expect(action.id).to.equal(id)
  })

 })
