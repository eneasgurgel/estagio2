import { Application, Router } from 'express';
import walletsController from '../app/controllers/wallets.controller';

export default async (server: Application, routes: Router, prefix = '/api/v1/wallets') => {
    routes.post('/', walletsController.create);
    routes.get('/', walletsController.get);
    routes.get('/:id', walletsController.getOne);
    routes.put('/:id', walletsController.updateOne);
    routes.delete('/:id', walletsController.deleteOne);

    server.use(prefix, routes);
};
