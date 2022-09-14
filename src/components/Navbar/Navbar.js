import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/" className="nav-title">
          <li>Andrew Ozeki</li>
        </Link>
        <li className="nav-desc">Front end Developer based in tokyo</li>
        <div className="nav-links">
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/projects">
            <li>Projects</li>
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar;