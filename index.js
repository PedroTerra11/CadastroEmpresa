import { adicionardestino } from "./main";
const prompt = require("prompt-sync")();

console.log("Ola seja bem vindo!!!")

var menu = `
1. Nova viagem
2. Informações Viagem
3. Deletar Viagem
4. Sair
`
var inicial = prompt("Digite a opção: ")
function iniciarprograma(){
    switch (true) {
        case "1":
            adicionardestino()
            break;
    
        default:
            break;
    }
}