import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

interface Article {
  id: number; // Add ID to match the database schema
  date: string;
  title: string;
  description: string;
  link: string;
  image: string;
  dateColor: string;
}

const NewsSection: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/articles'); // Adjust to your server's URL
        setArticles(response.data);
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Error fetching articles');
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (articles.length > 3) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
      }, 10000); // Change articles every 10 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [articles]);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>{error}</div>; // Error state
  }

  // Prepare articles to display (always show 3 articles, and bring in the next article from the right)
  const displayedArticles = [
    articles[currentIndex % articles.length],
    articles[(currentIndex + 1) % articles.length],
    articles[(currentIndex + 2) % articles.length],
  ];

  return (
    <section className="news-section">
      <h2 className="news-heading">News And Articles</h2>
      <h3 className="news-subheading">Latest News/Articles</h3>
      <div className="news-cards-container">
        {displayedArticles.map((article) => (
          <div key={article.id} className="news-item">
            <div className="news-date" style={{ backgroundColor: article.dateColor }}>
              {article.date}
            </div>
            <div className="news-card">
              <div className="news-image">
                <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="news-content">
                <h4 className="news-title">{article.title}</h4>
                <hr className="news-hr" />
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
