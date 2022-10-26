import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  motion, useAnimation, useViewportScroll, useTransform, 
} from "framer-motion";
import { ScrollParallax } from 'react-just-parallax';
import "./Project.scss";
import { AppContext } from "../../context";

const Project = ({file, i}) => {
  const [titleView, setTitleView] = useState(false);
  const [subTitleView, setSubTitleView] = useState(false);
  const titleRef = useRef();
  const subTitleRef = useRef();
  const descRef1 = useRef();
  const descRef2 = useRef();
  const { scrollYProgress } = useViewportScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const [transitionFlag, setTransitionFlag] = useState(false);
  let temp = true;
  const location = useLocation();
  const prevPath = location.state?.from;
  const { scrollY } = useViewportScroll();
  const navigate = useNavigate();
  const [offset, setOffset] = useState();
  const { offsetHeight, 
          setOffsetHeight, 
          offsetSub, 
          setOffsetSub,
          offsetDesc1,
          setOffsetDesc1,
          offsetDesc2,
          setOffsetDesc2 } = useContext(AppContext);
  // const parallaxController = useParallaxController();
  const parallaxRef = useRef(null);
  const projectRef = useRef(null);
  const [projectView, setProjectView] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0)
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

    const pageVariant = {
      hidden: {
        opacity: 1,
        y: 0
      },
      visible: {
        y: "-100%",
        opacity: 1,
        transition: { delay: 0.2, duration: 1.7, ease: [0.65, 0.1, 0.25, 0.95],}
      }
    }
  return (
    <motion.div 
      className="project-item-container" 
      onClick={(e) => {
        setOffsetHeight(titleRef.current.getBoundingClientRect().top);
        setOffsetSub(subTitleRef.current.getBoundingClientRect().top);
      }}>
      <Link to={`/projects/${i}`}> 
      <motion.div className={`layout-text ${file.id <= 3 && "padding"}`} style={{y:parallax, top: 80 + 30 * (file.id * 1.3)}}>
        <motion.div className="layout-wrapper">
          <motion.div transition={{duration: 0, delay: 0, ease: "easeOut"}}>
            <motion.h2 ref={titleRef} initial={{y: 70,  skewX: -15}} animate={{y:0, skewY: 0, skewX: 0}}
            transition={{duration: 0.8, delay: 0.6, ease: [0.45, 0.35, 0.45, 0.95]}}>{file.name}</motion.h2>
          </motion.div>
        </motion.div>
        <div className="sublayout-wrapper">
          <motion.h2 
            className="subtitle" 
            ref={subTitleRef}
            initial={{y: 100, skewY: 15, skewX: -12}} 
            animate={{y:0, skewY: 0, skewX: 0}} 
            transition={{duration: 0.7, delay: 0.7, ease: [0.45, 0.35, 0.45, 0.95]}}
          >{file.subtitle}
          </motion.h2>
        </div>
      </motion.div>
        <motion.div
          layoutId={ `file-${i}`}
          className="thumb"
          transition={{ 
            duration: 0, 
          }}
          style={{
            width: "51vw",
            height: "27.2vw",
          }}
        >
          <div className="project-image">
            <motion.div className="image-wrapper">
              <motion.div 
                className="overlay" 
                style={{backgroundColor:"#FCFAF8"}} 
                initial={"hidden"} 
                animate={"visible"} 
                variants={pageVariant}></motion.div>
                  
                  <motion.img 
                      className={`thumbnail ${file.id === 2 && "shadow"}` }
                      style={file.id === 1 && {objectPosition: "top"}}
                      initial={"hidden"} 
                      animate="visible" 
                      transition={{duration: 2, ease: [0.6, 0.21, 0.25, 0.95]}} 
                      variants={{hidden:{scale:1.5, opacity: 0}, visible:{opacity: 1, scale:1.2}}} 
                      src={file.src}
                      alt="Image Thumbnail"
                    />
              </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default Project;