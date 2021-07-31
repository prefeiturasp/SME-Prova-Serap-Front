import { Grid } from '@material-ui/core';
import React from 'react';

const LabelBemVindo = () => (
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
);

export default LabelBemVindo;
