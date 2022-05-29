import * as React from 'react';

import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import {Home as HomeIcon} from '@mui/icons-material'



export default function NavBarHome() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            href='/'
          >
            <HomeIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}} align="left">
            My Wallet
          </Typography>
          <Button variant="outlined" color="inherit" href='/login'>Entrar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );

}