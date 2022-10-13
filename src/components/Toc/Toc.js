import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Toc.scss";

const Toc = ({ introRef, expRef, headerView, skillHeaderView, aboutView1 }) => {
  const [aboutView, setAboutView] = useState(false);
  const [expView, setExpView] = useState(false);
  const [skillView, setSkillView] = useState(false);
  const [gitView, setGitView] = useState(false);
  const [linkedView, setLinkedView] = useState(false);
  const [mailView, setMailView] = useState(false);
  const aboutRef = useRef(null);
  const xpRef = useRef(null);
  const skillRef = useRef(null);
  const gitRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setAboutView(entry.isIntersecting);
        // console.log(entry.isIntersecting);
      });
    });
    observer.observe(aboutRef.current);
  }, [])
  useEffect(() => {
    console.log(headerView)
  }, [headerView])

  const handleIntroScroll = () => {
    introRef.current.scrollIntoView({behavior: "smooth"})
  }
  const handleExpScroll = () => {
    expRef.current.scrollIntoView({behavior: "smooth"})
  }

  const variant = {
    hidden: {y:50},
    visible: {y:0},
  }

  const variant1 = {
    hidden: {y:50},
    visible: {y:0, 
      // transition:{ duration: 2, 
      // ease: "easeOut", 
      // delay: 0.4}
    },
  }
  
  return (
    <ul className="toc-contents">
      <li className="content">
        <motion.p
        ref={aboutRef}
        initial="hidden"
        animate="visible"
        transition={{ease: "easeOut", delay:0}} 
        variants={variant1}
        // initial="hidden"
        // animate={aboutView && "visible"}
        // transition={{duration: 0.7, ease: "easeOut", delay:0.3}} 
        // variants={variant}
        >Contents</motion.p>
      </li>
      <li onClick={handleIntroScroll} className="content">
        <motion.p
        initial="hidden"
        animate="visible"
        transition={{ ease: "easeOut", delay:0}} 
        variants={variant1}
        style={aboutView1 && {color: "white"}}
        >About me</motion.p>
      </li>
      <li className="content">
        <motion.p
        initial="hidden"
        animate="visible"
        transition={{ease: "easeOut", delay:0.1}} 
        variants={variant}
        onClick={handleExpScroll}
        style={headerView && {color: "white"}}
        >Experience</motion.p>
      </li>
      <li className="content">
        <motion.p
        initial="hidden"
        animate="visible"
        transition={{ease: "easeOut", delay:0.2}} 
        variants={variant}
        style={skillHeaderView && {color: "white"}}
        >My Skills</motion.p>
      </li>
      <li className="content space">
      <div className="space">
        <motion.p
          initial="hidden"
          animate="visible"
          transition={{ease: "easeOut", delay:0.3}} 
          variants={variant}
          >Github</motion.p>
        </div>
        
      </li>
      <li className="content">
        <motion.p
        initial="hidden"
        animate="visible"
        transition={{ease: "easeOut", delay:0.4}} 
        variants={variant}
        >Linkedin</motion.p>
      </li>
      <li className="content">
        <motion.p
        initial="hidden"
        animate="visible"
        transition={{ease: "easeOut", delay:0.5}} 
        variants={variant}
        >Email</motion.p>
      </li>
    </ul>
  )
}

export default Toc;