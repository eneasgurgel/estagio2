import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CoinsService from '../../services/CoinsService';
import { Grid } from '@mui/material';
import moment from 'moment';
import 'moment/locale/pt-br'



export default function DialogTransfers(props: any) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');
  const [transactions, setTransactions] = React.useState([])

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  React.useEffect( () => {
    async function getData() {
        try{
            console.log(props)
             const res = await CoinsService.getTransactions(props.coinId)
             if(res) setTransactions(res)
             

            

        }catch(err: any){

        }
        
    }


    getData()
}, [])



  return (
    <div>
        <Button color="secondary"variant="contained" fullWidth onClick={handleClickOpen('paper')}>Ver ultimas transações</Button>
      <Dialog
        fullWidth
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Transações</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {transactions.map((item: any) => (
                           <Grid sx={{ flexGrow: 1, border: 1, borderColor:'#404040', margin: 3, padding: 1, borderRadius: 1 }}>
                           <h3>{item.type}</h3>
                           <h4>{item.coinName}</h4>
                           <h4>valor: {item.amount}</h4>
                           <h4>{moment(item.Date).locale('pt-br').format('LLL')}</h4>
                           
            
                       </Grid>
            ))}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}