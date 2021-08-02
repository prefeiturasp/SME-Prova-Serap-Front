import axios from 'axios';
import { store } from '~/redux';
import { setUrlBase } from '~/redux/modulos/sistema/actions';

const urlBase = () => {
  const { dispatch } = store;
  const state = store.getState();

  const { sistema, usuario } = state;

  if (!sistema?.urlBase) {
    return axios
      .get('/../../../configuracoes/variaveis.json')
      .then((response) => {
        dispatch(setUrlBase(response?.data?.API_URL));
        return response?.data?.API_URL;
      })
      .catch(() => {
        if (usuario?.logado) {
          window.location.href = '/erro';
        }
      });
  }

  return sistema?.urlBase;
};

export { urlBase };
