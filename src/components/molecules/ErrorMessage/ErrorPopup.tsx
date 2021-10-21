import { Wrapper, Title } from './ErrorPopup.styles';

const defaultErrorMessage = 'Something went wrong, please try again or contact to support';

export const ErrorPopup = ({ message = defaultErrorMessage }) => {
  return (
    <Wrapper>
      <Title>OOPS!!</Title>
      <p>{message}</p>
    </Wrapper>
  );
};
