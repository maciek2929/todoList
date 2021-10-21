import styled from 'styled-components';
import { sortBy } from '../../../api/ToDosListsHandler';

const StyledSortBtn = styled.button`
  width: 30%;
  height: 40px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
`;

export const SortBtn = () => {
  return (
    <>
      <StyledSortBtn onClick={() => sortBy('name')}>Sort</StyledSortBtn>
    </>
  );
};
