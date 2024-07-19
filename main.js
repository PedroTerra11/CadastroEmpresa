const prompt = require("prompt-sync")();
const db = require('./database');
const axios = require('axios');

var sigla = []

async function fetchEstados() {
    try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar estados:', error);
        return [];
    }
}
async function fetchCidades(){
    try{
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/distritos')
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar cidades: ', error)
        return [];
    }
}

async function main() {
    var estados = await fetchEstados();
    sigla = estados.map(estado => estado.sigla);

}

async function novaViagem() {
    await main()
    while (true) {
        console.log(`estados: \n${sigla}`)
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
module.exports = {novaViagem}
