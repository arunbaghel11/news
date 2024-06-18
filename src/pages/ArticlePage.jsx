import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const ArticlePage = () => {
  const { title } = useParams();
  const location = useLocation();
  const article = location.state?.article; // Optional chaining to safely access `article`

  if (!article) {
    return <div>Error: Article not found</div>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticlePage;
