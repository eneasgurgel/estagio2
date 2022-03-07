import walletsRepository from '../repository/wallets.repository';

class WalletsServices {
    async create(data: any) {
        return walletsRepository.create(data);
    }

    async getAll() {
        return walletsRepository.findAll();
    }

    async getOneId(id: string) {
        return walletsRepository.findOne(id);
    }

    async updateOne(id: string, data: any) {
        return walletsRepository.update(id, data);
    }

    async deleteOne(id: string) {
        return walletsRepository.remove(id);
    }
}

export default new WalletsServices();
