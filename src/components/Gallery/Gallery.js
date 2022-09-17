import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "./Gallery.scss";

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const sliderVariants = {
  incoming: direction => ({
    x: direction > 0 ? "50%" : "-50%",
    scale: 1,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: direction => ({
    x: direction > 0 ? "-50%" : "50%",
    scale: 1,
    opacity: 0
  })
}

const sliderTransition = {
  duration: 1.2,
  ease: [0.56, 0.03, 0.12, 1.04]
}

const Gallery = ({images}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div 
        key={page}
        // src={images[imageIndex]}
        style={{backgroundImage:`url(${images[imageIndex]})`}}
        custom={direction}
        variants={sliderVariants}
        initial="incoming"
        animate="active"
        exit="exit"
        transition={sliderTransition}
        className="home-screen"
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
          {"‣"}
        </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
    
    
  )
}

export default Gallery;