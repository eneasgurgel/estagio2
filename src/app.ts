import express from 'express';
import cors from 'cors';
import router from './routes';
import './infra/db';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors({ origin: '*' }));
    }

    routes() {
        router(this.app);
    }
}

export default new App().app;
