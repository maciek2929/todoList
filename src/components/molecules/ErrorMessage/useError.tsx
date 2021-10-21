import React, { createContext, useCallback, useContext, useState } from 'react';

type ErrCtx = {
  error: any;
  dispatchError: any;
};

const ErrorCtx = createContext<Partial<ErrCtx>>({});
export const ErrorProvider = ({ children }: any) => {
  const [error, setError] = useState(null);

  const dispatchError = useCallback((message) => {
    setError(message);
    setTimeout(() => {
      setError('');
    }, 4000);
  }, []);

  return <ErrorCtx.Provider value={{ error, dispatchError }}>{children}</ErrorCtx.Provider>;
};

export const useError = () => {
  const errorContext = useContext(ErrorCtx);

  if (!errorContext) throw Error('Use Error needs to be used inside ErrContext ');

  return errorContext;
};
