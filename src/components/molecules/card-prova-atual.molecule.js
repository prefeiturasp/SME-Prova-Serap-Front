import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import {
  ArrowForward,
  FormatListNumbered,
  InsertInvitation,
} from '@material-ui/icons';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../atoms/button/button.component';
import LogoProva from '../atoms/images/prova.svg';

const useStyles = makeStyles({
  root: {
    borderRadius: 16,
    border: `1px solid rgba(0, 0, 0, 0.34)`,
    boxSizing: 'border-box',
    boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.25)`,
    background: '#FFFFFF',
    height: '220px',
    fontFamily: 'Poppins',
    display: 'flex',
    marginBottom: '15px',
  },
  descricaoProva: {
    fontWeight: 700,
    fontSize: 18,
    marginBottom: '22px',
  },
  infoProva: {
    fontWeight: 'normal',
    fontSize: 14,
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
  },
  botaoAcao: {
    width: '256px',
  },
  valorInfos: {
    color: '#4D4D4D',
    fontWeight: 700,
  },
});

const CardProvaAtual = (props) => {
  const { itensQuantidade, dataInicio, descricao, onClickInicialProva } = props;
  const classes = useStyles();

  const montarDiaProva = (data) => {
    const diaSemana = moment(data).format('ddd');
    const dataHora = moment(data).format('L');
    return (
      <strong>
        <span style={{ textTransform: 'capitalize' }}>{` ${diaSemana}.`}</span>
        {dataHora}
      </strong>
    );
  };

  return (
    <Card className={classes.root}>
      <img
        src={LogoProva}
        style={{ height: '92px', width: '80px', margin: '24px' }}
        alt="logo-prova"
      />
      <CardContent className={classes.carContent}>
        <div className={classes.descricaoProva}>{descricao}</div>
        <div className={classes.infoProva}>
          <FormatListNumbered htmlColor="#F2945B" style={{ marginRight: 8 }} />
          <span>
            Quantidade de itens:
            <strong
              className={classes.valorInfos}
            >{` ${itensQuantidade}`}</strong>
          </span>
        </div>
        <div className={classes.infoProva}>
          <InsertInvitation htmlColor="#62C153" style={{ marginRight: 8 }} />
          <span>
            Data de aplicação:
            <strong className={classes.valorInfos}>
              {dataInicio ? montarDiaProva(dataInicio) : ''}
            </strong>
          </span>
        </div>
        <div className={classes.botaoAcao}>
          <Button onClick={onClickInicialProva} endIcon={<ArrowForward />}>
            Iniciar a prova
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

CardProvaAtual.propTypes = {
  descricao: PropTypes.string,
  itensQuantidade: PropTypes.string,
  dataInicio: PropTypes.string,
  onClickInicialProva: PropTypes.func,
};

CardProvaAtual.defaultProps = {
  descricao: '',
  itensQuantidade: '',
  dataInicio: '',
  onClickInicialProva: () => {},
};

export default CardProvaAtual;
