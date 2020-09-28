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

  goSearch = () => {
    this.setState({searchPage: true});
  }

  render(){
    return(
      <div>

        <HomePage buttonClick={this.goSearch.bind(this)}/>
        {(this.state.searchPage && 
        <SearchPage/>
        )}

      </div>
    )
  }
  
  
}

export default App;
