

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Project.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
     backgroundColor: theme.palette.background.paper,
    
  },
   tab_border :{
  
    backgroundColor: "black",
 
   
  },
 tab_label:{
   textColor:"white"
 }
        
}));

export default function ScrollableTabsButtonPrevent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      
      <TabPanel value={value} index={0}>
      <img src="Images/asd.png" alt="image1"  class="imgwidth" />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <img src="Images/qw.png" alt="image1"   class="imgwidth" />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <img src="Images/asd.png" alt="image1"  class="imgwidth"/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <img src="Images/qw.png" alt="image1"  class="imgwidth"/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <img src="Images/asd.png" alt="image1" class="imgwidth"  />
      </TabPanel>
      <TabPanel value={value} index={5}>
      <img src="Image/asd.png" alt="image1" class="imgwidth" />
      </TabPanel>
      <TabPanel value={value} index={6}>
      <img src="Image/asd.png" alt="image1"  class="imgwidth"  />
      </TabPanel>
     
     
    
      <AppBar position="static">

        <Tabs  className={classes.tab_border}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable prevent tabs example"
          indicatorColor="black"
          textColor="Black"
        
        
          
        >
          <Tab  className={classes.tab_label,classes.tab_border}  label="Wedding Sale"  aria-label="phone" {...a11yProps(0)} />
          <Tab     label="Big TV Sale" {...a11yProps(1)} />
          <Tab     label="HP Laptop Sale"  aria-label="person" {...a11yProps(2)} />
          <Tab   label="Best Offers On Apple"  aria-label="help" {...a11yProps(3)} />
          <Tab   label="Summer Sale"  aria-label="shopping" {...a11yProps(4)} />
          <Tab   label="Item One"  aria-label="up" {...a11yProps(5)} />
          <Tab  label="Item One" aria-label="down" {...a11yProps(6)} /> 
          {/* <Tab  label="Item One" icon={<ThumbUp />} aria-label="down" {...a11yProps(6)} />  */}
        </Tabs> 
      </AppBar>


    </div>
  );
}