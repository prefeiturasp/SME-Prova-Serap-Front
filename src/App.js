import { createTheme, MuiThemeProvider } from '@material-ui/core';
import 'moment/locale/pt-br';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import LoaderGeral from './components/atoms/loader-geral/loader-geral.component';
import colors from './components/atoms/styles/colors';
import GlobalStyle from './components/atoms/styles/globals';
import { persistor, store } from './redux';
import Rotas from './route/rotas';
import history from './services/history';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    error: {
      main: colors.error,
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
