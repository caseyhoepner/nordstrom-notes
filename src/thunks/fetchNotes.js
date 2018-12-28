import { addNote } from '../actions/note-actions';
import { fetchNotes } from '../utils/api';

export const retrieveNotes = () => {
  return async (dispatch) => {
    try {
      const notes = await fetchNotes();
      if (notes) {
        notes.forEach(note => dispatch(addNote(note)))
      }
    } catch (error) {
      console.log(error);
    }
  }
}