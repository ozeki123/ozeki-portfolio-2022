import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({navState, setNavState}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let activeStyle = 
    pathname.includes("projects") ? {color: "black"} : {color: "white"}
  return (
    <nav className="nav-container">
      <ul className="nav-items">
        <li className="top-left">
          <NavLink to="/projects" onClick={setNavState("projects")} state={{from:pathname}}>
            <p>AO</p>
          </NavLink>
        </li>
        <li className="top-right">
          <NavLink to="/projects" onClick={setNavState("projects")} state={{from:pathname}} style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            <p className="nav-projects">Projects</p>
          </NavLink>
          <NavLink onClick={(e) => {e.preventDefault(); setNavState('about'); setTimeout(() => {navigate("/about")}, 10); }}  to="/about" style={({ isActive }) =>
          isActive ? activeStyle : undefined
          }>
            <p>About</p>
          </NavLink>
        </li>
        <li className="bottom-left">
          <ul>
            <li><a target="_blank" href="https://www.linkedin.com/in/andrew-ozeki-86984b172/">Linkedin</a></li>
            <li><a target="_blank" href="https://github.com/ozeki123">Github</a></li>
            <li><a target="_blank" href="https://github.com/ozeki123/ozeki-blog">Blog</a></li>
          </ul>
          
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;