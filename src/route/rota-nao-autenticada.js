import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Login from '~/components/pages/login/login.page';
import { URL_HOME } from './url.constants';

const RotaNaoAutenticada = (props) => {
  const { path } = props;

  const logado = useSelector((state) => state.usuario.logado);

  if (!logado) {
    return <Route component={Login} path={path} />;
  }
  return <Redirect to={URL_HOME} />;
};

RotaNaoAutenticada.propTypes = {
  path: PropTypes.string,
};

RotaNaoAutenticada.defaultProps = {
  path: '',
};

export default RotaNaoAutenticada;
