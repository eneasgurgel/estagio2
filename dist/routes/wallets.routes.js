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
const auth_controller_1 = __importDefault(require("../app/controllers/auth.controller"));
const wallets_controller_1 = __importDefault(require("../app/controllers/wallets.controller"));
exports.default = (server, routes, prefix = '/api/v1/wallets') => __awaiter(void 0, void 0, void 0, function* () {
    routes.post('/', wallets_controller_1.default.create);
    routes.get('/', wallets_controller_1.default.get);
    routes.get('/:id', wallets_controller_1.default.getOne);
    routes.put('/:id', wallets_controller_1.default.updateOne);
    routes.delete('/:id', wallets_controller_1.default.deleteOne);
    routes.post('/login/', auth_controller_1.default.login);
    server.use(prefix, routes);
});
