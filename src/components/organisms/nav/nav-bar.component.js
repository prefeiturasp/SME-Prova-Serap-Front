import AppBar from '@material-ui/core/AppBar';
import { styled } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import ButtonSair from '~/components/atoms/button-sair/button-sair.component';
import colors from '~/components/atoms/styles/colors';
import { deslogarDoSistema } from '~/services/autenticacao/autenticacao-deslogar';

function NavBarScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

NavBarScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const ToolbarStyled = styled(Toolbar)({
  backgroundColor: colors.nav,
  color: colors.white,
  minHeight: '56px',
});

export default function NavBar({ exibirNomeProva }) {
  const nomeUsuario = useSelector((state) => state.usuario?.nome);
  const codigoEOL = useSelector((state) => state.usuario?.codigoEOL);
  const nomeProva = useSelector(
    (state) => state.provas?.dadosProvaIniciada?.nomeProva,
  );

  const onClickSair = () => deslogarDoSistema();

  return (
    <>
      <NavBarScroll>
        <AppBar>
          <ToolbarStyled>
            <div
              style={{
                flexGrow: 1,
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              <div
                style={{
                  marginBottom: exibirNomeProva ? -4 : 0,
                }}
              >{`${nomeUsuario} (${codigoEOL})`}</div>
              {exibirNomeProva && nomeProva ? (
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 400,
                    marginBottom: -15,
                  }}
                >
                  {nomeProva}
                </div>
              ) : (
                ''
              )}
            </div>
            <ButtonSair onClick={onClickSair} />
          </ToolbarStyled>
        </AppBar>
      </NavBarScroll>
      <Toolbar />
    </>
  );
}

NavBar.propTypes = {
  exibirNomeProva: PropTypes.string.isRequired,
};
