import {Box, Button, Container, CssBaseline,Card, CardActions, CardContent, Typography, Grid} from "@mui/material"
import{ExpandMore as ExpandMoreIcon} from "@mui/icons-material"
import React from "react";
import AuthServices from "../../services/AuthServices"
import NavBarApp from "../navbar/navBarApp"
import DialogCoins from "../dialogs/dialogsCoins";
import FormDialogDepositCoins from "../dialogs/dialogFormDepositCoins";
import FormDialogWithdrawCoins from "../dialogs/dialogFormWithdrawCoins";
import CoinsService from "../../services/CoinsService";
import FormDialogTransferCoins from "../dialogs/dialogFormTransferCoins";

export default function Application(){

    const [open, setOpen] = React.useState(false);

    const [coins, setCoins] = React.useState([])


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    React.useEffect( () => {
        async function getData() {
            try{
                const res = await CoinsService.getListOfCoins()

                setCoins(res)
                

            }catch(err: any){
                console.log(err)

            }
            
        }

        getData()
    }, [])


    return(
       <>
       <NavBarApp/>


       <CssBaseline/>
       <Container maxWidth="sm" sx={{border: 1,paddingTop: 15, paddingBottom: 15, backgroundColor:'#101010', borderColor:'#404040'}}>
       <p><FormDialogDepositCoins/></p>
       { coins.length === 0?<h4>Parece que você não fez nenhum depósito ainda, que tal realizar o seu primeiro? =)</h4> :
       coins.map((item: any) => (
           <Grid sx={{ flexGrow: 1, border: 1, borderColor:'#404040', margin: 3, padding: 1, borderRadius: 1 }}>
               <h1>{item.coinName}</h1>
               <h2>{item.coin} {item.amount.toFixed(2)}</h2>
               <p><FormDialogWithdrawCoins coin={item.coin}/></p>
               <p><FormDialogTransferCoins/></p>
               

           </Grid>
       ))}
        
       
       </Container>


       
       
       
       </>

    )

}