import { VscThreeBars } from "react-icons/vsc";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { AvatarIcon, avatOne } from "../../assets";
import Badge from '@mui/material/Badge';
import { BillIcon, FaqIcon } from "../../assets/icons";
import { useDispatch } from "react-redux";
import { showDrawer } from "../../ReduxStore/DrawerSlice";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Popover } from "@mui/material";
import { useState } from "react";

const Header = () => {

  const dispatch = useDispatch();
  const [pop, setPop] = useState(null);

  const Open = Boolean(pop);
  const popId = Open ? 'simple-popover' : undefined;

  const openPop = (event) => {
    setPop(event.currentTarget);
  };

  const closePop = () => {
      setPop(null);
    };

  return (
    <nav className="py-4 px-12 block sticky top-0 bg-mainbg sm:px-3 w-full"
      style={{zIndex:"700"}}>
      <div className="flex flex-row gap-x-3 justify-end w-full">
        <div>
          <FaqIcon />
        </div>
        <div>
        <IconButton
          aria-describedby={popId}
          onClick={openPop}
        >
        <Badge badgeContent={"03"} sx={{
          '& .MuiBadge-badge': { 
          backgroundColor: '#FF5630',
          color: 'white',
          padding: "0px 3px",
        } 
        }}>
          <BillIcon />
        </Badge>
      </IconButton>
      {/* Notification */}
      <Popover
        id={popId}
        open={Open}
        anchorEl={pop}
        onClose={closePop}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
        }}
        sx={{
          '& .MuiPopover-paper': {
            backgroundColor: '#222338',
          },
        }}
        >
          <div className="flex flex-col gap-y-4 bg-dashbg px-6 py-4 text-primaryC w-80">
            <div className="flex flex-row justify-between">
              <div className="font-poppins text-base text-walletHeadC tracking-wide">Notifications</div>
              <div>
                {/* Gear */}
              </div>
            </div>
            <div className="flex flex-col gap-y-3 w-full">
                <div className="flex flex-row justify-between">
                  {/* feed block */}
                  <div>
                  <List sx={{ width: '100%' }}>
                  <ListItem
                  sx={{padding: "0px"}}>
                      <ListItemAvatar>
                      <Avatar src={avatOne} alt="admin" />
                      </ListItemAvatar>
                      <ListItemText 
                      primary={<div className="text-white text-sm font-poppins pb-2">
                          Josep akbar
                      </div>} 
                      secondary={<div className="text-xs font-poppins text-gray-400">
                          Just sent you <span style={{color:"#ffa600", fontWeight:"bold"}}>$10,000</span>
                      </div>} />
                  </ListItem>
                  </List>
                  </div>
                  {/* status */}
                  <div className="text-sm font-semibold pt-4 font-poppins text-gray-400">
                    Just now
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  {/* feed block */}
                  <div>
                  <List sx={{ width: '100%' }}>
                  <ListItem
                  sx={{padding: "0px"}}>
                      <ListItemAvatar>
                      <Avatar src={avatOne} alt="admin" />
                      </ListItemAvatar>
                      <ListItemText 
                      primary={<div className="text-white text-sm font-poppins pb-2">
                          Josep akbar
                      </div>} 
                      secondary={<div className="text-xs font-poppins text-gray-400">
                          Just sent you <span style={{color:"#ffa600", fontWeight:"bold"}}>$10,000</span>
                      </div>} />
                  </ListItem>
                  </List>
                  </div>
                  {/* status */}
                  <div className="text-sm font-semibold pt-4 font-poppins text-gray-400">
                    Just now
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  {/* feed block */}
                  <div>
                  <List sx={{ width: '100%' }}>
                  <ListItem
                  sx={{padding: "0px"}}>
                      <ListItemAvatar>
                      <Avatar src={avatOne} alt="admin" />
                      </ListItemAvatar>
                      <ListItemText 
                      primary={<div className="text-white text-sm font-poppins pb-2">
                          Josep akbar
                      </div>} 
                      secondary={<div className="text-xs font-poppins text-gray-400">
                          Just sent you <span style={{color:"#ffa600", fontWeight:"bold"}}>$10,000</span>
                      </div>} />
                  </ListItem>
                  </List>
                  </div>
                  {/* status */}
                  <div className="text-sm font-semibold pt-4 font-poppins text-gray-400">
                    Just now
                  </div>
                </div>
            </div>
          </div>
        </Popover>
        </div>
        <div>
        <Avatar alt="Admin" sx={{ width: 30, height: 30 }} src={AvatarIcon} />
        </div>
        <div className="block lg:block">
        <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => dispatch(showDrawer())}
        sx={{padding: "0.1em 0em", color: "#fff"}}
      >
        <VscThreeBars />
      </IconButton>
        </div>
      </div>
    </nav>
  )
}

export default Header;