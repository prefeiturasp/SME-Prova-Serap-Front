import { Container, Grid, makeStyles } from '@material-ui/core'; 
import Button from '../../components/atoms/button/button';
import TextField from '../../components/atoms/textField/textField';
import logo from '../../logo.svg';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <Grid
        item
        xs={12}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginBottom: '48px' }}
      >
        <img
          src={logo}
          style={{ height: '104px', width: '256px' }}
          alt="logo"
        />
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px' }}
      >
        Bem-vindo
      </Grid>
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
    </Container>
  );
};

export default Login;
