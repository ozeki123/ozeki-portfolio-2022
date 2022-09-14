import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion, useAnimation, useViewportScroll, useTransform
} from "framer-motion";
import { ScrollParallax } from 'react-just-parallax';

const Project = ({file, i}) => {
  const [titleView, setTitleView] = useState(false);
  const [subTitleView, setSubTitleView] = useState(false);
  const titleRef = useRef();
  const subTitleRef = useRef();

  // const transform = useTransform(scrollYProgress, [0, 1], [0, 100 * 3]);

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
      y: 145, 
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
      y: 145, 
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
        y: 30, 
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
        y: 30 , 
      },
      visible: {
        y: 0,
        transition:{ duration: 0.6, 
          ease: "easeOut", 
          delay: 1}
      }
    }
  return (
    <div className="project-item-container" >
      <Link to={`/projects/${i}`} state={{id:i}}> 
        <motion.div
          layoutId={ `file-${i}`}
          className="thumb"
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
        
          <div  className="project-image">
            <div  className="project-text">
              <div className="title">
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
              </div>
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
                <div className="description">
                  <motion.p variants={descVariant1} initial="hidden" animate={subTitleView && "visible"} exit="hidden" transition={{ 
                    duration: 0.3, 
                    ease: "easeIn", 
                    delay: 0.1}}>{file.description1}</motion.p>
                </div>
                <div className="description">
                  <motion.p variants={descVariant2} initial="hidden" animate={subTitleView && "visible"} exit="hidden" transition={{ 
                    duration: 0.3, 
                    ease: "easeIn", 
                    delay: 0}}>{file.description2}</motion.p>
                </div>
              </div>
            </div>
            <div className="image-wrapper">
                <ScrollParallax strength="0.07">
                  <img src={file.src}/>
                </ScrollParallax>
            </div>
            
            
          </div>
          
        </motion.div>
      </Link>
    </div>
    
  )
}

export default Project;