import React from 'react';
import { Switch } from 'react-router-dom';
import RotaAutenticada from './rotaAutenticada';
import RotaNaoAutenticada from './rotaNaoAutenticada';
import { URL_HOME, URL_LOGIN } from './url.constans';

const Rotas = () => (
  <Switch>
    <RotaNaoAutenticada path={URL_LOGIN} />
    <RotaAutenticada path={URL_HOME} />
  </Switch>
);

export default Rotas;
