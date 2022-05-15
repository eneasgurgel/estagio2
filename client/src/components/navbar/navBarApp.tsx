import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import {Home as HomeIcon} from '@mui/icons-material'
import AuthServices from '../../services/AuthServices';



export default function NavBarApp() {

    const authed = AuthServices.getCurrentUser()

  return (
    <Box sx={{ flexGrow: 1}}>
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
            Bem vindo {authed.name}
          </Typography>
          <Button variant="outlined" color="inherit" onClick={AuthServices.logout} href="/">Deslogar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );

}