import React from "react";
import './home.css';
import Navbar from '../navbar/Navbar';
import { Link } from "react-router-dom";
import backgroundVid from '../../assests/portfolio-home-vid.mp4'
import Contact from "../contact/Contact";
import * as Scroll from 'react-scroll';
let ScrollLink = Scroll.Link;


const Home = () => {
    return (
        <div className="home-main-div">
            <div className="video-div">
                <video src={backgroundVid} autoPlay loop muted />
            </div>
            <div className="home-contents-div">
                <div className="navbar-home-div">
                    <Navbar />
                </div>
                <div className="others-home-div">
                    <p>
                        <span className="name-span">Hello</span>, My name is  <span className="name-span">Rafet</span>
                    </p>
                    <p>
                        && I'm a <span className="name-span">Full Stack Web Developer</span>
                    </p>
                    <div className="home-page-links">
                        <Link to="/aboutMe" className="homepage-single-link">My Story</Link>
                        <Link to="/technologies" className="homepage-single-link">Tech Stack</Link>
                        <Link to="/projects" className="homepage-single-link">Projects</Link>
                        <ScrollLink to="contact" className="homepage-single-link"
                            spy={true} smooth={true} offset={50} duration={500} activeClass="active"
                        >Contact</ScrollLink>
                    </div>
                </div>

            </div>

            <Contact />
        </div>
    );
};

export default Home;

