import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


const Navbar = () => {
    return (
        <div className="navbar-main-div">
            <Link to="/" className="logo-link">Home</Link>
            <Link to="/aboutMe">About Me</Link>
            <Link to="/technologies">Technologies</Link>
            <Link to="/projects">Projects</Link>
        </div>
    );
};

export default Navbar;
