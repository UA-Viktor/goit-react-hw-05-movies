import { useState, useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';
import moviesAPI from '../services/movies-api';

import MoviesList from '../components/MoviesList/MoviesList';
import { Headline } from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    moviesAPI.searchMoviesTrending().then(response => {
      setTrendingMovies(response);
    });
  }, []);

  console.log(trendingMovies);

  return (
    <>
      <Headline>Новинки та ТОП 20 Фільмів</Headline>

      <MoviesList movies={trendingMovies} location={location} />
    </>
  );
};

export default memo(Home);
