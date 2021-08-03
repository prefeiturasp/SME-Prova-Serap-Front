export const setVersaoAtualFront = (versao) => ({
  type: '@sistema/setVersaoAtualFront',
  payload: versao,
});

export const setUrlBase = (url) => ({
  type: '@sistema/setUrlBase',
  payload: url,
});

export const setSentryConfigDSN = (config) => ({
  type: '@sistema/setSentryConfigDSN',
  payload: config,
});
