import * as React from 'react';

import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import {ArrowBack as ArrowBackIcon} from '@mui/icons-material'



export default function NavBarAlt() {
  return (
    <Box sx={{ flexGrow: 1, mb: 15}}>
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
            <ArrowBackIcon/>
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );

}