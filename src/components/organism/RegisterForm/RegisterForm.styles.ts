import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 80%;
  padding: 30px;
  min-width: 400px;
  border-radius: 8px;
`;
export const TittleSectionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTittle = styled.h1`
  color: ${({ theme }) => theme.colors.orange};
  font-weight: bold;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;
