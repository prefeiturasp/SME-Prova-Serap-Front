import axios from 'axios';
import { store } from '~/redux';
import {
  setSentryConfigDSN,
  setUrlBase,
} from '~/redux/modulos/sistema/actions';

const URL = '/../../../configuracoes/variaveis.json';

let promiseObterVariaveis;

const obterVariaveis = () => axios.get(URL).then((resp) => resp);

const configVariaveis = async () => {
  const state = store.getState();

  const { usuario } = state;

  if (!promiseObterVariaveis) {
    promiseObterVariaveis = obterVariaveis()
      .then((resposta) => {
        promiseObterVariaveis = null;
        return resposta?.data;
      })
      .catch(() => {
        if (usuario?.logado) {
          window.location.href = '/erro';
        }
      });
  }

  return promiseObterVariaveis.then((dados) => dados);
};

const urlBase = () => {
  const { dispatch } = store;
  const state = store.getState();

  const { sistema } = state;

  if (!sistema?.urlBase) {
    return configVariaveis().then((response) => {
      dispatch(setUrlBase(response?.API_URL));
      return response?.API_URL;
    });
  }

  return sistema?.urlBase;
};

const obterSentryDSN = () => {
  const { dispatch } = store;
  const state = store.getState();

  const { sistema } = state;

  if (!sistema?.sentrDsn) {
    return configVariaveis().then((response) => {
      dispatch(setSentryConfigDSN(response));
      return {
        sentryDSN: response?.SENTRY_DSN,
        sentryEnvironment: response?.SENTRY_ENVIRONMENT,
      };
    });
  }

  return sistema;
};

export { urlBase, obterSentryDSN };
