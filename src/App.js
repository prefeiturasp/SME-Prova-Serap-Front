import { createTheme, Grid, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyle from './components/atoms/styles/globals';
import Footer from './components/organisms/footer/footer.component';
import Login from './components/pages/login/login.page';
import { persistor, store } from './redux';
import history from './services/history';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF7755',
    },
    error: {
      main: '#F92F57',
    },
  },
});

function App() {
  const logado = false;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router history={history}>
          <MuiThemeProvider theme={theme}>
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: '100vh' }}
            >
              <Grid item xl={6}>
                <GlobalStyle />
                <Switch>
                  <Route path="/login" component={Login} />
                  {logado ? (
                    <Route component={() => <div>home</div>} path="/" />
                  ) : (
                    <Redirect to="/login" />
                  )}
                </Switch>
              </Grid>
              <Footer />
            </Grid>
          </MuiThemeProvider>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
