import { Grid } from '@material-ui/core';
import React from 'react';
import Footer from '~/components/organisms/footer/footer.component';
import Login from '~/components/pages/login/login.page';

const LoginTemplate = () => (
  <Grid
    container
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
  >
    <Grid item xl={6}>
      <Login />
    </Grid>
    <Footer />
  </Grid>
);

export default LoginTemplate;
