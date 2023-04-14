import { Suspense, useRef, useState, useEffect, memo } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import moviesAPI from '../services/movies-api';
import { MovieDetailsContainer, LinkUl } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [genres, setGenres] = useState([]);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await moviesAPI.searchMoviesID(movieId);
        setMovie(response);
        setGenres(response.genres.map(genre => genre.name));
      } catch (error) {
        setError('Ошибка при получении информации о фильме');
      }
    };
    fetchMovie();
  }, [movieId]);

  if (error) {
    return <div>{error}</div>;
  }

  const formatRuntime = runtime => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  console.log(movie);

  return (
    <>
      <MovieDetailsContainer>
        <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>
      </MovieDetailsContainer>

      <MovieDetailsContainer>
        {movie && (
          <>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div>
              <h2> {movie.title}</h2>
              <h4> Слоган фильма: {movie.tagline}</h4>
              <p>Год: {movie?.release_date?.slice(0, 4)}</p>
              <p>Жанры: {genres?.join(', ')}</p>
              <p>
                Бюджет: $ {parseFloat(movie?.budget).toLocaleString('en-US')}
              </p>
              <p>
                Кассовые сборы: ${' '}
                {parseFloat(movie?.revenue).toLocaleString('en-US')}
              </p>
              <p>Рейтинг фильма: {movie.vote_average}</p>
              <p>Количество головов: {movie.vote_count} </p>
              <p>Продолжительность: {formatRuntime(movie.runtime)}</p>
            </div>
          </>
        )}
      </MovieDetailsContainer>

      <MovieDetailsContainer>
        <LinkUl>
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
        </LinkUl>
      </MovieDetailsContainer>

      <MovieDetailsContainer>
        <Suspense fallback={<div>LOADING SUBPAGE...</div>}>
          <Outlet />
        </Suspense>
      </MovieDetailsContainer>
    </>
  );
};

export default memo(MovieDetails);
