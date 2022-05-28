export default class BadRequest extends Error {
    status: number;

    constructor(item: string) {
        super();
        this.message = item;
        this.status = 400;
    }
}
