import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import HomeTemplate from '~/components/templates/home/home.template';
import { URL_LOGIN } from './url.constants';

const RotaAutenticada = (props) => {
  const { path } = props;

  const logado = useSelector((state) => state.usuario.logado);

  if (!logado) {
    return <Redirect to={URL_LOGIN} />;
  }
  return <Route component={HomeTemplate} path={path} />;
};

RotaAutenticada.propTypes = {
  path: PropTypes.string,
};

RotaAutenticada.defaultProps = {
  path: '',
};

export default RotaAutenticada;
