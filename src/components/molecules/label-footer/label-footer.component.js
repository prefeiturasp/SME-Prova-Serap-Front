import { Grid } from '@material-ui/core';
import React from 'react';
import StyleLabelFooter from '~/components/atoms/style-label-footer/style-label-footer.component';

const LabelFooter = () => (
  <Grid
    item
    xs={12}
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <StyleLabelFooter>
      Sistema homologado para os navegadores Google Chrome e Firefox.
    </StyleLabelFooter>
    <StyleLabelFooter>Versão 1.0</StyleLabelFooter>
  </Grid>
);

export default LabelFooter;
