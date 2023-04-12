import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #212121;

  &.active {
    color: orangered;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 0;
`;

export const NavUl = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 44px;
`;
