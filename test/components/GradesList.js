import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import GradesList from '../../app/components/GradesList'
import { gradeRecord } from '../../app/reducers/examGrades'
import sinon from 'sinon'
import { List } from 'immutable'

describe("GradesList", () => {
  const grades = new List([
    new gradeRecord({name: 'Sally Smith', grade: '45'}),
    new gradeRecord({name: 'Joe Smith', grade: '89'})
  ])
  const onGradeChange = sinon.spy()
  const onNameChange = sinon.spy()
  const addError = sinon.spy()
  const emptyGrade = new gradeRecord()
  const addEntry = sinon.spy()
  const deleteEntry = sinon.spy()

  const wrapper = mount(
    <GradesList
      grades={grades}
      onGradeChange={onGradeChange}
      onNameChange={onNameChange}
      addError={addError}
      emptyGrade={emptyGrade}
      addEntry={addEntry}
      deleteEntry={deleteEntry}
    />
  )

  it("should have three rows", () => {
    expect(wrapper.find('GradeRow').length).to.equal(3)
  })

  it("should have an empty row", () => {
    expect(wrapper.find('.emptyRow').length).to.equal(1)
  })

})
