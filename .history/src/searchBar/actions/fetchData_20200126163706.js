import { getData } from "./searchAction";
import data from "data.json"


function fetchData() {
    console.log('data',data);
    // return dispatch => {
    //     fetch(`https://my.api.mockaroo.com/tallydata.json?key=1e3baa20`, {
    //         headers: {
    //           'Content-Type': 'application/json'
      
    //         }
    //       })
    //     .then(res => res.json())
    //     .then(res => {
    //         if(res.error) {
    //             throw(res.error);
    //         }
    //         dispatch(getData(res));
            
    //         return res;
    //     })
    //     .catch(error => {
    //         alert(error);
    //     })
    // }
}

export { fetchData };

