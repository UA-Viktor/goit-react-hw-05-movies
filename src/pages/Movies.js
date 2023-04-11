import { Link } from 'react-router-dom';

const Movies = () => {
  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <div>
      <ul>
        {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(movie => {
          return (
            <li>
              <Link key={movie} to={`${movie}`}>
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
