import { store } from '~/redux';
import { limparSessao } from '~/redux/modulos/sessao/actions';
import { setVersaoAtualFront } from '~/redux/modulos/sistema/actions';
import { deslogar } from '~/redux/modulos/usuario/actions';
import { URL_LOGIN } from '~/route/url.constants';
import history from '../history';

const deslogarDoSistema = () => {
  store.dispatch(deslogar());
  store.dispatch(limparSessao());
  store.dispatch(setVersaoAtualFront());
  history.push(URL_LOGIN);
};

export { deslogarDoSistema };
