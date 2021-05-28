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
const coinbase_pro_node_1 = require("coinbase-pro-node");
const buy = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const auth = {
            apiKey: `${process.env.KEY}`,
            apiSecret: `${process.env.SECRET}`,
            passphrase: `${process.env.PASSPHRASE}`,
            useSandbox: true
        };
        const client = new coinbase_pro_node_1.CoinbasePro(auth);
        const order = {
            type: coinbase_pro_node_1.OrderType.MARKET,
            product_id: 'BTC-USD',
            side: coinbase_pro_node_1.OrderSide.BUY,
            funds: '25'
        };
        yield client.rest.order.placeOrder(order);
        return res.status(200).json({
            message: 'Success'
        });
    }
    catch (error) {
        next(error);
    }
    ;
});
exports.default = {
    buy
};
//# sourceMappingURL=buy.js.map