import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [screensize, setScreensize] = useState(window.innerWidth);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreensize(window.innerWidth);
        });
    }, []);

    return (
        <div className="navbar-main-div">
            <Link to="/" className="logo-link">
                <p>RAFET</p>
                <p>ABDALGALIL</p>
            </Link>
            <div className="btn-links-div">
            {( toggle || screensize > 700 ) && (
                <nav className="navbar-main" >
                    <Link to="/aboutMe" className="navbar-links">About</Link>
                    <Link to="/technologies" className="navbar-links">Technologies</Link>
                    <Link to="/projects" className="navbar-links">Projects</Link>
//                     <a href="" className="navbar-links" target="_blank">Resume</a>
                </nav>
            )}
            <button className="btn" onClick={handleToggle}><img src="/PngItem_1784361.png" alt="three lines" /></button>

        </div>
        </div>
    );
};

export default Navbar;
