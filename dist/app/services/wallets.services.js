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
const NotFound_1 = __importDefault(require("../error/NotFound"));
const coins_repository_1 = __importDefault(require("../repository/coins.repository"));
const wallets_repository_1 = __importDefault(require("../repository/wallets.repository"));
const coins_services_1 = __importDefault(require("./coins.services"));
class WalletsServices {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newWallet = yield wallets_repository_1.default.create(data);
            if (!newWallet)
                throw new Error();
            return newWallet;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const allWallets = yield wallets_repository_1.default.findAll();
            return allWallets;
        });
    }
    getOneId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const oneWallet = yield wallets_repository_1.default.findOne(id);
            if (!oneWallet)
                throw new NotFound_1.default('carteira não encontrada');
            return oneWallet;
        });
    }
    addFunds(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            let getCoin = yield coins_repository_1.default.findUniqueCoin(body.coin, id);
            const coinData = yield coins_services_1.default.getData(body);
            if (!getCoin)
                getCoin = yield coins_services_1.default.createNewCoin(coinData, id);
            yield coins_services_1.default.convertCoinAmount(getCoin, coinData, body);
            return getCoin;
        });
    }
    updateOne(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return wallets_repository_1.default.update(id, data);
        });
    }
    deleteOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return wallets_repository_1.default.remove(id);
        });
    }
}
exports.default = new WalletsServices();
