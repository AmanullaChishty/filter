import MUIDataTable from "mui-datatables";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import GridList from './gridList'
import SearchBar from './searchBar/components/searchBar';
import { getData } from './searchBar/selectors/searchSelectors';



/**
 * @class App
 * @extends {Component}
 */
class App extends Component {


  
  /**
   * @memberof App
   * @summary handles button click 
   */
  

  render() {
    return (
      <div className="App">
        <SearchBar/>
        <GridList/>
      </div>
    );
  }
}

export default App;
