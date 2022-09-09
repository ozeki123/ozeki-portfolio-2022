import React, { useEffect, useState } from 'react';
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  MotionConfig
} from "framer-motion";
import { useLocation, useParams } from "react-router-dom";
import files from "../../files";
import "./ProjectPage.scss";

const ProjectPage = () => {
  const params = useParams();
  let id = params.id;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  
  
  return (
            <motion.div
            className="item"
            // initial={{ backgroundColor: "rgba( 255, 255, 255, 0 )" }}
            // animate={{ backgroundColor: "rgba( 255, 255, 255, 1 )" }}
            // exit={{ backgroundColor: "rgba( 255, 255, 255, 0 )", opacity: 0 }}
            // onClick={(e) => {
            //   e.target === e.currentTarget && setSelected(false);
            // }}
          >
            <div className="item-title">
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}}>Project title</motion.h1>
            </div>
            
            {/* <motion.div className="invert"> */}
            <motion.div
              key={`file-${id}`}
              className="container"
              layoutId={`file-${id}`}
              // layout="position"
              transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}
              style={{
                borderRadius: 0,
                height: "90vh",
                width: "90vw",
              }}
            >
              <motion.div className="item-image">
                <motion.img src={files[id].src} />
              </motion.div>
              
            </motion.div>
            {/* </motion.div> */}
          </motion.div>
          
            
  
  )
}

export default ProjectPage;