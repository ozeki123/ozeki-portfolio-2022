import React from "react";
import "./Toc.scss";

const Toc = ({ introRef, expRef }) => {

  const handleIntroScroll = () => {
    introRef.current.scrollIntoView({behavior: "smooth"})
  }
  const handleExpScroll = () => {
    expRef.current.scrollIntoView({behavior: "smooth"})
  }
  
  return (
    <ul className="toc-contents">
      <li>Contents</li>
      <li onClick={handleIntroScroll}>About me</li>
      <li onClick={handleExpScroll}>Experience</li>
      <li>My Skills</li>
      <li>Github</li>
      <li>Linkedin</li>
      <li>Email</li>
    </ul>
  )
}

export default Toc;