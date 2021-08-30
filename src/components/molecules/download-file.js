import { LinearProgress } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  iniciarDownload,
  setArquivos,
  setDownloadCompleto,
  setNumeroArquivoAtual,
  setProgressoDownload,
  setTotalArquivos,
} from '~/redux/modulos/provas/actions';
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
  const dadosArquivos = useSelector(
    (state) => state.provas?.dadosProvas[index]?.dadosArquivos,
  );

  const progressoDownload = useSelector(
    (state) => state.provas?.dadosProvas[index]?.progressoDownload,
  );

  const numeroArquivoAtual = useSelector(
    (state) => state.provas?.dadosProvas[index]?.numeroArquivoAtual,
  );

  const quantidadeArquivos = useSelector(
    (state) => state.provas?.dadosProvas[index]?.quantidadeArquivos,
  );

  useEffect(() => {
    if (dadosArquivos?.iniciarDownload) {
      dadosArquivos.arquivos.forEach((arquivo, indexArquivo) => {
        if (!arquivo.downloadCompleto) {
          dispatch(setNumeroArquivoAtual(provaId, indexArquivo + 1));
          arquivosService.obterArquivo(arquivo.id).then((resp) => {
            if (resp?.data) {
              const options = {
                onDownloadProgress: (progressEvent) => {
                  const { loaded, total } = progressEvent;
                  dispatch(
                    setProgressoDownload(
                      provaId,
                      Math.floor((loaded * 100) / total),
                    ),
                  );
                },
              };
              api
                .get(resp.data.caminho, { responseType: 'blob', ...options })
                .then((responseDownload) => {
                  const url = window.URL.createObjectURL(
                    new Blob([responseDownload.data], {
                      type: responseDownload.headers['content-type'],
                    }),
                  );

                  const link = document.createElement('a');
                  link.href = url;
                  link.setAttribute('download', resp.data.nome);
                  document.body.appendChild(link);
                  link.click();
                  dispatch(
                    setDownloadCompleto(
                      provaId,
                      arquivo.id,
                      true,
                      responseDownload.data,
                    ),
                  );
                })
                .catch((e) => {
                  dispatch(
                    setDownloadCompleto(provaId, arquivo.id, false, null),
                  );
                  erros(e);
                });
            }
          });
        }
      });
      dispatch(iniciarDownload(provaId, false));
    }
  }, [dadosArquivos, provaId, dispatch]);

  const obterArquivosId = () => {
    arquivosService.obterArquivosIdProva(provaId).then((resp) => {
      if (resp?.data?.length) {
        const idsArquivos = resp.data;
        const dadosArquivo = {
          iniciarDownload: true,
          arquivos: idsArquivos.map((arquivoId) => ({
            id: arquivoId,
          })),
        };
        dispatch(setArquivos(provaId, dadosArquivo));
        dispatch(setTotalArquivos(provaId, resp.data.length));
      }
    });
  };

  return (
    <div>
      {progressoDownload && (
        <DownloadStyled variant="determinate" value={progressoDownload} />
      )}
      <Button onClick={() => obterArquivosId()}>Download</Button>
      {progressoDownload && (
        <p>
          {`
        Download em ${progressoDownload}% | ${numeroArquivoAtual} de ${quantidadeArquivos}`}
        </p>
      )}
    </div>
  );
};

DownloadFile.propTypes = {
  provaId: PropTypes.number,
  index: PropTypes.number,
};

DownloadFile.defaultProps = {
  provaId: 0,
  index: 0,
};

export default DownloadFile;
