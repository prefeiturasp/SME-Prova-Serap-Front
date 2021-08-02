import produce from 'immer';

const inicial = {
  exibirLoaderGeral: false,
};

export default function loader(state = inicial, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@loader/setExibirLoaderGeral':
        draft.exibirLoaderGeral = action.payload;
        break;
      default:
        break;
    }
  });
}
