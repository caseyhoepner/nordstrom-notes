export const addNote = (note, date) => {
  return {
    type: 'ADD_NOTE',
    note
  }
}

export const setActiveNote = (activeNote) => {
  return {
    type: 'SET_ACTIVE_NOTE',
    activeNote
  }
}