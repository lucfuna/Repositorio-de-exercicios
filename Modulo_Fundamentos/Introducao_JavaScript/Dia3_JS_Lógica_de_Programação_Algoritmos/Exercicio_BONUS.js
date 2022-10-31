//Agora vamos trabalhar com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os programas abaixo:

//ITEM 1 - Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
console.log("ITEM 1 - Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:")
console.log("")

let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};
console.log("")
console.log("")
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ITEM 2 - Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
console.log("ITEM 2 - Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:")
console.log("")

let size = 5;
let symbol1 = '*';
let inputLine1 = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine1);
  inputLine1 = inputLine1 + symbol1;
};
console.log("")
console.log("")
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ITEM 3 - Agora, inverta o lado do triângulo. Por exemplo:
console.log("ITEM 3 - Agora, inverta o lado do triângulo. Por exemplo:")
console.log("")

let n2 = 5;
let symbol2 = '*';
let inputLine2 = '';
let inputPosition2 = n2 - 1;

for (let lineIndex = 0; lineIndex < n2; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n2; columnIndex += 1) {
    if (columnIndex < inputPosition2) {
      inputLine2 = inputLine2 + ' ';
    } else {
      inputLine2 = inputLine2 + symbol2;
    }
  }
  console.log(inputLine2);
  inputLine2 = '';
  inputPosition2 -= 1;
};
console.log("")
console.log("")
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ITEM 4 - Depois, faça uma pirâmide com n asteriscos de base:
console.log("ITEM 4 - Depois, faça uma pirâmide com n asteriscos de base:")
console.log("")

let n3 = 15; 
let symbol3 = '*';
let inputLine3 = '';

let midOfMatrix = (n3 + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n3; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine3 = inputLine3 + symbol3;
    } else {
      inputLine3 = inputLine3 + ' ';
    }
  }
  console.log(inputLine3);
  inputLine3 = '';
  controlRight += 1;
  controlLeft -= 1
};
console.log("")
console.log("")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ITEM 5 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
console.log("ITEM 5 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:")
console.log("")

let n4 = 7;
let middle = (n4 + 1) / 2;
let controlLeft4 = middle;
let controlRight4 = middle;
let symbol4 = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine4 = '';
  for (let col = 1; col <= n4; col += 1) {
    if (col == controlLeft4 || col == controlRight4 || line == middle) {
      outputLine4 += symbol4;
    } else {
      outputLine4 += ' ';
    }
  }
  controlLeft4 -= 1;
  controlRight4 += 1;
  console.log(outputLine4);
}
console.log("")
console.log("")



























