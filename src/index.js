import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App key={(Date.now() + 10)}/>
  </BrowserRouter>,
  document.getElementById('root')
);
