import React from 'react';
import "./style.css";

function SideNav(props) {

    console.log("this be the unique arr of breeds!! ", props.breedArr)
    console.log("FILTER VALUE!! IS ? : ", props.filterValue)

    let breedArr = props.breedArr
    let filterValue = props.filterValue

    return (
    <div className="sidenav">
        <div id="sidenav-wrapper">
            <div className="sidenav-cat">All Dogs</div> 
            <li 
                style={{textDecoration: filterValue == "none" ? "underline" : "none"}} 
                onClick={() => props.buttonClick("none", "none")}>
                See All
            </li>      
            <div className="sidenav-cat">Dogs by Agency</div>  
                <li 
                    style={{textDecoration: filterValue == "pm" ? "underline" : "none"}} 
                    onClick={() => props.buttonClick("agency", "pm")} className="filterValue">
                    PetSmart
                </li>  
                <li 
                    style={{textDecoration: filterValue == "rd" ? "underline" : "none" }} 
                    onClick={() => props.buttonClick("agency", "rd")} className="filterValue">
                    Rocket Dog Rescue
                </li> 
                <li 
                    style={{textDecoration: filterValue == "hs" ? "underline" : "none" }} 
                    onClick={() => props.buttonClick("agency", "hs")} className="filterValue">
                    Humane Society Silicon Valley
                </li> 
            <div className="sidenav-cat">Dogs by Breed</div>    
            {
            breedArr.map(function(breed, index){
                return <li style={{textDecoration: filterValue == breed ? "underline" : "none" }} onClick={() => props.buttonClick("breed", breed)} key={index} className="filterValue">{breed}</li>;
                })
            }           
        </div>
    </div>
    );

} 

export default SideNav