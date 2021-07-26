import { Grid } from '@material-ui/core';
import LogoSerap from '../images/logo-serap.svg';

const LogoSerapLogin = () => {
  return (
    <Grid
      item
      xs={12}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ marginBottom: '48px' }}
    >
      <img
        src={LogoSerap}
        style={{ height: '104px', width: '256px' }}
        alt="logo-serap"
      />
    </Grid>
  );
};

export default LogoSerapLogin;
