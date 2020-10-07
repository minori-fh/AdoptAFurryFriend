import React, { Component } from 'react';
import "./style.css"

class SearchPage extends Component {
    constructor(props){
      super(props)
      this.state = {
        hi: false,
        proxyurl: "https://cors-anywhere.herokuapp.com/" 
      }
    }

    render(){
      return(
        <div className="search-main">SearchPage</div>
      )
    }
    
    
  }

  export default SearchPage