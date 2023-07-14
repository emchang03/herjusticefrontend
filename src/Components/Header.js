import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import "../global.css";

const Header = () => {
    return(
        <div className="header">
            <NavLink to='/home' style={{textDecoration: 'none', color: "black"}}> <img className='home-logo' src={logo}/> </NavLink>
        </div>
    );
};

export default Header;