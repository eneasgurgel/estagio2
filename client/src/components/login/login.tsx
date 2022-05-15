import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NavBarAlt from "../navbar/navBarAlt";
import AuthServices from '../../services/AuthServices';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Login() {


 //   const [email, setEmail] = useState<string>()
   // const [senha, setSenha] = useState<string>()
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}, setError} = useForm()
    let login = false

 
  const tryLogin = async ({email, senha}: any) => {
      try{
        console.log(login)
        login = false
      const data = {email, password: senha}
      await AuthServices.login(data)
        navigate('/home')
      }catch(err){
        setError('email', {
            type:'server',
            message:'Usuario ou senha invalidos!'
        })

        setError('senha', {
            type:'server',
            message:'Usuario ou senha invalidos!'
        })
      }

  };

  return (
    <><NavBarAlt />
      <Container maxWidth="xs" sx={{border: 1, paddingBottom: 15, backgroundColor:'#101010', borderColor:'#404040'}}>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h3">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit(tryLogin)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email"
              autoComplete="email"
              autoFocus
              {...register("email", {
                required: "Campo Obrigatorio!",
                validate: () =>{
                    if(login) return "Usuario ou senha inválido!"
                }

            })}
            error={!!errors?.email}
            helperText={!!errors?.email ? errors.email.message : null}
            />
            <TextField
              margin="normal"
              fullWidth
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("senha", {
                  required: "Campo Obrigatorio!",

              })}
              error={!!errors?.senha}
              helperText={!!errors?.senha ? errors.senha.message : null}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar de mim"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Não possui uma conta? Registre-se!"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container></>
  );
}