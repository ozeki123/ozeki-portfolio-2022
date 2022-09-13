import React, { useEffect, useState, useRef } from 'react';
import {
  motion,
  useViewportScroll,
  useElementScroll,
  useTransform
} from "framer-motion";
import { useParams, Link } from "react-router-dom";
import files from "../../files";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import "./ProjectPage.scss";
import ScrollContainer from '../../hooks/ScrollContainer';

const ProjectPage = () => {
  const params = useParams();
  let id = params.id;
  const layoutRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      layoutRef.current.style.position = "absolute";
    }, 1000);
  }, [])
  

  // const { scrollY, scrollYProgress } = useViewportScroll();

  // let top = 0;

  // const width = useTransform(scrollYProgress, [0, 1], ["800px", "2000px"]);
  // const width = useTransform(
  //   scrollYProgress,
  //   [0, 0.33, 0.66, 1],
  //   [0.5, 0.75, 0.5, 1],
  // )

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
    <div>
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
            {
            //   <div className="item-link">
            //   <motion.h3 href="#" initial={{y: 50}} animate={{y:0}} exit={{y:50, transition:{delay: 0.2, duration: 0.6, ease: "easeInOut"}}} transition={{delay: 0.9, duration: 0.8, ease: "easeOut"}}>{files[id].website}</motion.h3>
            // </div>
            // <div className="item-description">
            //   <motion.p initial={{y:31}} animate={{y:0}} exit={{y:31, transition:{delay: 0.5, duration: 0.5, ease: "easeInOut"}}} transition={{delay: 0.8, duration: 0.8, ease: "easeOut"}}>{files[id].description}</motion.p>
            // </div>
            }
            
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
            <section className="heading-categories">
              <div className="category">
                <p className="category-title">Category</p>
                <p className="category-item">{files[id].category}</p>
              </div>
              
              <div className="category">
                  <p className="category-title">Role</p>
                  {files[id].role.map(role => (
                    <p className="category-item">{role}</p>
                  ))}
              </div>
              <div className="category">
                <p className="category-title">Location & Year</p>
                <p className="category-item">{files[id].date}</p>
              </div>
            </section>
            
            
          </div>
        </section>
        
        
          <motion.div
            ref={layoutRef}
            id="container"
            className="container"
            layoutId={`file-${id}`}
            transition={{ delay: 0, duration: 0.6, ease: "easeInOut" }}
            style={{
              height: "90vh",
              width: "83vw",
              // position: "absolute"
            }}
          >
            <div className="item-image" >
              <img src={files[id].src}/>
            </div>
            
            
          </motion.div>
          
      </motion.div>
    </div>
    
  
  )
}

export default ProjectPage;