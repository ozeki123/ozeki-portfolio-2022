import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import files from "./files";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Projects from "./pages/Projects/Projects";
import {
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion";

import "./styles.scss";

function App() {
  const location = useLocation();
  return (
    <main>
      <Navbar />
      <AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Projects/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/:id" element={<ProjectPage/>}/>
          </Routes>
        </AnimatePresence>
        
      </AnimateSharedLayout>
      
    </main>
  );
};

export default App;