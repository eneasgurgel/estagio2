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

    async updateFunds(address: string, amount: number) {
        return CoinsSchema.findByIdAndUpdate(address, { amount });
    }

    async findAddressCoins(address: string) {
        return CoinsSchema.find({ address });
    }
}

export default new CoinsRepository();
