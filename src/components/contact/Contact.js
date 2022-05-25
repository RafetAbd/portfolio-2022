import React from "react";
import './contact.css';
import { motion } from "framer-motion";

const Contact = () => {

    return (
        <motion.div className="contact-main-div" id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.2 }}
        >
            <h1>Get In Touch</h1>
            <p>Have a question, want to work together, or want to say hi?</p>
            <p>I'm just a click away.</p>
            <div className="constacts-list-div">
                <motion.a href="https://www.linkedin.com/in/rafet-abdalgalil-46606a1a1/" target="_blank" rel="noopener noreferrer" className="contact-links" whileHover={{ scale: 1.5 }}>
                    <img src="/PngItem_4039935.png" alt="linkedin" className="contact-img" />
                </motion.a>
                <motion.a href="https://github.com/RafetAbd" target="_blank" rel="noopener noreferrer" className="contact-links" whileHover={{ scale: 1.5 }}>
                    <img src="/PngItem_1419025.png" alt="github" className="contact-img" />
                </motion.a>
                <motion.a href="mailto:rafetalani@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-links" whileHover={{ scale: 1.5 }}>
                    <img src="/PngItem_118628.png" alt="gmail" className="contact-img" />
                </motion.a>

            </div>
            <hr />
            <p id="video-attribute">Home page video by
                <a href="https://www.pexels.com/video/a-person-busy-working-on-his-laptop-5495788/" target="_blank" rel="noopener noreferrer" className="pavel-link">
                    <span> Pavel Danilyuk </span>
                </a>
                from Pexels
            </p>
            <hr />
            <p id="video-attribute">github repo
                <a href="https://github.com/RafetAbd/portfolio-2022" target="_blank" rel="noopener noreferrer" className="pavel-link">
                    <span> portfolio-2022 </span>
                </a>
                by Rafet Abdalgalil
            </p>
        </motion.div>
    )
}

export default Contact;