import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  width: 200px;
`;

export const SearchInput = styled.input`
  flex: 1;
  margin-right: 20px;

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

  &:focus {
    outline: none;
    box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff,
      inset 4px 4px 6px #d6d6d6, inset -4px -4px 6px #ffffff;
  }
`;

export const SearchButton = styled.button`
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

  &:active {
    color: #666;
    box-shadow: 0px 0px 30px -7px rgba(0, 0, 0, 0.45);
  }
`;
