import { Request, Response, NextFunction } from 'express';
import discService from '../services/discService';

async function getDisc(req, res, next) {
    const customers = await discService.getDisc(req.query.idDisc);
    res.json(customers);
}

async function postDisc(req, res, next) {
    console.log("🚀 ~ req:", req.body)
    const postDisc = await discService.postDisc(req.body);
    res.json(postDisc);
}

export default {
    getDisc,
    postDisc
}