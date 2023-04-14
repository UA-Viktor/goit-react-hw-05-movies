import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-top: -15px;
  margin-left: -15px;
`;

export const Item = styled.li`
  flex-basis: calc(100% / 5 - 15px);

  margin-top: 15px;
  margin-left: 15px;

  margin-bottom: 15px;
`;

export const Article = styled.article`
  width: 220px;
  height: 440px;
`;

// overflow: hidden;
