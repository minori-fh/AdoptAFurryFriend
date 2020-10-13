import React, { Component } from 'react';
import "./style.css"

import SideNav from "../../components/SideNav"
import DogeDisplay from "../../components/DogeDisplay"

class SearchPage extends Component {
    constructor(props){
      super(props)
      this.state = {
        filterType: "none", 
        filterValue: "none",
        filteredArr: this.props.doges, 
      }
    }

    filter = (filterType, filterValue) => {
      console.log("this is the filtertype ", filterType)
      console.log("this is the filtervalue ", filterValue)

      let allDoges = this.props.doges
      let filteredArr = []

      // FILTER BY AGENCY
      if (filterType == "agency") {
        let targetAgency = filterValue

        for (let i = 0; i < allDoges.length; i++) {
          let currentAgency = allDoges[i].site
          console.log("currentAgency ", currentAgency)

          if (currentAgency == targetAgency) {
            filteredArr.push(allDoges[i])
          }
        }
        console.log("filtered by ", filterValue, ": ", filteredArr)
      // FILTER BY BREED
      } else if (filterType == "breed") {
        let targetBreed = filterValue

        for (let i = 0; i < allDoges.length; i++) {
          let currentBreed = allDoges[i].breed

          if (currentBreed == targetBreed) {
            filteredArr.push(allDoges[i])
          }
        }
        console.log("filtered by ", filterValue, ": ", filteredArr)
      // NO FILTER/ SEE ALL DOGS
      } else if (filterType == "none") {
        filteredArr = allDoges
      }

      this.setState({filterType: filterType, filterValue: filterValue, filteredArr: filteredArr})
    }

    render(){
      console.log("ALLdoges: ", this.props.doges)

      let allDoges = this.props.doges
      let breedArr = []

      // iterate through allDoges array to grab breed info
      for(let i = 0; i < allDoges.length; i++){
        let currentBreed = allDoges[i].breed
        breedArr.push(currentBreed)
      }

      // filter through breedArr to create uniqueBreedArr
      let uniqueBreedArr = Array.from(new Set(breedArr)).sort()

      return(
        <div className="search-main">
          <SideNav breedArr={uniqueBreedArr} buttonClick={this.filter} filterValue={this.state.filterValue}/>
          <DogeDisplay dogeArr={this.state.filteredArr}/>
        </div>
      )
    }
  }

  export default SearchPage