import {
    Application, NextFunction, Request, Response, Router,
  } from 'express';
  import wallets from './wallets.routes';
  
  export default async (server: Application) => {
    server.use((req: Request, res: Response, next: NextFunction) => {
      wallets(server, Router());
  
      next();
    });
  };
  