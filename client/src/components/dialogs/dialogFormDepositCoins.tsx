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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [currencyIn, setCurrencyIn] = React.useState('BRL');
  const [currencyOut, setCurrencyOut] = React.useState('USD');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyIn(event.target.value);
  };
  const handleChangeOut = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrencyOut(event.target.value);
  };

  return (
    <div>
        <Button variant="contained" fullWidth onClick={handleClickOpen} color="success">Adicione saldo a suas moedas</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Depositar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha as informações para realizar o depósito!
          </DialogContentText>
          <TextField
          id="outlined-select-currency"
          select
          label="Entrada"
          value={currencyIn}
          onChange={handleChange}
          helperText="Please select your currency"
          margin="normal"
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
          onChange={handleChangeOut}
          helperText="Please select your currency"
          margin="normal"
        >
          {currenciesOut.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <CurrencyExchangeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label={`Valor(${currencyIn})`} variant="standard" />
      </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Depósitar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}