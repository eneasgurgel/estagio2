import { Request, Response } from 'express';
import walletsServices from '../services/wallets.services';

class WalletsController {
    create(req: Request, res: Response) {
        const { body } = req;
        const newWallet = walletsServices.create(body);
        return res.status(201).json(newWallet);
    }

    get(req: Request, res: Response) {
        const allWallets = walletsServices.getAll();
        return res.status(200).json(allWallets);
    }

    getOne(req: Request, res: Response) {
        const { id } = req.params;
        const oneWallet = walletsServices.getOneId(id);
        return res.status(200).json(oneWallet);
    }

    updateOne(req: Request, res: Response) {
        const { id } = req.params;
        const { body } = req;
        const updateWallet = walletsServices.updateOne(id, body);
        return res.status(200).json(updateWallet);
    }

    deleteOne(req: Request, res: Response) {
        const { id } = req.params;
        walletsServices.deleteOne(id);
        return res.status(204).end();
    }
}

export default new WalletsController();
