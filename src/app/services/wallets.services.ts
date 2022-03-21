import NotFound from '../error/NotFound';
import walletsRepository from '../repository/wallets.repository';

class WalletsServices {
    async create(data: any) {
        const newWallet = await walletsRepository.create(data);
        if (!newWallet) throw new Error();
        return newWallet;
    }

    async getAll() {
        const allWallets = await walletsRepository.findAll();
        if (allWallets.length === 0) throw new NotFound('carteiras não encontradas');
        return allWallets;
    }

    async getOneId(id: string) {
        const oneWallet = await walletsRepository.findOne(id);
        if (!oneWallet) throw new NotFound('carteira não encontrada');
        return oneWallet;
    }

    async updateOne(id: string, data: any) {
        return walletsRepository.update(id, data);
    }

    async deleteOne(id: string) {
        return walletsRepository.remove(id);
    }
}

export default new WalletsServices();
