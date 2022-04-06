import NotFound from '../error/NotFound';
import ICoinData from '../interfaces/coinDataInterface';
import coinsRepository from '../repository/coins.repository';

class CoinsService {
    async createNewCoin(data: ICoinData, address: string) {
        console.log(data);
        const newWallet = await coinsRepository.create({
            coin: data.codein,
            coinName: data.name.split('/')[1],
            amount: 0,
            address
        });
        if (!newWallet) throw new Error();
        return newWallet;
    }

    async getData(data: any): Promise<ICoinData> {
        const getData = await coinsRepository
            .findCoinData(data.coin, data.convertFrom)
            .then((response) => response.data[data.convertFrom])
            .catch(() => {
                throw new NotFound('Transação invalida ou não suportada');
            });

        return getData;
    }
}

export default new CoinsService();
