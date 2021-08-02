import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import LogoSerapLogin from '~/components/atoms/logo-serap-login/logo-serap-login.component';
import LabelBemVindo from '~/components/atoms/label-bem-vindo/label-bem-vindo.component';
import FormLogin from '~/components/organisms/form-login/form-login.component';

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
