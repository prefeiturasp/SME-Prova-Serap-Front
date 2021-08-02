import { createTheme, MuiThemeProvider } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import LoaderGeral from './components/atoms/loader-geral/loader-geral.component';
import GlobalStyle from './components/atoms/styles/globals';
import { persistor, store } from './redux';
import Rotas from './route/rotas';
import history from './services/history';

moment.locale('pt-br');

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
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router history={history}>
            <GlobalStyle />
            <Rotas />
          </Router>
          <LoaderGeral />
        </PersistGate>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
