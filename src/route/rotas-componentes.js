import React from 'react';
import AreaEstudante from '~/components/pages/area-estudante/area-estudante.page';
import PaginaComErro from '~/components/pages/pagina-com-erro/pagina-com-erro.page';
import PaginaTemplate from '~/components/templates/pagina/pagina.template';
import { URL_ERRO, URL_HOME } from './url.constants';

const rotasComponentes = [
  {
    path: URL_HOME,
    component: () => (
      <PaginaTemplate>
        <AreaEstudante />
      </PaginaTemplate>
    ),
    exact: true,
  },
  {
    path: URL_ERRO,
    component: PaginaComErro,
    exact: true,
  },
];

export default rotasComponentes;
