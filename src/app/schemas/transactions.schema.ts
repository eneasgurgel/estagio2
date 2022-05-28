import mongoose from 'mongoose';

const transactionsSchema = new mongoose.Schema({
    coinName: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        default: () => new Date().toString()
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'Wallets'
    },

    coinId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'Coins'
    },

    receiverAddress: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'Wallets'
    },

    transmiterAddress: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'Wallets'
    }
});

const TransactionsSchema = mongoose.model('Transactions', transactionsSchema);

export default TransactionsSchema;
