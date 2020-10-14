import React from 'react';
import "./style.css"
import { Link } from 'react-scroll';
import Logo from "../../pages/HomePage/images/logo.png"

function HomeNav(props) {

    return (
        <div className="navbar">
                <img className="nav-logo" src={Logo} style={{width: "30px"}}></img>
                <div className="nav-header">Adopt a Furry Friend: <span className="locale">Bay Area</span></div>  
                <Link className="link-nav-btn" to="dogeDisplay" smooth={true} duration={1000} delay={500}>            
                <button onClick={props.goSearch} className="nav-btn" href="#" role="button">SEARCH NOW</button>        
                </Link> 
        </div>
    );

} 

export default HomeNav