import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import Tabs from '~/components/atoms/tabs/tabs.atom';
import CardProvaAtual from '~/components/molecules/card-prova-atual.molecule';
import { setDadosProvaIniciada } from '~/redux/modulos/provas/actions';
import { URL_PROVA } from '~/route/url.constants';
import history from '~/services/history';
import { provasService } from '~/services/provas/provas.service';

const AreaEstudante = () => {
  const dadosProvas = useSelector((state) => state.provas?.dadosProvas);

  const dispatch = useDispatch();

  const [dadosTabs, setDadosTabs] = useState([]);

  useEffect(() => {
    provasService.obterProvas();
  }, []);

  const onClickInicialProva = (prova) => {
    dispatch(setDadosProvaIniciada(prova));
    history.push(URL_PROVA);
  };

  const montarDadosTabs = (dados) => [
    {
      titulo: 'Prova atual',
      numeroTab: '1',
      componente: dados.map((prova) => (
        <CardProvaAtual
          key={shortid.generate()}
          {...prova}
          onClickInicialProva={onClickInicialProva}
        />
      )),
    },
  ];

  useEffect(() => {
    if (dadosProvas?.length) {
      setDadosTabs(montarDadosTabs(dadosProvas));
    } else {
      setDadosTabs([]);
    }
  }, [dadosProvas]);

  return dadosProvas?.length ? (
    <Tabs dados={dadosTabs || []} tabInicial="1" />
  ) : (
    ''
  );
};

export default AreaEstudante;
