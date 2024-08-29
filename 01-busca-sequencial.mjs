import { nomes } from './data/vetor-nomes.mjs'

function buscaSequencial(vetor, valorBusca) {
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] === valorBusca) return i;
  }
  return -1;
}

console.log('Posição de ALEXANDRE: ', buscaSequencial(nomes, 'ALEXANDRE'))

// const frutas = ["laranja", "maçã", "banana", "melancia", "abacaxi"];

// console.log("Posição de abacaxi: ", buscaSequencial(frutas, "abacaxi"));
// console.log("Posição de melancia: ", buscaSequencial(frutas, "melancia"));
// console.log("Posição de limão: ", buscaSequencial(frutas, "limão"));
