import React, { useState, useEffect, useRef } from "react";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import { ReactComponent as ArrowIcon } from "../../assets/5760406_arrow_down_downoad_icon.svg";
import boltMock from "../../assets/bolt-mockup.jpg";
import nearMock from "../../assets/near-mockup.jpg";
import "./About.scss";
import Toc from "../../components/Toc/Toc";
import { ScrollParallax } from "react-just-parallax";

const About = () => {
  const { scrollYProgress } = useViewportScroll();
  const left = useTransform(scrollYProgress, [0, 1], [300, 850]);
  const right = useTransform(scrollYProgress, [0, 1], [300, 850]);
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const [infoView, setInfoView] = useState(false);
  const infoRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const whiteBgRef = useRef(null);
  const blackBgRef = useRef(null);
  const introRef = useRef(null);
  const expRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setInfoView(entry.isIntersecting);
      });
    });
    observer.observe(infoRef.current);
  }, [])
  useEffect(() => {
    if(infoView){
      // firstRef.current.style.position = "absolute";
      // lastRef.current.style.position = "absolute";
      // whiteBgRef.current.style.display = "none";
      // blackBgRef.current.style.display = "none";
    }
  }, [infoView])

  const child = {
    visible: {
      x: 0,
      y: 0,
      transition: {
        duration: 1.1,
        ease: "easeInOut",
      },
      
    },
    hidden: {
      y: -265,
      transition: {
        duration: 1,
        ease: "easeInOut"
      },
    },
    exit: {
      y: -265,
      transition: {
        duration: 0.9,
        ease: "easeInOut"
      },
    }
  };

  const titleVariant = {
    hidden: {},
    visible: (i = 1) => ({
      y: 0, 
      transition: { staggerChildren: 0.08, delayChildren: 0.1 * i},
    }),
    exit: {
      transition: { staggerChildren: 0.05, delay: 0, duration: 0.7, ease: "easeInOut"}
    }
  }
  const titleVariant2 = {
    hidden: {},
    visible: (i = 1) => ({
      y: 0, 
      transition: { staggerChildren: 0.08, delayChildren: 0.5 * i},
    }),
    exit: {
      transition: { staggerChildren: 0.08, delay: 0, duration: 0.7, ease: "easeInOut"}
    }
  }
  
  return (
    <div className="about-container">
      <div className="title-name">
      <motion.div
        className="title-top"
        initial="hidden"
        animate="visible"
        transition={{duration: 0.7, ease: "easeOut", delay:0.3}} 
        exit="exit"
        variants={titleVariant}
      >
        {"Andrew".split("").map((letter, i) => (
          <motion.h1 key={i} variants={child} ref={firstRef} style={{left}}>{letter}</motion.h1>
        ))}
      </motion.div>
      <motion.div
        className="title-bottom"
        initial="hidden"
        animate="visible"
        transition={{duration: 0.7, ease: "easeOut", delay:0.3}} 
        exit="exit"
        variants={titleVariant2}
      >
        {"Ozeki".split("").map((letter, i) => (
          <motion.h1 key={i} variants={child} ref={lastRef} style={{right}}>{letter}</motion.h1>
        ))}
      </motion.div>
        <div className="scroll-indicator">
          <p>Scroll Down</p>
          <ArrowIcon/>
        </div>
        
      </div>
      <section className="white-bg-section" ref={whiteBgRef}></section>
      <section className="black-bg-section" ref={blackBgRef}>
        <div className="images-wrapper">
          <div className="bolt-image">
            <motion.img src={boltMock}/>
          </div>
          <div className="near-image">
            <motion.img src={nearMock} style={{y:parallax}}/>
          </div>
        </div>
        
        
      </section>
      <section className="about-info">
        <div className="toc-section">
          <Toc introRef={introRef} expRef={expRef}/>
        </div>
        <div className="info-section" ref={infoRef}>
          <div className="info-text">
            <div className="introduction" ref={introRef}>
              <p>
                <span>I'm a front end developer with a </span>
                <span>passion for solving creative challenges. </span>
                <span>Feel free to stop by and check out my </span>
                <span>learning journey. </span>
              </p>
              <br/>
              <p>
                <span>My goal is to to be a multi-disciplinary </span>
                <span>developer that can create assets, design with optimal UX, and build</span>
                <span> scalable websites.</span>
              </p>
            </div>
            <div className="experience" ref={expRef}>
              <p className="experience-header">Working Experience</p>
              <div className="experience-contents">
                <p className="job">
                  <span>Software Engineer</span>
                  <span>American Home</span>
                </p>
                <p className="date">2021-Present</p>
              </div>
              <div className="experience-contents">
                <p className="job">
                  <span>Front End Engineer</span>
                  <span>AIG Japan</span>
                </p>
                <p className="date">2020-2021</p>
              </div>
              <div className="experience-contents">
                <p className="job">
                  <span>Intern</span>
                  <span>Microsoft</span>
                </p>
                <p className="date">2019-2020</p>
              </div>
            </div>    
            <div className="skills">
              <p className="skills-header">Skills・Technologies</p>
              <div className="skills-contents">
                <p className="skills-category">Front End Development</p>
                <p className="skills">Javascript, React/Next, Angular</p>
                <p className="skills">HTML/CSS, SCSS</p>
              </div>
              <div className="skills-contents">
                <p className="skills-category">Back End Development</p>
                <p className="skills">NodeJS, MongoDB, Python</p>
                <p className="skills">SQL, PostgreSQL</p>
              </div>
              <div className="skills-contents">
                <p className="skills-category">UI/UX Design</p>
                <p className="skills">Adobe Illustrator, Photoshop, After Effects</p>
                <p className="skills">Figma, Sketch</p>
              </div>
            </div> 
          </div>
              
        </div>
      </section>
      
    </div>
  )
}

export default About;