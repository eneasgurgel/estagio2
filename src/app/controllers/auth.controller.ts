import { Request, Response } from 'express';
import authService from '../services/auth.services';

class AuthController {
    async login(req: Request, res: Response) {
        const { body } = req;
        await authService
            .login(body)
            .then((data) => res.status(200).json(data))
            .catch((err: any) => {
                const status = err.status || 500;
                res.status(status).json({ error: err.message });
            });
    }
}

export default new AuthController();
