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
      const serachedData = state.contents.filter((val) => {console.log('val',val)});
      const serachedData = state.contents.forEach(item=>{
        item.filter((val)=>val.includes(value.ccy))
      })
      return {
        ...state, 
        value:value,
        serachedValue:serachedData
      };
    }
    default:
      return state;
  }
}