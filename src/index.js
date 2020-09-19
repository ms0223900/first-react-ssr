import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './constants/Routes';

ReactDOM.render(
  <BrowserRouter>
    {renderRoutes(Routes)}
  </BrowserRouter>,
  document.getElementById('root')
);
