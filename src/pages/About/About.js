import React, { useState, useEffect, useRef } from "react";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import { ReactComponent as ArrowIcon } from "../../assets/5760406_arrow_down_downoad_icon.svg";
import boltMock from "../../assets/bolt-mockup.jpg";
import nearMock from "../../assets/near-mockup.jpg";
import boltScreensMock from "../../assets/bolt-mockup-screens.jpg";
import "./About.scss";
import Toc from "../../components/Toc/Toc";
import { ScrollParallax } from "react-just-parallax";

const About = () => {
  const { scrollYProgress } = useViewportScroll();
  const left = useTransform(scrollYProgress, [0, 1], [300, 850]);
  const right = useTransform(scrollYProgress, [0, 1], [300, 850]);
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -1400]);
  const parallax1 = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const parallax2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const [infoView, setInfoView] = useState(false);
  const infoRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const whiteBgRef = useRef(null);
  const blackBgRef = useRef(null);
  const introRef = useRef(null);
  const expRef = useRef(null);
  const headerRef = useRef(null);
  const aboutRef1 = useRef(null);
  const aboutRef2 = useRef(null);
  const [aboutView1, setAboutView1] = useState(false);
  const [aboutView2, setAboutView2] = useState(false);
  const [headerView, setHeaderView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setInfoView(entry.isIntersecting);
        console.log(entry.isIntersecting);
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

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setAboutView1(entry.isIntersecting);
      });
    });
    observer.observe(aboutRef1.current);
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setAboutView2(entry.isIntersecting);
      });
    });
    observer.observe(aboutRef2.current);
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setHeaderView(entry.isIntersecting);
      });
    });
    observer.observe(headerRef.current);
  }, [])

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
        duration: 1.1,
        ease: "easeInOut"
      },
    },
    exit: {
      y: -265,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      },
    }
  };

  const titleVariant = {
    hidden: {},
    visible: (i = 1) => ({
      y: 0, 
      transition: { staggerChildren: 0.06, delayChildren: 0.3 * i},
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
  const textVariant = {
    hidden: {y:55},
    visible: {y:0},
    exit: {y:55}
  }

  const scrollVariant = {
    hidden: {y:45},
    visible: {y:0},
    exit: {y:45}
  }
  
  const iconVariant = {
    hidden: {y:65},
    visible: {y:0},
    exit: {y:65}
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
          <motion.p
          initial="hidden"
          animate="visible"
          variants={scrollVariant}
          transition={{duration: 0.7, ease: "easeOut", delay:1.2}} 
          >Scroll Down</motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={iconVariant}
            transition={{duration: 0.7, ease: "easeOut", delay:1.5}} 
          >
            <ArrowIcon/>
          </motion.div>
          
        </div>
        
      </div>
      <section className="white-bg-section" ref={whiteBgRef}></section>
      <section className="black-bg-section" ref={blackBgRef}>
        <div className="images-wrapper">
          <div className="bolt-image">
            <motion.img src={boltMock} style={{y:parallax2}}/>
          </div>
          <div className="near-image">
            <motion.img src={nearMock} style={{y:parallax}}/>
          </div>
          <div className="bolt-screens-image">
            <motion.img src={boltScreensMock} style={{y:parallax1}}/>
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
              <p className="intro-text">
                <div className="text-wrapper">
                  <motion.span 
                    ref={aboutRef1} 
                    initial="hidden" 
                    animate={aboutView1 && "visible"} 
                    variants={textVariant} 
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                    >I'm a front end developer with a 
                  </motion.span>
                </div>
                <div className="text-wrapper">
                  <motion.span 
                    initial="hidden" 
                    animate={aboutView1 && "visible"} 
                    variants={textVariant} 
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}
                    >passion for solving creative challenges. 
                  </motion.span>
                </div>
                <div className="text-wrapper">
                  <motion.span 
                    initial="hidden" 
                    animate={aboutView1 && "visible"} 
                    variants={textVariant} 
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                    >Feel free to stop by and check out my 
                  </motion.span>
                </div>
                <div className="text-wrapper">
                  <motion.span 
                    initial="hidden" 
                    animate={aboutView1 && "visible"} 
                    variants={textVariant} 
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.4}}
                    >learning journey.
                  </motion.span>
                </div>
              </p>
              <br/>
              <p>
                <div className="text-wrapper">
                  <motion.span 
                    ref={aboutRef2} 
                    initial="hidden" 
                    animate={aboutView2 && "visible"} 
                    variants={textVariant} 
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                    >My goal is to to be a multi-disciplinary 
                  </motion.span>
                </div>
                <div className="text-wrapper">
                  <motion.span 
                    initial="hidden" 
                    animate={aboutView2 && "visible"} 
                    variants={textVariant} 
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}
                    >developer that can create assets,
                  </motion.span>
                </div>
                <div className="text-wrapper">
                  <motion.span 
                    initial="hidden" 
                    animate={aboutView2 && "visible"} 
                    variants={textVariant} 
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                    >design with optimal UX, and build
                  </motion.span>
                </div>
                <div className="text-wrapper">
                  <motion.span 
                    initial="hidden" 
                    animate={aboutView2 && "visible"} 
                    variants={textVariant} 
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.4}}
                    >scalable websites.
                  </motion.span>
                </div>
              </p>
            </div>
            <div className="experience" ref={expRef}>
              <div className="header-wrapper">
                <motion.p 
                ref={headerRef}
                className="experience-header"
                initial="hidden" 
                animate={headerView && "visible"} 
                variants={textVariant} 
                transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                >Working Experience</motion.p>
              </div>
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