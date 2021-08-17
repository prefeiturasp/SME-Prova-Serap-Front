import produce from 'immer';

const inicial = {
  exibirLoaderGeral: false,
};

export default function loaderReducers(state = inicial, action = {}) {
  return produce(state, (draft) => {
    if (action.type === '@loader/setExibirLoaderGeral') {
      draft.exibirLoaderGeral = action.payload;
    }

    return draft;
  });
}
