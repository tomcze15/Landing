import React from 'react';
import ReactDOM from 'react-dom';
import App from './view/App';

import '@/index.css';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
