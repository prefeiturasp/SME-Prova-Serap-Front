import MuiButton from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import colors from '../styles/colors';

const ButtonStyled = styled(MuiButton)({
  fontSize: '16px',
  color: colors.white,
  backgroundColor: colors.primary,
  height: 48,
  '&:hover': {
    backgroundColor: colors.primary,
  },
  borderRadius: '12px',
});

const Button = (props) => {
  const { fullWidth, variant, onClick, children } = props;
  return (
    <ButtonStyled fullWidth={fullWidth} variant={variant} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  fullWidth: true,
  variant: 'contained',
  onClick: () => {},
};

export default Button;
