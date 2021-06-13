"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coinbase_pro_node_1 = require("coinbase-pro-node");
var cron = require('node-cron');
const buy = (_req, res, next) => {
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
            funds: '50'
        };
        console.log('check');
        cron.schedule('*/1 * * * *', () => {
            client.rest.order.placeOrder(order);
            console.log('bought');
        }, {
            scheduled: true,
            timezone: 'America/New_York'
        });
        return res.status(200).json({
            message: 'Success'
        });
    }
    catch (error) {
        next(error);
    }
};
exports.default = {
    buy,
    stop
};
//# sourceMappingURL=buy.js.map