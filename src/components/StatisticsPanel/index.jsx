import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from "@mui/material/TableHead";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { ProfileIconOne, ProfileIconTwo, ProfileIconThree ,Down, UpIcon } from "../../assets";
import PieDart from "./PieDart";
import LastWChart from "./LastWChart";

/* Convert_From */
const ConvertFrom = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#121212',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "0px"
    },
    '&:hover fieldset': {
      borderColor: '#121212',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#121212',
      borderWidth: '0rem'
    }
  },
});

/* Convert_To */
const ConvertTo = styled(TextField)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#A9A9A9',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: "0px"
    },
    '&:hover fieldset': {
      borderColor: '#A9A9A9',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#A9A9A9',
      borderWidth: '0rem'
    }
  },
});

const Statistics = () => {

  const [coin, setCoin] = useState(100);
  const [coins, setCoins] = useState(0);
  const [token, setToken] = useState('USDT');
  const [tokens, setTokens] = useState('VHA');
  
  useEffect(() => {
    /* convert USDT to VHA */
      if(token === 'USDT' && tokens === 'VHA'){
        setCoins(coin / 20);
      }

      /* convert VHA to USDT */
      if(token === 'VHA' && tokens === 'USDT'){
        setCoins(coin / 20);
      }

      /* convert USDT to BTC */
      if(token === 'USDT' && tokens === 'BTC'){
        setCoins(coin * Number('102.682'));
      }

      /* convert BTC to USDT */
      if(token === 'BTC' && tokens === 'USDT'){
        setCoins(coin * Number('102.682'));
      }

      /* convert BTC to ETH */
      if(token === 'BTC' && tokens === 'ETH'){
        setCoins(coin * Number('32.32'));
      }

      /* convert ETH to BTC */
      if(token === 'ETH' && tokens === 'BTC'){
        setCoins(coin * Number('0.03094'));
      }

      /* convert ETH to VHA */
      if(token === 'ETH' && tokens === 'VHA'){
        setCoins(coin * Number(2950*0.05));
      }

      /* convert VHA to ETH */
      if(token === 'VHA' && tokens === 'ETH'){
        setCoins(coin * Number(2950*0.05));
      }

      /* convert BTC to VHA */
      if(token === 'BTC' && tokens === 'VHA'){
        setCoins(coin * 42500 * 0.05);
      }

      /* convert VHA to BTC */
      if(token === 'VHA' && tokens === 'BTC'){
        setCoins(coin * 42500 * 0.05);
      }

      /* convert USDT to ETH */
      if(token === 'USDT' && tokens === 'ETH'){
        setCoins(coin * Number('3127.15'));
      }

      /* convert ETH to USDT */
      if(token === 'ETH' && tokens === 'USDT'){
        setCoins(coin * Number('3127.15'));
      }
      
      /* convert USDT to USDT */
      if(token === 'USDT' && tokens === 'USDT'){
        setCoins(coin * 1);
      }

      /* convert BTC to BTC */
      if(token === 'BTC' && tokens === 'BTC'){
        setCoins(coin * 1);
      }

      /* convert ETH to ETH */
      if(token === 'ETH' && tokens === 'ETH'){
        setCoins(coin * 1);
      }

      /* convert VHA to VHA */
      if(token === 'VHA' && tokens === 'VHA'){
        setCoins(coin * 1);
      }

  }, [coin, token, tokens]);

  const TokenConvrt = (e) => {
    e.preventDefault();

  }

  return (
    <div>
      <div className="flex flex-col gap-y-6 pt-6 w-full">
          {/* Assets Chart & Convert */}
          <div className="flex flex-row gap-x-6 med:flex-col gap-y-6">
                {/* Activity Feed */}
                <div className="flex flex-col gap-y-3 bg-dashbg px-6 py-6 rounded-xl shadow-lg w-1/2 med:w-full">
                    <div className="text-primaryC text-lg font-poppins font-bold tracking-wider lg:text-base">Assets</div>
                    <div className="flex flex-col w-full">
                      {/* Chart_Block */}
                      <div className="flex flex-row justify-center w-full">
                        {/* Radio Chart */}
                        <PieDart />
                      </div>
                      {/* Chart_Footer */}
                    <div className="flex flex-row justify-between py-3 w-full">
                      <div className="flex flex-row gap-x-2 px-2 py-2 bg-bgTag rounded-md">
                        <div className="rounded-md bg-bgTagOne block w-5">
                        </div>
                        <div className="font-poppins text-sm text-primaryC">
                          BTC
                        </div>
                      </div>
                      <div className="flex flex-row gap-x-2 px-2 py-2 bg-bgTag rounded-md">
                      <div className="rounded-md bg-ethbg block w-5">
                            </div>
                            <div className="font-poppins text-sm text-primaryC">
                              ETH
                            </div>
                      </div>
                      <div className="flex flex-row gap-x-2 px-2 py-2 bg-bgTag rounded-md">
                      <div className="rounded-md bg-vhabg block w-5">
                            </div>
                            <div className="font-poppins text-sm text-primaryC">
                              VHA
                            </div>
                      </div>
                      <div className="flex flex-row gap-x-2 px-2 py-2 bg-bgTag rounded-md">
                      <div className="rounded-md bg-others block w-5">
                            </div>
                            <div className="font-poppins text-sm text-primaryC">
                              Others
                            </div>
                      </div>
                    </div>
                    </div>
                </div>
                {/* Appointments */}
                <div className="flex flex-col gap-y-3 bg-dashbg px-6 py-6 rounded-xl shadow-lg w-1/2 med:w-full">
                <div className="text-primaryC text-lg font-poppins font-bold tracking-wider lg:text-base">Convert</div>
                {/* Convrt_Form */}
                  <form onSubmit={TokenConvrt}>
                      <div className="flex flex-col gap-y-6">
                        <div>
                        <div className="flex flex-row justify-between p-2 bg-convrtCellbg rounded-lg font-poppins-lg w-full">
                          <div className="font-poppins w-full">
                          {/* convrtFrom */}
                          <ConvertFrom 
                            fullWidth
                            value={coin}
                            sx={{
                                "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderWidth: "0rem",
                                    borderStyle: "solid",
                                    borderColor: '#121212',
                                    borderRadius: "0px"
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: "#121212"
                                },
                                }
                            }}
                            inputProps={{
                                sx: {
                                color: '#626D7D',
                                fontSize: '16px',
                                letterSpacing: '1px',
                                fontWeight:'bold',
                                backgroundColor:'#121212',
                                padding:'11px 12px',
                                borderRadius: "0px",
                                "&::placeholder":{
                                    opacity: 1,
                                    color: '#626D7D',
                                    }
                                },
                                }}
                                placeholder={coin}
                                onChange={(e) => setCoin(e.target.value.replace(/[^0-9]/, ''))}
                                type="text"
                                />
                          </div>
                          <div className="font-poppins">
                          <Select
                            value={token}
                            onChange={(e) => setToken(e.target.value)}
                            displayEmpty
                            sx={{
                                fontSize: "14px",
                                padding: "0px",
                                textAlign: "center",
                                color: "#26AB5F",
                                background: '#23493D',
                                borderRadius: "12px",
                                border: "none", // Remove border
                                outline: "none", // Remove outline
                                '& .MuiSelect-select': {
                                    padding: '12px 16px',
                                    border: "none", // Remove border from select
                                    outline: "none", // Remove outline from select
                                },
                                '& .MuiSelect-icon': {
                                    color: '#fff',
                                },
                              }}
                              MenuProps={{
                                PaperProps:{
                                  sx: {
                                    padding: '0',
                                    
                                    '& .MuiList-root': {
                                      padding: '0px'
                                    }
                                  }
                                }
                              }}
                              inputProps={{ 
                                  'aria-label': 'Without label',
                                  sx: {
                                      fontSize: "14px",
                                      border: "none", // Remove border from input
                                      outline: "none", // Remove outline from input
                                  }
                              }}
                            >
                            <MenuItem value={"USDT"}>USDT</MenuItem>
                            <MenuItem value={"BTC"}>BTC</MenuItem>
                            <MenuItem value={"ETH"}>ETH</MenuItem>
                            <MenuItem value={"VHA"}>VHA</MenuItem>
                        </Select>
                          </div>
                      </div>
                        </div>
                        <div>
                        <div className="flex flex-row justify-between p-2 bg-convrtCellbg rounded-lg font-poppins w-full">
                          <div className="font-poppins w-full">
                          {/* convrtTo */}
                          <ConvertTo 
                            fullWidth
                            value={`${(coins).toFixed(2)}`}
                            sx={{
                                "& .MuiOutlinedInput-root":{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderWidth: "0rem",
                                    borderStyle: "solid",
                                    borderColor: '#121212',
                                    borderRadius: "0px"
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: "#121212"
                                },
                                }
                            }}
                            InputProps={{
                              readOnly: true
                            }}
                            inputProps={{
                                sx: {
                                color: '#626D7D',
                                fontSize: '16px',
                                letterSpacing: '1px',
                                fontWeight:'bold',
                                backgroundColor:'#121212',
                                padding:'11px 12px',
                                borderRadius: "0px",
                                "&::placeholder":{
                                    opacity: 1,
                                    color: '#626D7D',
                                    }
                                },
                                }}
                                placeholder={coins}
                                onChange={(e) => setCoins(e.target.value.replace(/[^0-9]/, ''))}
                                type="text"
                                />
                          </div>
                          <div className="font-poppins">
                          <Select
                            value={tokens}
                            onChange={(e) => setTokens(e.target.value)}
                            displayEmpty
                            sx={{
                                fontSize: "14px",
                                padding: "0px",
                                textAlign: "center",
                                color: "#FF8B1E",
                                background: '#3C2E05',
                                borderRadius: "12px",
                                border: "none", // Remove border
                                outline: "none", // Remove outline
                                '& .MuiSelect-select': {
                                    padding: '12px 16px',
                                    border: "none", // Remove border from select
                                    outline: "none", // Remove outline from select
                                },
                                '& .MuiSelect-icon': {
                                    color: '#fff',
                                },
                              }}
                              MenuProps={{
                                PaperProps:{
                                  sx: {
                                    padding: '0',
                                    
                                    '& .MuiList-root': {
                                      padding: '0px'
                                    }
                                  }
                                }
                              }}
                              inputProps={{ 
                                  'aria-label': 'Without label',
                                  sx: {
                                      fontSize: "14px",
                                      border: "none", // Remove border from input
                                      outline: "none", // Remove outline from input
                                  }
                              }}
                            >
                            <MenuItem 
                              value={"USDT"}
                              >USDT</MenuItem>
                            <MenuItem value={"BTC"}
                            >BTC</MenuItem>
                            <MenuItem value={"ETH"}
                            >ETH</MenuItem>
                            <MenuItem value={"VHA"}
                            >VHA</MenuItem>
                        </Select>
                          </div>
                      </div>
                        {/* Submit_Form */}
                        <div className="py-3 font-poppins w-full">
                        <Button
                        disableRipple={false} 
                        sx={{
                            background:"linear-gradient(265.41deg, #46AA72 0%, #2DA0A4 77.48%)",
                            color: "#fff",
                            fontWeight: "600",
                            fontSize: "18px",
                            padding: "14px 12px",
                            borderRadius: "8px",
                            width: "100%",
                            textTransform: "capitalize",
                            '&:hover':{
                                background:"linear-gradient(265.41deg, #46AA72 0%, #2DA0A4 77.48%)"
                            }
                        }}
                        type="submit"
                        >
                            convert now
                        </Button>
                        </div>
                        <div className="text-captextC font-poppins text-xs">
                        The ultimate price and output is determined by the amount of tokens in the pool at the time of your swap.
                        </div>
                        </div>
                      </div>

                  </form>
                </div>
            </div>
            {/* History_Table */}
            <div className="flex flex-col gap-y-3 bg-dashbg px-3 py-4 rounded-xl shadow-lg w-full">
              {/* Table_Header */}
              <div className="text-lg text-mainHeadC font-poppins tracking-wider font-bold lg:text-base">
                History
              </div>
              {/* transaction_table */}
              <div className="container tableCont p-0 overflow-x-auto w-full">
              <TableContainer component={Paper} sx={{backgroundColor:"transparent", border:"0px"}}>
                <Table aria-label="collapsible table" sx={{backgroundColor:"transparent", border:"0px"}}>
                <TableHead className="whitespace-nowrap">
                  <TableRow sx={{ "& th": { padding: "12px 0px", borderBottom: "none"} }}>
                    <TableCell align="left" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#fff", fontSize:"16px", letterSpacing:"1px", textTransform:"capitalize", whiteSpace:"nowrap", padding:"12px 8px"}}>
                    <div className="sm:text-sm">
                      #
                    </div>
                    </TableCell>
                    <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#fff", fontSize:"16px", letterSpacing:"1px", textTransform:"capitalize", whiteSpace:"nowrap", padding:"12px 8px"}}>
                    <div className="sm:text-sm">
                      Name
                    </div>
                    </TableCell>
                    <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#fff", fontSize:"16px", letterSpacing:"1px", textTransform:"capitalize", whiteSpace:"nowrap", padding:"12px 8px"}}>
                    <div className="sm:text-sm">
                      Price
                    </div>
                    </TableCell>
                    <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#fff", fontSize:"16px", letterSpacing:"1px", textTransform:"capitalize", whiteSpace:"nowrap", padding:"12px 8px"}}>
                    <div className="sm:text-sm">
                      Time
                      </div>
                    </TableCell>
                    <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#fff", fontSize:"16px", letterSpacing:"1px", textTransform:"capitalize", whiteSpace:"nowrap", padding:"12px 8px"}}>
                    <div className="sm:text-sm">
                      Status
                    </div>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* first_Row */}
                <TableRow sx={{ "& td": { padding: "22px 0px", borderBottom: "0.3px solid rgba(255, 255, 255, 0.1)"} }}>
                <TableCell align="left" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                    <div className="flex flex-row justify-start w-full">
                        <img src={Down} width={23} height={24} alt="Success Pointer" />
                    </div>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                  <span className="text-base font-poppins uppercase text-primaryC sm:text-xs">
                    sol
                  </span>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                  <span className="text-base text-SuccessC font-poppins sm:text-xs">
                  +$23,738
                  </span>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                  <span className="text-base font-poppins text-primaryC sm:text-xs">
                    11:34 PM
                  </span>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                    {/* status */}
                    <div className="flex flex-row justify-center w-full">
                    <Chip 
                      label="pending" 
                      sx={{color:"#F4A662", 
                          background:"rgba(244, 208, 100, 0.2)", 
                          fontSize:"11px", 
                          borderRadius:"6px", 
                          letterSpacing:"1px"}}
                    />
                    </div>
                </TableCell>
              </TableRow>
              {/* second_Row */}
              <TableRow sx={{ "& td": { padding: "22px 0px", borderBottom: "0.3px solid rgba(255, 255, 255, 0.1)"} }}>
                <TableCell align="left" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                    <div className="flex flex-row justify-start w-full">
                        <img src={UpIcon} width={23} height={24} alt="Success Pointer" />
                    </div>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                  <span className="text-base font-poppins uppercase text-primaryC sm:text-xs">
                    sandusdt
                  </span>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                  <span className="text-base text-loseC font-poppins sm:text-xs">
                    -$576
                  </span>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                  <span className="text-base font-poppins text-primaryC sm:text-xs">
                    06:01 AM
                  </span>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                    {/* status */}
                    <div className="flex flex-row justify-center w-full">
                    <Chip 
                      label="Success" 
                      sx={{color:"#26AB5F", 
                          background:"rgba(38, 171, 95, 0.2)", 
                          fontSize:"11px", 
                          borderRadius:"6px", 
                          letterSpacing:"1px"}} />
                    </div>
                </TableCell>
              </TableRow>
              {/* Third_Row */}
              <TableRow sx={{ "& td": { padding: "22px 0px", borderBottom: "0.3px solid rgba(255, 255, 255, 0.1)"} }}>
                <TableCell align="left" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                    <div className="flex flex-row justify-start w-full">
                        <img src={Down} width={23} height={24} alt="Success Pointer" />
                    </div>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                  <span className="text-base font-poppins uppercase text-primaryC sm:text-xs">
                    vha token
                  </span>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                  <span className="text-base text-SuccessC font-poppins sm:text-xs">
                    +$3500
                  </span>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                  <span className="text-base font-poppins text-primaryC sm:text-xs">
                    02:10 AM
                  </span>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                    {/* status */}
                    <div className="flex flex-row justify-center w-full">
                    <Chip 
                      label="Success" 
                      sx={{color:"#26AB5F", 
                          background:"rgba(38, 171, 95, 0.2)", 
                          fontSize:"11px", 
                          borderRadius:"6px", 
                          letterSpacing:"1px"}} />
                    </div>
                </TableCell>
              </TableRow>
              {/* fourth_Row */}
              <TableRow sx={{ "& td": { padding: "22px 0px", borderBottom: "0.3px solid rgba(255, 255, 255, 0.1)"} }}>
                <TableCell align="left" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                    <div className="flex flex-row justify-start w-full">
                        <img src={UpIcon} width={23} height={24} alt="Success Pointer" />
                    </div>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                  <span className="text-base font-poppins uppercase text-primaryC sm:text-xs">
                    ftmusdt
                  </span>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                  <span className="text-base text-loseC font-poppins sm:text-xs">
                    +$791
                  </span>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                  <span className="text-base font-poppins text-primaryC sm:text-xs">
                    06:45 PM
                  </span>
                </TableCell>
                <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
                    {/* status */}
                    <div className="flex flex-row justify-center w-full">
                    <Chip 
                      label="Success" 
                      sx={{color:"#26AB5F", 
                          background:"rgba(38, 171, 95, 0.2)", 
                          fontSize:"11px", 
                          borderRadius:"6px", 
                          letterSpacing:"1px"}} />
                    </div>
                </TableCell>
              </TableRow>
                </TableBody>
                </Table>
              </TableContainer>
              </div>
            </div>
        {/* Last_Updates */}
        <div className="flex flex-row gap-x-6 med:flex-col gap-y-6">
                {/* Activity Feed */}
                <div className="flex flex-col gap-y-3 bg-dashbg px-6 py-6 rounded-xl shadow-lg w-1/2 med:w-full">
                    <div className="text-primaryC text-base font-poppins font-bold tracking-wider">Recent Appointments</div>
                  <div className="flex flex-col">
                    <div className="flex flex-row justify-between py-2 w-full">
                    <div className="text-transHeadC font-poppins capitalize text-center font-semibold text-base pl-1">
                          orders
                    </div>
                    <div className="text-transHeadC font-poppins capitalize text-center font-semibold text-base pr-1">
                          amount
                    </div>
                    </div>
                    {/* Appointments */}
                    <div className="flex flex-row gap-x-6 justify-between">
                        {/* orders block */}
                        <div>
                        <List sx={{ width: '100%' }}>
                        <ListItem
                        sx={{padding: "0px"}}>
                            <ListItemAvatar>
                            <Avatar src={ProfileIconOne} alt="admin" sx={{borderRadius:"0px"}} />
                            </ListItemAvatar>
                            <ListItemText 
                            primary={<div className="text-white text-sm font-poppins pb-1">
                                Dr theresa web
                            </div>} 
                            secondary={<div className="text-xs font-poppins text-transHeadC">
                                2 minutes ago
                            </div>} />
                        </ListItem>
                        </List>
                        </div>
                      {/* amount block */}
                      <div className="py-3">
                        <Chip 
                            label="$65.00" 
                            sx={{color:"#00FF85", 
                                background:"rgba(56, 203, 137, 0.2)", 
                                fontSize:"12px", 
                                borderRadius:"10px",
                                fontWeight: "600", 
                                letterSpacing:"1px"}} />
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-6 justify-between">
                        {/* orders block */}
                        <div>
                        <List sx={{ width: '100%' }}>
                        <ListItem
                        sx={{padding: "0px"}}>
                            <ListItemAvatar>
                            <Avatar src={ProfileIconTwo} alt="admin" sx={{borderRadius:"0px"}} />
                            </ListItemAvatar>
                            <ListItemText 
                            primary={<div className="text-white text-sm font-poppins pb-1">
                                Dr theresa web
                            </div>} 
                            secondary={<div className="text-xs font-poppins text-transHeadC">
                                2 minutes ago
                            </div>} />
                        </ListItem>
                        </List>
                        </div>
                      {/* amount block */}
                      <div className="py-3">
                        <Chip 
                            label="$85.00" 
                            sx={{color:"#00FF85", 
                                background:"rgba(56, 203, 137, 0.2)", 
                                fontSize:"12px", 
                                borderRadius:"10px",
                                fontWeight: "600", 
                                letterSpacing:"1px"}} />
                        </div>
                    </div>

                    <div className="flex flex-row gap-x-6 justify-between">
                        {/* orders block */}
                        <div>
                        <List sx={{ width: '100%' }}>
                        <ListItem
                        sx={{padding: "0px"}}>
                            <ListItemAvatar>
                            <Avatar src={ProfileIconThree} alt="admin" sx={{borderRadius:"0px"}} />
                            </ListItemAvatar>
                            <ListItemText 
                            primary={<div className="text-white text-sm font-poppins pb-1">
                                Dr theresa web
                            </div>} 
                            secondary={<div className="text-xs font-poppins text-transHeadC">
                                2 minutes ago
                            </div>} />
                        </ListItem>
                        </List>
                        </div>
                      {/* amount block */}
                      <div className="py-3">
                        <Chip 
                            label="$75.00" 
                            sx={{color:"#00FF85", 
                                background:"rgba(56, 203, 137, 0.2)", 
                                fontSize:"12px", 
                                borderRadius:"10px",
                                fontWeight: "600", 
                                letterSpacing:"1px"}} />
                        </div>
                    </div>

                  </div>
                </div>
                {/* Appointments */}
                <div className="flex flex-col gap-y-3 bg-dashbg px-6 py-6 rounded-xl shadow-lg w-1/2 med:w-full">
                <div className="text-primaryC text-base font-poppins font-bold tracking-wider">Data Analyst</div>
                {/* Data_Charts */}
                <div className="flex flex-col w-full">
                  {/* chart_header */}
                <div className="flex flex-row justify-start w-full">
                <div className="text-transHeadC font-poppins capitalize text-center font-semibold text-base pl-1">
                      last week
                </div>
                </div>
                {/* Chart_Block */}
                <div className="px-6">
                  <LastWChart />
                </div>
                {/* Chart_Footer */}
                <div className="flex flex-row justify-between py-3 w-full">
                    <div className="text-primaryC text-base text-center w-full">
                        <div className="text-base text-primaryC font-semibold font-poppins">
                              {"150"}
                        </div>
                        <div className="text-lg font-poppins capitalize font-semibold text-transHeadC">
                              {"bank account"}
                        </div>
                    </div>
                    <div className="text-primaryC text-base text-center w-full">
                      <div className="text-base text-primaryC font-semibold font-poppins">
                              {"350"}
                        </div>
                        <div className="text-lg font-poppins capitalize font-semibold text-transHeadC">
                              {"VHA Token"}
                        </div>
                    </div>
                    <div className="text-primaryC text-base text-center w-full">
                    <div className="text-base text-primaryC font-semibold font-poppins">
                              {"2510"}
                        </div>
                        <div className="text-lg font-poppins capitalize font-semibold text-transHeadC">
                              {"credit card"}
                        </div>
                    </div>
                </div>
              </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Statistics;