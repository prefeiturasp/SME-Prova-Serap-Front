export const setDadosProvas = (dados) => ({
  type: '@provas/setDadosProvas',
  payload: dados,
});

export const setDadosProvaIniciada = (dados) => ({
  type: '@provas/setDadosProvaIniciada',
  payload: dados,
});

export const setArquivos = (provaId, dados) => ({
  type: '@provas/setArquivos',
  payload: { provaId, dados },
});
