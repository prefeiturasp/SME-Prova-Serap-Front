import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import PropTypes from 'prop-types';
import React from 'react';
import colors from '../styles/colors';

const useStyles = makeStyles(() => ({
  root: {
    width: '552px',
  },
  tabPanel: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const StyledTab = withStyles(() => ({
  root: {
    fontSize: '20px',
    weight: '600',
    textTransform: 'none',
  },
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    backgroundColor: colors.primary,
    height: '4px',
  },
})((props) => (
  <TabList
    {...props}
    TabIndicatorProps={{ children: <span /> }}
    variant="scrollable"
  />
));

const TabsAtom = ({ dados, tabInicial }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(tabInicial);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <StyledTabs onChange={handleChange} aria-label="simple-tabs">
          {dados?.map((item) => (
            <StyledTab label={item?.titulo} value={item?.numeroTab} />
          ))}
        </StyledTabs>

        {dados?.map((item) => (
          <TabPanel className={classes.tabPanel} value={item?.numeroTab}>
            {item?.componente}
          </TabPanel>
        ))}
      </TabContext>
    </div>
  );
};

TabsAtom.propTypes = {
  dados: PropTypes.oneOfType(PropTypes.array),
  tabInicial: PropTypes.string,
};

TabsAtom.defaultProps = {
  dados: [],
  tabInicial: '',
};

export default TabsAtom;
