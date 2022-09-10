import React, { useEffect, useState } from 'react';
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  MotionConfig
} from "framer-motion";
import { useParams } from "react-router-dom";
import files from "../../files";
import "./ProjectPage.scss";

const ProjectPage = () => {
  const params = useParams();
  let id = params.id;

  useEffect(() => {
    // window.scrollTo(0, 0);
    // setI(id);
    // console.log(id);
    // console.log(selected);
  },[location]);
  
  return (
          
            <div
              className="item"
              // onClick={(e) => {
              //   e.target === e.currentTarget && setSelected(false);
              // }}
            >
              <section className="item-heading">
                <div className="item-title">
                  <motion.h2 
                    initial={{opacity:0}} 
                    animate={{opacity:1}} 
                    transition={{delay:1, duration: 1}} 
                    exit={{opacity:0, transition:{delay:0}}}
                  >
                    {files[id].title}
                  </motion.h2>
                </div>
                <div className="item-description">
                  <p>{files[id].description}</p>
                </div>
              </section>
              
              
              <section className="item-contents">
                <motion.div
                  key={`file-${id}`}
                  className="container"
                  layoutId={`file-${id}`}
                  // layout="position"
                  transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}
                  style={{
                    borderRadius: 0,
                    height: "90vh",
                    width: "85vw",
                    top: "40vh"
                  }}
                >
                  <motion.div className="item-image">
                    <motion.img src={files[id].src} />
                  </motion.div>
                  
                </motion.div>
              </section>
            </div>
  
  )
}

export default ProjectPage;