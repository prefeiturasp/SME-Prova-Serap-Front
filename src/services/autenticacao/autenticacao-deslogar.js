import { store } from '~/redux';
import { limparSessao } from '~/redux/modulos/sessao/actions';
import { deslogar } from '~/redux/modulos/usuario/actions';
import { URL_LOGIN } from '~/route/url.constans';
import history from '../history';

const deslogarDoSistema = () => {
  store.dispatch(deslogar());
  store.dispatch(limparSessao());
  history.push(URL_LOGIN);
};

export { deslogarDoSistema };
