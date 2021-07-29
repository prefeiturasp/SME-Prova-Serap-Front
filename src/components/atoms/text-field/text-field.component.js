import { styled } from '@material-ui/core/styles';
import MuiTextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import colors from '../styles/colors';

const TextFieldStyled = styled(MuiTextField)({
  '& .MuiFilledInput-root': {
    backgroundColor: colors.inputbackground,
    borderRadius: '12px',
  },
  '& label.Mui-focused': {},
  '& .MuiFilledInput-underline:after': {
    width: '92%',
    left: '4%',
  },
  '& .MuiFilledInput-underline:before': {
    width: '92%',
    left: '4%',
  },
});

const TextField = (props) => {
  const {
    label,
    fullWidth,
    id,
    name,
    variant,
    type,
    value,
    onChange,
    required,
    error,
    helperText,
    startAdornment,
    endAdornment,
    maxLength,
    inputMode,
  } = props;

  return (
    <TextFieldStyled
      label={label}
      fullWidth={fullWidth}
      id={id}
      name={name}
      variant={variant}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      error={error}
      helperText={helperText}
      InputProps={{
        startAdornment,
        endAdornment,
        inputProps: {
          maxLength,
          inputMode,
        },
      }}
    />
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  fullWidth: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.node,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  maxLength: PropTypes.number,
  inputMode: PropTypes.string,
};

TextField.defaultProps = {
  label: '',
  fullWidth: true,
  id: '',
  name: '',
  variant: 'filled',
  type: 'text',
  value: undefined,
  onChange: () => {},
  required: false,
  error: false,
  helperText: '',
  startAdornment: null,
  endAdornment: null,
  maxLength: null,
  inputMode: '',
};

export default TextField;
