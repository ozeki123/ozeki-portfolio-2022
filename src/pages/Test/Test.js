import React from "react";
import "./Test.scss";
import holoParallax from "../../assets/holo-parallax.jpg";
import {
  motion, useAnimation, useViewportScroll, useTransform
} from "framer-motion";
import { ScrollParallax } from "react-just-parallax";

const Test = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);
  const y3 = useTransform(scrollY, [0, 2000], [0, 150]);
  return (
    <div className="test-container">
      <section className="test-section">
        <div className="test-image-wrapper">
            <motion.img src={holoParallax} style={{y: y1}}/>

        </div>
      </section>
      <section className="test-section">
        <div className="test-image-wrapper">
        <motion.img src={holoParallax} style={{y: y2}}/>
        </div>
      </section>
      <section className="test-section">
        <div className="test-image-wrapper">
          <motion.img src={holoParallax} style={{y: y3}}/>
        </div>
      </section>
      <section className="test-section">
      </section>
    </div>
  )
}

export default Test;