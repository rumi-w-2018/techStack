import { combineReducers } from 'redux';
import libraryReducer from './libraryReducer';
import selectionReducer from './selectionReducer';

const combinedReducers = combineReducers({
  libraries: libraryReducer,
  selectedLibrary: selectionReducer
});

export default combinedReducers;
