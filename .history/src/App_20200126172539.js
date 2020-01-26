import MUIDataTable from "mui-datatables";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { fetchData } from './searchBar/actions/fetchData';
import WorkList from './gridList'
import SearchBar from './searchBar/components/searchBar';
import { getData } from './searchBar/selectors/searchSelectors';



/* 
 * mapDispatchToProps
*/
// const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
// })

/* 
 * mapStateToProps
*/
// const mapStateToProps = state => ({
//   ...state
// })

const mapStateToProps=state=> {
  return {
      content:getData(state)
      };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllData:fetchData,
}, dispatch)

const headers = [{ name: "invoice_id", label: "Invoice id", options: { filter: true, sort: true, } },{ name: "reference", label: "Reference", options: { filter: true, sort: true, } },
{ name: "maturity_date", label: "Maturity Date", options: { filter: true, sort: true, } },{ name: "invoice_amount", label: "Invoice Amount", options: { filter: true, sort: true, } },
{ name: "ccy", label: "CCY", options: { filter: true, sort: true, } },{ name: "buyer", label: "Buyer", options: { filter: true, sort: true, } },
{ name: "supplier", label: "Supplier", options: { filter: true, sort: true, } },{ name: "invoice_date", label: "Invoice Date", options: { filter: true, sort: true, } },]

const options = {
  filterType: "checkbox",
  responsive: "stacked",
}

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {


  componentDidMount() {
    const { fetchAllData } = this.props;
    fetchAllData();
    
}
  /**
   * @memberof App
   * @summary handles button click 
   */
  // simpleAction = (event) => {
  //   this.props.simpleAction();
  // }

  render() {
    const {content} = this.props;
    return (
      <div className="App">
        {/* <WorkList/> */}
        <SearchBar/>
        <MUIDataTable
            title={'Detail List'}
            data={content}
            columns={headers}
            options={options}
          
          />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
