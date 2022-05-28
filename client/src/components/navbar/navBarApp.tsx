import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@mui/material';
import {Home as HomeIcon} from '@mui/icons-material'
import AuthServices from '../../services/AuthServices';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(string: string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
export default function NavBarApp() {

    const authed = AuthServices.getCurrentUser()

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}} align="left">
            Bem vindo {authed.name} | ID: {authed.id}
          </Typography>
          <Typography sx={{ m: 2 }} >
            <Avatar {...stringAvatar(authed.name)} />
          </Typography>
          <Button variant="outlined" color="inherit" onClick={AuthServices.logout} href="/">Deslogar</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );

}