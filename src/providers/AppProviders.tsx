import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import { AuthProvider } from './useAuth';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { ToDosListsProvider } from './ToDosListsProvider';
import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorProvider } from '../components/molecules/ErrorMessage/useError';

export const AppProviders: FC = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ErrorProvider>
          <AuthProvider>
            <GlobalStyle />
            <ToDosListsProvider>{children}</ToDosListsProvider>
          </AuthProvider>
        </ErrorProvider>
      </ThemeProvider>
    </Router>
  );
};
