import { NextFunction, Request, Response } from 'express';

import Joi from 'joi';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const walletsSchema = Joi.object({
            id: Joi.string()
                .regex(/^[0-9a-fA-F]{24}$/)
                .required()
        });
        const { error } = walletsSchema.validate(req.params, { abortEarly: false });

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
