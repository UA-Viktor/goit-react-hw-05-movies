import styled from '@emotion/styled';

export const CastUl = styled.ul`
  display: flex;
  flex-wrap: wrap; /* чтобы элементы переносились на новую строку, если ширина экрана меньше, чем ширина всех элементов списка вместе взятых */
`;

export const CastLi = styled.li`
  width: 100px; /* фиксированная ширина элемента списка */
  margin-right: 10px; /* отступ между элементами списка */
  text-align: center; /* выравнивание текста по центру */
`;

export const CastImg = styled.img`
  display: block; /* чтобы изображения не имели отступа снизу */
  margin: 0 auto; /* центрирование изображений */
  width: 100px;
  height: 150px;
`;

export const CastP = styled.p`
  margin: 5px 0 0; /* отступы для текста */
  font-size: 12px; /* размер шрифта для текста */
`;
