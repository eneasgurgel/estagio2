import TransactionsSchema from '../schemas/transactions.schema';
import Repository from './repository';

class TransactionsRepository extends Repository {
    constructor() {
        super(TransactionsSchema);
    }
}

export default new TransactionsRepository();
