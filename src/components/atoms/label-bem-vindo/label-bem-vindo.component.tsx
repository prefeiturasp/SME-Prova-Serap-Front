import { Grid } from '@material-ui/core';

const LabelBemVindo = () => {
  return (
    <Grid
      item
      xs={12}
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ fontSize: '24px', fontWeight: 600, marginBottom: '24px' }}
    >
      Bem-vindo
    </Grid>
  );
};

export default LabelBemVindo;
