import { getData } from "./searchAction";


function fetchData() {
    return dispatch => {
        fetch(`https://my.api.mockaroo.com/tallydata.json?key=1e3baa20`, {
            headers: {
              'Content-Type': 'application/json'
      
            }
          })
        .then(res => res.json())
        .then(res => {
            console.log('res',res);
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

