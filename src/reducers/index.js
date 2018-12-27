import { combineReducers } from 'redux';
import noteReducer from './note-reducer';
import filterReducer from './filter-reducer';

const rootReducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})

export default rootReducer;