import { connect } from 'react-redux'
import GradesList from '../components/GradesList'
import { updateGrade, updateName } from '../actions'

const mapStateToProps = (state) => {
  console.log('GradesListContainer')
  return {
    grades: state.getIn(['examGrades', 'grades'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGradeChange: (id, grade) => {

      dispatch(updateGrade(id, grade))
    },
    onNameChange: (id, name) => {
      dispatch(updateName(id, name))
    }
  }
}

const GradesListContainer = connect(mapStateToProps, mapDispatchToProps)(GradesList)

export default GradesListContainer
