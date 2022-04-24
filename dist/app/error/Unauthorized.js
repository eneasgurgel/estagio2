"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Unauthorized extends Error {
    constructor(item) {
        super();
        this.message = item;
        this.status = 401;
    }
}
exports.default = Unauthorized;
