import styled from 'styled-components';

export const TemplateWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.black};
  margin: 0;
  padding: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;
