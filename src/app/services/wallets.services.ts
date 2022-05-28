import BadRequest from '../error/BadRequest';
import NotFound from '../error/NotFound';
import coinsRepository from '../repository/coins.repository';
import walletsRepository from '../repository/wallets.repository';
import coinsServices from './coins.services';

class WalletsServices {
    async create(data: any) {
        const checkEmail = await walletsRepository.findOneEmail(data.email);
        if (checkEmail) throw new BadRequest('Email ja esta em uso!');
        const checkCPF = await walletsRepository.findOneCPF(data.cpf);
        if (checkCPF) throw new BadRequest('CPF ja esta cadastrado!');
        const newWallet = await walletsRepository.create(data);
        if (!newWallet) throw new Error();
        return newWallet;
    }

    async getAll() {
        const allWallets = await walletsRepository.findAll();
        return allWallets;
    }

    async getOneId(id: string) {
        const oneWallet = await walletsRepository.findOne(id);
        if (!oneWallet) throw new NotFound('carteira não encontrada');
        return oneWallet;
    }

    async addFunds(id: string, body: any) {
        let getCoin = await coinsRepository.findUniqueCoin(body.coin, id);
        const coinData = await coinsServices.getData(body);
        if (!getCoin) getCoin = await coinsServices.createNewCoin(coinData, id);
        await coinsServices.convertCoinAmount(getCoin, coinData, body);

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
