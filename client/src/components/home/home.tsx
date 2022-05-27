
import NavBarHome from "../navbar/navbarHome";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import card from '../../images/logoprincipal.png'
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home(){
    return (
        <><NavBarHome />
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
            marginTop: 5
          }}
        >
          <Container maxWidth="sm">

              <img src={card}></img>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Bem vindo ao myWallet
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Sua nova solução em conversão de moedas, depósitos, saques e transferências de fundos.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
             
              <Button 
              variant="contained" 
              size="large"
              fullWidth
              href='/login'
              ><h2>Entre agora</h2></Button>
              
              <Button variant="outlined"
              size="large"
              fullWidth
              href='/register'
              ><h2>Crie uma conta</h2></Button>
            
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
      </Box>
      {/* End footer */}
      </>
      );
}