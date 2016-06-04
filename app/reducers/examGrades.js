import Immutable from 'immutable'

const stateRecord = Immutable.Record({
  grades: Immutable.List()
})

const gradeRecord = Immutable.Record({
  name: '',
  grade: 0
})

const initialState = new stateRecord({
  grades: Immutable.List([new gradeRecord({name: 'ana', grade: 90})])
})

export default function examGrades(state = initialState, action) {
  if (action && action.type === 'ADD_ENTRY') {
    const newRecord = new gradeRecord({name: action.name, grade: action.grade})
    return state.update('grages', (grades) => grades.push(newRecord))
  }

  if (action && action.type === 'UPDATE_NAME') {
    return state.setIn(['grades', action.id, 'name'], action.name)
  }

  if (action && action.type === 'UPDATE_GRADE') {
    return state.setIn(['grades', action.id, 'grade'], action.grade)
  }

  console.log('examGrades')

  return state
}
