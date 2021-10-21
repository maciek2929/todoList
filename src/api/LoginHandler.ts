import axios from 'axios';
import { LoginModel } from '../components/organism/LoginForm/LoginForm';

const LOGIN__URL: string = 'https://recruitment.ultimate.systems/auth/local';

export const handleLogin = async (loginObj: LoginModel) => {
  try {
    const response: any = await axios({
      method: 'post',
      url: LOGIN__URL,
      data: {
        identifier: loginObj.login,
        password: loginObj.password,
      },
    });
    const {
      data: {
        user: { confirmed },
      },
    } = response;

    await localStorage.setItem('jwt', response.data.jwt);
    return { confirmed };
  } catch (e) {
    console.log('error occured');
  }
};
