import { AlignVerticalBottomSharp } from "@mui/icons-material";
import {
    makeStyles,
    Container,
    Typography,
    TextField,
    Button,
    Box,
    CssBaseline,
    Avatar,
    Grid,
    Link,
  } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import NavBarAlt from "../navbar/navBarAlt";

  /*const useStyles = makeStyles((theme) => ({
    heading: {
      textAlign: "center",
      margin: theme.spacing(1, 0, 4),
    },
    submitButton: {
      marginTop: theme.spacing(4),
    },
  }));*/

export default function Register(){

    //const { heading, submitButton } = useStyles();

    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
      },
    });

    

    const [json, setJson] = useState<string>();


    return (
      <><NavBarAlt />
          <Container maxWidth="xs" sx={{border: 1, paddingBottom: 5, backgroundColor:'#101010', borderColor:'#404040'}}>
            <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h3">
            Registro
          </Typography>

          <form>
            <TextField
              required
              id="outlined-required"
              label="Nome Completo"
              defaultValue=""
              margin="dense" 
              fullWidth
            />
            <TextField
              required
              id="outlined-required"
              label="CPF"
              defaultValue=""
              margin="dense" 
              fullWidth
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              margin="dense" 
              fullWidth
            />
            <TextField
              required
              id="outlined-password-input"
              label="Senha"
              type="password"
              margin="dense"
              fullWidth
            />
            <TextField
              required
              id="outlined-password-input"
              label="Confirmação de Senha"
              type="password"
              margin="dense"
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              fullWidth
            >
              Registrar
            </Button>
            <Grid item>
                  <Link href="/login" variant="body2">
                    {"Já possui uma conta? Entre!"}
                  </Link>
            </Grid>
            {json && (
              <>
                <Typography variant="body1">
                  Below is the JSON that would normally get passed to the server
                  when a form gets submitted
                </Typography>
                <Typography variant="body2">{json}</Typography>
              </>
            )}
            
          </form>
        </Box>
      </Container></>
      );
}