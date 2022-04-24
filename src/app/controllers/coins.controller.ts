import { Request, Response } from 'express';
import coinsServices from '../services/coins.services';

class CoinsController {
    async getData(req: Request, res: Response) {
        await coinsServices
            .getData(req.body)
            .then((data) => res.status(200).json(data))
            .catch((err) => {
                const status = err.status || 500;
                res.status(status).json(err);
            });
    }
}

export default new CoinsController();
