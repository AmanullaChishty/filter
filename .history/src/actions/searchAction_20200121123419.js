export const SEARCH = 'SEARCH';

// export function search(value) {
//   return {type: SEARCH, value};
// }

export const simpleAction = (value) => dispatch => {
    dispatch({
      type: SEARCH,
      payload: value
    })
  }