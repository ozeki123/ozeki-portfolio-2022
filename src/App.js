import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import files from "./files";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Projects from "./pages/Projects/Projects";
import {
  motion,
  AnimateSharedLayout,AnimatePresence
} from "framer-motion";

import "./styles.scss";
import About from "./pages/About/About";


function App() {
  // const location = useLocation();
  return (
    <main>
      <Navbar />
      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
          <Routes>
            <Route path="/" element={<Projects/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/:id" element={<ProjectPage/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
        </AnimatePresence>
      
    </AnimateSharedLayout>
      
    </main>
  );
};

export default App;