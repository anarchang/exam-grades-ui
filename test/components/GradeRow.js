import React from 'react'
import { expect } from 'chai'
import { shallow, mount, render } from 'enzyme'
import GradeRow from '../../app/components/GradeRow'
import { gradeRecord } from '../../app/reducers/examGrades'
import sinon from 'sinon'

describe("GradeRow", () => {
  const id = 1
  const passingRecord = new gradeRecord({name: 'Sally Smith', grade: '89'})
  const failingRecord = new gradeRecord({name: 'Sally Smith', grade: '60'})
  const invalidRecord = new gradeRecord({name: 'Sally Smith', grade: 'a', error: 'error'})

  const onGradeChange = sinon.spy()
  const onNameChange = sinon.spy()
  const addError = sinon.spy()
  const emptyGrade = new gradeRecord()
  const addEntry = sinon.spy()
  const deleteEntry = sinon.spy()

  const passingWrapper = mount(
    <GradeRow
      id={1}
      gradeRecord={passingRecord}
      onGradeChange={onGradeChange}
      onNameChange={onNameChange}
      addError={addError}
      deleteEntry={deleteEntry}
    />
  )

  it("should have two inputs", () => {
    expect(passingWrapper.find('input').length).to.equal(2)
  })

  it("passing grade should not be highlighted", () => {
    expect(passingWrapper.find('.failing').length).to.equal(0)
  })

  it("failing grade should be highlighted", () => {
    const wrapper = mount(
      <GradeRow
      id={id}
      gradeRecord={failingRecord}
      onGradeChange={onGradeChange}
      onNameChange={onNameChange}
      addError={addError}
      deleteEntry={deleteEntry}
    />)
    expect(wrapper.find('.failing').length).to.equal(1)
  })

  it("error message should be shown", () => {
    const wrapper = mount(
      <GradeRow
      id={id}
      gradeRecord={invalidRecord}
      onGradeChange={onGradeChange}
      onNameChange={onNameChange}
      addError={addError}
      deleteEntry={deleteEntry}
    />)
    expect(wrapper.find('.errorBox').text()).to.equal(invalidRecord.get('error'))
  })

  it("grade change handler should be called", () => {
    const onGradeChange = sinon.spy()
    const onNameChange = sinon.spy()
    const addError = sinon.spy()
    const emptyGrade = new gradeRecord()
    const addEntry = sinon.spy()
    const deleteEntry = sinon.spy()

    const wrapper = mount(
      <GradeRow
        id={1}
        gradeRecord={passingRecord}
        onGradeChange={onGradeChange}
        onNameChange={onNameChange}
        addError={addError}
        deleteEntry={deleteEntry}
      />
    )

    const gradeField = wrapper.find('.gradeBox').first()
    const textChangeEvent = {target: {value: '89'}}

    gradeField.simulate('change', textChangeEvent)
    expect(onGradeChange.calledOnce).to.be.true
    expect(addError.calledWith(''))
  })

  it("error should be added for an invalid grade", () => {
    const onGradeChange = sinon.spy()
    const onNameChange = sinon.spy()
    const addError = sinon.spy()
    const emptyGrade = new gradeRecord()
    const addEntry = sinon.spy()
    const deleteEntry = sinon.spy()

    const wrapper = mount(
      <GradeRow
        id={1}
        gradeRecord={passingRecord}
        onGradeChange={onGradeChange}
        onNameChange={onNameChange}
        addError={addError}
        deleteEntry={deleteEntry}
      />
    )
    const gradeField = wrapper.find('.gradeBox').first()
    const textChangeEvent = {target: {value: 'a'}}

    gradeField.simulate('change', textChangeEvent)
    expect(onGradeChange.calledOnce).to.be.true
    expect(addError.calledOnce).to.be.true
    expect(addError.calledWith(id, 'Oops. Please enter a number for the grade.')).to.be.true
  })

  it("name change handler should be called", () => {
    const wrapper = mount(
      <GradeRow
      id={id}
      gradeRecord={failingRecord}
      onGradeChange={onGradeChange}
      onNameChange={onNameChange}
      addError={addError}
      onGradeChange={onGradeChange}
      onNameChange={onNameChange}
      addError={addError}
    />)
    const nameField = wrapper.find('.nameBox').first()
    const textChangeEvent = {target: {value: 'new name'}}

    nameField.simulate('change', textChangeEvent)
    expect(onNameChange.calledOnce).to.equal(true)
  })

})
