import api from '../api';
import { erros } from '../snackbar/snackbar';

const urlPadrao = 'v1/arquivos';

const obterArquivosIdProva = async (provaId) => {
  const resposta = await api
    .get(`${urlPadrao}/provas/${provaId}`)
    .catch((e) => erros(e));

  if (resposta?.data) {
    return resposta;
  }

  return null;
};

const obterArquivo = async (arquivoId) => {
  const resposta = await api
    .get(`${urlPadrao}/${arquivoId}`)
    .catch((e) => erros(e));

  if (resposta?.data) {
    return resposta;
  }

  return null;
};

export const arquivosService = {
  obterArquivosIdProva,
  obterArquivo,
};
