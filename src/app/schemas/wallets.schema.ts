import mongoose from 'mongoose';

import { hash } from 'bcryptjs';

const walletsSchema = new mongoose.Schema({
    full_name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

walletsSchema.pre('save', async function encryptPass(next) {
    this.password = await hash(this.password, 10);
    return next();
});

const WalletsSchema = mongoose.model('Wallets', walletsSchema);

export default WalletsSchema;
