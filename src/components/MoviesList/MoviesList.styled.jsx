import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-top: -15px;
  margin-left: -15px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

export const Item = styled.li`
  overflow: hidden;

  flex-basis: calc(100% / 5 - 15px);

  margin-top: 15px;
  margin-left: 15px;

  margin-bottom: 15px;

  box-shadow: 0px 0px 30px -7px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 10px 10px;
`;

export const Article = styled.article`
  width: 220px;
  height: 440px;
`;

export const Imeg = styled.img`
  height: 330px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;

  color: #161900;
`;

export const InfoMain = styled.div`
  height: 90px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  padding: 10px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReleaseDate = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  color: #214e50;
`;

export const VoteAverage = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  color: #214e50;
`;
