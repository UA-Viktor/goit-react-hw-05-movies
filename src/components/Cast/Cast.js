import { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from '../../services/movies-api';
import { CastUl, CastLi, CastImg, CastP } from './Cast.styled';
import img from '../../img/no_name.png';

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

  console.log(movieCast);

  return (
    <>
      <CastUl>
        {movieCast.slice(0, 10).map(movie => (
          <CastLi key={movie.id}>
            {movie.profile_path ? (
              <CastImg
                src={`https://image.tmdb.org/t/p/w300/${movie.profile_path}`}
                alt={movie.id}
              />
            ) : (
              <CastImg src={`${img}`} alt={movie.name} />
            )}

            <CastP>{movie.name}</CastP>
          </CastLi>
        ))}
      </CastUl>
    </>
  );
};

export default memo(Cast);
