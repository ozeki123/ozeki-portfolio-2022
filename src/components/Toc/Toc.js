import React from "react";
import { motion } from "framer-motion";
import "./Toc.scss";

const Toc = ({}) => {
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
        initial="hidden"
        animate="visible"
        transition={{ease: "easeOut", delay:0}} 
        variants={variant1}
        >Contents</motion.p>
      </li>
      <li className="content">
        <motion.p
        initial="hidden"
        animate="visible"
        transition={{ ease: "easeOut", delay:0}} 
        variants={variant1}
        >About me</motion.p>
      </li>
      <li className="content">
        <motion.p
        initial="hidden"
        animate="visible"
        transition={{ease: "easeOut", delay:0.1}} 
        variants={variant}
        >Experience</motion.p>
      </li>
      <li className="content">
        <motion.p
        initial="hidden"
        animate="visible"
        transition={{ease: "easeOut", delay:0.2}} 
        variants={variant}
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