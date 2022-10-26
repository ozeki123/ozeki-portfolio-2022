import React, { useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import "./Project.scss";
import { AppContext } from "../../context";

const Project = ({file, i}) => {
  const titleRef = useRef();
  const subTitleRef = useRef();
  const { scrollYProgress } = useViewportScroll();
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const location = useLocation();
  const { setOffsetHeight, setOffsetSub } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

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