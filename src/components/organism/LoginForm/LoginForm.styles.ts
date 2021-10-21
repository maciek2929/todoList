import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledP = styled(Link)`
  color: orange;
`;
export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  span {
    color: white;
  }
`;

export const Btn = styled.h1`
  color: orange;
  cursor: pointer;
`;
