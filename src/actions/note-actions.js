export const addNote = (note, date) => {
  return {
    type: 'ADD_NOTE',
    note
  }
}