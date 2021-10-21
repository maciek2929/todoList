import React, { createContext, useContext, useEffect, useState } from 'react';
import { LoginModel } from '../components/organism/LoginForm/LoginForm';
import { handleLogin } from '../api/LoginHandler';

const AuthContext = createContext({});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<boolean | any>(null);

  const singIn = async (loginObj: LoginModel) => {
    try {
      const response = await handleLogin(loginObj);
      await setUser(response);
    } catch (e) {
      throw new Error('Something bad happend');
    }
  };
  const singOut = () => {
    setUser(null);
    localStorage.removeItem('jwt');
  };

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('jwt');
      if (token) {
        setUser(true);
      } else {
        await singOut();
      }
    })();
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        singIn,
        singOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) throw new Error('Incorrect context for hook');
  return auth;
};
