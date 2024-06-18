import React from 'react';

const categories = ['Business', 'Technology', 'Entertainment', 'Sports', 'Health', 'Science'];

const CategoryFilter = ({ currentCategory, onSelectCategory }) => {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          className={currentCategory === category.toLowerCase() ? 'active' : ''}
          onClick={() => onSelectCategory(category.toLowerCase())}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
