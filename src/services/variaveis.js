import axios from 'axios';
import { store } from '~/redux';
import { setSentryDNS, setUrlBase } from '~/redux/modulos/sistema/actions';

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

const obterSentryDNS = () => {
  const { dispatch } = store;
  const state = store.getState();

  const { sistema, usuario } = state;

  if (!sistema?.sentrDns) {
    return axios
      .get('/../../../configuracoes/variaveis.json')
      .then((response) => {
        dispatch(setSentryDNS(response?.data?.SENTRY_DSN));
        return response?.data?.SENTRY_DSN;
      })
      .catch(() => {
        if (usuario?.logado) {
          window.location.href = '/erro';
        }
      });
  }

  return sistema?.sentrDns;
};

export { urlBase, obterSentryDNS };
