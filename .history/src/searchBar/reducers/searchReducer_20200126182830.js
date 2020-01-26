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
      let filteredData=[value]
      console.log('filteredData',filteredData);
      //val.includes(value)
      const serachedData = state.contents.filter((val) => filteredData.find(({ccy})=>val.ccy === ccy));
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