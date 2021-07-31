import { IconButton } from '@material-ui/core';
import { ExitToAppOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import colors from '../styles/colors';

const ButtonSair = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="sair"
      style={{ color: colors.actionNav }}
      onClick={onClick}
    >
      <ExitToAppOutlined />
      <div style={{ fontSize: 14, marginLeft: 6 }}>Sair</div>
    </IconButton>
  );
};

ButtonSair.propTypes = {
  onClick: PropTypes.func,
};

ButtonSair.defaultProps = {
  onClick: () => {},
};

export default ButtonSair;
