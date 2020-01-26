import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import searchReducer from '../searchBar/reducers/searchReducer'

export default combineReducers({
  simpleReducer,
  searchReducer
});
