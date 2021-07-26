import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login/login.page';
import GlobalStyle from './styles/globals';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">home</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
