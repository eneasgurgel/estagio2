import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useForm } from 'react-hook-form';
import CoinsService from '../../services/CoinsService';

const currenciesIn = [
    {
      value: 'USD',
      label: '$ - USD',
    },
    {
      value: 'EUR',
      label: '€ - EUR',
    },
    {
      value: 'BTC',
      label: '฿ - BTC',
    },
    {
      value: 'BRL',
      label: 'R$ - BRL',
    },
  ];

  const currenciesOut = [
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

export default function FormDialogDepositCoins() {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, formState: {errors}, setError } = useForm()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [currencyIn, setCurrencyIn] = React.useState('BRL');
  const [currencyOut, setCurrencyOut] = React.useState('USD');


  const addNewCoin = async ({entrada, deposito, amount}: any) =>{
      try{
      const data = {
          coin: deposito,
          convertFrom: entrada,
          amount: amount,
          type: "deposit"
      }
      await CoinsService.addCoin(data)
      window.location.reload()

    handleClose()

    return alert('Depósito efetuado com sucesso')
      }catch(err: any){
        setError('amount', {
            type:'server',
            message: err.message
        })

      }
  }

  return (
    <div>
        <Button variant="contained" onClick={handleClickOpen} color="success">Adicione saldo a suas moedas</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Depositar</DialogTitle>
        <form onSubmit={handleSubmit(addNewCoin)}>
        <DialogContent>
          <DialogContentText>
            Preencha as informações para realizar o depósito!
          </DialogContentText>
          <TextField
          id="outlined-select-currency"
          select
          label="Entrada"
          value={currencyIn}
          helperText="Selecione sua moeda"
          margin="normal"
          {...register("entrada", {
              onChange: v => setCurrencyIn(v.target.value)
          })}
        >
          {currenciesIn.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency"
          select
          label="Depósito"
          value={currencyOut}
          helperText="Selecione sua moeda"
          margin="normal"
          {...register("deposito", {
            onChange: v => setCurrencyOut(v.target.value)
          })}
        >
          {currenciesOut.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <CurrencyExchangeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField
         id="input-with-sx"
         label={`Valor(${currencyIn})`} 
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
          <Button type='submit'>Depósitar</Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}