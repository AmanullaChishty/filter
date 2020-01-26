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
      let filteredData=[value]
      const serachedData = state.contents.filter((val) => filteredData.find(
        ({ccy,lowerLimit,upperLimit,storeStartDate,storeEndDate})=>(
          val.ccy === ccy && val.invoice_amount>lowerLimit && val.invoice_amount<upperLimit && val.maturity_date>storeStartDate && val.maturity_date<storeEndDate
          )
        ));

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