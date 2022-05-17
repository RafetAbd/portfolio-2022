import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Technologies from "./components/technologies/Technologies";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";


const AllRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
    </Routes>
)

export default AllRoutes;