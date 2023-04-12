import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '09e88d7dd6157842e835fc31a8c547c7';

const searchMoviesTrending = () => {
  return axios
    .get('/trending/movie/week', {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => response.data.results);
};

const searchMovies = query => {
  return axios
    .get('/search/movie', {
      params: {
        api_key: API_KEY,
        query: query,
      },
    })
    .then(response => response.data.results);
};

const searchMoviesID = id => {
  return axios
    .get('/movie/' + id, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => response.data);
};

const searchMoviesIDcredits = id => {
  return axios
    .get('/movie/' + id + '/credits', {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => response.data.cast);
};

const searchMoviesIDreviews = id => {
  return axios
    .get('/movie/' + id + '/reviews', {
      params: {
        api_key: API_KEY,
      },
    })
    .then(response => response.data.results);
};

const moviesAPI = {
  searchMoviesTrending,
  searchMovies,
  searchMoviesID,
  searchMoviesIDcredits,
  searchMoviesIDreviews,
};

export default moviesAPI;
