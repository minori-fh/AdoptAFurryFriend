import React from 'react';
import "./style.css"
import { Link } from 'react-scroll';

import PetsMart from "../../pages/HomePage/images/petsMart.png"
import RocketDog from "../../pages/HomePage/images/rocketDog.png"
import Hss from "../../pages/HomePage/images/hss.jpg"

function HomeAgencies(props) {

    return (
        <div className="main-agency">
            <div className="agency-heading">Agencies We Support: </div>

            <div className="logo-wrapper">
                <a href="https://www.hssv.org/" target="_blank"><img className="nav-agency hs" src={Hss}></img></a>
                <a href="https://petsmartcharities.org/" target="_blank"><img className="nav-agency pm" src={PetsMart}></img></a>
                <a href="https://www.rocketdogrescue.org/" target="_blank"><img className="nav-agency rd" src={RocketDog}></img></a>
            </div>
            
            <Link className="link-agency-btn" to="dogeDisplay" smooth={true} duration={1000} delay={500}>
            <button onClick={props.goSearch} className="home-btn" href="#" role="button">FIND LOVE</button>       
            </Link>

        </div>
    );

} 
export default HomeAgencies