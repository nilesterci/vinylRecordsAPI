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
const mysql = require("mysql2/promise");
const config = require("../config");
const helper = require("../helper");
const db = require("./db");
const discs = [];
function getDisc(idDisc, page = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        const offset = helper.getOffset(page, config.listPerPage);
        let filter = idDisc ? ` where id = ${idDisc} ` : ``;
        let sql = `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
  FROM teste ${filter} LIMIT ${offset},${config.listPerPage}`;
        const rows = yield db.query(sql);
        const data = helper.emptyOrRows(rows);
        const meta = { page };
        return {
            data,
            meta,
        };
    });
}
function postDisc(teste) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield db.query(`INSERT INTO teste 
      (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
      VALUES 
      ('${teste.name}', ${(_a = teste.released_year) !== null && _a !== void 0 ? _a : null}, ${(_b = teste.githut_rank) !== null && _b !== void 0 ? _b : null}, ${(_c = teste.pypl_rank) !== null && _c !== void 0 ? _c : null}, ${(_d = teste.tiobe_rank) !== null && _d !== void 0 ? _d : null})`);
        let message = "Error";
        if (result.affectedRows) {
            message = "Adicionado com sucesso";
        }
        return { message };
    });
}
exports.default = {
    getDisc,
    postDisc,
};
