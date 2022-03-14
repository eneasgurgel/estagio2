"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Repository {
    constructor(schema) {
        this.schema = schema;
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.schema.create(payload);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.schema.find();
        });
    }
    findOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.schema.findById(id);
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.schema.findByIdAndUpdate(id, payload);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.schema.findByIdAndDelete(id);
        });
    }
}
exports.default = Repository;
