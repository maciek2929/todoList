import styled from 'styled-components';

export const Input = styled.input`
  width: 400px;
  height: 40px;
  border: 1px solid #c0c7d6;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  margin: 15px;
  padding: 10px;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
