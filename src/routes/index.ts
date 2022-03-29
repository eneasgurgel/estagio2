import { Application, NextFunction, Request, Response, Router } from 'express';
import wallets from './wallets.routes';
import coins from './coins.routes';

export default async (server: Application) => {
    server.use((req: Request, res: Response, next: NextFunction) => {
        wallets(server, Router());
        coins(server, Router());
        next();
    });
};
