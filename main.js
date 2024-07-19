const prompt = require("prompt-sync")();
const db = require('./database');
const axios = require('axios');

async function fetchEstados() {
    try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar estados:', error);
        return [];
    }
}

async function main() {
    const estados = await fetchEstados();
    const siglas = estados.map(estado => estado.sigla);
    console.log(siglas);

}

main();




function adicionardestino() {
    while (true) {
        let destino = prompt("Digite o destino desejado (ou 'sair' para encerrar): ");
        if (destino.toLowerCase() === 'sair') {
            console.log("Encerrando o programa...");
            break;
        }

        db.insert({ destino: destino }, (err, newDoc) => {
            if (err) {
                console.error("Erro ao salvar destino:", err);
            } else {
                console.log("Destino salvo com sucesso:", newDoc);
            }
        });
        break;
    }
}

adicionardestino();
module.exports = {main}
