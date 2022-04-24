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
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = require("bcryptjs");
const walletsSchema = new mongoose_1.default.Schema({
    full_name: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    coins: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            refPath: 'Coins'
        }
    ]
});
walletsSchema.pre('save', function encryptPass(next) {
    return __awaiter(this, void 0, void 0, function* () {
        this.password = yield (0, bcryptjs_1.hash)(this.password, 10);
        return next();
    });
});
const WalletsSchema = mongoose_1.default.model('Wallets', walletsSchema);
exports.default = WalletsSchema;
