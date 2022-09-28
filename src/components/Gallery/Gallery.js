import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import "./Gallery.scss";

const sliderVariants = {
  incoming: direction => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.1,
    opacity: 0.6
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: direction => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 1
  })
}

const sliderTransition = {
  duration: 1.2,
  ease: [0.66, 0.03, 0.22, 1.04]
}

const Gallery = ({images}) => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className="gallery-container">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div 
            key={page}
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
      </div>
    </>
    
    
    
  )
}

export default Gallery;