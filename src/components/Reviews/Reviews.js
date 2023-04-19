import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moviesAPI from '../../services/movies-api';
import { CastP } from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await moviesAPI.searchMoviesIDreviews(movieId);
        setMovieReviews(response);
      } catch (error) {
        setError('Ошибка при получении отзывов');
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>{movieReviews.length > 0 && <CastP>{movieReviews[0].content}</CastP>}</>
  );
};
