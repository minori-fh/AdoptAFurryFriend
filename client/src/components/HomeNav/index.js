import React from 'react';
import "./style.css"
import Logo from "../../pages/HomePage/images/logo.png"

function HomeNav(props) {

    return (
        <div className="navbar">
                <img className="nav-logo" src={Logo} style={{width: "40px"}}></img>
                <div className="nav-header">Adopt a Furry Friend</div>               
                <a className="nav-btn" href="#" role="button">SEARCH NOW</a>        

        </div>
    );

} 

export default HomeNav