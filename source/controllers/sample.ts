import {Request, Response, NextFunction } from 'express';
import logging from '../config/logging';

const NAMESPACE = 'Sample Controller'

const sampleHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Sample health check route called.`);

    return res.status(200).json({
        message: 'pong'
    })
}

const anotherSampleCheck = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Another Check`);

    return res.status(200).json({
        message: 'I LOVE NYC'
    });
};

export default {
    sampleHealthCheck,
    anotherSampleCheck
};