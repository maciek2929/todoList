import { FormField } from '../../molecules/FormField/FormField';
import { ActionBtn } from '../../atoms/ActionBtn/ActionBtn';
import { Wrapper, StyledTittle, FormWrapper } from '../RegisterForm/RegisterForm.styles';
import { BottomSection, Btn } from './LoginForm.styles';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../providers/useAuth';
import { useError } from '../../molecules/ErrorMessage/useError';
import { isLengthValid } from '../../../validators/validators';

export interface LoginModel {
  login: string;
  password: string;
}

interface LoginFormState {
  login: string;
  password: string;
}

const initialLoginState: LoginFormState = {
  login: '',
  password: '',
};

export const LoginForm = () => {
  const [loginFormValues, setLoginFormValues] = useState<LoginFormState>({ ...initialLoginState });
  let history = useHistory();
  const { dispatchError } = useError();

  // @ts-ignore //
  const { singIn } = useAuth();
  const errObj = useError();
  console.log('this is error object', errObj);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setLoginFormValues((f: LoginFormState) => ({ ...f, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = async (e: any) => {
    try {
      if (isLengthValid(loginFormValues.login) && isLengthValid(loginFormValues.password)) dispatchError('  form values is not correct');
      e.preventDefault();
      await singIn(loginFormValues);
    } catch (e) {
      dispatchError('Wrong Login, try again');
    }
  };

  return (
    <Wrapper>
      <StyledTittle>Login</StyledTittle>
      <FormWrapper as="form" onSubmit={handleSubmit}>
        <FormField label="Email or Username" name="login" id="login" type="text" onChange={handleChange} value={loginFormValues.login} />
        <FormField label="Password" name="password" id="password" type="password" onChange={handleChange} value={loginFormValues.password} />
        <ActionBtn name="Login" styles={{ width: '60%', height: '40%', background: 'orange', margin: '10px' }} />
      </FormWrapper>
      <BottomSection>
        <span>or</span>
        <Btn onClick={() => history.push('/register')}>Create an account </Btn>
      </BottomSection>
    </Wrapper>
  );
};
