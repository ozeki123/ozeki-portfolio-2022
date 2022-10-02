import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Toc.scss";

const Toc = ({ introRef, expRef }) => {
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
        console.log(entry.isIntersecting);
      });
    });
    observer.observe(aboutRef.current);
  }, [])

  const handleIntroScroll = () => {
    introRef.current.scrollIntoView({behavior: "smooth"})
  }
  const handleExpScroll = () => {
    expRef.current.scrollIntoView({behavior: "smooth"})
  }

  const variant = {
    hidden: {y:50},
    visible: {y:0},
    exit: {y:50}
  }

  const variant1 = {
    hidden: {y:50},
    visible: {y:0, 
      transition:{ duration: 2, 
      ease: "easeOut", 
      delay: 0.4}
    },
    exit: {y:50}
  }
  
  return (
    <ul className="toc-contents">
      <li className="content">
        <motion.p
        ref={aboutRef}
        initial="hidden"
        animate={aboutView && "visible"}
        // transition={{duration: 0.7, ease: "easeOut", delay:0.3}} 
        exit="exit"
        variants={variant}
        >Contents</motion.p>
      </li>
      <li onClick={handleIntroScroll} className="content">
        <motion.p
        initial="hidden"
        animate="visible"
        transition={{duration: 0.7, ease: "easeOut", delay:0.3}} 
        exit="exit"
        variants={variant1}
        >About me</motion.p>
      </li>
      <li className="content">
        <motion.p
        initial="hidden"
        animate="visible"
        transition={{duration: 0.7, ease: "easeOut", delay:0.3}} 
        exit="exit"
        variants={variant}
        onClick={handleExpScroll}
        >Experience</motion.p>
      </li>
      <li className="content">
        <motion.p
        initial="hidden"
        animate="visible"
        transition={{duration: 0.7, ease: "easeOut", delay:0.3}} 
        exit="exit"
        variants={variant}
        >My Skills</motion.p>
      </li>
      <li className="content space">
      <div className="space">
        <motion.p
          initial="hidden"
          animate="visible"
          transition={{duration: 0.7, ease: "easeOut", delay:0.3}} 
          exit="exit"
          variants={variant}
          >Github</motion.p>
        </div>
        
      </li>
      <li className="content">
        <motion.p
        initial="hidden"
        animate="visible"
        transition={{duration: 0.7, ease: "easeOut", delay:0.3}} 
        exit="exit"
        variants={variant}
        >Linkedin</motion.p>
      </li>
      <li className="content">
        <motion.p
        initial="hidden"
        animate="visible"
        transition={{duration: 0.7, ease: "easeOut", delay:0.3}} 
        exit="exit"
        variants={variant}
        >Email</motion.p>
      </li>
    </ul>
  )
}

export default Toc;