import { TextFieldProps } from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import {
  createStyles,
  StyleRules,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
import React from 'react';
import { Colors } from '../colors/colors';

const styles: (theme: Theme) => StyleRules<string> = (theme) =>
  createStyles({
    root: {
      '& .MuiFilledInput-root': {
        backgroundColor: Colors.Inputbackground,
        borderRadius: '12px',
      },
      '& label.Mui-focused': {
        color: Colors.Primary,
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: Colors.Primary,
        width: '92%',
        left: '4%',
      },
      '& .MuiFilledInput-underline:before': {
        width: '92%',
        left: '4%',
      },
    },
  });

interface OwnProps {}

type PublicProps = OwnProps & TextFieldProps;
type Props = PublicProps & WithStyles<typeof styles>;

const TextField: React.FC<Props> = ({ classes, ...rest }) => {
  return <MuiTextField {...rest} className={classes.root} />;
};
export default withStyles(styles)(
  TextField
) as React.ComponentType<PublicProps>;
