import React from 'react';
import { motion } from "framer-motion";
import files from "../../files";
import Project from '../../components/Project/Project';

const About = () => {
  const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };
  const variants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: { scale: 1, y:100, opacity: 0, transition }
  };
  return (
    <motion.div className="projects-container">
        <motion.div className="items" >
          <motion.div className="items-content">
              {files.map((file, i) => (
                <motion.div variants={variants} initial="initial" animate="enter" exit="exit">Projects</motion.div>
              ))}
          </motion.div>
        </motion.div>
    </motion.div>
   
  )
}

export default About;