// src/components/Schools.js

import React from 'react';
import './Schools.css';
import schoolImage from '../assets/school.jpg'; // ✅ Replace with your image path

const schoolData = [
  { title: 'School of Computer Science & Engineering' },
  { title: 'School of Electrical Science & Engineering' },
  { title: 'School of Computer Science & Engineering' },
  { title: 'School of Computer Science & Engineering' },
  { title: 'School of Computer Science & Engineering' },
  { title: 'School of Computer Science & Engineering' },
  { title: 'School of Computer Science & Engineering' },
];

const Schools = () => {
  return (
    <section className="schools-section">
      <div className="schools-header">
        <h2>Our Schools</h2>
        <p>
          At VIT-AP the entire teaching-learning process is concentrated around
          six schools. A research center is also part of the schools, that
          encourages students to participate in exciting research projects
          amongst these departments.
        </p>
      </div>
      <div className="schools-grid">
        {schoolData.map((school, index) => (
          <div className="school-card" key={index}>
            <img src={schoolImage} alt="school" />
            <div className="school-overlay">
              <h3>{school.title}</h3>
              <p>Explore Now &rarr;</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schools;
