import { MainTemplate } from './templates/MainTemplate/MainTemplate';
import { LoginForm } from './components/organism/LoginForm/LoginForm';
import { useAuth } from './providers/useAuth';
import { TodosList } from './components/organism/ToDosList/TodosList';
import { RegisterForm } from './components/organism/RegisterForm/RegisterForm';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ErrorPopup } from './components/molecules/ErrorMessage/ErrorPopup';
import { useError } from './components/molecules/ErrorMessage/useError';

export const AuthenticatedApp = () => {
  return <TodosList />;
};

const UnauthenticatedApp = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route>
      </Switch>
    </>
  );
};

function Root() {
  // @ts-ignore
  const { user } = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorPopup /> : null}
      <MainTemplate>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</MainTemplate>;
    </>
  );
}

export default Root;
