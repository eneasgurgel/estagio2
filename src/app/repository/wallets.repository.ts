import WalletsSchema from '../schemas/wallets.schema';
import Repository from './repository';

class NewsRepository extends Repository {
    constructor() {
        super(WalletsSchema);
    }

    async findOneEmail(email: any) {
        return WalletsSchema.findOne({ email });
    }
}

export default new NewsRepository();
