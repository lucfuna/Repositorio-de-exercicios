//declarando a array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ITEM 1 - Percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log("")
console.log("ITEM 1 - Percorra o array imprimindo todos os valores nele contidos com a função console.log()")
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
  }
console.log("")
console.log("")
console.log("")
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ITEM 2 - Some todos os valores contidos no array e imprima o resultado;
console.log("")
console.log("ITEM 2 - Some todos os valores contidos no array e imprima o resultado;")
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

console.log(result);
///////////////////////////////////////////////////////////////////////////////////////

//ITEM 3 - Calcule e imprima a média aritmética dos valores contidos no array;
console.log("")
console.log("ITEM 3 - Calcule e imprima a média aritmética dos valores contidos no array;")
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}

let average = sum / numbers.length;

console.log(average);
//////////////////////////////////////////////////////////////////////////////////////////////////

//ITEM 4 - Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
console.log("")
console.log("ITEM 4 - Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;")
let result1 = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result1 += numbers[index];
}

result1 = result1 / numbers.length;
console.log("")

if (result1 > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ITEM 5 - utilizando for, descubra qual o maior valor contido no array e imprima-o;
console.log("")
console.log("ITEM 5 - utilizando for, descubra qual o maior valor contido no array e imprima-o;")
let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ITEM 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
console.log("")
console.log("ITEM 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;")
let result2 = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result2 += 1;
  }
}

if (result2 === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ITEM 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;
console.log("")
console.log("ITEM 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;")
let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}

console.log(smallestNumber);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ITEM 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado.
console.log("")
console.log("ITEM 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado.")
let numbers_array = [];

for (let index = 1; index <= 25; index += 1) {
  numbers_array.push(index);
}

console.log(numbers_array);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ITEM 9 - Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
console.log("")
console.log("ITEM 9 - Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.")

for (let index = 0; index < numbers_array.length; index += 1) {
    console.log(numbers_array[index] / 2);
  };



