import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">VIT-AP <span>UNIVERSITY</span></div>
      <ul className="nav-links">
        <li>About</li>
        <li>Admissions</li>
        <li>Academics</li>
        <li>Career Development Centre</li>
        <li>Campus Life</li>
        <li>Research</li>
      </ul>
      <div className="extras">
        <span>Alumni</span>
        <span>VIT-AP Advantages</span>
        <span>🔍</span>
        <span>360°</span>
      </div>
    </nav>
  );
};

export default Navbar;