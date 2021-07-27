import { Grid, IconButton, InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import Button from '../../atoms/button/button.component';
import TextField from '../../atoms/text-field/text-field.component';

interface Login {
  codigoEOL: string;
  senha: string;
  exibirSenha: boolean;
}

interface FormErros {
  codigoEOL: string;
  senha: string;
}

const FormLogin = () => {
  const [valoresForm, setValoresForm] = React.useState<Login>({
    codigoEOL: '',
    senha: '',
    exibirSenha: false,
  });

  const [erros, setErros] = React.useState<FormErros>({
    codigoEOL: '',
    senha: '',
  });

  const montarTextoObrigatorio = (campo: string) =>
    `O campo “${campo}” é obrigatório`;

  const someteNumero = (valor: string) => {
    return String(valor).replace(/\D/g, '');
  };

  const handleChange =
    (prop: keyof Login) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const novoValor = someteNumero(event.target.value);
      const novosValores = { ...valoresForm, [prop]: novoValor };
      setValoresForm(novosValores);
      validate(novosValores);
    };

  const handleClickExibirSenha = () => {
    setValoresForm({ ...valoresForm, exibirSenha: !valoresForm.exibirSenha });
  };

  const validate = (fieldValues: Login) => {
    let temp = { ...erros };

    if ('codigoEOL' in fieldValues) {
      temp.codigoEOL =
        fieldValues.codigoEOL.length !== 0
          ? ''
          : montarTextoObrigatorio('codigoEOL');
    }
    if ('senha' in fieldValues) {
      temp.senha =
        fieldValues.senha.length !== 0 ? '' : montarTextoObrigatorio('senha');
    }

    setErros({
      ...temp,
    });
  };

  const logar = (e: any) => {
    e.preventDefault();
    validate(valoresForm);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="codigoEOL"
              name="codigoEOL"
              label="Digite o código EOL"
              variant="filled"
              value={valoresForm.codigoEOL}
              onChange={handleChange('codigoEOL')}
              autoFocus
              required
              inputProps={{
                maxLength: 10,
                inputMode: 'numeric',
              }}
              InputProps={{
                startAdornment: <div style={{ marginTop: '16px' }}>RA-</div>,
              }}
              error={!!erros.codigoEOL}
              helperText={erros.codigoEOL}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="senha"
              name="senha"
              label="Digite a senha"
              variant="filled"
              type={valoresForm.exibirSenha ? 'text' : 'password'}
              value={valoresForm.senha}
              onChange={handleChange('senha')}
              required
              inputProps={{
                maxLength: 4,
                inputMode: 'numeric',
              }}
              error={!!erros.senha}
              helperText={erros.senha}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="alternar a visibilidade da senha"
                      onClick={handleClickExibirSenha}
                      edge="end"
                    >
                      {valoresForm.exibirSenha ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth text="Entrar" variant="contained" onClick={logar} />
      </Grid>
    </Grid>
  );
};

export default FormLogin;
