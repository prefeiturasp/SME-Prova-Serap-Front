import axios from 'axios';
import moment from 'moment';
import { store } from '~/redux';
import { salvarLoginRevalidado } from '~/redux/modulos/usuario/actions';
import { deslogarPorSessaoInvalida } from './autenticacao/autenticacao-deslogar';
import { urlBase } from './variaveis';

let url = '';

urlBase().then((resposta) => {
  url = resposta?.data;
});

const api = axios.create({
  baseURL: url,
});

const SEGUNDOS_ANTES_EXPIRAR = -30;
const URL_REVALIDAR = 'v1/autenticacao/revalidar';

const revalidarAutenticacao = async (token) => {
  const resposta = await api
    .post('v1/autenticacao/revalidar', { token })
    .catch((e) => console.log(e));

  if (resposta?.data?.token) {
    store.dispatch(
      salvarLoginRevalidado({
        ...resposta.data,
      }),
    );
  } else {
    deslogarPorSessaoInvalida();
  }

  return resposta?.data;
};

const configPadraoAutenticacao = async (config, token, dataHoraExpiracao) => {
  const diff = moment().diff(dataHoraExpiracao, 'seconds');

  if (!url) {
    url = await urlBase();
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (
    config?.url !== URL_REVALIDAR &&
    token &&
    dataHoraExpiracao &&
    diff >= SEGUNDOS_ANTES_EXPIRAR
  ) {
    const dadosRevalidacao = await revalidarAutenticacao(token);
    if (dadosRevalidacao?.token) {
      config.headers.Authorization = `Bearer ${dadosRevalidacao.token}`;
    }
  }

  config.baseURL = url;

  return config;
};

const configRevalidarAutenticacao = async (config, token) => {
  if (!url) {
    url = await urlBase();
  }
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.baseURL = url;
  return config;
};

api.interceptors.request.use(
  async (config) => {
    const { token, dataHoraExpiracao } = store.getState().usuario;

    if (config?.url !== URL_REVALIDAR) {
      return configPadraoAutenticacao(config, token, dataHoraExpiracao);
    }

    return configRevalidarAutenticacao(config, token);
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401) {
      deslogarPorSessaoInvalida();
    }
    return Promise.reject(error);
  },
);

export default api;
