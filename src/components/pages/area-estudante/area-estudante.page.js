import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Tabs from '~/components/atoms/tabs/tabs.atom';
import CardProvaAtual from '~/components/molecules/card-prova-atual.molecule';
import { provasService } from '~/services/provas/provas.service';

const AreaEstudante = () => {
  const dadosProvas = useSelector((state) => state.provas?.dadosProvas);

  const [dadosTabs, setDadosTabs] = useState([]);

  useEffect(() => {
    provasService.obterProvas();
  }, []);

  const montarDadosTabs = (dados) => [
    {
      titulo: 'Prova atual',
      numeroTab: '1',
      componente: dados.map((prova) => <CardProvaAtual {...prova} />),
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
