import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import colors from '~/components/atoms/styles/colors';
import Footer from '~/components/organisms/footer/footer.component';
import NavBar from '~/components/organisms/nav/nav-bar.component';
import { autenticacaoService } from '~/services/autenticacao/autenticacao.service';

const PaginaTemplate = ({ children, exibirNomeProva }) => {
  useEffect(() => {
    autenticacaoService.obterMeusDados();
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      style={{ minHeight: '100vh', backgroundColor: colors.backgroundGeral }}
    >
      <Grid item xl={6} style={{ display: 'grid', justifyContent: 'center' }}>
        <NavBar exibirNomeProva={exibirNomeProva} />
        {children}
      </Grid>
      <Footer />
    </Grid>
  );
};

PaginaTemplate.propTypes = {
  children: PropTypes.node,
  exibirNomeProva: PropTypes.string,
};

PaginaTemplate.defaultProps = {
  children: null,
  exibirNomeProva: '',
};

export default PaginaTemplate;
