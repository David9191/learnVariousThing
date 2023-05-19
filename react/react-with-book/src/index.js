import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import NewsApp from './news-viewr/NewsApp';
import { BrowserRouter } from '../node_modules/react-router-dom/dist/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <NewsApp />
    </React.StrictMode>
  </BrowserRouter>,
);

reportWebVitals();
