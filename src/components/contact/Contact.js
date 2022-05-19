import React from "react";
import './contact.css';

const Contact = () => {
   
    return (
        <div className="contact-main-div" id="contact">
            <h1>Get In Touch</h1>
            <p>Have a question, want to work together or just want to say hi?</p>
            <p>I'm just a click away.</p>
                <div className="constacts-list-div">
                    <a href="https://www.linkedin.com/in/rafet-abdalgalil-46606a1a1/" target="_blank" rel="noopener noreferrer" className="contact-links">
                        <img src="/PngItem_4039935.png" alt="linkedin" className="contact-img" />
                    </a>
                    <a href="https://github.com/RafetAbd" target="_blank" rel="noopener noreferrer" className="contact-links">
                        <img src="/PngItem_1419025.png" alt="github" className="contact-img" />
                    </a>
                    <a href="mailto:rafetalani@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-links">
                        <img src="/PngItem_118628.png" alt="gmail" className="contact-img" />
                    </a>
                    <p className="video-attribute"> Home page video by
                        <a href="https://www.pexels.com/video/a-person-busy-working-on-his-laptop-5495788/" target="_blank" rel="noopener noreferrer" className="pavel-link">
                            <span> Pavel Danilyuk </span>
                        </a>
                        from Pexels
                    </p>
                </div>
            </div>
    )
}

export default Contact;