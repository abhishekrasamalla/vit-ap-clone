import React from 'react';
import './NumberAtGlance.css';
import NumberGlance from '../assets/NumberAtGlance.jpg'; 


const NumberAtGlance = () => {
  return (
    <div className="number-at-glance-container">
      <div className="number-at-glance-content">
        {/* Left: Image */}
        <div className="image-section">
          <img
            src={NumberGlance} 
            alt="Achievement"
            className="achievement-image"
          />
        </div>

        {/* Right: Text */}
        <div className="text-section">
          <h2 className="title">Number At Glance</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. 
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. 
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>

      {/* Top Recruiters */}
      <div className="top-recruiters-container">
        <div className="top-recruiters-label">Top Recruiters</div>
        <div className="recruiters-scroll">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="recruiter-logo-placeholder" />
          ))}
        </div>
        <div className="carousel-buttons">
          <button className="carousel-btn">&#x276E;</button>
          <button className="carousel-btn">&#x276F;</button>
        </div>
      </div>
    </div>
  );
};

export default NumberAtGlance;
