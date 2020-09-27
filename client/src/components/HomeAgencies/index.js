import React from 'react';
import "./style.css"

import PetsMart from "../../pages/HomePage/images/petsMart.png"
import RocketDog from "../../pages/HomePage/images/rocketDog.png"
import Hss from "../../pages/HomePage/images/hss.jpg"

function HomeAgencies(props) {

    return (
        <div className="main-agency">
            <div className="h2">Agencies We Support: </div>

            <div>
                <img className="nav-agency" src={Hss} style={{width: "100px"}}></img>
                <img className="nav-agency" src={PetsMart} style={{width: "140px"}}></img>
                <img className="nav-agency" src={RocketDog} style={{width: "140px"}}></img>
            </div>
            
            <button onClick={props.goSearch} className="home-btn" href="#" role="button">FIND LOVE</button>       

        </div>
    );

} 
export default HomeAgencies