const main = require("./main");
const prompt = require("prompt-sync")();
iniciarPrograma()

function iniciarPrograma() {
  
  console.log("Olá, seja bem-vindo!!!");

  const menu = `
1. Nova viagem
2. Informações Viagem
3. Deletar Viagem
4. Sair
`;

  let opcao;
    console.log(menu);
    opcao = prompt("Digite a opção: ");

    switch (opcao) {
      case "1":
        main.novaViagem();
        break;
      case "2":
        //informacaoViagem();
        break;
      case "3":
        //deletar();
        break;
      case "4":
        console.log("Saindo do programa...");
        break;
      default:
        console.log("Opção inválida, digite de novo!");
    }
}


