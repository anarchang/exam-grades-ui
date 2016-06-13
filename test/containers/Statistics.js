import chai, { expect } from 'chai'
import { List, Map } from 'immutable'
import { mapStateToProps, mapDispatchToProps } from '../../app/containers/Statistics'
import examGrades, { gradeRecord, stateRecord } from '../../app/reducers/examGrades'

describe("GradesList Container", () => {
  const grades = [10, 20]
  const state = new Map({
    examGrades: new stateRecord({
      grades: new List(grades.map((grade) => new gradeRecord({grade: `${grade}`}))
      )
    })
  })

  const props = mapStateToProps(state)

  it("minimum returned in props", () => {
    expect(props.min).to.equal(Math.min.apply(null, grades))
  })

  it("maximum returned in props", () => {
    expect(props.max).to.equal(Math.max.apply(null, grades))
  })

  it("minimum returned in props", () => {
    expect(props.average).to.equal((grades.reduce((reduction, value) => reduction + value, 0) / grades.length).toFixed(1))
  })

})
