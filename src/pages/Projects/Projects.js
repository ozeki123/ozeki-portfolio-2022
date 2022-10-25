import {
  motion, useViewportScroll, useTransform,
} from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import files from "../../files";
import "./Projects.scss";
import { useInView } from "react-intersection-observer";
import Project from "../../components/Project/Project";
import { Parallax } from 'react-scroll-parallax';
import LocomotiveScroll from "locomotive-scroll";
import { ScrollParallax } from "react-just-parallax";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";

const Projects = ({navState}) => {
  const [selected, setSelected] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);
  const navigate = useNavigate();
  const items = useRef(null);
  const [clones, setClones] = useState([])
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const [cloneHeight, setCloneHeight] = useState(0);
  const [gallery, setGallery] = useState();
  const scrollContainerRef = useRef(null);
  const [aboutFlag, setAboutFlag] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  // const scrollContainerRef = useRef(null);
  // const y1 = useTransform(scrollYProgress, [0, 1000], [0, -600]);
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  useEffect(() => {
    if(navState === "about"){
      // console.log(navState);
      setAboutFlag(true);
    }
    
  }, [navState])

  
  // const location = useLocation();
  // const prevPath = location.state?.from;
  // const [aboutFlag, setAboutFlag] = useState(false);
  // useEffect(() => {
  //   if(prevPath === "/about"){
  //     setAboutFlag(true);
  //   } else {
  //     setAboutFlag(false);
  //   }
  // }, [location])
  
  
  // console.log(prevPath);

  // useEffect(() => {
  //   const all = document.querySelector('.items-content');
  //   setGallery(all);
  //   const item = document.querySelectorAll('.project-item-wrapper');
  //   console.log(gallery);
  // }, [gallery])

  return (
    <div className="projects-container">
    
      <motion.div 
        className="transition-overlay" 
        style={{backgroundColor:"#141414"}} 
        initial={{y: "100vh"}} 
        exit={aboutFlag && {y:0, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}}></motion.div>
      <motion.div 
        className="items" 
        exit={aboutFlag && {y:-180, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}}>
        <div className="banner">
          <div className="banner-text">
            <div className="text-top">
              <motion.h2 initial={{y:116}} animate={{y:0}} transition={{duration: 0.9, ease:[0.65, 0.1, 0.25, 0.95], delay: 0}}>Andrew Ozeki</motion.h2>
            </div>
            <div className="text-center">
              <motion.h2 initial={{y:116}} animate={{y:0}} transition={{duration: 0.9, ease:[0.65, 0.1, 0.25, 0.95], delay: 0.1}}>Front End</motion.h2>
              <motion.h2 initial={{y:116}} animate={{y:0}} transition={{duration: 0.9, ease:[0.65, 0.1, 0.25, 0.95], delay: 0.1}}>&thinsp;Dev</motion.h2>
            </div>
            <div className="text-bottom">
              <motion.h2 initial={{y:116}} animate={{y:0}} transition={{duration: 0.9, ease:[0.65, 0.1, 0.25, 0.95], delay: 0.25}}>Folio '22</motion.h2>
            </div>
          </div>
          <motion.div className="discover" initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.6}}>
            <p>Discover</p>
            <Arrow/>
          </motion.div>
        </div>
        <div className="line"></div>
        <div className="projects-heading">
          <h2>My Work</h2>
          <p>Visit Github</p>
        </div>
        <motion.div className="items-content">
          <motion.div 
            className="project-item-wrapper"
            initial={{y:0, opacity: 1}} 
            animate={selected === 1 && {y:-100, opacity: 0}} 
            transition={{duration: 0.7, ease: "easeInOut"}} 
            onClick={() => setSelected(0)}
            >
              <Project file={files[0]} i={0}/>
          </motion.div>

          <ScrollParallax strength="-0.03" zIndex={999}>
            <motion.div 
              className="project-item-wrapper"
              initial={{y:0, opacity: 1}} 
              onClick={() => setSelected(1)}
              animate={selected === 0 ? {y:100, opacity: 0} : selected === 2 ? {y:-100, opacity: 0} : {}}
              transition={{duration: 0.7, ease: "easeInOut"}}
              >
                <Project file={files[1]} i={1}/>
            </motion.div>
          </ScrollParallax>
          
          <ScrollParallax strength="-0.05" zIndex={999}>
            <motion.div 
              className="project-item-wrapper"
              initial={{y:0, opacity: 1}} 
              animate={selected === 1 && {y:100, opacity: 0}} 
              transition={{duration: 0.7, ease: "easeInOut"}} 
              onClick={() => setSelected(2)}>
              <Project file={files[2]} i={2}/>
            </motion.div>
          </ScrollParallax>
          <ScrollParallax strength="-0.07" zIndex={999}>
            <motion.div 
              className="project-item-wrapper"
              initial={{y:0, opacity: 1}} 
              animate={selected === 1 && {y:100, opacity: 0}} 
              transition={{duration: 0.7, ease: "easeInOut"}} 
              onClick={() => setSelected(3)}>
              <Project file={files[3]} i={3}/>
            </motion.div>
          </ScrollParallax>
          <ScrollParallax strength="-0.07" zIndex={999}>
            <motion.div 
              className="project-item-wrapper"
              initial={{y:0, opacity: 1}} 
              animate={selected === 1 && {y:100, opacity: 0}} 
              transition={{duration: 0.7, ease: "easeInOut"}} 
              onClick={() => setSelected(4)}>
              <Project file={files[4]} i={4}/>
            </motion.div>
          </ScrollParallax>
          
          {
          //   files.map((file, i) => (
          //   <Project file={file} i={i}/>
          // ))
          }
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Projects;