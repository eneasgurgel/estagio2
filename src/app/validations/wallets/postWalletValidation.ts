import { NextFunction, Request, Response } from 'express';

import Joi from 'joi';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const walletsSchema = Joi.object({
            full_name: Joi.string().min(1).required().trim(),
            cpf: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required().trim()
        });
        const { error } = walletsSchema.validate(req.body, { abortEarly: false });

        if (error) {
            const formatedError = error.details.map((details: any) => ({
                description: details.context.label,
                name: details.message
            }));
            // eslint-disable-next-line @typescript-eslint/no-throw-literal
            throw formatedError;
        }

        return next();
    } catch (error) {
        return res.status(400).json(error);
    }
};
