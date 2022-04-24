import NotFound from '../error/NotFound';
import ICoinData from '../interfaces/coinDataInterface';
import coinsRepository from '../repository/coins.repository';

class CoinsService {
    async createNewCoin(data: ICoinData, address: string) {
        const newWallet = await coinsRepository.create({
            coin: data.codein,
            coinName: data.name.split('/')[1],
            amount: 0,
            address
        });
        if (!newWallet) throw new Error();
        return newWallet;
    }

    async findCoinsAddress(address: string) {
        const allCoins = await coinsRepository.findAddressCoins(address);
        if (allCoins.length === 0) throw new NotFound('Nao foram encontradas moedas nesse endereço');
        return allCoins;
    }

    async convertCoinAmount(data: any, tdata: ICoinData, body: any) {
        let value = 0;

        if (body.type === 'deposit') {
            value = data.amount + body.amount * Number(tdata.bid);
        }

        if (body.type === 'withdraw') {
            value = data.amount - body.amount * Number(tdata.bid);
        }

        return coinsRepository.updateFunds(data.id, value);
    }

    async getData(data: any): Promise<ICoinData> {
        const getData = await coinsRepository
            .findCoinData(data.coin, data.convertFrom)
            .then((response) => response.data[data.convertFrom + data.coin])
            .catch(() => {
                throw new NotFound('Transação invalida ou não suportada');
            });

        return getData;
    }
}

export default new CoinsService();
