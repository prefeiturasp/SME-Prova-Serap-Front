import produce from 'immer';

const inicial = {
  dadosProvas: [],
  dadosProvaIniciada: {
    nomeProva: '',
  },
};

export default function provas(state = inicial, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@provas/setDadosProvas':
        draft.dadosProvas = action.payload;
        break;
      case '@provas/setDadosProvaIniciada':
        draft.dadosProvaIniciada = action.payload;
        break;
      default:
        break;
    }
  });
}
