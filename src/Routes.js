import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Technologies from "./components/technologies/Technologies";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
// import Contact from "./components/contact/Contact";


const AllRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
)

export default AllRoutes;