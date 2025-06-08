// src/components/Events.js

import React from 'react';
import './Events.css';
import eventImg from '../assets/event.jpg'; // Replace with your image path

const Events = () => {
  return (
    <section className="events-section">
      <div className="events-header">
        <div>
          <h2>Our Events</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <span className="see-all">See all</span>
      </div>

      <div className="events-gallery">
        {[1, 2, 3].map((_, i) => (
          <div className="event-card" key={i}>
            <img src={eventImg} alt="Event" />
            <div className="event-info">
              <h4>VTAPP International Tech Fest by VIT-AP</h4>
              <div className="date-tag">19th Sept</div>
            </div>
          </div>
        ))}
      </div>

      <div className="event-listing">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <div className="event-row" key={i}>
            <div className="event-date">
              <span className="day">04</span>
              <span className="month">Apr</span>
            </div>
            <div className="event-details">
              <h4>CSI Meet’n Greet’23</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. A nulla donec cursus tincidunt egestas
                eget dolor ultricies neque. Interdum
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
