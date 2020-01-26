import { SEARCH, SUCCESS } from '../actions/searchAction';

const initialState = {contents: [], value: '', serachedValue: []};

export default function searchReducer(state = initialState, action) {
  switch(action.type) {
    case SUCCESS: {
      const {contents} = action;
      console.log('contents reducer',contents,action)
      return {
        ...state,
        contents:contents 
      };
    }
    case SEARCH: {
      const {value} = action;
      console.log('state.content',state.contents)
      const works = state.contents.filter((val) => {console.log('val',val), val.includes(value)});
      console.log('works',works)
      return {
        ...state, 
        value:value,
        serachedValue:works
      };
    }
    default:
      return state;
  }
}