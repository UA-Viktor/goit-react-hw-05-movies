import React from 'react';
import { Link } from 'react-router-dom';
import { List, Item, Article } from './MoviesList.styled';
import img from '../../img/no_name.png';

const MoviesList = ({ movies, location }) => (
  <List>
    {movies.map(({ id, poster_path, release_date, title, vote_average }) => (
      <Item key={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <Article>
            {poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={title}
                // width="250px"
                // height="350px"
              />
            ) : (
              <img src={`${img}`} alt={title} width="250px" height="350px" />
            )}
            <h2>{title}</h2>
            <p>{release_date}</p>
            <p>{vote_average}</p>
          </Article>
        </Link>
      </Item>
    ))}
  </List>
);

export default MoviesList;
