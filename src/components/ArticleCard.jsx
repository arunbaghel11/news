import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <Link to={`/article/${article.title}`}>
        <img src={article.urlToImage} alt={article.title} />
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </Link>
    </div>
  );
};

export default ArticleCard;
