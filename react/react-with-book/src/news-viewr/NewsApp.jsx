import React, { useCallback, useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const NewsApp = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default NewsApp;
