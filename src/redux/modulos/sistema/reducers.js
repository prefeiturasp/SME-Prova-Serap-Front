import produce from 'immer';

const inicial = {
  versao: '',
};

export default function sistema(state = inicial, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@sistema/setVersaoAtualFront':
        return {
          ...draft,
          versao: action.payload,
        };
      default:
        return state;
    }
  });
}
