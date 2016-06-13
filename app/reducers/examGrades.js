import Immutable from 'immutable'

const NOGRADE = -9999

const gradeRecord = Immutable.Record({
  name: '',
  grade: NOGRADE,
  error: ''
})

const stateRecord = Immutable.Record({
  grades: Immutable.List(),
  emptyGrade: new gradeRecord()
})

var initialState = new stateRecord({
  grades: Immutable.List()
})

export default function examGrades(state = initialState, action) {

  if (action && action.type === 'ADD_ENTRY') {
    const newRecord = new gradeRecord({name: action.name, grade: action.grade})
    return state.update('grades', (grades) => grades.push(newRecord))
  }

  if (action && action.type === 'UPDATE_NAME') {
    if (action.id < 0) {
      return state.setIn(['emptyGrade', 'name'], action.name)
    } else {
      return state.setIn(['grades', action.id, 'name'], action.name)
    }
  }

  if (action && action.type === 'UPDATE_GRADE') {
    if (action.id < 0) {
      return state.setIn(['emptyGrade', 'grade'], action.grade)
    } else {
      return state.setIn(['grades', action.id, 'grade'], action.grade)
    }
  }

  if (action && action.type == 'ADD_ERROR') {
    if (action.id < 0) {
      return state.setIn(['emptyGrade', 'error'], action.error)
    } else {
      return state.setIn(['grades', action.id, 'error'], action.error)
    }
  }

  if (action && action.type === 'RESET_EMPTY_GRADE') {
    return state.setIn(['emptyGrade'], new gradeRecord())
  }

  if (action && action.type === 'DELETE_ENTRY') {
    return state.deleteIn(['grades', action.id])
  }

  return state
}

export { gradeRecord, stateRecord, NOGRADE }
