describe('app', function () {
  it('loads without problems', function () {
    require('../App');
  });
});

// import except from 'except'
// import React from 'react'
// import TestUtils from 'react-addons-test-utils'
// import GradeRow from '../GradeRow'
// import { gradeRecord } from '../reducers/examGrades'

// const name = 'test name'
// const grade = 98
// const error = 'test error'

// describe('root', function () {
//   if('renders without problems', function () {
//     var gradeRow = TestUtils.renderIntoDocument(<GradeRow />)
//     expect(root).toExist()
//   })
// })

// describe('gradeRow', () => {
//   return {
//     id: 1,
//     gradeRecord: new gradeRecord({name, grade, error}),
//   }
// })

// it('renders the name' () => {
//   let graderow = TestUtils.renderIntoDocument(
//     <GradeRow />
//   )

//   let nameBox = TestUtils.findRenderedDOMComponentWithClass(
//     graderow, 'nameBox')

//   expect(nameBox.getDOMNode().textContent).toEqual(name)

// })
