import { Button, InputAdornment, TextField } from "@mui/material";
import { LuSearch } from "react-icons/lu";
import { TbCategory } from "react-icons/tb";
import { IoFilter } from "react-icons/io5";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import {PortfolioOne,
        PortfolioTwo,
        PortfolioThree,
        PortfolioFour,
        PortfolioFive,
        PortfolioSix,
        PortfolioSeven,
        PortfolioEight
       } from "../../assets";
import { Reviews, TaskIcon } from "../../assets/icons";
import Flickity from "react-flickity-component";
import 'flickity/dist/flickity.min.css';


/* Search Field */
const SearchField = styled(TextField)({
  '& .MuiInput-underline:after': {
  borderBottomColor: '#fff',
},
'& .MuiOutlinedInput-root': {
  '& fieldset': {
    borderRadius: "12px",
    borderWidth: '1px'
  },
  '&:hover fieldset': {
    borderColor: '#fff',
    borderWidth: '1px'
  },
  '&.Mui-focused fieldset': {
    borderColor: '#fff',
    borderWidth: '1px'
  }
},
});

const Chemists = () => {

  const [search, setSearch] = useState("");

  const Connections = [
    {id:0, name: "Jessica Jane", header:"Chemist", icon:PortfolioOne},
    {id:1, name: "Abraham Lincoln", header:"Chemist", icon:PortfolioTwo},
    {id:2, name: "Curious George", header:"Chemist", icon:PortfolioThree},
    {id:3, name: "Alex Stanton", header:"Chemist", icon:PortfolioFour},
    {id:4, name: "Anna White", header:"Chemist", icon:PortfolioFive},
    {id:5, name: "Richard Kyle", header:"Chemist", icon:PortfolioSeven},
  ];

  const Chemists = [
    {id:0, name: "Jessica Jane", header:"Chemist", icon:PortfolioOne, task: 30},
    {id:1, name: "Abraham Lincoln", header:"Chemist", icon:PortfolioTwo, task: 40},
    {id:2, name: "Curious George", header:"Chemist", icon:PortfolioThree, task: 60},
    {id:3, name: "Alex Stanton", header:"Chemist", icon:PortfolioFour, task: 70},
    {id:4, name: "Anna White", header:"Chemist", icon:PortfolioFive, task: 30},
    {id:5, name: "Richard Kyle", header:"Chemist", icon:PortfolioSeven, task: 40},
    {id:6, name: "Antoine Griezmann", header:"Chemist", icon:PortfolioSix, task: 60},
    {id:7, name: "Julia Philips", header:"Chemist", icon:PortfolioEight, task: 30},
  ];

  const flickityOptions = {
    initialIndex: 0,
    pageDots: false,
    groupCells: true,
    draggable: true,
    contain: true,
    freeScroll: true,
    prevNextButtons: false,
    
}

  const filterSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col gap-y-6">
      <div>
        <form onSubmit={filterSubmit}>
          <div className="flex flex-row gap-x-6 w-full">
              <div className="w-2/4">
              <SearchField
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root":{
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "2px",
                        borderStyle: "solid",
                        textAlign: "right",
                        borderColor: '#fff',
                        borderRadius: "12px"
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: "#fff"
                    },
                    }
                  }} 
                  inputProps={{
                    sx: {
                    color: '#fff',
                    fontSize: '14px',
                    letterSpacing: '1px',
                    textAlign: "right",
                    fontWeight:"normal",
                    backgroundColor:'transparent',
                    padding:'16px 16px',
                    borderRadius: "12px",
                    "&::placeholder":{
                        opacity: 1,
                        color: '#fff',
                        }
                    },
                    }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">
                      <LuSearch style={{ color: "#9aa0a6", fontSize: "18px", fontWeight:"bold" }} />
                    </InputAdornment>
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={"Search Chemists"}
                    type="text"
                    />
              </div>
              <div className="flex flex-row gap-x-6 w-2/4 med:flex-col med:gap-y-3">
              {/* Category */}
              <div className="med:w-full">
              <Button
              startIcon={<TbCategory style={{color:"#fff", fontSize:"18px", fontWeight:"bold"}} />}
              sx={{
                textTransform:"capitalize",
                color: "#fff",
                fontSize:"14px",
                fontWeight:"bold",
                padding: "12px 25px",
                borderRadius: "12px",
                width:"100%",
                backgroundColor: "transparent",
                background: "transparent",
                border: "2px solid rgb(255, 255, 255)",
                transition: "all 0.3s ease-in-out",
                ":hover": {
                  background: "transparent",
                  color: 'rgb(255, 255, 255)',
                }
              }}
              >
                Category
              </Button>
              </div>
              {/* Popular */}
              <div className="med:w-full">
              <Button
              startIcon={<IoFilter style={{color:"#fff", fontSize:"18px", fontWeight:"bold"}} />}
              sx={{
                textTransform:"capitalize",
                color: "#fff",
                fontSize:"14px",
                fontWeight:"bold",
                padding: "12px 25px",
                borderRadius: "12px",
                width:"100%",
                backgroundColor: "transparent",
                background: "transparent",
                border: "2px solid rgb(255, 255, 255)",
                transition: "all 0.3s ease-in-out",
                ":hover": {
                  background: "transparent",
                  color: 'rgb(255, 255, 255)',
                }
              }}
              >
                Sort By:Popular
              </Button>
              </div>
              </div>
          </div>
        </form>
      </div>
      <div className="flex flex-col pt-5 gap-y-3">
        <div className="text-white text-2xl capitalize tracking-wide font-poppins font-semibold w-full">
          your connection
        </div>
        <div className="py-3 w-full">
        <Flickity
        className={'carousel'}
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static>
          {Connections.map((x) => (
            <div className="flex flex-col gap-y-4 rounded-xl py-3 pl-6 pr-2 mx-3 bg-dashbg w-2/5 med:w-full" key={x.id}>
            <div className="flex flex-row justify-between w-full">
              <div className="w-full">
              <List sx={{ width: '100%' }}>
              <ListItem
              sx={{padding: "0px"}}>
                <ListItemAvatar>
                <Avatar src={x.icon} alt="admin" />
                </ListItemAvatar>
                <ListItemText 
                          primary={<div className="text-white text-base font-poppins">
                              {x.name}
                          </div>} 
                          secondary={<div className="text-sm font-poppins text-primaryC">
                              {x.header}
                          </div>} />
              </ListItem>
              </List>
              </div>
              <div className="font-poppins text-base text-secondC pt-4 tracking-wide leading-10">
                {"Connected"}
              </div>
            </div>
            <div className="flex flex-row justify-between pr-6 w-full">
              <div className="flex flex-row gap-x-2">
                  <div>
                    <TaskIcon />
                  </div>
                  <div className="text-primaryC font-poppins text-base">{"40"} Task</div>
              </div>
              <div className="flex flex-row gap-x-2">
                  <div>
                    <Reviews />
                  </div>
                  <div className="text-primaryC font-poppins text-base">{`${4,7} (750 Reviews)`}</div>
              </div>
            </div>
          </div>
          ))}
        </Flickity>
        </div>
      </div>
      <div className="flex flex-col gap-y-3 w-full">
      <div className="text-white text-2xl capitalize tracking-wide font-poppins font-semibold w-full">
          All Chemists
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
            {Chemists?.map((d) => (
              <div className="flex flex-col gap-y-4 rounded-xl py-3 pl-6 pr-4 bg-dashbg w-full" key={d.id}>
              <div className="flex flex-row justify-between w-full">
                <div className="w-full">
                <List sx={{ width: '100%' }}>
                <ListItem
                sx={{padding: "0px"}}>
                  <ListItemAvatar>
                  <Avatar src={d.icon} alt="admin" />
                  </ListItemAvatar>
                  <ListItemText 
                            primary={<div className="text-white text-base font-poppins">
                                {d.name}
                            </div>} 
                            secondary={<div className="text-sm font-poppins text-primaryC">
                                {d.header}
                            </div>} />
                </ListItem>
                </List>
                </div>
                <div className="font-poppins text-base text-chatC pt-4 tracking-wide leading-10">
                  {"Chat"}
                </div>
              </div>
              {/* Bio */}
              <div className="text-primaryC font-poppins text-sm w-full">
              Hi, I'm {d.name}. Lorem Ipsum is simply dummy text of the printing and typesetting... 
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row gap-x-2">
                    <div>
                      <TaskIcon />
                    </div>
                    <div className="text-primaryC font-poppins text-base">{d.task} Task</div>
                </div>
                <div className="flex flex-row gap-x-2">
                    <div>
                      <Reviews />
                    </div>
                    <div className="text-primaryC font-poppins text-base">{`${4,7} (750 Reviews)`}</div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chemists;