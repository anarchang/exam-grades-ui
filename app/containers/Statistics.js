import { connect } from 'react-redux'
import Statistics from '../components/Statistics'


const mapStateToProps = (state) => {
  console.log('Statistics')
  const records = state.getIn(['examGrades', 'grades'])
  const grades = records.map((record) => parseInt(record.grade)).toArray()

  const min = Math.min.apply(null, grades)
  const max = Math.max.apply(null, grades)
  const average = grades.reduce((reduction, value) => reduction + value, 0) / grades.length

  return {
    min,
    max,
    average
  }
}

const StatisticsContainer = connect(mapStateToProps, {})(Statistics)

export default StatisticsContainer
