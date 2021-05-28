import { Request, Response, NextFunction } from 'express';
import { CoinbasePro } from 'coinbase-pro-node';
import logging from '../config/logging';

const NAMESPACE = 'Sample Controller';

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Sample health check route called.`);

    return res.status(200).json({
        message: 'pong'
    });
};

const anotherSampleCheck = async (req: Request, res: Response, next: NextFunction) => {
    const auth = {
        apiKey: `${process.env.KEY}`,
        apiSecret: `${process.env.SECRET}`,
        passphrase: `${process.env.PASSPHRASE}`,
        useSandbox: false
    };
    
   const client = new CoinbasePro(auth);

    try {
        await client.rest.account.listAccounts().then((accounts) => {
            const message = `You can trade "${accounts.length}" different pairs.`;
            console.log(message);
        });
    } catch (error) {
        console.error(error);
    }
};

export default {
    sampleHealthCheck,
    anotherSampleCheck
};
