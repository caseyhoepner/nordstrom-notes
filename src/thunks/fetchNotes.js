import { addNote } from '../actions/note-actions';
import { fetchNotes } from '../utils/api';
var moment = require('moment');

export const retrieveNotes = () => {
  return async (dispatch) => {
    const date = moment().subtract(10, 'days').calendar();
    try {
      const notes = await fetchNotes();
      if (notes) {
        notes.forEach(note => dispatch(addNote(note, date)))
      }
    } catch (error) {
      console.log(error);
    }
  }
}