import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Box from '@mui/material/Box';
import { useForm } from 'react-hook-form';
import CoinsService from '../../services/CoinsService';

const currencies = [
    {
      value: 'USD',
      label: '$ - USD',
    },
    {
      value: 'EUR',
      label: '€ - EUR',
    },
    {
      value: 'BRL',
      label: 'R$ - BRL',
    },
  ];


export default function FormDialogWithdrawCoins(props: any) {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, formState: {errors}, setError} = useForm()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [currency, setCurrency] = React.useState('BRL');


  const withdrawCoins = async ({moeda, amount}: any) =>{
    try{

        const data = {
            coin: props.coin,
            convertFrom: moeda,
            amount: Number(amount),
            type: "withdraw"
        }
        await CoinsService.addCoin(data)
        window.location.reload()
    
      handleClose()
      alert('Saque efetuado com sucesso!')


    }catch(err: any){
        setError('amount', {
            type:'server',
            message: err.message
        })

    }
}


  return (
    <div>
        <Button fullWidth variant="contained" onClick={handleClickOpen} color="error">Resgate suas moedas</Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Resgatar</DialogTitle>
        <form onSubmit={handleSubmit(withdrawCoins)}>
            <DialogContent>
            <DialogContentText>
                Preencha as informações para realizar o resgate!
            </DialogContentText>
            <TextField
            id="outlined-select-currency"
            select
            value={currency}
            helperText="Selecione sua moeda"
            margin="normal"
            {...register("moeda", {
                onChange: v => setCurrency(v.target.value)
            })}
            >
            {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <CurrencyExchangeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
         id="input-with-sx"
         label={`Valor(${currency})`} 
         variant="standard" 
         type="number" 
         error={!!errors?.amount}
         helperText={!!errors?.amount ? errors.amount.message : null}
         {...register("amount", {
            min:{
                value: 1,
                message: "O valor de depósito deve ser de no minimo 1"
            },
            required:'Campo obrigatorio!'
        })} />
        </Box>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type='submit'>Resgatar</Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}