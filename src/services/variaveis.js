import axios from 'axios';
import { store } from '~/redux';
import { setSentryDNS, setUrlBase } from '~/redux/modulos/sistema/actions';

const URL = '/../../../configuracoes/variaveis.json';

let primiseObterVariaveis;

const obterVariaveis = () => axios.get(URL).then((resp) => resp);

const configVariaveis = async () => {
  const state = store.getState();

  const { usuario } = state;

  if (!primiseObterVariaveis) {
    primiseObterVariaveis = obterVariaveis()
      .then((resposta) => {
        primiseObterVariaveis = null;
        return resposta?.data;
      })
      .catch(() => {
        if (usuario?.logado) {
          window.location.href = '/erro';
        }
      });
  }

  return primiseObterVariaveis.then((dados) => dados);
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

const obterSentryDNS = () => {
  const { dispatch } = store;
  const state = store.getState();

  const { sistema } = state;

  if (!sistema?.sentrDns) {
    return configVariaveis().then((response) => {
      dispatch(setSentryDNS(response?.SENTRY_DSN));
      return response?.SENTRY_DSN;
    });
  }

  return sistema?.sentrDns;
};

export { urlBase, obterSentryDNS };
