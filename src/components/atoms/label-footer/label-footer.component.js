import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const Container = styled.div`
  color: rgb(102, 102, 102);
  font-size: 12px;
`;

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
      <Container>
        {`Sistema homologado para os navegadores Google Chrome e Firefox. ${versaoAtual}`}
      </Container>
    </Grid>
  );
};

export default LabelFooter;
