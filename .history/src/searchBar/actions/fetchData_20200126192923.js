import { getData } from "./searchAction";

//https://my.api.mockaroo.com/tallydata.json?key=1e3baa20
function fetchData() {
    return dispatch => {
        fetch('data1.json')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(getData(res));
            
            return res;
        })
        .catch(error => {
            alert(error);
        })
    }
}

export { fetchData };

