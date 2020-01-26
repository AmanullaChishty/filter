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
        <SearchBar/>
        <GridList/>
      </div>
    );
  }
}

export default App;
