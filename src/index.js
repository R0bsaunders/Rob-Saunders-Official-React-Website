import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css';
import './styles/index.css';
import App from './App';
import ScrollToTop from './Routers/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <ScrollToTop />
    <App />
  </Router>
);
