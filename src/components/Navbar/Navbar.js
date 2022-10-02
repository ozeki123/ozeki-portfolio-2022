import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const { pathname } = useLocation();
  let activeStyle = 
    pathname.includes("projects") ? {color: "black"} : {color: "white"}
    
  
  return (
    <nav className="nav-container">
      <ul className="nav-items">
        <li className="top-left">
          <NavLink to="/projects" state={{from:pathname}} style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Projects
          </NavLink>
        </li>
        <li className="top-right">
          <NavLink to="/about" style={({ isActive }) =>
          isActive ? activeStyle : undefined
        }>About</NavLink>
        </li>
        <li className="bottom-left">
          Contact
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;