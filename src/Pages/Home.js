import React from "react";
import { NavLink } from "react-router-dom";

const Home  = () => {

    return(
            <div className="welcome-container">
                <h1 className="main-title"> welcome to the client case navigator tool </h1>

                <p className="long-desc">Click on your specific case to learn more. At this time, the tool only provides information on Uncontested Divorce and U Nonimmigrant Status ("U-Visas").</p>

                <p className="long-desc" style={{fontSize:"smaller"}}>
                Disclaimer: This tool is not provided by any governmental agency. It is provided by Her Justice, a non-profit organization, and it is only meant for clients receiving services from Her Justice. <span style={{fontWeight: "bold"}}>This tool is meant for informational purposes only. Clicking on and exploring this page will not impact or speed up your case in any way.</span>
                </p>
            </div>
    
    )
};

export default Home;

