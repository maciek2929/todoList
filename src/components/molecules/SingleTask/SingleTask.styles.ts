import styled from 'styled-components';

export const SingleTaskWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

export const StyledInput = styled.input`
  border: none;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  width: 92%;
  border-bottom: 2px solid orange;
`;

export const StyledCheckbox = styled.input`
  width: 5%;
  height: 15px;
  border: 2px solid black;
  background-color: ${({ theme }) => theme.colors.gray};
  color: green;
`;
