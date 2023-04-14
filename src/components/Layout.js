import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  HeaderMain,
  HeaderContainer,
  StyledLink,
  Container,
  NavUl,
} from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <HeaderMain>
        <HeaderContainer>
          <NavUl>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </NavUl>
        </HeaderContainer>
      </HeaderMain>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <footer></footer>
    </>
  );
};
