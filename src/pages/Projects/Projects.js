import {
  motion, useAnimation
} from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import files from "../../files";
import "./Projects.scss";
import { useInView } from "react-intersection-observer";
import Project from "../../components/Project/Project";

const Projects = () => {
  const [selected, setSelected] = useState(false);
  
  useEffect(() => {
    console.log(selected);
  }, [selected])

  
  return (
    <div className="projects-container">
        <motion.div className="items" >
          <motion.div className="items-content">
            <motion.div 
              initial={{y:0, opacity: 1}} 
              animate={selected === 1 && {y:-100, opacity: 0}} 
              transition={{duration: 0.7, ease: "easeInOut"}} 
              onClick={() => setSelected(0)}>
                <Project file={files[0]} i={0}/>
            </motion.div>

            <motion.div 
              initial={{y:0, opacity: 1}} 
              onClick={() => setSelected(1)}
              animate={selected === 0 ? {y:100, opacity: 0} : selected === 2 ? {y:-100, opacity: 0} : {}}
              transition={{duration: 0.7, ease: "easeInOut"}}
              >
                <Project file={files[1]} i={1}/>
            </motion.div>
            
            <motion.div 
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