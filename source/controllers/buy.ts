import { Request, Response, NextFunction } from 'express';
import { CoinbasePro, MarketOrder, OrderSide, OrderType } from 'coinbase-pro-node';

const buy = async (_req: Request, res: Response, next: NextFunction) => {
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
            funds: '25'
        };

        await client.rest.order.placeOrder(order);

        return res.status(200).json({
            message: 'Success'
        });
        
        } catch (error) {
            next(error);
        };
};

export default {
    buy
};
