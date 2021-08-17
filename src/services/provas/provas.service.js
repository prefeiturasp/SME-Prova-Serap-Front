import { store } from '~/redux';
import { setDadosProvas } from '~/redux/modulos/provas/actions';
import api from '../api';
import { erros } from '../snackbar/snackbar';

const urlPadrao = 'v1/provas';

const obterProvas = async () => {
  const { dispatch } = store;

  const resposta = await api.get(urlPadrao).catch((e) => erros(e));

  if (resposta?.data) {
    dispatch(setDadosProvas(resposta.data));
    return resposta;
  }

  return null;
};

export const provasService = {
  obterProvas,
};
