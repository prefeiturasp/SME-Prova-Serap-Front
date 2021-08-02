import api from '../api';

const urlPadrao = 'v1/versoes';

const obterVersaoAtualFront = () => api.get(`${urlPadrao}/front`);

export const versaoService = {
  obterVersaoAtualFront,
};
