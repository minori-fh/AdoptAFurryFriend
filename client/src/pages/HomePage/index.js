import React from 'react';
import "./style.css"

import HomeNav from "../../components/HomeNav"
import HomeMainText from "../../components/HomeMainText"
import HomeAgencies from "../../components/HomeAgencies"

function HomePage(props) {

    return (
        <div className="main">
            <HomeNav/>
            <HomeMainText/>
            <HomeAgencies/>
        </div>
    );

} 
export default HomePage