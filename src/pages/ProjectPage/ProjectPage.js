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
import { ScrollParallax, ScrollParallaxHandle} from 'react-just-parallax';
import Gallery from '../../components/Gallery/Gallery';

const ProjectPage = () => {
  const params = useParams();
  let id = params.id;
  const layoutRef = useRef(null);
  const ref = useRef(null);
  const scrollParallaxRef = useRef(null);
  const scrollParallaxRef1 = useRef(null);
  const descRef = useRef(null);
  const showcaseRef = useRef(null);

  useEffect(() => {
    // window.dispatchEvent(new Event('resize'))
    setTimeout(() => {
      scrollParallaxRef.current?.updateValues();
      
      setTimeout(() => {
        scrollParallaxRef1.current?.updateValues();
      }, 800);
    }, 300);
    setTimeout(() => {
      layoutRef.current.style.position = "absolute";
      layoutRef.current.style.top = "67.8vh";
      descRef.current.style.display="flex";
      showcaseRef.current.style.display="block";
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
  const categoryTitleVariant = {
    hidden: {y:30},
    visible: {y:0},
    exit: {y:30}
  }
  const categoryItemVariant = {
    hidden: {y:60},
    visible: {y:0},
    exit: {y:60}
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
    <div className="item-container" ref={ref}>
      <motion.div
        className="item"
        initial={{ backgroundColor: "rgba( 255, 255, 255, 0 )" }}
        animate={{ backgroundColor: "rgba( 255, 255, 255, 1 )" }}
        exit={{ backgroundColor: "rgba( 255, 255, 255, 0 )" }}
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
                <div className="category-title">
                  <motion.p 
                    className="category-title-inner" 
                    initial="hidden"
                    animate="visible"
                    variants={categoryTitleVariant}
                    transition={{duration: 0.7, ease: "easeOut", delay:1}} 
                    >
                      Category
                  </motion.p>
                </div>
                <motion.div 
                  className="line"
                  initial={{width: 0}}
                  animate={{width: "100%"}}
                  transition={{duration: 1.5, ease: "easeOut", delay:1}} 
                ></motion.div>
                <div className="category-item">
                  <motion.p 
                    className="category-item-inner spacing"
                    initial="hidden"
                    animate="visible"
                    variants={categoryItemVariant}
                    transition={{duration: 0.8, ease: "easeOut", delay:1}} 
                  >
                    {files[id].category}
                  </motion.p>
                </div>
                
              </div>
              
              <div className="category">
                <div className="category-title">
                  <motion.p 
                    className="category-title-inner"
                    initial="hidden"
                    animate="visible"
                    variants={categoryTitleVariant}
                    transition={{duration: 0.7, ease: "easeOut", delay:1}} 
                  >
                    Role
                  </motion.p>
                </div>
                <motion.div 
                  className="line"
                  initial={{width: 0}}
                  animate={{width: "100%"}}
                  transition={{duration: 1.5, ease: "easeOut", delay:1}} 
                ></motion.div>
                  <div className="category-role">
                    {files[id].role.map(role => (
                      <div className="category-item">
                        <motion.p 
                          className="category-item-inner"
                          initial="hidden"
                          animate="visible"
                          variants={categoryTitleVariant}
                          transition={{duration: 0.7, ease: "easeOut", delay:1}} 
                        >
                          {role}
                        </motion.p>
                      </div>
                    ))}
                  </div>
                  
              </div>
              <div className="category">
                <div className="category-title">
                  <motion.p 
                    className="category-title-inner"
                    initial="hidden"
                    animate="visible"
                    variants={categoryTitleVariant}
                    transition={{duration: 0.7, ease: "easeOut", delay:1}} 
                  >
                    Location & Year
                  </motion.p>
                </div>
                <motion.div 
                  className="line"
                  initial={{width: 0}}
                  animate={{width: "100%"}}
                  transition={{duration: 1.5, ease: "easeOut", delay:1}} 
                ></motion.div>
                <div className="category-item">
                  <motion.p 
                    className="category-item-inner spacing"
                    initial="hidden"
                    animate="visible"
                    variants={categoryTitleVariant}
                    transition={{duration: 0.7, ease: "easeOut", delay:1}} 
                  >
                    {files[id].date}
                  </motion.p>
                </div>
                
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
          <div className="item-image-wrapper">
            <ScrollParallax strength="0.06" lerpEase="0.07" ref={scrollParallaxRef}>
              <div className="item-image">
                  <motion.img src={files[id].src}/>
                </div>
            </ScrollParallax>
          </div>
        </motion.div>
        <section className="item-description" ref={descRef}>
          <div className="item-details">
            <h2>Details</h2>
            <div className="item-roles">
              <p>UI/UX Design</p>
              <p>Front End </p>
              <p>Back End </p>
            </div>
            <Link to="/">View Project</Link>
          </div>
          <div className="item-background">
            <h5>Background</h5>
            <p>{files[id].full_description}</p>
          </div>
        </section>
      </motion.div>
      
        <div className="item-screen-section" ref={showcaseRef}>
          <div className="item-image">
            <Gallery images={files[id].images}/>
            <ScrollParallax strength="0.1" lerpEase="0.07" ref={scrollParallaxRef1}>
              <motion.img src={files[id].bg1} className="bg-image"/>
            </ScrollParallax>
            
          </div>
        </div>
      
    </div>
    
  
  )
}

export default ProjectPage;