import { Request, Response, NextFunction } from "express";
import discRepository from "../repositories/discRepository";


async function getDisc(idDisc) {
  return await discRepository.getDisc(idDisc);
}

async function postDisc(teste) {
  return await discRepository.postDisc(teste);
}

async function deleteDisc(idDisc) {
  return await discRepository.deleteDisc(idDisc);
}

export default {
  getDisc,
  postDisc,
  deleteDisc
};
