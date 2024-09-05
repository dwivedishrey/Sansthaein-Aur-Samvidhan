import React from 'react';
import { Link } from 'react-router-dom';
import './article.css'; 
const articles = [
  { id: 1, title: 'Meet the President', description: 'Learn about the President and what they do.', image: '/president.jpg' },
  { id: 2, title: 'How a Law is Made', description: 'Discover the steps involved in making a law.', image: '/law.jpg' },
  { id: 3, title: 'The Court System', description: 'Understand how courts work in India.', image: '/court.webp' },
];

const ArticleList = () => {
  return (
    <div className="article-list">
      <h1>Learn About Your Constitution!</h1>
      <div className="articles">
        {articles.map((article) => (
          <div className="article-card" key={article.id}>
            <img src={article.image} alt={article.title} className="article-image" />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <Link to={`/articles/${article.id}`} className="read-more-button">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
