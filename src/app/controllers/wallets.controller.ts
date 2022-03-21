import { Request, Response } from 'express';
import walletsServices from '../services/wallets.services';

class WalletsController {
    async create(req: Request, res: Response) {
        const { body } = req;
        await walletsServices
            .create(body)
            .then((data) => res.status(200).json(data))
            .catch((err: any) => {
                const status = err.status || 500;
                res.status(status).json({ error: err.message });
            });
    }

    async get(req: Request, res: Response) {
        await walletsServices
            .getAll()
            .then((data) => res.status(200).json(data))
            .catch((err: any) => {
                const status = err.status || 500;
                res.status(status).json({ error: err.message });
            });
    }

    async getOne(req: Request, res: Response) {
        const { id } = req.params;
        await walletsServices
            .getOneId(id)
            .then((data) => res.status(200).json(data))
            .catch((err: any) => {
                const status = err.status || 500;
                res.status(status).json({ error: err.message });
            });
    }

    async updateOne(req: Request, res: Response) {
        const { id } = req.params;
        const { body } = req;
        await walletsServices
            .updateOne(id, body)
            .then((data) => res.status(200).json(data))
            .catch((err: any) => {
                const status = err.status || 500;
                res.status(status).json({ error: err.message });
            });
    }

    async deleteOne(req: Request, res: Response) {
        const { id } = req.params;
        await walletsServices
            .deleteOne(id)
            .then(() => res.status(204).end())
            .catch((err: any) => {
                const status = err.status || 500;
                res.status(status).json({ error: err.message });
            });
    }
}

export default new WalletsController();
