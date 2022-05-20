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
                        <span className="hi-span">Hi</span>, I'm Rafet, a full-stack web developer and a former PBM operations consultant. I worked in healthcare, education, and business operations fields.<br /><br />
                        I have a passion for creating and building web applications. I'm a self-motivated person, and a fast learner and I'm always looking for new ways to improve myself.<br /><br />
                        I grew up in Iraq and came to the USA as a refugee. Currently I'm living in Phoenix, Arizona. when I'm not trying to learn something new or improving my skills, I'm usually watching movies/series, listening to music, or hiking.
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