import { FormField } from '../../molecules/FormField/FormField';
import { ActionBtn } from '../../atoms/ActionBtn/ActionBtn';
import { Arrow } from '../../atoms/Arrow/Arrow';
import { Wrapper, StyledTittle, FormWrapper } from './RegisterForm.styles';
import React, { useCallback, useState } from 'react';
import { handleRegister } from '../../../api/RegisterHandler';
import { useLogin } from '../../../providers/LoginProvider';
import { isEmailValid, isLengthValid } from '../../../validators/validators';
import { useError } from '../../molecules/ErrorMessage/useError';

interface FormValuesState {
  username: string;
  email: string;
  password: string;
  rPassword: string;
}

export interface RegistrationModel {
  username: string;
  email: string;
  password: string;
}

const initialState: FormValuesState = {
  username: '',
  email: '',
  password: '',
  rPassword: '',
};

export const RegisterForm = () => {
  const [formValues, setFormValues] = useState<FormValuesState>({ ...initialState });
  const { setIsLogged } = useLogin();
  const { dispatchError } = useError();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setFormValues((f) => ({ ...f, [e.target.name]: e.target.value }));
  }, []);

  const handleSubmit = async (e: any) => {
    try {
      e.preventDefault();
      if (isLengthValid(formValues.username)) dispatchError();
      if (isEmailValid(formValues.email)) await handleRegister(formValues);
      await setIsLogged(true);
      await setFormValues(initialState);
    } catch (e) {
      await setIsLogged(false);
      await dispatchError();
    }
  };

  return (
    <Wrapper>
      <Arrow />
      <StyledTittle>Create an new account</StyledTittle>
      <FormWrapper as="form" onSubmit={handleSubmit}>
        <FormField label="Username" name="username" id="username" type="text" onChange={handleChange} value={formValues.username} />
        <FormField label="Email" name="email" id="email" type="email" onChange={handleChange} value={formValues.email} />
        <FormField label="Password" name="password" id="password" type="password" onChange={handleChange} value={formValues.password} />
        <FormField label="Repeat Password" name="rPassword" id="rPassword" type="rPassword" onChange={handleChange} value={formValues.rPassword} />
        <ActionBtn name="Create" styles={{ width: '60%', height: '40%', background: 'orange', margin: '10px' }} />
      </FormWrapper>
    </Wrapper>
  );
};
