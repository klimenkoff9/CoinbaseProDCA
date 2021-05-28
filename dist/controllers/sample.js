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
const coinbase_pro_node_1 = require("coinbase-pro-node");
const logging_1 = __importDefault(require("../config/logging"));
const NAMESPACE = 'Sample Controller';
const sampleHealthCheck = (req, res, next) => {
    logging_1.default.info(NAMESPACE, `Sample health check route called.`);
    return res.status(200).json({
        message: 'pong'
    });
};
const anotherSampleCheck = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const auth = {
        apiKey: `${process.env.KEY}`,
        apiSecret: `${process.env.SECRET}`,
        passphrase: `${process.env.PASSPHRASE}`,
        useSandbox: false
    };
    const client = new coinbase_pro_node_1.CoinbasePro(auth);
    try {
        yield client.rest.account.listAccounts().then((accounts) => {
            const message = `You can trade "${accounts.length}" different pairs.`;
            console.log(message);
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.default = {
    sampleHealthCheck,
    anotherSampleCheck
};
//# sourceMappingURL=sample.js.map