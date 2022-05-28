import TransactionsSchema from '../schemas/transactions.schema';
import Repository from './repository';

class TransactionsRepository extends Repository {
    constructor() {
        super(TransactionsSchema);
    }

    public async findByCoin(coinId: string) {
        return TransactionsSchema.find({ coinId }).sort({ Date: -1 });
    }
}

export default new TransactionsRepository();
