// src/components/SocialWall.js

import React from 'react';
import './SocialWall.css';
import sampleImage from '../assets/social.jpg'; // Replace with actual path
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebookF, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaInstagram />, text: 'Follow us on Instagram' },
  { icon: <FaTwitter />, text: 'Tweet with us on X' },
  { icon: <FaLinkedin />, text: 'Grow with us on LinkedIn' },
  { icon: <FaFacebookF />, text: 'Like us on Facebook' },
  { icon: <FaYoutube />, text: 'Watch us on Youtube' },
];

const SocialWall = () => {
  return (
    <section className="social-wall">
      <div className="social-left">
        <p className="sub-heading">Stay Connected</p>
        <h2>The Wall of Socials from <span>VIT-AP</span></h2>
        <p className="follow-heading">Follow us on our Socials</p>
        <ul>
          {socialLinks.map((item, index) => (
            <li key={index}>
              <span className="icon">{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      <div className="social-right">
        <div className="column">
          <img src={sampleImage} alt="Social post" />
          <img src={sampleImage} alt="Social post" />
          <img src={sampleImage} alt="Social post" />
        </div>
        <div className="column">
          <img src={sampleImage} alt="Social post" />
          <img src={sampleImage} alt="Social post" />
        </div>
        <div className="column">
          <img src={sampleImage} alt="Social post" />
          <img src={sampleImage} alt="Social post" />
          <img src={sampleImage} alt="Social post" />
        </div>
      </div>
    </section>
  );
};

export default SocialWall;
