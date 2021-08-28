import { LinearProgress } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setArquivos } from '~/redux/modulos/provas/actions';
import api from '~/services/api';
import { arquivosService } from '~/services/arquivos/arquivos.service';
import { erros } from '~/services/snackbar/snackbar';
import Button from '../atoms/button/button.component';

const DownloadStyled = styled(LinearProgress)({
  marginBottom: '10px',
});

const DownloadFile = (props) => {
  const { provaId, index } = props;
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(true);
  const [totalDownload, setTotalDownload] = useState(0);
  const [currentDownload, setCurrentDownload] = useState(0);
  const dadosArquivos = useSelector(
    (state) => state.provas?.dadosProvas[index],
  );

  useEffect(() => {}, [dadosArquivos]);

  const onClickDownload = () => {
    setShowProgressBar(true);
    arquivosService.downloadProvas(1).then((resp) => {
      if (resp?.data?.length) {
        setTotalDownload(resp.data.length);
        resp.data.forEach((arquivo, idx) => {
          setCurrentDownload(idx + 1);
          const options = {
            onDownloadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              setProgress(Math.floor((loaded * 100) / total));
            },
          };
          api
            .get(arquivo.caminho, { responseType: 'blob', ...options })
            .then((responseDownload) => {
              const url = window.URL.createObjectURL(
                new Blob([responseDownload.data], {
                  type: responseDownload.headers['content-type'],
                }),
              );

              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', arquivo.nome);
              document.body.appendChild(link);
              link.click();
            })
            .catch((e) => {
              erros(e);
            })
            .finally(() => {
              if (idx + 1 < totalDownload) setProgress(0);
            });
        });
      }
    });
  };

  const obterArquivosId = () => {
    setShowProgressBar(true);
    arquivosService.obterArquivosId(provaId).then((resp) => {
      if (resp?.data?.length) {
        const idsArquivos = resp.data;
        const dadosArquivo = {
          arquivoAtual: 1,
          quantidadeArquivos: resp.data.length,
          arquivos: idsArquivos.map((arquivoId) => ({
            id: arquivoId,
            progressoDownload: 0,
          })),
        };
        dispatch(setArquivos(provaId, dadosArquivo));
      }
    });
  };

  return (
    <div>
      {showProgressBar && (
        <DownloadStyled variant="determinate" value={progress} />
      )}
      <Button onClick={onClickDownload}>Download</Button>
      <p>
        Download em {dadosArquivos.progress}% | {dadosArquivos.currentDownload}{' '}
        de {dadosArquivos.quantidadeArquivos}
      </p>
    </div>
  );
};

export default DownloadFile;
