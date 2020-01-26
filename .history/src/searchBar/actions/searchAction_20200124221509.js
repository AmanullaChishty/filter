export const SEARCH = 'SEARCH';
export const SUCCESS = 'SUCCESS'

export function search(value) {
  console.log('value',value)
  return {
      type: SEARCH, 
      value:value
    };
}

export function getData(res) {
  console.log('res',res)
  return {
      type: SUCCESS, 
      res:res
    };
}

// export const search = (value) => dispatch => {
//     dispatch({
//       type: SEARCH,
//       payload: value
//     })
//   }