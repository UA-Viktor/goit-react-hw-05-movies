import { useState, useEffect } from 'react';

import moviesAPI from '../services/movies-api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(response => {
      setTrendingMovies(response);
    });
  }, []);

  return (
    <>
      <div>Домашняя страница</div>

      <ul>
        {trendingMovies.map(movie => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
