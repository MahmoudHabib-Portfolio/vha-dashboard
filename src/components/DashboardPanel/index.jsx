import { useState } from "react";
import { AvatarOne, AvatarTwo, Healthassistant, VhaToken } from "../../assets";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { CoughIcon, FanishCompany, Fastracks, FeverIcon, HeartBurnIcon, SikagoSons } from "../../assets/icons";
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import { HiDotsVertical } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from "@mui/material/TableHead";
import Panelchart from "./Panelchart";

const DashboardPanel = () => {
    const date = new Date();
    let getH = date.getHours();

    const [show, setShow] = useState("block");
    const [age, setAge] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);

    const Open = Boolean(anchorEl);
    const id = Open ? 'simple-popover' : undefined;

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
      };
    
  return (
    <>
        <div className="flex flex-row gap-x-1 w-full lg:pb-4">
            <div className="text-lg text-primaryC capitalize font-poppins lg:text-base">
                {(getH < 12) ? ("good morning") : ("good evening") }
            </div>
            <div className="text-5xl capitalize font-poppins font-bold text-secondC lg:text-2xl">
                <sup>{"john doe"}</sup>
            </div>
        </div>
        {/* Urgent Message */}
        <div className="flex flex-row gap-x-3 pl-8 pr-3 rounded-md py-8 justify-between relative w-full sm:pl-4 sm:py-4"
            style={{
                background: "linear-gradient(66.15deg, #B2E6FD -5.25%, #38CB89 35.43%, #15BFFD 98.77%)",
                zIndex: "100",
                display:`${show}`
            }}>
            {/* Message */}
            <div className="text-primaryC font-poppins p-2 font-bold text-3xl xl:text-xl med:text-base sm:text-sm">
                {"WELCOME TO YOUR PERSONAL VIRTUAL HEALTH ASSISTANT"}
            </div>
            {/* provider */}
            <div className="font-bold absolute right-0 -top-20 lg:hidden" style={{zIndex:"500"}}>
                <img src={Healthassistant} width={172} height={200} alt="Health Assistant" />
            </div>
            {/* close the news */}
            <div className="text-white bg-closbg text-sm w-7 font-poppins font-bold p-1 cursor-pointer rounded-full absolute text-center -top-4 -right-2"
             style={{zIndex:"500"}}
             onClick={() => setShow("none")}>
                X
            </div>
        </div>
        <div className="flex flex-col gap-y-6 pt-6 w-full">
            {/* Statistics Body */}
        <div className="flex flex-col gap-y-2 px-8 py-4 rounded-2xl bg-dashbg shadow-lg w-full md:px-3">
                {/* Statistics Header */}
            <div className="flex flex-row justify-between w-full">
                <div className="text-xl text-mainHeadC font-poppins pt-4 font-bold lg:text-base">
                Statistics of your diseases
                </div>
                <div className="flex flex-row relative -top-2 gap-x-10 md:gap-x-3 sm:top-0 sm:flex-col sm:gap-y-3">
                    <div>
                        <div className="flex flex-row justify-center pb-1">
                            <div className="sm:hidden">
                            <FeverIcon />
                            </div>
                        </div>
                        <div className="text-white font-poppins text-xs sm:text-normalC sm:font-bold">
                            Fever
                        </div>
                    </div>
                    <div>
                    <div className="flex flex-row justify-center pb-1">
                            <div className="sm:hidden">
                            <CoughIcon />
                            </div>
                        </div>
                        <div className="text-white font-poppins text-xs sm:text-warnC sm:font-bold">
                            Cough
                        </div>
                    </div>
                    <div>
                    <div className="flex flex-row justify-center pb-1">
                            <div className="sm:hidden"><HeartBurnIcon /></div>
                        </div>
                        <div className="text-white font-poppins text-xs sm:text-dangerC sm:font-bold">
                            Heart Burn
                        </div>
                    </div>
                </div>
                <div>
                <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{
                    fontSize: "12px",
                    padding: 0,
                    color: "#fff",
                    borderRadius: "12px",
                    border: "2px solid #15BFFD",
                    outline: "none",
                    '& .MuiSelect-select': {
                        padding: '6px 12px',
                        outline: "none"
                    },
                    '& .MuiSelect-icon': {
                        color: '#fff',
                    },
                    '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'transparent', 
                    },
                    '&:hover fieldset': {
                        borderColor: 'transparent', 
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#15BFFD',
                    }
                }
                }}
                variant="outlined"
                >
                <MenuItem value="">
                    <div className="font-poppins">
                    Month
                    </div>
                </MenuItem>
                <MenuItem value={10}>3 Months</MenuItem>
                <MenuItem value={20}>6 Months</MenuItem>
                <MenuItem value={30}>9 Months</MenuItem>
                </Select>
                </div>
            </div>
            {/* Statistics charts */}
            <div className="pt-1 block w-full">
                <Panelchart />
            </div>
            </div>
            <div className="flex flex-row gap-x-3 med:flex-col gap-y-6">
                {/* Activity Feed */}
                <div className="flex flex-col gap-y-5 bg-dashbg px-4 py-4 rounded-xl shadow-lg w-3/5 med:w-full">
                    <div className="text-primaryC text-lg font-poppins font-bold tracking-wider lg:text-base">Activity Feed</div>
                    <div className="flex flex-col">
                        {/* feed row */}
                    <div className="flex flex-row gap-x-6 justify-between">
                        {/* feed block */}
                        <div>
                        <List sx={{ width: '100%' }}>
                        <ListItem
                        sx={{padding: "0px"}}>
                            <ListItemAvatar>
                            <Avatar src={AvatarOne} alt="admin" />
                            </ListItemAvatar>
                            <ListItemText 
                            primary={<div className="text-white text-sm font-poppins pb-2">
                                You have been given medication of heart burn
                            </div>} 
                            secondary={<div className="text-xs font-poppins text-gray-500">
                                10 mins ago
                            </div>} />
                        </ListItem>
                        </List>
                        </div>
                        {/* status */}
                        <div className="py-3">
                        <Chip 
                            label="Applying" 
                            sx={{color:"#377DFF", 
                                background:"rgba(55, 125, 255, 0.2)", 
                                fontSize:"12px", 
                                borderRadius:"10px", 
                                letterSpacing:"1px"}} />
                        </div>
                    </div>
                    {/* feed row 2 */}
                    <div className="flex flex-row gap-x-6 justify-between">
                        {/* feed block */}
                        <div>
                        <List sx={{ width: '100%' }}>
                        <ListItem
                        sx={{padding: "0px"}}>
                            <ListItemAvatar>
                            <Avatar src={AvatarTwo} alt="admin" />
                            </ListItemAvatar>
                            <ListItemText 
                            primary={<div className="text-white text-sm font-poppins pb-2">
                                Dr recommended you to stop drinking cold water 
                            </div>} 
                            secondary={<div className="text-xs font-poppins text-gray-500">
                                4 hours ago
                            </div>} />
                        </ListItem>
                        </List>
                        </div>
                        {/* status */}
                        <div className="py-3">
                        <Chip 
                        label="Completed" 
                        sx={{color:"#38CB89", 
                            background:"rgba(56, 203, 137, 0.2)", 
                            fontSize:"12px", 
                            borderRadius:"10px"}} />
                        </div>
                    </div>
                    {/* feed row 3 */}
                    <div className="flex flex-row gap-x-6 justify-between">
                        {/* feed block */}
                        <div>
                        <List sx={{ width: '100%' }}>
                        <ListItem
                        sx={{padding: "0px"}}>
                            <ListItemAvatar>
                            <Avatar src={AvatarTwo} alt="admin" />
                            </ListItemAvatar>
                            <ListItemText 
                            primary={<div className="text-white text-sm font-poppins pb-2">
                                Dr recommended you to stop drinking cold water 
                            </div>} 
                            secondary={<div className="text-xs font-poppins text-gray-500">
                                4 hours ago
                            </div>} />
                        </ListItem>
                        </List>
                        </div>
                        {/* status */}
                        <div className="py-3">
                        <Chip 
                        label="Completed" 
                        sx={{color:"#38CB89", 
                            background:"rgba(56, 203, 137, 0.2)", 
                            fontSize:"12px", 
                            borderRadius:"10px"}} />
                        </div>
                    </div>
                    </div>
                </div>
                {/* Appointments */}
                <div className="flex flex-col gap-y-6 bg-dashbg px-4 py-4 rounded-xl shadow-lg w-2/5 med:w-full">
                <div className="text-primaryC text-lg font-poppins font-bold tracking-wider lg:text-base">Appointments</div>
                <div className="flex flex-col gap-y-6">
                    {/* Date Tag 1 */}
                <div className="flex flex-row gap-x-6 justify-between">
                    {/* feed block */}
                    <div>
                        <div className="flex flex-row justify-center gap-x-3">
                            {/* date tag */}
                            <div className="flex flex-col gap-y-1 p-2 text-center bg-mainbg rounded-lg">
                                <div className="text-base text-monthlyC font-poppins tracking-wider font-bold">Mon</div>
                                <div className="text-sm text-primaryC font-poppins">10</div>
                            </div>
                            {/* card item */}
                            <div className="flex flex-col gap-y-1 py-1">
                                <div className="text-primaryC font-poppins">Dr Cameron</div>
                                <div className="text-gray-500 font-poppins">9:00 am - 11:30 am</div>
                            </div>
                        </div>
                        </div>
                        {/* status */}
                        <div className="flex flex-row justify-center h-2/4 rounded-md bg-mainbg cursor-pointer">
                        <IconButton
                            aria-describedby={id}
                            onClick={handleClick}
                            size="small"
                            disableRipple={true}
                            >
                            <HiDotsVertical className="text-dotbg text-2xl font-bold" />
                            </IconButton>
                            <Popover
                            id={id}
                            open={Open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                            }}
                            transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                            }}
                            sx={{
                                '& .MuiPopover-paper': {
                                  backgroundColor: '#1B1C31',
                                },
                              }}
                            >
                        <div className="w-1/3">
                        <Button
                        disableRipple={true} 
                        startIcon={<MdDelete style={{fontSize:"14px"}} />}
                        sx={{
                            background:"#1B1C31",
                            color: "#8F8F8F",
                            fontWeight: "bold",
                            fontSize: "14px",
                            textTransform: "capitalize",
                            '&:hover':{
                                background:"#1B1C31"
                            }
                        }}
                        >
                            Delete
                        </Button>
                        </div>
                    </Popover>
                        </div>
                </div>
                {/* Date Tag 2 */}
                <div className="flex flex-row gap-x-6 justify-between">
                    {/* feed block */}
                    <div>
                        <div className="flex flex-row justify-center gap-x-3">
                            {/* date tag */}
                            <div className="flex flex-col gap-y-1 p-2 text-center bg-mainbg rounded-lg">
                                <div className="text-base text-monthlyC font-poppins tracking-wider font-bold">Thu</div>
                                <div className="text-sm text-primaryC font-poppins">08</div>
                            </div>
                            {/* card item */}
                            <div className="flex flex-col gap-y-1 py-1">
                                <div className="text-primaryC font-poppins">Dr Sara Doe</div>
                                <div className="text-gray-500 font-poppins">9:00 am - 11:30 am</div>
                            </div>
                        </div>
                        </div>
                        {/* status */}
                        <div className="flex flex-row justify-center h-2/4 rounded-md bg-mainbg cursor-pointer">
                        <IconButton
                            aria-describedby={id}
                            onClick={handleClick}
                            size="small"
                            disableRipple={true}
                            >
                            <HiDotsVertical className="text-dotbg text-2xl font-bold" />
                            </IconButton>
                            <Popover
                            id={id}
                            open={Open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                            }}
                            transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                            }}
                            sx={{
                                '& .MuiPopover-paper': {
                                  backgroundColor: '#1B1C31',
                                },
                              }}
                            >
                        <div className="w-1/3">
                        <Button
                        disableRipple={true} 
                        startIcon={<MdDelete style={{fontSize:"16px"}} />}
                        sx={{
                            background:"#1B1C31",
                            color: "#8F8F8F",
                            fontWeight: "bold",
                            fontSize: "14px",
                            textTransform: "capitalize",
                            '&:hover':{
                                background:"#1B1C31"
                            }
                        }}
                        >
                            Delete
                        </Button>
                        </div>
                    </Popover>
                        </div>
                </div>
                    {/* Date Tag 3 */}
                    <div className="flex flex-row gap-x-6 justify-between">
                    {/* feed block */}
                    <div>
                        <div className="flex flex-row justify-center gap-x-3">
                            {/* date tag */}
                            <div className="flex flex-col gap-y-1 p-2 text-center bg-mainbg rounded-lg">
                                <div className="text-base text-monthlyC font-poppins tracking-wider font-bold">Fri</div>
                                <div className="text-sm text-primaryC font-poppins">11</div>
                            </div>
                            {/* card item */}
                            <div className="flex flex-col gap-y-1 py-1">
                                <div className="text-primaryC font-poppins">Dr Robert</div>
                                <div className="text-gray-500 font-poppins">9:00 am - 11:30 am</div>
                            </div>
                        </div>
                        </div>
                        {/* status */}
                        <div className="flex flex-row justify-center h-2/4 rounded-md bg-mainbg cursor-pointer">
                        <IconButton
                            aria-describedby={id}
                            onClick={handleClick}
                            size="small"
                            disableRipple={true}
                            >
                            <HiDotsVertical className="text-dotbg text-2xl font-bold" />
                            </IconButton>
                            <Popover
                            id={id}
                            open={Open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                            }}
                            transformOrigin={{
                            vertical: 'center',
                            horizontal: 'center',
                            }}
                            sx={{
                                '& .MuiPopover-paper': {
                                  backgroundColor: '#1B1C31',
                                },
                              }}
                            >
                        <div className="w-1/3">
                        <Button
                        disableRipple={true} 
                        startIcon={<MdDelete style={{fontSize:"16px"}} />}
                        sx={{
                            background:"#1B1C31",
                            color: "#EE6E6E",
                            fontWeight: "bold",
                            fontSize: "14px",
                            textTransform: "capitalize",
                            '&:hover':{
                                background:"#1B1C31"
                            }
                        }}
                        >
                            Delete
                        </Button>
                        </div>
                    </Popover>
                        </div>
                </div>
                </div>
                </div>
            </div>
            
        <div className="flex flex-col gap-y-3 bg-dashbg px-6 py-4 rounded-xl shadow-lg w-full sm:px-3">
        {/* table_header */}
        <div className="text-lg text-mainHeadC font-poppins tracking-wider font-bold lg:text-base">
            Recent transactions
        </div>
        {/* transaction_table */}
        <div className="container tableCont p-0 overflow-x-auto w-full">
        <TableContainer component={Paper} sx={{backgroundColor:"transparent", border:"0px"}}>
        <Table aria-label="collapsible table" sx={{backgroundColor:"transparent", border:"0px"}}>
        <TableHead className="whitespace-nowrap">
          <TableRow sx={{ "& th": { padding: "5px 0px", borderBottom: "none"} }}>
            <TableCell align="left" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#475D96", fontSize:"16px", letterSpacing:"1px", textTransform:"capitalize", whiteSpace:"nowrap", padding:"5px 8px"}}>
                <div className="sm:text-sm">
                company name
                </div>
            </TableCell>
            <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#475D96", fontSize:"16px", letterSpacing:"1px", textTransform:"capitalize", whiteSpace:"nowrap", padding:"5px 8px"}}>
            <div className="sm:text-sm">
                date
            </div>
            </TableCell>
            <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#475D96", fontSize:"16px", letterSpacing:"1px", textTransform:"capitalize", whiteSpace:"nowrap", padding:"5px 8px"}}>
            <div className="sm:text-sm">
                amount
            </div>
            </TableCell>
            <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#475D96", fontSize:"16px", letterSpacing:"1px", textTransform:"capitalize", whiteSpace:"nowrap", padding:"5px 8px"}}>
            <div className="sm:text-sm">
                date
            </div>
            </TableCell>
            <TableCell align="center" sx={{fontWeight:"bold", fontFamily:"sans-serif", color:"#475D96", fontSize:"16px", letterSpacing:"1px", textTransform:"capitalize", whiteSpace:"nowrap", padding:"5px 8px"}}>
            <div className="sm:text-sm">
                paid by
            </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        <TableRow sx={{ "& td": { padding: "0px", borderBottom: "none"} }}>
        <TableCell align="left" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
        <List sx={{ width: '100%' }}>
            <ListItem
            sx={{padding: "0px"}}>
                <ListItemAvatar>
                    <SikagoSons />
                </ListItemAvatar>
                <ListItemText 
                primary={<div className="text-primaryC text-lg capitalize font-poppins font-bold tracking-wider pb-1 lg:text-xs">
                    <div>
                    sikago & sons
                    </div>
                </div>} 
                secondary={<div className="text-sm font-poppins text-transHeadC">
                    Uk
                </div>} />
            </ListItem>
        </List>
        </TableCell>
        <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
          <span className="text-sm font-poppins text-transDateC sm:text-xs">
            10 jan 2021
          </span>
        </TableCell>
        <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
          <span className="text-sm text-primaryC font-poppins sm:text-xs">
            $432.25
          </span>
        </TableCell>
        <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
          <span className="text-sm font-poppins text-transDateC sm:text-xs">
            10 jan 2021
          </span>
        </TableCell>
        <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
          <div className="flex justify-center w-full">
            <div className="sm:w-3/4">
            <img src={VhaToken} width={88} height={13} alt="Paid Token" />
            </div>
          </div>
        </TableCell>
       </TableRow>

       <TableRow sx={{ "& td": { padding: "0px", borderColor:"transparent"} }}>
        <TableCell align="left" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
        <List sx={{ width: '100%' }}>
            <ListItem
            sx={{padding: "0px"}}>
                <ListItemAvatar>
                    <Fastracks />
                </ListItemAvatar>
                <ListItemText 
                primary={<div className="text-primaryC text-lg font-poppins capitalize font-bold tracking-wider pb-1 lg:text-xs">
                    <div>
                    fast tracks
                    </div>
                </div>} 
                secondary={<div className="text-sm font-poppins text-transHeadC">
                    USA
                </div>} />
            </ListItem>
        </List>
        </TableCell>
        <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
          <span className="text-sm font-poppins text-transDateC sm:text-xs">
            10 jan 2021
          </span>
        </TableCell>
        <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
          <span className="text-sm text-primaryC font-poppins sm:text-xs">
            $563.25
          </span>
        </TableCell>
        <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
          <span className="text-sm font-poppins text-transDateC sm:text-xs">
            10 jan 2021
          </span>
        </TableCell>
        <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
          <div className="flex justify-center w-full">
            <div className="sm:w-3/4">
            <img src={VhaToken} width={88} height={13} alt="Paid Token" />
            </div>
          </div>
        </TableCell>
       </TableRow>
        
       <TableRow sx={{ "& td": { padding: "0px", borderColor:"transparent"} }}>
        <TableCell align="left" sx={{whiteSpace:"nowrap", padding:"0px 8px"}}>
        <List sx={{ width: '100%' }}>
            <ListItem
            sx={{padding: "0px"}}>
                <ListItemAvatar>
                    <FanishCompany />
                </ListItemAvatar>
                <ListItemText 
                primary={<div className="text-primaryC text-lg font-poppins capitalize font-bold tracking-wider pb-1 lg:text-xs">
                    <div>
                    fanish & company
                    </div>
                </div>} 
                secondary={<div className="text-sm font-poppins text-transHeadC">
                    USA
                </div>} />
            </ListItem>
        </List>
        </TableCell>
        <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 16px"}}>
          <span className="text-sm font-poppins text-transDateC sm:text-xs">
            10 jan 2021
          </span>
        </TableCell>
        <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 16px"}}>
          <span className="text-sm text-primaryC font-poppins sm:text-xs">
            $256.25
          </span>
        </TableCell>
        <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 16px"}}>
          <span className="text-sm font-poppins text-transDateC sm:text-xs">
            10 jan 2021
          </span>
        </TableCell>
        <TableCell align="center" sx={{whiteSpace:"nowrap", padding:"0px 16px"}}>
          <div className="flex justify-center w-full">
            <div className="sm:w-3/4">
            <img src={VhaToken} width={88} height={13} alt="Paid Token" />
            </div>
          </div>
        </TableCell>
       </TableRow>
    
        </TableBody>
        </Table>
        </TableContainer>
        </div>
        {/* Table View */}

            </div>

        </div>
    </>
  )
}

export default DashboardPanel;