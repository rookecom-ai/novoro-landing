import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}
if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname + window.location.search);
}
window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
window.addEventListener('load', () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
