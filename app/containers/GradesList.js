import { connect } from 'react-redux'
import GradesList from '../components/GradesList'
import { addGrade, updateGrade, updateName, addError, resetEmptyGrade, deleteEntry } from '../actions'

const mapStateToProps = (state) => {
  return {
    grades: state.getIn(['examGrades', 'grades']),
    emptyGrade: state.getIn(['examGrades', 'emptyGrade'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGradeChange: (id, grade) => {

      dispatch(updateGrade(id, grade))
    },
    onNameChange: (id, name) => {
      dispatch(updateName(id, name))
    },
    addEntry: (name, grade) => {
      dispatch(addGrade(name, grade))
      dispatch(resetEmptyGrade())
    },
    addError: (id, error) => {
      dispatch(addError(id, error))
    },
    deleteEntry: (id) => {
      dispatch(deleteEntry(id))
    }
  }
}

const GradesListContainer = connect(mapStateToProps, mapDispatchToProps)(GradesList)

export default GradesListContainer
export { mapStateToProps, mapDispatchToProps }
