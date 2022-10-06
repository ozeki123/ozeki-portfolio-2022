import {
  motion, useViewportScroll
} from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import files from "../../files";
import "./Projects.scss";
import { useInView } from "react-intersection-observer";
import Project from "../../components/Project/Project";
import { Parallax } from 'react-scroll-parallax';
import LocomotiveScroll from "locomotive-scroll";

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
  // const scrollContainerRef = useRef(null);

  
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
    <div className="projects-container" data-scroll-container>
      <motion.div className="transition-overlay" style={{backgroundColor:"#141414"}} initial={{y: "100vh"}} exit={aboutFlag && {y:0, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}}></motion.div>
      <motion.div className="items" exit={aboutFlag && {y:-180, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}}>
        <motion.div className="items-content" >
          <motion.div 
            className="project-item-wrapper"
            initial={{y:0, opacity: 1}} 
            animate={selected === 1 && {y:-100, opacity: 0}} 
            transition={{duration: 0.7, ease: "easeInOut"}} 
            onClick={() => setSelected(0)}
            >
              <Project file={files[0]} i={0}/>
          </motion.div>

          <motion.div 
            className="project-item-wrapper"
            initial={{y:0, opacity: 1}} 
            onClick={() => setSelected(1)}
            animate={selected === 0 ? {y:100, opacity: 0} : selected === 2 ? {y:-100, opacity: 0} : {}}
            transition={{duration: 0.7, ease: "easeInOut"}}
            >
              <Project file={files[1]} i={1}/>
          </motion.div>
          
          <motion.div 
            className="project-item-wrapper"
            initial={{y:0, opacity: 1}} 
            animate={selected === 1 && {y:100, opacity: 0}} 
            transition={{duration: 0.7, ease: "easeInOut"}} 
            onClick={() => setSelected(2)}>
            <Project file={files[2]} i={2}/>
          </motion.div>
          
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