import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";
import Toc from "../../components/Toc/Toc";

const About = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const textVariant = {
    hidden: {y:"100%"},
    visible: {y:0},
  }
  
  return (
    <div className="about-container">
      <motion.div initial={{y: "100vh"}} exit={{y:0, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}} className="transition-overlay"></motion.div>
        <motion.section className="about-info" exit={{y:-150, transition:{duration: 0.9, ease: [0.65, 0.1, 0.25, 0.95]}}}>
          <aside className="toc-section">
            <Toc/>
          </aside>
          <div className="info-section">
            <div className="info-text">
              <section className="introduction">
                <p className="intro-text">
                  <div>
                    <div className="text-wrapper">
                      <motion.span 
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
              </section>
              <section className="experience">
                <div className="header-wrapper">
                    <motion.p 
                    className="experience-header"
                    initial="hidden" 
                    animate="visible"
                    variants={textVariant} 
                    transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.74}}
                    >Working Experience</motion.p>
                </div>
                <div className="experience-contents">
                  <p className="job">
                    <div className="exp-wrapper">
                      <motion.span
                        className="exp"
                        initial="hidden"
                        animate="visible"
                        transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.82}}
                        variants={textVariant}
                      >Software Engineer</motion.span>
                    </div>
                    <div className="exp-wrapper">
                      <motion.span
                        className="exp"
                        initial="hidden"
                        animate="visible"
                        transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.90}}
                        variants={textVariant}
                      >American Home</motion.span>
                    </div>
                  </p>
                  <div className="exp-wrapper">
                    <motion.p 
                    className="date"
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 0.98}}
                    variants={textVariant}
                    >2021-Present</motion.p>
                  </div>
                  
                </div>
                <div className="experience-contents">
                  <p className="job">
                  <div className="exp-wrapper">
                    <motion.span
                      className="exp"
                      initial="hidden"
                      animate="visible"
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 1.06}}
                      variants={textVariant}
                    >
                      Front End Engineer
                    </motion.span>
                    </div>
                    <div className="exp-wrapper">
                      <motion.span
                        className="exp"
                        initial="hidden"
                        animate="visible"
                        transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 1.14}}
                        variants={textVariant}
                      >AIG Japan</motion.span>
                    </div>
                  </p>
                  <div className="exp-wrapper">
                    <motion.p 
                    className="date"
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 1.22}}
                    variants={textVariant}
                    >2020-2021</motion.p>
                  </div>
                </div>
                <div className="experience-contents">
                  <p className="job">
                  <div className="exp-wrapper">
                      <motion.span
                        className="exp"
                        initial="hidden"
                        animate="visible"
                        transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 1.3}}
                        variants={textVariant}
                      >Intern</motion.span>
                    </div>
                    <div className="exp-wrapper">
                      <motion.span
                        className="exp"
                        initial="hidden"
                        animate="visible"
                        transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 1.38}}
                        variants={textVariant}
                      >Microsoft</motion.span>
                    </div>
                  </p>
                  <div className="exp-wrapper">
                    <motion.p 
                    className="date"
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 1.46}}
                    variants={textVariant}
                    >2019-2020</motion.p>
                  </div>
                </div>
              </section>    
              <section className="skills">
                <div className="header-wrapper">
                    <motion.p 
                    className="skills-header"
                    initial="hidden" 
                    animate="visible" 
                    variants={textVariant} 
                    transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 1.54}}
                    >Skills・Technologies</motion.p>
                </div>
                <div className="skills-contents">
                  <div className="skills-wrapper">
                    <motion.p 
                      className="skills-category"
                      initial="hidden" 
                      animate="visible" 
                      variants={textVariant} 
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 1.62}}
                      >Front End Development</motion.p>
                  </div>
                  <div className="text-wrapper">
                    <motion.p 
                      className="skills"
                      initial="hidden" 
                      animate="visible"
                      variants={textVariant} 
                      transition={{duration: 0.7, ease: [0.15, 0.35, 0.20, 0.8], delay: 1.7}}
                      >Javascript, React/Next, Angular</motion.p>
                  </div>
                  <div className="text-wrapper">
                    <motion.p 
                      className="skills"
                      initial="hidden" 
                      animate="visible" 
                      variants={textVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 1.78}}
                      >HTML/CSS, SCSS</motion.p>
                  </div>
                </div>
                <div className="skills-contents">
                  <div className="skills-wrapper">
                    <motion.p 
                      className="skills-category"
                      initial="hidden" 
                      animate="visible" 
                      variants={textVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 1.86}}
                      >Back End Development
                    </motion.p>
                  </div>
                  <div className="text-wrapper">
                    <motion.p 
                      className="skills"
                      initial="hidden" 
                      animate="visible" 
                      variants={textVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 1.94}}
                      >NodeJS, MongoDB, Python
                    </motion.p>
                  </div>
                  <div className="text-wrapper">
                    <motion.p 
                      className="skills"
                      initial="hidden" 
                      animate="visible" 
                      variants={textVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 2.02}}
                      >SQL, PostgreSQL
                    </motion.p>
                  </div>
                </div>
                <div className="skills-contents">
                  <div className="skills-wrapper">
                    <motion.p 
                      className="skills-category"
                      initial="hidden" 
                      animate="visible" 
                      variants={textVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 2.1}}
                      >UI/UX Design
                    </motion.p>
                  </div>
                  <div className="text-wrapper">
                    <motion.p 
                      className="skills"
                      initial="hidden" 
                      animate="visible" 
                      variants={textVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 2.18}}
                      >Adobe Illustrator, Photoshop, After Effects
                    </motion.p>
                  </div>
                  <div className="text-wrapper">
                    <motion.p 
                      className="skills"
                      initial="hidden" 
                      animate="visible" 
                      variants={textVariant} 
                      transition={{duration: 0.6, ease: "easeOut", delay: 2.26}}
                      >Figma, Sketch
                    </motion.p>
                  </div>
                </div>
              </section> 
            </div>
          </div>
        </motion.section>
    </div>
  )
}

export default About;