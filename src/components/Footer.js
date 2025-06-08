import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top Quote Section */}
      <div className="footer-quote">
        <p>“ Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur ”</p>
        <span>-Jagadish Mudiganti</span>
      </div>

      {/* Main Footer Grid */}
      <div className="footer-main">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>Careers</li>
              <li>Gallery</li>
              <li>Hostels</li>
              <li>Transport</li>
              <li>Policies</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>VIT Connect</h4>
            <ul>
              <li>V-TOP Login</li>
              <li>V-TOP Parent Login</li>
              <li>Mail</li>
              <li>Alumni</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Ranking & Accreditation</h4>
            <ul>
              <li>RAAC</li>
              <li>NAAC</li>
            </ul>
          </div>

          <div className="footer-column">
            <iframe
              title="VIT-AP Location"
              src="https://www.google.com/maps?q=VIT-AP+University&output=embed"
              width="250"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <p className="footer-address">
              <strong>VIT-AP University, Amaravathi</strong><br />
              Near Vijayawada - 522241,<br />
              Andhra Pradesh.
            </p>
            <a href="#" className="reach-link">
              HOW TO REACH VIT-AP ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom-grid">
          <div>
            <h4>Research</h4>
            <ul>
              <li>Centers</li>
              <li>Google Scholar</li>
              <li>Scopus</li>
              <li>Patents</li>
              <li>Projects</li>
              <li>Publications</li>
            </ul>
          </div>

          <div>
            <h4>Academics</h4>
            <ul>
              <li>Programs Offered</li>
              <li>Academic Calendar</li>
              <li>Application Process</li>
              <li>Fee Structure</li>
              <li>Scholarship</li>
              <li>IQAC</li>
            </ul>
          </div>

          <div>
            <h4>Information</h4>
            <ul>
              <li>Public Notice: University Act</li>
              <li>Forms</li>
              <li>Directory</li>
              <li>Feedback</li>
              <li>Academic Bank of Credit (ABC)</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
