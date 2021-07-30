import { Grid } from '@material-ui/core';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import colors from '~/components/atoms/styles/colors';
import Footer from '~/components/organisms/footer/footer.component';
import NavBar from '~/components/organisms/nav/nav-bar.component';
import AreaEstudante from '~/components/pages/area-estudante/area-estudante.page';
import { setDadosUsuario } from '~/redux/modulos/usuario/actions';
import { autenticacaoService } from '~/services/autenticacao/autenticacao.service';

const HomeTemplate = () => {
  const dispatch = useDispatch();

  const obterMeusDados = useCallback(async () => {
    const retornaDados = await autenticacaoService.obterMeusDados();

    if (retornaDados?.data) {
      dispatch(setDadosUsuario(retornaDados.data));
    }
  }, [dispatch]);

  useEffect(() => {
    obterMeusDados();
  }, [obterMeusDados]);

  return (
    <Grid
      container
      style={{ minHeight: '100vh', backgroundColor: colors.backgroundGeral }}
    >
      <Grid item xl={6}>
        <NavBar />
        <AreaEstudante />
      </Grid>
      <Footer />
    </Grid>
  );
};

export default HomeTemplate;
