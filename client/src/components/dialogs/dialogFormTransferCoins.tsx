import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuItem from '@mui/material/MenuItem';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
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

export default function FormDialogTransferCoins() {
  const [open, setOpen] = React.useState(false);
  const { register, handleSubmit, formState: {errors}, setError } = useForm()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [currency, setCurrency] = React.useState('BRL');

  const tranferCoin = async ({moeda, amount, address}: any) =>{
    try{
        const data = {
            coin: moeda,
            convertFrom: moeda,
            amount: Number(amount),
            receiverAddress: address,
            type: "transfer"
        }
        await CoinsService.addCoin(data)
        window.location.reload()
    
      handleClose()
    
      return alert('Deposito efetuado com sucesso')

    }catch(err: any){
        setError('address', {
            type:'server',
            message:err.message
        })
    }
    
}

  return (
    <div>
        <Button fullWidth variant="contained" onClick={handleClickOpen}>Trânsfira moedas</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Transferência</DialogTitle>
        <form onSubmit={handleSubmit(tranferCoin)}>
            <DialogContent>
            <DialogContentText>
                Preencha com o ID da Wallet destino!
            </DialogContentText>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountBalanceWalletIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx"
                 label='ID'variant="standard" 
                 error={!!errors?.address}
                 helperText={!!errors?.address ? errors.address.message : null}
                 {...register("address")}/>
            </Box>
            </DialogContent>
            <DialogContent>
            <DialogContentText>
                Preencha com a moeda e o valor da transferência! 
            </DialogContentText>
            <TextField
            id="outlined-select-currency"
            select
            value={currency}
            helperText={!!errors?.address ? errors.address.message :"Selecione sua moeda"}
            margin="normal"
            error={!!errors?.address}
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
            <TextField id="input-with-sx"
             label={`Valor(${currency})`}
              variant="standard"
              helperText={!!errors?.address ? errors.address.message :"Selecione o valor"}
              error={!!errors?.address}
              type="number" {...register("amount", {
            min: 1
        })} />
            </Box>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type='submit'>Transferir</Button>
            </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}