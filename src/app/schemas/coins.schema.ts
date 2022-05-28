import mongoose from 'mongoose';

const coinsSchema = new mongoose.Schema({
    coin: {
        type: String,
        required: true
    },
    coinName: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'Wallets'
    },

    receiverAddress: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'Wallets'
    }
});

const CoinsSchema = mongoose.model('Coins', coinsSchema);

export default CoinsSchema;
