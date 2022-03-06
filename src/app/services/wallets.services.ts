class WalletsServices {
    create(data: any) {
        return data;
    }

    getAll() {
        return 'TODO';
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
