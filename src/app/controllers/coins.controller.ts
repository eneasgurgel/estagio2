import { Request, Response } from 'express';
import coinsServices from '../services/coins.services';
import walletsServices from '../services/wallets.services';

class CoinsController {
    async newTransation(req: Request, res: Response) {
        await walletsServices
            .addFunds(req.params.id, req.body)
            .then((data) => res.status(200).json(data))
            .catch((err) => {
                const status = err.status || 500;
                res.status(status).json(err.message);
            });
    }

    async getAddressCoins(req: Request, res: Response) {
        await coinsServices
            .findCoinsAddress(req.params.address)
            .then((data) => res.status(200).json(data))
            .catch((err) => {
                const status = err.status || 500;
                res.status(status).json(err.message);
            });
    }

    async getTransationsCoins(req: Request, res: Response) {
        await coinsServices
            .getTransactionsCoin(req.params.coinId)
            .then((data) => res.status(200).json(data))
            .catch((err) => {
                const status = err.status || 500;
                res.status(status).json(err.message);
            });
    }
}

export default new CoinsController();
