import { useState, useEffect, memo } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import moviesAPI from '../services/movies-api';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') || ''
  );

  useEffect(() => {
    moviesAPI.searchMovies(searchQuery).then(res => setMovies(res));
    setSearchQuery('');
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
    moviesAPI.searchMovies(searchQuery).then(res => setMovies(res));
    setSearchQuery('');
  };

  const handleInputChange = e => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Movies);
