import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../redux/articlesSlice';
import ArticleList from '../components/Article';
import CategoryFilter from '../components/Category';
import Pagination from '../components/Pagination';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');


  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);
  const status = useSelector((state) => state.articles.status);
  const [category, setCategory] = useState('general');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    dispatch(fetchArticles(category));
  }, [category, currentPage, dispatch]);

  useEffect(() => {
    if (status === 'succeeded') {
      setTotalPages(5); // This should be dynamically calculated based on total results
    }
  }, [status]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchArticles(searchTerm));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="homepage">
      <CategoryFilter currentCategory={category} onSelectCategory={handleCategoryChange} />
      {status === 'loading' ? (
        <LoadingSpinner />
      ) : (
        <ArticleList articles={articles} />
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default HomePage;
