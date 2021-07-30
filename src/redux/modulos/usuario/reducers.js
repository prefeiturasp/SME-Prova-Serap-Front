import produce from 'immer';

const inicial = {
  codigoEOL: '',
  token: '',
  usuario: '',
  dataLogin: null,
  logado: false,
  nome: '',
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
      case '@usuario/setLogado':
        draft.logado = action?.payload?.logado;
        break;
      case '@usuario/setDadosUsuario':
        draft.nome = action?.payload?.nome;
        break;
      case '@usuario/deslogar':
        localStorage.clear();
        draft = inicial;
        break;
      default:
        break;
    }
  });
}
