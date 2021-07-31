import React from 'react';
import styled from 'styled-components';
import LabelFooter from '~/components/molecules/label-footer/label-footer.component';

export const Container = styled.div`
  margin-top: auto;
  left: 0;
  bottom: 0;
  width: 100%;
  margin-bottom: 16px;
`;

const Footer = () => (
  <Container>
    <LabelFooter />
  </Container>
);

export default Footer;
