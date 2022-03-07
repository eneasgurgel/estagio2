import mongoose from 'mongoose';

const walletsSchema = new mongoose.Schema({
    name: {
        type: String
    }
});
const WalletsSchema = mongoose.model('Wallets', walletsSchema);

export default WalletsSchema;
