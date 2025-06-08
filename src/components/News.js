// src/components/News.js

import React from 'react';
import './News.css';
import newsImg from '../assets/news.jpg'; // replace with actual image path

const newsItems = [
  {
    id: 1,
    date: '04-10-2023',
    title: 'Honorable CM to VIT-APHonorableHonorableHonorableHonorable',
    image: newsImg,
  },
  {
    id: 2,
    date: '27-09-2023',
    title: 'Honorable CM to VIT-APHonorableHonorableHonorableHonorable',
    image: newsImg,
  },
  {
    id: 3,
    date: '09-11-2023',
    title: 'Honorable CM to VIT-APHonorableHonorableHonorableHonorable',
    image: newsImg,
  },
];

const News = () => {
  return (
    <section className="news-section">
      <div className="news-header">
        <h2>News about <span>VIT-AP</span></h2>
        <div className="news-see-all">
          <span>See all</span>
          <div className="underline"></div>
        </div>
      </div>

      <div className="news-cards">
        {newsItems.map((item) => (
          <div className="news-card" key={item.id}>
            <img src={item.image} alt="news" />
            <div className="news-content">
              <p className="news-date">Date: {item.date}</p>
              <h3 className="news-title">{item.title}</h3>
              <div className="news-footer">
                <span>→</span>
                <p>EXPLORE NEWS</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
