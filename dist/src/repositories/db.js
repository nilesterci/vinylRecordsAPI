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
const mysql = require("mysql2/promise");
const config = require("../config");
function query(sql, params) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield mysql.createConnection(config.db);
        const [results] = yield connection.execute(sql, params);
        return results;
    });
}
function callSpSearch(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield mysql.createConnection(config.db);
        const [results] = yield connection.query("CALL sp_search_programming_languages_by_id(" + id + ")");
        return results;
    });
}
module.exports = {
    query,
    callSpSearch
};
