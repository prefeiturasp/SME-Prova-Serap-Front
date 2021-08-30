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

export const setDownloadCompleto = (provaId, arquivoId, completo, arquivo) => ({
  type: '@provas/setDownloadCompleto',
  payload: { provaId, arquivoId, completo, arquivo },
});

export const setIniciarDownload = (provaId, iniciar) => ({
  type: '@provas/setIniciarDownload',
  payload: { provaId, iniciar },
});

export const setProgressoDownload = (provaId, progresso) => ({
  type: '@provas/setProgressoDownload',
  payload: { provaId, progresso },
});

export const setNumeroArquivoAtual = (provaId, numeroArquivo) => ({
  type: '@provas/setNumeroArquivoAtual',
  payload: { provaId, numeroArquivo },
});
