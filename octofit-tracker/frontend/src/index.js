import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './index.css';

console.log('React app starting...');
console.log('Environment: REACT_APP_CODESPACE_NAME =', process.env.REACT_APP_CODESPACE_NAME);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
