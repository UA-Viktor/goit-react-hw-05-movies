import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 15px;

  display: flex; /* используем flexbox для элементов списка */
  flex-wrap: wrap; /* позволяет элементам переноситься на новую строку */
  list-style: none; /* убираем маркеры списка */
  padding: 0; /* убираем отступы вокруг списка */
`;

export const Item = styled.li`
  flex: 0 0 200px; /* задаем каждому элементу фиксированную ширину в 200px */
  margin-left: 20px; /* добавляем небольшой отступ между элементами списка */
  margin-right: 20px; /* добавляем небольшой отступ между элементами списка */
  margin-bottom: 20px; /* добавляем отступ снизу каждого элемента списка */
`;
