import {Box, Button, Container, CssBaseline,Card, CardActions, CardContent, Typography, Modal} from "@mui/material"
import{ExpandMore as ExpandMoreIcon} from "@mui/icons-material"
import React from "react";
import AuthServices from "../../services/AuthServices"
import NavBarApp from "../navbar/navBarApp"
import DialogCoins from "../dialogs/dialogsCoins";
import FormDialogDepositCoins from "../dialogs/dialogFormDepositCoins";
import FormDialogWithdrawCoins from "../dialogs/dialogFormWithdrawCoins";
import CoinsService from "../../services/CoinsService";

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




      

      const carteirasCard = (
        <React.Fragment>
          <CardContent>
            <Typography variant="h4" component="div">
              Minha carteira
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Ver o saldo atual das moedas de sua carteira
            </Typography>
          </CardContent>
          <CardActions>
            <Typography>

            <DialogCoins />
            </Typography>
            
          </CardActions>
        </React.Fragment>
      );

      const depositCard = (
        <React.Fragment>
          <CardContent>
            <Typography variant="h4" component="div">
              Depositar moedas
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Adicione moedas em sua carteira
            </Typography>
          </CardContent>
          <CardActions>
            <Typography>
                <FormDialogDepositCoins/>
            </Typography>
          </CardActions>
        </React.Fragment>
      );


      const withdrawCard = (
        <React.Fragment>
          <CardContent>
            <Typography variant="h4" component="div">
              Saque suas moedas
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Resgate o saldo de suas moedas
            </Typography>
          </CardContent>
          <CardActions>
            <FormDialogWithdrawCoins/>
          </CardActions>
        </React.Fragment>
      );
    

    return(
       <>
       <NavBarApp/>



       <CssBaseline/>
       <Container maxWidth="sm" sx={{border: 1,paddingTop: 15, paddingBottom: 15, backgroundColor:'#101010', borderColor:'#404040'}}>

       {coins.map((item: any) => (
           <Box sx={{border: 1, borderColor:'#404040'}}>
               <h1>{item.coinName}</h1>
               <h2>{item.coin} {item.amount}</h2>
               <p><FormDialogDepositCoins/></p>
               
               <p><FormDialogWithdrawCoins/></p>
               

           </Box>
       ))}

       <Card variant="outlined" sx={{margin: 5}}>{carteirasCard}</Card>
       <Card variant="outlined" sx={{margin: 5}}>{depositCard}</Card>
       <Card variant="outlined" sx={{margin: 5}}>{withdrawCard}</Card>

        
       
       </Container>


       
       
       
       </>

    )

}