import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Ключ API(v3 auth)
// 09e88d7dd6157842e835fc31a8c547c7

// Пример API - запроса
// https://api.themoviedb.org/3/movie/550?api_key=09e88d7dd6157842e835fc31a8c547c7

// Ключ доступа к API(v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWU4OGQ3ZGQ2MTU3ODQyZTgzNWZjMzFhOGM1NDdjNyIsInN1YiI6IjY0MzRmMzk2Y2NhN2RlMDA3N2FlMWQxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SpFbRMK1k8-rnoehk0hNZwKOdZpKBceooIPdVWKd55U
