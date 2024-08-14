"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importar a classe que quero utilizar
const Pessoa_1 = require("./Pessoa");
//instanciar(criar objeto)
const pessoa1 = new Pessoa_1.Pessoa('Felisberto', 25);
const pessoa2 = new Pessoa_1.Pessoa('Maria', 21);
console.log(pessoa1.aniversario());
console.log(pessoa2.correr());
//# sourceMappingURL=testePessoa.js.map