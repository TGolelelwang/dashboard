import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function NewsWidget() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=soccer&apiKey=1c618b6b4bc4400daa2e07b00e2e834a`
        );
        setNewsArticles(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>Error loading news: {error}</p>;
  }

  return (
    <div>
      <p>News Widget</p>
      {newsArticles.slice(0, 5).map((article, index) => ( // Limit to 6 articles
        <Card
          key={index}
          imgSrc={article.urlToImage || 'https://via.placeholder.com/150'}
          title={article.title}
          desc={article.description}
        />
      ))}
    </div>
  );
}

export default NewsWidget;
