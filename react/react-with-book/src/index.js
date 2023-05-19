import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
} from '../node_modules/react-router-dom/dist/index';
import RouterApp from './router-turorial/RouterApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <RouterApp />
    </React.StrictMode>
  </BrowserRouter>,
);

reportWebVitals();
