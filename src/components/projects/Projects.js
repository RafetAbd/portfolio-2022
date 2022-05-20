import React from "react";
import Navbar from "../navbar/Navbar";
import './projects.css';
import { motion } from "framer-motion";

const Projects = () => {

    return (
        <div className="projects-main-div">
            <Navbar />
            <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >Projects</motion.h1>
            <div className="projects-list">
                <motion.div className="single-project-div"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                >
                    <div className="single-project-title-text-div">
                        <p className="single-project-title"><span className="project-span">P</span>ick <span className="project-span">A </span>movie</p>
                        <p className="single-project-text">
                        A movie picker with a tinder-style app that allows users to search for movies and save them to their favorites.
                            then match them with other users and see what next movies to watch. This application is built with React, Redux for the front end, and Node.js, Express, and Sequelize for the backend.
                            I used Axios to make API calls. I've also got
                            to work with Socket.IO to ensure a real-time update when one of the users adds a matched movie to their favorites.

                        </p>
                    </div>
                    <a href="https://pick-amovie.herokuapp.com/" target="_blank" className="image-projects" rel="noreferrer"><img src='/Screen Shot 2022-05-18 at 11.37.11 AM.png' alt="pick-a-movie" className="project-img" /></a>
                </motion.div>
                <hr />
                <motion.div className="single-project-div"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                >
                    <div className="single-project-title-text-div">
                        <p className="single-project-title"><span className="project-span">O</span>bjectively <span className="project-span">B</span>etter <span className="project-span">B</span>ooks</p>
                        <p className="single-project-text">
                        A full-stack e-commerce group website that allows users and guests to search for books and add them to their shopping cart. 
                        this CRUD site shows all the books in the database, a selected single book, and a shopping cart. 
                        there is also a checkout page where users can pay for their books. this site has an admin portal that shows all the purchases made by the users. this site is built with React, Redux for the frontend, Node.js, Express, Sequelize for the backend.
                        </p>
                    </div>
                    <a href="https://grace-shopper-alpha-quad-squad.herokuapp.com/" target="_blank" className="image-projects" rel="noreferrer"><img src='/Screen Shot 2022-05-18 at 11.38.17 AM.png' alt="redux" className="project-img" /></a>

                </motion.div>
                <hr />
                <motion.div className="single-project-div"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                >
                    <div className="single-project-title-text-div">
                        <p className="single-project-title"><span className="project-span">M</span>oments</p>
                        <p className="single-project-text">
                        A PWA group application that allows users to log in with their Spotify account, upload or capture photos, then match the photo with a selected song depending on the photo color theme.
                            this application is built with React, Redux for the front end, Node.js, Express, Sequelize for the backend, and Spotify API for authentication and to search for songs.
                            We used the Color-thief library to detect the dominant color of the image and Amazon S3 to store the uploaded images.
                        </p>
                    </div>
                    <a href="https://moments-pwa.herokuapp.com/home" target="_blank" className="image-projects" rel="noreferrer"><img src='/Screen Shot 2022-05-18 at 11.36.23 AM.png' alt="node" className="project-img" /></a>
                </motion.div>
            </div>
        </div>
    );
}

export default Projects;