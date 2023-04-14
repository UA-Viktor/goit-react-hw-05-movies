import React from 'react';
// import { Link } from 'react-router-dom';
import {
  List,
  Item,
  Article,
  Title,
  ReleaseDate,
  VoteAverage,
  Imeg,
  LinkStyled,
  InfoMain,
  Info,
} from './MoviesList.styled';
import img from '../../img/no_name.png';

const MoviesList = ({ movies, location }) => (
  <List>
    {movies.map(({ id, poster_path, release_date, title, vote_average }) => (
      <Item key={id}>
        <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
          <Article>
            {poster_path ? (
              <Imeg
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={title}
              />
            ) : (
              <Imeg src={`${img}`} alt={title} width="250px" height="350px" />
            )}
            <InfoMain>
              <Title>{title}</Title>
              <Info>
                <ReleaseDate>{release_date?.slice(0, 4)}</ReleaseDate>
                <VoteAverage>{vote_average}</VoteAverage>
              </Info>
            </InfoMain>
          </Article>
        </LinkStyled>
      </Item>
    ))}
  </List>
);

export default MoviesList;
