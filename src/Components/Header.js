import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import "../global.css";

const Header = () => {
    return(
        <div className="header">
            <NavLink to='/home' style={{textDecoration: 'none', color: "black"}}> <img className='home-logo' src={logo}/> </NavLink>
            <div className="nav-bar"> 
                <NavLink to='/immigration' className='page-option' >Immigration Cases</NavLink>
                <NavLink to='/divorce' className='page-option' >Divorce Cases</NavLink>
                <NavLink to='/childsupport' className="page-option">Child Support Cases</NavLink>
            </div>
        </div>
    );
};

export default Header;