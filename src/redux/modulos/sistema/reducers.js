import produce from 'immer';

const inicial = {
  versao: '',
  urlBase: '',
  sentryDSN: '',
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
      case '@sistema/setSentryDSN':
        draft.sentryDSN = action.payload;
        break;
      default:
        break;
    }
  });
}
