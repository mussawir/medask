import React from 'react';
import '../App.css';
import cardOneImage from '../images/cardOne.png';
import cardTwoImage from '../images/cardtwo.png';
import cardThreeImage from '../images/cardthree.png';

interface Article {
  date: string;
  title: string;
  description: string;
  link: string;
  image: string;
  dateColor: string;
}

const NewsSection: React.FC = () => {
  const articles: Article[] = [
    {
      date: 'FEB 01, 2024',
      title: 'LP in AFI, AFBMTC',
      description:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non',
      link: '/aboutus',
      image: cardOneImage,
      dateColor: '#28156D',
    },
    {
      date: 'DEC 01, 2023',
      title: 'Tourism Expo September 2024',
      description:
        'MedAsk participated in the Tourism Expo in Islamabad , Pakistan on September 26,2024   engaging with  leading public and private tourism companies.',
        link: '/aboutus',
      image: cardTwoImage,
      dateColor: '#00AA14',
    },
    {
      date: 'NOV 01, 2023',
      title: 'Health Asia Expo October 2024',
      description:
        'It sounds like MedAsk had a significant presence at the 21st Health Asia Expo! Participating in various conferences such as medical tourism, gynecology, transfusion.                           ',
        link: '/aboutus',
      image: cardThreeImage,
      dateColor: '#28156D',
    },
  ];

  return (
    <section className="news-section">
      <h2 className="news-heading">News And Articles</h2>
      <h3 className="news-subheading">Latest News/Articles</h3>
      <div className="news-cards-container">
        {articles.map((article, index) => (
          <div key={index} className="news-item">
            <div
              className="news-date"
              style={{ backgroundColor: article.dateColor }}
            >
              {article.date}
            </div>
            <div className="news-card">
              <div
                className="news-image"
                style={{ backgroundImage: `url(${article.image})` }}
              ></div>
              <div className="news-content">
                <h4 className="news-title">{article.title}</h4>
                <hr className='news-hr' />
                <p className="news-description">{article.description}</p>
                <a className="read-more-link" href={article.link}>
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
