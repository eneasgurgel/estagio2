import { Request, Response } from 'express';
import authService from '../services/auth.services';

class AuthController {
    async login(req: Request, res: Response) {
        const { body } = req;
        const login = await authService.login(body);
        return res.status(200).json(login);
    }
}

export default new AuthController();
