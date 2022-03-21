export default class Unauthorized extends Error {
    status: number;

    constructor(item: string) {
        super();
        this.message = item;
        this.status = 401;
    }
}
