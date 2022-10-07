import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  motion, useAnimation, useViewportScroll, useTransform, 
} from "framer-motion";
import { ScrollParallax } from 'react-just-parallax';
import { useParallax, Parallax, ParallaxBanner, ParallaxBannerLayer, useParallaxController } from 'react-scroll-parallax';
import simpleParallax from 'simple-parallax-js';
// import Parallax from 'parallax-js';
import "./Project.scss";
import Rellax from "rellax";

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
  const { scrollY } = useViewportScroll();
  const scrollParallaxRef = useRef(null);
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);
  const navigate = useNavigate();
  // const parallaxController = useParallaxController();

  // const handleLoad = () => 

  useEffect(() => {
    // const image = document.getElementsByClassName('thumbnail');
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
  //   }, 10);
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
        y: -350,
        opacity: 1,
        transition: { duration: 1.9, ease: [0.65, 0.1, 0.25, 0.95],}
      }
    }
  return (
    <div className="project-item-container">
      <div className="layout-wrapper">
        <motion.div layoutId={ `title-${i}`} transition={{duration: 1}}>
          <motion.h2  initial={{opacity: 1}} animate={{opacity:1}}>{file.name}</motion.h2>
        </motion.div>
        
      </div>
      
      <Link to={`/projects/${i}`} state={{id:i}} onClick={(e) => {}}> 
        <motion.div
          layoutId={ `file-${i}`}
          className="thumb"
          transition={{ 
            duration: 0, 
            // ease: [0.6, 0.21, 0.25, 0.95],
            // delay: 0
          }}
          style={{
            width: "50vw",
            height: "36.5vh",
          }}
        >
        {
        //   <motion.div transition={{ 
        //   duration: 2, 
        //   // ease: [0.6, 0.21, 0.25, 0.95],
        //   // delay: 0
        // }} layoutId={ `title-${i}`} className="text" style={{position: "absolute", overflow: "hidden", width: "100%", height: "4vh", top: "0vh", zIndex:"999", color: "white"}}>
        // <motion.h1
        //     style={{

        //       position: "absolute",
        //       left: 0,
        //       right: 0,
        //       // y: 0,
        //       opacity: 1,
        //       fontSize: "20px",
        //       zIndex: 999
              
        //     }}
        //   >Hello World</motion.h1>
  
        // </motion.div>

        }
        
          <div  className="project-image">
            <motion.div className="image-wrapper">
            {
              // <ScrollParallax strength="0.1" lerpEase="0.1" ref={scrollParallaxRef}></ScrollParallax>
            }
              <motion.div 
                className="overlay" 
                style={{backgroundColor:"#F2F2F2"}} 
                initial={"hidden"} 
                animate={"visible"} 
                variants={pageVariant}></motion.div>
                  
                  <motion.img 
                      className="thumbnail" 
                      initial={"hidden"} 
                      animate="visible" 
                      transition={{duration: 1.9, ease: [0.6, 0.21, 0.25, 0.95]}} 
                      variants={{hidden:{scale:1.5, opacity: 0}, visible:{opacity: 1, scale:1}}} 
                      src={file.src}
                      // style={{y: y2, scale: 2}}
                    />
              </motion.div>
            
            
          </div>
          
        </motion.div>
      </Link>
    </div>
    
  )
}

export default Project;