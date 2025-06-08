// src/components/Programs.js

import React, { useState } from 'react';
import './Programs.css';

const tabs = ['Undergraduate', 'Integrated', 'Postgraduate', 'Doctorial'];

const undergraduatePrograms = [
  "B.Tech in Computer Science and Engineering",
  "B.Tech in Computer Science and Engineering Specialization in AI",
  "B.Tech in Computer Science and Engineering Specialization in Data Analytics",
  "B.Tech in Computer Science and Engineering Specialization in Network and Security",
  "B.Tech in Computer Science and Engineering Specialization in Robotics",
  "B.Tech in Electronics and Computers Engineering Specialization in VLSI",
];

const Programs = () => {
  const [activeTab, setActiveTab] = useState('Undergraduate');

  return (
    <section className="programs-section">
      <div className="programs-left">
        <h2>Programs Offered</h2>
        <p>
          Program covers the entire spectrum of new-age specializations. This program
          seamlessly integrates basic science concepts to the latest technologies with
          relevant practice through lab and projects for building problem-solving skills.
        </p>

        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-button ${tab === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="programs-right">
        <div className="programs-box">
          <h4>Engineering</h4>
          <ul>
            {undergraduatePrograms.map((program, index) => (
              <li key={index}>{program}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Programs;
