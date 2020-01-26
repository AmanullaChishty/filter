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
      const serachedData = state.contents.filter((val) => filteredData.find(
        ({ccy,lowerLimit,upperLimit,storeStartDate,storeEndDate})=>(
          val.ccy === ccy && val.invoice_amount>lowerLimit && val.invoice_amount<upperLimit && new Date(val.maturity_date)>new Date(storeStartDate) && new Date(val.maturity_date)<new Date(storeEndDate) 
          )
        ));
      console.log('serachedData',serachedData);

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