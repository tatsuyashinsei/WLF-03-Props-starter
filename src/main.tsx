// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import PageTitle from './components/PageTitle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PageTitle />
    <App />
  </React.StrictMode>
);
