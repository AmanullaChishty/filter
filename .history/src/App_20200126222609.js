import React, { Component } from 'react';
import './App.css';
import GridList from './gridList'
import SearchBar from './searchBar/components/searchBar';



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
        <span className="header">Invoice Filter</span>
        <SearchBar/>
        <div className='grid'>
        <GridList/>
        </div>
        
      </div>
    );
  }
}

export default App;
