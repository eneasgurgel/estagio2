import { Button } from "@mui/material"
import AuthServices from "../../services/AuthServices"

export default function Application(){

    const authed = AuthServices.getCurrentUser()

    return(

       <><h1>Bem vindo ao wallets {authed.name}</h1><Button onClick={AuthServices.logout}>Clique aqui para deslogar </Button></>

    )

}