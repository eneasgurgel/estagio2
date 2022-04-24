import { Application, Router } from 'express';
import coinsController from '../app/controllers/coins.controller';

export default async (server: Application, routes: Router, prefix = '/api/v1/coins') => {
    routes.get('/', coinsController.getData);

    server.use(prefix, routes);
};
