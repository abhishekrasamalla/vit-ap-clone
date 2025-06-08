// src/components/About.js
import React from 'react';
import './About.css';
import campusImage from '../assets/vit-campus.jpg'; // Add this image to src/assets/

const About = () => {
  return (
    <div className="about-section">
      <div className="about-left">
        <h2>About VIT-AP</h2>
        <img src={campusImage} alt="VIT-AP Campus" />
        <p>VIT-AP University is one of India's Best Top Emerging Universities</p>
        <div className="stats">
          <div><h3>100 <span>+</span></h3><p>Students</p></div>
          <div><h3>1</h3><p>Schools</p></div>
          <div><h3>100 <span>+</span></h3><p>Faculty</p></div>
          <div><h3>100 <span>+</span></h3><p>Publications</p></div>
        </div>
      </div>

      <div className="about-right">
        <div className="announcement-header">
          <h3>OUR ANNOUNCEMENTS</h3>
          <span className="view-more">View More ▬</span>
        </div>
        <ul className="announcements">
          {[
            { date: "13TH SEP, 2023", title: "VITREE January 2024 - Apply Now" },
            { date: "17TH SEP, 2023", title: "VITREE January 2024 - Apply Now" },
            { date: "29TH MAY, 2023", title: "VITREE January 2024 - Apply Now" },
            { date: "29TH MAY, 2023", title: "VITREE January 2024 - Apply Now" },
            { date: "17TH SEP, 2023", title: "VITREE January 2024 - Apply Now" },
            { date: "29TH MAY, 2023", title: "VITREE January 2024 - Apply Now" },
          ].map((item, i) => (
            <li key={i}>
              <span>{item.date}</span>
              <p>{item.title}</p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;
