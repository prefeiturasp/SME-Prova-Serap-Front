import produce from 'immer';

const inicial = {
  versao: '',
  urlBase: '',
  sentryDSN: '',
  sentryEnvironment: '',
};

export default function sistema(state = inicial, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@sistema/setVersaoAtualFront':
        draft.versao = action.payload;
        break;
      case '@sistema/setUrlBase':
        draft.urlBase = action.payload;
        break;
      case '@sistema/setSentryConfigDSN':
        draft.sentryDSN = action.payload?.SENTRY_DSN;
        draft.sentryEnvironment = action.payload?.SENTRY_ENVIRONMENT;
        break;
      default:
        break;
    }
  });
}
