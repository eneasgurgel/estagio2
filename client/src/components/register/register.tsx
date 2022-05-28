
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
import { useForm } from "react-hook-form";
import cpfValidate from '../../utils/cpfValidator'

export default function Register(){
/*    const [name, setName] = useState<string>()
    const [cpf, setCPF] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [senha, setSenha] = useState<string>()*/
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}, getValues, setError} = useForm()

    

    const registerWallet = async ({ nomeCompleto, cpf, email, senha }: any) => {
        try{
            const data = {
                full_name: nomeCompleto,
                cpf: cpf,
                email: email,
                password: senha
            }
             await AuthServices.register(data)
       
            navigate('/')

        }catch(err: any){
            if(err.response.data.error === "Email ja esta em uso!"){
                setError('email', {
                    type:'server',
                    message:err.response.data.error
                })
            }

            if(err.response.data.error === "CPF ja esta cadastrado!"){
                setError('cpf', {
                    type:'server',
                    message:err.response.data.error
                })
            }
        }

         
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

          <form onSubmit={handleSubmit(registerWallet)}>
            <TextField
              id="outlined-required"
              label="Nome Completo"
              defaultValue=""
              margin="dense" 
              fullWidth
              {...register("nomeCompleto", {
                  required: "Campo Obrigatorio!"

              })}
              error={!!errors?.nomeCompleto}
              helperText={!!errors?.nomeCompleto ? errors.nomeCompleto.message : null}
            />
            <TextField
              id="outlined-required"
              label="CPF"
              defaultValue=""
              margin="dense" 
              fullWidth
              {...register("cpf", {
                required: "Campo Obrigatorio!",
                validate:(val: string) => {
                    const checker = cpfValidate(val)
                    if(!checker) return "CPF Invalido"
                }

            })}
            error={!!errors?.cpf}
            helperText={!!errors?.cpf ? errors.cpf.message : null}
            />
            <TextField
              id="outlined-required"
              label="Email"
              defaultValue=""
              margin="dense" 
              fullWidth
              {...register("email", {
                required: "Campo Obrigatorio!",
                pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message:"Email invalido!"
                }

            })}
            error={!!errors?.email}
            helperText={!!errors?.email ? errors.email.message : null}
            />
            <TextField
              id="outlined-password-input"
              label="Senha"
              type="password"
              margin="dense"
              fullWidth
              {...register("senha", {
                required: "Campo Obrigatorio!",
                minLength: {
                    value: 6,
                    message: "Senha precisa ter pelomenos 6 caracteres"
                }

            })}
            error={!!errors?.senha}
            helperText={
                !!errors?.senha ? errors.senha.message : null}
            />

            <TextField
              id="outlined-password-input"
              label="Confirmar senha"
              type="password"
              margin="dense"
              fullWidth
              {...register("confirmaSenha", {
                required: "Campo Obrigatorio!",
                validate:(val: string ) => {
                    const { senha } = getValues()
                    return senha === val || "Senhas devem ser iguais!";
                }

            })}
            error={!!errors?.confirmaSenha}
            helperText={
                !!errors?.confirmaSenha ? errors.confirmaSenha.message : null}
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