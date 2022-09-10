import React, { useEffect, useState } from 'react';
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  MotionConfig
} from "framer-motion";
import { useParams, Link } from "react-router-dom";
import files from "../../files";
import "./ProjectPage.scss";

const ProjectPage = () => {
  const params = useParams();
  let id = params.id;

  const titleVariant = {
    hidden: {},
    visible: (i = 1) => ({
      y: 0, 
      transition: { staggerChildren: 0.05, delayChildren: 0.3 * i},
    }),
    exit: {
      transition: { staggerChildren: 0.05, delay: 0, duration: 0.7, ease: "easeInOut"}
    }
  }

  const child = {
    visible: {
      x: 0,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeInOut"
      },
    },
    hidden: {
      y: -160,
      transition: {
        duration: 0.9,
        ease: "easeInOut"
      },
    },
    exit: {
      y: -160,
      transition: {
        duration: 0.9,
        ease: "easeInOut"
      },
    }
  };
  
  return (
    <motion.div
      className="item"
      initial={{ backgroundColor: "rgba( 236, 236, 236, 0 )" }}
      animate={{ backgroundColor: "rgba( 236, 236, 236, 1 )" }}
      exit={{ backgroundColor: "rgba( 236, 236, 236, 0 )" }}
      // onClick={(e) => {
      //   e.target === e.currentTarget && setSelected(false);
      // }}
    >
      <section className="item-top">
        <div className="item-heading">
          <div className="item-nav-prev">
            <Link to="/projects">
              <motion.div initial={{y:-50}} animate={{y: 0}} transition={{duration: 1, ease: "easeOut", delay:1}} className="prev-button">Back</motion.div>
            </Link>
          </div>
          <div className="item-title">
            <motion.div 
              className="title"
              initial="hidden"
              animate="visible"
              transition={{duration: 0.7, ease: "easeOut", delay:0.3}} 
              exit="exit"
              // exit={{opacity:0, transition:{}}}
              variants={titleVariant}
            >
              {files[id].title.split("").map((letter, i) => (
                <motion.h2 key={i} variants={child}>{letter}</motion.h2>
              ))}
            </motion.div>
          </div>
          <div className="item-description">
            <motion.p initial={{y:31}} animate={{y:0}} exit={{y:31, transition:{delay: 0.5, duration: 0.5, ease: "easeInOut"}}} transition={{delay: 0.8, duration: 0.8, ease: "easeOut"}}>{files[id].description}</motion.p>
          </div>
          <div className="item-link">
            <motion.h3 href="#" initial={{y: 50}} animate={{y:0}} exit={{y:50, transition:{delay: 0.2, duration: 0.6, ease: "easeInOut"}}} transition={{delay: 0.9, duration: 0.8, ease: "easeOut"}}>{files[id].website}</motion.h3>
          </div>
        </div>
        <div className="item-nav-next">
        
        </div>
      </section>
      
      
        <motion.div
          className="container"
          layoutId={`file-${id}`}
          layout
          transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}
          style={{
            borderRadius: 0,
            height: "95vh",
            width: "90vw",
          }}
        >
          <motion.div className="item-image">
            <motion.img src={files[id].src} />
          </motion.div>
          
        </motion.div>
        
    </motion.div>
  
  )
}

export default ProjectPage;