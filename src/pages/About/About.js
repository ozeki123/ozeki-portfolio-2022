import React, { useState, useEffect, useRef } from "react";
import { useViewportScroll, motion, useTransform } from "framer-motion";
import boltMock from "../../assets/bolt-mockup.jpg";
import "./About.scss";

const About = () => {
  const { scrollYProgress } = useViewportScroll();
  const left = useTransform(scrollYProgress, [0, 1], [200, 600]);
  const right = useTransform(scrollYProgress, [0, 1], [200, 600]);
  const [infoView, setInfoView] = useState(false);
  const infoRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const whiteBgRef = useRef(null);
  const blackBgRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setInfoView(entry.isIntersecting);
      });
    });
    observer.observe(infoRef.current);
  }, [])
  useEffect(() => {
    if(infoView){
      // firstRef.current.style.position = "absolute";
      // lastRef.current.style.position = "absolute";
      // whiteBgRef.current.style.display = "none";
      // blackBgRef.current.style.display = "none";
    }
  }, [infoView])
  
  return (
    <div className="about-container">
      <div className="title-name">
        <motion.h1 className="first-name" ref={firstRef} style={{left}}>andrew </motion.h1>
        <motion.h1 className="last-name" ref={lastRef} style={{right}}>ozeki yin</motion.h1>
      </div>
      
      <section className="white-bg-section" ref={whiteBgRef}></section>
      <section className="black-bg-section" ref={blackBgRef}>
        <div className="images-wrapper">
          <div className="bolt-image">
            <img src={boltMock}/>
          </div>
        </div>
        
        
      </section>
      <section className="info-section" ref={infoRef}>
        <h2>About</h2>
      </section>
    </div>
  )
}

export default About;