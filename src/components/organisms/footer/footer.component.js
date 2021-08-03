import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import LabelFooter from '~/components/atoms/label-footer/label-footer.component';
import { setVersaoAtualFront } from '~/redux/modulos/sistema/actions';
import { erros } from '~/services/snackbar/snackbar';
import { versaoService } from '~/services/versao/versao.service';

export const Container = styled.div`
  margin-top: auto;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-bottom: 16px;
`;

const Footer = () => {
  const dispatch = useDispatch();

  const obterVersao = useCallback(async () => {
    const resposta = await versaoService
      .obterVersaoAtualFront()
      .catch((e) => erros(e));
    if (resposta?.data) {
      dispatch(setVersaoAtualFront(resposta.data));
    } else {
      dispatch(setVersaoAtualFront());
    }
  }, [dispatch]);

  useEffect(() => {
    obterVersao();
  }, [obterVersao]);

  return (
    <Container>
      <LabelFooter />
    </Container>
  );
};

export default Footer;
