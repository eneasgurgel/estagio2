import { Application, Router } from 'express';
import coinsController from '../app/controllers/coins.controller';

export default async (server: Application, routes: Router, prefix = '/api/v1/coins') => {
    routes.post('/new/:id', coinsController.newTransation);
    routes.get('/:address', coinsController.getAddressCoins);
    routes.get('/:coinId/transactions', coinsController.getTransationsCoins);

    server.use(prefix, routes);
};
