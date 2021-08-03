import { SnackbarProvider } from 'notistack';
import React from 'react';
import { Switch } from 'react-router-dom';
import SentryConfigurator from '~/services/sentry/sentry-config';
import { SnackbarUtilsConfigurator } from '~/services/snackbar/snackbar';
import RotaAutenticada from './rota-autenticada';
import RotaNaoAutenticada from './rota-nao-autenticada';
import { URL_LOGIN } from './url.constants';

const Rotas = () => (
  <SnackbarProvider
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    style={{ flexWrap: 'unset' }}
  >
    <Switch>
      <RotaNaoAutenticada path={URL_LOGIN} />
      <RotaAutenticada />
    </Switch>
    <SnackbarUtilsConfigurator />
    <SentryConfigurator />
  </SnackbarProvider>
);

export default Rotas;
