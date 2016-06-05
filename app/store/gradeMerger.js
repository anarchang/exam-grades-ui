import merger from 'redux-storage-merger-immutablejs'
import { gradeRecord } from '../reducers/examGrades'

export default function gradeMerger(oldstate, newstate) {
  console.log('grade merger')
  const mergedState = merger(oldstate, newstate)

  const correctedState = mergedState.updateIn(['examGrades', 'grades'], (grades) => {
    return grades.map((recordItems) => new gradeRecord({
      name: recordItems.get('name'),
      grade: recordItems.get('grade'),
      error: recordItems.get('error')
    }))
  })

  return correctedState
}
