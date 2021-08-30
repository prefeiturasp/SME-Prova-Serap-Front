import { LinearProgress } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  setArquivos,
  setDownloadCompleto,
  setIniciarDownload,
  setNumeroArquivoAtual,
  setProgressoDownload,
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
  const arquivos = useSelector(
    (state) => state.provas?.dadosProvas[index]?.arquivos,
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

  const iniciarDownload = useSelector(
    (state) => state.provas?.dadosProvas[index]?.iniciarDownload,
  );

  useEffect(() => {
    if (iniciarDownload && arquivos) {
      arquivos.forEach((arquivo, indexArquivo) => {
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
      dispatch(setIniciarDownload(provaId, false));
    }
  }, [arquivos, provaId, dispatch, iniciarDownload]);

  const obterArquivosId = () => {
    arquivosService.obterArquivosIdProva(provaId).then((resp) => {
      if (resp?.data?.length) {
        const idsArquivos = resp.data;
        const dadosArquivo = idsArquivos.map((arquivoId) => ({
          id: arquivoId,
        }));
        dispatch(setArquivos(provaId, dadosArquivo));
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
