import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  MotionConfig
} from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import files from "../../files";
import "./Projects.scss";

const Projects = () => {
  const [selected, setSelected] = useState(false);
  const item = selected !== false ? files[selected] : null;
  return (
    <div className="projects-container">
        <motion.div className="items" >
          <motion.div className="items-content">
            {files.map((file, i) => (
              <Link to={`/projects/${file.id}`} state={{id:i}}>
                <motion.div
                  key={i}
                  layoutId={`file-${i}`}
                  className="thumb"
                  onClick={() => {
                    // window.scrollTo({ top: 0, behavior: "smooth" })
                    setSelected(i);
                  }}
                  style={{
                    background: "white"
                    // top: 0
                  }}
                >
                  <motion.div className="project-image">
                    <div className="project-text">
                      <motion.div className="title">
                        <motion.h2 
                          initial="hidden"
                          whileInView="visible"
                          variants={{
                            hidden: {y: 170, skewY:12},
                            visible: {y:0, skewY:0}
                          }}
                          transition={{duration: 0.8, ease: "easeOut"}}>{file.name}</motion.h2>
                      </motion.div>
                      <div className="subtitle">
                        <motion.h2 
                          className="italic"
                          initial={{y: 125, skewY:12}} 
                          whileInView={{y:0, skewY:0}} 
                          transition={{ duration: 0.8, 
                                        ease: "easeOut", 
                                        delay: 0.4}} 
                          >{file.subtitle}</motion.h2>
                      </div>
                      
                      <p>{file.description}</p>
                    </div>
                    <motion.img src={files[i].src} />
                  </motion.div>
                  
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.div>
  </div>
  )
}

export default Projects;