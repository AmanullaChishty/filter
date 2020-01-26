import { SEARCH, SUCCESS } from '../actions/searchAction';

const initialState = {contents: [], value: '', works: []};

export default function searchReducer(state = initialState, action) {
  switch(action.type) {
    case SUCCESS: {
      const {contents} = action;
      console.log('contents',contents)
      return {
        ...state,
        contents:contents 
      };
    }
    case SEARCH: {
      const {value} = action;
      const works = state.contents.filter((val) => val.includes(value));
      console.log('works',works)
      return {
        ...state, 
        value:value,
        works:works
      };
    }
    default:
      return state;
  }
}