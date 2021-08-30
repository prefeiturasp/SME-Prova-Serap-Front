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
        prova.arquivos = dados;
        prova.quantidadeArquivos = dados.length;
        prova.iniciarDownload = true;
        break;
      }
      case '@provas/setDownloadCompleto': {
        const { provaId, arquivoId, completo, arquivo } = action.payload;
        const prova = draft.dadosProvas.find((p) => p.id === provaId);
        const arquivoAlterar = prova.arquivos.find((a) => a.id === arquivoId);
        if (arquivoAlterar && completo) {
          arquivoAlterar.downloadCompleto = completo;
          arquivoAlterar.arquivo = arquivo;
          prova.totalBaixados = prova.totalBaixados
            ? prova.totalBaixados + 1
            : 1;
        }
        break;
      }
      case '@provas/setIniciarDownload': {
        const { provaId, iniciar } = action.payload;
        const prova = draft.dadosProvas.find((p) => p.id === provaId);
        prova.iniciarDownload = iniciar;
        break;
      }

      case '@provas/setProgressoDownload': {
        const { provaId, progresso } = action.payload;
        const prova = draft.dadosProvas.find((p) => p.id === provaId);
        prova.progressoDownload = progresso;
        break;
      }

      case '@provas/setNumeroArquivoAtual': {
        const { provaId, numeroArquivo } = action.payload;
        const prova = draft.dadosProvas.find((p) => p.id === provaId);
        prova.numeroArquivoAtual = numeroArquivo;
        break;
      }

      default:
        break;
    }
  });
}
