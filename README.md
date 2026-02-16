# Desafio-calculadora de Rank

Este projeto cria uma função em JavaScript que calcula o rank de um jogador de partidas ranqueadas.

## Como funciona

- Recebe como parâmetro a quantidade de vitórias e derrotas.
- Calcula o saldo de partidas (vitórias - derrotas).
- Retorna o rank do jogador baseado nas vitórias:
  
  Menor que 10 → Ferro
  11 a 20 → Bronze
  21 a 50 → Prata
  51 a 80 → Ouro
  81 a 90 → Diamante
  91 a 100 → Lendário
  Maior ou igual a 101 → Imortal

## Como usar
1. Abrir o arquivo `calculadora.js`.
2. Chamar a função `calcularRank(vitorias, derrotas)`.
3. O resultado retorna um objeto com `saldo` e `rank`.
