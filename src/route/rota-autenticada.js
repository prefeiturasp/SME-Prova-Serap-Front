import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import rotasComponentes from './rotas-componentes';
import { URL_LOGIN } from './url.constants';

const RotaAutenticada = () => {
  const logado = useSelector((state) => state.usuario.logado);

  if (!logado) {
    return <Redirect to={URL_LOGIN} />;
  }

  return (
    <Switch>
      {rotasComponentes.map((rota) => (
        <Route
          key={rota?.path}
          component={rota?.component}
          path={rota?.path}
          exact={!!rota?.exact}
        />
      ))}
    </Switch>
  );
};

export default RotaAutenticada;
