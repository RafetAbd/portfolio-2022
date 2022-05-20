import React from "react";
import './home.css';
import Navbar from '../navbar/Navbar';
// import { Link } from "react-router-dom";
import backgroundVid from '../../assests/portfolio-home-vid.mp4'
import Contact from "../contact/Contact";
import { motion } from "framer-motion";
import * as Scroll from 'react-scroll';
let ScrollLink = Scroll.Link;


const Home = () => {

    return (
        <div className="home-main-div">
            <div className="video-div" >
                <video  autoPlay loop muted playsInline>
                    <source src={backgroundVid} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
            <div className="home-contents-div">
                <motion.div className="navbar-home-div"
                    initial={{ y: -250 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 60 }}
                >
                    <Navbar />
                </motion.div>
                <div className="others-home-div">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <span className="name-span">Hello</span>, My name is  <span className="name-span">Rafet</span>
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 1 }}
                    >
                        && I'm a <span className="name-span">Full Stack Web Developer</span>
                    </motion.p>
                    <motion.div className="home-page-links"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4, duration: 1 }}
                    >
                        <ScrollLink to="contact" className="homepage-single-link"
                            spy={true} smooth={true} offset={50} duration={500} activeClass="active"
                        >Contact<img src="/arrow-211-512.png" alt="arrow" className="arrow-image" /> </ScrollLink>
                    </motion.div>
                </div>

            </div>

            <Contact />
        </div>
    );
};

export default Home;

