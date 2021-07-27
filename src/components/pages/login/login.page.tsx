import { Container, makeStyles } from '@material-ui/core';
import LabelBemVindo from '../../atoms/label-bem-vindo/label-bem-vindo.component';
import LogoSerapLogin from '../../atoms/logo-serap-login/logo-serap-login.component';
import FormLogin from '../../organisms/form-login/form-login.component';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3.2),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <LogoSerapLogin />
      <LabelBemVindo />
      <FormLogin />
    </Container>
  );
};

export default Login;
