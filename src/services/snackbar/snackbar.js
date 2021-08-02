import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { useSnackbar } from 'notistack';
import React from 'react';

const InnerSnackbarUtilsConfigurator = (props) => {
  const { setUseSnackbarRef } = props;
  setUseSnackbarRef(useSnackbar());
  return null;
};

let useSnackbarRef;
const setUseSnackbarRef = (useSnackbarRefProp) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator = () => (
  <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />
);

const TEMPO_PADRAO = 5000;

const exibirAlerta = (
  variant = 'default',
  mensagem,
  autoHideDuration = null,
) => {
  useSnackbarRef.enqueueSnackbar(mensagem, {
    variant,
    autoHideDuration,
    action: (id) => (
      <IconButton
        aria-label="close"
        color="inherit"
        onClick={() => useSnackbarRef.closeSnackbar(id)}
        style={{ paddingLeft: 0 }}
      >
        <CloseIcon />
      </IconButton>
    ),
  });
};

const sucesso = (mensagem) => {
  exibirAlerta('success', mensagem, TEMPO_PADRAO);
};

const erro = (mensagem) => {
  exibirAlerta('error', mensagem);
};

const aviso = (mensagem) => {
  exibirAlerta('warning', mensagem, TEMPO_PADRAO);
};

const info = (mensagem) => {
  exibirAlerta('info', mensagem, TEMPO_PADRAO);
};

const erros = (listaErros) => {
  if (listaErros?.response?.data?.mensagens) {
    listaErros.response.data.mensagens.forEach((mensagem) => erro(mensagem));
  } else erro('Ocorreu um erro interno.');
};

export { sucesso, erro, erros, aviso, info };
