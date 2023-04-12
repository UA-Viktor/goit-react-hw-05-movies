import { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from '../services/movies-api';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await moviesAPI.searchMoviesIDcredits(movieId);
        setMovieCast(response);
      } catch (error) {
        setError('Ошибка при получении актерского состава');
      }
    };

    fetchMovieCast();
  }, [movieId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div>Cast: {movieId}</div>

      <ul style={{ display: 'flex' }}>
        {movieCast.slice(0, 10).map(movie => (
          <li key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.profile_path}`}
              alt={movie.id}
              width="60px"
            />
            <p>{movie.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(Cast);
