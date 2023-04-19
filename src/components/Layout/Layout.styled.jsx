import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderMain = styled.header`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  background: #f8f8f8;
`;

export const HeaderContainer = styled.div`
  width: 1160px;
  padding: 20px;

  margin-left: auto;
  margin-right: auto;
`;

export const StyledLink = styled(NavLink)`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.33;

  color: #161900;

  text-decoration: none;

  &.active {
    color: #891d1d;
  }
`;

export const Container = styled.div`
  margin-top: 70px;

  width: 1160px;
  padding: 20px;

  margin-left: auto;
  margin-right: auto;
`;

export const NavUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
