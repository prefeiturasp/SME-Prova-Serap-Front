import { Grid, IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '~/components/atoms/button/button.component';
import TextField from '~/components/atoms/text-field/text-field.component';
import { setExibirLoaderGeral } from '~/redux/modulos/loader/actions';
import { salvarDadosLogin } from '~/redux/modulos/usuario/actions';
import { URL_HOME } from '~/route/url.constants';
import { autenticacaoService } from '~/services/autenticacao/autenticacao.service';
import history from '~/services/history';

const FormLogin = () => {
  const dispatch = useDispatch();

  const [valoresForm, setValoresForm] = useState({
    codigoEOL: '',
    senha: '',
    exibirSenha: false,
  });

  const [erros, setErros] = useState({
    codigoEOL: '',
    senha: '',
  });

  const QTD_MIN_SENHA = 3;

  const montarTextoObrigatorio = (campo) => `O campo “${campo}” é obrigatório`;

  const someteNumero = (valor) => String(valor).replace(/\D/g, '');

  const validarCampos = (fieldValues) => {
    const temp = { ...erros };

    if ('codigoEOL' in fieldValues) {
      temp.codigoEOL =
        fieldValues?.codigoEOL?.length !== 0
          ? ''
          : montarTextoObrigatorio('codigoEOL');
    }
    if ('senha' in fieldValues) {
      temp.senha = '';
      if (fieldValues?.senha?.length === 0) {
        temp.senha = montarTextoObrigatorio('senha');
      } else if (fieldValues?.senha?.length < QTD_MIN_SENHA) {
        temp.senha = `A senha deve conter no mínimo ${QTD_MIN_SENHA} caracteres.`;
      }
    }

    setErros({
      ...temp,
    });

    if (temp.codigoEOL || temp.senha) {
      return true;
    }

    return false;
  };

  const handleChange = (nomeCapo, valor) => {
    const novoValor = someteNumero(valor);
    const novosValores = { ...valoresForm, [nomeCapo]: novoValor };
    setValoresForm(novosValores);
  };

  const handleClickExibirSenha = () => {
    setValoresForm({ ...valoresForm, exibirSenha: !valoresForm?.exibirSenha });
  };

  const logar = async (e) => {
    e.preventDefault();
    const temCamposInvalidos = validarCampos(valoresForm);

    const params = {
      login: valoresForm?.codigoEOL,
      senha: valoresForm?.senha,
    };

    if (!temCamposInvalidos) {
      dispatch(setExibirLoaderGeral(true));

      const resposta = await autenticacaoService
        .autenticar(params)
        .catch((err) => {
          const msgErro = err?.response?.data?.mensagens?.[0];

          if (err?.response?.status === 411) {
            setErros({
              codigoEOL: msgErro,
              senha: montarTextoObrigatorio('senha'),
            });
          } else if (err?.response?.status === 412) {
            setErros({ codigoEOL: '', senha: msgErro });
          }

          handleChange('senha', '');
        })
        .finally(() => dispatch(setExibirLoaderGeral(false)));

      if (resposta?.data) {
        dispatch(
          salvarDadosLogin({
            ...resposta.data,
            codigoEOL: valoresForm?.codigoEOL,
          }),
        );

        history.push(URL_HOME);
      }
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="codigoEOL"
              name="codigoEOL"
              label="Digite o código EOL"
              value={valoresForm?.codigoEOL}
              onChange={(e) => handleChange('codigoEOL', e?.target?.value)}
              autoFocus
              required
              maxLength={10}
              inputMode="numeric"
              startAdornment={<div style={{ marginTop: '16px' }}>RA-</div>}
              error={!!erros.codigoEOL}
              helperText={erros.codigoEOL}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="senha"
              name="senha"
              label="Digite a senha"
              type={valoresForm?.exibirSenha ? 'text' : 'password'}
              value={valoresForm?.senha}
              onChange={(e) => handleChange('senha', e?.target?.value)}
              required
              maxLength={4}
              inputMode="numeric"
              error={!!erros.senha}
              helperText={erros?.senha}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="alternar a visibilidade da senha"
                    onClick={handleClickExibirSenha}
                    edge="end"
                  >
                    {valoresForm?.exibirSenha ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button onClick={logar}>Entrar</Button>
      </Grid>
    </Grid>
  );
};

export default FormLogin;
