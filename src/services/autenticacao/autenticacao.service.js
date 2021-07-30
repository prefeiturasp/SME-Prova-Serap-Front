import api from '../api';

const urlPadrao = 'v1/autenticacao';

const autenticar = (params) => api.post(urlPadrao, params);
const obterMeusDados = () => api.get(`${urlPadrao}/meus-dados`);

export const autenticacaoService = {
  autenticar,
  obterMeusDados,
};
