import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: '60px',
        color: 'white'
      }}
    >
      <div className="hero-content">
        <h1>Welcome to <br /><strong>VIT-AP University</strong></h1>
        <p>APPLY KNOWLEDGE, IMPROVE LIFE</p>
        <button className="contact-btn">Contact Us →</button>
      </div>
    </div>
  );
};

export default Hero;
