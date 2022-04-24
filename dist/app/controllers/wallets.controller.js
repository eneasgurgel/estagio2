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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const wallets_services_1 = __importDefault(require("../services/wallets.services"));
class WalletsController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            yield wallets_services_1.default
                .create(body)
                .then((data) => res.status(200).json(data))
                .catch((err) => {
                const status = err.status || 500;
                res.status(status).json({ error: err.message });
            });
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield wallets_services_1.default
                .getAll()
                .then((data) => res.status(200).json(data))
                .catch((err) => {
                const status = err.status || 500;
                res.status(status).json({ error: err.message });
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield wallets_services_1.default
                .getOneId(id)
                .then((data) => res.status(200).json(data))
                .catch((err) => {
                const status = err.status || 500;
                res.status(status).json({ error: err.message });
            });
        });
    }
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { body } = req;
            yield wallets_services_1.default
                .updateOne(id, body)
                .then((data) => res.status(200).json(data))
                .catch((err) => {
                const status = err.status || 500;
                res.status(status).json({ error: err.message });
            });
        });
    }
    deleteOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield wallets_services_1.default
                .deleteOne(id)
                .then(() => res.status(204).end())
                .catch((err) => {
                const status = err.status || 500;
                res.status(status).json({ error: err.message });
            });
        });
    }
}
exports.default = new WalletsController();
