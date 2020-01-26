import {SEARCH} from '../actions/searchAction';

const initialState = {contents: ['Mirististica', 'Vet'], value: '', works: [{"id":1}]};

export default function reducer(state = initialState, action) {
  switch(action.type) {
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