import WalletsSchema from '../schemas/wallets.schema';
import Repository from './repository';

class NewsRepository extends Repository {
    constructor() {
        super(WalletsSchema);
    }

    async findOneEmail(email: any) {
        return WalletsSchema.findOne({ email });
    }

    async findPopulated() {
        return WalletsSchema.find().populate('coins');
    }
}

export default new NewsRepository();
