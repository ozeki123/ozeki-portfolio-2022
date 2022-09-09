import {
  motion, useAnimation, AnimatePresence
} from "framer-motion/dist/framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import files from "../../files";
import "./Projects.scss";
import { useInView } from "react-intersection-observer";
import Project from "../../components/Project/Project";

const Projects = () => {
  const [selected, setSelected] = useState(false);
  
  const item = selected !== false ? files[selected] : null;
  const control = useAnimation();
  

  

    
    
  

  return (
    <div className="projects-container">
        <motion.div className="items" >
          <motion.div className="items-content">
            <AnimatePresence exitBeforeEnter>
              {files.map((file, i) => (
                <Project file={file} i={i} key={i}/>
              ))}
            </AnimatePresence>
              
            
          </motion.div>
        </motion.div>
    </div>
  )
}

export default Projects;