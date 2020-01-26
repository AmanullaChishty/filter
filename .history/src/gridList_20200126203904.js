import React, { Component } from 'react';
import { connect } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { getSearchCriteria, getSearchData } from './searchBar/selectors/searchSelectors';


const headers = [{ name: "invoice_id", label: "Invoice id", options: { filter: true, sort: true, } },{ name: "reference", label: "Reference", options: { filter: true, sort: true, } },
{ name: "maturity_date", label: "Maturity Date", options: { filter: true, sort: true, } },{ name: "invoice_amount", label: "Invoice Amount", options: { filter: true, sort: true, } },
{ name: "ccy", label: "CCY", options: { filter: true, sort: true, } },{ name: "buyer", label: "Buyer", options: { filter: true, sort: true, } },
{ name: "supplier", label: "Supplier", options: { filter: true, sort: true, } },{ name: "invoice_date", label: "Invoice Date", options: { filter: true, sort: true, } },]

const options = {
  filterType: "checkbox",
  responsive: "stacked",
}

class GridList extends Component {
  render() {
    const {result} = this.props;
    if(result.length>1){
      result.forEach(item=>{
        if(item.maturity_date){
          let date=new Date(item.maturity_date*1000)
          let yyyy = date.getFullYear();
          let mm =date.getMonth()+1
          let dd=date.getDate();

          console.log('length',mm.length)
          if(mm.length==1){
            item.maturity_date = dd+'/'+'0'+ mm +'/'+yyyy;
          }
          if(dd.length==1){
            item.maturity_date = '0'+dd+'/'+ mm +'/'+yyyy;
          }

          item.maturity_date = dd+'/'+ mm +'/'+yyyy;
        }
      })
    }
    return (
     <div>
       {result.length>1?(<MUIDataTable
            title={'Detail List'}
            data={result}
            columns={headers}
            options={options}
          
          />):null}
     </div>
    );
  }
}


const mapStateToProps=state=> {
  return {
      result: getSearchData(state),
      seacrhedData:getSearchCriteria(state)
      };
}


export default connect(mapStateToProps)(GridList);