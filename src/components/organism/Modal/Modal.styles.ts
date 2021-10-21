import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 70%;
  min-height: 90%;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0.3);
  padding: 2%;
`;
export const ModalInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #c0c7d6;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 25px;
  padding: 2%;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;

export const MainBtnsContainer = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddTasksWrapper = styled.div`
  align-self: flex-end;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const StyledHr = styled.hr`
  width: 100%;
  z-index: 2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 3px;
  margin-top: 10px;
  border-radius: 10%;
  background-color: orange;
`;

export const NameWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
`;
