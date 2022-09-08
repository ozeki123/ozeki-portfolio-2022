import React, { useEffect } from 'react';
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  MotionConfig
} from "framer-motion";
import { useLocation } from "react-router-dom";
import files from "../../files";
import "./ProjectPage.scss";

const ProjectPage = () => {
  const location = useLocation();
  const id = location.state.id;

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(id);
  },[location]);
  
  return (
    <AnimatePresence>
          {
            <motion.div
              className="item"
              initial={{ backgroundColor: "rgba( 255, 255, 255, 0 )" }}
              animate={{ backgroundColor: "rgba( 255, 255, 255, 1 )" }}
              exit={{ backgroundColor: "rgba( 255, 255, 255, 0 )" }}
              // onClick={(e) => {
              //   e.target === e.currentTarget && setSelected(false);
              // }}
            >
              <div className="item-title">
                <motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1, duration: 1}} exit={{opacity:0, transition:{delay:0}}}>Project title</motion.h1>
              </div>
              
              {/* <motion.div className="invert"> */}
              <motion.div
                key={`file-${id}`}
                className="container"
                layoutId={`file-${id}`}
                transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}
                style={{
                  borderRadius: 0,
                  height: files[id].height,
                  width: files[id].width,
                }}
              >
                <motion.div className="item-image">
                  <motion.img src={files[id].src} />
                </motion.div>
                
              </motion.div>
              {/* </motion.div> */}
            </motion.div>
          }
        </AnimatePresence>
  )
}

export default ProjectPage;