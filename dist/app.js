"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PING_LISTEN_PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
    app.get('/ping', (req, res) => {
        res.json(req.headers);
    app.use((req, res) => {
        res.status(404).send('');
        });
    });
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});