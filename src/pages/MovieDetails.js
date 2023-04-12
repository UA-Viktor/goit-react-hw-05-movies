import { Suspense, useRef, useState, useEffect, memo } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import moviesAPI from '../services/movies-api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await moviesAPI.searchMoviesID(movieId);
        setMovie(response);
      } catch (error) {
        setError('Ошибка при получении информации о фильме');
      }
    };
    fetchMovie();
  }, [movieId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>

      <h1>MovieDetails: {movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={movie.title}
      />
      <ul>
        <li>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default memo(MovieDetails);
