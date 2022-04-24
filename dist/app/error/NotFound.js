"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFound extends Error {
    constructor(item) {
        super();
        this.message = item;
        this.status = 404;
    }
}
exports.default = NotFound;
