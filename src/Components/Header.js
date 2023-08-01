import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/public/assets/images/logo.png"
import "../global.css";

const Header = () => {
    return(
        <div className="header">
            <NavLink to='/home' style={{textDecoration: 'none', color: "black"}}> <img className='home-logo' src={logo}/> </NavLink>
            <div className="nav-bar">
                <NavLink className="nav-link" to='/faq'>FAQs</NavLink>
                <NavLink className="nav-link" to='/divorce'> divorce resources</NavLink>
                <NavLink className="nav-link" to='/uvisa-filing'>u-visa resources</NavLink>
            </div>
        </div>
    );
};

export default Header;