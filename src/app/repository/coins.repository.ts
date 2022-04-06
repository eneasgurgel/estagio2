import axios from 'axios';
import CoinsSchema from '../schemas/coins.schema';
import Repository from './repository';

class CoinsRepository extends Repository {
    constructor() {
        super(CoinsSchema);
    }

    async findCoinData(coin: string, convertFrom: string) {
        return axios.get(`https://economia.awesomeapi.com.br/json/last/${convertFrom}-${coin}`);
    }

    async findUniqueCoin(coin: string, address: string) {
        return CoinsSchema.findOne({ coin, address });
    }
}

export default new CoinsRepository();
