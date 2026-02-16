// Função que calcula o rank
function calcularRank(vitorias, derrotas) {
    // calcula saldo
    let saldo = vitorias - derrotas;
    let rank;

    // estrutura de decisão baseada nas vitórias
    if (vitorias < 10) {
        rank = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        rank = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        rank = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        rank = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        rank = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        rank = "Lendário";
    } else if (vitorias >= 101) {
        rank = "Imortal";
    } else {
        rank = "Rank inválido";
    }

    // retorna um objeto com saldo e rank
    return { saldo: saldo, rank: rank };
}

// Testando a função
let resultado = calcularRank(45, 10);
console.log("Saldo de partidas:", resultado.saldo);
console.log("Rank:", resultado.rank);

// Mais testes
console.log(calcularRank(8, 5));
console.log(calcularRank(105, 20));
