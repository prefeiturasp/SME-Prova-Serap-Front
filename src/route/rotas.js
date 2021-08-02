import React from 'react';
import { Switch } from 'react-router-dom';
import RotaAutenticada from './rota-autenticada';
import RotaNaoAutenticada from './rota-nao-autenticada';
import { URL_LOGIN } from './url.constants';

const Rotas = () => (
  <Switch>
    <RotaNaoAutenticada path={URL_LOGIN} />
    <RotaAutenticada />
  </Switch>
);

export default Rotas;
