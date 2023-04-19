import { Suspense, useRef, useState, useEffect, memo } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import moviesAPI from '../services/movies-api';
import {
  MovieDetailsContainer,
  LinkUl,
  MovieInformation,
  MovieInformationIMG,
  ButtonBack,
  ButtonBackLink,
  MovieTitle,
  MovieTagline,
  MovieDetail,
} from './MovieDetails.styled';
import img from '../../src/img/no_name.png';

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
        <ButtonBack>
          <ButtonBackLink to={backLinkLocationRef.current}>
            Назад к странице коллекции
          </ButtonBackLink>
        </ButtonBack>{' '}
      </MovieDetailsContainer>

      <MovieDetailsContainer>
        {movie && (
          <>
            <MovieInformationIMG>
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <img
                  src={`${img}`}
                  alt={movie.title}
                  width="300px"
                  height="450px"
                />
              )}
            </MovieInformationIMG>
            <MovieInformation>
              <MovieTitle> {movie.title}</MovieTitle>
              <MovieTagline> Слоган фильма: {movie.tagline}</MovieTagline>
              <MovieDetail>Год: {movie?.release_date?.slice(0, 4)}</MovieDetail>
              <MovieDetail>Жанры: {genres?.join(', ')}</MovieDetail>
              <MovieDetail>
                Бюджет: $ {parseFloat(movie?.budget).toLocaleString('en-US')}
              </MovieDetail>
              <MovieDetail>
                Кассовые сборы: ${' '}
                {parseFloat(movie?.revenue).toLocaleString('en-US')}
              </MovieDetail>
              <MovieDetail>Рейтинг фильма: {movie.vote_average}</MovieDetail>
              <MovieDetail>Количество головов: {movie.vote_count} </MovieDetail>
              <MovieDetail>
                Продолжительность: {formatRuntime(movie.runtime)}
              </MovieDetail>
            </MovieInformation>
          </>
        )}
      </MovieDetailsContainer>

      <MovieDetailsContainer>
        <LinkUl>
          <li>
            <ButtonBack>
              <ButtonBackLink to="cast" state={{ from: location }}>
                Cast
              </ButtonBackLink>
            </ButtonBack>
          </li>
          <li>
            <ButtonBackLink to="reviews" state={{ from: location }}>
              <ButtonBack>Reviews</ButtonBack>
            </ButtonBackLink>
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
