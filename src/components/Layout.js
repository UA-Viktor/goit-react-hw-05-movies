import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Container, NavUl } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <Container>
          <NavUl>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </NavUl>
        </Container>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};
