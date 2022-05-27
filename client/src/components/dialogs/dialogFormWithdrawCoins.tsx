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

  return (
    <div>
        <Button variant="contained" onClick={handleClickOpen} color="error">Resgate suas moedas</Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Resgatar</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha as informações para realizar o resgate!
          </DialogContentText>
          <TextField
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          helperText="Selecione sua moeda"
          margin="normal"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <CurrencyExchangeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label={`Valor(${currency})`} variant="standard" />
      </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Resgatar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}