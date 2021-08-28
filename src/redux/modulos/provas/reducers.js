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
      case '@provas/setArquivos': {
        const { provaId, dados } = action.payload;
        const prova = draft.dadosProvas.find((p) => p.id === provaId);
        prova.dadosArquivos = dados;
        break;
      }
      default:
        break;
    }
  });
}
