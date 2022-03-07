import WalletsSchema from '../schemas/wallets.schema';
import Repository from './repository';

class NewsRepository extends Repository {
    constructor() {
        super(WalletsSchema);
    }
}

export default new NewsRepository();
