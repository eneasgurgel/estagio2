import { compare } from 'bcryptjs';
import * as jose from 'jose';
import walletsRepository from '../repository/wallets.repository';
import 'dotenv/config';

require('dotenv').config();

class AuthService {
    async login(body: any) {
        console.log(body);
        const user = await walletsRepository.findOneEmail(body.email);
        console.log(user);
        if (!user) {
            return;
        }
        const comparePassword = await compare(body.password, user.password);
        if (!comparePassword) {
            return;
        }
        const secret = new Uint8Array([9, 8]);
        const loginToken = await new jose.SignJWT({
            user: user.email
        })
            .setExpirationTime('1h')
            .setProtectedHeader({ alg: 'HS256' })
            .sign(secret);

        // eslint-disable-next-line consistent-return
        return loginToken;
    }
}

export default new AuthService();
