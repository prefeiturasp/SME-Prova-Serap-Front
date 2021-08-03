import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import LogoSerapLogin from '~/components/atoms/logo-serap-login/logo-serap-login.component';
import LabelBemVindo from '~/components/atoms/label-bem-vindo/label-bem-vindo.component';
import FormLogin from '~/components/organisms/form-login/form-login.component';
import Footer from '~/components/organisms/footer/footer.component';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3.2),
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xl={6}>
        <Container className={classes.container} maxWidth="xs">
          <LogoSerapLogin />
          <LabelBemVindo />
          <FormLogin />
        </Container>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Login;
