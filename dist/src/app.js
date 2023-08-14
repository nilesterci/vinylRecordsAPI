"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
const discRouter_1 = __importDefault(require("./routers/discRouter"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const swagger_json_1 = __importDefault(require("../docs/swagger.json"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
app.use(express.json());
app.use("/disc", discRouter_1.default);
app.use('/', swaggerUI.serve, swaggerUI.setup(swagger_json_1.default));
app.use(express.urlencoded({
    extended: true,
}));
app.use((0, morgan_1.default)('tiny'));
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});
exports.default = app;
