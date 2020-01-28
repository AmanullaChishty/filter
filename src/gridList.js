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
    const {result,seacrhedData} = this.props;
    let startDate=''
    let endDate=''

    if(result.length===0 && seacrhedData){
      alert('There is no data for your search criteria,please enter a date between 24/1/2018 to 1/12/2020,and amount between 1 to 1000')
    }

    if(seacrhedData){
      if(seacrhedData.startDate){
        startDate=new Date(seacrhedData.startDate).toLocaleDateString()
      }
      if(seacrhedData.endDate){
        endDate=new Date(seacrhedData.endDate).toLocaleDateString()    
      }
    }
    const title=('Currency '+seacrhedData.ccy + ' Invoices with value between '+ seacrhedData.ccy+ ' '+ seacrhedData.lowerLimit +' - '+ seacrhedData.upperLimit +' maturing between '+startDate+' and '+ endDate)
    
    if(result.length>0){
      result.forEach(item=>{
        if(item.maturity_date){
          item.maturity_date=new Date(item.maturity_date*1000).toLocaleDateString()
        }
      })
    }
    return (
     <div>
       {result.length>0?(<MUIDataTable
            title={title}
            data={result}
            columns={headers}
            options={options}
          />):'Please fill the above details and click search'}
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