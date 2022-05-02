import { compare } from 'bcryptjs';
import * as jose from 'jose';
import walletsRepository from '../repository/wallets.repository';
import 'dotenv/config';
import Unauthorized from '../error/Unauthorized';

require('dotenv').config();

class AuthService {
    async login(body: any) {
        const user = await walletsRepository.findOneEmail(body.email);
        const comparePassword = await compare(body.password, user.password);
        if (!comparePassword || !user) {
            throw new Unauthorized('email ou senha invalidas');
        }
        const secret = new Uint8Array([9, 8]);
        const loginToken = await new jose.SignJWT({
            id: user.id,
            user: user.email,
            name: user.full_name
        })
            .setExpirationTime('1h')
            .setProtectedHeader({ alg: 'HS256' })
            .sign(secret);

        // eslint-disable-next-line consistent-return
        return loginToken;
    }
}

export default new AuthService();
