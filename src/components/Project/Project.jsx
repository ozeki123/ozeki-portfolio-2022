import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate} from "react-router-dom";
import {
  motion, useAnimation
} from "framer-motion";
// import { AnimatePresence } from "framer-motion";

const Project = ({file, i}) => {
  const [titleView, setTitleView] = useState(false);
  const [subTitleView, setSubTitleView] = useState(false);
  const [descView1, setDescView1] = useState(false);
  const [descView2, setDescView2] = useState(false);
  const titleRef = useRef();
  const subTitleRef = useRef();
  const descRef1 = useRef();
  const descRef2 = useRef();
  const navigate = useNavigate();


  //Check if title is in view
  useEffect(() => {
    const titleObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setTitleView(entry.isIntersecting);
      });
    });
    titleObserver.observe(titleRef.current);

    //Check if subtitle is in view
    const subTitleObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setSubTitleView(entry.isIntersecting);
      });
    });
    subTitleObserver.observe(subTitleRef.current);

    
  }, [])

  useEffect(() => {
//Check if first line of description is in view
  const descObserver1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      setDescView1(entry.isIntersecting);
    });
  });
  descObserver1.observe(descRef1.current);

  //Check if fsecond line of description is in view
  const descObserver2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      setDescView2(entry.isIntersecting);
    });
  });
  descObserver2.observe(descRef2.current);
  }, [])
  

  const titleVariant = {
    hidden: {
      y: 135, 
      skewY:12
    },
    visible: {
      y: 0,
      skewY: 0,
      transition:{ duration: 0.8, 
        ease: "easeOut", 
        delay: 0.2}
      },
      exit: {y: 135, opacity: 0}
    }
    
  const subTitleVariant = {
    hidden: {
      y: 135, 
      skewY:12
    },
    visible: {
      y: 0,
      skewY: 0,
      transition:{ duration: 0.8, 
        ease: "easeOut", 
        delay: 0.3},
      exit: {y: 135, opacity: 0}
    }
  }
  const descVariant1 = {
    hidden: {
      y: 25, 
    },
    visible: {
      y: 0,
      transition:{ duration: 0.6, 
        ease: "easeOut", 
        delay: 0.9}
    }
  }
  const descVariant2 = {
    hidden: {
      y: 25 , 
    },
    visible: {
      y: 0,
      transition:{ duration: 0.6, 
        ease: "easeOut", 
        delay: 1}
    }
  }

  // const handleClick = (e, i) => {
  //   e.preventDefault();
  //   setTimeout(() => {
  //     navigate(`/projects/${i}`);
  //   }, 1000);
  // }

  return (
      <motion.div
        key={i}
        layoutId={ `file-${i}`}
        className="thumb"
        // layout="position"
        style={{
          background: "white",
          width: "75vw",
          height: "78vh",
        }}
      >
      
        <motion.div className="project-image">
          <motion.div className="project-text">
            <motion.div className="title" >
              <motion.h2 
              key={`title-${i}`}
              ref={titleRef}
              initial="hidden"
              animate={titleView && "visible"}
              variants={titleVariant}
              exit="hidden"
              >
                {file.name}
              </motion.h2>
            </motion.div>
            <div className="subtitle">
                <motion.h2 
                  key={`title-${i}`}
                  ref={subTitleRef}
                  className="italic"
                  initial="hidden"
                  animate={subTitleView && "visible"}
                  variants={subTitleVariant}
                  exit="exit"
                  >
                    {file.subtitle}
                </motion.h2>
              
            </div>
            <div className="description-text">
              <motion.div className="description">
                <motion.p ref={descRef1} variants={descVariant1} initial="hidden" animate={descView1 && "visible"}>{file.description1}</motion.p>
              </motion.div>
              <motion.div className="description">
                <motion.p ref={descRef2} variants={descVariant2} initial="hidden" animate={descView2 && "visible"}>{file.description2}</motion.p>
              </motion.div>
            </div>
          </motion.div>
          <Link to={`/projects/${i}`}>
            <motion.img src={file.src} />
          </Link>
          
        </motion.div>
        
      </motion.div>
  )
}

export default Project;