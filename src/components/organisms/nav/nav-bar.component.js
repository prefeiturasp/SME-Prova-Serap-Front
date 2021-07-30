import AppBar from '@material-ui/core/AppBar';
import { styled } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonSair from '~/components/atoms/button-sair/button.component';
import colors from '~/components/atoms/styles/colors';
import { limparSessao } from '~/redux/modulos/sessao/actions';
import { deslogar } from '~/redux/modulos/usuario/actions';
import { URL_LOGIN } from '~/route/url.constans';
import history from '~/services/history';

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

export default function NavBar() {
  const dispatch = useDispatch();

  const nomeUsuario = useSelector((state) => state.usuario?.nome);
  const codigoEOL = useSelector((state) => state.usuario?.codigoEOL);

  const onClickSair = () => {
    dispatch(deslogar());
    dispatch(limparSessao());
    history.push(URL_LOGIN);
  };

  return (
    <>
      <NavBarScroll>
        <AppBar>
          <ToolbarStyled>
            <div style={{ flexGrow: 1, fontWeight: 700, fontSize: 16 }}>
              {`${nomeUsuario} (${codigoEOL})`}
            </div>
            <ButtonSair onClick={onClickSair} />
          </ToolbarStyled>
        </AppBar>
      </NavBarScroll>
      <Toolbar />
    </>
  );
}
