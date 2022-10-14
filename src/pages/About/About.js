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
  const left = useTransform(scrollYProgress, [0, 1], [200, 700]);
  const right = useTransform(scrollYProgress, [0, 1], [200, 700]);
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
  const expRef1 = useRef(null);
  const expRef2 = useRef(null);
  const expRef3 = useRef(null);
  const [aboutView1, setAboutView1] = useState(false);
  const [aboutView2, setAboutView2] = useState(false);
  const [headerView, setHeaderView] = useState(false);
  const [expView1, setExpView1] = useState(false);
  const [expView2, setExpView2] = useState(false);
  const [expView3, setExpView3] = useState(false);
  const [skillHeaderView, setSkillHeaderView] = useState(false);
  const skillHeaderRef = useRef(null);
  const skillRef1 = useRef(null);
  const skillRef2 = useRef(null);
  const skillRef3 = useRef(null);
  const [skillView1, setSkillView1] = useState(false);
  const [skillView2, setSkillView2] = useState(false);
  const [skillView3, setSkillView3] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setInfoView(entry.isIntersecting);
        // console.log(entry.isIntersecting);
      });
    });
    observer.observe(infoRef.current);
  }, [])
  useEffect(() => {
    // console.log(headerView)
  }, [headerView])

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
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setExpView1(entry.isIntersecting);
      });
    });
    observer.observe(expRef1.current);
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setExpView2(entry.isIntersecting);
      });
    });
    observer.observe(expRef2.current);
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setExpView3(entry.isIntersecting);
      });
    });
    observer.observe(expRef3.current);
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setSkillHeaderView(entry.isIntersecting);
      });
    });
    observer.observe(skillHeaderRef.current);
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setSkillView1(entry.isIntersecting);
      });
    });
    observer.observe(skillRef1.current);
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setSkillView2(entry.isIntersecting);
      });
    });
    observer.observe(skillRef2.current);
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setSkillView3(entry.isIntersecting);
      });
    });
    observer.observe(skillRef3.current);
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
    hidden: {y:"100%"},
    visible: {y:0},
  }
  const headerVariant = {
    hidden: {y:67},
    visible: {y:0},
  }

  const scrollVariant = {
    hidden: {y:45},
    visible: {y:0},
  }
  
  const iconVariant = {
    hidden: {y:65},
    visible: {y:0},
  }
  
  return (
    <div className="about-container" data-scroll-section>
      <motion.div initial={{y: "100vh"}} exit={{y:0, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}} className="transition-overlay"></motion.div>
        <motion.section className="about-info" exit={{y:-150, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}}>
          <div className="toc-section">
            <Toc introRef={introRef} expRef={expRef} aboutView1={aboutView1} headerView={headerView} skillHeaderView={skillHeaderView}/>
          </div>
          <div className="info-section" ref={infoRef}>
            <div className="info-text">
              <div className="introduction" ref={introRef}>
                <p className="intro-text">
                  <div>
                    <div className="text-wrapper">
                      <motion.span 
                        ref={aboutRef1} 
                        initial="hidden" 
                        animate={"visible"} 
                        variants={textVariant} 
                        transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.1}}
                        >I am a front end developer with a 
                      </motion.span>
                    </div>
                  </div>
                  
                  <div className="text-wrapper">
                    <motion.span 
                      initial="hidden" 
                      animate={"visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.18}}
                      >passion for solving creative challenges. 
                    </motion.span>
                  </div>
                  <div className="text-wrapper">
                    <motion.span 
                      initial="hidden" 
                      animate={"visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.26}}
                      >Feel free to stop by and check out
                    </motion.span>
                  </div>
                  <div className="text-wrapper">
                    <motion.span 
                      initial="hidden" 
                      animate={"visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.34}}
                      >the projects I've made during 
                    </motion.span>
                  </div>
                  <div className="text-wrapper">
                    <motion.span 
                      initial="hidden" 
                      animate={"visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.42}}
                      >this journey.
                    </motion.span>
                  </div>
                </p>
                <br/>
                <p>
                  <div className="text-wrapper">
                    <motion.span 
                      ref={aboutRef2} 
                      initial="hidden" 
                      animate={"visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.42}}
                      >My goal is to to be a multi-disciplinary 
                    </motion.span>
                  </div>
                  <div className="text-wrapper">
                    <motion.span 
                      initial="hidden" 
                      animate={"visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.50}}
                      >developer that can create assets,
                    </motion.span>
                  </div>
                  <div className="text-wrapper">
                    <motion.span 
                      initial="hidden" 
                      animate={"visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.58}}
                      >design with optimal UX, and build
                    </motion.span>
                  </div>
                  <div className="text-wrapper">
                    <motion.span 
                      initial="hidden" 
                      animate={"visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.66}}
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
                    variants={headerVariant} 
                    transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0}}
                    >Working Experience</motion.p>
                </div>
                <div className="experience-contents">
                  <p className="job">
                    <div className="exp-wrapper">
                      <motion.span
                        className="exp"
                        ref={expRef1}
                        initial="hidden"
                        animate={expView1 && "visible"}
                        transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.08}}
                        variants={textVariant}
                      >Software Engineer</motion.span>
                    </div>
                    <div className="exp-wrapper">
                      <motion.span
                        className="exp"
                        initial="hidden"
                        animate={expView1 && "visible"}
                        transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.16}}
                        variants={textVariant}
                      >American Home</motion.span>
                    </div>
                  </p>
                  <div className="exp-wrapper">
                    <motion.p 
                    className="date"
                    initial="hidden"
                    animate={expView1 && "visible"}
                    transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.24}}
                    variants={textVariant}
                    >2021-Present</motion.p>
                  </div>
                  
                </div>
                <div className="experience-contents">
                  <p className="job">
                  <div className="exp-wrapper">
                    <motion.span
                      className="exp"
                      ref={expRef2}
                      initial="hidden"
                      animate={expView2 && "visible"}
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.08}}
                      variants={textVariant}
                    >
                      Front End Engineer
                    </motion.span>
                    </div>
                    <div className="exp-wrapper">
                      <motion.span
                        className="exp"
                        initial="hidden"
                        animate={expView2 && "visible"}
                        transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.16}}
                        variants={textVariant}
                      >AIG Japan</motion.span>
                    </div>
                  </p>
                  <div className="exp-wrapper">
                    <motion.p 
                    className="date"
                    initial="hidden"
                    animate={expView2 && "visible"}
                    transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.24}}
                    variants={textVariant}
                    >2020-2021</motion.p>
                  </div>
                </div>
                <div className="experience-contents">
                  <p className="job">
                  <div className="exp-wrapper">
                      <motion.span
                        className="exp"
                        ref={expRef3}
                        initial="hidden"
                        animate={expView3 && "visible"}
                        transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.08}}
                        variants={textVariant}
                      >Intern</motion.span>
                    </div>
                    <div className="exp-wrapper">
                      <motion.span
                        className="exp"
                        initial="hidden"
                        animate={expView3 && "visible"}
                        transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.16}}
                        variants={textVariant}
                      >Microsoft</motion.span>
                    </div>
                  </p>
                  <div className="exp-wrapper">
                    <motion.p 
                    className="date"
                    initial="hidden"
                    animate={expView3 && "visible"}
                    transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.24}}
                    variants={textVariant}
                    >2019-2020</motion.p>
                  </div>
                </div>
              </div>    
              <div className="skills">
              <div className="header-wrapper">
                    <motion.p 
                    ref={skillHeaderRef}
                    className="skills-header"
                    initial="hidden" 
                    animate={skillHeaderView && "visible"} 
                    variants={headerVariant} 
                    transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.08}}
                    >Skills・Technologies</motion.p>
                </div>
                <div className="skills-contents">
                  <div className="skills-wrapper">
                    <motion.p 
                      className="skills-category"
                      ref={skillRef1}
                      initial="hidden" 
                      animate={skillView1 && "visible"} 
                      variants={headerVariant} 
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.16}}
                      >Front End Development</motion.p>
                  </div>
                  <div className="text-wrapper">
                    <motion.p 
                      className="skills"
                      initial="hidden" 
                      animate={skillView1 && "visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.24}}
                      >Javascript, React/Next, Angular</motion.p>
                  </div>
                  <div className="text-wrapper">
                    <motion.p 
                      className="skills"
                      initial="hidden" 
                      animate={skillView1 && "visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                      >HTML/CSS, SCSS</motion.p>
                  </div>
                </div>
                <div className="skills-contents">
                  <div className="skills-wrapper">
                    <motion.p 
                      className="skills-category"
                      ref={skillRef2}
                      initial="hidden" 
                      animate={skillView2 && "visible"} 
                      variants={headerVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                      >Back End Development
                    </motion.p>
                  </div>
                  <div className="text-wrapper">
                    <motion.p 
                      className="skills"
                      initial="hidden" 
                      animate={skillView2 && "visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}
                      >NodeJS, MongoDB, Python
                    </motion.p>
                  </div>
                  <div className="text-wrapper">
                    <motion.p 
                      className="skills"
                      initial="hidden" 
                      animate={skillView2 && "visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                      >SQL, PostgreSQL
                    </motion.p>
                  </div>
                </div>
                <div className="skills-contents">
                  <div className="skills-wrapper">
                    <motion.p 
                      className="skills-category"
                      ref={skillRef3}
                      initial="hidden" 
                      animate={skillView3 && "visible"} 
                      variants={headerVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 0.1}}
                      >UI/UX Design
                    </motion.p>
                  </div>
                  <div className="text-wrapper">
                    <motion.p 
                      className="skills"
                      initial="hidden" 
                      animate={skillView3 && "visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}
                      >Adobe Illustrator, Photoshop, After Effects
                    </motion.p>
                  </div>
                  <div className="text-wrapper">
                    <motion.p 
                      className="skills"
                      initial="hidden" 
                      animate={skillView3 && "visible"} 
                      variants={textVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 0.3}}
                      >Figma, Sketch
                    </motion.p>
                  </div>
                </div>
              </div> 
            </div>
                
          </div>
        </motion.section>
      
      
    </div>
  )
}

export default About;