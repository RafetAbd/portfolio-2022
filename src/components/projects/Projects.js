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
                        <p className="single-project-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum.</p>
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
                        <p className="single-project-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum.</p>
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
                        <p className="single-project-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum.</p>
                    </div>
                    <a href="https://moments-pwa.herokuapp.com/home" target="_blank" className="image-projects" rel="noreferrer"><img src='/Screen Shot 2022-05-18 at 11.36.23 AM.png' alt="node" className="project-img" /></a>
                </motion.div>
            </div>
        </div>
    );
}

export default Projects;