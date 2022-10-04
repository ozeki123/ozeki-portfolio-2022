import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({navState, setNavState}) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let activeStyle = 
    pathname.includes("projects") ? {color: "black"} : {color: "white"}
  
  const handleClick = (e) => {
    e.preventDefault();
    
  }
  
  //   useEffect(() => {
  //   // console.log(pathname);
  //   // setNavState(pathname);
  // }, [pathname])
  
    
  
  return (
    <nav className="nav-container">
      <ul className="nav-items">
        <li className="top-left">
          <NavLink to="/projects" onClick={setNavState("projects")} state={{from:pathname}} style={({ isActive }) =>
            isActive ? activeStyle : undefined
          }>
            Projects
          </NavLink>
        </li>
        <li className="top-right">
          <NavLink onClick={(e) => {e.preventDefault(); setNavState('about'); setTimeout(() => {navigate("/about")}, 10); }}  to="/about" style={({ isActive }) =>
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