import React from "react";
import './home.css';
import Navbar from '../navbar/Navbar';
import { Link } from "react-router-dom";
import backgroundVid from '../../assests/portfolio-home-vid.mp4'

const Home = () => {
    return (
        <div className="home-main-div">

            <video src={backgroundVid} autoPlay loop muted />
            <div className="home-contents-div">
                <div className="navbar-home-div">
                    <Navbar />
                </div>
                <div className="others-home-div">
                    <p>
                    <span className="name-span">Hello</span>, My name is  <span className="name-span">Rafat</span>
                    </p>
                    <p>
                        && I'm a <span className="name-span">Full Stack Web Developer</span>
                    </p>
                    <div className="home-page-links">
                        <Link to="/aboutMe">About Me</Link>
                        <Link to="/technologies">Technologies</Link>
                        <Link to="/projects">Projects</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;

