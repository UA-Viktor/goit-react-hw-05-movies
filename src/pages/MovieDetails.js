import { Suspense, useRef, useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import moviesAPI from '../services/movies-api';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  const [movie, setMovie] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    moviesAPI.fetchMovies(movieId).then(response => {
      setMovie(response);
    });
  }, [movieId]);

  console.log(movie);

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
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
