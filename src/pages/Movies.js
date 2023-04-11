import { useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([
    '504949',
    '420818',
    '272',
    '123446',
    '35443',
  ]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  // useEffect(() => {
  //   // HTTP запрос, если нужно
  //   setMovies();
  // }, []);

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const visibleMovies = movies.filter(movie => movie.includes(movieId));

  return (
    <div>
      <input type="text" value={movieId} onChange={updateQueryString} />
      <ul>
        {visibleMovies.map(movie => {
          return (
            <li key={movie}>
              <Link to={`${movie}`} state={{ from: location }}>
                {movie}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Movies;
