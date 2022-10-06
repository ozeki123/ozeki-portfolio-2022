import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  motion, useAnimation, useViewportScroll, useTransform
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
    const image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
    delay: 0,
    orientation: 'down',
    scale: 1.4,
    // overflow: true,
    });
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
        y: -450,
        opacity: 1,
        transition: { duration: 1.8, ease: [0.65, 0.1, 0.25, 0.95],}
      }
    }
  return (
    <div className="project-item-container" data-scroll-section>
      <Link to={`/projects/${i}`} state={{id:i}} onClick={(e) => {e.preventDefault();}}> 
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
            height: "43.5vh",
          }}
        >
        
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
                      variants={{hidden:{scale:1.8, opacity: 0}, visible:{opacity: 1, scale:1.4}}} 
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