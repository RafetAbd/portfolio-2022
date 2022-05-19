import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-main-div">
            <Link to="/" className="logo-link">
                <p>RAFET</p>
                <p>ABDALGALIL</p>
            </Link>
            <Link to="/aboutMe" className="navbar-links">About</Link>
            <Link to="/technologies" className="navbar-links">Technologies</Link>
            <Link to="/projects" className="navbar-links">Projects</Link>
            <a href="Rafet Abdalgalil resume.pdf" className="navbar-links" target="_blank">Resume</a>
        </div>
    );
};

export default Navbar;
