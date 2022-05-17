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
                <Navbar />
                <div>
                    <p>
                        Hello, My name is  <span className="name-span">Rafat</span>
                    </p>
                    <p>
                        I'm a <span className="name-span">Full Stack Web Developer</span>
                    </p>
                    <div>
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

