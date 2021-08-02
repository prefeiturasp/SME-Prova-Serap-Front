import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Button from '~/components/atoms/button/button.component';
import { URL_HOME } from '~/route/url.constants';
import history from '~/services/history';

const PaginaComErro = () => (
  <Container>
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid
        item
        xs={12}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div style={{ marginBlock: 30 }}>
          A página que você tentou acessar não está disponível no momento.
        </div>
        <Button onClick={() => history.push(URL_HOME)}>Voltar</Button>
      </Grid>
    </Grid>
  </Container>
);

export default PaginaComErro;
