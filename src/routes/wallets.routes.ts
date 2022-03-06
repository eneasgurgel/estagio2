import { Application, Router } from 'express';
import WalletsController from '../app/controllers/wallets.controller';

export default async (server: Application, routes: Router, prefix = '/api/v1/wallets') => {
    routes.get('/', WalletsController.helloworld);

    server.use(prefix, routes);
};
