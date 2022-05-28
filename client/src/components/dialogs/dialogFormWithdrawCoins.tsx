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
  const { register, handleSubmit } = useForm()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      console.log(props.coin)
    setOpen(false);
  };

  const [currency, setCurrency] = React.useState('BRL');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const withdrawCoins = async ({moeda, amount}: any) =>{
    const data = {
        coin: moeda,
        convertFrom: props.coin,
        amount: Number(amount),
        type: "withdraw"
    }
    const teste = await CoinsService.addCoin(data)
    window.location.reload()

  handleClose()

  return alert('Deposito efetuado com sucesso')
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
            <TextField id="input-with-sx" label={`Valor(${currency})`} variant="standard" type="number" {...register("amount", {
            min: 1
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