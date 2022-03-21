import { Application, Router } from 'express';
import authController from '../app/controllers/auth.controller';
import walletsController from '../app/controllers/wallets.controller';
import idvalidation from '../app/validations/idvalidation';
import postWalletValidation from '../app/validations/wallets/postWalletValidation';

export default async (server: Application, routes: Router, prefix = '/api/v1/wallets') => {
    routes.post('/', postWalletValidation, walletsController.create);
    routes.get('/', walletsController.get);
    routes.get('/:id', idvalidation, walletsController.getOne);
    routes.put('/:id', idvalidation, walletsController.updateOne);
    routes.delete('/:id', idvalidation, walletsController.deleteOne);
    routes.post('/login/', authController.login);

    server.use(prefix, routes);
};
