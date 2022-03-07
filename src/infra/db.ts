import mongoose from 'mongoose';
import 'dotenv/config';

class Db {
    public async createConnection() {
        await mongoose.connect(`${process.env.MONGODB_CONNECTION_STRING}`);
        console.log('ok');
    }
}
export default new Db().createConnection();
