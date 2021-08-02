import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import StyleLabelFooter from '~/components/atoms/style-label-footer/style-label-footer.component';

const LabelFooter = () => {
  const versaoAtual = useSelector((state) => state.sistema?.versao);

  return (
    <Grid
      item
      xs={12}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <StyleLabelFooter>
        {`Sistema homologado para os navegadores Google Chrome e Firefox. ${versaoAtual}`}
      </StyleLabelFooter>
    </Grid>
  );
};

export default LabelFooter;
