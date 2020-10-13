import React from 'react';
import "./style.css"

import Logo from "../../pages/HomePage/images/logo.png"

function HomeMainText(props) {

    return (
        <div className="home-main">
            <div className="h1">Adopt a Furry Friend</div>
            <img className="nav-logo" src={Logo} style={{width: "130px"}}></img>
            <div className="h2">Meet Your New Best Friend</div>
            <div className="h3 lastLine">Ready to Be Loved!</div>
        </div>
    );

} 
export default HomeMainText