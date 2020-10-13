import React from 'react';
import "./style.css";

import pm from "../../pages/SearchPage/images/pm.png"
import rd from "../../pages/SearchPage/images/rdr.png"
import hs from "../../pages/SearchPage/images/hss.jpg"

function DogeDisplay(props) {

    console.log("this be the filtered arr ", props.dogeArr)

    let dogeArr = props.dogeArr

    return (

        <div className="dogeDisplay">
            {dogeArr.map(function(doge, index){

                let siteLogo;

                if (doge.site == "pm") {
                    siteLogo = <img className="sitelogo" src={pm}/>
                } else if (doge.site == "rd"){
                    siteLogo = <img className="sitelogo" src={rd}/>
                } else if (doge.site == "hs"){
                    siteLogo = <img className="sitelogo" src={hs}/>
                } 

                return(
                <div className="dogeCardWrapper">
                    <a href={doge.moreInfo} target="_blank">
                        <div className="dogeCard">
                            <img className="doge-pic" src={doge.imgLink}/>
                            <div className="dogeDesc">
                                <div><span className="hi">Hi, I'm </span><span className="dogeName">{doge.name}</span></div>
                                <div className="breed">{doge.breed}</div>
                                <div className="moreInfo">LEARN MORE</div>
                            </div>
                            {siteLogo}
                        </div>
                    </a>
                </div>
                )
            })

            }            
        </div>
    );

} 

export default DogeDisplay