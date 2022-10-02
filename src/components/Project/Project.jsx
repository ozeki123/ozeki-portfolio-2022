import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  motion, useAnimation, useViewportScroll, useTransform
} from "framer-motion";
import { ScrollParallax } from 'react-just-parallax';
import "./Project.scss";

const Project = ({file, i}) => {
  const [titleView, setTitleView] = useState(false);
  const [subTitleView, setSubTitleView] = useState(false);
  const titleRef = useRef();
  const subTitleRef = useRef();
  const { scrollYProgress } = useViewportScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const [transitionFlag, setTransitionFlag] = useState(false);
  let temp = true;
  const location = useLocation();
  const prevPath = location.state?.from;

  useEffect(() => {
    console.log(prevPath)
  }, [location])
  
  
  
  // const scrollParallaxRef = useRef(null);
  // useEffect(() => {
  //   console.log(prevPath);
  //   if(prevPath === "/about"){
  //     setTransitionFlag(true);
  //   } else {
  //     setTransitionFlag(false);
  //   }
  //   console.log(transitionFlag)
  // }, [transitionFlag])
  
  
  

  // const transform = useTransform(scrollYProgress, [0, 1], [0, 100 * 3]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     scrollParallaxRef.current?.updateValues();
  //   }, 400);
  // }, [])
  

  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       setTitleView(entry.isIntersecting);
  //     });
  //   });
  //   observer.observe(titleRef.current);
  // }, [])
  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => {
  //       setSubTitleView(entry.isIntersecting);
  //     });
  //   });
  //   observer.observe(subTitleRef.current);
  // }, [])

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

    const pageVariant = {
      hidden: {
        opacity: 1,
        y: 0
      },
      visible: {
        y: -330,
        opacity: 1,
        transition: { duration: 1.4, ease: [0.65, 0.1, 0.25, 0.95],}
      }
    }
  return (
    <div className="project-item-container">
      <Link to={`/projects/${i}`} state={{id:i}}> 
        <motion.div
          layoutId={ `file-${i}`}
          className="thumb"
          transition={{ 
            duration: 0.9, 
            ease: [0.6, 0.21, 0.25, 0.95],
            delay: 0
          }}
          style={{
            width: "50vw",
            height: "35vh",
          }}
        >
        
          <div  className="project-image">
            <div  className="project-text">
            {
            //   <div className="title">
            //   <motion.h2 
            //   ref={titleRef}
            //   initial="hidden"
            //   animate={titleView && "visible"}
            //   variants={titleVariant}
            //   exit="hidden"
            //   transition={{ 
            //     duration: 0.8, 
            //     ease: "easeInOut", 
            //     delay: 0.5}}
            //   >
            //     {file.name}
            //   </motion.h2>
            // </div>
            }
              
              {
              //   <div className="subtitle">
              //   <motion.h2 
              //     ref={subTitleRef}
              //     className="italic"
              //     initial="hidden"
              //     animate={titleView && "visible"}
              //     variants={subTitleVariant}
              //     exit="hidden"
              //     transition={{ 
              //       duration: 0.8, 
              //       ease: "easeInOut", 
              //       delay: 0.3}}
              //     >
              //       {file.subtitle}
              //     </motion.h2>
              // </div>
              }
              
              {
              //   <div className="description-text">
              //   <div className="description">
              //     <motion.p variants={descVariant1} initial="hidden" animate={subTitleView && "visible"} exit="hidden" transition={{ 
              //       duration: 0.3, 
              //       ease: "easeIn", 
              //       delay: 0.1}}>{file.description1}</motion.p>
              //   </div>
              //   <div className="description">
              //     <motion.p variants={descVariant2} initial="hidden" animate={subTitleView && "visible"} exit="hidden" transition={{ 
              //       duration: 0.3, 
              //       ease: "easeIn", 
              //       delay: 0}}>{file.description2}</motion.p>
              //   </div>
              // </div>
              }
              
            </div>
            <motion.div className="image-wrapper">
            {
              // <ScrollParallax strength="0.1" lerpEase="0.1" ref={scrollParallaxRef}></ScrollParallax>
            }
              <motion.div className="overlay" style={prevPath === "/about" ? {backgroundColor:"#F2F2F2"} : {backgroundColor: "none"}} initial={prevPath === "/about" && "hidden"} animate={"visible"} variants={pageVariant}></motion.div>
              <motion.img  src={file.src}/>
              
            </motion.div>
            
            
          </div>
          
        </motion.div>
      </Link>
    </div>
    
  )
}

export default Project;