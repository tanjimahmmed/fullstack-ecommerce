import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.header('Authorization')

    if(!token) {
        res.status(401).json({error: 'Unauthorized'})
        return;
    }

    try {
        const decode = jwt.verify(token, 'secret')
        if(typeof decode !== 'object' || !decode?.userId) {
            res.status(401).json({error: 'Access denied'})
            return
        }
        req.userId = decode.userId;
        req.role = decode.role;
        next()
    } catch (error) {
        res.status(401).json({error: 'Access denied'})
    }
}

export function verifySeller(req: Request, res: Response, next: NextFunction) {
    const role = req.role

    if(role !== 'seller') {
        res.status(401).json({error: 'Unauthorized'})
        return;
    }

    next()
}