import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import HomePage from '../src/pages/HomePage'
import SearchPage from '../src/pages/SearchPage'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      homePage: true,
      searchPage: false,
    }
  }

  render(){
    return(
      <div>

        <HomePage/>
        {(this.state.searchPage && 
        <SearchPage/>
        )}

      </div>
    )
  }
  
  
}

export default App;
