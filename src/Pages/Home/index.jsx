import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { hideDrawer } from "../../ReduxStore/DrawerSlice";
import { DashFooter, VhaLogo, VirusLogo } from '../../assets';
import { ChemistIcon,
         DashboardIcon,
         DoctocIcons, 
         WalletIcon, 
         LogOutIcon, 
         MedicinesIcon, 
         MessageIcon, 
         SettingIcon, 
         StatisticsIcon } from '../../assets/icons';
import { Drawer } from '@mui/material';
import { DashboardPanel, Footer, Statistics, Wallet, Chemists, Header } from '../../components';
import { Link } from 'react-router-dom';

const drawerWidth = 235;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Home = () => {

  const theme = useTheme();
  const open = useSelector((state) => state.Open.open);
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dashList = [
    { id: 0, label: "Dashboard", icon: <DashboardIcon iconColor={value === 0 ? "#15BFFD" : "#fff"} /> },
    { id: 1, label: "Statistics", icon: <StatisticsIcon iconColor={value === 1 ? "#15BFFD" : "#fff"} /> },
    { id: 2, label: "Chemists", icon: <ChemistIcon iconColor={value === 2 ? "#15BFFD" : "#fff"} /> },
    { id: 3, label: "Wallet", icon: <WalletIcon iconColor={value === 3 ? "#15BFFD" : "#fff"} /> },
    { id: 4, label: "Doctors", icon: <DoctocIcons iconColor={value === 4 ? "#15BFFD" : "#fff"} /> },
    { id: 5, label: "Hospitals", icon: <MedicinesIcon iconColor={value === 5 ? "#15BFFD" : "#fff"} /> },
    { id: 6, label: "Messages", icon: <MessageIcon iconColor={value === 6 ? "#15BFFD" : "#fff"} />},
    { id: 7, label: "Settings", icon: <SettingIcon iconColor={value === 7 ? "#15BFFD" : "#fff"} />}
  ];

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', background:"#1B1C31" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: "#222338",
            boxShadow: "8.53024px 4.26512px 25.5907px rgba(0, 0, 0, 0.03)"
          }
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
        sx={{padding: "2em 0.8em"}}>
          <div className='flex flex-col gap-y-3 py-8 w-full'>
          <div>
            <div className="flex flex-row justify-end w-full">
            <div className="block lg:block">
            <IconButton onClick={() => dispatch(hideDrawer())}>
            {theme.direction === 'ltr' ? <FaChevronLeft className='text-white text-md'/> : <FaChevronRight className='text-white text-md' />}
          </IconButton>
            </div>
            </div>
          </div>
            <div>
              {/* vhaLogo */}
              <img src={VhaLogo} width={263} height={71} alt="vha logo" />
            </div>
          </div>
        </DrawerHeader>
        <CssBaseline />
        {/* menu_Drawer */}
        <Tabs
        orientation="vertical"
        variant="scrollable"
        indicatorColor="transparent"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          '& .MuiTabScrollButton-root': {
            display: 'none',
          },
        }}
      >
        <div className="flex flex-col w-full">
          {dashList?.map((x) => (
              <div 
              key={x.id}
              className="flex flex-row gap-x-4 px-8 py-4 cursor-pointer w-full"
              style={{
                backgroundColor: "transparent",
                background: value === x.id 
                  ? "linear-gradient(90deg, rgba(21, 191, 253, 0.1) 0%, rgba(0, 255, 194, 0.3) 117.12%)" 
                  : "transparent",
                  transition: "all 0.3s ease-in-out"
              }}
              onClick={() => {setValue(x.id)}}>
              <div>{x.icon}</div>
              <div className="text-white text-sm font-poppins"
              style={{color: value === x.id ? "#15BFFD" : "#fff",
                      transition: "color 0.2s ease-in-out"
              }}
              >{x.label}</div>
              </div>
               ))}
          </div>
          <CssBaseline />
          <div className="px-9 pt-14">
               <img src={VirusLogo} width={202} height={165} alt="Virus" />
          </div>
          <div className="px-6 pb-6">
          <img src={DashFooter} width={241} height={241} alt="dashFooter" />
          </div>
          <Divider sx={{background:"#eee"}} />
          <div className="flex flex-row justify-center py-12 w-full">
               <div>
                <Link to={"/login"}>
                <Button 
                  variant="text"
                  disableRipple={true}
                  sx={{
                    color: "#fff",
                    letterSpacing:"1px",
                    background: "transparent",
                    fontWeight: "600",
                    borderRadius: "25px",
                    textTransform: "capitalize",
                    '&:hover': {
                      background: "transparent",
                      color: "#fff"
                    }
                    }}
                    startIcon={<LogOutIcon />}>
                      <div className="px-6 font-poppins text-lg med:text-sm">
                      Logout
                      </div>
                  </Button>
                  </Link>
               </div>
          </div>
      </Tabs>
      </Drawer>
      <Main sx={{padding: "0px", background: "#1B1C31"}} open={open}>
      <TabPanel value={value} index={0}>
        <DashboardPanel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Statistics />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Chemists />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Wallet />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <DashboardPanel />
      </TabPanel>
      <TabPanel value={value} index={5}>
      <DashboardPanel />
      </TabPanel>
      <TabPanel value={value} index={6}>
      <DashboardPanel />
      </TabPanel>
      <TabPanel value={value} index={7}>
      <DashboardPanel />
      </TabPanel>
      <Footer />
      </Main>
    </Box>
    </>
  )
}

export default Home;