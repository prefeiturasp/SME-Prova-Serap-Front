import produce from 'immer';

const inicial = {
  codigoEOL: '',
  token: '',
  usuario: '',
  dataLogin: null,
  logado: false,
};

export default function usuario(state = inicial, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@usuario/salvarDadosLogin':
        draft.codigoEOL = action?.payload?.codigoEOL.trim();
        draft.token = action?.payload?.token;
        draft.dataLogin = new Date();
        draft.logado = true;
        break;
      default:
        break;
    }
  });
}
