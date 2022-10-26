import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import files from "../../files";
import "./Projects.scss";
import Project from "../../components/Project/Project";
import { useMediaQuery } from 'react-responsive';
import { ScrollParallax } from "react-just-parallax";
import { ReactComponent as Arrow } from "../../assets/Arrow.svg";

const Projects = ({navState}) => {
  const [selected, setSelected] = useState(false);
  const [aboutFlag, setAboutFlag] = useState(false);

  const screen1366 = useMediaQuery({ minWidth: 1024, maxWidth: 1366 });
  const screen1024 = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const screen768 = useMediaQuery({ minWidth: 480, maxWidth: 768 });
  const screen480 = useMediaQuery({ maxWidth: 480});
  
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  useEffect(() => {
    if(navState === "about"){
      setAboutFlag(true);
    }
  }, [navState])

  // if(screen1366){
  //   bannerVariant = {
  //     hidden: {y:80},
  //     visible: {y:0}
  //   }
  // } else {
  //   bannerVariant = {
  //     hidden: {y:116},
  //     visible: {y:0}
  //   }
  // }

  const bannerVariant = 
    screen1366 ? { hidden:{y:84}, visible:{y:0} }
    : 
    screen1024 ? { hidden:{y: 63}, visible:{y:0}}
    :  
    screen768 ? { hidden:{y:52}, visible:{y:0}}
    :
    screen480 ? { hidden:{y:35}, visible:{y:0}}
    :
    { hidden:{y:116},visible:{y:0} }
  
  
  
  

  return (
    <div className="projects-container">
      <motion.div 
        className="transition-overlay" 
        style={{backgroundColor:"#141414"}} 
        initial={{y: "100vh"}} 
        exit={aboutFlag && {y:0, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}}></motion.div>
      <motion.div 
        className="items" 
        exit={aboutFlag && {y:-180, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}}>
        <section className="banner">
          <div className="banner-text">
            <div className="text-top">
              <motion.h2 variants={bannerVariant} initial="hidden" animate="visible" transition={{duration: 0.9, ease:[0.65, 0.1, 0.25, 0.95]}}>Andrew Ozeki</motion.h2>
            </div>
            <div className="text-center">
              <motion.h2 variants={bannerVariant} initial="hidden" animate="visible" transition={{duration: 0.9, ease:[0.65, 0.1, 0.25, 0.95], delay: 0.15}}>Front End</motion.h2>
              <motion.h2 variants={bannerVariant} initial="hidden" animate="visible" transition={{duration: 0.9, ease:[0.65, 0.1, 0.25, 0.95], delay: 0.15}}>&thinsp;Dev</motion.h2>
            </div>
            <div className="text-bottom">
              <div className="text-wrapper">
                <motion.h2 variants={bannerVariant} initial="hidden" animate="visible" transition={{duration: 0.9, ease:[0.65, 0.1, 0.25, 0.95], delay: 0.3}}>Folio '22</motion.h2>
              </div>
             
              <div className="banner-about">
                <div className="text-row">
                  <motion.p initial={{y:25}} animate={{y:0}} transition={{duration: 0.7, delay: 0.3, ease:"easeInOut"}}>CREATIVE FRONT END</motion.p>
                </div>
                <div className="text-row">
                  <motion.p initial={{y:25}} animate={{y:0}} transition={{duration: 0.7, delay: 0.4, ease:"easeInOut"}}>DEVELOPER BASED IN TOKYO</motion.p>
                </div>
                
              </div>
              
            </div>
          </div>
          <motion.div className="discover" initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 0.6}}>
            <p>Discover</p>
            <Arrow/>
          </motion.div>
        </section>
        <div className="line"></div>
        <div className="projects-heading">
          <h2>My Work</h2>
          <p>Visit Github</p>
        </div>
        <motion.section className="items-content">
          <motion.article
            className="project-item-wrapper"
            onClick={() => setSelected(0)}
            >
              <Project file={files[0]} i={0}/>
          </motion.article>

          <ScrollParallax strength="-0.03" zIndex={999}>
            <motion.article
              className="project-item-wrapper"
              transition={{duration: 0.7, ease: "easeInOut"}}
              >
                <Project file={files[1]} i={1}/>
            </motion.article>
          </ScrollParallax>
          
          <ScrollParallax strength="-0.05" zIndex={999}>
            <motion.article
              className="project-item-wrapper"
              onClick={() => setSelected(2)}>
              <Project file={files[2]} i={2}/>
            </motion.article>
          </ScrollParallax>
          <ScrollParallax strength="-0.07" zIndex={999}>
            <motion.article
              className="project-item-wrapper"
              onClick={() => setSelected(3)}>
              <Project file={files[3]} i={3}/>
            </motion.article>
          </ScrollParallax>
          <ScrollParallax strength="-0.07" zIndex={999}>
            <motion.article
              className="project-item-wrapper"
              onClick={() => setSelected(4)}>
              <Project file={files[4]} i={4}/>
            </motion.article>
          </ScrollParallax>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default Projects;