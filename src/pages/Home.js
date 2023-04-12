import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import moviesAPI from '../services/movies-api';

const Home = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    moviesAPI.searchMoviesTrending().then(response => {
      setTrendingMovies(response);
    });
  }, []);

  return (
    <>
      <div>ТОП 20 Фильмов</div>

      <ul>
        {trendingMovies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
