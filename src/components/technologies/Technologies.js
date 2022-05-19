import React from "react";
import Navbar from "../navbar/Navbar";
import './technologies.css';

const Technologies = () => {

    return (
        <div className="tech-main-div">
            <Navbar />
            <p className="tech-title">Tech Stack</p>
            <div className="tech-list">
                <div className="single-tech-div">
                    <p><span className="tech-span">R</span>eact</p>
                    <img src='/physics.png' alt="react" className="tech-img" />
                </div>
                <div className="single-tech-div">
                    <p><span className="tech-span">R</span>edux</p>
                    <img src='/icons8-redux-512.png' alt="redux" className="tech-img" />
                </div>
                <div className="single-tech-div">
                    <p><span className="tech-span">N</span>ode.js</p>
                    <img src='/icons8-nodejs-512.png' alt="node" className="tech-img" />
                </div>
                <div className="single-tech-div">
                    <p><span className="tech-span">E</span>xpress</p>
                    <img src='/expressjs (1).png' alt="Express" className="tech-img" />
                </div>
                <div className="single-tech-div">
                    <p><span className="tech-span">S</span>equelize</p>
                    <img src='/sequelize-icon.png' alt="Sequelize" className="tech-img" />
                </div>
                <div className="single-tech-div">
                    <p><span className="tech-span">S</span>ocket.IO</p>
                    <img src='/socketio-icon.png' alt="Socket" className="tech-img" />
                </div>
                <div className="single-tech-div">
                    <p><span className="tech-span">F</span>ramer Motion</p>
                    <img src='/framer.png' alt="Framer Motion" className="tech-img" />
                </div>
                <div className="single-tech-div">
                    <p><span className="tech-span">J</span>SON Web Token</p>
                    <img src='/icons8-json-web-token-520.png' alt="JWT" className="tech-img" />
                </div>
                <div className="single-tech-div">
                    <p><span className="tech-span">G</span>it</p>
                    <img src='/PngItem_1419097.png' alt="git" className="tech-img" />
                </div>
                <div className="single-tech-div">
                    <p><span className="tech-span">J</span>avascript</p>
                    <img src='/PngItem_1718042.png' alt="javascript" className="tech-img" />
                </div>
                <div className="single-tech-div">
                    <p><span className="tech-span">H</span>TML</p>
                    <img src='/PngItem_4640079.png' alt="html" className="tech-img" />
                </div>
                <div className="single-tech-div">
                    <p><span className="tech-span">C</span>ss</p>
                    <img src='/PngItem_1985012.png' alt="css" className="tech-img" />
                </div>
            </div>
        </div>
    );
}   

export default Technologies;
