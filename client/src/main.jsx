import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './features/app/App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 