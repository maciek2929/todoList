import styled from 'styled-components';

export const ItemWrapper = styled.div`
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: whitesmoke;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.gray};
  cursor: pointer;
  padding: 2%;
  margin-bottom: 20px;
`;

export const ListName = styled.span`
  width: 30%;
`;
