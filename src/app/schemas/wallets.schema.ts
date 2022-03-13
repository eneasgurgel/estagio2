import mongoose from 'mongoose';

import { hash } from 'bcryptjs';

const walletsSchema = new mongoose.Schema({
    address: {
        type: String
    },
    full_name: {
        type: String
    },
    cpf: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

walletsSchema.pre('save', async function encryptPass(next) {
    this.password = await hash(this.password, 10);
    return next();
});

const WalletsSchema = mongoose.model('Wallets', walletsSchema);

export default WalletsSchema;
