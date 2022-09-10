import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion, useAnimation
} from "framer-motion";

const Project = ({file, i}) => {
  const [titleView, setTitleView] = useState(false);
  const [subTitleView, setSubTitleView] = useState(false);
  const titleRef = useRef();
  const subTitleRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setTitleView(entry.isIntersecting);
      });
    });
    observer.observe(titleRef.current);
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setSubTitleView(entry.isIntersecting);
      });
    });
    observer.observe(subTitleRef.current);
  }, [])

  const titleVariant = {
    hidden: {
      y: 135, 
      skewY:12
    },
    visible: {
      y: 0,
      skewY: 0,
      transition:{ duration: 0.8, 
        ease: "easeOut", 
        delay: 0.4}
      }
    }
    const transition = { duration: 0.8, 
      ease: "easeOut", 
      delay: 0.6}
    
  const subTitleVariant = {
    hidden: {
      y: 135, 
      skewY:12,
      
    },
    visible: {
      y: 0,
      skewY: 0,
      transition:{ duration: 0.8, 
        ease: "easeOut", 
        delay: 0.6}
      }
    }
    const descVariant1 = {
      hidden: {
        y: 25, 
      },
      visible: {
        y: 0,
        transition:{ duration: 0.6, 
          ease: "easeOut", 
          delay: 0.9}
      }
    }
    const descVariant2 = {
      hidden: {
        y: 25 , 
      },
      visible: {
        y: 0,
        transition:{ duration: 0.6, 
          ease: "easeOut", 
          delay: 1}
      }
    }
  return (
    <Link to={`/projects/${i}`} state={{id:i}}>
      <motion.div
        key={i}
        layoutId={ `file-${i}`}
        className="thumb"
        layout
        transition={{ 
          duration: 0.8, 
          ease: "easeInOut", 
          delay: 0
        }}
        style={{
          width: "70vw",
          height: "75vh",
        }}
      >
      
        <motion.div className="project-image">
          <motion.div className="project-text">
            <motion.div className="title" >
              <motion.h2 
              ref={titleRef}
              initial="hidden"
              animate={titleView && "visible"}
              variants={titleVariant}
              exit="hidden"
              transition={{ 
                duration: 0.8, 
                ease: "easeInOut", 
                delay: 0.5}}
              >
                {file.name}
              </motion.h2>
            </motion.div>
            <div className="subtitle">
              <motion.h2 
                ref={subTitleRef}
                className="italic"
                initial="hidden"
                animate={titleView && "visible"}
                variants={subTitleVariant}
                exit="hidden"
                transition={{ 
                  duration: 0.8, 
                  ease: "easeInOut", 
                  delay: 0.3}}
                >
                  {file.subtitle}
                </motion.h2>
            </div>
            
            <div className="description-text">
              <motion.div className="description">
                <motion.p variants={descVariant1} initial="hidden" animate={subTitleView && "visible"} exit="hidden" transition={{ 
                  duration: 0.3, 
                  ease: "easeIn", 
                  delay: 0.1}}>{file.description1}</motion.p>
              </motion.div>
              <motion.div className="description">
                <motion.p variants={descVariant2} initial="hidden" animate={subTitleView && "visible"} exit="hidden" transition={{ 
                  duration: 0.3, 
                  ease: "easeIn", 
                  delay: 0}}>{file.description2}</motion.p>
              </motion.div>
            </div>
          </motion.div>
          <motion.img src={file.src} />
        </motion.div>
        
      </motion.div>
    </Link>
  )
}

export default Project;