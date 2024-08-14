"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    //contrutor
    constructor(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }
    //metodos get e set
    getNome() {
        return this.nome;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(_idade) {
        this.idade = _idade;
    }
    //metodos diagramas
    idadePessoa() {
        return this.idade;
    }
    aniversario() {
        this.idade++;
        return this.idade;
    }
    correr() {
        console.log(`${this.nome} está correndo... RUN ${this.nome} RUN`);
    }
}
exports.Pessoa = Pessoa;
//# sourceMappingURL=Pessoa.js.map