import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
    return (
        <div className="navbar-main-div">
            <Link to="/" className="logo-link">
                RA
            </Link>
            <Link to="/aboutMe" className="navbar-links">About</Link>
            <Link to="/technologies" className="navbar-links">Technologies</Link>
            <Link to="/projects" className="navbar-links">Projects</Link>
            <Link to="/contact" className="navbar-links">Contact</Link>
        </div>
    );
};

export default Navbar;
