import { 
    DarkMode, 
    LightMode , 
    Menu as MenuIcon , 
    Search , 
    SettingsOutlined,
    ArrowDropDownOutlined,
    Palette,
    DarkModeOutlined,
    LightModeOutlined
} 
from '@mui/icons-material';
import React, { useState } from 'react'
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'state';
import profileImage from 'assets/image_2.png';
import { AppBar, IconButton, InputBase, Toolbar,useTheme } from '@mui/material';



function NavBar({isSidebarOpen,setIsSidebarOpen}) {

    const dispatch = useDispatch();
    const theme = useTheme();
  
     console.log(theme.palette.primary.main);
  return (
    <AppBar
        sx={{
            position:"static",
            background:"none",
            boxShadow:"none",
        }}
     >
        <Toolbar sx={{ justifyContent:"space-between"}} >
           {/* LEFT SIDE */}
            <FlexBetween >
                 <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)} >
                     <MenuIcon />
                 </IconButton>
                 <FlexBetween 
                //   backgroundColor={theme.palette.background.default}
                //    backgroundColor={"#525252"}
                   backgroundColor={"#616161"}
                  borderRadius="9px"
                  gap="3rem"
                  p="0.1rem 1.5rem"
                 >
                      <InputBase placeholder="Search ..."/>
                      <IconButton >
                            <Search />
                       </IconButton>
                 </FlexBetween>
            </FlexBetween>

            {/* RIGHT SIDE  */}
            <FlexBetween gap="1.5rem">
                 <IconButton onClick={() =>dispatch(setMode())} > 
                 {
                   theme.palette.mode === 'dark' ? (
                    <DarkModeOutlined sx={{fontSize:"25px"}}/>
                   ) : (
                    <LightModeOutlined sx={{fontSize:"25px"}}/>
                   )
                 }
                 </IconButton> 

                 <IconButton> 
                     <SettingsOutlined sx={{fontSize:"25px"}}/>
                 </IconButton> 

            </FlexBetween>
        </Toolbar>


    </AppBar>
  )
}

export default NavBar
