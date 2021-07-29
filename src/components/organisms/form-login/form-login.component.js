import { Grid, IconButton, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import Button from '~/components/atoms/button/button.component';
import TextField from '~/components/atoms/text-field/text-field.component';

const FormLogin = () => {
  const [valoresForm, setValoresForm] = useState({
    codigoEOL: '',
    senha: '',
    exibirSenha: false,
  });

  const [erros, setErros] = useState({
    codigoEOL: '',
    senha: '',
  });

  const montarTextoObrigatorio = (campo) => `O campo “${campo}” é obrigatório`;

  const someteNumero = (valor) => String(valor).replace(/\D/g, '');

  const validate = (fieldValues) => {
    const temp = { ...erros };

    if ('codigoEOL' in fieldValues) {
      temp.codigoEOL =
        fieldValues?.codigoEOL?.length !== 0
          ? ''
          : montarTextoObrigatorio('codigoEOL');
    }
    if ('senha' in fieldValues) {
      temp.senha =
        fieldValues?.senha?.length !== 0 ? '' : montarTextoObrigatorio('senha');
    }

    setErros({
      ...temp,
    });
  };

  const handleChange = (nomeCapo, event) => {
    const novoValor = someteNumero(event?.target?.value);
    const novosValores = { ...valoresForm, [nomeCapo]: novoValor };
    setValoresForm(novosValores);
    validate(novosValores);
  };

  const handleClickExibirSenha = () => {
    setValoresForm({ ...valoresForm, exibirSenha: !valoresForm?.exibirSenha });
  };

  const logar = (e) => {
    e.preventDefault();
    validate(valoresForm);
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
              onChange={(e) => handleChange('codigoEOL', e)}
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
              onChange={(e) => handleChange('senha', e)}
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
