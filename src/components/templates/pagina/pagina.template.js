import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import colors from '~/components/atoms/styles/colors';
import Footer from '~/components/organisms/footer/footer.component';
import NavBar from '~/components/organisms/nav/nav-bar.component';
import { autenticacaoService } from '~/services/autenticacao/autenticacao.service';

const PagineTemplate = ({ children }) => {
  useEffect(() => {
    autenticacaoService.obterMeusDados();
  }, []);

  return (
    <Grid
      container
      style={{ minHeight: '100vh', backgroundColor: colors.backgroundGeral }}
    >
      <Grid item xl={6}>
        <NavBar />
        {children}
      </Grid>
      <Footer />
    </Grid>
  );
};

PagineTemplate.propTypes = {
  children: PropTypes.node,
};

PagineTemplate.defaultProps = {
  children: null,
};

export default PagineTemplate;
