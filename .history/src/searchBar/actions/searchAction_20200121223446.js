export const SEARCH = 'SEARCH';

export function search(value) {
  console.log('value',value)
  return {
      type: SEARCH, 
      value:value
    };
}

// export const search = (value) => dispatch => {
//     dispatch({
//       type: SEARCH,
//       payload: value
//     })
//   }