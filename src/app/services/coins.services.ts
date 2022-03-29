import NotFound from '../error/NotFound';
import coinsRepository from '../repository/coins.repository';

class CoinsService {
    async create(data: any) {
        const newWallet = await coinsRepository.create(data);
        if (!newWallet) throw new Error();
        return newWallet;
    }

    async getData({ coin, convertFrom }: any) {
        const getData = await coinsRepository
            .findCoinData(coin, convertFrom)
            .then((response) => response.data)
            .catch(() => {
                throw new NotFound('Transação invalida ou não suportada');
            });
        return getData;
    }
}

export default new CoinsService();
