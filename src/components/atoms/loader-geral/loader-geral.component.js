import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const LoaderGeral = () => {
  const classes = useStyles();

  const exibirLoaderGeral = useSelector(
    (state) => state.loader?.exibirLoaderGeral,
  );

  return (
    <Backdrop className={classes.backdrop} open={!!exibirLoaderGeral}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoaderGeral;
