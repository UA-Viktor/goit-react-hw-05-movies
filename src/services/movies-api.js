import axios from 'axios';

// Ключ API(v3 auth)
// 09e88d7dd6157842e835fc31a8c547c7

// Пример API - запроса
// https://api.themoviedb.org/3/movie/550?api_key=09e88d7dd6157842e835fc31a8c547c7

// Ключ доступа к API(v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWU4OGQ3ZGQ2MTU3ODQyZTgzNWZjMzFhOGM1NDdjNyIsInN1YiI6IjY0MzRmMzk2Y2NhN2RlMDA3N2FlMWQxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SpFbRMK1k8-rnoehk0hNZwKOdZpKBceooIPdVWKd55U

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '09e88d7dd6157842e835fc31a8c547c7';
// const MOVIE_ID = '420818';
// axios.defaults.headers.common['Authorization'] =
//   'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWU4OGQ3ZGQ2MTU3ODQyZTgzNWZjMzFhOGM1NDdjNyIsInN1YiI6IjY0MzRmMzk2Y2NhN2RlMDA3N2FlMWQxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SpFbRMK1k8-rnoehk0hNZwKOdZpKBceooIPdVWKd55U';

const fetchMovies = id => {
  return axios
    .get(
      // 'https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test'
      // `/movie/${MOVIE_ID}?api_key=${API_KEY}`
      `/movie/${id}?api_key=${API_KEY}`
    )
    .then(response => response.data);
};

const fetchTrendingMovies = () => {
  return axios
    .get('/trending/movie/week?api_key=' + API_KEY)
    .then(response => response.data.results);
};

const moviesAPI = {
  fetchTrendingMovies,
  fetchMovies,
};

export default moviesAPI;
