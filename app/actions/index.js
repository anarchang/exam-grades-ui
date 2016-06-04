function addGrade (name, grade) {
  return {
    type: 'ADD_ENTRY',
    name,
    grade
  }
}

function updateName (id, name) {
  return {
    type: 'UPDATE_NAME',
    id,
    name
  }
}

function updateGrade (id, grade) {
  return {
    type: 'UPDATE_GRADE',
    id,
    grade
  }
}

function addError (id, error) {
  return {
    type: 'ADD_ERROR',
    id,
    error
  }
}

function resetEmptyGrade () {
  return {
    type: 'RESET_EMPTY_GRADE'
  }
}

export { addGrade, updateName, updateGrade, addError, resetEmptyGrade }
