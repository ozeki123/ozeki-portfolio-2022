import React, { useState , useEffect, useLayoutEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { createBrowserHistory } from 'history'
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
import ScrollContainer from "./hooks/ScrollContainer";

import Lenis from '@studio-freight/lenis'
import About from "./pages/About/About";
import { ParallaxProvider } from 'react-scroll-parallax';
import Test from "./pages/Test/Test";

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
  const scrollRef = useRef();
  const [navState, setNavState] = useState(false);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(3.7, -4.5 * t)), // https://easings.net
    direction: 'vertical',
    smooth: true,
  })

  useEffect(() => {
    // console.log(navState);
  }, [navState])

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector(".app-container"),
  //   });
  // }, []);

  useEffect(() => {
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    
  }, [pathname])

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: false,
  //     lerp: 0.06,
  //     multiplier: 1.2,
  //   });
  // });
  

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

  // const scrollRef = useRef();
  const history = createBrowserHistory();

  // const initScroll = () => {
  //   const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
  //     new LocomotiveScroll.default({
  //       el: scrollRef.current,
  //       smooth: true
  //     });
  //     history.listen(({ location, action }) => {
  //       setTimeout(() => {
  //         scroll.update();
  //       }, 100);
  //     });
  //   });
  // }

  // useEffect(() => {
  //   if (typeof window === "undefined") {
  //     return;
  //   }
  //   setTimeout(() => {
  //     initScroll()
  //   }, 100);
    

  //   return () => scroll.destroy();
  // }, []);
  
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
      <ParallaxProvider>
        <main>
            <Navbar navState={navState} setNavState={setNavState}/>
                <AnimateSharedLayout>
                  <AnimatePresence exitBeforeEnter>
                      <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Projects/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/test" element={<Test/>}/>
                        <Route path="/projects" element={<Projects navState={navState}/>}/>
                        <Route path="/projects/:id" element={<ProjectPage navState={navState}/>}/>
                      </Routes>
                    
                  </AnimatePresence>
                  
                </AnimateSharedLayout>
              
              
          </main>
      </ParallaxProvider>
        
      
    </div>
    
      
  );
};

export default App;