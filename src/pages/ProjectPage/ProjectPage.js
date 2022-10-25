import React, { useEffect, useState, useRef, useContext } from 'react';
import {
  motion,
  useViewportScroll,
  useElementScroll,
  useTransform
} from "framer-motion";
import { useParams, Link, useLocation } from "react-router-dom";
import files from "../../files";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import "./ProjectPage.scss";
import ScrollContainer from '../../hooks/ScrollContainer';
import { ScrollParallax, ScrollParallaxHandle} from 'react-just-parallax';
import Gallery from '../../components/Gallery/Gallery';
import simpleParallax from 'simple-parallax-js';
import { AppContext } from '../../context';
const ProjectPage = ({navState}) => {
  const params = useParams();
  let id = params.id;
  const layoutRef = useRef(null);
  const ref = useRef(null);
  const featuresRef = useRef(null);
  const footerRef = useRef(null);
  const [aboutFlag, setAboutFlag] = useState(false);
  const location = useLocation();
  const { offsetHeight, offsetSub, offsetDesc1, offsetDesc2 } = useContext(AppContext);
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -60]);
  useEffect(() => {
    console.log(files[id].id);
  }, [location])

  useEffect(() => {
    console.log("offset", offsetHeight);
  }, [])
  

  useEffect(() => {
    
    setTimeout(function () {
      window.scrollTo(0, 0);
  },500);
  }, [])

  useEffect(() => {
    if(navState === "about"){
      setAboutFlag(true);
    }
    
  }, [navState])

  useEffect(() => {
    console.log(aboutFlag)
    
  }, [aboutFlag])
  

  useEffect(() => {
    setTimeout(() => {
      layoutRef.current.style.position = "absolute";
      featuresRef.current.style.display="flex";
    }, 800);
  }, [])

  const titleVariant = {
    hidden: {},
    visible: (i = 1) => ({
      y: 0, 
      transition: { staggerChildren: 0.05, delayChildren: 0.3 * i},
    }),
  }
  const categoryTitleVariant = {
    hidden: {y:30},
    visible: {y:0},
  }
  const categoryItemVariant = {
    hidden: {y:60},
    visible: {y:0},
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
      y: -165,
      transition: {
        duration: 0.9,
        ease: "easeInOut"
      },
    },
  };
  
  return (
    <div className="item-container" ref={ref}>
    
    
      <motion.div 
        className="transition-overlay"
        initial={{y: "100vh"}}
        style={aboutFlag ? {backgroundColor: "#141414"} : {backgroundColor: "#FCFAF8"}}
        exit={{y:0, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}} transition={{duration: 0}}
      ></motion.div>
      
      <motion.div
        className="item"
        exit={{y:-180, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}}
      >
        <section className="item-top">
          <div className="item-heading">
            
              <div className="item-link">
                <a href={files[id].website} target="_blank" rel="noreferrer">
                  <motion.h3 initial={{y: 50}} animate={{y:0}} transition={{delay: 0.9, duration: 0.8, ease: "easeOut"}}>Visit Site</motion.h3>
                </a>
                
              </div>
            
            
            <div className="item-title">
              <motion.div 
              
                className="title"
                initial="hidden"
                animate="visible"
                transition={{duration: 0.7, ease: "easeOut", delay:0.3}} 
                // exit={{opacity:0, transition:{}}}
                variants={titleVariant}
              >
                {files[id].name.split("").map((letter, i) => (
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
        <div className="layout-wrapper" style={{top: offsetHeight}}>
          <motion.div transition={{duration: 1}}>
            <motion.h2 
              className="layout-title" 
              initial={{opacity: 1, y:0, skewY:0}}
              animate={{opacity:1, y: 70, skewY:4}}
              transition={{duration: 0.5, delay: 0.1, ease: "easeInOut"}}
            >
              {files[id].name}
            </motion.h2>
          </motion.div>
        </div>
        <div className="layout-wrapper" style={{top: offsetSub}}>
          <motion.h2 
            className="layout-subtitle"
            initial={{opacity: 1, y:0, skewY:0}}
            animate={{opacity:1, y: 70, skewY:4}}
            transition={{duration: 0.5, delay: 0.1, ease: "easeInOut"}}
          >
            {files[id].subtitle}
          </motion.h2>
        </div>
        
        <motion.div
          ref={layoutRef}
          id="container"
          className="container"
          layoutId={`file-${id}`}
          transition={{ delay: 0, duration: 1.4, ease: [0.5, 0.1, 0.2, 1], }}
          style={{
            height: "40vw",
            width: "75vw",
          }}
        >
          <div className="item-image-wrapper">
          <div className="item-image">
            <motion.img style={files[id].id === 1 && {objectPosition: "top"}} initial={{scale:1.2}} animate={{scale: 1}} transition={{ duration: 1.5, ease: [0.5, 0.1, 0.2, 1], }} className="project-image" src={files[id].src}/>
          </div>
          
            
          </div>
        </motion.div>
      </motion.div>
      <section className="features-section" ref={featuresRef}>
        <section className="item-features">
          <div className="section-header">
            <p>01</p>
            <h3>Background</h3>
          </div>
          <div className="section-text">
            <p>{files[id].full_description}
              <br/><br/>
              {files[id].full_description2}
            </p>
          </div>
        </section>
        <section className="item-features">
          <div className="section-header">
            <p>02</p>
            <h3>Features</h3>
          </div>
          <div className="section-text">
            <p>{files[id].feature_text1}
              <br/><br/>
               {files[id].feature_text2}
            </p>
          </div>
        </section>
        <section className="item-features">
          <div className="section-header">
            <p>03</p>
            <h3>Technology</h3>
          </div>
          <div className="section-text">
            <p className="technology">
              <span>Front End</span>
              <span>{files[id].front}</span>
            </p>
            <p className="technology">
              <span>Back End</span>
              <span>{files[id].back}</span>
            </p>
            <p className="technology">
              <span>Design</span>
              <span>{files[id].design}</span>
            </p>
          </div>
        </section>
        <section className="features-images">
            {
              files[id].screens.map((screen, index) => (
                <img src={screen}/>
              ))
            }
          </section>
      </section>
    </div>
    
  
  )
}

export default ProjectPage;