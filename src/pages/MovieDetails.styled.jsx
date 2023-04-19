import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ButtonBackLink = styled(Link)`
  text-decoration: none;
  color: #161900;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ButtonBack = styled.button`
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  font-size: 16px;
  font-weight: 500;

  color: #161900;

  &active {
    color: #666;
    box-shadow: 0px 0px 30px -7px rgba(0, 0, 0, 0.45);
  }
`;

export const LinkUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const MovieInformationIMG = styled.div`
  overflow: hidden;
  margin-right: 40px;
  box-shadow: 0px 0px 30px -7px rgba(0, 0, 0, 0.75);
  border-radius: 10px 10px 10px 10px;
`;

export const MovieInformation = styled.div``;

export const MovieTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;

export const MovieTagline = styled.h4`
  font-size: 20px;
  font-style: italic;
  margin-bottom: 50px;
`;

export const MovieDetail = styled.p`
  font-size: 17px;
  margin-bottom: 20px;
`;
