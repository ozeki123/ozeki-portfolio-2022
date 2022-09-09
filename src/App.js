import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import files from "./files";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Projects from "./pages/Projects/Projects";
import {
  motion,
  AnimateSharedLayout,
} from "framer-motion/dist/framer-motion";

import "./styles.scss";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <main>
      <Navbar />
      <AnimateSharedLayout type="switch">
          <Routes key={location.key}>
              <Route path="/" element={<Projects/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/projects/:id" element={<ProjectPage/>}/>
            </Routes>
          
        
      </AnimateSharedLayout>
      
    </main>
  );
};

export default App;