import React, { Component } from 'react';
import "./style.css"

import HomeNav from "../../components/HomeNav"
import HomeMainText from "../../components/HomeMainText"
import HomeAgencies from "../../components/HomeAgencies"

class HomePage extends Component {
    constructor(props){
      super(props)
      this.state = {
        dogearr: [],
        proxyurl: "https://cors-anywhere.herokuapp.com/" 
      }
    }

    render(){
    return (
        <div className="main">
            <HomeNav goSearch={this.props.buttonClick}/>
            <div className="hpbody">
              <HomeMainText/>
              <HomeAgencies goSearch={this.props.buttonClick}/>           
            </div>
        </div>
    )}

} 
export default HomePage