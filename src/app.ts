import express from 'express';
import router from './routes';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        router(this.app);
    }
}

export default new App().app;
