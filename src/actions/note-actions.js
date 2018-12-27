export const addNote = (note) => {
  return {
    type: 'ADD_NOTE',
    text: note.text,
    tag: note.tag
  }
}