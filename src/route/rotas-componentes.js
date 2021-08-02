import PaginaComErro from '~/components/pages/erro/erro.page';
import HomeTemplate from '~/components/templates/home/home.template';
import { URL_ERRO, URL_HOME } from './url.constants';

const rotasComponentes = [
  {
    path: URL_HOME,
    component: HomeTemplate,
    exact: true,
  },
  {
    path: URL_ERRO,
    component: PaginaComErro,
    exact: true,
  },
];

export default rotasComponentes;
