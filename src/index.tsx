import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// ! => falando que sempre vai retornar alguma coisa, garantindo que vai retornar algo
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);