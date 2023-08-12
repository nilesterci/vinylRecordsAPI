export default class Disc {
  id: number;
  name: string;
  cpf: string;

  private static nextId = 1;

  constructor(name: string, cpf: string) {
    this.id = Disc.nextId++;
    this.name = name;
    this.cpf = cpf;
  }
}

export interface Teste {
  id: number;
  name: string;
}
