export default class NotFound extends Error {
    status: number;

    constructor(item: string) {
        super();
        this.message = item;
        this.status = 404;
    }
}
