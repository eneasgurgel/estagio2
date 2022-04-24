"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app_1 = __importDefault(require("./app"));
require("dotenv/config");
const port = process.env.PORT || 3000;
app_1.default.listen(port, () => console.log('server running'));
app_1.default.use(express_1.default.static(path_1.default.resolve(__dirname, '../client/build')));
app_1.default.get('/', (req, res) => {
    res.sendFile('index.html', { root: path_1.default.join(__dirname, '../client/build/') });
});
app_1.default.get('/login', (req, res) => {
    res.sendFile('index.html', { root: path_1.default.join(__dirname, '../client/build/') });
});
app_1.default.get('/register', (req, res) => {
    res.sendFile('index.html', { root: path_1.default.join(__dirname, '../client/build/') });
});
