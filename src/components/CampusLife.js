// src/components/CampusLife.js

import React from 'react';
import './CampusLife.css';

// Replace with your actual image paths in src/assets
import img1 from '../assets/life1.jpg';
import img2 from '../assets/life2.jpg';
import img3 from '../assets/life3.jpg';
import img4 from '../assets/life4.jpg';
import img5 from '../assets/life5.jpg';
import img6 from '../assets/life6.jpg';
import img7 from '../assets/life7.jpg';
import img8 from '../assets/life8.jpg';
import img9 from '../assets/life9.jpg';

const CampusLife = () => {
  return (
    <section className="campus-life-section">
      <div className="life-grid">
        <img src={img1} alt="Gym" />
        <img src={img2} alt="Electronics Lab" />
        <img src={img3} alt="Chemistry Lab" />
        <img src={img4} alt="Electrical Lab" />

        <div className="life-center">
          <p className="life-subtitle">Explore our campus</p>
          <h2 className="life-title">Life <span>@</span> VIT-AP</h2>
          <p className="life-desc">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur amet consectetur.
          </p>
          <button className="life-button">EXPLORE</button>
        </div>

        <img src={img5} alt="Basketball" />
        <img src={img6} alt="Ping Pong" />
        <img src={img7} alt="Canteen" />
        <img src={img8} alt="Library" />
      </div>
    </section>
  );
};

export default CampusLife;
