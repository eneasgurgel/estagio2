
import {
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
import { useState } from "react";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import NavBarAlt from "../navbar/navBarAlt";
import AuthServices from "../../services/AuthServices";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const [name, setName] = useState<string>()
    const [cpf, setCPF] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [senha, setSenha] = useState<string>()
    const navigate = useNavigate()

    

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
         const data = {
             full_name: name,
             cpf: cpf,
             email: email,
             password: senha
         }
         await AuthServices.register(data)
         navigate('/')
         
      };

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

          <form onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-required"
              label="Nome Completo"
              defaultValue=""
              margin="dense" 
              fullWidth
              onChange={event => {setName(event.target.value)}}
            />
            <TextField
              required
              id="outlined-required"
              label="CPF"
              defaultValue=""
              margin="dense" 
              fullWidth
              onChange={event => {setCPF(event.target.value)}}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              defaultValue=""
              margin="dense" 
              fullWidth
              onChange={event => {setEmail(event.target.value)}}
            />
            <TextField
              required
              id="outlined-password-input"
              label="Senha"
              type="password"
              margin="dense"
              fullWidth
              onChange={event => {setSenha(event.target.value)}}
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
            
          </form>
        </Box>
      </Container></>
      );
}