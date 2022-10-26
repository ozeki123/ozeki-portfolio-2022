import React, { useState , useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import files from "./files";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Projects from "./pages/Projects/Projects";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import "./styles.scss";
import Lenis from '@studio-freight/lenis'
import About from "./pages/About/About";
import { ContextProvider } from "./context";

function App() {
  const location = useLocation();
  const { pathname } = useLocation();
  const [navState, setNavState] = useState(false);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(3.7, -4.5 * t)), 
    direction: 'vertical',
    smooth: true,
  })

  useEffect(() => {
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    
  }, [pathname])

  return (
    <div className="app-container">
        <main>
            <Navbar navState={navState} setNavState={setNavState} key={location.pathname}/>
              <ContextProvider>
                <AnimateSharedLayout>
                  <AnimatePresence exitBeforeEnter>
                      <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Projects/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/projects" element={<Projects navState={navState}/>}/>
                        <Route path="/projects/:id" element={<ProjectPage navState={navState}/>}/>
                      </Routes>
                  </AnimatePresence>
                </AnimateSharedLayout>
              </ContextProvider>
          </main>
    </div>
  );
};

export default App;