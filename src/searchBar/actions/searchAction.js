export const SEARCH = 'SEARCH';
export const SUCCESS = 'SUCCESS'

export function search(value) {
  return {
      type: SEARCH, 
      value:value
    };
}

export function getData(res) {
  return {
      type: SUCCESS, 
      contents:res
    };
}
