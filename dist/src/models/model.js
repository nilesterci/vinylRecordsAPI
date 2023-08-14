"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Disc {
    constructor(name, cpf) {
        this.id = Disc.nextId++;
        this.name = name;
        this.cpf = cpf;
    }
}
Disc.nextId = 1;
exports.default = Disc;
