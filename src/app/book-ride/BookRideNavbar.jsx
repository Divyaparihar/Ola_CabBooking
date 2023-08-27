"use client";

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import { drawerList } from "./DrawerList";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "@/Redux/Auth/Action";
import { useRouter } from "next/navigation";

const BookRideNavbar = () => {
  const [sidebarOpen,setSideBarOpen]=useState(false);
  const dispatch = useDispatch();
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(state=>state);
  const router=useRouter();

  const handleSidebarClose=()=>setSideBarOpen(false);
  const handleSidebarOpen=()=>setSideBarOpen(true);
  
  useEffect(()=>{
    dispatch(getUser(jwt))
   },[])
  
  return (
    <Box className="">
      <AppBar
        sx={{ backgroundColor: "#120E43" }}
        className=""
        position="static"
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Zosh Cab
          </Typography>

          {auth.user?.fullName? (
            <Avatar
              className="cursor-pointer"
              sx={{ bgcolor: deepOrange[500] }}
              onClick={()=>router.push("/profile")}
            >
              {auth.user?.fullName[0]}
            </Avatar>
          ) : (
            <Button onClick={()=>router.push("/login")} color="inherit">Login</Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={sidebarOpen} onClose={handleSidebarClose}>
        {drawerList("left")}
      </Drawer>
    </Box>
  );
};

export default BookRideNavbar;
