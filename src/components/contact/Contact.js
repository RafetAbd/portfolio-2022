import React from "react";  
import Navbar from "../navbar/Navbar";
import './contact.css';

const Contact = () => {
    return (
        <div className="contact-main-div">
            < Navbar />
            <h1>Get In Touch</h1>
            <p>Have a question, want to work together or just want to say hi?</p>
            <p>I'm just a click away.</p>
            <div className="contact-email-div">
                <div className="constacts-list-div">
                <a href="https://www.linkedin.com/in/rafet-abdalgalil-a9a8a817b/" target="_blank" rel="noopener noreferrer" className="contact-links">
                    <img src="/icons8-linkedin-420.png" alt="linkedin" className="contact-img" />
                </a>
                <a href="https://github.com/RafetAbd" target="_blank" rel="noopener noreferrer" className="contact-links">
                    <img src="/PngItem_1280311.png" alt="github" className="contact-img" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact;