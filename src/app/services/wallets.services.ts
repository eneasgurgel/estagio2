import walletsRepository from '../repository/wallets.repository';

class WalletsServices {
    async create(data: any) {
        return walletsRepository.create(data);
    }

    async getAll() {
        return walletsRepository.findAll();
    }

    getOneId(id: string) {
        return id;
    }

    updateOne(id: string, data: any) {
        return `${id}, ${data}`;
    }

    deleteOne(id: string) {
        return id;
    }
}

export default new WalletsServices();
