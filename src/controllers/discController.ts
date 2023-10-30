import { Request, Response, NextFunction } from 'express';
import discService from '../services/discService';

async function getDisc(req, res, next) {
    const customers = await discService.getDisc(req.query.idDisc);
    res.json(customers);
}

async function postDisc(req, res, next) {
    const postDisc = await discService.postDisc(req.body);
    res.json(postDisc);
}

async function deleteDisc(req, res, next) {
    const deleteDisc = await discService.deleteDisc(req.query.idDisc);
    res.json(deleteDisc);
}

export default {
    getDisc,
    postDisc,
    deleteDisc
}