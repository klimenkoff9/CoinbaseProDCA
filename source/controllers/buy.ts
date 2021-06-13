import { Request, Response, NextFunction } from 'express';
import { CoinbasePro, MarketOrder, OrderSide, OrderType } from 'coinbase-pro-node';
var cron = require('node-cron');

const buy = (_req: Request, res: Response, next: NextFunction) => {
    try {
        const auth = {
            apiKey: `${process.env.KEY}`,
            apiSecret: `${process.env.SECRET}`,
            passphrase: `${process.env.PASSPHRASE}`,
            useSandbox: true
        };
        const client = new CoinbasePro(auth);

        const order: MarketOrder = {
            type: OrderType.MARKET,
            product_id: 'BTC-USD',
            side: OrderSide.BUY,
            funds: '50'
        };
        console.log('check');
        cron.schedule(
            '*/1 * * * *',
             () => {
                client.rest.order.placeOrder(order);
                console.log('bought');
            },
            {
                scheduled: true,
                timezone: 'America/New_York'
            }
        );

        return res.status(200).json({
            message: 'Success'
        });
    } catch (error) {
        next(error);
    }
};

export default {
    buy,
    stop
};
