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
  const scrollParallaxRef = useRef(null);
  const scrollParallaxRef1 = useRef(null);
  const scrollParallaxRef2 = useRef(null);
  const descRef = useRef(null);
  const showcaseRef = useRef(null);
  const featuresRef = useRef(null);
  const footerRef = useRef(null);
  const [aboutFlag, setAboutFlag] = useState(false);
  const location = useLocation();
  const { offsetHeight, offsetSub, offsetDesc1, offsetDesc2 } = useContext(AppContext);
  const { scrollY } = useViewportScroll();
  // const scrollParallaxRef = useRef(null);
  const y1 = useTransform(scrollY, [0, 1000], [0, -60]);
  useEffect(() => {
    console.log(location);
  }, [location])

  useEffect(() => {
    console.log("offset", offsetHeight);
  }, [])
  

  useEffect(() => {
    
    setTimeout(function () {
      window.scrollTo(0, 0);
  },500);
    const image = document.getElementsByClassName('project-image');
    // new simpleParallax(image, {
    // delay: 0,
    // orientation: 'down',
    // scale: 1.4,
    // // overflow: true,
    // });
    // const rellax = new Rellax('.thumbnail');
    // setTimeout(() => {
      // return () => {
      //   parallaxController.destroy();
      // }
    // }, 150);
    // const scene = document.getElementById('thumbnail');
    // const parallaxInstance = new Parallax(scene);
  }, [])

  useEffect(() => {
    if(navState === "about"){
      // console.log(navState);
      setAboutFlag(true);
    }
    
  }, [navState])

  useEffect(() => {
    console.log(aboutFlag)
    
  }, [aboutFlag])
  

  useEffect(() => {
    // window.dispatchEvent(new Event('resize'))
    // setTimeout(() => {
    //   scrollParallaxRef.current?.updateValues();
      
    //   setTimeout(() => {
    //     // scrollParallaxRef1.current?.updateValues();
    //     scrollParallaxRef2.current?.updateValues();
    //   }, 800);
    // }, 600);
    setTimeout(() => {
      layoutRef.current.style.position = "absolute";
      // layoutRef.current.style.top = "67.8vh";
      // descRef.current.style.display="flex";
      // showcaseRef.current.style.display="block";
      featuresRef.current.style.display="flex";
      footerRef.current.style.display="block";
    }, 800);
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
        style={aboutFlag ? {backgroundColor: "#141414"} : {}}
        exit={{y:0, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}} transition={{duration: 0}}
      ></motion.div>
      
      <motion.div
        className="item"
        exit={{y:-180, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}}
        // onClick={(e) => {
        //   e.target === e.currentTarget && setSelected(false);
        // }}
      >
      {
      //   <div style={{position: "fixed", width: "100vw", height: "100vh", top:"50%", transform: "translateY(-50%)",display: "flex", justifyContent:"center", alignItems:"center", backgroundColor:"red"}}>
      //   <div style={{overflow: "hidden", width: "100%", height: "42px", zIndex: "999"}}>
      //       <motion.h1
      //               layoutId={ `title-${id}`}
      //               transition={{ 
      //                 duration: 1, 
      //                 // ease: [0.6, 0.21, 0.25, 0.95],
      //                 // delay: 0
      //               }}
      //               style={{
      //                 position: "absolute",
      //                 top: "0vh",
      //                 left: 0,
      //                 fontSize: "20px",
      //                 // opacity: 1,
      //                 zIndex: 999,
      //                 width: "100%",
      //                 height: "100%"
      //               }}
      //             >Hello</motion.h1>
            
      //     </div>
      // </div>
      }
        <section className="item-top">
          <div className="item-heading">
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
        <div className="layout-wrapper" style={{top: offsetHeight}}>
          <motion.div transition={{duration: 1}}>
            <motion.h2 
              className="layout-title" 
              initial={{opacity: 1, y:0, skewY:0}}
              animate={{opacity:1, y: 70, skewY:4}}
              transition={{duration: 0.5, delay: 0.3, ease: "easeInOut"}}
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
            transition={{duration: 0.5, delay: 0.2, ease: "easeInOut"}}
          >
            {files[id].subtitle}
          </motion.h2>
        </div>
        <div className="layout-wrapper" style={{top: offsetDesc1}}>
          <motion.p
            className="layout-desc"
            initial={{opacity: 1, y:0, skewY:0}}
            animate={{opacity:1, y: 35, skewY:0}}
            transition={{duration: 0.5, delay:0.1, ease: "easeInOut"}}
          >
            {files[id].description1}
          </motion.p>
        </div>
        <div className="layout-wrapper" style={{top: offsetDesc2}}>
          <motion.p
            className="layout-desc"
            initial={{opacity: 1, y:0, skewY:0}}
            animate={{opacity:1, y: 35, skewY:0}}
            transition={{duration: 0.5, ease: "easeInOut"}}
          >
            {files[id].description2}
          </motion.p>
        </div>
        
        <motion.div
          ref={layoutRef}
          id="container"
          className="container"
          layoutId={`file-${id}`}
          transition={{ delay: 0, duration: 1.4, ease: [0.5, 0.1, 0.2, 1], }}
          style={{
            height: "83vh",
            width: "75vw",
            // position: "absolute"
          }}
        >
          <div className="item-image-wrapper">
          {
            // <ScrollParallax strength="0.06" lerpEase="0.07" ref={scrollParallaxRef}></ScrollParallax>
          }
          
          <div className="item-image">
              <motion.img className="project-image"src={files[id].src}/>
          </div>
          
            
          </div>
        </motion.div>
      </motion.div>
      <section className="features-section" ref={featuresRef}>
        <div className="item-features" >
        </div>
        <div className="features-images">
            {
              files[id].screens.map((screen, index) => (
                <img src={screen}/>
              ))
            }
          </div>
      </section>
      
      <div className="footer-container" ref={footerRef}>
        <div className="footer-contents">
            <div className="footer-bg">
              <h5>Next Project</h5>
              <h2>{files[1].title}</h2>
            </div>
        </div>
      </div>
    </div>
    
  
  )
}

export default ProjectPage;