function addEntry (name, grade) {
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

export { addEntry, updateName, updateGrade }
