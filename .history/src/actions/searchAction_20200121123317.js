export const SEARCH = 'SEARCH';

export function search(value) {
  return {type: SEARCH, value};
}

export const simpleAction = () => dispatch => {
    dispatch({
      type: SEARCH,
      payload: 'result_of_simple_action'
    })
  }