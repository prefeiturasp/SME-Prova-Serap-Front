import { store } from '~/redux';
import { setDadosUsuario } from '~/redux/modulos/usuario/actions';
import api from '../api';
import { erros } from '../snackbar/snackbar';

const urlPadrao = 'v1/autenticacao';

const autenticar = (params) => api.post(urlPadrao, params);

const obterMeusDados = async () => {
  const { dispatch } = store;
  const state = store.getState();

  const { usuario } = state;
  if (!usuario?.nome) {
    const resposta = await api
      .get(`${urlPadrao}/meus-dados`)
      .catch((e) => erros(e));

    if (resposta?.data) {
      dispatch(setDadosUsuario(resposta.data));
      return resposta;
    }
  }

  return null;
};

export const autenticacaoService = {
  autenticar,
  obterMeusDados,
};
