import React from "react";
import Navbar from "../navbar/Navbar";
import './aboutMe.css';
import { motion } from "framer-motion";

const AboutMe = () => {


    return (
        <div className="aboutme-main-div">
            <Navbar />
            <div className="texts-div">
                <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                >Who I am</motion.h1>
                <div className="who-i-am-div">
                    <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    >
                        <span className="hi-span">Hi</span>, I'm Rafet, a full-stack web developer and a former PBM operations consultant. I've worked in many different indestries from healthcare to education to business operations.<br /><br />
                        I have a passion for creating, designing and building web applications. My friends see me as a self-motivated, fast learner person who's always looking for new ways to improve himself.<br /><br />
                        I grew up in Iraq, came to the USA as a refugee and Currently living in Phoenix, Arizona. When I'm not trying to learn something new or improving my skills, I'm usually watching movies/series, listening to music, or hiking.
                    </motion.p>
                    <motion.img src='/IMG_5966.jpeg' alt="rafet" className="rafet-img"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;