// src/components/Research.js

import React from 'react';
import './Research.css';
import img1 from '../assets/research1.jpg'; // Campus view
import img2 from '../assets/research2.jpg'; // Lab experiment
import img3 from '../assets/research3.jpg'; // Students talking

const Research = () => {
  return (
    <section className="research-section">
      <h2 className="research-title">Research And Innovation</h2>

      <div className="research-images">
        <img src={img1} alt="Campus View" />
        <img src={img2} alt="Lab Work" />
        <img src={img3} alt="Discussion" />
        <div className="quality-banner">Top Quality and Learning Experience</div>
      </div>

      <div className="research-stats">
        <div className="stat">
          <h3>1000 +</h3>
          <p>Publications</p>
        </div>
        <div className="stat">
          <h3>300 +</h3>
          <p>Patents</p>
        </div>
        <div className="stat">
          <h3>1.5Cr +</h3>
          <p>Sponsored Budget</p>
        </div>
      </div>
    </section>
  );
};

export default Research;
