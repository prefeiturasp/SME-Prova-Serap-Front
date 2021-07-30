import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  color: rgb(102, 102, 102);
  font-size: 12px;
`;

const StyleLabelFooter = ({ children }) => <Container>{children}</Container>;

StyleLabelFooter.propTypes = {
  children: PropTypes.node,
};

StyleLabelFooter.defaultProps = {
  children: '',
};

export default StyleLabelFooter;
