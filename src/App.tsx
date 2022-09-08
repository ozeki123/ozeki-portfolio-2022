import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import files from "./files";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Projects from "./pages/Projects/Projects";
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  MotionConfig
} from "framer-motion";

import "./styles.scss";

function App() {
  return (
    <main>
      <Navbar />
      <AnimateSharedLayout type="switch">
        <Routes>
          <Route path="/" element={<Projects/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/:id" element={<ProjectPage/>}/>
        </Routes>
      </AnimateSharedLayout>
      
    </main>
  );
};

export default App;