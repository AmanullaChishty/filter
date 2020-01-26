import { SEARCH, SUCCESS } from '../actions/searchAction';

const initialState = {contents: [], value: '', serachedValue: []};

export default function searchReducer(state = initialState, action) {
  switch(action.type) {
    case SUCCESS: {
      const {contents} = action;
      return {
        ...state,
        contents:contents 
      };
    }
    case SEARCH: {
      const {value} = action;
      console.log('action',action)
      console.log('content',state.contents)
      //val.includes(value)
      const works = state.contents.filter((val) => {console.log('val',val)});
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