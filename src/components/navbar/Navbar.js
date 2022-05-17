import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-main-div">
            <h1>Navbar component</h1>
            <Link to="/">Home</Link>
            <Link to="/aboutMe">About Me</Link>
        <Link to="/technologies">Technologies</Link>
        <Link to="/projects">Projects</Link>
        </div>
    );
};

export default Navbar;
