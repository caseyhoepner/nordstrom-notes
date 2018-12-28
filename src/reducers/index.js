import { combineReducers } from 'redux';
import { noteReducer, setActiveNote } from './note-reducer';
import filterReducer from './filter-reducer';

const rootReducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
  activeNote: setActiveNote
})

export default rootReducer;