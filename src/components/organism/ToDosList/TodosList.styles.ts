import styled from 'styled-components';

export const ItemListsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.black};
  width: 70%;
  height: 80%;
`;

export const SearchSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
`;

export const ListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  color: white;
  font-size: 50px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
