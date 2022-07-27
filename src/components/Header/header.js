import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from "./logo.png";
import {NavLink } from "react-router-dom";
import "./hed.css"



function header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar style={{ position:'fixed', 
                    background: '#000000', 
                    opacity : '0.8'}}>
      <Toolbar>
      <img src={Logo} alt="Logo" style={{height: '70px' , width : '80px'}}  />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlignLast: 'center'}}>
           <NavLink exact activeClassName="active" to="/" > BLUETECH TECHNOLOGIES </NavLink>
      
        </Typography>
       
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default header;