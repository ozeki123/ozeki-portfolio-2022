import {
  motion, useAnimation, AnimatePresence
} from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import files from "../../files";
import "./Projects.scss";
import { useInView } from "react-intersection-observer";
import Project from "../../components/Project/Project";

const Projects = () => {
  const [selected, setSelected] = useState(false);
  
  const item = selected !== false ? files[selected] : null;

  return (
    <motion.div className="projects-container">
        <motion.div className="items" >
          <motion.div className="items-content">
              {files.map((file, i) => (
                <Project file={file} i={i} key={i}/>
              ))}
          </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Projects;