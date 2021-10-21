import styled from 'styled-components';
import { LogoutBtn } from '../../../components/atoms/LogoutBtn/LogoutBtn';

const NavWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.h1`
  font-weight: bold;
  font-family: 'ZCOOLKuaiLe', serif;
  font-size: 60px;
  color: ${({ theme }) => theme.colors.orange};
`;

export const Navigation = () => {
  return (
    <NavWrapper>
      <StyledLogo>ToDo-List</StyledLogo>
      <LogoutBtn></LogoutBtn>
    </NavWrapper>
  );
};
