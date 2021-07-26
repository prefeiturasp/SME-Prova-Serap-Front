import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/pages/login/login.page';
import GlobalStyle from './components/atoms/styles/globals';

function App() {
  const logado = false;

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/login" component={Login} />
        {logado ? (
          <Route component={() => <div>home</div>} path="/" />
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
