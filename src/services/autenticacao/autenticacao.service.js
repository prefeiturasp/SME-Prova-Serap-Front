import api from '../api';

const urlPadrao = 'v1/autenticacao';

const autenticar = (params) => api.post(urlPadrao, params);

export const autenticacaoService = {
  autenticar,
};
