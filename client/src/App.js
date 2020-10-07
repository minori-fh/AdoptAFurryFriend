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
    }
  }

  componentDidMount(){

      let doges = []

      axios.get(this.state.proxyurl + "https://petsmartcharities.org/adopt-a-pet/find-a-pet?city_or_zip=94105&species=dog&other_pets=_none&form_build_id=form-Q8G91jKYwU43iYKOE9O6DUusJ5_BtUw4P1YDdC7PBfU&form_id=adopt_a_pet_search_block_form&op=Search")
          .then(function(response){

          var $ = cheerio.load(response.data);

          $(".adopt-a-pet-item").each(function(i, element){
    
                  var pmResults = {};
              
                  pmResults.name = $(element).find("h4").text();
                  pmResults.breed = $(element).find("h6").text();
                  // pmResults.imgLink = $(element).children(".aap-pet-photo").children("img");
                  pmResults.moreInfo = $(element).find("a").attr("href")
                  pmResults.site = "petsMart"

                  doges.push(pmResults)
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
                  rdResults.site = "rocketDog"

                  doges.push(rdResults)
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
                  hsResults.site = "hss"

                  doges.push(hsResults)

          });
      });

      console.log("this is the doge obj: ", doges)
      this.setState({dogearr: doges})
  }

  goSearch = () => {
    this.setState({searchPage: true});
    console.log("dogearr in goSearch func", this.state.dogearr)

    let dogearr = this.state.dogearr

    for (let i = 0; i < dogearr.length; i++) {

      console.log("arr[i] ", dogearr[i])

      axios.post("http://localhost:3000/doge", dogearr[i])
      .then(res => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  render(){
    return(
      <div>

        <HomePage buttonClick={this.goSearch}/>
        {(this.state.searchPage && 
        <SearchPage/>
        )}

      </div>
    )
  }
  
  
}

export default App;
