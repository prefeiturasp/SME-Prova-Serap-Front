import React from 'react';
import { createTheme, Grid, MuiThemeProvider } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import GlobalStyle from './components/atoms/styles/globals';
import Login from './components/pages/login/login.page';

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
    <MuiThemeProvider theme={theme}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xl={6}>
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
        </Grid>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
