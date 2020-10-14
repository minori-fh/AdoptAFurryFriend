import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
import cheerio from 'cheerio';


import HomePage from '../src/pages/HomePage'
import SearchPage from '../src/pages/SearchPage'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      homePage: true,
      searchPage: false,
      proxyurl: "https://cors-anywhere.herokuapp.com/",
      dogearr: [],
      pmDoges: [],
      rdDoges: [],
      hsDoges: []
    }
  }

  componentDidMount(){

      let doges = []

      let pmDoges = []
      let rdDoges = []
      let hsDoges = []

      axios.get(this.state.proxyurl + "https://petsmartcharities.org/adopt-a-pet/find-a-pet?city_or_zip=94105&species=dog&other_pets=_none&form_build_id=form-Q8G91jKYwU43iYKOE9O6DUusJ5_BtUw4P1YDdC7PBfU&form_id=adopt_a_pet_search_block_form&op=Search")
          .then(function(response){

          var $ = cheerio.load(response.data);

          $(".adopt-a-pet-item").each(function(i, element){
    
                  var pmResults = {};

                  let name = $(element).find("h4").text().toLowerCase()
                  pmResults.name = name.charAt(0).toUpperCase() + name.slice(1);
                  pmResults.breed = $(element).find("h6").text();
                  pmResults.moreInfo = $(element).find("a").attr("href")
                  pmResults.imgLink = $(element).find("img").eq(1).attr("src")
                  pmResults.site = "pm"

                  doges.push(pmResults)
                  pmDoges.push(pmResults)
          });
      });

      axios.get(this.state.proxyurl + "https://www.rocketdogrescue.org/adopt/adoptees/")
      .then(function(response){

      var $ = cheerio.load(response.data);

          $(".dog-list").children("li").each(function(i, element){

                  var rdResults = {};

                  rdResults.name = $(element).find("h3").children("a").text()
                  var breed1 = $(element).find(".dog-details").children(".detail").children("a").text()
                  var breed2 = breed1.replace(/([A-Z])/g, ', $1')
                  var breed3 = breed2.replace(" , ", " ")
                  rdResults.breed = breed3.slice(2)
                  rdResults.imgLink = $(element).children(".shadow").children("img").attr("src")
                  rdResults.moreInfo = $(element).find("h3").children("a").attr("href")
                  rdResults.site = "rd"

                  doges.push(rdResults)
                  rdDoges.push(rdResults)
          });
      });

      axios.get(this.state.proxyurl + "https://adopt.hssvmil.org/search/searchResults.asp?animalType=3%2C16&utm%5Fmedium=adopt%5Fnav&datelostfoundyear=%C2%AEionID%3D%2D1&tpage=1&pagesize=15&s=adoption&searchTypeId=4&sortby=6&statusID=3&submitbtn=Find+Animals&task=view&%3F0%26utm%5Fsource=website&utm%5Fterm=dogs&%5Fga=2%2E3286128%2E1129545607%2E1563410065%2D1435790490%2E1563410065")
      .then(function(response){

      var $ = cheerio.load(response.data);

          $(".result-wrapper").each(function(i, element){

                  var hsResults = {};

                  hsResults.name = $(element).find(".details-link").text()
                  hsResults.moreInfo = "https://adopt.hssvmil.org" + $(element).children(".pic-wrap").children("a").attr("href")
                  hsResults.imgLink = "https://adopt.hssvmil.org" + $(element).children(".pic-wrap").children("a").children("img").attr("src")
                  var breed1 = $(element).children(".pic-wrap").children(".hovertext").text().trim().split("                ")
                  hsResults.breed = breed1[1]
                  hsResults.site = "hs"

                  doges.push(hsResults)
                  hsDoges.push(hsResults)
          });
      });

      console.log("this is the dogearr: ", doges)

      this.setState({dogearr: doges})
      this.setState({pmDoges: pmDoges})
      this.setState({rdDoges: rdDoges})
      this.setState({hsDoges: hsDoges})
  }

  goSearch = () => {
    this.setState({searchPage: true})
  }

  render(){
    return(
      <div>

        <HomePage buttonClick={this.goSearch}/>
        <div id="dogeDisplay"></div>
        {(this.state.searchPage && 
        <SearchPage doges={this.state.dogearr} pmDoges={this.state.pmDoges} rdDoges={this.state.rdDoges} hsDoges={this.state.hsDoges}/>
        )}

      </div>
    )
  }
  
  
}

export default App;
