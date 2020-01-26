import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import searchReducer from './searchReducer'

export default combineReducers({
  simpleReducer,
  searchReducer
});
