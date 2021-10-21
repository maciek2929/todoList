import axios from 'axios';
import { RegistrationModel } from '../components/organism/RegisterForm/RegisterForm';

const REGISTER__URL: string = 'https://recruitment.ultimate.systems/auth/local/register';

export const handleRegister = async (registerObj: RegistrationModel) => {
  try {
    const response: any = await axios({
      method: 'post',
      url: REGISTER__URL,
      data: {
        username: registerObj.username,
        email: registerObj.email,
        password: registerObj.password,
      },
    });
    return response;
  } catch (e) {
    console.log('error occures');
  }
};

//@ToDo Typing response, and error strong typing instances of errors ? //
