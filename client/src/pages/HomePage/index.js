import React from 'react';
import "./style.css"

import HomeNav from "../../components/HomeNav"
import HomeMainText from "../../components/HomeMainText"
import HomeAgencies from "../../components/HomeAgencies"

function HomePage(props) {

    return (
        <div className="main">
            <HomeNav goSearch={props.buttonClick}/>
            <HomeMainText/>
            <HomeAgencies goSearch={props.buttonClick}/>
        </div>
    );

} 
export default HomePage