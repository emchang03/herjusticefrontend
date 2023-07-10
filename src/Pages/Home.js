import React from "react";
import { NavLink } from "react-router-dom";

const Home  = () => {
    return(
        <div className="center-container">
                <h1> Welcome to the Client Case Navigator Tool </h1>
                <p className="long-desc"> This Her Justice tool is meant to promote transparency during your case processing. Click on your specific case and answer a few simple questions to get our best estimate of where your case is in the processing timeline.. </p>
                <div className="flex">
                    <div className="home-button">
                        <NavLink className="nav-link" to='/divorce'> Uncontested Divorce</NavLink>
                    </div>
                    <div className="home-button" > 
                        <NavLink className="nav-link" to='/uvisa-filing'> U-Visa Filing</NavLink>
                    </div>
                    <div className="home-button"> 
                        <NavLink className="nav-link" to='/uvisa-postfiling'> U-Visa Post Filing</NavLink>
                    </div>
                </div>
        </div>
    
    )
};

export default Home;

