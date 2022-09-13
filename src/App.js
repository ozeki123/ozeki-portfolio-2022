import React, { useState , useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import files from "./files";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import Projects from "./pages/Projects/Projects";
// import 'locomotive-scroll/dist/locomotive-scroll.css';
import LocomotiveScroll from "locomotive-scroll";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import {
  AnimatePresence,
  AnimateSharedLayout,
} from "framer-motion";

import "./styles.scss";
import useScrollToTop from "./hooks/useScrollToTop";

// const Wrapper = ({children}) => {
//   const location = useLocation();
//   useLayoutEffect(() => {
//     document.documentElement.scrollTo(0, 0);
//   }, [location.pathname]);
//   return children
// }

function App() {
  const location = useLocation();
  const { pathname } = useLocation();
  const containerRef = useRef();
  // const scroll = () => {
  //   const scroll = new LocomotiveScroll({
  //     el: containerRef.current,
  //     smooth: true
  //   }); 
  //   scroll.init()
  // }
  
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: containerRef.current,
  //     smooth: true
  //   });
  //   // scroll();
  //   scroll.update()
  //   return () => {
  //     if (scroll) scroll.destroy();
  //   }
  //   // scroll();

  // }, [location.pathname])
  
  return (
    <div className="app-container">
    {
      // <LocomotiveScrollProvider
      //   options={
      //     {
      //       smooth: true,
      //       lerp: 0.06,
      //       multiplier: 1.2,
      //     }
      //   }
      //   watch={
      //     [
      //       // pathname
      //     ]
      //   }
      //   // location={pathname}
      //   containerRef={containerRef.current}
      //   // onLocationChange={scroll => scroll.init()} // If you want to reset the scroll position to 0 for example
      //   onUpdate={() => console.log('Updated, but not on location change!')} // Will trigger on 
      // >
    }
        <main ref={containerRef}>
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
      
    </div>
      
  );
};

export default App;