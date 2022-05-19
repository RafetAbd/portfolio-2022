import React from "react";
import Navbar from "../navbar/Navbar";
import './aboutMe.css';

const AboutMe = () => {
    return (
        <div className="aboutme-main-div">
            <Navbar />
            <div className="texts-div">
                <h1>Who I am</h1>
                <div className="who-i-am-div">
                    <p>
                        <span className="hi-span">Hi</span>, I'm Rafet Abdalgalil, a full-stack web developer and a former PBM operations consultant. I worked in healthcare, education, and business operations fields.<br/><br/>
                        I have a passion for creating and building web applications. I'm a self-motivated person, and a fast learner and I'm always looking for new ways to improve myself.<br/><br/>
                        I came to the USA in 2015 as a refugee and currently living in Arizona. when I'm not trying to learn something new or improving my skills, I'm usually watching movies/series, listening to music, or hiking.
                    </p>
                    <img src='/IMG_5966.jpeg' alt="rafet" className="rafet-img" />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;