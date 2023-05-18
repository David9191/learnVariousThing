import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ImmerApp from './immer-tutorial/ImmerApp';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ImmerApp />
  </React.StrictMode>,
);

reportWebVitals();
