import NotFound from '../error/NotFound';
import coinsRepository from '../repository/coins.repository';
import walletsRepository from '../repository/wallets.repository';
import coinsServices from './coins.services';

class WalletsServices {
    async create(data: any) {
        const newWallet = await walletsRepository.create(data);
        if (!newWallet) throw new Error();
        return newWallet;
    }

    async getAll() {
        const allWallets = await walletsRepository.findPopulated();
        return allWallets;
    }

    async getOneId(id: string) {
        const oneWallet = await walletsRepository.findOne(id);
        if (!oneWallet) throw new NotFound('carteira não encontrada');
        return oneWallet;
    }

    async addFunds(id: string, body: any) {
        const getCoin = await coinsRepository.findUniqueCoin(body.coin, id);
        const coinData = await coinsServices.getData(body);
        console.log(body);
        if (!getCoin) return coinsServices.createNewCoin(coinData, id);

        return getCoin;
    }

    async updateOne(id: string, data: any) {
        return walletsRepository.update(id, data);
    }

    async deleteOne(id: string) {
        return walletsRepository.remove(id);
    }
}

export default new WalletsServices();
