import WalletsSchema from '../schemas/wallets.schema';
import Repository from './repository';

class NewsRepository extends Repository {
    constructor() {
        super(WalletsSchema);
    }

    async findOneEmail(email: any) {
        return WalletsSchema.findOne({ email });
    }

    async findOneCPF(cpf: any) {
        return WalletsSchema.findOne({ cpf });
    }
}

export default new NewsRepository();
