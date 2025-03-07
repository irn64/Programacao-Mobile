// 1
/*

let palavra = "Professor";
let letra = "o";
let mudar = "$";


let maiuscula = palavra.toUpperCase();
let minuscula = palavra.toLowerCase();
let reverso = [...palavra].reverse().join('');
let mudou = palavra.replaceAll(letra, mudar);


console.log("Maiúsculas:", maiuscula);
console.log("Minúsculas:", minuscula);
console.log("Invertida:", reverso);
console.log("Substituída:", mudou);
*/

// 2
/*

let num1 = 15;
let num2 = 5;


let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let maior = num1 > num2;


console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("O primeiro número é maior que o segundo?", maior);
*/

// 3
/*

let idade = 70;


if (idade < 18) {
    console.log("Menor de idade");
} else if (idade >= 65) {
    console.log("Idoso");
} else {
    console.log("Maior de idade");
}
*/

// 4
/*
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
*/
// 5 
/*
function calcularValores(numero) {
    const dobro = numero * 2;
    const triplo = numero * 3;
    const quadrado = numero ** 2;
    return { dobro, triplo, quadrado };
}

const numero = 5;
const { dobro, triplo, quadrado } = calcularValores(numero);

console.log(`O dobro de ${numero} é ${dobro}.`);
console.log(`O triplo de ${numero} é ${triplo}.`);
console.log(`O quadrado de ${numero} é ${quadrado}.`);
*/
// 6
/*
function manipularArray(arr, numero) {
    
    arr.push(numero);
    
    arr.shift();
    
    const maiorNumero = Math.max(...arr);
    
    const menorNumero = Math.min(...arr);
    
    return { arr, maiorNumero, menorNumero };
}

let numeros = [10, 20, 30, 40, 50];
const numeroAdicionar = 60;

const resultado = manipularArray(numeros, numeroAdicionar);

console.log(`Array após operações: ${resultado.arr}`);
console.log(`Maior número do array: ${resultado.maiorNumero}`);
console.log(`Menor número do array: ${resultado.menorNumero}`);
*/
// 7
/*
function manipularStrings(arr) {
    
    const maiusculas = arr.map(item => item.toUpperCase());
    
    const comA = arr.filter(item => item.startsWith('A'));
    
    const comprimentos = arr.map(item => item.length);
    
    return { maiusculas, comA, comprimentos };
}

const frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];

const resultado = manipularStrings(frutas);

console.log(`Strings em maiúsculas: ${resultado.maiusculas}`);
console.log(`Strings que começam com 'A': ${resultado.comA}`);
console.log(`Comprimento de cada string: ${resultado.comprimentos}`);
*/
// 8
/*
function manipularPessoa(pessoa, novaPropriedade, propriedadeRemover) {
    
    pessoa[novaPropriedade.nome] = novaPropriedade.valor;
    
    delete pessoa[propriedadeRemover];
    
    const propriedades = Object.keys(pessoa);
    
    return { pessoa, propriedades };
}

let pessoa = { nome: "Carlos", idade: 28, cidade: "São Paulo" };

const resultado = manipularPessoa(pessoa, { nome: "profissao", valor: "Engenheiro" }, "cidade");

console.log("Objeto após operações:", resultado.pessoa);
console.log("Propriedades do objeto:", resultado.propriedades);
*/
