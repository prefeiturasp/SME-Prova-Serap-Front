import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import {
  createStyles,
  StyleRules,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
import React from 'react';
import { Colors } from '../colors/colors.enum';

const styles: (theme: Theme) => StyleRules<string> = (theme) =>
  createStyles({
    root: {
      fontSize: '16px',
      color: Colors.White,
      backgroundColor: Colors.Primary,
      height: 48,
      '&:hover': {
        backgroundColor: Colors.Primary,
      },
      borderRadius: '12px',
    },
  });

interface OwnProps {
  text: string;
}

type PublicProps = OwnProps & ButtonProps;
type Props = PublicProps & WithStyles<typeof styles>;

const Button: React.FC<Props> = ({ classes, text, ...rest }) => {
  return (
    <MuiButton {...rest} className={classes.root}>
      {text}
    </MuiButton>
  );
};
export default withStyles(styles)(Button) as React.ComponentType<PublicProps>;
