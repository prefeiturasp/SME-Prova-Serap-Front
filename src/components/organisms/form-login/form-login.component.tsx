import { Grid } from '@material-ui/core';
import Button from '../../atoms/button/button.component';
import TextField from '../../atoms/text-field/text-field.component';

const FormLogin = () => {
  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="codigoEOL"
                type="number"
                name="codigoEOL"
                label="Digite o código EOL"
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="senha"
                type="password"
                name="senha"
                label="Digite a senha"
                variant="filled"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth text="Entrar" variant="contained" />
        </Grid>
      </Grid>
    </form>
  );
};

export default FormLogin;
